n = 10
a = [0] * n
print(a)

array = [i for i in range(10)]
print(array)

b = [1,2,3,4]
b.insert(2,5)
print(b)

c = [1,2,3,4,5,5,5]
result_set = {3,5}
result = [i for i in c if i not in result_set]
print(result)