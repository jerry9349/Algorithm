
/*문제*/
/*
네카라쿠배 대학교에서 OX 퀴즈 쇼를 진행한다.
정답을 맞췄을 경우 문제당 1점을 부여하며, 연속적으로 맞출 경우 연속한 정답 개수 만큼의 가산점을 부여한다.
진행자를 위해 채점표를 보고 점수를 산출해주는 프로그램을 제작해주자.
배열 형태의 채점 값이 1(정답), 0(오답)으로 입력되며, 점수의 합계를 반환한다.




입출력 예시
- 예시1
- 입력 : [1, 0, 1, 1, 1, 0, 1, 1, 0, 0]
- 출력 : 10

- 예시2
- 입력 : [1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
- 출력 : 16

- 예시3
- 입력 : [1, 1, 1, 1, 1, 0, 0, 1, 1, 0]
- 출력 : 18






*/



/*
*
*
*
*
*
*/
/* 내 풀이*/
function solution(array) {
  let sum = 0;
  let check = 0;
  for(let i = 0; i< array.length; i++){
      if(array[i] === 1){
          check += 1;
          sum += check;
      }else{
          check = 0;
      }
  }
  return sum;
}

console.log(solution([1, 0, 1, 1, 1, 0, 1, 1, 0, 0]));
console.log(solution([1, 1, 0, 1, 1, 0, 1, 1, 1, 1]));
console.log(solution([1, 1, 1, 1, 1, 0, 0, 1, 1, 0]));

/*
*
*
*
*
*
*/
/* 정답 */
function solution(array) {
  let result = 0;
  let score = 0;
  for(let i = 0; i< array.length; i++){
      if(array[i]){
          result += ++score;
      }else{
        score = 0;
      }
  }
  return result;
}


/*

*/
