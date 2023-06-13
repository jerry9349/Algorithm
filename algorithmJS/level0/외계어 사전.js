
/*문제*/
/*
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
2 ≤ spell의 크기 ≤ 10
spell의 원소의 길이는 1입니다.
1 ≤ dic의 크기 ≤ 10
1 ≤ dic의 원소의 길이 ≤ 10
spell의 원소를 모두 사용해 단어를 만들어야 합니다.
spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
dic과 spell 모두 중복된 원소를 갖지 않습니다.

입출력 예
spell	                dic	                                    result
["p", "o", "s"]	      ["sod", "eocd", "qixm", "adio", "soo"]	2
["z", "d", "x"]	      ["def", "dww", "dzx", "loveaw"]	        1
["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	2

입출력 예 설명
입출력 예 #1

"p", "o", "s" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2를 return합니다.
입출력 예 #2

"z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 dic에 존재합니다. 따라서 1을 return합니다.
입출력 예 #3

"s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 dic에 존재하지 않습니다. 따라서 2을 return합니다.




유의사항
입출력 예 #3 에서 "moos", "smm", "som"도 "s", "o", "m", "d" 를 조합해 만들 수 있지만,
spell의 원소를 모두 사용해야 하기 때문에 정답이 아닙니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이1 */
function solution(spell, dic) {
  let result = 2;
  let check = false;

  for (let i = 0; i < dic.length; i++) {
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j]) === false) { break; }

      if (j === spell.length - 1) check = true;
    }
    if (check) {
      result = 1; break;
    }
  }
  return result;
}
// 위 코드는 문자열이 한번씩만 쓰여진 것이 아닌 하나의 문자열이 여러번 쓰인 경우에도 통과 되도록 작성했다.


/* 내 풀이2 */
const strCombine = (arr, str = '') => arr.length === 0 ? [str] : arr.flatMap((v, i) => strCombine([...arr.slice(0, i), ...arr.slice(i + 1)], str + v));

function solution(spell, dic) {
  let spellArr = strCombine(spell);

  let result = dic.reduce((a, c) => spellArr.includes(c) ? a += 1 : a, 0);

  return result === 0 ? 2 : 1;
}

// 재귀 함수를 사용해서 시간 초과로 제출 실패 했다. 
// 위 코드는 문자열을 한번씩만 사용해서 만들 수 있는 문자열을 확인하는 코드이다.


/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(p, d) {
  return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}



/* 다른 사람 풀이 2*/
function solution(spell, dic) {
  return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
}


/* 다른 사람 풀이 3*/
function solution(spell, dic) {
  const match = Array.from(spell)
  return dic.filter(t => {
    return match.every(k => t.includes(k))
  }).length > 0 ? 1 : 2;
}


/* 다른 사람 풀이 4*/
function solution(spell, dic) {
  return dic.filter(s => s.length === spell.length)
    .map(s => { console.log(`1: ${s}`); return s; })
    .filter(s => spell.every(c => s.includes(c)))
    .map(s => { console.log(`2: ${s}`); return s; })
    .length > 0 ? 1 : 2
}


/* 다른 사람 풀이 5*/
function solution(spell, dic) {

  return dic.map(v => v.split("").sort().join("")).indexOf(spell.sort().join("")) > -1 ? 1 : 2
}

