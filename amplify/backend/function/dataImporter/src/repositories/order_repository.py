from datetime import datetime
from amplify.backend.function.dataImporter.src.repositories.equipo_repository import EquipoRepository
from ..models.entities import Equipo, Order
from ..repositories.base_repository import BaseRepository
import os

class OrderRepository(BaseRepository):

    _equipo_repo: EquipoRepository

    def __init__(self):
        url = os.environ['dynamodb_url']
        # TODO: Cambiar nombre de Tabla
        self._equipo_repo = EquipoRepository()
        super().__init__(url,'OrdenServicio-b4rnjyslknbdxnya4onlwi5qum-dev')


    def Create(self, order: Order):
        result = self._equipo_repo.Create(order.equipo)
        if not result:
            return result
        result = super().Create({
            'id': order.id,
            '__typename': 'OrdenServicio',
            'numero': order.numero,
            'estados': [{'status': x.status.value, 'fecha': x.fecha.isoformat(), 'descripcion': x.descripcion} for x in order.estados],
            'tallerID': order.tallerId,
            'fechaDeFinalizado': order.fechaDeFinalizado.isoformat() if order.fechaDeFinalizado is not None else None,
            'fechaPrometida': order.fechaPrometida.isoformat(),
            'garantia': order.garantia,
            'equipoID': order.equipo.id,
            'clienteID': order.clienteId,
            'createdAt': datetime.utcnow().isoformat(),
            'updatedAt': datetime.utcnow().isoformat(),
        })
        return result

    def Get(self, id) -> Order:
        data = super().Get({ 'id': id})
        if data is None:
            return None
        order = Order(**data)
        if 'equipoID' in data:
            equipo = self._equipo_repo.Get({ 'id': data['equipoID']})
            order.equipo = equipo
        return order

    def Update(self, order: Order):
        key = { 'id': order.id }
        up_ex = 'set #number=:n, estados=:s, tallerID=:t, fechaDeFinalizado=:f,fechaPrometida=:fp,garantia=:g, equipoID=:e, clienteID=:c, updatedAt=:u'
        new_data = {
            ':n': order.numero,
            ':s': [{'status': x.status.value, 'fecha': x.fecha.isoformat(), 'descripcion': x.descripcion} for x in order.estados],
            ':t': order.tallerId,
            ':f': order.fechaDeFinalizado.isoformat() if order.fechaDeFinalizado is not None else None,
            ':fp': order.fechaPrometida.isoformat(),
            ':g': order.garantia,
            ':e': order.equipo.id,
            ':c': order.clienteId,
            ':u': datetime.utcnow().isoformat()
        }
        attrib_name= {
            '#number': 'numero'
        }
        if self._equipo_repo.Get(order.equipo.id) is not None:
            result = self._equipo_repo.Update(order.equipo)
        else:
            result = self._equipo_repo.Create(order.equipo)
        if not result:
            return result
        result = super().Update(key,up_ex,new_data, attrib_name)
        return result

    def Delete(self, order: Order):
        result = self._equipo_repo.Delete(order.equipo)
        if not result:
            return result
        result = super().Delete({ 'id': order.id})
        if not result:
            self._equipo_repo.Create(order.equipo)
        return result
