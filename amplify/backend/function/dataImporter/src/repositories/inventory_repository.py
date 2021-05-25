from ..models.entities import Inventory
from ..repositories.base_repository import BaseRepository
import os

class InventoryRepository(BaseRepository):

    def __init__(self):
        url = os.environ['dynamodb_url']
        super().__init__(url,'Inventory')


    def Create(self, inventory: Inventory):
        result = super().Create({
            'name': inventory.name
        })
        return result

    def Get(self, id) -> Inventory:
        data = super().Get({ 'id': id})
        return Inventory(data)

    def Update(self, inventory: Inventory):
        key = { 'id': inventory.name }
        up_ex = 'set name=:n, state=:s'
        new_data = {
            ':n': inventory.name,
            ':s': inventory.state
        }
        result = super().Update(key,up_ex,new_data)
        return result

    def Delete(self, inventory: Inventory):
        return super().Delete({ 'id': inventory.id})
