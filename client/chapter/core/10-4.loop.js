/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누굴까?';
  },
};

Object.prototype.nickName = '호랑이'; // 조상을 훼손하는게 가능

// 'creator'라는 키값이 너한테 들어있어?
// console.log('valueOf' in javaScript); // true

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('creator'));
// console.log({}.hasOwnProperty.call(javaScript, 'nickName')); // javaScript 객체가 Object의 해즈원프로퍼티를 빌려서 쓴다?
// -> 메서드 빌려쓰기

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

/* for (let key in javaScript) {
  console.log(key);
} */
// 전역에서 훼손된 nickName이 나옴

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    //console.log(javaScript[key]);
  }
}

// 점 표기법 -> 변수 설정 불가
// 대괄호 표기법 -> 변수 설정 가능

const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  console.log(tens[key]);
  // console.log(tens[key]);
}

// for in 은 객체에게 양보하자..

// 배열은 순서 보장이 안됨. 성능도 좋지 않음



/* -------------------------------------------------------------------------- */
/*                               defineproperty                               */
/* -------------------------------------------------------------------------- */

const obj = {};

obj.nickName = 'tiger';

// Object.defineProperty(obj,'age',{
//   value:30,
//   enumerable: true,
//   writable: false,
//   configurable:true
// })

// Object.defineProperties(obj,{
//   age:{
//     value:30,
//     enumerable:true,
//     writable:true
//   }
// })
