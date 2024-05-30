/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof YEAR); // number
console.log(typeof String(YEAR)); // string
console.log(typeof (YEAR + '')); // string

// undefined, null
let days = null;
console.log(days + ''); // null

let friend;
console.log(friend); // undefined
console.log(friend + ''); // 문자형 undefined -> 타입은 string

// boolean
let isClicked = true;
console.log(String(isClicked)); // true

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friends;
console.log(Number(friends)); // NaN

// null
let day = null;
console.log(Number(day)); // 0

// boolean
// true = 1, false = 0
let isMarried = true;
console.log(Number(isMarried)); // 1

// string
let num = '100';
console.log(Number(num)); // 명시적
console.log(num * 1); // 암시적
console.log(num / 1); // 암시적
console.log(+num); // 암시적

// numeric string
const width = '120.5px';

console.log(Number(width));
console.log(+width);

console.log(parseInt(width, 10)); // 10진수로 작동해달라~ 진수를 같이 입력해주는게 좋다

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friends)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
