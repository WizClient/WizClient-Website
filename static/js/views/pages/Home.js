import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - Home")
        this.setActive(1)
    }

    async getHtml() {
        return `
            <p class="wip">Site Under Construction - Home</p>
        `;
    }
}