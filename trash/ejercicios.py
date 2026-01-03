"""
n = 5
[0,1,2,3,4,5]
sum = 15

formula = ( n(n+1) / 2 )
"""
# import numpy as np
# n = 10
# input_array = [0, 5, 3, 7, 9, 1, 2, 6, 10]

# sumatoria = sum(np.arange(n+1))
# input_sumatoria = sum(input_array)

# numero_faltante = sumatoria - input_sumatoria

# print(sumatoria)
# print(input_sumatoria)
# print(numero_faltante)

##############
import numpy as np


def miss_number(n, arr):
    set_full = set(np.arange(n+1))
    set_input = set(arr)
    resp = set_full - set_input
    return print(resp)


# Datos de entrada
n = 10
input_array = [0, 5, 3, 7, 9, 2, 6, 10]

miss_number(n, input_array)
