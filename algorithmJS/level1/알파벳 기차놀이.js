
/*문제*/
/*
전 세계의 알파벳들이 기차놀이를 하기 위해서 한 장소에 모였다. 
뒤죽박죽 같은 스펠링의 알파벳들도 섞여 들어가 있다. 
여기에서 반복 없이 가장 긴 알파벳 길이를 구하는 함수, solution을 완성하라.
예를 들어, 문자열 s가 'abssccbsbsv' 일 때, 반복 없이 가장 긴 알파벳 길이는 3이다. 


제한 사항
- 기차놀이의 참가한 알파벳은 중복될 수 있다. 반복 없는 가장 긴 문자열을 찾는다.


입력 형식
- s는 길이가 1이상 1,000이하인 문자열이다.

출력 형식
- 반복 없이 가장 긴 알파벳 길이를 출력한다.

제약 사항
- 0 < num <= 100000




*/



/*
*
*
*
*
*
*/
/* 내 풀이 틀림!!*/
function solution(s) {
  let map = new Map();
  let max = 0;
  let start = 0;
  
  for (let i = 0; i < s.length; i++){
      if(map.has(s[i])){
          start = i;
      }
      map.set(s[i],i);
      max = Math.max(max, i - start  + 1);
  }
  return max;
}
 





/* 정답 코드 */
function solution(s) {
  let map = new Map();
  let max = 0;
  let start = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (map .has(s[i])) {
          start = Math.max(start , map.get(s[i]) + 1);
      }
      map.set(s[i], i);
      max = Math.max(max, i - start  + 1);
  }
  
  return max;
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
