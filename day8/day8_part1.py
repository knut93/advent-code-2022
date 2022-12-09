data = open('input.txt','r').read()
print(data)

lines = [x for x in data.split('\n')]
print(lines)
layer = [list(x) for x in lines]
print(layer)
print(layer[4][4])
for i in range()