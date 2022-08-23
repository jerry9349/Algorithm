### 사전 자료형 ###
a = dict()
a['홍길동'] = 97
a['이순신'] = 98
# 사전 자료형 초기화
print(a) # 출력 결과 : {'홍길동': 97, '이순신': 98}

b = {
  '홍길동':97,
  '이순신':98
}
print(a) # 출력 결과 : {'홍길동': 97, '이순신': 98}

# 키만 뽑아내기
key_list = b.keys()
print(key_list) # 출력 결과 : dict_keys(['홍길동', '이순신'])

# 키만 뽑아서 리스트 출력
key_list = list(b.keys())
print(key_list) # 출력 결과 : ['홍길동', '이순신']


### 집합 자료형 ###
# 집합
a = set([1,2,3,4,5])
b = set([3,4,5,6,7])

# 합집합
print(a | b) # 출력 결과 : {1, 2, 3, 4, 5, 6, 7}
# 교집합
print(a & b) # 출력 결과 : {3, 4, 5}
# 차집합
print(a - b) # 출력 결과 : {1, 2}


data = set([1,2,3])
# 새 원소 추가
data.add(4) # 출력 결과 : {1, 2, 3, 4}
# 새 원소 여러개 추가
data.update([5,6]) # 출력 결과 : {1, 2, 3, 4, 5, 6}
# 특정 원소 삭제
data.remove(3)
print(data) # 출력 결과 : {1, 2, 4, 5, 6}



### 입출력 ###
# input() : 한줄 문자열 입력
# map() : 리스트 모든 원소에 각각 특정 함수 적용
# 매우 중요, 전부 외우기

n = int(input())
data = list(map(int, input().split()))
a,b,c = map(int, input().split())

print(n)  # 입력 : 3, 출력 결과 : 3
print(data)  # 입력 : 3 19 33 35, 출력 결과 : [3, 19, 33, 35]
print(a,b,c)  # 입력 : 3 18 40, 출력 결과 : 3 18 40

import sys

#문자열 입력 받기
data2 = sys.stdin.readline().rstrip()
print(data2)  # 입력 : 안녕하세요, 출력 결과 : 안녕하세요


# f-string
answer = 7
print(f"정답은 {answer} 입니다. ") # 출력 결과 : 정답은 7 입니다. 
