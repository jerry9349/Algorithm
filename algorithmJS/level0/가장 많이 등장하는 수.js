
/*문제*/
/*
숫자로 이루어진 문자열 s가 있습니다.
이 문자열에서 가장 많이 등장하는 0~9 사이의 숫자를 출력하는 프로그램을 구현하세요.
단, 가장 많이 등장하는 수가 여러 개라면, 그 중 가장 작은 수를 반환하세요.



입력 형식
- s : 숫자로 이루어진 문자열 

출력 형식
- 가장 많이 등장하는 수를 정수로 반환 

제약 사항
- 0 < s.length <= 100

입출력 예시
- 예시1
- 입력 : s = "174771177"
- 출력 : 7
- 설명 : 7이 가장 많이 등장하였으므로 답은 7이다.

- 예시2
- 입력 : s= "552342502"
- 출력 : 2
- 설명 : 2와 5가 가장 많이 등장하지만, 2가 더 작으므로 2를 반환






*/



/*
*
*
*
*
*
*/
/* 내 풀이*/
function solution(s) {
  const setArr = [...new Set(s)].sort((a,b) => a-b);
  let max = 0;
  let result = 0;
  setArr.forEach((v) => {
      let count = [...s].reduce((a,c) => c === v ? a += 1 : a, 0);
      if(max < count) {max = count; result = +v}
      else if (max === count) {
          result = Math.min(result, +v);
      }
  });

  return result;
}

/*
*
*
*
*
*
*/
/* 정답 */
function solution(s) {
  const charCounts = new Map();

  for (const char of s) {
    if (charCounts.has(char)) {
      charCounts.set(char, charCounts.get(char) + 1);
    } else {
      charCounts.set(char, 1);
    }
  }

  let maxCount = 0;
  let resultChar;

  charCounts.forEach((count, char) => {
    if (count > maxCount) {
      maxCount = count;
      resultChar = char;
    } else if (count === maxCount && char < resultChar) {
      resultChar = char;
    }
  });

  return resultChar;
}

/*

*/
