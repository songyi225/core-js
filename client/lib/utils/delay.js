import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//   });
// });

const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공!');
  } else {
    실패('실패');
  }
});

/* function delayP(timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve('성공!!');
      } else {
        reject('실패!!');
      }
    }, timeout);
  });
} */

// delay(() => {
//   console.log('나도 성공!');
// });

/* delayP()
  .then((res) => {
    console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })

  .then((res) => {
    console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';
    console.log(res);
  });
 */

/* -------------------------------------------------------------------------- */
/*                                    객체 합성                                   */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  // console.log('delay config:', config);

  // options과 defaultOptions이 mixin이 된 최종 형태가 config
  let { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// delayP(true, '성공!!', '알 수 없는 오류!', 1000);
delayP(3000);

/* -------------------------------------------------------------------------- */
/*                                 async await                                */
/* -------------------------------------------------------------------------- */

async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!!');
    }, 2000);
  });

  const result = await p;

  console.log(result);

  return;
}

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 라면끓이기();

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/172');
  //console.log(data.sprites.other.showdown['front_default']);

  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
