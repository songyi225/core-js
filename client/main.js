class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('탄생함!');
  }

  disconnectedCallback() {
    console.log('쥬금!');
  }
}

customElements.define('c-element', MyElement);

const elem = document.createElement('c-element');

const app = document.getElementById('app');

app.appendChild(elem);
