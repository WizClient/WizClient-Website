import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - About")
    }

    async getHtml() {
        return `
            <h1>About</h1>
        `;
    }
}