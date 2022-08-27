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
        document.querySelectorAll(".nav-links ul li").forEach(e => e.classList.remove("active"));
        document.querySelector(`.nav-links ul li:nth-child(${element})`).classList.add("active");
    }
}