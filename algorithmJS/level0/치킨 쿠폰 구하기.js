
/*문제*/
/*
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

제한사항
chicken은 정수입니다.
0 ≤ chicken ≤ 1,000,000

입출력 예
chicken	result
100	    11
1,081	  120

입출력 예 설명
입출력 예 #1

100마리를 주문하면 쿠폰이 100장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다.
10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.
따라서 10 + 1 = 11 을 return합니다.
입출력 예 #2

1081마리를 주문하면 쿠폰이 1081장 발급되므로 서비스 치킨 108마리를 주문할 수 있습니다. 그리고 쿠폰이 1장 남습니다.
108마리를 주문하면 쿠폰이 108장 발급되므로 서비스 치킨 10마리를 주문할 수 있습니다. 그리고 쿠폰이 8장 남습니다.
10마리를 주문하면 쿠폰이 10장 발급되므로 서비스 치킨 1마리를 주문할 수 있습니다.
1마리를 주문하면 쿠폰이 1장 발급됩니다.
가지고 있는 쿠폰이 총 10장이므로 서비스 치킨 1마리를 추가로 주문할 수 있습니다.
따라서 108 + 10 + 1 + 1 = 120 을 return합니다.

*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(chicken) {
  let coupon = chicken;
  let rest = 0;
  let service = 0;

  while (coupon >= 10) {
    const div = Math.floor(coupon / 10);
    service += div;
    rest = coupon % 10;
    coupon = div + rest;
  }
  return service;
}


/*
*
*
*
*
*
*/

/*
❗️설명❗️
1. 치킨 갯수에서 `-1`을 하는 이유는 주문한 치킨 수에 대해 발급되는 쿠폰 수를 계산하기 위해서입니다. 
주어진 조건에 따르면 한 마리당 쿠폰을 한 장 발급받기 때문에, 
예를 들어 10마리의 치킨을 주문하면 10장의 쿠폰이 발급됩니다. 
따라서 쿠폰 수와 치킨 수는 일치하지 않고, -1을 하여 쿠폰 발급 수를 구하는 데 사용됩니다.

2. 나누기 9를 하는 이유는 발급된 쿠폰 수를 바탕으로 서비스 치킨의 수를 계산하기 위해서입니다. 
주어진 조건에 따르면 10장의 쿠폰을 모으면 치킨 한 마리를 서비스로 받을 수 있습니다. 
따라서 쿠폰 수를 10으로 나누면 받을 수 있는 서비스 치킨의 수가 계산됩니다.

3. 주어진 치킨 수에서 1을 빼는 것은, 주문한 치킨 수에 해당하는 쿠폰을 발급받기 위한 조건을 만족하기 위함입니다.
예를 들어, 10마리의 치킨을 주문하면 10장의 쿠폰이 발급되는데, 
이는 10장의 쿠폰을 사용하여 서비스 치킨을 받을 수 있습니다. 
하지만 이 문제에서는 10장의 쿠폰을 모으면 서비스 치킨을 받을 수 있으므로, 실제로는 9장의 쿠폰이 필요합니다.
따라서, 주어진 치킨 수에서 1을 빼는 것은, 실제로 필요한 쿠폰의 수를 계산하기 위한 조치입니다. 
그 후에 **`9`**로 나누어 몫을 계산하여 받을 수 있는 서비스 치킨의 수를 구합니다.
결과적으로, 주어진 코드는 주문한 치킨 수에서 1을 빼고, 
그 값을 9로 나눈 몫을 계산하여 받을 수 있는 서비스 치킨의 수를 구하는 것입니다.
*/

/* 다른 사람 풀이 1*/
function solution(chicken) {
  var coupon = parseInt((chicken - 1) / 9);
  return coupon;
}



/* 다른 사람 풀이 2*/
function solution(chicken) {
  return ~~(chicken * 0.111111)
}
/*
❗️설명❗️
먼저 chicken * 0.111111은 chicken 값을 0.111111로 곱한 결과를 나타냅니다. 
이는 chicken 값을 9로 나눈 것과 동일합니다. 그런데 이 수식 앞에 ~~ 연산자가 사용되었습니다. 
~~ 연산자는 비트 연산자인 논리 NOT 연산자를 두 번 사용하여 소수점 아래의 값이 버려지고 정수 부분만 남게 됩니다. 
즉, 소수점 이하를 버리고 정수 부분만 반환합니다. 
따라서 이 코드는 chicken 값을 9로 나눈 후 소수점 아래 값을 버리고, 정수 부분인 최대 서비스 치킨의 개수를 반환하는 것입니다. 
예를 들어, chicken 값이 100일 경우, 100 * 0.111111은 11.1111이 되고, ~~(100 * 0.111111)은 11이 됩니다. 
따라서 100마리의 주문에 대해 최대 11마리의 서비스 치킨을 받을 수 있다는 의미입니다.
*/


/* 다른 사람 풀이 3*/
function solution(chicken) {

  var eatenChicken = chicken;
  var coupons = chicken;
  while (coupons >= 10) {
    eatenChicken = eatenChicken + parseInt(coupons / 10);
    coupons = coupons % 10 + parseInt(coupons / 10);
  };
  return eatenChicken - chicken;
}


/* 다른 사람 풀이 4*/
function solution(chicken) {
  let answer = 0;
  let rest = 0;
  while (chicken > 1) {
    answer += parseInt(chicken / 10);
    rest += chicken % 10;
    chicken = chicken / 10;
  }
  answer += parseInt(rest / 10);
  return answer;
}


/* 다른 사람 풀이 5*/
function solution(chicken) {
  var answer = 0;
  let coupon = chicken;

  while (coupon > 9) {
    const bonus = Math.floor(coupon / 10);
    answer += bonus
    coupon += bonus - (bonus * 10)
  }
  return answer;
}


/* 다른 사람 풀이 6*/
function solution(chicken) {
  let answer = 0;
  let rem = 0;

  while (chicken >= 10) {

    rem += Math.floor(chicken / 10);

    chicken = Math.floor(chicken / 10) + chicken % 10;

  }

  return rem;
}