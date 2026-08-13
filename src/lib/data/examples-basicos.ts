import type { CodeExample } from "./types";

export const EXAMPLES_BASICOS: Record<string, CodeExample[]> = {
  variables: [
    {
      title: "Declaración de Variables",
      filename: "variables.py",
      level: "beginner",
      code: `# Variables en Python
# No necesitas especificar el tipo

nombre = "Carlos"        # str (cadena)
edad = 25              # int (entero)
altura = 1.75          # float (decimal)
es_estudiante = True      # bool (booleano)

# Mostrar valores
print(f"Hola, me llamo {nombre}")
print(f"Tengo {edad} años")
print(f"Mido {altura} metros")
print(f"¿Es estudiante? {es_estudiante}")

# Ver tipo de dato
print(type(nombre))
print(type(edad))
print(type(altura))`,
      explanation: "Python infiere el tipo automáticamente. Usa type() para consultarlo.",
    },
    {
      title: "Conversión de Tipos",
      filename: "conversion.py",
      level: "beginner",
      code: `# Casting (conversión de tipos)

# De string a número
numero = int("42")
precio = float("19.99")
print(numero, type(numero))
print(precio, type(precio))

# De número a string
edad = 25
print("Tengo " + str(edad) + " años")

# Booleanos
print(int(True))    # 1
print(int(False))   # 0
print(bool(1))      # True
print(bool(0))       # False
print(bool(""))      # False (string vacío)
print(bool("hola"))  # True`,
    },
    {
      title: "Variables Múltiples",
      filename: "multiple.py",
      level: "beginner",
      code: `# Asignación múltiple
x, y, z = 1, 2, 3
print(x, y, z)

# Mismo valor
a = b = c = 0
print(a, b, c)

# Intercambio
x, y = 10, 20
x, y = y, x  # Sin variable temporal
print(x, y)`,
    },
    {
      title: "Constantes",
      filename: "constants.py",
      level: "beginner",
      code: `# Python no tiene constantes reales
# Por convención, se usan MAYÚSCULAS

PI = 3.14159
GRAVEDAD = 9.81
MAXIMO = 100

print(f"PI: {PI}")
print(f"Gravedad: {GRAVEDAD} m/s²")

# Intentar modificar (funciona, pero mala práctica)
# PI = 3.14  # ¡No hagas esto!`,
    },
  ],
  strings: [
    {
      title: "Métodos Básicos",
      filename: "strings_basicos.py",
      level: "beginner",
      code: `texto = "  Hola Mundo Python  "

# Mayúsculas / minúsculas
print(texto.upper())
print(texto.lower())
print(texto.title())

# Quitar espacios
print(texto.strip())

# Reemplazar
print(texto.replace("Python", "Pitón"))

# Dividir y unir
palabras = texto.split()
print(palabras)
print("-".join(palabras))

# Verificar contenido
print("Hola" in texto)
print(texto.startswith("  Hola"))
print(texto.endswith("Python  "))`,
    },
    {
      title: "Búsqueda y Conteo",
      filename: "strings_busqueda.py",
      level: "beginner",
      code: `texto = "Python es genial, Python es poderoso"

# Contar apariciones
print(texto.count("Python"))       # 2

# Encontrar posición
print(texto.find("genial"))        # 10
print(texto.index("genial"))       # 10 (lanza error si no existe)

# ¿Es número / letra?
print("123".isdigit())     # True
print("abc".isalpha())     # True
print("Hola".isupper())    # False

# Largo y caracteres
print(len(texto))
print(texto[0], texto[-1])  # P , o`,
    },
    {
      title: "Formato de Strings",
      filename: "strings_formato.py",
      level: "beginner",
      code: `nombre = "Ana"
edad = 21

# Formato clásico con %
print("Hola %s, tienes %d años" % (nombre, edad))

# Formato con format()
print("Hola {}, tienes {} años".format(nombre, edad))
print("Hola {n}, tienes {e} años".format(n=nombre, e=edad))

# Alineación y relleno
print(f"{'Python':^20}")
print(f"{'Python':<20}|")
print(f"{'Python':>20}|")
print(f"{3.14159:.2f}")   # 3.14`,
    },
  ],
  fstrings: [
    {
      title: "F-Strings Básicos",
      filename: "fstrings.py",
      level: "beginner",
      code: `nombre = "Carlos"
edad = 25
nota = 4.5

# Interpolación directa
print(f"Hola {nombre}")
print(f"Tienes {edad} años")

# Expresiones dentro de llaves
print(f"Doble de 21 es {21 * 2}")
print(f"Mayor de edad: {edad >= 18}")

# Formato de números
print(f"Nota: {nota:.1f}")        # 4.5
print(f"Porcentaje: {0.85:.1%}")  # 85.0%
print(f"Con separador: {1234567:,}")  # 1,234,567`,
    },
    {
      title: "Alineación y Relleno",
      filename: "fstrings_alineacion.py",
      level: "beginner",
      code: `productos = [("Manzana", 500), ("Uva", 1200), ("Pan", 350)]

# Tabla alineada con f-strings
print(f"{'Producto':<12} {'Precio':>8}")
print("-" * 22)
for nombre, precio in productos:
    print(f"{nombre:<12} $\\{precio:>7,}")

# Centrar texto
titulo = "PYTHON"
print(f"{titulo:^30}")

# Relleno con cero
for i in range(1, 6):
    print(f"archivo_{i:03d}.py")`,
    },
    {
      title: "F-Strings con Fechas",
      filename: "fstrings_fechas.py",
      level: "beginner",
      code: `from datetime import datetime

ahora = datetime.now()
print(f"Fecha: {ahora:%d/%m/%Y}")
print(f"Hora: {ahora:%H:%M:%S}")
print(f"{ahora:%A, %d de %B de %Y}")`,
      explanation: "Dentro de las llaves de un f-string puedes usar formatos como %d/%m/%Y.",
    },
  ],
  operadores: [
    {
      title: "Operadores Aritméticos",
      filename: "arithmetic.py",
      level: "beginner",
      code: `a, b = 10, 3

print(f"a = {a}, b = {b}")
print(f"Suma: {a + b}")           # 13
print(f"Resta: {a - b}")          # 7
print(f"Multiplicación: {a * b}") # 30
print(f"División: {a / b}")      # 3.333...
print(f"División entera: {a // b}")  # 3
print(f"Módulo: {a % b}")         # 1
print(f"Potencia: {a ** b}")      # 1000`,
    },
    {
      title: "Operadores de Comparación",
      filename: "comparison.py",
      level: "beginner",
      code: `a, b = 5, 10

print(a == b)   # False (igual)
print(a != b)   # True (diferente)
print(a < b)    # True (menor)
print(a <= b)   # True (menor o igual)
print(a > b)    # False (mayor)
print(a >= b)   # False (mayor o igual)

# Comparaciones encadenadas
x = 5
print(0 <= x <= 10)  # True`,
    },
    {
      title: "Operadores Lógicos",
      filename: "logical.py",
      level: "beginner",
      code: `a, b = True, False

# and - ambos True
print(True and True)   # True
print(True and False)  # False

# or - al menos uno True
print(True or False)   # True
print(False or False) # False

# not - negación
print(not True)   # False
print(not False)  # True

# short-circuit evaluation
edad = 20
tiene_entrada = True

if edad >= 18 and tiene_entrada:
    print("Puedes entrar")`,
    },
    {
      title: "Operadores de Identidad",
      filename: "identity.py",
      level: "intermediate",
      code: `# is vs ==
# == compara valor
# is compara identidad (mismo objeto en memoria)

lista1 = [1, 2, 3]
lista2 = [1, 2, 3]
lista3 = lista1

print(lista1 == lista2)  # True (mismo contenido)
print(lista1 is lista2)  # False (distintos objetos)
print(lista1 is lista3)  # True (mismo objeto)

# Usar is con None
x = None
print(x is None)     # True
print(x is not None) # False`,
    },
    {
      title: "Operadores de Pertenencia",
      filename: "membership.py",
      level: "intermediate",
      code: `# in y not in

frutas = ["manzana", "pera", "uva"]
print("manzana" in frutas)    # True
print("banano" in frutas)   # False

# En strings
texto = "Hola mundo"
print("Hola" in texto)    # True
print("Python" in texto)   # False

# En diccionarios (solo claves)
persona = {"nombre": "Carlos", "edad": 25}
print("nombre" in persona)   # True
print("ciudad" in persona)   # False`,
    },
  ],
};
