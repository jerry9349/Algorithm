
/*문제*/
/*
두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 
암호의 규칙은 다음과 같습니다.

문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.
예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, 
a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 
따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 
나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 
위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.




제한사항
5 ≤ s의 길이 ≤ 50
1 ≤ skip의 길이 ≤ 10
s와 skip은 알파벳 소문자로만 이루어져 있습니다.
skip에 포함되는 알파벳은 s에 포함되지 않습니다.
1 ≤ index ≤ 20


입출력 예
s	        skip	index	result
"aukks"	    "wbqd"	5	    "happy"



입출력 예 설명
입출력 예 #1
본문 내용과 일치합니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(s, skip, index) {
    let arr = [];


    for (let j = 0; j < s.length; j++) {
        let check = 0;
        let count = 0;
        let str = '';
        while(count < index){
            let checkIdx = ((s[j].charCodeAt()) - 97 + check + 1) % 26;
            str = String.fromCharCode(97+checkIdx);
            if(skip.includes(str) === true) {
                check++;
            }else{
                check++;
                count++;
            }
        }
        arr.push(str);
    }
    return arr.join('');
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
function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}



/* 다른 사람 풀이 2*/
const solution = (s, skip, index) => {
    let ans = '';
    const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
      new RegExp(`[^${skip}]`, 'g'),
    );
    for (const c of s) {
      const newIdx = matched.indexOf(c) + index;
      ans += matched[newIdx % matched.length];
    }
    return ans;
  };


/* 다른 사람 풀이 3*/
function solution(s, skip, index) {
    let answer = '';
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(v => ![...skip].includes(v));
    let sArr = [...s];
    for(let i = 0; i < sArr.length; i++){
        let idx = alphabet.indexOf(sArr[i]);
        const newIdx = (id) => {
            return id > alphabet.length - 1 ? newIdx(id - alphabet.length) : id;
        }
        answer += alphabet[newIdx(idx+index)];
    }
    return answer;
}


/* 다른 사람 풀이 4*/
function solution(s, skip, index) {
    let answer = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    [...skip].forEach(el => {   
        alphabet = alphabet.replace(el, "");
    });

    alphabet = Array.from(alphabet);

    [...s].forEach(el => {   
        if (!alphabet.includes(el)) {
            return;
        }

        let el_idx = alphabet.indexOf(el);
        answer += alphabet[(el_idx + index + alphabet.length) % alphabet.length];
    });

    return answer;
}


/* 다른 사람 풀이 5*/
function solution(s, skip, index) {
    const strings = [...'abcdefghijklmnopqrstuvwxyz'];
    const reverse = Object.fromEntries(Object.entries( strings ).map(([a,b])=>[b,+a]));
    const skipChords = [...skip].map( t => reverse[t] );
    const chords = [...s].map( t => {
      let from = reverse[t];
      let to = reverse[t] + index;        
      for(; from <= to; from++){
        let i = from % 26;
        if( skipChords.includes(i) ) to++;      
      }
      return strings[to%26];
    });
  
    return chords.join('');
  }


/* 다른 사람 풀이 6*/
function getNextChar(curChar, interval, skipSet){
    const nextChars = []
    let n = curChar.charCodeAt()
    while (nextChars.length < interval){
        n = n === 122 ? 97 : n + 1
        if (!(skipSet.has(String.fromCharCode(n)))){
            nextChars.push(String.fromCharCode(n))
        }
    }
    return nextChars[interval - 1]
}

function solution(s, skip, index) {
    return [...s].map(char => getNextChar(char, index, new Set([...skip]))).join("")
}
