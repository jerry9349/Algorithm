
/*문제*/
/*
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.


제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

입출력 예
a	  b	    result
5	  24	  "TUE"
*/



/*
*
*
*
*
*
*/
/* 내 풀이 */
function solution(a, b) {
  function getMonth(m){
      if([1,3,5,7,8,10].includes(m)) return 31;
      if([4,6,9,11].includes(m)) return 30;
      if(m === 2) return 29;
      return 0;
  }
  function getDady(d){
      let day = '';
      switch(d%7){
      case 3 : day = 'SUN';break;
      case 4 : day = 'MON';break;
      case 5 : day = 'TUE';break;
      case 6 : day = 'WED';break;
      case 0 : day = 'THU';break;
      case 1 : day = 'FRI';break;
      case 2 : day = 'SAT';break;
      }
      return day;
  }
  let resultMonth = 0;
  for (let i = 0; i < a; i++) {
      resultMonth += getMonth(i);
  }

  return getDady(resultMonth+b);
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
function getDayName(a,b){
  var tempDate = new Date(2016, a-1, b);

  return tempDate.toString().slice(0,3).toUpperCase();
}



/* 다른 사람 풀이 2*/
function getDayName(a,b){
  var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daySum;
if(a < 2) {
  daySum = b - 1;
} else {
  daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
}
  return dayList[daySum % 7];
}



/* 다른 사람 풀이 3*/
function getDayName(a,b){
  var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var date = new Date(`2016-${a}-${b}`);
var day = date.getDay()
  return arr[day];
}


/* 다른 사람 풀이 4*/
function getDayName(a,b){
  return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
 }






