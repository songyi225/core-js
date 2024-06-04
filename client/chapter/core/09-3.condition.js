/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 11;

switch (a) {
  case 10:
    console.log('10입니다.');
    break;

  case 11:
    console.log('11입니다.');
    break;

  case 12:
    console.log('12입니다.');
    break;

  default:
    console.log('10, 11, 12가 없습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}
/* switch vs. if -------------------------------------------------------- */

// 변수에 담는다 => promt 통해 0~6까지
// 0 : 일 , 1 : 월....이런식으로 콘솔창에 나올수있도록

/* const day = prompt('0~6 까지의 숫자를 입력하세요');
// const day = +prompt('0~6 까지의 숫자를 입력하세요'); -> 요렇게 프롬프트 받을때부터 명시적 형변환을 시켜서 받아도됨

switch (Number(day)) {
  case 0: console.log('일'); break;
  case 1: console.log('월'); break;
  case 2: console.log('화'); break;
  case 3: console.log('수'); break;
  case 4: console.log('목'); break;
  case 5: console.log('금'); break;
  case 6: console.log('토'); break;
} */



// Separation of concerns (관심사의 분리)
// -> 아래와 같이 펑션을 나눔

// 매개변수 n (parameter)
function getRandom(n) { 
  // math 객체 (기본적으로 내장하고 있는 객체)
  const randomDay = Math.floor(Math.random() * n);
  
  // 리턴문이 없으면 undefined만 반환됨
  return randomDay;
}

function getDay(value) {
  //const value = getRandom(num);
  //console.log(value);
  switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}


/* -------------------------------------------------------------------------- */
/*                                new function                                */
/* -------------------------------------------------------------------------- */


function weekend() {
  //getday를 실행해서 요일을 받아옴 일~월
  // 해당 요일을 가지고 토,일인 경우 '주말입니다.' 문구 띄워주기
  // 아니면 전부다 '평일입니다.' 문구 띄우기

  const today = getDay(getRandom(7));

  console.log('today: ', today);
  
  /* if (today === '토' || today === '일') return '주말입니다!';
  else return '평일 ㅠ_ㅠ'; */
  // 다음으로도 바꿀 수 있음 : if (today.includes('토') || today.includes('일')
  
  /* const day = today.includes('토') ? '주말입니다' : today.includes('일') ? '주말입니다' : '평일 ㅠ_ㅠ'
  return day;
  위는 변수안에 담아서 리턴한거고 아래처럼 바로 리턴해줘도됨!*/

  return today.includes('토')
    ? '주말입니다'
    : today.includes('일')
      ? '주말입니다'
      : '평일 ㅠ_ㅠ';
  
}

weekend()
