
/*문제*/
/*
선분 3개가 평행하게 놓여 있습니다. 
세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 
형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 
두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.


제한사항
lines의 길이 = 3
lines의 원소의 길이 = 2
모든 선분은 길이가 1 이상입니다.
lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
-100 ≤ a < b ≤ 100

입출력 예
lines	result
[[0, 1], [2, 5], [3, 9]]	2
[[-1, 1], [1, 3], [3, 9]]	0
[[0, 5], [3, 9], [1, 10]]	8

입출력 예 설명
입출력 예 #1

두 번째, 세 번째 선분 [2, 5], [3, 9]가 [3, 5] 구간에 겹쳐있으므로 2를 return 합니다.
입출력 예 #2

겹친 선분이 없으므로 0을 return 합니다.
입출력 예 #3

첫 번째와 두 번째 선분이 [3, 5] 구간에서 겹칩니다.
첫 번째와 세 번째 선분 [1, 5] 구간에서 겹칩니다.
두 번째와 세 번째 선분 [3, 9] 구간에서 겹칩니다.
따라서 [1, 9] 구간에 두 개 이상의 선분이 겹쳐있으므로, 8을 return 합니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(lines) {
  let overlaps = []; // 겹치는 선분들의 시작과 끝을 저장할 배열

  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      let [lineStart1, lineEnd1] = lines[i];
      let [lineStart2, lineEnd2] = lines[j];

      // 두 선분이 겹치는지 if문으로 확인
      if (lineStart2 <= lineEnd1 && lineStart1 <= lineEnd2) {
        // 두 선분이 겹치는 경우
        let overlap_start = Math.max(lineStart1, lineStart2);
        let overlap_end = Math.min(lineEnd1, lineEnd2);
        let overlap_length = overlap_end - overlap_start;

        // 중복 계산 방지 및 중첩되는 부분 제거
        for (let k = 0; k < overlaps.length; k++) {
          let [start, end] = overlaps[k];
          if (
            overlap_start <= end &&
            overlap_end >= start
          ) {
            overlap_start = Math.min(overlap_start, start);
            overlap_end = Math.max(overlap_end, end);
            overlap_length = overlap_end - overlap_start;
            overlaps.splice(k, 1); // 중첩 부분 제거
            k--; // 배열 크기가 줄어들었으므로 인덱스 조정
          }
        }

        overlaps.push([overlap_start, overlap_end]);
      }
    }
  }

  // 겹치는 부분들의 길이 합산
  let total_length = overlaps.reduce(
    (sum, [start, end]) => sum + (end - start),
    0
  );

  return total_length;
}


/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => c > 1 ? a + 1 : a, 0)
}


/* 다른 사람 풀이 2*/
function solution(lines) {
  var min = Math.min(...lines.flat());
  var max = Math.max(...lines.flat());
  var totalOverlappedLength = 0;

  function isInbound(x, [a, b]) {

    var s = Math.min(a, b);
    var e = Math.max(a, b);

    x = x + 0.5;

    if ((s < x) && (x < e)) {
      return true;
    }
    return false;
  }

  for (let x = min; x < max; x++) {
    var overlappedOnX = 0;
    lines.forEach((el) => {
      if (isInbound(x, el)) {
        overlappedOnX = overlappedOnX + 1;
      }
    });

    if (overlappedOnX > 1) {
      totalOverlappedLength = totalOverlappedLength + 1;
    }
  }

  return totalOverlappedLength;
}


/* 다른 사람 풀이 3*/
function solution(lines) {
  let min = Math.min(...lines.flat());
  let max = Math.max(...lines.flat());
  let arr = Array(max - min + 1).fill(0);

  for (let line of lines) {
    line.sort((a, b) => a - b);
    if (min < 0) {
      line[0] += Math.abs(min)
      line[1] += Math.abs(min)
    }
    for (let i = line[0]; i < line[1]; i++) arr[i]++;
  }

  return arr.filter(v => v > 1).length;
}


/* 다른 사람 풀이 4*/
function solution(lines) {
  var answer = 0;
  const set = new Set();
  const overlaped = new Set();
  lines.forEach(line => {
    const arr = new Array(Math.max(line[0], line[1]) - Math.min(line[0], line[1]) + 1).fill(0).map((_, i) => Math.min(line[0], line[1]) + i);
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        overlaped.add(arr[i]);
        continue;
      }
      set.add(arr[i]);
    }
  })
  const arr = [...overlaped].sort((a, b) => a - b);
  let left = -1;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (left === -1) {
      left = i;
      continue;
    }
    if (i !== arr.length - 1 && arr[i + 1] - arr[i] !== 1) {
      right = i;
      if (right - left > 1)
        answer += right - left;
      left = -1;
      right = arr.at(-1);
    }
  }
  if (left !== -1 && right - left > 1) {
    answer += right - left;
  }
  return answer;
}


/* 다른 사람 풀이 5*/
function solution(lines) {
  const sortedArray = lines.map((val) => val.sort((a, b) => a - b).map((subVal) => subVal + 99));
  const indexArray = Array(199).fill().map((_, idx) => idx);
  const countArray = Array(199).fill(0)
  sortedArray.forEach(([a, b]) => {
    for (let i = a; i < b; i++) {
      countArray[i]++
    }
  })

  return countArray.filter((val) => val > 1).length;
}


/* 다른 사람 풀이 6*/
function solution(lines_) {
  let max = -100;
  let min = 100;
  for (const value of lines_.flat()) {
    max = Math.max(max, value);
    min = Math.min(min, value);
  }
  const lines = lines_.map(_ => _.sort((a, b) => a - b).map(__ => __ - min));
  max -= min;
  min = 0;
  const arr = Array(max).fill(0);
  lines.forEach(([start, end]) => {
    const length = end - start;
    Array.from(Array(length), (_, i) => start + i).forEach((v) => {
      arr[v]++;
    });
  })
  return arr.filter(v => v !== 0 && v !== 1).length;
}


/* 다른 사람 풀이 7*/
function solution(lines) {
  // rgb line
  let rgbline = new Array(200).fill('')
  lines.map(v => v.sort((a, b) => a - b)).map((v, rgb) => {
    for (let i = v[0]; i < v[1]; i++)
      rgbline[i + 100] += rgb === 0 ? 'r' : rgb === 1 ? 'g' : 'b'
  })
  return rgbline.filter(e => /\w{2,3}/.test(e)).length
}
