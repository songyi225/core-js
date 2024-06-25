const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};

/* -------------------------------------------------------------------------- */
/*                               xhr callback 방식                              */
/* -------------------------------------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  //const { method = 'GET', url = '', body = null, onsuccess = null, onfail = null } = options;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      // complete
      if (status >= 200 && status < 400) {
        // success
        onSuccess(JSON.parse(response));
      } else {
        // fail
        onFail('실패..');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// 1. 무조건 매개변수 순서에 맞게 작성해야하는 문제를 해결 -> 객체로 받아서 구조분해할당
// 2. 매개변수 안쓸때는 ? -> 기본값 설정해둠 or mixin.. 요건 내일

/* xhr({
  onsuccess(data) {
    console.log(data);
  },
  body: user,
  url: ENDPOINT,
  onfail() {},
}); // 이렇게 순서 상관없음
 */
/* const options = {
  method: 'POST',
  url: ENDPOINT,
  body: user,
  onsuccess() {},
  onfail() {},
}; */

/*   
xhr(
  'GET',
  ENDPOINT,
  user,
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
); */
// GET : user {}
// POST : 데이터 전달

/* ==========이런 형태로 코드를 짜고 싶다============ */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// 사용할 때는 아래와 같이
xhr.post(
  ENDPOINT,
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

/* -------------------------------------------------------------------------- */
/*                               xhr의 promise 방식                              */
/* -------------------------------------------------------------------------- */

// xhr
//   .post(ENDPOINT)
//   .then(() => {})
//   .then(() => {});
