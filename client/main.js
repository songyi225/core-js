class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /* html */ `
    <style>
      :host{
        background-color: orange;
      }
    </style>
        <div> nickName : kind-tiger </div>
        <slot name="username"></slot>
        <slot name="age"></slot>
        <slot name="gender"></slot>
        <slot name="common"></slot>
        <slot></slot>
        <slot name ="email">any@naver.com</slot>
    `;
  }
}

customElements.define('user-card', UserCard);
