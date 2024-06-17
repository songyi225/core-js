/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

/* Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call([]).slice(8, -1).toLowerCase(); // array */

/* function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
} */

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user) => {
  console.log(user.job);
});

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click', () => {
//   console.log('first를 클릭했습니다');
// });

// second.addEventListener('click', () => {
//   console.log('second를 클릭했습니다');
// });

// third.addEventListener('click', () => {
//   console.log('third를 클릭했습니다');
// });

// event delegation (이벤트 위임)

/* 원형 파괴 ----------------------------- */

// push
//people.push('admin');
// pop
//people.pop();
// unshift
// shift
// reverse
const arr = [...people]; // 복사해서 씀
arr.reverse();
// console.log(arr);

// splice
// people.splice(0, 2, '안녕', '잘가'); // 0부터 2까지 지우고 거기에 '안녕', '잘가' 를 넣어줌

// sort
function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫번째 값이 두번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; // 첫번째 값이 두번째 값보다 작은 경우
}

// people.sort(compare); // 나이 어린 순서대로 정렬됨..

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
const toSorted = people.toSorted(compare);

// toReversed
const toReversed = people.toReversed();

// toSpliced
const toSpliced = people.toSpliced(0, 2, '안녕');

// map

// 이름만 담은 배열
/* const nameList = people.map((user) => {
  return user.name;
}); */
const nameList = people.map((u) => u.name);

// 현재 나이에 +2 배열 반환
const ageList = people.map((u) => u.age + 2);

// 태그를 만들어보자
/* const nameTag = people.map(({ name }) => {
  let template = `<li> 이름 : ${name} </li>`;

  return template;
});
 */
/* nameTag.forEach((tag) => {
  console.log(tag);
  document.body.insertAdjacentHTML('beforeend', tag);
}); */
/* 
const ul = document.querySelector('ul');

nameTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag)); */

/* -------------------------------------------------------------------------- */
/*                                     추가                                     */
/* -------------------------------------------------------------------------- */

const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const 황 = people.find((item) => {
  return item.name === '황선우';
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const filter = people.filter((item) => {
  return item.age > 20;
});

// console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

/* const reduce = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0); */
// 줄인 것
const reduce = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';

// split : 문자 ➡️ 배열
const stringToArray = str.split(' ');
console.log(stringToArray); // 배열로 출력

// join : 배열 ➡️ 문자
const stringToString = stringToArray.join('-');
console.log(stringToString);

/* -------------------------------------------------------------------------- */
/*                         forEach는 어떻게 만들어졌는가                            */
/* -------------------------------------------------------------------------- */

// const user = {
//   grades:[1,2,3],
//   sayHi(){

//     this.grades.forEach(()=>{
//       this
//     })
//   }
// }

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const forEach = (f, i) => {
  for (const a of i) f(a);
};

forEach(
  (item) => {
    console.log(item);
  },
  [1, 2, 3]
);

const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a));
  }

  return result;
};

const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) result.push(a);
  }
  return result;
};

_filter((n) => n > 3, [1, 2, 3, 4, 5]);

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const add = (a, b) => a + b;

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);
