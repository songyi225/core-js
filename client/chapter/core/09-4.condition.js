/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  (emailAddress === undefined || emailAddress === null)
  ? 'user@company.io'
  : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io'; 
receivedEmailAddress = emailAddress || 'user@company.io';



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px';
const isActive = false;

console.log(null || WIDTH); // 10px
console.log(null ?? WIDTH); // 10px
console.log(0 ?? WIDTH); // 0 -> 정의되었으니까 0
console.log(0 || WIDTH); // 10px
console.log(undefined || WIDTH); // 10px
console.log(undefined ?? WIDTH); // 10px

console.log(isActive || WIDTH); // 10px
console.log(isActive ?? WIDTH); // false -> 정의되었으니까

console.log('' || WIDTH); // 10px
console.log('' ?? WIDTH); // 빈 문자

// a ||= b -> a = a || b -> a가 false일 떄 b의 값을 a에 할당
// a &&= b -> a가 true일 때 b의 값을 a에 할당
// a ??= b 도 됨 -> a = a ?? b -> a가 null 또는 undefined일때 b의 값을 a에 할당

