
/*문제*/
/*
과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, 
k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

한 상자에 사과를 m개씩 담아 포장합니다.
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.
(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 
다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 
과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.


제한사항
3 ≤ k ≤ 9
3 ≤ m ≤ 10
7 ≤ score의 길이 ≤ 1,000,000
1 ≤ score[i] ≤ k
이익이 발생하지 않는 경우에는 0을 return 해주세요.

입출력 예
k	m	score	                                result
3	4	[1, 2, 3, 1, 2, 3, 1]	                8
4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33


입출력 예 설명
입출력 예 #1

문제의 예시와 같습니다.
입출력 예 #2

다음과 같이 사과 상자를 포장하여 모두 팔면 최대 이익을 낼 수 있습니다.
사과 상자	가격
[1, 1, 2]	1 x 3 = 3
[2, 2, 2]	2 x 3 = 6
[4, 4, 4]	4 x 3 = 12
[4, 4, 4]	4 x 3 = 12
따라서 (1 x 3 x 1) + (2 x 3 x 1) + (4 x 3 x 2) = 33을 return합니다.



*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let arr = Array.from({ length: Math.floor(score.length / m) }, (_, i) => score.slice(i * m, i * m + m));
  return arr.reduce((a, c) => a + (c[m - 1] * m), 0);
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
solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m


/* 다른 사람 풀이 2*/
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}



/* 다른 사람 풀이 3*/
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i = i + m) {
    const min = score[i + m - 1];
    if (min) answer += min * m;
  }
  return answer;
}


/* 다른 사람 풀이 4*/
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let l = score.length, idx = -1;
  let answer = 0;

  for (let i = 0; i < parseInt(l / m); i++) {
    idx += m;
    answer += score[idx] * m;
  }

  return answer;
}




/* 다른 사람 풀이 5*/
function solution(k, m, score) {

  const scores = [...score];


  let sum = 0;
  scores.sort((a, b) => b - a);

  console.log('scores', scores);

  let index = m - 1;
  while (index < scores.length) {
    const p = scores[index] || 0;
    sum += p * m;
    index += m;
  }


  return sum;

}







