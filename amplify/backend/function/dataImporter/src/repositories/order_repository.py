from ..models.entities import Order
from ..repositories.base_repository import BaseRepository
import os

class OrderRepository(BaseRepository):

    def __init__(self):
        url = os.environ['dynamodb_url']
        # TODO: Cambiar nombre de Tabla
        super().__init__(url,'OrdenServicio-b4rnjyslknbdxnya4onlwi5qum-dev')


    def Create(self, order: Order):
        result = super().Create({
            'id': order.id,
            'numero': order.numero,
            'estados': [{'status': x.status.value, 'fecha': x.fecha, 'descripcion': x.descripcion} for x in order.estados],
            'tallerID': order.tallerId,
            'fechaDeFinalizado': order.fechaDeFinalizado,
            'equipo': {order.equipo},
            'clienteID': order.clienteId
        })
        return result

    def Get(self, id) -> Order:
        data = super().Get({ 'id': id})
        return Order(**data)

    def Update(self, order: Order):
        key = { 'id': order.id }
        up_ex = 'set numero=:n, estados=:s, tallerID=:t, fechaDeFinalizado=:f, equipo=:e, cliente=:c'
        new_data = {
            ':n': order.numero,
            ':s': [{'status': x.status.value, 'fecha': x.fecha, 'descripcion': x.descripcion} for x in order.estados],
            ':t': order.tallerId,
            ':f': order.fechaDeFinalizado,
            ':e': {order.equipo},
            ':c': {order.cliente}
        }
        result = super().Update(key,up_ex,new_data)
        return result

    def Delete(self, order: Order):
        return super().Delete({ 'id': order.id})
