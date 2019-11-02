### Electron Pagination
#### Boilerplate to get quick started with fast Electron page loading.

##### Features
- Use of [SMPLDM](https://npmjs.org/package/smpldm) for handling the DOM
- Fading between pages
- Customizable elements
- Minimal code

##### How to I get started?
```
git clone https://github.com/aabbccsmith/electron-router.git
yarn install
yarn start
```

##### How do I use this?
File structure is as follows
```css
+-- src/
|   +-- renderer/
|   |   +-- assets/
|   |   |   +-- index.scss (Supply your own SCSS compiler. Personally, I use Live Sass Compiler for VSCode)
|   |   +-- pages/
|   |   |   +-- about.js
|   |   |   +-- home.js
|   |   +-- index.html (The main HTMl file. Include CSS in here as well as other meta)
|   |   +-- loader.js (Loads all pages and handles page loading)
|   |   +-- renderer.js (Loads all navigation)
+-- package.json
```

##### How do I add another page?
Like this:

`/src/renderer/pages/page.js`:
```javascript
const { c, ct } = require("smpldm");
let needUpdate;

const render = () => { // This cannot be async!
    return c("p", {className: "paragraph"}, ct("This is a paragraph"));
}

module.exports = nu => {
    needUpdate = nu;
    return render;
}
```
`/src/renderer/renderer.js`:
```javascript
const NAVIGATION_SETUP = [
    ...
    {to: "page", icon: "computer"} // I'm using material icons for this, but you can take out icon if you'd like.
    ...
]
```

##### What's `needUpdate`?
If your page needs to make a request, or do other non "instant" activities, then you can call `needUpdate` to tell the loader file to re render the current page.

### Finally,
I highly reccomend using `yarn` rather than `npm`. It's much faster.
We use `electron-builder` to make installers/binaries. To build, simply modify `package.json` to your taste, and run `yarn build`.

Any question? DM me on twitter: @aabbccsmith