
/*문제*/
/*
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

제한사항
board는 n * n 배열입니다.
1 ≤ n ≤ 100
지뢰는 1로 표시되어 있습니다.
board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

입출력 예
board	                                                                                  result
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	  16
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]	  13
[[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]	0

입출력 예 설명
입출력 예 #1

(3, 2)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선 총 8칸은 위험지역입니다. 따라서 16을 return합니다.
입출력 예 #2

(3, 2), (3, 3)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선은 위험지역입니다. 따라서 위험지역을 제외한 칸 수 13을 return합니다.
입출력 예 #3

모든 지역에 지뢰가 있으므로 안전지역은 없습니다. 따라서 0을 return합니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(board) {
  // 지뢰 = 1, 위험지역 = 2, 안전지대 = 0,
  const [rangeX, rangeY] = [[-1, 0, 1, 0, -1, 1, 1, -1], [0, 1, 0, -1, 1, 1, -1, -1]];

  const boardLen = board.length;
  for (let i = 0; i < boardLen; i++) {
    for (let j = 0; j < boardLen; j++) {
      if (board[i][j] === 1) {
        // 위험지대는 최대 8개의 경우가 생길 수 있음
        for (let k = 0; k < 8; k++) {
          let [dangerX, dangerY] = [i + rangeX[k], j + rangeY[k]];
          if (dangerX >= 0 && dangerX < boardLen && dangerY >= 0 && dangerY < boardLen
            && board[dangerX][dangerY] !== 1) {
            // 위험지역만 표시
            board[dangerX][dangerY] = 2;
          }
        }
      }
    }
  }

  // 안전지대만 카운트
  let count = 0;
  for (let x = 0; x < boardLen; x++) {
    for (let y = 0; y < boardLen; y++) {
      if (board[x][y] === 0) count++;
    }
  }

  return count;
}


/*
*
*
*
*
*
*/

/* 다른 사람 풀이 1*/
function solution(board) {

  let outside = [[-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]];
  let safezone = 0;

  board.forEach((row, y, self) => row.forEach((it, x) => {
    if (it === 1) return false;
    return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
      ? false : safezone++;
  }));

  return safezone;
}



/* 다른 사람 풀이 2*/
function solution(b) {
  const directions = [[0, 0], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1], [-1, -1], [-1, 0], [-1, 1]]
  let bombSet = new Set();

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      if (b[i][j] == 1) {
        directions.forEach(el => {
          let [nextX, nextY] = el;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (nextX >= 0 && nextX < b.length && nextY >= 0 && nextY < b[i].length) {
            bombSet.add(nextX + ' ' + nextY);
          }
        })
      }
    }
  }
  return b.length * b[0].length - bombSet.size;
}


/* 다른 사람 풀이 3*/
function solution(board) {
  let rows = board.length,
    cols = board[0].length;

  let chk = Array(rows);
  for (let i = 0; i < cols; i++) chk[i] = Array(cols).fill(true);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === 1) {
        for (let i = Math.max(0, row - 1); i < Math.min(row + 2, rows); i++) {
          for (let j = Math.max(0, col - 1); j < Math.min(col + 2, cols); j++) {
            chk[i][j] = false;
          }
        }
      }
    }
  }

  return chk.flat().filter(v => v).length;

}

