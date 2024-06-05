/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900); */

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}


// 함수 선언         매개변수 / parameter / 인자
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()) {
  
  // 다양한 validation 방법
  // if (priceC === undefined) { priceC = 0; }
  // if (!priceC) { priceC = 0; }
  // priceC ||= 0;
  // priceC ??= 0;

  return  priceA + priceB + priceC + priceD;
}

// 함수 호출  인수 / argument
const result = calcPrice(1000, 3000); 

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건







/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string = 0 , base: number):string; -> 타입스크립트의 기능~

function rem(pxValue = 0, base = 16) {

  if (!pxValue) {
    throw new Error('rem 함수의 첫번째 인수는 필수 입력 값 입니다.');
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue, 10);
  }

  if (typeof base === 'string') {
    base = parseInt(base, 10);
  }

  return pxValue/base+ 'rem';
}

/* 테스트코드 :: Jest로도 가능 */
// Test Driven Development = TDD
console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');


rem('25px') // 1.5625rem 반환
rem(20) // 1.25rem
rem('30px', 10) // 3rem


// css(node: string, prop: string, value: number|strung) : string;



/* CASE1 :: 먼저 first 잡고 시작하는 방법
const first = document.querySelector('.first');

function setStyle(node, prop, value) {
  // node.style.prop = value; // style 객체에 prop이라는 키로 value를 집어넣어버림 -> 걍 이 값이 그대로 들어가버림
  node.style[prop] = value; // 대괄호 표기법 사용하여 스타일의 밸류를 설정해줌
}

setStyle(first,'color','blue'); 
*/


/* CASE2 :: setStyle이 모두 문자열인 경우
function setStyle(node, prop, value) { 

  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  node.style[prop] = value;
}
setStyle('.first', 'color', 'blue'); 
*/

/* CASE3 :: 두번째 인수가 문자가 아닌 경우
function setStyle(node, prop, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string') {
    throw new Error('setStyle 함수의 두번째 인수는 문자 타입이어야 합니다.')
  }
  node.style[prop] = value;
}
setStyle('.first', 1234, 'blue');
*/

const first = document.querySelector('.first');

function setStyle(node, prop, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string') {
    throw new Error('setStyle 함수의 두번째 인수는 문자 타입이어야 합니다.');
  }
  if (!value) {
    throw new Error('setStyle 함수의 세번째 인수는 필수값입니다.');
  }
  node.style[prop] = value;
}
setStyle('.first', 'color', 'blue'); 


/* -------------------------------------------------------------------------- */
/*                           스타일 속성을 가져오는 함수                             */
/* -------------------------------------------------------------------------- */

function getStyle(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string') {
    throw new Error('getStyle 함수의 두번째 인수는 문자 타입이어야 합니다.');
  }

  return getComputedStyle(node)[prop];
}

getStyle('.first', 'backgroundColor') // 32px

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.


function css(node, prop, value) {

  /* if (!value) {
    //getter
    return getStyle(node, prop)
  } else {
    //setter
    setStyle(node, prop, value)
  } */

  // 삼항식으로 바꾸면
  return !value ? getStyle(node, prop) : setStyle(node, prop, value);

}


// const css2 = (node,prop,value) => !value ? getStyle(node,prop) : setStyle(node,prop,value);

// css2('.first','color','red') // setter


css('.first', 'color', 'red'); // setter
css('.first', 'color'); // getter

