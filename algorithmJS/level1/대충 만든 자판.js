
/*문제*/
/*
휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다. 
키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.

예를 들어, 1번 키에 "A", "B", "C" 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 "A", 
두 번 누르면 "B", 세 번 누르면 "C"가 되는 식입니다.

같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다. 
이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 
특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다. 
또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다.
심지어 아예 할당되지 않은 경우도 있습니다. 따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.

이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 
키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.

1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 
입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때, 
각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.

단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.




제한사항
1 ≤ keymap의 길이 ≤ 100
1 ≤ keymap의 원소의 길이 ≤ 100
keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
예를 들어 keymap[0] = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
keymap의 원소의 길이는 서로 다를 수 있습니다.
keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.
1 ≤ targets의 길이 ≤ 100
1 ≤ targets의 원소의 길이 ≤ 100
targets의 원소는 알파벳 대문자로만 이루어져 있습니다.


입출력 예
keymap	            targets	          result
["ABACD", "BCEFD"]	["ABCD","AABB"]	  [9, 4]
["AA"]	            ["B"]	            [-1]
["AGZ", "BSSS"]	    ["ASA","BGZ"]	    [4, 6]



입출력 예 설명
입출력 예 #1

"ABCD"의 경우,
1번 키 한 번 → A
2번 키 한 번 → B
2번 키 두 번 → C
1번 키 다섯 번 → D
따라서 총합인 9를 첫 번째 인덱스에 저장합니다.
"AABB"의 경우,
1번 키 한 번 → A
1번 키 한 번 → A
2번 키 한 번 → B
2번 키 한 번 → B
따라서 총합인 4를 두 번째 인덱스에 저장합니다.
결과적으로 [9,4]를 return 합니다.
입출력 예 #2

"B"의 경우, 'B'가 어디에도 존재하지 않기 때문에 -1을 첫 번째 인덱스에 저장합니다.
결과적으로 [-1]을 return 합니다.
입출력 예 #3

"ASA"의 경우,
1번 키 한 번 → A
2번 키 두 번 → S
1번 키 한 번 → A
따라서 총합인 4를 첫 번째 인덱스에 저장합니다.
"BGZ"의 경우,
2번 키 한 번 → B
1번 키 두 번 → G
1번 키 세 번 → Z
따라서 총합인 6을 두 번째 인덱스에 저장합니다.
결과적으로 [4, 6]을 return 합니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(keymap, targets) {
  let map = new Map();
  let arr = [];

  keymap.forEach((val) => {
      val.split('').map((v,i) => {
          if(!map.has(v)) map.set(v,i+1);
          else {
              if(map.get(v) > i+1) map.set(v, i+1);
          }
      });
  });
  for (let i = 0; i < targets.length; i++) {
      let count = targets[i].split('').reduce((a,c) => {
          if(map.get(c)) return a += map.get(c);
          //else return a;
      },0);
      if(!count) count = -1;
      arr.push(count);
  }
  return arr;
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
function solution(keymap, targets) {
  const answer = [];
  const map = {}
  for (const items of keymap) {
      items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
  }
  for (const items of targets) {
      answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
  }
  return answer;
}



/* 다른 사람 풀이 2*/
function solution(keymap, targets) {
  const answer = [];

  for (let i of targets) {
    let sum = 0;
    for (let j of i) {
      let idxArr = keymap.map((v) => v.split("").indexOf(j) + 1 || Infinity);
      sum += Math.min(...idxArr);
    }
    sum = sum === Infinity ? -1 : sum;
    answer.push(sum);
  }
  return answer.includes(Infinity) ? -1 : answer;
}


/* 다른 사람 풀이 3*/
function solution(keymap, targets) {
  let answer = Array.from({length : targets.length}, ()=> 0);

  targets.forEach((target, index)=>{
     for(let i = 0; i<target.length; i++){
         let min = Number.MAX_SAFE_INTEGER;
         keymap.forEach((kv, ki) => {
             let k = kv.indexOf(target[i]);
             if(k !== -1) min = Math.min(k + 1, min);
         })
         if(min === Number.MAX_SAFE_INTEGER) {
             answer[index] = -1;
             break;
         }
         else answer[index] += min; 
     }
  })

  return answer;
}


/* 다른 사람 풀이 4*/
function solution(keymap, targets) {
  let index = {};
  let answer = [];

  const calTouch = (keys) => {
      let sum = 0;
      for(let i = 0; i < keys.length; i++)
          if(index[keys[i]])  sum += index[keys[i]];
          else return -1;
      return sum;
  }

  for(let keys of keymap){
      for(let i = 0; i < keys.length; i++)
          if(index[keys[i]])  index[keys[i]] = Math.min(index[keys[i]], i + 1);
          else index[keys[i]] = i + 1;
  }

  for(let target of targets){
      answer.push(calTouch(target));
  }
  return answer;
}


/* 다른 사람 풀이 5*/
function solution(keymap, targets) {
  const keytable = keymap.reduce((obj, keys) => {
      [...keys].forEach((key, i) => {
          if (obj[key]) {
              obj[key] = Math.min(obj[key], i + 1)
          } else {
              obj[key] = i + 1
          }
      })
      return obj
  }, {})

  return targets.map(target => {
      let clicked = 0
      for (const key of [...target]) {
          if (!keytable[key]) {
              clicked = -1
              break
          }
          clicked += keytable[key]
      }
      return clicked
  })
}


/* 다른 사람 풀이 6*/
function solution(keymap, targets) {
  let answer = {};

  keymap.map((e)=>{
      e.split("").map((e,i)=>{
          if(answer[e]==undefined)
              answer[e]=100;

          answer[e] = Math.min(answer[e],i+1)   
      }); 
  });

  let result = targets.map((e)=>{
      let count = 0;
      e.split("").map((e,i)=>{
          count += answer[e];
      });

      if(isNaN(count))
          return -1;

      return count;
  })

  return result;
}
