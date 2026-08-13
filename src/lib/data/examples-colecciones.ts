import type { CodeExample } from "./types";

export const EXAMPLES_COLECCIONES: Record<string, CodeExample[]> = {
  listas: [
    {
      title: "Listas Básicas",
      filename: "listas.py",
      level: "beginner",
      code: `# Listas
frutas = ["manzana", "pera", "uva"]
print(frutas[0])    # primera
print(frutas[-1])   # última

# Modificar
frutas[0] = "banano"
print(frutas)

# Agregar
frutas.append("naranja")
frutas.insert(1, "sandía")
print(frutas)

# Eliminar
frutas.pop()          # último
frutas.remove("pera")
# del frutas[0]
print(frutas)`,
    },
    {
      title: "Métodos de Lista",
      filename: "metodos.py",
      level: "beginner",
      code: `numeros = [3, 1, 4, 1, 5, 9, 2, 6]

# Ordenar
numeros.sort()
print(numeros)

# Ordenar inverso
numeros.sort(reverse=True)
print(numeros)

# Inverso (no modifica)
numeros2 = [1, 2, 3]
numeros2.reverse()
print(numeros2)

# Métodos de conteo
print(numeros.count(1))
print(numeros.index(5))

# Extender
lista1 = [1, 2]
lista2 = [3, 4]
lista1.extend(lista2)
print(lista1)`,
    },
    {
      title: "Slicing",
      filename: "slicing.py",
      level: "beginner",
      code: `# Slicing - obtener sublistas
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numeros[2:5])    # [2, 3, 4]
print(numeros[:3])     # [0, 1, 2]
print(numeros[5:])     # [5, 6, 7, 8, 9]
print(numeros[::2])    # elementos pares
print(numeros[::-1])   # inverso

# Asignar con slicing
numeros[1:3] = [20, 30]
print(numeros)`,
    },
    {
      title: "Copiar Listas",
      filename: "copy.py",
      level: "intermediate",
      code: `# Copiar listas - cuidado!
lista1 = [1, 2, 3]
lista2 = lista1  # Misma referencia!
lista2[0] = 99
print(lista1)  # [99, 2, 3] - también cambió

# Formas correctas
lista1 = [1, 2, 3]

# Copia simple (para objetos inmutables)
lista2 = lista1.copy()
lista2 = list(lista1)
lista2 = lista1[:]

# Copia profunda (para listas anidadas)
import copy
lista1 = [[1, 2], [3, 4]]
lista2 = copy.deepcopy(lista1)`,
    },
  ],
  tuplas: [
    {
      title: "Tuplas Básicas",
      filename: "tuplas.py",
      level: "intermediate",
      code: `# Tuplas - inmutables
punto = (10, 20)
print(punto[0])   # 10
print(punto[-1])    # 20

# unpack
x, y = punto
print(f"x: {x}, y: {y}")

# Tupla de un elemento
tupla = (1,)  # Necesita coma!
print(type(tupla))

# Múltiple retorno (funciones)
def minmax(numeros):
    return min(numeros), max(numeros)

resultado = minmax([1, 2, 3, 4, 5])
print(resultado)`,
    },
    {
      title: "Tuplas vs Listas",
      filename: "tuple_vs_list.py",
      level: "intermediate",
      code: `# Tuplas son inmutables (más eficientes)
import sys

lista = [1, 2, 3, 4, 5]
tupla = (1, 2, 3, 4, 5)

print(sys.getsizeof(lista))  # mayor
print(sys.getsizeof(tupla))  # menor

# namedtuple
from collections import namedtuple

Persona = namedtuple("Persona", ["nombre", "edad"])
carlos = Persona("Carlos", 25)

print(carlos.nombre)
print(carlos.edad)
print(carlos)`,
    },
  ],
  diccionarios: [
    {
      title: "Diccionarios Básicos",
      filename: "diccionarios.py",
      level: "intermediate",
      code: `# Diccionarios
persona = {
    "nombre": "Carlos",
    "edad": 25,
    "ciudad": "Madrid"
}

# Acceder
print(persona["nombre"])
print(persona.get("edad"))
print(persona.get("telefono", "No encontrado"))

# Modificar
persona["edad"] = 26
persona["telefono"] = "123456789"
print(persona)

# Eliminar
del persona["ciudad"]
# persona.pop("ciudad")
print(persona)`,
    },
    {
      title: "Métodos de Diccionario",
      filename: "dict_metodos.py",
      level: "intermediate",
      code: `persona = {"nombre": "Carlos", "edad": 25, "ciudad": "Madrid"}

# Keys, values, items
print(persona.keys())
print(persona.values())
print(persona.items())

# Iterar
for clave in persona:
    print(clave)

for clave, valor in persona.items():
    print(f"{clave}: {valor}")

# Update
persona2 = {"pais": "España", "email": "carlos@mail.com"}
persona.update(persona2)
print(persona)`,
    },
    {
      title: "DefaultDict",
      filename: "defaultdict.py",
      level: "intermediate",
      code: `# DefaultDict
from collections import defaultdict

# int default (0)
conteo = defaultdict(int)
palabras = ["hola", "mundo", "hola", "python", "hola"]

for palabra in palabras:
    conteo[palabra] += 1

print(dict(conteo))

# list default
lista = defaultdict(list)
lista["frutas"].append("manzana")
lista["frutas"].append("banano")
print(dict(lista))

# set default
conjuntos = defaultdict(set)
conjuntos["numeros"].add(1)
conjuntos["numeros"].add(2)
print(dict(conjuntos))`,
    },
  ],
  sets: [
    {
      title: "Sets Básicos",
      filename: "sets.py",
      level: "intermediate",
      code: `# Sets - sin duplicados
frutas = {"manzana", "pera", "uva", "manzana"}
print(frutas)  # {'manzana', 'pera', 'uva'}

# Operaciones
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

print(set1 | set2)  # union {1, 2, 3, 4, 5, 6}
print(set1 & set2)  # intersection {3, 4}
print(set1 - set2)  # difference {1, 2}
print(set1 ^ set2)  # symmetric {1, 2, 5, 6}

# Métodos
print(set1.union(set2))
print(set1.intersection(set2))`,
    },
    {
      title: "Operaciones con Sets",
      filename: "set_operations.py",
      level: "intermediate",
      code: `# Verificar pertenencia
A = {1, 2, 3}
print(1 in A)
print(5 in A)

# Subset y Superset
A = {1, 2}
B = {1, 2, 3}

print(A.issubset(B))  # True
print(B.issuperset(A))  # True

# FrozenSet (inmutable)
fs = frozenset([1, 2, 3])
# fs.add(4)  # Error!`,
    },
  ],
  comprehension: [
    {
      title: "Lista por Comprensión",
      filename: "list_comp.py",
      level: "beginner",
      code: `# Lista por comprensión
cuadrados = [x**2 for x in range(5)]
print(cuadrados)

# Con condición
pares = [x for x in range(10) if x % 2 == 0]
print(pares)

# Anidado
matriz = [[j for j in range(3)] for i in range(3)]
print(matriz)

# Ejemplo práctico
palabras = ["Hola", "Mundo", "Python", "Guía"]
palabras_largas = [p for p in palabras if len(p) > 4]
print(palabras_largas)`,
    },
    {
      title: "Dict por Comprensión",
      filename: "dict_comp.py",
      level: "intermediate",
      code: `# Diccionario por comprensión
cuadrados = {x: x**2 for x in range(5)}
print(cuadrados)

# Filtrar
numeros = {"a": 1, "b": 2, "c": 3, "d": 4}
filtrado = {k: v for k, v in numeros.items() if v > 2}
print(filtrado)

# Invertir
original = {"a": 1, "b": 2}
invertido = {v: k for k, v in original.items()}
print(invertido)

# Combinar con zip
claves = ["nombre", "edad", "ciudad"]
valores = ["Carlos", 25, "Madrid"]
diccionario = dict(zip(claves, valores))
print(diccionario)`,
    },
    {
      title: "Set por Comprensión",
      filename: "set_comp.py",
      level: "intermediate",
      code: `# Set por comprensión
numeros = [1, 2, 2, 3, 4, 4, 5, 5, 5]
unicos = {n for n in numeros}
print(unicos)  # {1, 2, 3, 4, 5}

# Con condición
pares_unicos = {n for n in numeros if n % 2 == 0}
print(pares_unicos)

# map/filter equivalentes
texto = "hola mundo python"
letras = {c for c in texto if c not in "aeiou"}
print(letras)`,
    },
  ],
  random_math: [
    {
      title: "Módulo Random",
      filename: "random.py",
      level: "intermediate",
      code: `import random

# Enteros aleatorios
print(random.randint(1, 10))
print(random.randrange(0, 100, 5))

# Elegir elementos
frutas = ["manzana", "pera", "uva", "naranja"]
print(random.choice(frutas))
print(random.sample(frutas, 2))

# Mezclar (modifica la lista)
numeros = [1, 2, 3, 4, 5]
random.shuffle(numeros)
print(numeros)

# Floats
print(random.random())       # entre 0 y 1
print(random.uniform(1, 10)) # entre 1 y 10

# Semilla para reproducibilidad
random.seed(42)
print(random.randint(1, 100))`,
    },
    {
      title: "Módulo Math",
      filename: "math.py",
      level: "intermediate",
      code: `import math

# Constantes
print(math.pi)      # 3.141592653589793
print(math.e)       # 2.718281828459045

# Redondeos
print(math.floor(3.7))  # 3
print(math.ceil(3.2))   # 4
print(math.trunc(3.7))  # 3

# Potencias y raíces
print(math.pow(2, 10))    # 1024.0
print(math.sqrt(144))     # 12.0
print(math.factorial(5))  # 120

# Trigonometría
print(math.sin(math.radians(90)))  # 1.0

# Máximo común divisor
print(math.gcd(12, 18))   # 6
print(math.lcm(4, 6))     # 12 (3.9+)`,
    },
  ],
};
