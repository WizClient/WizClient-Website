import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - Store")
        this.setActive(4)
    }

    async getHtml() {
        return `
            <p class="wip">Site Under Construction - Store</p>
        `;
    }
}