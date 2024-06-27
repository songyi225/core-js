import { isString } from './type.js';

const { localStorage: storage } = window;

/* const user = {
  name: 'tiger',
  age: 50,
  gender: 'male',
  email: 'tiger@naver.com',
}; */

/* localStorage.setItem('user', JSON.stringify(user));

const data = JSON.parse(localStorage.getItem('user'));

console.log(data); */

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject();
    }
  });
}

// setStorage('user', user);

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  });
}

/* then 사용 구문
const data = getStorage('user').then((res) => {
  console.log(res);
}); */

/* await 사용 구문
const data = await getStorage('user');
console.log(data); */

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

// deleteStorage('user');
// deleteStorage();

// deleteStorage('user')
// => storage.removeItem('user')
// deleteStorage()
// => storage.clear()
