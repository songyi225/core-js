const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => (t.style.height = 0);

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    depthList.forEach(h);

    // 모든 뎁스의 높이를 0으로 만들면 아래 줄이 실행되면서 내가 선택한 애만 높이를 가짐
    target.style.height = '100px';
  });
});

header.addEventListener('mouseleave', () => depthList.forEach(h));
