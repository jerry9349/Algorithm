
/*문제*/
/*
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls

입출력 예
balls	share	result
3	2	3
5	3	10

입출력 예 #1

서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.

입출력 예 #2

서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.


Hint
서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다.

      n!
------------
(n-m)! * m!


※ 공지 - 2022년 10월 11일 제한 사항 및 테스트케이스가 수정되었습니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share));
}


/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(balls, share) {
  if (balls === share || share === 0) return 1;

  let result = 1;
  let num = (balls - share < share) ? balls - share : share;

  for (let i = 0; i < num; i++) {
    result *= (balls - i);
    result /= (i + 1);
  }
  return result;
}



/* 다른 사람 풀이 2*/
const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
}


/* 다른 사람 풀이 3*/
function solution(balls, share) {
  var result = 1;
  while (share > 0) {
    result = result * balls / share;
    balls = balls - 1;
    share = share - 1;
  }
  return Math.round(result);
}


/* 다른 사람 풀이 4*/
function solution(balls, share) {
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
    Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
  );
}


/* 다른 사람 풀이 5*/
const factorials = num =>
  Array
    .from({ length: num }, (_, i) => i + 1)
    .reduce((a, c) => a *= c, 1)

const solution = (n, m) =>
  Math.round(factorials(n) / (factorials(n - m) * factorials(m)))


/* 다른 사람 풀이 6*/
function solution(balls, share) {
  function fac(n) {
    var i = 1;
    for (var j = 2; j <= n; j++) i *= j;
    return i;
  }
  var answer = Math.round(fac(balls) / (fac(balls - share) * fac(share)));

  return answer;
}