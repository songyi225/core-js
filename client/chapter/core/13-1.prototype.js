/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/* -------------------------------------------------------------------------- */
/*                  객체의 프로토타입  [[prototype]] -> __proto__                 */
/* -------------------------------------------------------------------------- */

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    // setter
    this.stomach.push(food);
  },
  get eat() {
    //getter
    return this.stomach;
  },
};

// animal.setEat('고기');

// set할 때는 : animal.eat = '고기';
// get할 때는 : animal.eat

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal, // 상속을 해줌
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

// 아래와 같은 조회 모두 가능하다!
// 백두산호랑이.pattern // 호랑이무늬
// 백두산호랑이.hunt('사슴') // 사슴에게 조용히 접근한다.
// 백두산호랑이.eat = '사슴'
// 백두산호랑이.eat // ['사슴']

/* -------------------------------------------------------------------------- */
/*                                   생성자 함수                                 */
/* -------------------------------------------------------------------------- */

/* 
function Tiger() {

}
 */
/* 함수를 호출하는 두가지 방법
Tiger() // undefined

new Tiger() // {}
*/

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

const a1 = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

// 스태틱 메서드
Tiger.bark = function (sound) {
  return sound;
};

//Tiger.prototype = a1;
const 금강산호랑이 = new Tiger('금순이');

/* 함수의 메서드 (함수의 능력) */
// call     , , ,   -> 바로 실행
// applay  [ , , ]  -> 바로 실행
// bind             -> 나중에 실행(묶어만둠))

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

// sum.call('hello'); // 함수를 실행시키는데 this에 인수를 전달시키면서 실행
// 그럼 sum(1,1,1) 얘네들은?
// sum.call('hello', 1, 2, 3); // 이렇게 보내면 됨. 리턴값은 6

// sum(); // 다시 window 뜸

// sum.call({ name: 'tiger' }, 1, 2, 3); // 모두 전달될 수 있다...? 뭔말이지

// sum.apply('hello', [1, 1, 1]); // apply는 뒤를 배열로 전달해줌

// const b = sum.bind('hello', 1, 2, 3); // bind는 실행되지 않고 그냥 함수만 튀어나옴. b안에 보관해줌

const user = {
  sayHi() {
    console.log(this); // sayHi
    function sayBye() {
      console.log(this); // window -> call 하면 sayHi가 나옴
    }
    sayBye.call(this);
  },
};

user.sayHi();
