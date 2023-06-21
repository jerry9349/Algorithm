
/*문제*/
/*
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.



제한사항
dots의 길이 = 4
dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
0 ≤ x, y ≤ 100
서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

입출력 예
dots	                              result
[[1, 4], [9, 2], [3, 8], [11, 6]]	  1
[[3, 5], [4, 1], [2, 4], [5, 10]]	  0

입출력 예 설명
입출력 예 #1

점 [1, 4], [3, 8]을 잇고 [9, 2], [11, 6]를 이으면 두 선분은 평행합니다.
입출력 예 #2

점을 어떻게 연결해도 평행하지 않습니다.



※ 공지 - 2022년 9월 30일 제한 사항 및 테스트 케이스가 수정되었습니다.
※ 공지 - 2022년 10월 27일 제한 사항 및 테스트 케이스가 수정되었습니다.
※ 공지 - 2023년 2월 14일 테스트 케이스가 수정되었습니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(dots) {
  /*
  4개의 점을 각각 a,b,c,d라고 했을 때,  아래와 같은 6가지 직선을 긋는 경우의 수를 생각했다.
  [a-b, a-c, a-d, b-c, b-d, c-d]
  */

  /*
  기울기 구하는 공식 = (y2-y1) / (x2-x1)
  */

  /*
  4개의 점들로 임의의 두 쌍을 만들었을 때 그 두 쌍이 이루는 직선이 서로 평행한지 알려면
  4개의 점들을 각각 이어서 2개의 직선을 그어야 한다.
  직선을 2개씩 이으면 2*3=6
  1. [a-b, c-d] / 2. [a-c, b-d] / 3. [a-d, b-c]
  이렇게 3가지의 경우로 2개의 선을 그을 수 있다.
  따라서 6개 직선의 기울기를 배열에 저장하고, 배열에서 2쌍씩 이어서 기울기가 같은지 비교하는 과정이 필요
  */
  let arr = [];
  let result = 0;

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let [x1, y1] = dots[i];
      let [x2, y2] = dots[j];
      let angle = Math.abs((x2 - x1) / (y2 - y1));
      arr.push(angle);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] === arr[arr.length - i - 1]) {
      result = 1;
      break;
    }
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

/* 다른 사람 풀이 1*/
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}


/* 다른 사람 풀이 2*/
function solution(dots) {
  if ((dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]) === (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])) return 1
  if ((dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]) === (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])) return 1
  if ((dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]) === (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])) return 1
  return 0
}


/* 다른 사람 풀이 3*/
var m = ([a, b], [c, d]) => (d - b) / (c - a), f = (a, b, c, d) => m(a, b) == m(c, d), solution = ([a, b, c, d]) => (f(a, b, c, d) || f(a, c, b, d) || f(a, d, b, c)) * 1


/* 다른 사람 풀이 4*/
function solution(dots) {
  const leans = []

  for (let i = 0; i < dots.length; i++) {
    const dotA = dots[i];
    for (let j = i + 1; j < dots.length; j++) {
      const dotB = dots[j]
      const lean = (dotB[1] - dotA[1]) / (dotB[0] - dotA[0])

      if (leans.includes(lean)) return 1
      else leans.push(lean)
    }
  }

  return 0;
}


/* 다른 사람 풀이 5*/
function solution(dots) {
  var answer = 0;
  const inclinations = new Set();
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const inclination = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (inclinations.has(inclination)) return 1;
      inclinations.add(inclination);
    }
  }
  return answer;
}


/* 다른 사람 풀이 6*/
const solution = ([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]) => {
  if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;
  if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;
  if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;
  return 0;
}

