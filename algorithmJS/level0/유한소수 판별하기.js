
/*문제*/
/*
소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 
분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 
유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 
무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
a, b는 정수
0 < a ≤ 1,000
0 < b ≤ 1,000

입출력 예
a	  b	  result
7	  20	1
11	22	1
12	21	2

입출력 예 설명
입출력 예 #1

분수 7/20은 기약분수 입니다. 분모 20의 소인수가 2, 5 이기 때문에 유한소수입니다. 따라서 1을 return합니다.
입출력 예 #2

분수 11/22는 기약분수로 나타내면 1/2 입니다. 분모 2는 소인수가 2 뿐이기 때문에 유한소수 입니다. 따라서 1을 return합니다.
입출력 예 #3

분수 12/21는 기약분수로 나타내면 4/7 입니다. 분모 7은 소인수가 7 이므로 무한소수입니다. 따라서 2를 return합니다.

Hint
분자와 분모의 최대공약수로 약분하면 기약분수를 만들 수 있습니다.
정수도 유한소수로 분류합니다.
※ 공지 - 2022년 11월 10일 테스트 케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(a, b) {
  let [big, small] = [a,b];
  let rest = 1;
  
  // 최대공배수 구하기 : 최대공배수는 제일 마지막의 big 값이다
  while (rest > 0){
      rest = big%small;
      big = small;
      small = rest;
  }
  // 기약분수 만들기 : 기약분수는 최대공배수를 나눈 값이다
  let [num1, num2] = [a/big, b/big];
  // 분모의 약수 구하기 : 분모의 약수는 분모를 1부터 분모까지의 수로 나누었을 때 나머지가 0인 수이다
  //const arr = Array.from({length:num2}, (_,i) => i+1).filter((v) => num2 % v === 0);

  while (num2 % 2 === 0){
      num2 /= 2;
  }
  while (num2 % 5 === 0){
      num2 /= 5;
  }

  return num2 === 1 ? 1 : 2;

}

/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a,b); i++) {
      if (a%i===0 && b%i===0) n = i;
  }

  b/=n;
  while (b%2===0) b/=2;
  while (b%5===0) b/=5;

  return b === 1 ? 1 : 2;   
}


/* 다른 사람 풀이 2*/
function solution(a, b) {
  return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}


/* 다른 사람 풀이 3*/
function solution(a, b) {
  let tmpB = b
  while (tmpB % 2 === 0) tmpB /= 2
  while (tmpB % 5 === 0) tmpB /= 5
  if (a % tmpB === 0) tmpB = 1
  return tmpB === 1 ? 1 : 2
}


/* 다른 사람 풀이 4*/
function solution(a, b) {
  for(let i=2; i<=Math.min(a,b); i++) {
      while(a % i === 0 && b % i === 0) {
          a /= i;
          b /= i;
      }
  }

  while(b % 2 === 0) b /= 2;
  while(b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}


/* 다른 사람 풀이 5*/
function solution(a, b) {
  return (a/b).toString().length > 10 ? 2 : 1
}


/* 다른 사람 풀이 6*/
const GCD = (a, b) => b ? GCD(b, a % b) : a;

function solution(a, b) {
    b /= GCD(a,b);
    while(1) {
        if (b === 1) return 1;
        else if(!(b%2)) { b/=2; continue; }
        else if(!(b%5)) { b/=5; continue; }
        else return 2;
    }
}