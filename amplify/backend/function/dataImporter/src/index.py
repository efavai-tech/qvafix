from datetime import datetime, timedelta
import json
import os
import base64
import csv
from .repositories.inventory_repository import InventoryRepository
from .repositories.order_repository import OrderRepository
from .repositories.client_repository import ClientRepository
from .models.entities import Client, ImportTypes, Inventory, Order, OrdenStatus

def handler(event, context):
    """Servicio de Importacion de datos

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """
    try:
        body = json.loads(event['body'])
        env = os.environ['Environment'] if "Environment" in os.environ.keys() else None
        xlsx_file = base64.b64decode(body['file'])
        type = ImportTypes(body['type'])
        taller_id = body['tallerId']
        with open('data.csv', 'wb') as writer:
            writer.write(xlsx_file)
        with open('data.csv', newline='') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=';', quotechar='|')
            index = 0
            client_repo = ClientRepository()
            order_repo = OrderRepository()
            inventory_repo = InventoryRepository()
            for row in spamreader:
                if index != 0:
                    data = {
                            'tallerID': taller_id
                        }
                    if type == ImportTypes.CLIENT:
                        data['id']= '{}-{}'.format(taller_id,row[0])
                        data['name']= row[1]
                        data['identidad']= row[2]
                        data['direccion']= '{}, {}, {}'.format(row[3],row[4],row[5])
                        data['numeroTelefono']= '{}'.format(row[6] )
                        data['correo']= row[8]
                        client = Client(**data)
                        if client_repo.Get(client.id) is not None:
                            client_repo.Update(client)
                        else:
                            client_repo.Create(client)
                    elif type == ImportTypes.ORDER:
                        estado = row[2]
                        fecha_recepcion = datetime.strptime(row[3],'%d/%m/%Y') if row[3] != '' else datetime.utcnow()
                        fecha_prometida = datetime.strptime(row[4],'%d/%m/%Y') if row[4] != '' else fecha_recepcion + timedelta(days=5)
                        fecha_entrega = datetime.strptime(row[5],'%d/%m/%Y') if row[5] != '' else None
                        fecha_terminado = datetime.strptime(row[6],'%d/%m/%Y') if row[6] != '' else None
                        garantia = int(row[7]) if row[7] != '' else 0
                        data['id']= '{}-{}'.format(taller_id,row[0])
                        data['clienteID'] = '{}-{}'.format(taller_id,row[1])
                        data['fechaDeFinalizado'] = fecha_terminado
                        data['fechaPrometida'] = fecha_prometida
                        data['numero'] = data['id']
                        data['garantia'] = garantia
                        data['equipo'] = {
                            'tipo': row[8],
                            'marca': row[10],
                            'modelo': row[11],
                            'serie': row[9]
                        }
                        estados = []
                        # Llenando estados
                        if fecha_recepcion is not None:
                            estados.append({
                                'status': OrdenStatus.EN_PROCESO,
                                'fecha': fecha_recepcion,
                                'descripcion': '',
                            })
                        if fecha_terminado is not None:
                            estados.append({
                                'status': OrdenStatus.TERMINADA,
                                'fecha': fecha_terminado,
                                'descripcion': '',
                            })
                        if fecha_entrega is not None:
                            estados.append({
                                'status': OrdenStatus.ENTREGADO,
                                'fecha': fecha_entrega,
                                'descripcion': '',
                            })
                        if estado == 'cancelada':
                            estados.append({
                                'status': OrdenStatus.CANCELADA,
                                'fecha': fecha_terminado,
                                'descripcion': '',
                            })
                        data['estados'] = estados
                        order = Order(**data)
                        if order_repo.Get(order.id) is not None:
                            order_repo.Update(order)
                        else:
                            order_repo.Create(order)
                    elif type == ImportTypes.INVENTORY:
                        inventory = Inventory(**data)
                        inventory_repo.Create(inventory)
                index+=1
        result = { 'Status': True }
        return {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": True,
            },
            "statusCode": 200,
            "body": json.dumps(result)
        }
    except Exception as err:
        print(str(err))
        return {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": True,
            },
            "statusCode": 500,
            "body": json.dumps({'Error': str(err)})
        }
