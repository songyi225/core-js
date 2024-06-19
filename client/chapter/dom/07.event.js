/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: xPos, offsetY: yPos }) {
  /* let x = e.offsetX;
  let y = e.offsetY; 
  */ // 구조분해할당한게 아래
  // const { offsetX: x, offsetY: y } = e;
  // 구조분해할당 한걸 위에 함수 인수값에 넣어줌
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${xPos - w / 2}px,${yPos - h / 2}px)`;
}

// ground.addEventListener('click', handleClickBall);

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  let template = /* html */ `
    <div class="emotion" style="top:${y}px; left:${x}px;">😍</div>
  `;

  insertLast(ground, template);
}

function debounce(callback, limit = 500) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

function throttle(callback, limit = 500) {
  let waiting = false;

  return function (e) {
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, 1000);
    }
  };
}

// ground.addEventListener('mousemove', debounce(handleMove));
ground.addEventListener('mousemove', throttle(handleMove));

// throttle (수도꼭지), debounce(공 튀김 방지)
