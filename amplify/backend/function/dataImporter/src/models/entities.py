from enum import Enum
from datetime import datetime
from typing import List

class ImportTypes(Enum):
    CLIENT = 'cliente'
    ORDER = 'orden'
    INVENTORY = 'inventario'

class OrdenStatus(Enum):
    EN_PROCESO = 'en_proceso'
    SIN_REVISION = 'sin_revision'
    TERMINADA = 'terminada'
    ENTREGADO = 'entregado'
    CANCELADA = 'cancelada'

class OrdenState:
    status: OrdenStatus
    fecha: datetime
    descripcion: str

    def __init__(self, status, fecha, descripcion = '') -> None:
        self.status = OrdenStatus(status)
        if isinstance(fecha, str):
            self.fecha = datetime.strptime(fecha,'%Y-%m-%dT%H:%M:%S')
        else:
            self.fecha = fecha
        self.descripcion = descripcion


class Client(object):
    id: str
    identidad: str
    nombre: str
    direccion: str
    telefono: str
    correo: str

    def __init__(self, **kargs) -> None:
        self.id = kargs['id']
        self.nombre = kargs['name']
        self.identidad = kargs['identidad']
        self.direccion = kargs['direccion']
        if 'numeroTelefono' in kargs:
            self.telefono = kargs['numeroTelefono']
        if 'correo' in kargs:
            self.correo = kargs['correo']

class Equipo(object):
    id:str
    tipo:str
    marca:str
    modelo:str
    serie: str

    def __init__(self, **kargs):
        if 'id' in kargs:
            self.id = kargs['id']
        else:
            self.id = kargs['serie']
        self.tipo = kargs['tipo']
        self.marca = kargs['marca']
        self.modelo = kargs['modelo']
        self.serie = kargs['serie']

class Order(object):
    id: str
    numero: int
    estados:List[OrdenState]
    clienteId: str
    tallerId: str
    fechaDeFinalizado: datetime
    fechaPrometida: datetime
    garantia: int
    equipo: Equipo

    def __init__(self,**kargs) -> None:
        self.id = kargs['id']
        self.numero = kargs['numero']
        self.clienteId = kargs['clienteID']
        self.tallerId = kargs['tallerID']
        fechaDeFinalizado = kargs['fechaDeFinalizado'] if 'fechaDeFinalizado' in kargs else None
        if isinstance(fechaDeFinalizado, str):
            fechaDeFinalizado = datetime.strptime(fechaDeFinalizado,'%Y-%m-%dT%H:%M:%S')
        self.fechaDeFinalizado = fechaDeFinalizado
        fechaPrometida = kargs['fechaPrometida'] if 'fechaPrometida' in kargs else datetime.utcnow()
        if isinstance(fechaPrometida, str):
            fechaPrometida = datetime.strptime(fechaPrometida,'%Y-%m-%dT%H:%M:%S')
        self.fechaPrometida = fechaPrometida
        if 'equipo' in kargs:
            self.equipo = Equipo(**kargs['equipo'])
        if 'garantia' in kargs:
            self.garantia = kargs['garantia']
        else:
            self.garantia = 0
        if 'estados' in kargs:
            self.estados = [OrdenState(x['status'], x['fecha'], x['descripcion']) for x in kargs['estados']]
        else:
            self.estados = []

class Inventory(object):
    id: str
    name: str
    state:str