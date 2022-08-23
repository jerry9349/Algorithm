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
