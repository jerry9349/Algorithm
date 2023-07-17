
/*문제*/
/*
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

- 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
- 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 
처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
- s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
- 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.

문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 
분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.


제한사항
1 ≤ s의 길이 ≤ 10,000
s는 영어 소문자로만 이루어져 있습니다.


입출력 예
s	                    result
"banana"	            3
"abracadabra"	        6
"aaabbaccccabba"	    3



입출력 예 설명
입출력 예 #1
s="banana"인 경우 ba - na - na와 같이 분해됩니다.

입출력 예 #2
s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

입출력 예 #3
s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(s) {
    let [x,y,str,arr] = [0,0,'',[]];

    s.split('').reduce((a,c,i,array)=> {
        if(str === '') {
            str = c;
        }
        if(str === c) x++;
        else y++;

        a += c;

        if(x === y){
            str = '';
            arr.push(a);
            return '';
        }else{
            if(array.length-1 === i) arr.push(a);
        }
        return a;
    },'');

    return arr.length;
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
function solution(s, count=0) {
    if(!s) return count
    let [first, ...rest] = s.split("")
    let countSame = 1
    let countInSame = 0
    let i=0
    for(; i<rest.length; i++){
        if(rest[i] === first) countSame++
        else countInSame++
        if(countSame === countInSame) break
    }
    return solution(rest.slice(i+1).join(""), count+1)
}



/* 다른 사람 풀이 2*/
function solution(s) {
    let answer = 0;
    let current;
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(count === 0) {
            answer++;
            current = s[i]
            count = 1
        } else {
            if(current !== s[i]) count--;
            else count++;
        }
    }

    return answer;
}



/* 다른 사람 풀이 3*/
function solution(s) {
    let x = [];
    let dx = [];
    let answer = 0;
    s.split('').forEach(element => {
        !x[0] || x[x.length - 1] === element ? x[x.length] = element : dx[dx.length] = element;
        if (x.length === dx.length) {
            x = [];
            dx = [];
            answer++;
        }
    });
    return (x[0] ? ++answer : answer)
}


/* 다른 사람 풀이 4*/
function solution(str) {
    const count = [1, 0];
    let sel = str[0];
    let res = 0;

    for (let i=1; i<str.length; i++) {
      sel === str[i] ? count[0]++ : count[1]++;

      if (count[0] === count[1]) {
        sel = str[++i];
        res++;
        [count[0], count[1]] = [1, 0];
      }
    }

    return sel ? ++res : res;
}





/* 다른 사람 풀이 5*/
function solution(s) {
    if (s.length === 1) return 1;
    let cnt1 = 1, cnt2 = 0;
    let answer = 0, temp = 0;

    for (let i=1;i<s.length;i++) {
        if (s[temp] === s[i]) cnt1++;
        else cnt2++;

        if (cnt1 === cnt2) {
            answer++;
            temp = i+1;
            cnt1=0, cnt2=0
        }
        else if (i === s.length-1) answer++;
    }
    return answer;
}



/* 다른 사람 풀이 6*/
function solution(s) {
    var answer = 0;
    let cntX = [0,0]
    let base = undefined

    for(let i in s){
        if(base === undefined){
            base = s[i]}
        if(s[i] === base){
            cntX[0]++}
        else{cntX[1]++}
        if(cntX[0] == cntX[1]){
            cntX = [0,0]
            answer++
            base = undefined
        }
    }
    cntX[0] != cntX[1] ?  answer++ : '' 
    return answer;
}