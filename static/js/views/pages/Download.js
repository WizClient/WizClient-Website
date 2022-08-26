import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - Download")
    }

    async getHtml() {
        return `
            <h1>Download</h1>
        `;
    }
}