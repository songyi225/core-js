/* ------------ */
/* For Loop     */
/* ------------ */

/* -------------------------------------------------------------------------- */
/*                            2 ~ 10까지의 짝수 출력하기                           */
/* -------------------------------------------------------------------------- */

/* // for문 써보기
let n = 1;
for (; n <= 10; ) {
  n++;
  if (n % 2 !== 0) continue;
  console.log(n);
}

// while문 써보기
let j = 0;
while (j <= 10) {
  j++;
  if (j % 2 !== 0) continue;
  console.log(j);
} */

/* -------------------------------------------------------------------------- */
/*                                     실습                                    */
/* -------------------------------------------------------------------------- */

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

/* for (i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  // 대소문자 구분없이
  if (lower.includes('svg') || lower.includes('jquery')) continue;

  console.log(value);
} */

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

// jquery에서 브레이크를 걸면됨
/* for (i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  if (lower.includes('jquery')) break;

  console.log(value);
}
 */

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

/* for (let i = 0; i < l; i++) {
  console.log(frontEndDev.pop()); // 역방향으로 배열을 뽑아냄
  // console.log(frontEndDev.shift()); // 정방향으로 배열을 뽑아냄
} */

// for(let i = l, subject; subject = frontEndDev[--i];){
//   console.log(subject);
// }
