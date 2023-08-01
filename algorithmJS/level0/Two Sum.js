
/*문제*/
/*
배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수 값을 만들 수 있도록 두개의 index를 반환하는
함수를 작성하시오.
각 입력에 정확히 하나의 솔루션이 있다고 가정하고, 동일한 요소를 두 번 사용하지 않는다.
배열의 index는 오름차순으로 정렬하여 반환한다.




입출력 예시
- 예시1
- 입력 : [2, 7, 11, 15], 9
- 출력 : [0, 1]

- 예시2
- 입력 : [3, 2, 4], 6
- 출력 : [1, 2]

- 예시3
- 입력 : [3, 3], 6
- 출력 : [0, 1]






*/



/*
*
*
*
*
*
*/
/* 내 풀이*/
function solution(array, n){
  let result = [];
  for(let i = 0; i< array.length; i++){
      for(let j = i+1; j < array.length; j++){
          if(array[i] + array[j] === n){
              result = [i,j];
              break;
          }
      }
      if(result.length > 0) break;
  }
  return result.sort((a,b) => a-b);
}

console.log(solution([2, 7, 11, 15], 9));
console.log(solution([3, 2, 4], 6));
console.log(solution([3, 3], 6));

/*
*
*
*
*
*
*/
/* 정답 */
function solution(array, n){
  let map = {};

  for(let i = 0; i< array.length; i++){
    if (map[n - array[i]] !== undefined){
      return [map[n - array[i]], i];
    }
    map[array[i]] = i;
  } 
  return [];
}


/*

*/
