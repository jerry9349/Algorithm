
/*문제*/
/*
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.


제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	    return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]


입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  const scores = [0, 0, 0]; // 각 수포자의 점수를 저장할 배열

  // 정답과 수포자의 패턴을 비교하여 점수를 계산
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  const maxScore = Math.max(...scores); // 가장 높은 점수 계산
  const winners = []; // 가장 많은 문제를 맞힌 수포자들을 저장할 배열

  // 가장 높은 점수를 받은 수포자들을 winners 배열에 추가
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      winners.push(i + 1);
    }
  }

  return winners;
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
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) { answer.push(1) };
  if (a2c === max) { answer.push(2) };
  if (a3c === max) { answer.push(3) };


  return answer;
}



/* 다른 사람 풀이 2*/
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}



/* 다른 사람 풀이 3*/
function solution(answers) {
  var answer = [];
  var user = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  var point = [0, 0, 0]

  for (var i = 0; i < answers.length; i++) {
    if (user[0][i % 5] == answers[i]) {
      point[0]++;
    }
    if (user[1][i % 8] == answers[i]) {
      point[1]++;
    }
    if (user[2][i % 10] == answers[i]) {
      point[2]++;
    }
  }

  var max = Math.max.apply(null, point);

  for (var i = 0; i < 3; i++) {
    if (point[i] == max)
      answer.push(i + 1);
  }

  return answer;
}


/* 다른 사람 풀이 4*/
var solution = function (A) {
  var Ps = [
    [1, [1, 2, 3, 4, 5]],
    [2, [2, 1, 2, 3, 2, 4, 2, 5]],
    [3, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]],
  ]
  var Rs = Ps.map(([x, P]) => [x, A.filter((x, i) => x === P[i % P.length]).length])

  var max = Math.max(...Rs.map(x => x[1]))
  return Rs.filter(x => x[1] === max).map(x => x[0])
}



/* 다른 사람 풀이 5*/
function solution(answers) {
  var answer = [];
  var user = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  var point = [0, 0, 0]

  for (var i = 0; i < answers.length; i++) {
    if (user[0][i % 5] == answers[i]) {
      point[0]++;
    }
    if (user[1][i % 8] == answers[i]) {
      point[1]++;
    }
    if (user[2][i % 10] == answers[i]) {
      point[2]++;
    }
  }

  var max = Math.max(...point);

  for (var i = 0; i < 3; i++) {
    if (point[i] == max)
      answer.push(i + 1);
  }

  return answer;
}






