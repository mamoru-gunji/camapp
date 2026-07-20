"use strict";

import { initializeCamera } from "./camera.js";
import "./orientation.js";

async function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("./sw.js");
        } catch (e) {
            console.error(e);
        }
    }
}

async function initialize() {

    await registerServiceWorker();

    await initializeCamera();

}

window.addEventListener("DOMContentLoaded", initialize);

window.addEventListener("DOMContentLoaded", () => {

    console.log("DOMContentLoaded");

    const btn = document.getElementById("debugButton");

    btn.addEventListener("click", () => {

        console.log("Debug button clicked");

        alert("Debug");

    });

});