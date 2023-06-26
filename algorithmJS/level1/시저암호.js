
/*문제*/
/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
"z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.


제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.



입출력 예
s	        n	  result
"AB"	    1	  "BC"
"z"	      1	  "a"
"a B z"	  4	  "e F d"



*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(s, n) {
  let str = "";
  const upperArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  return [...s].map((v, i) => {
    let upperIdx = upperArr.indexOf(v.toUpperCase());
    if (upperIdx === -1) return v;

    let idx = (upperIdx + n) % 26;

    if (v === v.toUpperCase()) return upperArr[idx];
    else return upperArr[idx].toLowerCase();
  }).join('');
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
function caesar(s, n) {
  var result = "";
  // 함수를 완성하세요.
  var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",];

  var splitArray = s.split("");
  //indexOf 로 배열에서 인덱스를 알아낸 후 인덱스에 n을 더한다.

  for (var i = 0; i < splitArray.length; i++) {
    var mn = alphabetArray.indexOf(splitArray[i]);
    splitArray[i] = alphabetArray[mn + n];

    result = result + "" + splitArray[i];
  }

  return result;
}



/* 다른 사람 풀이 2*/
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}



/* 다른 사람 풀이 3*/
function solution(s, n) {
  var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
  return s.split('').map(e => chars[chars.indexOf(e) + n]).join('');
}


/* 다른 사람 풀이 4*/
function caesar(s, n) {
  var result = s.replace(/[a-z]/ig, c => [c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1)][1]);

  // 함수를 완성하세요.
  return result;
}

/*

❗️32를 나머지 연산하는 이유가 뭔가요?

- 2진법으로 대문자의 코드들은 1000001~1011010, 소문자는 1100001~1111010라서 앞에 2자리로 빼고는 같습니다. 
즉, 앞의 2자리로 대소문자를, 나머지 5자리로 알파벳을 구분합니다. 
따라서 '(c & 96(1100000))'으로 앞의 2자리만 가져와 먼저 대소문자 구분부를 빼놓습니다.

- 뒤에 남은 5자리의 수(00001~11010)를 가져오기 위해 'c % 32(100000)'를 합니다. 
a가 1부터 시작하니 나머지 계산을 위해 '- 1'을 해서 초기점을 0으로(00000~11001) 잡아줍니다. 
그럼 0~25의 숫자 중 하나가 나오고 여기서 n만큼 더해준 뒤 26으로 나머지 계산을 하고 
다시 아까 빼 준 1을 다시 더한 것입니다.
*/




/* 다른 사람 풀이 5*/
function caesar(s, n) {
  var result = "";

  var car = ""
  for (var i = 0; i < s.length; i++) {
    if (s[i] == ' ') result += ' '
    else result += String.fromCharCode((s.charCodeAt(i) > 90) ? (s.charCodeAt(i) + n - 97) % 26 + 97 : (s.charCodeAt(i) + n - 65) % 26 + 65)
  }

  return result;
}





/* 다른 사람 풀이 6*/
function caesar(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    var startCode = lowerCase ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)
    return String.fromCharCode((c.charCodeAt(0) - startCode + n) % 26 + startCode)
  })
}























