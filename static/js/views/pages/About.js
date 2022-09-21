import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - About")
        this.setActive(3)
    }

    async getHtml() {
        return `
            <p class="wip">Site Under Construction - About</p>
        `;
    }
}