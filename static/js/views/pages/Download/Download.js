import AbstractView from "../../AbstractView.js";


export default class extends AbstractView {
    
    constructor() {
        super();
        this.setTitle("WizClient - Download")
        this.setActive(2)
    }

    async getHtml() {
        
        console.log(fs.readFileSync("./Download.html", "utf-8"));
        
        return `
            <p class="wip">Site Under Construction - Download</p>
        `;
    }
}