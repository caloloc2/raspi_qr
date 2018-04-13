#!/usr/bin/python
#import RPi.GPIO as GPIO
import time
#GPIO.setmode(GPIO.BCM)
#GPIO.setup(2, GPIO.OUT) ## GPIO 2 como salida
#GPIO.setup(3, GPIO.OUT) ## GPIO 3 como salida
#GPIO.setup(4, GPIO.OUT) ## GPIO 4 como salida
#GPIO.setup(17, GPIO.OUT) ## GPIO 17 como salida
#GPIO.setup(27, GPIO.OUT) ## GPIO 27 como salida
#GPIO.setup(22, GPIO.OUT) ## GPIO 22 como salida

def lectura():
	archivo = open("raspi.txt", "r") 
	linea1 = archivo.readline()
	bina = bin(int(linea1))
	binario = bina[2:len(bina)]

	binario_completo = binario.zfill(6)

	bits = list(binario_completo)
	print ("-")
	x=6
	for bit in bits:
		
		if (x==6):
			# led 6
			if (bit=='1'):
				print ("on")
				#GPIO.output(22, True) ## Enciendo el 22
			else:
				print ("off")
				#GPIO.output(22, False) ## Enciendo el 22
		if (x==5):
			# led 5
			if (bit=='1'):
				print ("on")
				#GPIO.output(27, True) ## Enciendo el 27
			else:
				print ("off")
				#GPIO.output(27, False) ## Enciendo el 27
		if (x==4):
			# led 4
			if (bit=='1'):
				print ("on")
				#GPIO.output(17, True) ## Enciendo el 17
			else:
				print ("off")
				#GPIO.output(17, False) ## Enciendo el 17
		if (x==3):
			# led 3
			if (bit=='1'):
				print ("on")
				#GPIO.output(4, True) ## Enciendo el 4
			else:
				print ("off")
				#GPIO.output(4, False) ## Enciendo el 4
		if (x==2):
			# led 2
			if (bit=='1'):
				print ("on")
				#GPIO.output(3, True) ## Enciendo el 3
			else:
				print ("off")
				#GPIO.output(3, False) ## Enciendo el 3
		if (x==1):
			# led 1
			if (bit=='1'):
				print ("on")
				#GPIO.output(2, True) ## Enciendo el 2
			else:
				print ("off")
				#GPIO.output(2, False) ## Enciendo el 2

		x=x-1

while(1):
	lectura()
	time.sleep(1)

	#GPIO.cleanup() ## Hago una limpieza de los GPIO