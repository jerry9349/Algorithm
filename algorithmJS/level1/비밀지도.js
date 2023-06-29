
/*문제*/
/*
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 
그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 
지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 
지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 
얻어지는 이진수에 해당하는 값의 배열이다.

01001(2) = 9
10100(2) = 20
11100(2) = 28
10010(2) = 18
01011(2) = 11

11110(2) = 30
00001(2) = 1
10101(2) = 21
10001(2) = 17
11100(2) = 28

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.


입력 형식
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

1 ≦ n ≦ 16
arr1, arr2는 길이 n인 정수 배열로 주어진다.
정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.



출력 형식
원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.



입출력 예제
매개변수	값
n	    5
arr1	[9, 20, 28, 18, 11]
arr2	[30, 1, 21, 17, 28]
출력	["#####","# # #", "### #", "# ##", "#####"]

매개변수	값
n	      6
arr1	[46, 33, 33 ,22, 31, 50]
arr2	[27 ,56, 19, 14, 14, 10]
출력	["######", "### #", "## ##", " #### ", " #####", "### # "]


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(n, arr1, arr2) {
  arr1 = arr1.map((v) => {
    let decimal = v.toString(2);
    return "0".repeat(n - decimal.length) + decimal;
  });
  arr2 = arr2.map((v) => {
    let decimal = v.toString(2);
    return "0".repeat(n - decimal.length) + decimal;
  });

  return arr1.map((_, i) => {
    let a = [...arr1[i]];
    let b = [...arr2[i]];
    return a.reduce((s, _, idx) => {
      if (a[idx] === "1" || b[idx] === "1") return s + "#";
      if (a[idx] === "0" && b[idx] === "0") return s + " ";
    }, '');
  });
}


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
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
}



/* 다른 사람 풀이 2*/
var solution = (n, a, b) => a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'))



/* 다른 사람 풀이 3*/
function solution(n, arr1, arr2) {
  let num1, num2, s;
  let answer = [];
  //manually turning decimals to binaries cos i can!
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    s = '';
    for (let j = 0; j < n; j++) {
      s = (num1 % 2 + num2 % 2) ? '#' + s : ' ' + s;
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(s);
  }
  return answer;
}


/* 다른 사람 풀이 4*/
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, 0)
        .replace(/1/gi, "#")
        .replace(/0/gi, " ")
    );
  }
  return answer;
}


/* 다른 사람 풀이 5*/
function solution(n, arr1, arr2) {
  var answer = [];
  let c;
  for (let i = 0; i < n; i++) {
    c = (arr1[i] | arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ");
    while (c.length != n) {
      c = " " + c;
    }
    answer.push(c);
  }
  return answer;
}


/* 다른 사람 풀이 6*/
function solution(n, arr1, arr2) {
  return arr1.map((i, index) => ('0'.repeat(n) + (i | arr2[index]).toString(2)).slice(-n)).map(i => i.replace(/0/g, ' ').replace(/1/g, '#'));
}


