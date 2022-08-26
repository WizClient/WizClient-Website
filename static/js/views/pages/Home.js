import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - Home")
    }

    async getHtml() {
        return `
            <h1>COUCOU</h1>
        `;
    }
}