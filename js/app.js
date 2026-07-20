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