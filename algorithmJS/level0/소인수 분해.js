
/*문제*/
/*
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 
예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
따라서 12의 소인수는 2와 3입니다. 
자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ n ≤ 10,000

입출력 예
n	result
12	[2, 3]
17	[17]
420	[2, 3, 5, 7]

입출력 예 설명
입출력 예 #1

12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.
입출력 예 #2

17은 소수입니다. 따라서 [17]을 return 해야 합니다.
입출력 예 #3

420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.

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
  let arr = [];
  let div = 2;

  while (n > 1) {
    if (n % div === 0) {
      if (!arr.includes(div)) arr.push(div);
      n = n / div;
    } else {
      div++;
    }
  }
  return [...new Set(arr.sort((a, b) => a - b))];
}
// ❗️ 결과 값을 리턴할 때 꼭! 배열을 정렬한 다음에 중복값을 제거해줘야함

/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(n) {
  let answer = []

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i)
      n = n / i
    } else {
      i++
    }
  }

  return [...new Set(answer.sort((a, b) => a > b ? 1 : -1))]
}



/* 다른 사람 풀이 2*/
function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {

    while (n % i === 0) {

      n = n / i;
      answer.push(i);

    }
  }

  return [...new Set(answer)];
}


/* 다른 사람 풀이 3*/
function solution(n) {
  return Array.from(
    new Set(
      [...Array(n + 1).keys()]
        .filter((v) => n % v === 0)
        .filter((v) => {
          for (let i = 2; i < v; i++) {
            if (v % i === 0) return false;
          }
          return true;
        })
    )
  ).splice(1);
}


