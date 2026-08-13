import type { CodeExample } from "./types";

export const EXAMPLES_ESTRUCTURAS: Record<string, CodeExample[]> = {
  condicionales: [
    {
      title: "If - Else Básico",
      filename: "if_else.py",
      level: "beginner",
      code: `# Condicional básico
edad = 20

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# Con elif
nota = 75

if nota >= 70:
    print("Aprobado - Excelente")
elif nota >= 60:
    print("Aprobado - Bueno")
elif nota >= 50:
    print("Aprobado - Aceptable")
else:
    print("Reprobado")`,
    },
    {
      title: "Operadores Lógicos en If",
      filename: "logical_if.py",
      level: "beginner",
      code: `edad = 20
tiene_entrada = True

# and
if edad >= 18 and tiene_entrada:
    print("Puedes entrar")

# or
if edad < 18 or not tiene_entrada:
    print("No puedes entrar")

# not
if not tiene_entrada:
    print("Necesitas entrada")`,
    },
    {
      title: "Match (Python 3.10+)",
      filename: "match.py",
      level: "intermediate",
      code: `# Match en lugar de switch

def estado_http(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500:
            return "Server Error"
        case _:
            return "Unknown"

print(estado_http(200))
print(estado_http(404))

# Con patrones
def describe(punto):
    match punto:
        case (0, 0):
            return "Origen"
        case (x, 0):
            return f"Eje X: {x}"
        case (0, y):
            return f"Eje Y: {y}"
        case (x, y):
            return f"Punto ({x}, {y})"

print(describe((0, 0)))
print(describe((5, 0)))`,
    },
    {
      title: "Operador Ternario",
      filename: "ternary.py",
      level: "intermediate",
      code: `edad = 20

# formula: valor_si_true if condicion else valor_si_false
resultado = "mayor" if edad >= 18 else "menor"
print(resultado)

# Anidado
nota = 85
calificacion = "A" if nota >= 90 else "B" if nota >= 80 else "C" if nota >= 70 else "F"
print(calificacion)

# Con listas
numeros = [1, 2, 3, 4, 5]
pares = [n for n in numeros if n % 2 == 0]
print(pares)`,
    },
  ],
  for: [
    {
      title: "For Básico",
      filename: "for_basico.py",
      level: "beginner",
      code: `# For básico con range
print("Range(5):")
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Range con inicio y fin
print("\nRange(2, 6):")
for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

# Range con paso
print("\nRange(0, 10, 2):")
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Iterar lista
nombres = ["Ana", "Luis", "Maria"]
for nombre in nombres:
    print(f"Hola {nombre}")`,
    },
    {
      title: "Enumerate",
      filename: "enumerate.py",
      level: "beginner",
      code: `# enumerate - obtiene índice y valor
frutas = ["manzana", "banano", "uva"]

for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

# Con inicio customizado
for i, fruta in enumerate(frutas, 1):
    print(f"{i}. {fruta}")

# Enumerate con lista de tuplas
numeros = [10, 20, 30]
for i, num in enumerate(numeros):
    print(f"Índice {i}: {num} (doble: {num*2})")`,
    },
    {
      title: "Zip",
      filename: "zip.py",
      level: "intermediate",
      code: `# zip - iterar múltiples listas
nombres = ["Ana", "Luis", "Maria"]
notas = [85, 90, 78]

for nombre, nota in zip(nombres, notas):
    print(f"{nombre}: {nota}")

# Combinar con enumerate
for i, (nombre, nota) in enumerate(zip(nombres, notas)):
    print(f"{i+1}. {nombre}: {nota}")

# Convertir a diccionario
diccionario = dict(zip(nombres, notas))
print(diccionario)`,
    },
    {
      title: "Iterar Diccionarios",
      filename: "for_dict.py",
      level: "intermediate",
      code: `persona = {"nombre": "Carlos", "edad": 25, "ciudad": "Madrid"}

# Iterar claves
for clave in persona:
    print(clave)

# Iterar valores
for valor in persona.values():
    print(valor)

# Iterar pares (clave, valor)
for clave, valor in persona.items():
    print(f"{clave}: {valor}")`,
    },
    {
      title: "For con Else",
      filename: "for_else.py",
      level: "intermediate",
      code: `# else en for se ejecuta al terminar
for i in range(3):
    print(i)
else:
    print("Bucle completado")

# Útil para búsqueda
numeros = [2, 4, 6, 8, 10]

for n in numeros:
    if n == 7:
        print("Encontrado!")
        break
else:
    print("No encontrado")`,
    },
  ],
  while: [
    {
      title: "While Básico",
      filename: "while.py",
      level: "beginner",
      code: `# While básico
contador = 0

while contador < 5:
    print(contador)
    contador += 1

print("Fin del bucle")

# While con condición
contraseña = ""
while contraseña != "python":
    contraseña = input("Contraseña: ")
    if contraseña != "python":
        print("Incorrecto")
print("¡Correcto!")`,
    },
    {
      title: "Break y Continue",
      filename: "break_continue.py",
      level: "beginner",
      code: `# break - sale del bucle
for i in range(10):
    if i == 3:
        break
    print(i)

print("---")

# continue - salta la iteración
for i in range(5):
    if i == 2:
        continue
    print(i)

# Ejemplo práctico: buscar en lista
numeros = [1, 2, 3, 4, 5]
buscado = 3
for n in numeros:
    if n == buscado:
        print(f"Encontrado: {n}")
        break
else:
    print("No encontrado")`,
    },
    {
      title: "While True con Break",
      filename: "while_true.py",
      level: "intermediate",
      code: `# While True con BREAK
while True:
    opcion = input("1. Salir, 2. Continuar: ")

    if opcion == "1":
        print("Saliendo...")
        break
    elif opcion == "2":
        print("Continuando...")
    else:
        print("Opción inválida")

# Con banderas (flags)
secreto = 42
intentos = 0
encontrado = False

while intentos < 3:
    intento = int(input("Adivina: "))
    intentos += 1

    if intento == secreto:
        encontrado = True
        break

    if intento < secreto:
        print("Mayor")
    else:
        print("Menor")

if encontrado:
    print(f"¡Acertaste en {intentos} intentos!")
else:
    print("Perdiste")`,
    },
  ],
  funciones: [
    {
      title: "Funciones Básicas",
      filename: "funciones.py",
      level: "beginner",
      code: `# Definir función
def saludar(nombre):
    return f"Hola {nombre}!"

print(saludar("Carlos"))

# Parámetro con valor por defecto
def saludar(nombre="Amigo"):
    return f"Hola {nombre}!"

print(saludar())
print(saludar("Ana"))

# Sin return (None)
def greet(nombre):
    print(f"Hola {nombre}")

resultado = greet("Mundo")
print(resultado)  # None`,
    },
    {
      title: "Return Múltiple",
      filename: "return.py",
      level: "beginner",
      code: `# Return múltiple (tupla)
def operaciones(a, b):
    return a + b, a - b, a * b, a / b

resultado = operaciones(10, 5)
print(resultado)  # (15, 5, 50, 2.0)

# Desempaquetar
suma, resta, producto, division = operaciones(10, 5)
print(f"Suma: {suma}")
print(f"Resta: {resta}")

# Return temprano
def encontrar(lista, objetivo):
    for i, valor in enumerate(lista):
        if valor == objetivo:
            return i
    return -1

print(encontrar([1, 2, 3], 2))`,
    },
    {
      title: "*args y **kwargs",
      filename: "args_kwargs.py",
      level: "intermediate",
      code: `# *args - argumentos variables
def suma(*numeros):
    print(numeros)
    return sum(numeros)

print(suma(1, 2, 3))
print(suma(1, 2, 3, 4, 5))

# **kwargs - argumentos con nombre
def informacion(**datos):
    print(datos)
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

informacion(nombre="Carlos", edad=25)

# Combinar
def completo(req, *args, **kwargs):
    print(f"Requerido: {req}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

completo("importante", 1, 2, 3, nombre="Carlos")`,
    },
    {
      title: "Lambda",
      filename: "lambda.py",
      level: "intermediate",
      code: `# Lambda - funciones anónimas
cuadrado = lambda x: x ** 2
print(cuadrado(5))

# Lambda con múltiples argumentos
suma = lambda a, b: a + b
print(suma(3, 5))

# Con funciones built-in
numeros = [1, 2, 3, 4, 5]
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)

duplos = list(map(lambda x: x * 2, numeros))
print(duplos)

# Con sorted
palabras = ["banana", "manzana", "uva"]
palabras.sort(key=lambda x: len(x))
print(palabras)`,
    },
    {
      title: "Funciones Anidadas y Closures",
      filename: "nested.py",
      level: "intermediate",
      code: `# Funciones anidadas
def externo():
    print("Externo")

    def interno():
        print("Interno")

    interno()

externo()

# Closure
def multiplicar(por):
    def multipli(num):
        return num * por
    return multipli

duplicar = multiplicar(2)
triplicar = multiplicar(3)

print(duplicar(5))   # 10
print(triplicar(5))  # 15

# Ejemplo práctico
def crear_contador():
    contador = 0
    def incrementar():
        nonlocal contador
        contador += 1
        return contador
    return incrementar

contar = crear_contador()
print(contar())  # 1
print(contar())  # 2
print(contar())  # 3`,
    },
  ],
};
