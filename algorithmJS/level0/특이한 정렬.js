
/*문제*/
/*
정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000
1 ≤ numlist의 원소 ≤ 10,000
1 ≤ numlist의 길이 ≤ 100
numlist는 중복된 원소를 갖지 않습니다.

입출력 예
numlist	                      n	  result
[1, 2, 3, 4, 5, 6]	          4	  [4, 5, 3, 6, 2, 1]
[10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000]

입출력 예 설명
입출력 예 #1

4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다.
3과 5는 거리가 같으므로 더 큰 5가 앞에 와야 합니다.
2와 6은 거리가 같으므로 더 큰 6이 앞에 와야 합니다.
입출력 예 #2

30에서 가까운 순으로 [36, 40, 20, 47, 10, 6, 7000, 10000]을 return합니다.
20과 40은 거리가 같으므로 더 큰 40이 앞에 와야 합니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    let subA = Math.abs(a - n);
    let subB = Math.abs(b - n);

    if (subA === subB) {
      return b - a;
    } else {
      return subA - subB;
    }
  })
}


/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}


/* 다른 사람 풀이 2*/
function solution(numlist, n) {
  return numlist.sort((a, b) => b - a).sort((a, b) => Math.abs(a - n) - Math.abs(b - n))
}


/* 다른 사람 풀이 3*/
function solution(numlist, n) {
  numlist.sort((a, b) => {
    let n1 = Math.abs(a - n),
      n2 = Math.abs(b - n);

    return n1 < n2 ? -1 : n1 === n2 ? a < b ? 1 : -1 : 1;
  });
  return numlist;
}


/* 다른 사람 풀이 4*/
function solution(numlist, n) {
  let arr = []
  for (let i = 0; i < numlist.length; i++) {
    arr.push([numlist[i], Math.abs(numlist[i] - n)])
  }
  arr.sort((a, b) => b[0] - a[0])
  arr.sort((a, b) => a[1] - b[1])
  return arr.map(el => el[0])
}


/* 다른 사람 풀이 5*/
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const sim = Math.abs(a - n) - Math.abs(b - n)
    return sim === 0 ? b - a : sim
  })
}


/* 다른 사람 풀이 6*/
function solution(numlist, n) {
  numlist.sort((a, b) => b - a);
  numlist.sort((a, b) => {
    return Math.abs(a - n) - Math.abs(b - n)
  })
  return numlist;
}