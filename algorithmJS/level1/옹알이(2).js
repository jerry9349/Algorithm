
/*문제*/
/*
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 
네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.


제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 30
문자열은 알파벳 소문자로만 이루어져 있습니다.



입출력 예
babbling	                                            result
["aya", "yee", "u", "maa"]	                            1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	        2



입출력 예 설명
입출력 예 #1

["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

입출력 예 #2

["ayaye", "uuuma", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 
"aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다. 
"yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.


유의사항
네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 
예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.


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
    const changeBabbling = babbling.map(v=>{
        return v.replace(/aya/g,'A').replace(/ye/g,'B').replace(/woo/g,'C').replace(/ma/g,'D')
    })

    const answer = changeBabbling.filter(v=>{
        const includeABCD = v.replace(/[^ABCD]/g,'')
        const excludeABCD = v.replace(/[ABCD]/g,'')
        let isRepeatSameBabbling = false
        let beforeBabbling = ''

        if(excludeABCD !== ''){
            return false
        }

        includeABCD.split('').forEach(nowBabbling=>{
            if(nowBabbling === beforeBabbling){
                isRepeatSameBabbling = true
            }
            beforeBabbling = nowBabbling
        })

        return !isRepeatSameBabbling
    }).length

    return answer
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
function solution(babbling) {
    const changeBabbling = babbling.map(v=>{
        return v.replace(/aya/g,'A').replace(/ye/g,'B').replace(/woo/g,'C').replace(/ma/g,'D')
    })

    const answer = changeBabbling.filter(v=>{
        const includeABCD = v.replace(/[^ABCD]/g,'')
        const excludeABCD = v.replace(/[ABCD]/g,'')
        let isRepeatSameBabbling = false
        let beforeBabbling = ''

        if(excludeABCD !== ''){
            return false
        }

        includeABCD.split('').forEach(nowBabbling=>{
            if(nowBabbling === beforeBabbling){
                isRepeatSameBabbling = true
            }
            beforeBabbling = nowBabbling
        })

        return !isRepeatSameBabbling
    }).length

    return answer
}



/* 다른 사람 풀이 2*/
function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;
  
    return babbling.reduce((ans, word) => (
      !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
  }



/* 다른 사람 풀이 3*/
function solution(babbling) {
    const babblables = ["aya", "ye", "woo", "ma"];

    return babbling.reduce((possible, babbl, index) => {
        for (let i = 0; i < babblables.length; i += 1) {
            if (babbl.includes(babblables[i].repeat(2))) return possible;
        }

        for (let i = 0; i < babblables.length; i += 1) {
            babbl = babbl.split(babblables[i]).join(' ').trim();
        }

        if (babbl) return possible;

        return possible += 1;
    }, 0)
}


/* 다른 사람 풀이 4*/
function solution(babbling) {
    let reg = new RegExp("^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$");
    return babbling.reduce((acc, cur) => {
        return reg.test(cur) ? acc + 1 : acc;
    }, 0);
}





/* 다른 사람 풀이 5*/
function solution(babbling) {
    let result = 0;
    const babblings = ['aya', 'ye', 'woo', 'ma'];

    const division = (babble) => {
        let newBabble = babble;
        babblings.forEach((el, index) => {
           newBabble = newBabble.replaceAll(el, index+1); 
        });

        for(let i = 0; i < newBabble.length; i++) {            
            if(!+newBabble[i]) return 0;
            if(newBabble[i] === newBabble[i+1]) return 0;
        };
        return 1;
    }  

    babbling.forEach(el => {
       result += division(el); 
    });

    return result
}




/* 다른 사람 풀이 6*/
function solution(babbling) {
    let answer = 0;
    let reg = /aya|ye|woo|ma/g
    babbling.forEach((bab) => {
        const matches = bab.match(reg)
        const str = bab.replace(reg, '')
        if(str === '') {
            let conti = true
            for(let i = 0; i < matches.length-1; i++) {
                if(matches[i] === matches[i+1]) {
                    conti = false
                    break
                }
            }
            if(conti) answer++
        }
    })
    return answer;
}