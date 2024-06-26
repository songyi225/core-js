const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const tiger = async () => {
  const response = await fetch(ENDPOINT);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

const response = await tiger();
console.log('async: ', response.data);

/* 
// IIAFE
(async function () {
  // 이안에 모든 코드를 다 넣어서 써줘도됨
})() 
  */
