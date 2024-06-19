/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className);

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('bye');
first.classList.remove('hello');

console.log(first.classList);
/* 
function addClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);
  if (isArray(className)) {
    className.forEach((c) => node.classList.add(c));
    return;
  }
  if (typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두번째 인수는 문자타입이어야 합니다.');
  }
  node.classList.add(className);
} */

//addClass('.first', 'bye');
//addClass('.first', ['a', 'b', 'c']); // 배열 넣었을 때도 클래스이름으로 들어갈 수 있도록
//addClass('.first', 'a', 'b'); // 이렇게 여러개의 문자 넣었을 때도 클래스이름으로 들어갈 수 있도록

/* function removeClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  node.classList.remove(className);
} */

//removeClass('.first');

/* function toggleClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
} */

/* toggleClass('.first', 'hello'); */

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'dodgerblue';

first.style.cssText = `
  color:white;
  padding:1rem;
  border: 1px solid red;
`;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first)['font-size']);

/* function getStyle(node, prop) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new SyntaxError('getStyle 함수의 두번째 인수는 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop];
}

getStyle('.first', 'font-size'); // '32px'

function setStyle(node, prop, value) {
  if (isString(node)) node = getNode(node);

  node.style[prop] = value;
}

setStyle('.first', 'color', 'red'); // set red color

const css = (node, prop, value) => {};

css('.first', 'color'); // getter
css('.first', 'color', 'orange'); // setter
 */
