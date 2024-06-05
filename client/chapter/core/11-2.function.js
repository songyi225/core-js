/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

/* function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);


console.log(resultX);
console.log(resultY);
console.log(resultZ);
 */

[1000, 5000, 2500].forEach(function () {});


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 '유사배열' 이라 불리는 변수가 하나 존재
  // console.log(arguments); -> 유사배열 (심볼 이터레이터 가지고 있음)
  let total = 0;

  /* for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
    // console.log(arguments[i]);
  } */

  /* for .. of 문
  for (let value of arguments) {
    total += value;
  } */

  // arguments를 배열로 만들어주면 쓸 수 있음
  // 유사배열을 배열로 만들어서 배열의 능력인 forEach를 사용할 수 있도록하자!

  /* arguments.forEach(function (item) {
    console.log(item);
  }) */

  const arr = [...arguments];
  // const arr = Array.from(arguments);
  // const arr = Array.prototype.slice.call(arguments);

  /* arr.forEach(function (price) {
    // console.log(item);
    total += price;
  })
 */

  /* const result = arr.reduce(function (acc, cur) {
    return acc + cur
  }, 0) */

  /*
  const result = arr.reduce((acc, cur) => acc + cur, 0);
  return result; 

  // return arr.reduce((acc, cur) => acc + cur, 0);
  */
  

  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }) // -> 일회성으로 배열의 능력을 빌려쓰는 것 */

  // 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype

  // console.log(arguments);


  return total;
};

const result = calculateTotal(1000, 5000, 2500, 4000, 2300)

// console.log(result);

/* -------------------------------------------------------------------------- */
/*                                     map                                    */
/* -------------------------------------------------------------------------- */

const arr = [10, 100, 1000]

const mapValue = arr.map(function (item, index) {
  return item * 2
})

console.log(mapValue);




/* -------------------------------------------------------------------------- */
/*                             익명(이름이 없는) 함수 (표현)식                            */
/* -------------------------------------------------------------------------- */
let anonymousFunctionExpression = function () {};



/* -------------------------------------------------------------------------- */
/*                             유명(이름을 가진) 함수 (표현)식                            */
/* -------------------------------------------------------------------------- */
let namedFunctionExpression = function hello() { };
// 호출할 때는 namedFunctionExpression 얘를 호출해줘야함 (잘쓰지는 않음)



/* -------------------------------------------------------------------------- */
/*                                 콜백 함수 (표현)식                                */
/* -------------------------------------------------------------------------- */
let cb = function (isActive, success, fail) { 
  if (isActive) {
    success() // let success = function(){} 와 동일
  } else {
    fail()
  }
};

cb(
  false,
  function () { 
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다ㅠ');
   }
);


function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
    //location.href = url;
  },
  function () {
    console.log('잘못된 url을 입력했습니다.');
  }
)


// higher-order function 고차함수 -> 콜백함수와는 다름

/* function map(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result
}

map([1, 2, 3]) // [2,4,6] 출력 */


function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]))
  }
  return result
}

map([1, 2, 3], item => item + '11')


// 함수를 인수로 받아 처리함
// 함수를 리턴함

function greater(n) {
  return function (m) {
    return n > m
  }
}

greater(5)(3) // true

// 화살표함수로 바꿔서 .. 이해안돼ㅠㅠ
// const g = (n) => (m) => n > m





/* -------------------------------------------------------------------------- */
/*                             함수 선언문 vs. 함수 (표현)식                            */
/* -------------------------------------------------------------------------- */

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;


// 함수가 선언됨과 동시에 실행되는 것을 말합니다.

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// encapsulation (캡슐화)

/* 
(function () {
  var a = 10;
  console.log('안녕');
})()

console.log(a); // 'a' is not defined

// => var 변수를 캡슐화시킴
 */


const MASTER = (function () {
  
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };

})();














const people = [
  {
    nickName:'tiger',
    age:40
  },
  {
    nickName:'beom',
    age:45
  },
  {
    nickName: 'seon',
    age:20
  }
]



const template = people.reduce(function(htmlCode,cur){
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
},'')



// document.body.insertAdjacentHTML('beforeend',template)