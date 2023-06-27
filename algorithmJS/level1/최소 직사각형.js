
/*문제*/
/*
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	  가로 길이	  세로 길이
  1	          60	        50
  2	          30	        70
  3	          60	        30
  4	          80	        40

가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 
80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.


제한사항
sizes의 길이는 1 이상 10,000 이하입니다.
sizes의 원소는 [w, h] 형식입니다.
w는 명함의 가로 길이를 나타냅니다.
h는 명함의 세로 길이를 나타냅니다.
w와 h는 1 이상 1,000 이하인 자연수입니다.



입출력 예
sizes	                                            result
[[60, 50], [30, 70], [60, 30], [80, 40]]	        4000
[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	    120
[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	    133



입출력 예 설명
입출력 예 #1
문제 예시와 같습니다.

입출력 예 #2
명함들을 적절히 회전시켜 겹쳤을 때, 3번째 명함(가로: 8, 세로: 15)이 다른 모든 명함보다 크기가 큽니다. 따라서 지갑의 크기는 3번째 명함의 크기와 같으며, 120(=8 x 15)을 return 합니다.

입출력 예 #3
명함들을 적절히 회전시켜 겹쳤을 때, 모든 명함을 포함하는 가장 작은 지갑의 크기는 133(=19 x 7)입니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(sizes) {
  let maxWidth = [];
  let maxHeight = [];
  sizes.forEach((v, i) => {
    maxWidth.push(Math.max(v[0], v[1]));
    maxHeight.push(Math.min(v[0], v[1]));
  });
  return Math.max(...maxWidth) * Math.max(...maxHeight);
}

/*
❗️왜 가로*세로의 max, min 값을 구하는가?❗️

최소한의 크기를 만들기 위해서 입니다. 가로와 세로의 길이중에 긴 값이 가로가 되게 돌린다고 생각하면 됩니다. 
그럼 세로가 무조건 짧은 값이 되겠죠? 
그렇게 해서 담긴 배열 maxWidth, maxHeight 가장 큰값들을 골라서 크기를 만들어야 모든 명함이 들어가기 때문에 그런 겁니다.

*/

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
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}



/* 다른 사람 풀이 2*/
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0] * maxSize[1];
}



/* 다른 사람 풀이 3*/
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach(s => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}


/* 다른 사람 풀이 4*/
function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  let hMax = Math.max.apply(null, sizes.map((item) => item[0]));
  let vMax = Math.max.apply(null, sizes.map((item) => item[1]));
  return hMax * vMax;
}

/*

/* 다른 사람 풀이 5*/
function solution(sizes) {
  const newSizes = sizes.map(e => e.sort((a, b) => a - b));
  return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));
}





/* 다른 사람 풀이 6*/
function solution(sizes) {
  for (let size of sizes) {
    size.sort((a, b) => a - b);
  }
  const a = sizes.sort((a, b) => b[0] - a[0])[0][0];
  const b = sizes.sort((a, b) => b[1] - a[1])[0][1];

  return a * b;
}























