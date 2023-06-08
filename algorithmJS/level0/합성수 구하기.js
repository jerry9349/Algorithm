
/*문제*/
/*
약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100

입출력 예
n	result
10	5
15	8

입출력 예 설명
입출력 예 #1

10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
입출력 예 #1

15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

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
    let arr1 = Array(n).fill(0).map((v,idx) => v+1+idx).filter((a) => a > 3);
    let arr2 = [];
    for (let v of arr1) {
        for (let i = 2; i <= Math.sqrt(v); i++) {
            if(v%i === 0) arr2.push(v);
        }
    }
    return new Set(arr2).size;
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
    let dp = new Array(n+1).fill(1)
    for(let i = 2 ; i <= n ; i++){
        if(dp[i]){
            for(let j = 2 ; i*j <= n ; j++){
                dp[i*j] = 0
            }
        }
    }

    return dp.filter(el => el === 0).length
}



/* 다른 사람 풀이 2*/
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}


/* 다른 사람 풀이 3*/
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}


/* 다른 사람 풀이 4*/
function solution(n) {
    let base = Array.from(Array(n), (v,i) => i+1)
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        base = base.filter(el => el%i != 0 || el <= i)
    }
    return n - base.length
}