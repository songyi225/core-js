/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength :', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter :', extractCharacter);

// enumerable 열거가능한 -> 이누머블
// iterable 반복가능한 -> 이터러블
// immutable 불변의, 변할수없는 -> 이뮤터블
// mutable 변경가능한 -> 뮤터블
// mutant 돌연변이 -> 뮤턴트

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);
console.log(immutableChangeCharacter);

// 부분 문자열 추출
let slice = message.slice(4, -1);
let subString = message.substring(2, 5);
// let subStr = message.substr();

console.log('slice: ', slice);
console.log('subString: ', subString);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf: ', indexOf);
// 브라우저 체크 방법

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저 쓰세요?';
  }
  return browserName;
}
checkBrowser(); // chrome

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf: ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes: ', includes); // true

let startsWith = message.startsWith('Less');
console.log('startsWith: ', startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith: ', endsWith);

let str = '       a    b   c   d           ';

// 공백 잘라내기
let trimStart = str.trimStart(); // 요걸로 이름이 바뀜!!
console.log('trimStart: ', trimStart);

let trimEnd = str.trimEnd(); // 요걸로 이름이 바뀜!!
console.log('trimEnd: ', trimEnd);

let trim = str.trim();
console.log('trim: ', trim);

let replaceAll = str.replaceAll(' ', '');
console.log('replaceAll: ', replaceAll);

let replace = str.replace(/\s*/g, ''); // 정규표현식
console.log('replace: ', replace);

/* function trimText(string) {
  return string.replaceAll(' ', '');
} */

/* arrow function 형태 */
const trimText = (s) => s.replace(/\s*/g, '');

console.log(trimText(str)); // abcd

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat: ', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase: ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase: ', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

toCamelCase('ease-in-out-bounce'); // easeInOutBounce
toCamelCase('ease in out bounce'); // easeInOutBounce
toCamelCase('ease_in_out_bounce'); // easeInOutBounce

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

toPascalCase('ease_in_out_bounce'); // EaseInOutBounce
