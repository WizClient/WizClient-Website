import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - Store")
    }

    async getHtml() {
        return `
            <h1>Store</h1>
        `;
    }
}