class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(MyComponent.template.content.cloneNode(true));
    }

    set data({ id, title, content, subcontent }) {
        this.shadowRoot.querySelector('.day-number').textContent = id;
        this.shadowRoot.querySelector('.title').textContent = title;
        this.shadowRoot.querySelector('.content').textContent = content;
        this.shadowRoot.querySelector('.sub-content').textContent = subcontent;
    }

    static get template() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .day-number {
                    font-size: 2rem;
                    color: red;
                    margin: 5rem 0 3rem 0;
                }
                .day-word {
                    font-size: 1.5rem;
                    color: #333;
                    margin-bottom: 0;
                }
                .title {
                font-size: 2.5rem;
                font-weight: 700;
                color: red;
                margin-top: 0;
                }
                .content {
                    font-size: 1.5rem;
                    color: #333;
                    margin: 2rem 0 0 0;
                }
                .sub-content {
                    font-size: 1.1rem;
                    color: #333;
                    margin: 0 0 5rem 0;
                }
            </style>
            <div class="my-component">
                <p class="day-number"></p>
                <p class="day-word">今日一日</p>
                <p class="title"></p>
                <p class="content"></p>
                <p class="sub-content"></p>
            </div>
        `;
        return template;
    }
}

customElements.define('my-component', MyComponent);

export { MyComponent };
