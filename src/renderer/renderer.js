const { add, b, c, ct } = require("smpldm");

const NAVIGATION_ELEMENT = b("nav");
const FIRST_PAGE = "home";
const loadPage = require("./loader")(b("root"), FIRST_PAGE);

const NAVIGATION_SETUP = [
    {to: "home", icon: "star"},
    {to: "about", icon: "list"}
]

const NavigationButton = (to, icon) => {
    return c("button", { className: "NavigationButton", "data-to": to }, c("i", {className: "material-icons"}, ct(icon)));
}

NAVIGATION_SETUP.forEach(({to, icon}) => {
    const navButton = NavigationButton(to, icon);
    add(navButton).to(NAVIGATION_ELEMENT);
    navButton.addEventListener("click", () => {
        loadPage(to);
        document.querySelector(".NavigationButton.active").classList.remove("active");
        navButton.classList.add("active");
    });
    to === FIRST_PAGE ? navButton.classList.add("active") : "";
});