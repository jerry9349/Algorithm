
/*문제*/
/*
알파벳 대/소문자와 숫자 그리고 구분자인 마침표(.), 쉼표(,), 느낌표(!), 물음표(?), 스페이스( )로 이뤄진 문장이 있다.
문장 내에는 구분자를 기준으로 단어를 구분한다.
문장 s가 주어질 때, 각 단어를 거꾸로 뒤집어 모은 문자열 배열을 출력하는 프로그램을 구현하세요.
단, 구분자가 연속으로 나타난 경우에는 그 안에 단어가 없다고 가정하세요.
(즉, 빈 단어는 없다고 가정하세요)


입력 형식
- s : 구분자로 구분된 단어가 모여 있는 문자열

출력 형식
- 문자열 배열을 반환

제약 사항
- 1 <= s <= 1000



입출력 예시
- 예시1
- 입력 : s = "Hello, World!?"
- 출력 : ["olleH", "dlroW"]
- 설명 : 구분자를 기준으로 Hello, World 두 단어가 있으며, 각 단어를 뒤집어 출력하면 된다.






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
  let arr = s.split(/[.,!? ]/);

  let result = [];
  for(let i = 0; i < arr.length; i++){
      if(arr[i].length > 0){
          result.push(arr[i].split('').reverse().join(''));
      }
  }
  return result;
}
console.log(solution("Hello, World!?"));
/*
*
*
*
*
*
*/



/*

*/
