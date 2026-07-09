/* ==========================================================================
   CORE-001
   COMPONENT LOADER
   TeoCRM Vision UI
   ========================================================================== */

const loadedCSS = new Set();
const loadedJS = new Set();

/* ==========================================================================
   Load HTML
   ========================================================================== */

export async function loadHTML(path) {

    const response = await fetch(path);

    if (!response.ok) {

        throw new Error(`Cannot load HTML: ${path}`);

    }

    return await response.text();

}

/* ==========================================================================
   Load CSS
   ========================================================================== */

export function loadCSS(path) {

    if (loadedCSS.has(path)) {

        return;

    }

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href = path;

    document.head.appendChild(link);

    loadedCSS.add(path);

}

/* ==========================================================================
   Load JavaScript
   ========================================================================== */

export function loadJS(path) {

    if (loadedJS.has(path)) {

        return;

    }

    const script = document.createElement("script");

    script.type = "module";

    script.src = path;

    document.body.appendChild(script);

    loadedJS.add(path);

}

/* ==========================================================================
   Load Component
   ========================================================================== */

export async function loadComponent(options) {

    const {

        target,

        html,

        css,

        js

    } = options;

    if (css) {

        loadCSS(css);

    }

    if (js) {

        loadJS(js);

    }

    const markup = await loadHTML(html);

    const element = document.querySelector(target);

    if (!element) {

        console.warn(`Target not found: ${target}`);

        return;

    }

    element.innerHTML = markup;

}