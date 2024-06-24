/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // console.log('target: ', e.target);
  // console.log('currentTarget: ', e.currentTarget);
  // console.log('this: ', this);

  console.log('%c section', 'color:orange'); // css를 추가하겠다. 출력 목록은 section이고 출력텍스트컬러는 오렌지
});

article.addEventListener('click', (e) => {
  console.log('%c article', 'color:hotpink');
});

p.addEventListener('click', (e) => {
  console.log('%c p', 'color:dodgerblue');
});

/* 캡처링 ----------------------------------------------------------------- */
