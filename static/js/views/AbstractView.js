//const fs = require('fs');

export default class {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    async setActive(element) {
        document.querySelectorAll(".navbar__links ul li").forEach(e => e.classList.remove("active"));
        document.querySelector(`.navbar__links ul li:nth-child(${element})`).classList.add("active");
    }
}