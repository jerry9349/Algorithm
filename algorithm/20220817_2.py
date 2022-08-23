### map ###
# map은 리스트의 요소를 지정된 함수로 처리해주는 함수(map은 원본 리스트를 변경하지 않고 새 리스트를 생성)
# list(map(함수, 리스트))
# tuple(map(함수, 튜플))

a = [1.2, 2.5, 3.7, 4.6]
for i in range(len(a)):
  a[i] = int(a[i])

print(a) # 출력 결과 : [1, 2, 3, 4]

b = [1.2, 2.5, 3.7, 4.6]
b = list(map(int, a))
print(b) # 출력 결과 : [1, 2, 3, 4]


# map에는 리스트뿐만 아니라 모든 반복 가능한 객체를 넣을 수 있음
c = list(map(str, range(10)))
print(c) # 출력 결과 : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']



# 맵 객체(map object)로는 안에 들어있는 값을 볼 수 없으므로 list를 사용해서 리스트로 출력
d = map(int, input().split())
a1, b1 = list(d)
print(a1,b1) # 입력: 10 20 ,출력 결과 : 10 20

# map이 반환하는 맵 객체는 iterator라서 변수 여러 개에 저장하는 언패킹(unpacking)이 가능
#a, b = map(int, input().split())을 풀어서 쓰면 다음과 같은 코드이다
x = input().split()    # input().split()의 결과는 문자열 리스트
m = map(int, x)        # 리스트의 요소를 int로 변환, 결과는 맵 객체
a, b = m               # 맵 객체는 변수 여러 개에 저장할 수 있음
print("m= ",m, ", a=",a,", b=",b) # 출력 결과 : <map object at 0x7f1a8eb38100> a= 10 , b= 20





### tuple ###
# 튜플은 리스트와는 달리 내용을 변경할 수 없음(불변, immutable). 따라서 내용을 변경하는 append 같은 메서드는 사용할 수 없고, 요소의 정보를 구하는 메서드만 사용할 수 있음
# index(값)은 튜플에서 특정 값의 인덱스를 구합니다. 이때 같은 값이 여러 개일 경우 처음 찾은 인덱스를 구함(가장 작은 인덱스).
a = (38, 21, 53, 62, 19, 53)
print(a.index(53)) # 출력 결과 : 2 // index 2, 5 중 처음인 2로 출력


# count(값)은 튜플에서 특정 값의 개수를 구할 수 있음. 다음은 튜플 (10, 20, 30, 15, 20, 40)에서 20의 개수를 구합니다. 여기서는 20이 2개 들어있으므로 2가 나옵니다.
b = (10, 20, 30, 15, 20, 40)
print(b.count(20)) # 출력 결과 : 2


# 반복문으로 요소 출력하기
c = (38, 21, 53, 62, 19)
for i in c:
  print(i, end=' ')
# 출력 결과 : 38 21 53 62 19

# 튜플 표현식 사용하기
# 튜플을 리스트 표현식처럼 생성할 때는 다음과 같이 tuple 안에 for 반복문과 if 조건문을 지정
d = tuple(i for i in range(10) if i % 2 == 0)
print(d) # 출력 결과 : (0, 2, 4, 6, 8)

# ( )(괄호) 안에 표현식을 넣으면 튜플이 아니라 제너레이터 표현식이 됨(제너레이터 나중에 배우기)
d = (i for i in range(10) if i % 2 == 0)
print(d) # 출력 결과 : <generator object <genexpr> at 0x7f3cab71f970>

# 튜플에 map 사용하기
e = (1.2, 2.5, 3.7, 4.6)
e = tuple(map(int, e))
print(e) # 출력 결과 : (1, 2, 3, 4)

# 튜플에서 min, max, sum 사용하기
f = (38, 21, 53, 62, 19)
print(min(f)) # 출력 결과 : 19
print(max(f)) # 출력 결과 : 62
print(sum(f)) # 출력 결과 : 193
