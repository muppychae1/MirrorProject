import os
 
 
byteArr = list()
count = 0
path = 'media' +os.sep + 'test.wav' 
f = open(path,"rb")
filecontent = f.read()
byteArr.append(bytearray(filecontent))

print(byteArr.pop())