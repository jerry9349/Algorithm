### 반복문 ###
# 1. 파이썬에서 공백 문자를 사용할때 4개의 공백 문자를 사용하자고 표준으로 설정(코틀린과 같음)
# if ~ elif ~ else
a = 5

if a >= 0:
  print("a >= 0")
elif a>=-10:
  print("0 > a >= -10")
else:
  print("-10 > a")
# 출력 결과 : a >= 0


# X가 모두 참인지 체크 : X and Y
# X, Y 둘중 하나만 참인지 체크 : X or Y
# X가 거짓인지 체크 : not X

if True or False:
  print("Yes")
# 출력 결과 : Yes
b = 15
if b <= 20 and b >=0:
  print("Yes")
# 출력 결과 : Yes


# 리스트, 튜플, 문자열, 딕셔너리 모두 사용 가능한 in 연산자와 not in 연산자
# x in 리스트 : 리스트 안에 x가 들어있을때 true
# x not in 문자열 : 문자열 안에 x가 들어있지 않을때 True

# pass : 아무것도 처리하고 싶지 않을때 사용
c = 50
if c >= 30:
  pass
else :
  print("a < 30")
# 출력 결과 : 없음


# 조건문 간소화
# 조건문에서 실행될 소스코드가 한줄인 경우, 줄바꿈 필요없음
# if ~ else 문을 한줄에 작성
score = 85
# 1)
if score >= 80 :result="success"
else : result = "fail"
# 2)
result = "success" if score >= 80 else "fail"

print(result)
# 출력 결과 : success


# 조건문 내에서 부등식
# 다른 언어와 다르게 파이썬은 조건문 안에서 수학의 부등식을 그대로 사용 가능
x = 15
if 0 < x < 20:
  print("x는 0 이상 20 미만의 수 입니다.")

# 출력 결과 : x는 0 이상 20 미만의 수 입니다.

