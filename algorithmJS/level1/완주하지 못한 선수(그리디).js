
/*문제*/
/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.


입출력 예
participant	                                        completion	                                return
["leo", "kiki", "eden"]	                            ["eden", "kiki"]	                        "leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	            ["stanko", "ana", "mislav"]	                "mislav



입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
// ❗️비추천❗️
function solution(participant, completion) {
    participant.sort();
    completion.sort();
      const obj = {...participant};
    let str = '';
    let count = 0;
    while(str.length === 0){
      if(obj[count] !== completion[count]){
        str = obj[count];
        break;
      } 
      count++;
    }
    return str;
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
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))



/* 다른 사람 풀이 2*/
///❗️비추천❗️
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}



/* 다른 사람 풀이 3*/
//❗️좋은 코드❗️
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}


/* 다른 사람 풀이 4*/
function solution(participant, completion) {
    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}





/* 다른 사람 풀이 5*/
const solution = (p, c) => {
    p.sort()
    c.sort()
    while (p.length) {
        let pp = p.pop()
        if (pp !== c.pop()) return pp
    }
}



/* 다른 사람 풀이 6*/
function solution(participant, completion) {
    let ret = []
    let hashed = []
    participant.forEach(entry => {
        hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1        
    })
    completion.forEach(entry => {
        hashed[entry] = hashed[entry] - 1
    })

    for (var key in hashed) {
        if (hashed[key] >= 1) return key
    }
}