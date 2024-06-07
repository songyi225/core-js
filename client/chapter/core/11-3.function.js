/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 화살표 함수 (표현)식
//                  rest parameter
let calcAllMoney = (...rest) => {
  let sum = 0;

  // for문
  /* for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  } */

  // for .. of문
  /* for (let value of rest) {
    sum += value;
  } */

  /* // forEach => arrow function
  // 일반함수로 만든 것
  rest.forEach(function (item) {
    sum += item;
  });
  // 화살표함수로 바꾼 것
  rest.forEach(item => sum += item); */


  /* // reduce => arrow function
  // 일반 함수로 만든 것
  return rest.reduce(function (acc, cur) {
    return acc + cur
  }, 0)
  
  // 화살표함수로 바꾼것
  return rest.reduce((acc, cur) => acc + cur, 0); */


  return sum;
};

const result = calcAllMoney(1000, 5000, 4500, 13000)
// console.log('result : ', result);

// 화살표 함수와 this

/* function create(nickName, number) {
  return {
    name: nickName,
    age: number,
  };
}
create('tiger', 40) */

// 자바스크립트에서의 함수는 양면의 얼굴 => normal function / constructor function 

// 생성자로만 사용하세요
function Button(text) {
  this.content = text; // 알아서 객체를 리턴하기 때문에 리턴 X
}


// const a = button('more') // more라는 문자가 출력됨

const b = new Button('more'); // 객체가 출력됨

// console.log(a);
// console.log(b);


// this : 나를 호출한 대상을 this

/* const user = {
  name: '이송이',
  sayHi: function () {
    console.log(this); // 나를 호출한 대상인 user
  },
  sayHi2: () => {
    console.log(this); // 애로우 펑션은 디스를 찾지 않음 -> window가 출력됨
  },
  sayHi3() {
    console.log(this);
  }
} */


// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에



const user = {
  name: '이송이',
  total:0,
  grades:[30,60,80],
  totalGrades() {
    this.grades.forEach(function (item){
      console.log(this);
    });
    /* this.grades.forEach(function (item) {
      console.log(this);
    }, this); */
    /* this.grades.forEach((item) => {
      console.log(this);
    }) */
  }
}

user.totalGrades() // 윈도우가 나옴!!



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                거듭제곱 함수                                  */
/* -------------------------------------------------------------------------- */
// pow(numeric: number, powerCount: number): number;

/* 
let pow = (numeric, powerCount) => { 

  let result = 1;
  for (let i = 0; i < powerCount; i++){
    result *= numeric;
  }
  return result;
};

console.log(pow(2,3)) 
*/


// 표현식처럼 쓰는 방법 -> 보기가 편함
// 받은 숫자 자체를 배열로 만들고 배열을 reduce로 돌려서 빼봄
/* 
const pow = (numeric, powerCount) => {
  Array(powerCount).fill(null).reduce((acc)=>{
    return acc *= numeric
  },1) 
}; 
//-> 요걸 아래와 같이 줄일 수 있음
*/

const pow = (numeric, powerCount) => Array(powerCount).fill(null).reduce((acc) => (acc *= numeric), 1);



// repeat(text: string, repeatCount: number): string;
/* let repeat = (text, repeatCount) => {
  let result = '';
  
  for (let i = 0; i < repeatCount; i++){
    result += text;
  }

  return result;
}; 
 */

/* 
const repeat = (text, repeatCount) => {
  return Array(repeatCount).fill(null).reduce((acc) => {
    return acc + text
  },'')
} 
*/

const repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc) => acc + text, '');



