/* ---------------- */
/* Condition        */
/* ---------------- */

/* const jsName = prompt('자바스크립트의 "공식" 이름은 무엇인가요?', '');

if (jsName === 'ECMAScript') { // 대소문자 구분해서 소문자를 써도 오류임
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
} */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  let didWatchMovie = confirm('너 그 영화 봤니?');
  // prompt 보다는 했냐안했냐를 직접적으로 물어보는 confirm
  // 확인을 누르면 true가 담기고 취소를 누르면 false가 담김

  if (didWatchMovie) {
    console.log('그 영화 재밌더라~');
  } else {
    let goingToWatchMovie = confirm('그 영화 볼거니?');
    if (goingToWatchMovie) {
      // 영화 볼거야
      let withWho = prompt('누구랑 볼거니?');
      if (withWho === 'you') {
        console.log('사랑해~~');
      } else {
        console.log('왜 나랑 안봐?');
      }
    } else {
      // 안볼거야
      console.log('그래 나중에 그 영화 꼭 봐봐');
    }
  }
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const message =
  didWatchMovie === 'yes'
    ? '그 영화 참 재밌더라'
    : goingToWatchMovie.includes('yes')
      ? '언제 볼까? 재밌겠다.'
      : '그래..';

console.log(message);

// didWatchMovie.includes('yes') -> didWatchMovie 안에 'yes'라는 글자가 들어있느냐! include는 문자의 메서드

// 멀티 조건부 연산자 식

// 추가~~ 삼항식으로 값을 내보내는 것만 보여준것~~
function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}

// render(document.body,'안녕ㅋㅋㅋ') -> 안녕ㅋㅋㅋ 라는 글자가 문서에 표시됨
// render(document.body,true) -> true 이므로 '안녕' 글자가 표기됨
// 다만, 저 안에는 식이 와야하기 때문에 if문이 들어갈 수는 없다.
