const router = async () => {
    const routes = [
        { path: "/", view: () => console.log('Viewing Dashboard')},
        { path: "/download", view: () => console.log('Viewing download')}
    ];

    const potentatialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        };
    });

    let match = potentatialMatches.find(potentatialMatch => potentatialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    } else {
        
    }

    console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
    router();
})