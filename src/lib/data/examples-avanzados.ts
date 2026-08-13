import type { CodeExample } from "./types";

export const EXAMPLES_AVANZADOS: Record<string, CodeExample[]> = {
  json_api: [
    {
      title: "Trabajar con JSON",
      filename: "json.py",
      level: "advanced",
      code: `import json

# Python -> JSON (serializar)
persona = {
    "nombre": "Carlos",
    "edad": 25,
    "hobbies": ["leer", "programar"],
    "activo": True,
}

json_str = json.dumps(persona, indent=2, ensure_ascii=False)
print(json_str)

# Guardar en archivo
with open("persona.json", "w", encoding="utf-8") as f:
    json.dump(persona, f, indent=2, ensure_ascii=False)

# JSON -> Python (deserializar)
with open("persona.json", "r", encoding="utf-8") as f:
    datos = json.load(f)
print(datos["nombre"], datos["edad"])`,
    },
    {
      title: "Consumir una API",
      filename: "api.py",
      level: "advanced",
      code: `import json
import urllib.request

# API pública de ejemplo (JSONPlaceholder)
url = "https://jsonplaceholder.typicode.com/todos/1"

try:
    with urllib.request.urlopen(url, timeout=10) as respuesta:
        data = json.loads(respuesta.read())
    print(f"Tarea: {data['title']}")
    print(f"Completada: {data['completed']}")
except urllib.error.URLError as e:
    print(f"Error de red: {e}")

# API REST con GET de datos
url = "https://jsonplaceholder.typicode.com/users"
with urllib.request.urlopen(url) as respuesta:
    usuarios = json.loads(respuesta.read())

for usuario in usuarios[:3]:
    print(f"{usuario['name']} - {usuario['email']}")`,
      explanation: "Para APIs más complejas (POST, headers, auth) instala la librería requests.",
    },
  ],
  poo: [
    {
      title: "Clases y Objetos",
      filename: "clases.py",
      level: "advanced",
      code: `# Definir clase
class Persona:
    # Constructor
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    # Método
    def saludar(self):
        return f"Hola, soy {self.nombre}"

    def __str__(self):
        return f"Persona({self.nombre}, {self.edad})"

# Crear objeto
persona = Persona("Carlos", 25)
print(persona.saludar())
print(persona.nombre)
print(persona)`,
    },
    {
      title: "Herencia",
      filename: "herencia.py",
      level: "advanced",
      code: `# Clase base
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def speak(self):
        return "..."

# Clase derivada
class Perro(Animal):
    def speak(self):
        return "Guau!"

class Gato(Animal):
    def speak(self):
        return "Miau!"

perro = Perro("Fido")
print(perro.nombre)
print(perro.speak())

# Herencia múltiple
class Volador:
    def volar(self):
        return "Volando"

class Pato(Animal, Volador):
    def speak(self):
        return "Cuac!"

pato = Pato("Donald")
print(pato.speak())
print(pato.volar())`,
    },
    {
      title: "Super y Polimorfismo",
      filename: "super.py",
      level: "advanced",
      code: `# Super
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

class Empleado(Persona):
    def __init__(self, nombre, edad, salario):
        super().__init__(nombre, edad)
        self.salario = salario

# Polimorfismo
class Animal:
    def hacer_sonido(self):
        pass

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"

animales = [Perro(), Gato()]
for animal in animales:
    print(animal.hacer_sonido())`,
    },
    {
      title: "Encapsulamiento",
      filename: "encapsulamiento.py",
      level: "advanced",
      code: `# Encapsulamiento
class Cuenta:
    def __init__(self, saldo):
        self.__saldo = saldo  # privado (name mangling)

    @property
    def saldo(self):
        return self.__saldo

    @saldo.setter
    def saldo(self, valor):
        if valor >= 0:
            self.__saldo = valor
        else:
            raise ValueError("Saldo no puede ser negativo")

cuenta = Cuenta(1000)
print(cuenta.saldo)
cuenta.saldo = 2000
print(cuenta.saldo)`,
    },
    {
      title: "Métodos de Clase",
      filename: "metodos_clase.py",
      level: "advanced",
      code: `# @classmethod
class Persona:
    contador = 0

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.contador += 1

    @classmethod
    def desde_string(cls, s):
        nombre = s.split(":")[1]
        return cls(nombre)

# @staticmethod
class Calculadora:
    @staticmethod
    def sumar(a, b):
        return a + b

print(Persona.contador)
p = Persona("Carlos")
print(Persona.contador)
print(Calculadora.sumar(2, 3))`,
    },
    {
      title: "Clases Abstractas",
      filename: "abstract.py",
      level: "advanced",
      code: `from abc import ABC, abstractmethod

class Figura(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass

class Rectangulo(Figura):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

    def perimetro(self):
        return 2 * (self.ancho + self.alto)

r = Rectangulo(5, 3)
print(r.area())
print(r.perimetro())`,
    },
  ],
  excepciones: [
    {
      title: "Try - Except",
      filename: "try_except.py",
      level: "advanced",
      code: `# Try - Except básico
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")

# Multiples except
try:
    x = int("hola")
except ValueError:
    print("Valor inválido")
except ZeroDivisionError:
    print("División por cero")

# Capturar todas
try:
    x = 1 / 0
except Exception as e:
    print(f"Error: {e}")`,
    },
    {
      title: "Else y Finally",
      filename: "try_else.py",
      level: "advanced",
      code: `# Else se ejecuta si no hay error
try:
    x = int("10")
except ValueError:
    print("Error")
else:
    print(f"Conversión exitosa: {x}")

# Finally siempre se ejecuta
try:
    archivo = open("archivo.txt", "r")
    contenido = archivo.read()
finally:
    archivo.close()
    print("Archivo cerrado")

# With (recomendado)
with open("archivo.txt") as archivo:
    contenido = archivo.read()`,
    },
    {
      title: "Raise y Excepciones Propias",
      filename: "raise.py",
      level: "advanced",
      code: `# Raise - lanzar excepción
def division(a, b):
    if b == 0:
        raise ValueError("Divisor no puede ser cero")
    return a / b

try:
    resultado = division(10, 0)
except ValueError as e:
    print(e)

# Excepciones personalizadas
class MiError(Exception):
    pass

def validar(edad):
    if edad < 0:
        raise MiError("Edad no puede ser negativa")
    return "Válido"

try:
    validar(-5)
except MiError as e:
    print(e)`,
    },
  ],
  archivos: [
    {
      title: "Leer y Escribir",
      filename: "archivos.py",
      level: "advanced",
      code: `# Escribir
with open("saludo.txt", "w") as archivo:
    archivo.write("Hola mundo\\n")
    archivo.write("Segunda línea")

# Leer
with open("saludo.txt", "r") as archivo:
    for linea in archivo:
        print(linea.strip())

# Append
with open("saludo.txt", "a") as archivo:
    archivo.write("\\nNueva línea")

# Leer todo de una vez
with open("saludo.txt") as archivo:
    contenido = archivo.read()
print(contenido)`,
    },
    {
      title: "CSV",
      filename: "csv.py",
      level: "advanced",
      code: `import csv

# Escribir
with open("datos.csv", "w", newline="", encoding="utf-8") as archivo:
    escritor = csv.writer(archivo)
    escritor.writerow(["Nombre", "Edad"])
    escritor.writerow(["Carlos", 25])
    escritor.writerow(["Ana", 30])

# Leer
with open("datos.csv", "r", encoding="utf-8") as archivo:
    lector = csv.reader(archivo)
    for fila in lector:
        print(fila)

# Con DictReader (nombres de columna)
with open("datos.csv", "r", encoding="utf-8") as archivo:
    for fila in csv.DictReader(archivo):
        print(fila["Nombre"], "-", fila["Edad"])`,
    },
    {
      title: "Archivos JSON",
      filename: "json_file.py",
      level: "advanced",
      code: `import json

# Escribir
data = {"nombre": "Carlos", "edad": 25}
with open("data.json", "w", encoding="utf-8") as archivo:
    json.dump(data, archivo, indent=2, ensure_ascii=False)

# Leer
with open("data.json", "r", encoding="utf-8") as archivo:
    data = json.load(archivo)
    print(data)

# Lista de diccionarios
estudiantes = [
    {"nombre": "Ana", "nota": 6.5},
    {"nombre": "Luis", "nota": 5.0},
]
with open("estudiantes.json", "w", encoding="utf-8") as archivo:
    json.dump(estudiantes, archivo, indent=2, ensure_ascii=False)`,
    },
  ],
  decoradores: [
    {
      title: "Decoradores Básicos",
      filename: "decoradores.py",
      level: "advanced",
      code: `# Decorador básico
def mi_decorador(funcion):
    def wrapper(*args, **kwargs):
        print("Antes")
        result = funcion(*args, **kwargs)
        print("Después")
        return result
    return wrapper

@mi_decorador
def saludar():
    print("Hola!")

saludar()

# Con argumentos
def temporizador(funcion):
    import time
    def wrapper(*args, **kwargs):
        inicio = time.time()
        result = funcion(*args, **kwargs)
        print(f"Tiempo: {time.time() - inicio:.4f}s")
        return result
    return wrapper

@temporizador
def lento():
    import time
    time.sleep(1)

lento()`,
    },
    {
      title: "Decoradores con Args",
      filename: "decorador_args.py",
      level: "advanced",
      code: `# Decorador con parámetros
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def saludar():
    print("Hola!")

saludar()`,
    },
    {
      title: "Functools Wraps",
      filename: "wraps.py",
      level: "advanced",
      code: `from functools import wraps

def mi_decorador(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        """Documentación del wrapper"""
        return func(*args, **kwargs)
    return wrapper

@mi_decorador
def saludar():
    """Saluda al usuario"""
    print("Hola!")

print(saludar.__name__)  # saludar (no wrapper)
print(saludar.__doc__)   # Saluda al usuario`,
    },
  ],
  generadores: [
    {
      title: "Yield",
      filename: "generadores.py",
      level: "advanced",
      code: `# Generador con yield
def contar(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in contar(5):
    print(num)

# Convertir a lista
print(list(contar(3)))

# next
gen = contar(3)
print(next(gen))  # 1
print(next(gen))  # 2
print(next(gen))  # 3
# print(next(gen))  # StopIteration`,
    },
    {
      title: "Generadores vs Listas",
      filename: "gen_vs_list.py",
      level: "advanced",
      code: `# Listas cargan todo en memoria
def squares_list(n):
    return [x**2 for x in range(n)]

# Generadores son lazy (memoria eficiente)
def squares_gen(n):
    for x in range(n):
        yield x**2

import sys

lista = squares_list(1000000)
print(sys.getsizeof(lista))

generador = squares_gen(1000000)
print(sys.getsizeof(generador))`,
    },
    {
      title: "Pipeline de Generadores",
      filename: "pipeline.py",
      level: "advanced",
      code: `# Pipeline de generadores
def leer_numeros():
    for i in range(1, 11):
        yield i

def filtrar_pares(gen):
    for n in gen:
        if n % 2 == 0:
            yield n

def multiplicar(gen, factor):
    for n in gen:
        yield n * factor

# chaining
resultado = multiplicar(filtrar_pares(leer_numeros()), 10)
print(list(resultado))`,
    },
  ],
  regex: [
    {
      title: "Regex Básico",
      filename: "regex.py",
      level: "advanced",
      code: `import re

# search - busca en cualquier parte
texto = "Mi TEL: 12345678"
if re.search(r"\\d{8}", texto):
    print("Teléfono encontrado")

# match - solo desde el inicio
if re.match(r"\\w+", texto):
    print("Empieza con palabra")

# findall - todas las coincidencias
texto = "Tengo 2 gatos y 3 perros"
numeros = re.findall(r"\\d+", texto)
print(numeros)  # ['2', '3']

# sub - reemplazar
texto = "Hola   mundo"
texto_limpio = re.sub(r"\\s+", " ", texto)
print(texto_limpio)`,
      explanation: "Los raw strings (r\"...\") evitan escapar las barras invertidas.",
    },
    {
      title: "Regex Avanzado",
      filename: "regex_avanzado.py",
      level: "advanced",
      code: `import re

# Grupos
texto = "Carlos <carlos@correo.com>"
match = re.search(r"(\\w+) <(.+@.+)>", texto)
if match:
    print(match.group(1))
    print(match.group(2))

# Named groups
match = re.search(r"(?P<nombre>\\w+) (?P<correo><.+@.+>)", texto)
print(match.group("nombre"))
print(match.group("correo"))

# compile - reutilizar patrón
patron = re.compile(r"\\d{4}-\\d{4}")
if patron.match("1234-5678"):
    print("Válido")`,
    },
    {
      title: "Validaciones con Regex",
      filename: "validaciones.py",
      level: "advanced",
      code: `import re

# Email
def validar_email(email):
    patron = r"^[\\w.-]+@[\\w.-]+\\.\\w+$"
    return re.match(patron, email) is not None

# Teléfono
def validar_telefono(tel):
    patron = r"^\\+?\\d{1,3}\\.\\d{9,10}$"
    return re.match(patron, tel) is not None

# URL
def validar_url(url):
    patron = r"^https?://[\\w.-]+(?:/[\\w.-]*)*$"
    return re.match(patron, url) is not None

# RUT chileno (solo formato)
def validar_rut(rut):
    patron = r"^\\d{7,8}-[\\dkK]$"
    return re.match(patron, rut) is not None

print(validar_email("carlos@correo.com"))
print(validar_telefono("+549876543210"))
print(validar_url("https://sitio.com"))
print(validar_rut("12345678-5"))`,
    },
  ],
};
