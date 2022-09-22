//const fs = require("fs");

import Home from "./views/pages/Home.js";
import Download from "./views/pages/Download/Download.js";
import About from "./views/pages/About.js";
import Store from "./views/pages/Store.js";

const navTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/download", view: Download},
        { path: "/about", view: About},
        { path: "/store", view: Store}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();

    document.querySelector(".container").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', event => {
        if(event.target.matches("[data-link]")) {
            event.preventDefault();
            navTo(event.target.href);
        }
    });
    router();
});