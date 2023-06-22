
/*문제*/
/*
머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.


제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 15
babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
문자열은 알파벳 소문자로만 이루어져 있습니다.


입출력 예
babbling	                                  result
["aya", "yee", "u", "maa", "wyeoo"]	        1
["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3

입출력 예 설명
입출력 예 #1

["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
입출력 예 #2

["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.


유의사항
네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 
예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

※ 공지 - 2022년 10월 27일 문제 지문이 리뉴얼되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(babbling) {
  let count = 0;
  const origin = ["aya", "ye", "woo", "ma"];

  const arr = babbling.filter((v1, i1) => {
    let overlapCount = 0;
    let checkArr = origin.filter((ov) => {
      if (v1.indexOf(ov) === -1) return false;
      if (v1.indexOf(ov) !== v1.lastIndexOf(ov)) { overlapCount++; return false; }
      return true;
    });

    if (overlapCount === 0 && checkArr.length > 0) {
      if (v1.length === checkArr.join('').length) return true;
      else return false;
    } else {
      return false;
    }
  });
  return arr.length;
}

/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;
  })

  return answer;
}


/* 다른 사람 풀이 2*/
function solution(babbling) {
  const wordSet = new Set(["aya", "ye", "woo", "ma"])
  let result = 0;

  for (const word of babbling) {
    let remainWord = '';
    let prevWord = '';
    for (const char of word) {
      remainWord += char;
      if (wordSet.has(remainWord)) {
        if (remainWord === prevWord) break;
        prevWord = remainWord
        remainWord = ''
      }
    }
    if (remainWord === '') result++
  }
  return result;
}


/* 다른 사람 풀이 3*/
function solution(babbling) {
  // return babbling.filter(elem => [...new Set(elem.match(/(aya|ye|woo|ma)/g))]?.join('') === elem ).length
  let answer = 0
  for (let i = 0; i < babbling.length; i++) {
    const word = babbling[i]
    const matchArr = word.match(/(aya|ye|woo|ma)/g)
    const joinStr = matchArr?.join('')

    let continousMatch = false
    for (let j = 0; j < matchArr?.length - 1; j++) {
      if (matchArr[j] === matchArr[j + 1]) {
        continousMatch = true
        break
      }
    }
    if (!continousMatch && word === joinStr) answer++
    // console.log(word, matchArr)
  }
  return answer
}


/* 다른 사람 풀이 4*/
function solution(babbling) {
  let answer = 0;
  let resultArr = [];
  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].match(/(ayaaya|yeye|woowoo|mama)/)) continue;
    resultArr.push(babbling[i].replace(/(aya|ye|woo|ma)/g, ""));
  }
  answer += resultArr.filter((item) => item == "").length;
  return answer;
}


/* 다른 사람 풀이 5*/
function solution(babbling) {
  let count = 0;
  const possible = ["aya", "ye", "woo", "ma"];

  for (let b of babbling) {
    for (const p of possible) {
      b = b.replace(p, "_")
      console.log(b);
      if ((b.includes("_") && b.length == 1) || (b.includes("__") && b.length == 2) || (b.includes("___") && b.length == 3) || (b.includes("____") && b.length == 4)) {
        console.log("실행")
        count++;
        break;
      }
    }
  }
  return count;
}


/* 다른 사람 풀이 6*/
var solution = a => a.reduce((t, b) => Number(/^(aya|ye|woo|ma)+$/.test(b) && !/ayaaya|yeye|woowoo|mama$/.test(b)) + t, 0)

