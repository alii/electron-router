const { c, ct, cnp } = require("smpldm");
let needUpdate;

const render = () => {
    const header = c("h1", { id: "header", className: "blue" }, ct("Wow! A header generated from SimpleDOM"));
    const testing = cnp("p", c("h1", null, ct("Some cool text here!")));
    const App = c("div", { id: "App", className: "AppMain" }, header, testing);
    return App;
}

module.exports = nu => {
    needUpdate = nu;
    return render;
}