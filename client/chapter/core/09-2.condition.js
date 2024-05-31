/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log('AandB: ', AandB); // 빈 문자열 반환

// a = a && b; -> a에게 재할당하는 것
// 윗줄은 a &&= b; 와 동일함!! '논리곱 할당 연산자'라고 함

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB: ', AorB); // 첫번째 truty인 A의 값 10이 반환

// a = a || b; 요건 a ||= b; 와 동일! '논리합 할당 연산자'라고 함

// 부정 연산자
let reverseValue = !value; // value인 false 값을 뒤집음
console.log('reverseValue: ', reverseValue); // true

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log('whichFalsy: ', whichFalsy);
// 빈 배열 [] 은 true -> 배열 안에 항목이 비어있지만 배열이라는 항목은 살아있기 때문에
// { thisIsFalsy: false } 은 true -> 객체 자체가 있어서. {} 만 해도 true

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
console.log('whichTruthy: ', whichTruthy);
// 일단 [2, 3].length 라는 값을 내뱉는게 맞음 -> 그런데 얘는 이미 안에서 2로 값이 나와 있어서 이게 true로 변환
// 그래서 변환전은 2가 됨!

// 조건문, or , and, prompt, confirm 등을 사용해서 로직을 짜보자

let userName = prompt('이름을 입력해주세요');

if (userName?.toLowerCase() === 'admin') {
  // admin
  let userPassword = prompt('비밀번호를 입력해주세요');
  if (userPassword?.toLowerCase() === 'themaster') {
    // TheMaster
    console.log('환영합니다!');
  } else if (userPassword === null || userName.replace(/\s*/g, '') === '') {
    // canceled
    console.log('취소되었습니다.');
  } else {
    // other
    console.log('인증에 실패하였습니다.');
  }
} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
  // cancel
  console.log('취소되었습니다.');
} else {
  // other
  console.log('i dont know you');
}

// userName.replace(/\s*/g,'') === ''
// replace는 문자의 메서드
// replace의 기능 -> hello.replace('h','p') => hello안의 문자에서 h를 찾아서 p로 바꿔줘
// 그러면, 공백을 찾아서 빈문자로 바꾸면됨
// /\s*/g -> 정규 표현식
// /이안에 자바스크립트 코드식을 쓰면됨/
// g는 글로벌 -> 모든 것을 찾겠다
// cheatsheet에서 whitespace를 찾으면됨 -> \s -> 공백!
// / \s /
// 다음 단락으로 넘어가는 것도 공백.. 전체를 뜻하는것. 모든 공백! => \s*
// / \s * /
// 공백만 입력했을때 모두 찾아서 빈 문자열로 바꾸면 어쨌든 빈문자열만 남음

// userName?.toLowerCase() -> 옵셔널 체이닝 -> null.toLowerCase 에러 해결~
