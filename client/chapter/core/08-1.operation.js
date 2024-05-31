/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log('unary: ', unary);

// 이항 연산자
// 명시적 형변환하여 숫자로 실제 값이 계산되도록
let binary = Number(a) + Number(b);
console.log('binary: ', binary);

// 삼항 연산자 or 삼항식 -> 연산자와 식은 값을 반환한다
let ternary = a > 10 ? '사실입니다' : '거짓입니다'; // a가 10보다 크면 true 아니면 false! 얘는 하나의 식이기때문에 값이 튀어나옴
// 윗줄은 다음 줄과 동일 let ternary = a > 10  -> true를 반환하기 때문에 ㅎ_ㅎ
// 왜 쓰느냐? true나 false 뿐만 아니라 '사실입니다' '거짓입니다' 와 같이 문자를 반환하고싶을때도 있기 떄문에
console.log('ternary: ', ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log('addition: ', addition);

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;
console.log('subtraction: ', subtraction);

// 산술 연산자: 곱셈
let multiplication = 20 * 2;
console.log('multiplication: ', multiplication);

// 산술 연산자: 나눗셈
let division = 30 / 2;
console.log('division: ', division);

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log('remainder: ', remainder);

// 어떤 수를 2로 나누었을 때 나머지가 0이면 짝수 -> 이렇게 짝홀 구분할 떄 쓰임
if (a % 2 !== 0) {
  console.log('홀수야!');
}
{
  console.log('짝수야!');
}

// 산술 연산자: 거듭 제곱
let power = 2 ** 53;
console.log('power: ', power);

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log('coercionTypeConversion: ', coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
// 배열 자체를 문자로 바꿈 -> [1,2,3].toString() + [4,5,6].toString() 이렇게!
// 배열끼리는 더할 수 없다! 식을 쓸수없다 !
console.log('onlyWorkDefaultValues: ', onlyWorkDefaultValues);

// [1,2,3,4,5,6] 을 어떻게 만드느냐?
// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues1 = [1, 2, 3].concat([4, 5, 6]); // 결합
// concat.. 점 찍고 함수 나오는거 -> 메서드임
// 즉, 배열의 메서드다!
console.log('onlyWorkDefaultValues1: ', onlyWorkDefaultValues1);

// 배열을 합치는 방법 또 한가지 (오늘 날에 많이 쓰임)
let first = [1, 2, 3];
let second = [4, 5, 6];

// 앞에 ... 을 쓰게되면 배열이 그냥 나열이 되어버림
console.log(...first, ...second); // 1 2 3 4 5 6
// 그럼 이 상태는 배열이 아님
// 이들을 다시 배열로~
// spread syntax (전개 구문) V
// spread operator (전개 연산자)
console.log([...first, ...second]); // [1, 2, 3, 4, 5, 6]

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

let counter = 0;
console.log('초기 counter: ', counter);
console.log('++counter: ', ++counter);
console.log('counter: ', counter);
console.log('counter++: ', counter++);
console.log('counter: ', counter);

// 복합 할당 연산자
counter += 1;
// 풀어서 쓰면
counter = counter + 1;

console.log('복합 counter: ', counter);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
//let total = (count % 4) * (count /= 2) + count ** 3; // ?

// (count % 4) -> 10 % 4 = 2
// (count /= 2) -> count = count /2 -> 10 / 2 -> 5
// count ** 3 -> count = count * count * count -> 윗줄에서 count에 5가 할당되었기 때문에 5 **3 ->125
// 2 * 5 + 125 -> 10 + 125 -> 135
// console.log(total); // 135

let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;
console.log('total: ', total);
// 요렇게 풀어서 써보기
