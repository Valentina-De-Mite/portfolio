export default class themeChanger {
  /**
   * @constructor
   */
  constructor() {}
  _addDarkTheme() {
    const darkThemeLinkEl = document.createElement("style");
    // darkThemeLinkEl.setAttribute("rel", "stylesheet");
    darkThemeLinkEl.setAttribute("data-vite-dev-id", "./src/scss/dark.scss");
    darkThemeLinkEl.setAttribute("id", "dark-theme-style");
    darkThemeLinkEl.setAttribute("type", "text/css");
    const docHead = document.querySelector("head");
    docHead.append(darkThemeLinkEl);
    console.log("ciao");
    console.log(docHead);
  }
  _removeDarkTheme() {
    const darkThemeLinkEl = document.querySelector("#dark-theme-style");
    const parentNode = darkThemeLinkEl.parentNode;
    parentNode.removeChild(darkThemeLinkEl);
  }
  _darkThemeSwitch() {
    const darkThemeLinkEl = document.querySelector("#dark-theme-style");
    if (!darkThemeLinkEl) {
      this._addDarkTheme();
    } else {
      this._removeDarkTheme();
    }
  }
}
