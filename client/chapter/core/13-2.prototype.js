/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수를 모던한 방식으로 쓸 수 있는 class 문법   V

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이');
// class를 호출했기 때문에 new 키워드 생략하면 에러가남!!

// Animal로부터 확장된 Tiger를 정의하겠다
class Tiger extends Animal {
  static option = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }

  static bark(sound) {
    return sound + '🐯';
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이');

console.log(호랑이.hunt('사슴'));
console.log(호랑이.legs);
console.log(호랑이);
console.log(Tiger.bark('어흥'));

/* ---------------------------------- todo ---------------------------------- */

class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});

const button2 = new Todo({
  input: '#todo2',
  button: '.register2',
  renderPlace: '.todoList2',
});
