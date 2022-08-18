### 사전 자료형 ###
a = dict()
a['홍길동'] = 97
a['이순신'] = 98
# 사전 자료형 초기화
print(a)

b = {
  '홍길동':97,
  '이순신':98
}

print(a)

# 키만 뽑아내기
key_list = b.keys()
print(key_list)

# 키만 뽑아서 리스트 출력
key_list = list(b.keys())
print(key_list)


### 집합 자료형 ###
# 집합
a = set([1,2,3,4,5])
b = set([3,4,5,6,7])

# 합집합
print(a | b)
# 교집합
print(a & b)
# 차집합
print(a - b)


data = set([1,2,3])
# 새 원소 추가
data.add(4)
# 새 원소 여러개 추가
data.update([5,6])
# 특정 원소 삭제
data.remove(3)
print(data)



### 입출력 ###
# input() : 한줄 문자열 입력
# map() : 리스트 모든 원소에 각각 특정 함수 적용
# 매우 중요, 전부 외우기

n = int(input())
data = list(map(int, input().split()))
a,b,c = map(int, input().split())

print(n)
print(data)
print(a,b,c)

import sys

#문자열 입력 받기
data2 = sys.stdin.readline().rstrip()
print(data2)


# f-string
answer = 7
print(f"정답은 {answer} 입니다.")
