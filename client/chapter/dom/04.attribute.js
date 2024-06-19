/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
const first = getNode('.first');

console.log(first.hasAttribute('class')); // true

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('data-value')); // get~ : 모든 비표준 속성을 다 순환할 수 있다

// console.log(first.getAttribute('class').split(' ')); // [frst, hello, hi, bye] 이렇게 배열로도 만들수있다~

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'tiger'); // html 엘리먼트에 id가 셋팅됨

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id'); // 위에서 셋팅한 id가 삭제됨

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = 'songyi'; // setter
// html 엘리먼트에 data-name="songyi" 셋팅됨

console.log(first.dataset); // getter

console.log(first.dataset.name); // songyi
console.log(first.getAttribute('data-name')); // songyi

/* -------------------------------------------------------------------------- */
/*                                  좀 더 편하게                                 */
/* -------------------------------------------------------------------------- */

/* function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop))
    throw new TypeError(
      'getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  return node.getAttribute(prop);
}

getAttr('.first', 'sayHi'); // 'hola'

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  if (value === '') {
    node.removeAttribute(prop);
    return; // if조건에 부합한다면 여기까지만 읽고 아래는 읽지마!
    // return node.removeAttribute(prop); 요렇게 한문장으로 해도 된다!
  }

  if (!value)
    throw new ReferenceError(
      'setAttr 함수의 세 번째 인수는 필수 입력값입니다.'
    );

  node.setAttribute(prop, value);
}

// setAttr('.second', 'id', 'bye');
// setAttr('.second', 'class', '');
setAttr('.second', 'class'); */

/* -------------------------------------------------------------------------- */
/*                                    범쌤코드                                    */
/* -------------------------------------------------------------------------- */

/* function typeError(message) {
  return new TypeError(message + '문자 타입 이어야 합니다.');
}

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) {
    typeError('setAttr 함수의 두 번째 인수는');
  }

  if (value === '') {
    node.removeAttribute(prop);
    return;
  }

  // prop에 data가 있어? 그럼 dataset으로 넣기

  if (!value)
    throw new ReferenceError(
      'setAttr 함수의 세 번째 인수는 필수 입력값 입니다.'
    );

  node.setAttribute(prop, value);
}

//
setAttr('.second', 'data-name', 'tiger');  */

/* --------------------- getter, setter 포함한 함수 --------------------- */

/* function attr(node, prop, value) {
  if (!value) {
    // getter
    return getAttr(node, prop);
  } else {
    // setter
    setAttr(node, prop, value);
  }
} */
/* 
const attr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

attr('.first', 'class'); // getter
attr('.first', 'class', 'hahaha'); // setter */

/* --------------------------------------------------------------------- */
