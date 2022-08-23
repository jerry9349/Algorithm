n = 10
a = [0] * n
print(a)
# 출력 결과 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

array = [i for i in range(10)]
print(array)
# 출력 결과 : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

b = [1,2,3,4]
b.insert(2,5)
print(b)
# 출력 결과 : [1, 2, 5, 3, 4]

c = [1,2,3,4,5,5,5]
result_set = {3,5}
result = [i for i in result_set]
print(result)
# 출력 결과 : [3, 5]
result = [i for i in c if result_set]
print(result)
# 출력 결과 : [1, 2, 3, 4, 5, 5, 5]
result = [i for i in c if i in result_set]
print(result)
# 출력 결과 : [3, 5, 5, 5]
result = [i for i in c if i not in result_set]
print(result)
# 출력 결과 : [1, 2, 4]
