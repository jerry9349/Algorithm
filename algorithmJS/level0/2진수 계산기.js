
/*문제*/
/*
이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
return 값은 이진수를 의미하는 문자열입니다.
1 ≤ bin1, bin2의 길이 ≤ 10
bin1과 bin2는 0과 1로만 이루어져 있습니다.
bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

입출력 예
bin1	  bin2	  result
"10"	  "11"	  "101"
"1001"	"1111"	"11000"

입출력 예 설명
입출력 예 #1

10 + 11 = 101 이므로 "101" 을 return합니다.
입출력 예 #2

1001 + 1111 = 11000 이므로 "11000"을 return합니다.

*/

/*
*
*
*
*
*
*/
/* chatGPT 풀이1 */
function addBinary(bin1, bin2) {
  let carry = 0;
  let sum = '';

  let i = bin1.length - 1;
  let j = bin2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(bin1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(bin2[j]) : 0;

    const currentSum = digit1 + digit2 + carry;
    const currentBit = currentSum % 2;
    carry = Math.floor(currentSum / 2);

    sum = currentBit + sum;

    i--;
    j--;
  }

  return sum;
}

// 예시 실행
const bin1 = "1001";
const bin2 = "1111";
const result = addBinary(bin1, bin2);
console.log(result); // 출력 결과: 11000



/* chatGPT 풀이2 */
function addBinary(bin1, bin2) {
  let carry = 0; // 올림 값
  let result = ""; // 결과 이진수

  let i = bin1.length - 1; // bin1의 끝 인덱스
  let j = bin2.length - 1; // bin2의 끝 인덱스

  // 두 이진수의 자릿수가 모두 처리될 때까지 반복
  while (i >= 0 || j >= 0) {
    let sum = carry; // 현재 자릿수의 합 초기값은 올림 값(carry)

    // bin1 자릿수 더하기
    if (i >= 0) {
      sum += parseInt(bin1[i]);
      i--;
    }

    // bin2 자릿수 더하기
    if (j >= 0) {
      sum += parseInt(bin2[j]);
      j--;
    }

    // 합산 결과에 따른 현재 자릿수의 값과 올림 값 결정
    if (sum % 2 === 0) {
      result = "0" + result; // 현재 자릿수의 값은 0
      carry = Math.floor(sum / 2); // 올림 값은 0
    } else {
      result = "1" + result; // 현재 자릿수의 값은 1
      carry = Math.floor(sum / 2); // 올림 값은 1
    }
  }

  // 모든 자릿수를 처리한 후, 올림 값이 남아있으면 결과에 추가
  if (carry === 1) {
    result = "1" + result;
  }

  return result;
}

// 테스트
const bin3 = "1001";
const bin4 = "1111";
console.log(addBinary(bin1, bin2)); // 출력: "11000"


/*
*
*
*
*
*
*/
/* 내 풀이1 */
function solution(bin1, bin2) {
  let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  return sum.toString(2);
}

/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}



/* 다른 사람 풀이 2*/
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}


/* 다른 사람 풀이 3*/
function solution(_bin1, _bin2) {
  const bin1 = _bin1.split("").reverse();
  const bin2 = _bin2.split("").reverse();

  const N1 = bin1.length;
  const N2 = bin2.length;

  let i = 0;
  let j = 0;

  let sum = 0;
  let carry = 0;
  let result = [];

  while (i < N1 || j < N2 || carry > 0) {
    const n1 = Number(bin1[i]) || 0;
    const n2 = Number(bin2[j]) || 0;

    let localSum = carry + n1 + n2;

    result.push(localSum % 2);
    carry = Math.floor(localSum / 2);

    i += 1;
    j += 1;
  }

  return result.reverse().join("");
}


/* 다른 사람 풀이 4*/
var solution = (i, j) => (parseInt(i, 2) + parseInt(j, 2)).toString(2)


