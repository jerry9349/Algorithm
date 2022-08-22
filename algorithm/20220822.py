###반복문###
# 무한 루프를 조심하자!
x = 10
while x > 5:
  print(x)
  break

# for문
#for 변수 in 리스트:
array = [9,8,7,6,5]
for x in array:
  print(x)

#range() : for문에서 연속적인 값을 차례대로 순회, range(시작 값, 끝 값+1)
result = 0
for i in range(1,10):
  if i % 2 == 0:
    continue
  result += 1

print(result)

scores = [90,85,77,65,97]
cheating_student_list = {2,4}
for i in range(5):
  if i + 1 in cheating_student_list:
    continue
  if scores[i] >= 80:
    print(i+1,"번 학생은 합격입니다.")

#중첩된 반복문
for i in range(2,10):
  for j in range(1,10):
    print(i,"X",j,"=",i*j)
    print()



###함수###
#특정한 작업을 하나의 단위로 묶어 놓음, 불필요한 소스코드 반복 줄임
#매개변수 : 함수 내부에서 사용할 변수
#반환값: 함수에서 처리된 결과를 반환
def add(a,b):
  return a+b
  
def subtract(a,b):
  return a-b

result = add(3,7)
print(result)
#파라미터 변수 직접 지정 가능
result = subtract(b=3,a=7)
print(result)

#global 키워드로 변수를 지정하면 해당 함수에서는 지역 변수를 만들지 않고, 함수 바깥에 선언된 변수를 바로 참조
a = 0
def func():
  global a
  a+=1

for i in range(10):
  func()
# 전역변수 a값을 참조함
print(a)

# 전역변수 array의 내부 메소드 호출은 global 필요없음
array1 = [1,2,3,4,5]
def func1():
  array1.append(6)
  print(array1)
func1()


#파이썬 함수는 여러개 반환값을 가짐(패킹, 언패핑)
def aperator(a,b):
  add_var = a+b
  subract_var = a-b
  multiply_var = a*b
  divide_var = a/b
  #패킹
  return add_var,subract_var,multiply_var,divide_var

#언패킹
a,b,c,d = aperator(7,3)
print(a,b,c,d)


###람다 표현식###
#특정 기능의 함수를 한줄에 작성할 수 있음
#이름없는 함수라 불림
#함수 기능이 간단하거나 한번만 사용할 경우에 사용
print((lambda a,b:a+b)(3,7))

array2 = [('홍길동',50),('이순신',32),('아무개',74)]
def my_key(x):
  return x[1]

print(sorted(array2,key=my_key))
print(sorted(array2,key=lambda x:x[1]))


# 람다를 여러개의 리스트에 적용
list1 =[1,2,3,4,5]
list2 =[6,7,8,9,10]
result = map(lambda a,b: a+b,list1,list2)
print(list(result))


###실전에서 유용한 표준 라이브러리###
#내장함수 : print, input, 등등
#itertools : 반복되는 형태의 데이터 처리, 순열과 조합 라이브러리
#heapq:힙(Heap) 자료구조 제공, 우선순위 큐 기능 구현,최단경로 알고리즘
#bisect : 이진탐색 기능 제공
#collections: 덱(deque), 카운터(counter) 등 자료구조 포함
#math : 필수 수학적 기능 제공, 팩토리얼,제곱근,최대공약수,삼각함수,파이, 상수 포함



## 내장 함수
#sum() : 원소들의 합 반환
#min() : 가장 작은 값 반환
#max() : 가장 큰 값 반환
#eval() : 수식으로 표현된 식의 결과를 반환
#sorted() : 리스트같은 반복가능한 개체가 들어왔을때 각 원소를 정렬한 결과 반환
result = sorted([9,1,8,5,4])
reverse_result = sorted([9,1,8,5,4],reverse=True)
print(result)
print(reverse_result)
#sorted는 키 속성으로 정렬 기준을 명시할 수 있음
array3 = [('홍길동',35),('이순신',75),('아무개',50)]
result = sorted(array3, key=lambda x:x[1],reverse=True)
print(result)
print("==================================================")

### 순열과 조합 ###
#순열:서로다른 n개에서 서로 다른 r개를 선택하여 일렬로 나열하는 것
#ex: {'A','B','C'}에서 세 개를 선택하여 나열하는 경우='ABC','ACB','BAC','BCA','CAB','CBA'
from itertools import permutations

data = ['A','B','C']
result = list(permutations(data,3))
print(result)
print("==================================================")

#조합:서로다른 n개에서 순서에 상관없이 서로 다른 r개를 선택하는 것
#ex: {'A','B','C'}에서 순서를 고려하지 않고 두개를 뽑는 경우='AB','AC','BC'
from itertools import combinations

data = ['A','B','C']
result = list(combinations(data,2))
print(result)
print("==================================================")

## 중복 순열과 중복 조합 ##
from itertools import product

data = ['A','B','C']
result = list(product(data,repeat=2))#2개를 뽑는 모든 순열 구하기(중복 허용)
print(result)
print("==================================================")

from itertools import combinations_with_replacement

data = ['A','B','C']
result = list(combinations_with_replacement(data,2))#2개를 뽑는 모든 조합 구하기(중복허용)
print(result)
print("==================================================")



## counter ##
#등장 횟수를 세는 기능 제공
#리스트와 같은 반복 가능한 객체가 주어졌을 경우 내부의 원소가 몇 번씩 등장했는지 알려줌
from collections import Counter
counter = Counter(['red','blue','red','green','blue','blue'])
print(counter['blue'])#blue 등장횟수 출력
print(counter['green'])#greeb 등장횟수 출력
print(dict(counter))#사전자료형으로 반환
print("==================================================")

## math 최대공약수와 최소공배수 ##
import math
#최소공배수를 구하는 함수
def lcm(e,f):
  return e*f // math.gcd(e,f)

e=21
f=14
print(math.gcd(21,14))
print(lcm(21,14))