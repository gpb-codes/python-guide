import type { CodeExample } from "./types";

export const EXAMPLES_MODULOS: Record<string, CodeExample[]> = {
  modulos: [
    {
      title: "Importar Módulos",
      filename: "import.py",
      level: "intermediate",
      code: `# Importar completo
import math

print(math.sqrt(16))
print(math.pi)
print(math.floor(3.7))

# Importar específico
from math import sqrt, pi
print(sqrt(25))
print(pi)

# Importar con alias
import math as m
print(m.sin(m.pi/2))

# Importar todo (no recomendado)
from math import *
print(cos(0))`,
    },
    {
      title: "Módulos Estándar",
      filename: "standard.py",
      level: "intermediate",
      code: `# datetime
from datetime import datetime

ahora = datetime.now()
print(ahora)
print(ahora.strftime("%Y-%m-%d"))

# random
import random
print(random.randint(1, 10))
print(random.choice(["a", "b", "c"]))
numeros = [1, 2, 3]
random.shuffle(numeros)
print(numeros)

# json
import json
data = {"nombre": "Carlos"}
json_str = json.dumps(data)
print(json.loads(json_str))

# os
import os
print(os.getcwd())
print(os.listdir("."))`,
      explanation: "random.shuffle() modifica la lista y retorna None; no debe usarse dentro de print().",
    },
    {
      title: "Crear Módulo",
      filename: "modulo.py",
      level: "intermediate",
      code: `# modulo.py (archivo)
def saludar(nombre):
    return f"Hola {nombre}!"

if __name__ == "__main__":
    print(saludar("Mundo"))

# main.py
from modulo import saludar
print(saludar("Carlos"))

# __init__.py para paquete
# mi_paquete/
#   __init__.py
#   modulo1.py
#   modulo2.py`,
    },
    {
      title: "Módulo OS",
      filename: "os.py",
      level: "intermediate",
      code: `import os
import shutil

# Directorio actual
print(os.getcwd())

# Crear carpeta
if not os.path.exists("mi_carpeta"):
    os.mkdir("mi_carpeta")

# Listar archivos
print(os.listdir("."))

# Ruta de un archivo
print(os.path.join("mi_carpeta", "archivo.txt"))
print(os.path.exists("mi_carpeta"))
print(os.path.isdir("mi_carpeta"))

# Variables de entorno
print(os.environ.get("USERNAME", "desconocido"))

# Copiar y mover
shutil.copy("archivo.txt", "copia.txt")`,
    },
  ],
  pip_venv: [
    {
      title: "Pip Básico",
      filename: "pip.py",
      level: "intermediate",
      code: `# Instalar paquete
# pip install requests

# Instalar versión específica
# pip install requests==2.31.0

# Ver paquetes instalados
# pip list

# Información de un paquete
# pip show requests

# Actualizar
# pip install --upgrade requests

# Desinstalar
# pip uninstall requests

# Guardar dependencias
# pip freeze > requirements.txt

# Instalar desde requirements
# pip install -r requirements.txt`,
      explanation: "Ejecuta estos comandos en la terminal, no en el código Python.",
    },
    {
      title: "Entornos Virtuales",
      filename: "venv.py",
      level: "intermediate",
      code: `# Crear entorno virtual (Windows)
# python -m venv .venv

# Activar (Windows - PowerShell)
# .venv\\Scripts\\activate

# Activar (Windows - CMD)
# .venv\\Scripts\\activate.bat

# Activar (macOS / Linux)
# source .venv/bin/activate

# Salir del entorno
# deactivate

# Ver ruta del Python activo
import sys
print(sys.executable)`,
      explanation: "El entorno virtual aísla las dependencias de cada proyecto.",
    },
    {
      title: "Proyecto Real con venv",
      filename: "proyecto.py",
      level: "intermediate",
      code: `# 1. Crear el proyecto
# mkdir mi_proyecto && cd mi_proyecto

# 2. Crear y activar el entorno
# python -m venv .venv
# source .venv/bin/activate  (o .venv\\Scripts\\activate en Windows)

# 3. Instalar dependencias
# pip install requests

# 4. Guardarlas
# pip freeze > requirements.txt

# 5. Tu código usa las dependencias normalmente
import requests

respuesta = requests.get("https://api.github.com")
print(respuesta.status_code)`,
    },
  ],
  datetime: [
    {
      title: "Datetime Básico",
      filename: "datetime.py",
      level: "intermediate",
      code: `from datetime import datetime, date, time

# Fecha y hora actual
ahora = datetime.now()
print(ahora)

# Fecha actual (solo día/mes/año)
hoy = date.today()
print(hoy)

# Crear fechas manualmente
navidad = date(2026, 12, 25)
cumpleanos = datetime(2000, 5, 15, 10, 30, 0)

# Acceder a componentes
print(ahora.year, ahora.month, ahora.day)
print(ahora.hour, ahora.minute, ahora.second)`,
    },
    {
      title: "Formatear Fechas",
      filename: "strftime.py",
      level: "intermediate",
      code: `from datetime import datetime

ahora = datetime.now()

# Formatear (strftime)
print(ahora.strftime("%d/%m/%Y"))        # 13/08/2026
print(ahora.strftime("%d de %B de %Y"))  # 13 de agosto de 2026
print(ahora.strftime("%H:%M:%S"))        # 14:30:00
print(ahora.strftime("%A"))              # jueves

# Parsear (strptime)
fecha_texto = "25/12/2026"
navidad = datetime.strptime(fecha_texto, "%d/%m/%Y")
print(navidad)

# ISO
print(ahora.isoformat())`,
    },
    {
      title: "timedelta",
      filename: "timedelta.py",
      level: "intermediate",
      code: `from datetime import datetime, timedelta

hoy = datetime.now()

# Sumar y restar tiempo
manana = hoy + timedelta(days=1)
dentro_de_una_semana = hoy + timedelta(weeks=1)
hace_una_hora = hoy - timedelta(hours=1)

print(hoy)
print(manana)
print(dentro_de_una_semana)

# Diferencia entre fechas
navidad = datetime(2026, 12, 25)
dias_restantes = (navidad - hoy).days
print(f"Faltan {dias_restantes} días para Navidad")

# Comparar fechas
print(navidad > hoy)  # True

# Edad a partir de fecha de nacimiento
nacimiento = datetime(2004, 3, 10)
edad = (hoy - nacimiento).days // 365
print(f"Edad aproximada: {edad}")`,
    },
  ],
  typing: [
    {
      title: "Type Hints Básicos",
      filename: "typing.py",
      level: "intermediate",
      code: `# Anotaciones de tipo
edad: int = 25
nombre: str = "Carlos"
precio: float = 19.99
activo: bool = True

# Parámetros y retorno
def saludar(nombre: str) -> str:
    return f"Hola {nombre}"

def sumar(a: int, b: int) -> int:
    return a + b

print(saludar("Ana"))
print(sumar(2, 3))`,
    },
    {
      title: "Tipos Compuestos",
      filename: "typing_compuestos.py",
      level: "intermediate",
      code: `from typing import Optional, List, Dict, Tuple, Union, Any

# Colecciones
def procesar(lista: List[int]) -> int:
    return sum(lista)

def configurar(opciones: Dict[str, Union[str, int]]) -> None:
    print(opciones)

def punto_3d() -> Tuple[float, float, float]:
    return (1.0, 2.0, 3.0)

# Optional = puede ser None
def buscar(lista: List[str], nombre: str) -> Optional[str]:
    return nombre if nombre in lista else None

# Any - cualquier tipo (evitar)
def debug(valor: Any) -> None:
    print(valor)

print(procesar([1, 2, 3]))
print(buscar(["a", "b"], "b"))
print(buscar(["a", "b"], "z"))`,
    },
    {
      title: "Type Hints en Clases",
      filename: "typing_clases.py",
      level: "intermediate",
      code: `from typing import Optional

class Cuenta:
    def __init__(self, saldo_inicial: float = 0.0) -> None:
        self.saldo: float = saldo_inicial
        self.titular: Optional[str] = None

    def depositar(self, monto: float) -> float:
        self.saldo += monto
        return self.saldo

    def set_titular(self, nombre: str) -> None:
        self.titular = nombre

cuenta = Cuenta(1000)
print(cuenta.depositar(500))
cuenta.set_titular("Ana")

# pip install mypy  (verificación estática)
# mypy archivo.py`,
      explanation: "Los type hints no afectan la ejecución: son para herramientas como mypy y para documentar.",
    },
  ],
  itertools: [
    {
      title: "Count, Cycle y Repeat",
      filename: "itertools_basico.py",
      level: "intermediate",
      code: `import itertools

# count - generador infinito
for i in itertools.count(10, 2):
    if i > 20:
        break
    print(i)  # 10, 12, 14, 16, 18, 20

# cycle - repite infinitamente
contador = 0
for color in itertools.cycle(["rojo", "verde", "azul"]):
    print(color)
    contador += 1
    if contador == 6:
        break

# repeat - repite n veces
for x in itertools.repeat("hola", 3):
    print(x)`,
    },
    {
      title: "Combinaciones y Productos",
      filename: "itertools_comb.py",
      level: "intermediate",
      code: `import itertools

letras = ["A", "B", "C"]

# product - producto cartesiano
for p in itertools.product(letras, repeat=2):
    print(p)
# ('A','A'), ('A','B'), ..., ('C','C')

# permutations - todas las permutaciones
for p in itertools.permutations(letras, 2):
    print(p)

# combinations - combinaciones (sin orden)
for c in itertools.combinations(letras, 2):
    print(c)
# ('A','B'), ('A','C'), ('B','C')

# combinations_with_replacement
for c in itertools.combinations_with_replacement(letras, 2):
    print(c)`,
    },
    {
      title: "Chain, Islice y GroupBy",
      filename: "itertools_chain.py",
      level: "intermediate",
      code: `import itertools

# chain - encadenar iterables
numeros = list(itertools.chain([1, 2], [3, 4], [5]))
print(numeros)  # [1, 2, 3, 4, 5]

# islice - cortar iterables
resultado = itertools.islice(range(10), 2, 8, 2)
print(list(resultado))  # [2, 4, 6]

# groupby - agrupar consecutivos
datos = [("A", 1), ("A", 2), ("B", 3), ("B", 4)]
for clave, grupo in itertools.groupby(datos, key=lambda x: x[0]):
    print(clave, list(grupo))

# takewhile / dropwhile
print(list(itertools.takewhile(lambda x: x < 5, [1, 3, 7, 2])))  # [1, 3]
print(list(itertools.dropwhile(lambda x: x < 5, [1, 3, 7, 2])))  # [7, 2]`,
    },
  ],
};
