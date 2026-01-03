

import numpy as np
import os
from time import sleep

player1 = ["🅰️"]
player2 = ["🅱️"]
player3 = ["🅿️"]

race = 20
while race > 0:
    os.system("cls")

    player1_multiple = "  ".join(player1)
    player2_multiple = "  ".join(player2)
    player3_multiple = "  ".join(player3)

    p1 = np.random.choice([True, False], 1)
    p2 = np.random.choice([True, False], 1)
    p3 = np.random.choice([True, False], 1)

    if p1 == True:
        player1.append("🅰️")

    if p2 == True:
        player2.append("🅱️")

    if p3 == True:
        player3.append("🅿️")

    print(
        f"""
{player1_multiple}
{player2_multiple}
{player3_multiple}
"""
    )
    race -= 1
    sleep(1)

# print(p1, p2, p3)
# print(player1, player2, player3)
