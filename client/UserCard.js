class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /* html */ `
    <button type="button">btn</button>
    `;
    this.button = this.shadowRoot.querySelector('button');
    console.log('this.button:', this.button);
  }

  connectedCallback() {
    this.button.addEventListener('click', this.clickMe);
  }

  clickMe() {
    console.log('Thank you!!!');
  }
}

customElements.define('user-card', UserCard);

/* console.log(
  document.querySelector('user-card').shadowRoot.querySelector('button')
); */
