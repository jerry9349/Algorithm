
/*문제*/
/*
게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
"죠르디"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.
게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 위쪽에는 크레인이 있고 
오른쪽에는 바구니가 있습니다. (위 그림은 "5 x 5" 크기의 예시입니다). 
각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 
모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 
게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 
집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 
다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.
만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.
위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.
크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 
아무런 일도 일어나지 않습니다. 
또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. 
(그림에서는 화면표시 제약으로 5칸만으로 표현하였음)
게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 
크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.




[제한사항]
board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
0은 빈 칸을 나타냅니다.
1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
moves 배열의 크기는 1 이상 1,000 이하입니다.
moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.


입출력 예
board	                                                        moves	            result
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4



입출력 예에 대한 설명
입출력 예 #1

인형의 처음 상태는 문제에 주어진 예시와 같습니다. 
크레인이 [1, 5, 3, 5, 1, 2, 1, 4] 번 위치에서 차례대로 인형을 집어서 바구니에 옮겨 담은 후, 
상태는 아래 그림과 같으며 바구니에 담는 과정에서 터트려져 사라진 인형은 4개 입니다.


*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(board, moves) {
    let map = new Map();
    let result = [];
    let count = 0;

    for (let i = 0; i < board.length; i++) {
        board[i].forEach((v,idx) => {
            if(v !== 0){
                if(!map.get(idx+1)) map.set(idx+1, [v]);
                else map.get(idx+1).push(v);
            }
        });
    }

    for(let j = 0; j < moves.length; j++){
        let cur = map.get(moves[j]).shift(0);
        let last = result[result.length-1];

        if(cur === last && result.length > 0){
            result.pop();
            count += 2;
        }else{
            if(cur) result.push(cur);
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

/*

*/

/* 다른 사람 풀이 1*/
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};



/* 다른 사람 풀이 2*/
function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}


/* 다른 사람 풀이 3*/
function solution(board, moves) {
    var answer = 0;
    var arr = []
    for(var i = 0; i < moves.length; i++){
        for(var j = 0; j < board.length;j++){
            if(board[j][moves[i]-1] !== 0){
                arr.push(board[j][moves[i]-1])
                board[j][moves[i]-1] = 0
                break;
            }
        }
        if (arr.length >=2){
            if (arr[arr.length-1] === arr[arr.length-2]){
                answer +=2
                arr.splice(arr.length-2,2)

            }
        } 
    }
    return answer;
}


/* 다른 사람 풀이 4*/
function solution(board, moves) {
    let answer = 0, arr = [], blen = board.length;
    for(let i = 0; i < moves.length; i++) {
        let j = 0, m = moves[i] - 1, alen = arr.length;
        while(j < blen && board[j][m] == 0) j++;
        if(j == blen) continue;
        arr.push(board[j][m]);
        board[j][m] = 0;
        if(alen != 0 && arr[alen] == arr[alen - 1]) {
            arr.splice(alen - 1, 2);
            answer += 2;
        }
    }
    return answer;
}


/* 다른 사람 풀이 5*/
function solution(board, moves) {
    var answer = 0;
    var arr = new Array();

    for(var m = 0; m<moves.length; m++){
        for(var i = 0; i<board.length; i++){
            if(board[i][moves[m]-1]){
                if(arr[arr.length-1] == board[i][moves[m]-1])
                    answer+=2, arr.pop();
                else
                    arr.push(board[i][moves[m]-1]);
                board[i][moves[m]-1] = 0;
                break;
            }
        }
    }
    return answer;
}


/* 다른 사람 풀이 6*/
function solution(board, moves) {
    var cnt = 0;
    let poparr=[];
    moves.forEach((n)=>{
        for(let i=0; i<board.length; i++){
            if(board[i][n-1] !== 0) {
                poparr.push(board[i][n-1]);
                if(poparr[poparr.length-1] === poparr[poparr.length-2]) {
                    cnt++;
                    poparr.pop();
                    poparr.pop();
                }
                board[i][n-1] = 0;
                return false;
            }
        }
    });
    return cnt*2;
}
