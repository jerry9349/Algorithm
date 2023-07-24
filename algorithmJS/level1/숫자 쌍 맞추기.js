
/*문제*/
/*
크기가 n인 숫자 배열 nums와 숫자 d가 주어진다. 
0 <= a < b < c과 같다고 할 때, 아래 규칙을 만족하는 a,b 쌍의 개수를 출력하는 함수, solution을 완성하라.

nums[a] == nums[b]이면서 nums[a]가 d로 나누어 떨어진다. 
예를 들어, nums가 [4,1,2,1,4]이고, d가 2일 때 다음과 같다.

* nums[0] == ums[4], 4는 2로 나누어 떨어진다.
* nums[1] == nums[3], 1은 2로 나누어 떨어지지 않는다.
따라서 결과는 1이다.


입력 형식
- nums는 1 이상 10 이하의 정수로 이루어진 길이가 100 이하의 배열이다.
- d는 1이상 10 이하의 정수이다.

출력 형식
- 규칙을 만족하는 a, b 쌍의 개수를 출력한다 




*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(nums, d) {
  let count = 0; // 조건을 만족하는 쌍의 개수

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && nums[i] % d === 0) {
        count++; // 조건을 만족하는 쌍을 찾으면 개수 증가
      }
    }
  }

  return count;
}

// 예시 실행
console.log(solution([4, 1, 2, 1, 4], 2)); // 1





/*
*
*
*
*
*
*/

/*

*/
