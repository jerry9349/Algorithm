
/*문제*/
/*
정수 배열 A에는 십만 전자의 일 단위 주식 가격이 들어있다. 
해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을 때 가능한 최대 수익을 구하는 함수를 작성하라. 
단, 매도는 항상 매수 이후에 이뤄져야 하며, 수익을 낼 수 없는 경우 0을 리턴해야한다.


입력 형식
- A: 하루 단위의 주식 가격이 순서대로 담긴 정수 배열 

출력 형식
- 최대로 낼 수 있는 수익을 정수로 반환

제약 사항
- 2 <= A.length <= 1000
- 0 < A[i] <= 1000000


입출력 예시
예시1
입력 : A = [100000, 99000, 99000 ,98000, 97000]
출력 : 0
설명 : 수익을 낼 수 없으므로 답은 0이다.

예시2
입력 : A = [100000, 98000, 95000 ,98000, 92000]
출력 : 3000
설명 : 95000원인 시점에 구매하고 98000원인 시점에 판매하면 된다.



*/



/*
*
*
*
*
*
*/
/* 내 풀이(틀린 버전) */
function solution(A) {
  let result = 0;
  let benefit = 0;
  for(let i = 0; i < A.length; i++){
    if(i % 2 ===0){//짝수
      benefit -= A[i];
    }else{//홀수
      benefit += A[i];
      if(benefit > 0){
        if(result < benefit){result = benefit}
      }
      benefit = 0;
    }
  }
  //arr.sort((a,b) => b-a);
  return result;
}



/* 내 풀이 */
function solution(A) {
  let result = 0;
  let price = A[0];

  for(let i = 1; i < A.length; i++) {
      const benefit = A[i] - price;

      if(benefit > result) {result = benefit}

      if(A[i] < price){price = A[i]}
  }
  return result;
}



/*
*
*
*
*
*
*/

/*

*/
