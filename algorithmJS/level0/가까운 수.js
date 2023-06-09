
/*문제*/
/*
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

입출력 예
array	        n	  result
[3, 10, 28]	  20	28
[10, 11, 12]	13	12

입출력 예 설명
입출력 예 #1

3, 10, 28 중 20과 가장 가까운 수는 28입니다.
입출력 예 #2

10, 11, 12 중 13과 가장 가까운 수는 12입니다.
※ 공지 - 2023년 3월 29일 테스트 케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이1 */
function solution(array, n) {
  let subCompare = 0;
  let result = 0;
  for (let v of array) {
    let sub = Math.abs(n - v);

    if (subCompare !== 0 && subCompare > sub) result = v;
    subCompare = sub;
  }
  console.log(result);
  return result;
}

/* 내 풀이2 */
function solution(array, n) {
  let arr = array.map((a) => a < n ? n - a : a - n);
  let minIdx = arr.indexOf(Math.min(...arr));
  return array[minIdx];
}

/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(array, n) {
  let result = 0;
  let subCompare = Number.MAX_VALUE;

  for (let i = 0; i < array.length; i++) {
    const sub = Math.abs(array[i] - n);
    if (sub < subCompare) {
      result = array[i];
      subCompare = sub;
    } else if (sub === subCompare && array[i] < result) {
      result = array[i];
    }
  }

  return result;
}



/* 다른 사람 풀이 2*/
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}


/* 다른 사람 풀이 3*/
function solution(array, n) {
  return array.reduce((a, c) => Math.abs(a - n) < Math.abs(c - n) ? a : Math.abs(a - n) === Math.abs(c - n) ? Math.min(a, c) : c);
}


/* 다른 사람 풀이 4*/
let solution = (r, n) => r.map(e => [e, Math.abs(e - n)]).sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0]


/* 다른 사람 풀이 5*/
function solution(array, n) {
  var answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(Math.abs(array[i] - n))
  }
  const a = Math.min(...answer)
  return n - a;
}