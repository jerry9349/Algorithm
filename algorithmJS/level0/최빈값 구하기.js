
/*문제*/
/*
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 
최빈값이 여러 개면 -1을 return 합니다.

제한사항
0 < array의 길이 < 100
0 ≤ array의 원소 < 1000

입출력 예
array	              result
[1, 2, 3, 3, 3, 4]	3
[1, 1, 2, 2]        1
[1]	                1

입출력 예 설명
입출력 예 #1

[1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
입출력 예 #2

[1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
입출력 예 #3

[1]에는 1만 있으므로 최빈값은 1입니다.



※ 공지 - 2022년 10월 17일 제한 사항 및 테스트케이스가 수정되었습니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(array) {
  if (array.length === 0) return -1;
  if (array.length === 1) return array[0];

  const unique = [...new Set(array)];

  const arr = unique.map((v) => [v, array.reduce((a, c) => a + (c === v ? 1 : 0), 0)]).sort((a, b) => b[1] - a[1]);

  const max = arr[0];
  const result = arr.filter((v) => v[1] === max[1]);

  return result.length > 1 ? -1 : max[0];
}


/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}


/* 다른 사람 풀이 2*/
const solution = (array) => {
  const counter = array.reduce((acc, cur) => ({
    ...acc,
    [cur]: (acc[cur] || 0) + 1
  }), {})

  const items = Object.keys(counter).map((key) => [
    Number(key), counter[key]
  ]).sort((a, b) => b[1] - a[1])

  if (items[0][1] === items?.[1]?.[1]) {
    return -1
  }

  return items[0][0];
}


/* 다른 사람 풀이 3*/
function solution(array) {

  let setArr = [...new Set(array)];

  let calArr = setArr.map((v, i) => array.filter(dv => dv == v).length);

  let rsltArr = calArr.map((mv, mi) => { if (mv == Math.max(...calArr)) return mi; return -1 }).filter(v => v != -1)

  return rsltArr.length > 1 ? -1 : setArr[rsltArr[0]];
}


/* 다른 사람 풀이 4*/
function solution(array) {
  let m = new Map();
  array.forEach(e => m.set(e, m.get(e) + 1 || 1));
  m = [...m].sort((a, b) => b[1] - a[1]);
  let max = m[0][1];
  m = m.filter(e => e[1] === max).map(e => e[0]);
  return m.length > 1 ? -1 : m[0]
}

