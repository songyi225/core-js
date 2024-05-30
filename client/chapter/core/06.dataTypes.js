/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); // object 로 나옴 언어상의 오류

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello'; // string literal
const single = 'hello';
const backtick = `hello ${double + single}`;

console.log(typeof double);
console.log(typeof single);
console.log(backtick);

// +) 특별한 방식으로 문자열을 만들기
const str = new String('hello'); // String() 이라는 함수가 살고 있다! constructor function
// 생성자!
console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150; // number literal
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof floatingPointNumber);
// 전부 number

const num = new Number(150);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
  name: 'tiger',
}; // object literal 방식

// const object = new Object({ name: 'sy' });
// -> 이렇게 오브젝트 객체로 생성도 가능 (constructor function 방식)

console.log(obj);

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);
console.log(typeof id2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

console.clear;

// Object
const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    return a + b;
  },

  sayHi: function () {
    // 1. nomal function
    return 'hello';
  },

  sayHi2: () => {
    // 2. arrow function
    //return 'Hi';
    return this;
  },

  sayHi3() {
    // 3. concise method (많이 씀) - 간결한 메소드
    //return 'hola';
    return this;
  },
};

// Array
const newArray = new Array(2);
// array에 2를 넣으면 2개의 배열? 아니고 강제로 숫자를 넣게되면 비어있는 공간만 완성됨. 인덱스가 없음
// 빈 배열만 나옴
const arr = [
  10,
  100,
  1000,
  null,
  undefined,
  'hello',
  { name: 'tiger' },
  function () {},
];

// function

function 붕어빵틀(재료) {
  return `따끈따끈 맛있는 ${재료} 맛 붕어빵`;
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');

console.log(팥붕);
console.log(슈붕);

// this
