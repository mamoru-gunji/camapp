"use strict";

/**
 * ==========================================================
 * CamApp
 * app.js
 * Entry Point
 * ==========================================================
 */

import "./orientation.js";

/* ----------------------------------------------------------
 * Service Worker
 * ---------------------------------------------------------- */

async function registerServiceWorker() {

    if (!("serviceWorker" in navigator)) {

        console.log("Service Worker : Unsupported");

        return;
    }

    try {

        const registration =
            await navigator.serviceWorker.register("./sw.js");

        console.log(
            "Service Worker Registered",
            registration.scope
        );

    }
    catch (error) {

        console.error(
            "Service Worker Registration Failed",
            error
        );

    }

}

/* ----------------------------------------------------------
 * App Initialize
 * ---------------------------------------------------------- */

async function initialize() {

    console.log("CamApp Start");

    await registerServiceWorker();

    console.log("Initialization Complete");

}

/* ----------------------------------------------------------
 * Startup
 * ---------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", initialize);