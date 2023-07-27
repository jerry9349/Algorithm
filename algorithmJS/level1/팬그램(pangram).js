
/*문제*/
/*
문자열 s가 주어집니다. s가 pangram인지 판단하는 함수, solution을 완성해주세요.
pangram이란 모든 알파벳이 사용된 문장을 말합니다.



입력 형식
- s는 길이가 1 이상 1,000 이하인 문자열입니다.
- s는 소문자 알파벳과 공백('')으로만 구성됩니다.

출력 형식
- 문자열이 pangram인지 구합니다.
- 문자열이 pangram이면 true 그렇지 않으면 false를 출력합니다.





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
  let map = new Map();
  const alphabet = Array.from({length : 26}, (_,i) => String.fromCharCode(97+i));
  let strSet = [...new Set(s)];
  strSet.forEach((v,i) => map.set(v,i));
  for (let v of alphabet){
      if(map.has(v) === false) return false;
  }
  return true;
}
 





/* 정답 코드 */
/*이 코드의 시간 복잡도는 O(n)입니다. 
여기서 n은 문자열 s의 길이를 의미합니다.

해당 코드는 문자열 s에서 중복을 제거하고, 알파벳 문자들을 strSet 배열에 저장한 후, 
이를 map에 키-값 쌍으로 변환합니다. 
그리고 알파벳 문자들을 순회하면서 해당 알파벳이 map에 있는지 확인합니다. 
이때, map.has() 메서드의 시간 복잡도는 O(1)입니다.
 따라서 알파벳 문자들을 모두 확인하는데 걸리는 시간은 O(26)이며, 
 상수 시간이므로 결국 전체 시간 복잡도는 O(n)이 됩니다.

따라서 해당 코드는 효율적이며, 
입력된 문자열 s에 모든 알파벳 문자가 포함되어 있으면 true를 반환하고,
 그렇지 않으면 false를 반환합니다.
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
