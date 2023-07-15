
/*문제*/
/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 
바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.


제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.



입출력 예
n	lost	reserve	    return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	        4
3	[3]	    [1]	        2



입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 
학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(n, lost, reserve) {
    let arr = Array(n).fill(1);
    lost.map((v) => arr[v-1]--);
    reserve.map((v) => arr[v-1]++);
    arr.map((v, i, student) => {
        const before = i-1 > -1 ? student[i-1] : -1;
        const after = i+1 >= n ? -1 : student[i+1];
        
        if(student[i] === 2 && before === 0){
            student[i]--;
            student[i-1]++;
        }
        if(student[i] === 2 && after === 0){
            student[i]--;
            student[i+1]++;
        }
    })
    return arr.filter((v) => v >= 1).length;
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
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}



/* 다른 사람 풀이 2*/
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}



/* 다른 사람 풀이 3*/
function solution(n, lost, reserve) {
    const realReserve = reserve.filter(r => !lost.includes(r));
    const realLost = lost.filter(r => !reserve.includes(r));

    // const reserveNum = reserve.lenght - realReserve.length;

    const ableNum = realLost.filter(a => {
        return realReserve.find((b, i) => {
            const has = b === a-1 || b === a+1;
            if (has) {
                delete realReserve[i];
            }
            return has;
        });
    }).length;
    return n - (realLost.length - ableNum);
}


/* 다른 사람 풀이 4*/
function solution(n, lost, reserve) {

    const actualReserve = reserve.filter ( el => (lost.indexOf(el) === -1 ) );
    const actualLost = lost.filter ( el => (reserve.indexOf(el) === -1 ) );

    const set = Array.apply(undefined, new Array(n)).map( (el, i) => (actualLost.indexOf(i+1) === -1) ?  true : false );

    for (let hero of actualReserve ) {
        if (set[hero - 1 - 1] === false) {
            set[hero - 1 - 1] = true;
        } else if (set[hero - 1 + 1] === false) {
            set[hero - 1 + 1] = true;
        }
    }
    console.log(actualReserve, set, set.filter( el => el).length);
    return set.filter( el => el).length
}





/* 다른 사람 풀이 5*/
function solution(n, lost, reserve) {
    const uLost = lost.filter((item) => !reserve.includes(item));
    const uReserve = new Set(reserve.filter((item) => !lost.includes(item)));
    let result = n - uLost.length;
    uLost.forEach((lostItem) => {
      if (uReserve.has(lostItem - 1)) {
        uReserve.delete(lostItem - 1);
        result += 1;
      } else if (uReserve.has(lostItem + 1)) {
        uReserve.delete(lostItem + 1);
        result += 1;
      }
    });
    return result;
  }




/* 다른 사람 풀이 6*/
function solution(n, lost, reserve) {
    var answer = 0;
    let baseArr = [];

    for (let i = 1; i <= n; i++ ) {
        let baseC = 1;

        if  (lost.includes(i)) { baseC--; }
        if  (reserve.includes(i)) { baseC++; }

        baseArr.push(baseC);
    }

    baseArr.forEach((v, i) => {
        if (i != 0 && baseArr[i - 1] == 2 && baseArr[i] == 0) {
            baseArr[i - 1] = 1;
            baseArr[i] = 1;
        }

        if (i < baseArr.length && baseArr[i + 1] == 2 && baseArr[i] == 0) {
            baseArr[i + 1] = 1;
            baseArr[i] = 1;
        }

        if (baseArr[i] > 0) answer += 1;
    })

    return answer;
}