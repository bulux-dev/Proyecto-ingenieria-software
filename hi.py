import numpy as np
import time
from sympy import init_printing, Matrix
import os
from IPython.display import display
init_printing()

class cuatro_en_linea: 

    def _init_(self):
        print("1.jugador vs cpu")
        print("2.jugador vs jugador")
        seleccion = input("seleccione modo de juego: ")
        seleccion = self.comprobar_seleccion(seleccion)
        self.modo=seleccion+1
        self.tablero = np.zeros((6,7)).astype(int)
        self.opciones = [1,2,3,4,5,6]
        self.columhas_llenas=set()



    def comprobar_seleccion(self, seleccion, columnas_llenas=set()):
        while True: 
            if not seleccion.isdigit():
                seleccion=input("ingresar un numero valido: ")
            elif int(seleccion) - 1 < 0 or int(seleccion) -1 > 6 or int(seleccion)-1 in columnas_llenas:
                seleccion = input(f"seleccion no valida, elige otra: ")
            else: 
                break
        return int(seleccion) - 1




    def comprobar_ganar (self, booleano, cadena):
        #comprobar las filas
        for fila in booleano:
            #al menos 4
            if sum(fila)>=4:
                if sum(fila[:4]) >= 4 or sum(fila[1:5]) >=4 or sum (fila[2:6]) >=4 or sum(fila[3:]) >=4:
                    return True, f'i{cadena} gano! 4 en fila'
        #comprobar columnas
        for fila in booleano.T:
            if sum(fila) >=4:
                if sum(fila[:4]) >=4 or sum(fila[1:5]) >=4 or sum (fila [2:6]) >=4 or sum ( fila [3:])>= 4:
                    return True, f'i{cadena} gano! 4 en columna'
        #comprobar diagonales
        for k in range  (-2,4):
            if sum(np.diag(booleano,k))>=4:
                if sum(np.diag(booleano,k)[:4])>=4 or sum(np.diag(booleano,k)[::-1][:4])>=4:
                    return True, f'i{cadena} gano! 4 en diagonal'
            if sum(np.diag(np.rot90(booleano),k-1))>=4:
                if sum(np.diag(np.rot90(booleano),k-1)[:4])>=4 or sum(np.diag(np.rot90(booleano),k-1)[::-1][:4])>=4:
                    return True, f'i{cadena} gano! 4 en diagonal'
        return False, ''


    def turno(self,jugador,computadora,seleccion=''):
        os.system('clear')
        display(Matrix(self.tablero))
        if not computadora:
            seleccion = input(f"jugador {jugador}, seleccione una columna: ")
            seleccion = self.comprobar_seleccion(seleccion)
        #comprobar si la columna esta llena
        if np.prod(self.tablero[:,seleccion]) !=0:
            #si la computadora escogio columan llena
            self.columnas_llenas.add(seleccion)
            if computadora: 
                self.opciones.remove(seleccion)
                seleccion=np.random.choice(self.opciones)
            else:
                s= input("esta columna esta llena, porfavor seleccion otra: ")
                seleccion = self.comprobar_seleccion(s,columnas_llenas=self.columnas_llenas)

        if sum(self.tablero[:,seleccion]) !=0:
            fila = np.argmax((self.tablero>0)[:,seleccion])-1
        else:
            fila = -1
        if not computadora:
            self.tablero[fila,seleccion]=int(jugador)
        else:
            self.tablero[fila,seleccion] = 3

    def jugar(self):
        while True:
            #j1
            time.sleep(.3)
            self.turno('1',computadora=False,seleccion='')
            win, cadena = self.comprobar_ganar(self.tablero==1,'jugador 1')
            if win:
                time.sleep(.3)
                os.system('clear')
                display(Matrix(self.tablero))
                print(cadena)
                break
            #cpu
            if self.modo ==1:
                time.sleep(.3)
                self.turno('CPU', computadora=True,seleccion=np.random.choice(self.opciones))
                cadena='computadora'
                win, cadena = self.comprobar_ganar(self.tablero==3,cadena)
            #j2
            else: 
                time.sleep(.3)
                self.turno('2',computadora=False,seleccion='')
                cadena='jugador 2'
                win,cadena=self.comprobar_ganar(self.tablero==2,cadena)
            if win:
                time.sleep(.3)
                os.system('clear')
                display(Matrix(self.tablero))
                print(cadena)
                break
        


if _name_ == '_main_':
    cuatro_en_linea().jugar()