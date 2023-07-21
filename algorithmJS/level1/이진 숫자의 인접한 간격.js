
/*문제*/
/*
0 이상의 정수 n이 주어질 때, n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 출력하는 함수, 
solution을 완성하라. 예를 들어, n이 주어질 때의 결과는 다음과 같다. 

n=5
n의 이진 표현 : 101
결과 : 2

n=11
n의 이진 표현 : 1011
결과 : 2



입력 형식
- n은 0 이상 10^9이하의 정수 입니다.



출력 형식
- n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 int 형식으로 출력합니다. 


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(n) {
  let binary = n.toString(2); // n을 이진수로 변환
  let maxDistance = 0; // 최대 거리 변수
  let distance = 0; // 현재 거리 변수
  let startCounting = false; // 거리 계산 시작 플래그

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (startCounting) {
        if (distance > maxDistance) {
          maxDistance = distance; // 최대 거리 갱신
        }
        distance = 0; // 현재 거리 초기화
      } else {
        startCounting = true; // 거리 계산 시작
      }
    } else if (startCounting) {
      distance++; // 거리 증가
    }
  }

  return maxDistance+1;
}

// 예시 실행
console.log(solution(5)); // 2
console.log(solution(11)); // 2


/*
*
*
*
*
*
*/

/*

*/
