
/*문제*/
/*
당신은 온라인으로 주문을 받고 있다. 
주문 번호는 주문 순서대로 1부터 1씩 증가한다. 
주문이 취소될 경우, 해당 주문 번호는 주문 내역에서 제거된다. 
일부 주문이 취소된 주문 내역이 주어질 경우, n번째 주문 취소된 주문 번호를 구하는 solution 함수를 작성하라.




입력 형식
- orders : 주문 내역이 담긴 정수 배열
- n : 찾고자 하는 주문 번호의 차례의 정수

출력 형식
- n번째 주문 취소된 주문 번호를 정수로 반환

제약 사항
- 0 < orders.length <= 1000
- 0 < n <= 1000



입출력 예시
- 예시1
- 입력 : orders = [2, 4, 5, 7], n = 3
- 출력 : 6
- 설명 : 아래와 같이 3번째 취소된 주문을 찾을 수 있다.
1번째 취소 주문 번호는 1
2번째 취소 주문 번호는 3
3번째 취소 주문 번호는 6






*/



/*
*
*
*
*
*
*/
/* 내 풀이*/
function solution(orders, n) {
  let count = 0;
  let result = 0;
  for(let i = 1; i <= orders.length + n; i++){
      if(!orders.includes(i)) {
          count++;
          if(count === n) result = i;
      }
  }
  return result;
}
console.log(solution([2, 4, 5, 7], 3));
/*
*
*
*
*
*
*/
/* 정답 */
function solution(orders, n) {
  let count = 0
  if(orders == []) return n;
  orders = orders.sort((a,b) => a-b)
  for(let i = 1; i <= Math.max(...orders) + 1; i++){
      if(!orders.includes(i)) { 
          count++;
      }
      if(count == n) return i;
  }
}

/*

*/
