
/*문제*/
/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)


제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예
n	  result
10	4
5	  3



입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환


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
  const arr = Array(n + 1).fill(true);

  arr[0] = false; // 0은 소수가 아니다
  arr[1] = false; // 1은 소수가 아니다

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      // 배수를 제거한다
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((v) => v).length;
}
/*
❗️아라토스테네스의 체 알고리즘❗️
아라토스테네스의 체는 소수를 찾는 알고리즘 중 하나입니다.이 알고리즘은 주어진 범위 내에서 모든 소수를 찾아내는 방법으로, 반복적으로 수의 배수를 제거하면서 소수를 찾아냅니다.
  즉, for문을 n까지 돌리면서 각 숫자들의 배수들을 제거하고, 제거되지 않은 숫자들은 소수인 것으로 합니다.
*/
/*
*
*
*
*
*
*/

/*

*/

/* 다른 사람 풀이 1*/
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}



/* 다른 사람 풀이 2*/
function solution(n) {
  let s = [...Array(n).keys()]
  // console.log(s);
  s[0] = 0
  for (let i = 2; i <= parseInt(n ** .5) + 1; i++) {
    // console.log(i);

    for (let j = 2; j <= (n - i) / i + 1; j++) {
      s[i * j - 1] = 0
    }
  }
  return s.filter(x => Boolean(x)).length;
}


/* 다른 사람 풀이 3*/
function numberOfPrime(n) {
  if (n == 2) return 1

  var count = 0;
  for (var i = 2; i <= n; i++) {
    var a = 2; // 사이클이 시작할때마다 a = 2 로 리셋
    while (a < i) { //이렇게하면 자신의 숫자로 나누어질 일은 없다.
      if (i % a != 0) { // 그리고 나누어지지않으면 계속, 나누어지면 카운트하고 끝
        a++;
      } else {
        count++
        break;
      }
    }
  }
  return n - count - 1;
  // 카운트된 것은 소수가 아닌것들이고, -1을 더 해주는 이유는 1의 경우때문이다.
}


/* 다른 사람 풀이 4*/
function solution(n) {
  if (n == 2) return 1;
  let i, j;
  let primes = [0, 0];
  for (i = 2; i <= n; i++) primes[i] = 1;
  for (i = 2; i <= n; i++) {
    if (!primes[i]) continue;
    for (j = i * 2; j <= n; j += i) primes[j] = 0;
  }
  return primes.reduce((acc, cur) => acc + cur);
}




/* 다른 사람 풀이 5*/
function numberOfPrime(n) {
  var result = 0;
  for (var i = 2; i <= n; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) break;
      if (i == j + 1) result++;
    }
  }
  return result + 1; //n이 1이상의 정수라는 가정하에
}





/* 다른 사람 풀이 6*/
function numberOfPrime(n) {
  var result = 0;
  for (var i = 2; i <= n; i++) {
    var cnt = 0;
    for (var j = 2; j <= i; j++) {
      if (i % j == 0) {
        cnt++;
      }
    }
    if (cnt < 2) {
      result++;
    }
  }
  return result;
}

