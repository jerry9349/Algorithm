
/*문제*/
/*
두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 
k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). 
X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, X = 3403이고 Y = 13203이라면, 
X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 
다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 
2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)

두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.


제한사항
3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
X, Y는 0으로 시작하지 않습니다.
X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.



입출력 예
X	        Y	      result
"100"	  "2345"	  "-1"
"100"	  "203045"	"0"
"100"	  "123450"	"10"
"12321"	"42531"	  "321"
"5525"	"1255"	  "552"



입출력 예 설명
입출력 예 #1

X, Y의 짝꿍은 존재하지 않습니다. 따라서 "-1"을 return합니다.
입출력 예 #2

X, Y의 공통된 숫자는 0으로만 구성되어 있기 때문에, 두 수의 짝꿍은 정수 0입니다. 따라서 "0"을 return합니다.
입출력 예 #3

X, Y의 짝꿍은 10이므로, "10"을 return합니다.
입출력 예 #4

X, Y의 짝꿍은 321입니다. 따라서 "321"을 return합니다.
입출력 예 #5

지문에 설명된 예시와 같습니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(X, Y) {
  let answer = '';
  const arrX = X.split('')
  const arrY = Y.split('')
  const yObj = {}

  arrX.sort((a,b)=>b-a)

  arrY.forEach((y)=>{
      if(yObj[y] === undefined)
          yObj[y] = 1
      else
          yObj[y]++
  })

  arrX.forEach(x=>{
      if(yObj[x] !== undefined && yObj[x] !== 0){
          yObj[x]--
          answer = answer.concat(x)
      }
  });

  if(answer.length === 0 ) return "-1";
  else if (answer[0] === "0" )return "0";
  else return answer;
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
function solution(X, Y) {
  let answer = '';
  const arrX = X.split('')
  const arrY = Y.split('')
  const yObj = {}

  arrX.sort((a,b)=>b-a)

  arrY.forEach((y)=>{
      if(yObj[y] === undefined)
          yObj[y] = 1
      else
          yObj[y]++
  })

  arrX.forEach(x=>{
      if(yObj[x] !== undefined && yObj[x] !== 0){
          yObj[x]--
          answer = answer.concat(x)
      }
  });

  if(answer.length === 0 ) return "-1";
  else if (answer[0] === "0" )return "0";
  else return answer;
}



/* 다른 사람 풀이 2*/
function solution(X, Y) {
  let result = '';
  const numObj = {};

  for (const char of X) {
      numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
      if (!numObj[char]) continue;
      result += char;
      numObj[char]--;
  }

  if (result === '') return '-1';
  if (+result === 0) return '0';
  return [...result]
      .map((num) => +num)
      .sort((a, b) => b - a)
      .join('');    
}



/* 다른 사람 풀이 3*/
function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(''))].filter((number) => {
      return Y.includes(number);
  }).sort((a, b) => b - a)

  if (!commonNumbers.length) return '-1';

  if (!Number(commonNumbers[0])) return '0';

  return commonNumbers.map((number) => {
      const Xcount = X.split('').reduce((count, Xnumber) => {
          if (Xnumber === number) return count += 1;

          return count;
      }, 0)

      const Ycount = Y.split('').reduce((count, Ynumber) => {
          if (Ynumber === number) return count += 1;

          return count;
      }, 0)        

      return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
  }).join('')
}


/* 다른 사람 풀이 4*/
function solution(x, y){
  let answer = "";
  const xHash = new Map();
  const yHash = new Map();

  x.split("")
      .forEach(i=> xHash.set(i, xHash.has(i) ?  xHash.get(i)  +1 : 1));
  y.split("")
      .forEach(i=> yHash.set(i, yHash.has(i) ? yHash.get(i) +1 : 1));


    for(let i = 9; i >= 0; i --){
        const index = i.toString();
        if(!xHash.has(index)) continue;
        if(!yHash.has(index)) continue;

        const num = Math.min(xHash.get(index), yHash.get(index))
        answer += index.repeat(num)
    }
    if(answer.length === 0) return "-1"
    if(answer[0] === "0" ) return "0";
    return answer;
}





/* 다른 사람 풀이 5*/
function count(string, target) {
  return string.split('' + target).length - 1
}

function solution(X, Y) {
  result = [];
  for (i=0; i<10; i++) {
      c = Math.min(count(X, i), count(Y, i))
      for (j=0; j<c; j++) {
          result.push('' + i)
      }
  }
  result = result.sort().reverse().join('')
  return (result == '' ? '-1' : (
      +result == 0 ? '0' : result
  ))
}