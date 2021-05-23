from datetime import datetime
from ..models.entities import Equipo
from ..repositories.base_repository import BaseRepository
import os


class EquipoRepository(BaseRepository):

    def __init__(self):
        url = os.environ['dynamodb_url']
        super().__init__(url, 'Equipo-b4rnjyslknbdxnya4onlwi5qum-dev')

    def Create(self, equipo: Equipo):
        result = super().Create({
            'id': equipo.id,
            '__typename': 'Equipo',
            'tipo': equipo.tipo,
            'marca': equipo.marca,
            'modelo': equipo.modelo,
            'serie': equipo.serie,
            'createdAt': datetime.utcnow().isoformat(),
            'updatedAt': datetime.utcnow().isoformat(),
        })
        return result

    def Get(self, id) -> Equipo:
        data = super().Get({'id': id})
        if data is None:
            return None
        return Equipo(**data)

    def Update(self, equipo: Equipo):
        key = {'id': equipo.id}
        up_ex = 'set tipo=:t, marca=:m, #model=:md, serie=:s, updatedAt=:u'
        new_data = {
            ':t': equipo.tipo,
            ':m': equipo.marca,
            ':md': equipo.modelo,
            ':s': equipo.serie,
            ':u': datetime.utcnow().isoformat()
        }
        attrib_name= {
            '#model': 'modelo'
        }
        result = super().Update(key, up_ex, new_data, attrib_name)
        return result

    def Delete(self, equipo: Equipo):
        return super().Delete({'id': equipo.id})
