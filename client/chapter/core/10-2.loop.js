/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* let i = 0;

do {
  console.log(i);
  if (i === 3) {
    console.log('3번입니다.');
  }
  i++;
} while (i < 5) */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/* let circle = prompt('순환 횟수?');

do {
  console.log(
    '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
  );
  if (circle < 0) { // 순환횟수를 0보다 작은 -값을 줬을때 종료
    break;
  }
  circle--;
} while (circle) */


// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

/* let count = 0;

do {
  console.log(count++);
} while(circle--) */


/* -------------------------------------------------------------------------- */
/*                                   next 함수                                  */
/* -------------------------------------------------------------------------- */

// 동적 액션을 위해 css 수정이 필요
let first = document.querySelector('.first');

/* do {
  first = first.nextSibling;
} while (first.nodeType !== 1) // element 노드냐
// while (first.nodeType !== document.ELEMENT_NODE)
// first 의 다음 요소 선택 => .second */

function next(node) { // .second가 담기길 기대
  if (typeof node === 'string') { node = document.querySelector(node); } // 해주면 안에서 쿼리셀렉터를 알아서 돌려줌
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
  /* if (value.nodeType !== 1) {
    value = value.nextSibling;
  }
  return value; */
}

const second = next('.first'); // next('.first')

/* -------------------------------------------------------------------------- */
/*                                   prev 함수                                  */
/* -------------------------------------------------------------------------- */

function prev(node) {
  if (typeof node === 'string') { node = document.querySelector(node); }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

const previous = prev('.second');


let value1 = func1(4, 10);

function func1(a, b) {
  return a - b;
}

const func2 = function (a, b) {
  return a * b;
};
let value2 = func2(3, 7);
console.log(value2);