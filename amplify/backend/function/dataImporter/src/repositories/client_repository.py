from datetime import datetime
from ..models.entities import Client
from ..repositories.base_repository import BaseRepository
import os

class ClientRepository(BaseRepository):

    def __init__(self):
        url = os.environ['dynamodb_url']
        # TODO: Cambiar nombre de Tabla 
        super().__init__(url,'Cliente-b4rnjyslknbdxnya4onlwi5qum-dev')


    def Create(self, client: Client):
        result = super().Create({
            'id': client.id,
            '__typename': 'Cliente',
            'identidad': client.identidad,
            'name': client.nombre,
            'direccion': client.direccion,
            'numeroTelefono': client.telefono,
            'correo': client.correo,
            'createdAt': datetime.utcnow().isoformat(),
            'updatedAt': datetime.utcnow().isoformat(),
        })
        return result

    def Get(self, id) -> Client:
        data = super().Get({ 'id': id})
        if data is None:
            return None
        return Client(**data)

    def Update(self, client: Client):
        key = { 'id': client.id }
        up_ex = 'Set #nombre=:n, identidad=:i, numeroTelefono=:t, correo=:c, updatedAt=:updatedAt'
        new_data = {
            ':n': client.nombre,
            ':i': client.identidad,
            ':t': client.telefono,
            ':updatedAt': datetime.utcnow().isoformat(),
            ':c': client.correo
        }
        attrib_name= {
            '#nombre': 'name'
        }
        result = super().Update(key,up_ex,new_data, attrib_names=attrib_name)
        return result

    def Delete(self, client: Client):
        return super().Delete({ 'id': client.id})
