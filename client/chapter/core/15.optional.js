/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  // getFullName() {
  //   return `${this.brand}, ${this.maker}`;
  // },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photo && portableFan.photo.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photo?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();
// ? : 메서드가 있는지 없는지 모호할때 쓰임
console.log(fullName); // 에러없이 undefined

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// sync(동기) async(비동기)

const button = document.querySelector('.my-button');

const id = setTimeout(() => {
  const template = /* html */ `
    <button type="button" class="my-button">my-button</button>
  `;
  document.body.insertAdjacentHTML('beforeend', template);
}, 3000);

clearTimeout(id); // 함수를 제거할 수 있음

button?.addEventListener('click', () => {
  console.log('클릭됐어요!');
});

/* console.log(1);
console.log(2); */

/* function print() {
  console.log(3);
}
setTimeout(print,1000) */

/* setTimeout(() => {

},1000) */

// web브라우저가 제공해주는.. window가 제공해주는 setTimeout
/* setTimeout(function () {
  console.log(3);
}, 1000); */

/* console.log(4);
console.log(5);
 */

let count = 0;

const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector('.first').style.transform =
    `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 500) {
    clearInterval(id2);
  }
}, 10);

// interval을 멈추는 두 가지 방법
// clearTimeout(id2);
// clearInterval(id2);

let counter = 0;

function animation() {
  console.log(++counter);

  const id = requestAnimationFrame(animation);

  if (counter >= 100) {
    cancelAnimationFrame(id);
  }
}

animation();
