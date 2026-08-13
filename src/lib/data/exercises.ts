import type { Exercise } from "./types";

export const EXERCISES: Exercise[] = [
  { id: 1, title: "Hola Mundo", description: "Imprime 'Hola, Mundo!' en pantalla", difficulty: "beginner", category: "basics", tags: ["print"], hint: "Usa la función print() con un string.", solution: 'print("Hola, Mundo!")' },
  { id: 2, title: "Calculadora Básica", description: "Crea una calculadora con suma, resta, multiplicación y división", difficulty: "beginner", category: "operators", tags: ["input", "int", "float"], hint: "input() devuelve texto; conviértelo con int() o float().", solution: `a = float(input("Número 1: "))
b = float(input("Número 2: "))

print(f"Suma: {a + b}")
print(f"Resta: {a - b}")
print(f"Multiplicación: {a * b}")
print(f"División: {a / b}")` },
  { id: 3, title: "Conversor de Temperatura", description: "Convierte entre Celsius, Fahrenheit y Kelvin", difficulty: "beginner", category: "operators", tags: ["f-strings", "fórmulas"], hint: "F = C * 9/5 + 32 y K = C + 273.15.", solution: `celsius = float(input("Temperatura en °C: "))

fahrenheit = celsius * 9 / 5 + 32
kelvin = celsius + 273.15

print(f"{celsius}°C = {fahrenheit:.1f}°F")
print(f"{celsius}°C = {kelvin:.1f}K")` },
  { id: 4, title: "Par o Impar", description: "Determina si un número es par o impar", difficulty: "beginner", category: "conditionals", tags: ["módulo", "%"], hint: "Si n % 2 == 0 el número es par.", solution: `n = int(input("Número: "))

if n % 2 == 0:
    print("Es par")
else:
    print("Es impar")` },
  { id: 5, title: "Calculadora de Notas", description: "Calcula promedio y determina aprobación (nota >= 70)", difficulty: "beginner", category: "conditionals", tags: ["if", "elif", "else"], hint: "Suma las notas y divide por la cantidad.", solution: `n1 = float(input("Nota 1: "))
n2 = float(input("Nota 2: "))
n3 = float(input("Nota 3: "))

promedio = (n1 + n2 + n3) / 3

print(f"Promedio: {promedio:.1f}")
if promedio >= 70:
    print("Aprobado")
else:
    print("Reprobado")` },
  { id: 6, title: "Generador de Tablas", description: "Imprime la tabla de multiplicar de un número", difficulty: "beginner", category: "loops", tags: ["for", "range"], hint: "Itera de 1 a 10 con range(1, 11).", solution: `n = int(input("Tabla del: "))

for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")` },
  { id: 7, title: "Contador con FOR", description: "Itera y calcula el promedio de una lista", difficulty: "beginner", category: "loops", tags: ["for", "sum"], hint: "sum(lista) / len(lista).", solution: `notas = [70, 85, 60, 90, 75]

promedio = sum(notas) / len(notas)
print(f"Promedio: {promedio:.1f}")` },
  { id: 8, title: "Validar Contraseña", description: "Valida que la contraseña tenga al menos 8 caracteres", difficulty: "beginner", category: "conditionals", tags: ["len", "if"], hint: "len(texto) cuenta los caracteres.", solution: `clave = input("Contraseña: ")

if len(clave) >= 8:
    print("Contraseña válida")
else:
    print("Debe tener al menos 8 caracteres")` },
  { id: 9, title: "Lista Inversa", description: "Invierte una lista sin usar reverse()", difficulty: "intermediate", category: "lists", tags: ["for", "append"], hint: "Recorre la lista desde el final con índices negativos.", solution: `lista = [1, 2, 3, 4, 5]
invertida = []

for i in range(len(lista) - 1, -1, -1):
    invertida.append(lista[i])

print(invertida)` },
  { id: 10, title: "Eliminar Duplicados", description: "Elimina elementos duplicados de una lista", difficulty: "intermediate", category: "lists", tags: ["set"], hint: "Convertir a set elimina duplicados.", solution: `numeros = [1, 2, 2, 3, 4, 4, 5]
unicos = list(set(numeros))
print(unicos)

# Manteniendo el orden original
unicos_orden = []
for n in numeros:
    if n not in unicos_orden:
        unicos_orden.append(n)
print(unicos_orden)` },
  { id: 11, title: "Ordenar Lista", description: "Implementa bubble sort para ordenar una lista", difficulty: "intermediate", category: "algorithms", tags: ["for", "while"], hint: "Compara pares adyacentes y los intercambia en varias pasadas.", solution: `numeros = [5, 2, 9, 1, 7]

for i in range(len(numeros)):
    for j in range(len(numeros) - 1 - i):
        if numeros[j] > numeros[j + 1]:
            numeros[j], numeros[j + 1] = numeros[j + 1], numeros[j]

print(numeros)` },
  { id: 12, title: "Contador de Palabras", description: "Cuenta las palabras en un texto", difficulty: "intermediate", category: "strings", tags: ["split", "dict"], hint: "split() separa por espacios; cuenta con un diccionario.", solution: `texto = "python es genial y python es poderoso"

conteo = {}
for palabra in texto.split():
    conteo[palabra] = conteo.get(palabra, 0) + 1

for palabra, cantidad in conteo.items():
    print(f"{palabra}: {cantidad}")` },
  { id: 13, title: "FizzBuzz", description: "Imprime fizzbuzz: múltiplos de 3=fizz, 5=buzz, ambos=fizzbuzz", difficulty: "intermediate", category: "conditionals", tags: ["for", "%"], hint: "Verifica primero el caso de ambos (15).", solution: `for i in range(1, 16):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)` },
  { id: 14, title: "Fibonacci", description: "Genera los primeros N números de Fibonacci", difficulty: "intermediate", category: "algorithms", tags: ["list", "for"], hint: "Cada número es la suma de los dos anteriores.", solution: `n = 10
a, b = 0, 1
fib = []

for _ in range(n):
    fib.append(a)
    a, b = b, a + b

print(fib)` },
  { id: 15, title: "Buscar en Lista", description: "Implementa búsqueda lineal y binaria", difficulty: "intermediate", category: "algorithms", tags: ["for", "while"], hint: "La binaria exige lista ordenada y divide el rango a la mitad.", solution: `def lineal(lista, objetivo):
    for i, valor in enumerate(lista):
        if valor == objetivo:
            return i
    return -1

def binaria(lista, objetivo):
    inicio, fin = 0, len(lista) - 1
    while inicio <= fin:
        medio = (inicio + fin) // 2
        if lista[medio] == objetivo:
            return medio
        elif lista[medio] < objetivo:
            inicio = medio + 1
        else:
            fin = medio - 1
    return -1

print(lineal([1, 3, 5, 7], 5))    # 2
print(binaria([1, 3, 5, 7], 7))   # 3` },
  { id: 16, title: "Gestión de Productos", description: "Crea un CRUD de productos con diccionario", difficulty: "intermediate", category: "dictionaries", tags: ["dict", "create", "read", "update", "delete"], hint: "Usa un diccionario: id -> producto.", solution: `productos = {}

def crear(id, nombre, precio):
    productos[id] = {"nombre": nombre, "precio": precio}

def leer(id):
    return productos.get(id, "No existe")

def actualizar(id, precio):
    if id in productos:
        productos[id]["precio"] = precio

def eliminar(id):
    productos.pop(id, None)

crear(1, "Manzana", 500)
crear(2, "Pan", 350)
actualizar(1, 600)
print(leer(1))
eliminar(2)
print(productos)` },
  { id: 17, title: "Calculadora con Funciones", description: "Implementa calculadora usando funciones", difficulty: "intermediate", category: "functions", tags: ["def", "args", "return"], hint: "Una función por operación.", solution: `def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplica(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: división por cero"
    return a / b

a, b = 10, 3
print(suma(a, b))
print(resta(a, b))
print(multiplica(a, b))
print(divide(a, b))` },
  { id: 18, title: "Calculadora con Lambda", description: "Crea calculadora usando lambdas", difficulty: "intermediate", category: "functions", tags: ["lambda"], hint: "Un diccionario de operaciones con lambdas.", solution: `operaciones = {
    "+": lambda a, b: a + b,
    "-": lambda a, b: a - b,
    "*": lambda a, b: a * b,
    "/": lambda a, b: a / b if b != 0 else "Error",
}

a, b = 10, 3
for simbolo, op in operaciones.items():
    print(f"{a} {simbolo} {b} = {op(a, b)}")` },
  { id: 19, title: "Clase Persona", description: "Crea una clase Persona con atributos y métodos", difficulty: "advanced", category: "poo", tags: ["class", "__init__", "self"], hint: "__init__ recibe los atributos y los asigna con self.", solution: `class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def presentarse(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años"

    def cumpleanios(self):
        self.edad += 1

p = Persona("Ana", 20)
print(p.presentarse())
p.cumpleanios()
print(p.presentarse())` },
  { id: 20, title: "Herencia Animal", description: "Implementa jerarquía animal con clases", difficulty: "advanced", category: "poo", tags: ["class", "inheritance"], hint: "Clase base Animal con método hacer_sonido sobreescrito.", solution: `class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        return "..."

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau!"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau!"

animales = [Perro("Fido"), Gato("Michi")]
for a in animales:
    print(f"{a.nombre}: {a.hacer_sonido()}")` },
  { id: 21, title: "Manejo de Errores", description: "Maneja errores con try/except en operaciones", difficulty: "advanced", category: "exceptions", tags: ["try", "except", "finally"], hint: "Captura ZeroDivisionError y ValueError por separado.", solution: `try:
    a = float(input("Número 1: "))
    b = float(input("Número 2: "))
    print(f"Resultado: {a / b}")
except ZeroDivisionError:
    print("No se puede dividir por cero")
except ValueError:
    print("Ingresa un número válido")
finally:
    print("Operación finalizada")` },
  { id: 22, title: "Leer Archivo CSV", description: "Lee y muestra datos de un archivo CSV", difficulty: "advanced", category: "files", tags: ["csv", "open"], hint: "Usa csv.reader o DictReader con with open().", solution: `import csv

with open("datos.csv", "r", encoding="utf-8") as archivo:
    lector = csv.DictReader(archivo)
    for fila in lector:
        print(f"{fila['Nombre']} - {fila['Edad']} años")` },
  { id: 23, title: "Decorador de Tiempo", description: "Crea decorador para medir tiempo de ejecución", difficulty: "advanced", category: "decorators", tags: ["decorator", "time"], hint: "Usa time.perf_counter() antes y después de la función.", solution: `import time
from functools import wraps

def medir_tiempo(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        inicio = time.perf_counter()
        resultado = func(*args, **kwargs)
        print(f"{func.__name__} tardó {time.perf_counter() - inicio:.4f}s")
        return resultado
    return wrapper

@medir_tiempo
def operacion():
    time.sleep(0.5)
    return 42

print(operacion())` },
  { id: 24, title: "Generador de Números", description: "Crea generador para números pares", difficulty: "advanced", category: "generators", tags: ["yield"], hint: "yield cada número par hasta un límite.", solution: `def pares(limite):
    n = 0
    while n <= limite:
        yield n
        n += 2

for p in pares(10):
    print(p)

print(list(pares(10)))` },
  { id: 25, title: "Validación con Regex", description: "Valida emails y teléfonos con regex", difficulty: "advanced", category: "regex", tags: ["re", "match"], hint: "Patrones: ^[\\w.-]+@[\\w.-]+\\.\\w+$ para email.", solution: `import re

def validar_email(email):
    patron = r"^[\\w.-]+@[\\w.-]+\\.\\w+$"
    return bool(re.match(patron, email))

def validar_telefono(tel):
    patron = r"^\\+?\\d{9,12}$"
    return bool(re.match(patron, tel))

print(validar_email("carlos@correo.com"))   # True
print(validar_email("carlos@@correo.com"))  # False
print(validar_telefono("+56912345678"))     # True` },
  { id: 26, title: "Palíndromo", description: "Verifica si una palabra se lee igual al revés", difficulty: "beginner", category: "strings", tags: ["slicing", "lower"], hint: "Compara texto con texto[::-1].", solution: `palabra = input("Palabra: ").lower()
limpia = palabra.replace(" ", "")

if limpia == limpia[::-1]:
    print("Es palíndromo")
else:
    print("No es palíndromo")` },
  { id: 27, title: "Números Primos", description: "Determina si un número es primo", difficulty: "intermediate", category: "algorithms", tags: ["for", "%", "math"], hint: "Solo divide hasta la raíz cuadrada del número.", solution: `import math

def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

print(es_primo(17))  # True
print(es_primo(18))  # False
print([n for n in range(2, 30) if es_primo(n)])` },
  { id: 28, title: "Adivina el Número", description: "Juego donde la computadora adivina un número con pistas", difficulty: "intermediate", category: "loops", tags: ["while", "random", "break"], hint: "Usa random.randint() y while True con break.", solution: `import random

secreto = random.randint(1, 100)
intentos = 0

while True:
    intento = int(input("Adivina (1-100): "))
    intentos += 1
    if intento == secreto:
        print(f"¡Correcto en {intentos} intentos!")
        break
    print("Más alto" if intento < secreto else "Más bajo")` },
  { id: 29, title: "Anagramas", description: "Verifica si dos palabras usan las mismas letras", difficulty: "intermediate", category: "strings", tags: ["sorted", "lower"], hint: "sorted() ordena los caracteres; compara ambas.", solution: `def son_anagramas(a, b):
    a = a.lower().replace(" ", "")
    b = b.lower().replace(" ", "")
    return sorted(a) == sorted(b)

print(son_anagramas("roma", "amor"))   # True
print(son_anagramas("hola", "adios"))  # False` },
  { id: 30, title: "Índice de Masa Corporal", description: "Calcula el IMC y clasifica el resultado", difficulty: "beginner", category: "conditionals", tags: ["if", "fórmula"], hint: "IMC = peso / altura².", solution: `peso = float(input("Peso (kg): "))
altura = float(input("Altura (m): "))

imc = peso / altura ** 2
print(f"IMC: {imc:.1f}")

if imc < 18.5:
    print("Bajo peso")
elif imc < 25:
    print("Normal")
elif imc < 30:
    print("Sobrepeso")
else:
    print("Obesidad")` },
  { id: 31, title: "Contar Vocales", description: "Cuenta las vocales de un texto", difficulty: "beginner", category: "strings", tags: ["for", "in"], hint: "Itera cada caracter y verifica si está en 'aeiou'.", solution: `texto = input("Texto: ").lower()
vocales = "aeiou"
conteo = 0

for c in texto:
    if c in vocales:
        conteo += 1

print(f"Vocales: {conteo}")` },
  { id: 32, title: "Registro de Estudiantes", description: "Agrega y consulta estudiantes con sus notas", difficulty: "intermediate", category: "dictionaries", tags: ["dict", "input"], hint: "Lista de diccionarios, o dict nombre -> lista de notas.", solution: `estudiantes = {}

def agregar(nombre, notas):
    estudiantes[nombre] = notas

def promedio(nombre):
    notas = estudiantes.get(nombre)
    if notas is None:
        return None
    return sum(notas) / len(notas)

agregar("Ana", [70, 80, 90])
agregar("Luis", [60, 50, 55])

for nombre in estudiantes:
    print(f"{nombre}: promedio {promedio(nombre):.1f}")` },
  { id: 33, title: "Matriz Transpuesta", description: "Transpone una matriz de 3x3", difficulty: "intermediate", category: "lists", tags: ["anidado", "for"], hint: "T[j][i] = M[i][j] o usa zip(*matriz).", solution: `matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

transpuesta = [[matriz[j][i] for j in range(len(matriz))] for i in range(len(matriz[0]))]

for fila in transpuesta:
    print(fila)` },
  { id: 34, title: "Frecuencia de Caracteres", description: "Cuenta cuántas veces aparece cada carácter", difficulty: "beginner", category: "dictionaries", tags: ["dict", "get"], hint: "conteo[c] = conteo.get(c, 0) + 1.", solution: `texto = input("Texto: ")
frecuencia = {}

for c in texto:
    frecuencia[c] = frecuencia.get(c, 0) + 1

for c, n in sorted(frecuencia.items()):
    print(f"{c!r}: {n}")` },
  { id: 35, title: "Agenda Telefónica", description: "Guarda y busca contactos en un archivo JSON", difficulty: "advanced", category: "files", tags: ["json", "open", "input"], hint: "Carga el JSON al inicio y guárdalo al final.", solution: `import json

archivo = "agenda.json"

def cargar():
    try:
        with open(archivo, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

def guardar(agenda):
    with open(archivo, "w", encoding="utf-8") as f:
        json.dump(agenda, f, indent=2, ensure_ascii=False)

agenda = cargar()
agenda["Carlos"] = "+56 9 1234 5678"
guardar(agenda)
print(agenda)` },
];
