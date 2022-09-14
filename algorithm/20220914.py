### 곱하기 혹은 더하기 ###
# 각 자리가 숫자(0부터 9)로만 이루어진 문자열 S가 주어졌을 때, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 'x' 혹은 '+' 연산자를 넣어 결과적으로 '만들어질 수 있는 가장 큰 수를 구하는 프로그램'을 작성해라. 단 +보다 x를 먼저 계산하는 일반적인 방식과는 달리, '모든 연산은 왼쪽에서부터 순서대로' 이루어진다고 가정한다.
# 예를 들어 02984라는 문자열로 만들 수 있는 가장 큰 수는 ((((0+2) * 9) * 8) * 4) =567 이다. 또한 만들어질 수 있는 가장 큰 수는 항상 20억 이하의 정수가 되도록 입력이 주어진다.(int는 약 21억까지 표시가능함, 파이썬은 제한이 없음)

# 대부분의 경우 '+'보다는 'x'가 더 값을 크게 만든다. 예를 들어 5+6=11이고, 5*6=30이다.
# 다만 두 수 중에서 하나라도 '0'혹은 '1'인 경우, 곱하기보다는 더하기를 수행하는 것이 효율적이다. 따라서 '두 수에 대하여 연산을 수행할 때, 두 수 중에서 하나라도 1이하인 경우에는 더하며, 두 수가 모두 2이상인 경우에는 곱한다'

data = input()
# 첫 번째 문자를 숫자로 변경하여 대입
result = int(data[0])

for i in range(1, len(data)) :
  # 두 수 중에서 하나라도 '0' 혹은 '1'인 경우, 곱하기보다는 더하기 수행
  num = int(data[i])
  if num <= 1 or result <= 1:
    result += num
  else :
    result *= num

print(result)
  



### 모험가 길드 ###
# 한 마을에 모험가가 N명 있다. 모험가 길드에서는 N명의 모험가를 대상으로 '공포도'를 측정했는데, '공포도'가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어진다.
# 모험가 길드장인 동빈이는 모험가 그룹을 안전하게 구성하고자 '공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여'해야 여행을 떠날 수 있도록 규정했다.
# 동빈이는 최대 몇 개의 모험가 그룹을 만들 수 있는지 궁금하다. N명의 모험가에 대한 정보가 주어졌을때, '여행을 떠날 수 있는 그룹 수의 최댓값'을 구하라.

# 예를 들어 N=5이고, 각 모험가의 공포도가 다음과 같다고 가정한다.
# 2 3 1 2 2
# 이 경우 그룹 1에 공포도가 1,2,3인 모험가를 한 명씩 넣고, 그룹 2에 공포도가 2인 남은 두 명을 넣게 되면 총 2개의 그룹을 만들 수 있다.
# 또한 몇 명의 모험가는 마을에 그대로 남아 있어도 되기 때문에, 모든 모험가를 특정한 그룹에 넣을 필요는 없다. (나머지가 생겨도 괜찮음)

# 오름차순 정렬 이후에 공포도가 가장 낮은 모험가부터 하나씩 확인한다.
# 앞에서부터 공포도를 하나씩 확인하며 '현재 그룹에 포함된 모험가의 수'가 '현재 확인하고 있는 공포도보다 크거나 같다면 이를 그룹으로 설정'하면 된다.
# 이러한 방법을 이용하면 공포도가 오름차순으로 정렬되어 있다는 점에서, 항상 최소한의 모험가의 수만 포함하여 그룹을 결성하게 된다.

n = int(input())
data = list(map(int, input().split()))
data.sort()
if len(data) != n :
  print("다시 입력하세요!")
print("정렬한 값 : ",data)

group = 0 # 총 그룹의 수
manCount = 0 # 현재 그룹에 포함된 모험가의 수

for i in data: # 공포도를 낮은 것부터 하나씩 확인하며
  manCount += 1 # 현재 그룹에 해당 모험가를 포함시키기
  if manCount >= i: # 현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹 결성
    group += 1 # 총 그룹의 수 증가시키기
    print(group,"번째 그룹에 ",manCount,"명의 사람들, ",i,"의 공포도")
    manCount = 0 # 현재 그룹에 포함된 모험가의 수 초기화
    

print("최대 그룹 수 : ", group) # 총 그룹의 수 출력