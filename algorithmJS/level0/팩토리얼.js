
/*문제*/
/*
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
i! ≤ n

제한사항
0 < n ≤ 3,628,800

입출력 예
n	        result
3628800	  10
7	        3

입출력 예 설명
입출력 예 #1

10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
입출력 예 #2

3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.



*/



/*
*
*
*
*
*
*/
/* 내 풀이1 */
function solution(n) {
  let mul = 1;
  let cnt = 0;

  for (var i = 1; i <= n; i++) {
    mul *= i;
    if (mul > n) break;
    cnt++;
  }
  return cnt;
}

/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}



/* 다른 사람 풀이 2*/
function solution(n) {
  var answer = 1
  var a = 0
  while (answer <= n) {
    a++
    answer *= a
  }
  return a - 1;
}

