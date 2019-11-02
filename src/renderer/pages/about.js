const { add, b, c, ct, cnp } = require("smpldm");

let needUpdate;

const render = () => {
    const header = c("h1", { id: "header", className: "blue" }, ct("This is about."));
    const testing = cnp("p", c("h1", null, ct("About")));
    const App = c("div", { id: "App", className: "AppMain" }, header, testing);
    return App;
}

module.exports = nu => {
    needUpdate = nu;
    return render;
}