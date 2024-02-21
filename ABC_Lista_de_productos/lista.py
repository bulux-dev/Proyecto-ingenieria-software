class Producto:
    def __init__(self, nombre, valor, desc, cant):
        self.nombre = nombre
        self.valor = valor
        self.desc = desc
        self.cant = cant

c = int(input("cuantos productos ingresara"))

productos = []

for i in range (c):
    print ("producto numero: \n",i+1)
    n = input("nombre del producto: \n")
    vr = int(input("valor del producto: \n"))
    desc = input("descripcion del producto: \n")
    cant = int(input("cantidad del producto: \n"))
    p = Producto (n, vr, desc, cant)
    productos.append(p)

print("=========Listado de productos ========")
for j in range (len(productos)):
    print("nombre: ",productos[j].nombre)
    print("descripcion: ",productos[j].desc)
    print("valor: ",productos[j].valor)
    print("cantidad: ",productos[j].cant)
print("============================================s")