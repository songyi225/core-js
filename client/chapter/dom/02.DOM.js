/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

getNode('.list'); // ul
// $('.list') // ul

// 1. id가 visual-section 인 section 태그 요소
const section = document.querySelector('#visual-section');

// 2. class가 list인 ul 태그 요소
const list = section.querySelector('.list');

// 3. list 요소 안에 about li 태그 요소
const about = list.querySelector('li:nth-child(2)');

// 유사배열을 배열로 만들어서 배열의 메소드인 forEach 돌림
[...list.children].forEach((li) => {
  console.log(li.textContent);
});

// find 사용하는 방법
// const aboutLi = [...list.children].find((li)=>{
//   return li.textContent === 'about';
// })
const aboutLi = [...list.children].find((li) => li.textContent === 'about');

// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');

// 5. form 요소 안에 있는 모든 자식 요소
const children = form.children;
// const children = form.querySelectorAll('*'); // form 태그 안에 있는 모든 태그들 찾아줘

// 6. form 요소 안에 있는 input 태그 요소
const input = form.lastElementChild;
// const input = children[1];
// const input = children[children.length -1];

/* 문서 대상 확인 */
// - matches
// - contains
