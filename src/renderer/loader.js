module.exports = (rootElement, firstPage) => {
    const { add, b, c, ct, cnp } = require("smpldm");
    const path = require("path");
    const { remote: { app } } = require("electron")

    let currentPage;
    rootElement.style.transition = "all 0.2s";

    const pages = [];
    const updatePage = file => {
        if (currentPage !== file) return;
        loadPage(file);
    }

    const formatFile = f => f.split('.').slice(0, -1).join('.');

    for (const file of require("fs").readdirSync(path.join(__dirname, "pages")).reverse()) {
        const loc = formatFile(file);
        const render = require(path.join(__dirname, "pages", file))(() => updatePage(formatFile(loc)));
        pages.push({ loc, render });
    }

    const fadeOutRoot = async () => {
        rootElement.style.opacity = "0";
        await new Promise(r => setTimeout(r, 200));
    }

    const fadeInRoot = async () => {
        rootElement.style.opacity = "1";
    }

    const loadPage = async to => {
        if (currentPage === to) return;
        await fadeOutRoot();
        while (rootElement.firstChild) {
            rootElement.removeChild(rootElement.firstChild);
        }
        await fadeInRoot();
        const page = pages.find(page => page.loc === to);
        add(await page.render()).to(rootElement);
    }

    add(pages.find(page => page.loc === firstPage).render()).to(rootElement);

    return loadPage;
}