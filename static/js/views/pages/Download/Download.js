import AbstractView from "../../AbstractView.js";
var fs = require('fs');

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("WizClient - Download")
        this.setActive(2)
    }

    async getHtml() {
        //const u = fs.readFileSync('./Download.html')
        return `
            <p class="wip">Site Under Construction</p>
        `;
    }
}