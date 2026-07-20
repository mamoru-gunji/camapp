"use strict";

let stream = null;
let track = null;

export async function initializeCamera() {

    const video = document.getElementById("camera");

    if (!video) {
        console.error("video element not found");
        return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
        console.error("Camera API not supported");
        return;
    }

    try {

        stream = await navigator.mediaDevices.getUserMedia({

            video: true,

            audio: false

        });

        track = stream.getVideoTracks()[0];

        video.srcObject = stream;
        console.log("Camera started");
        updateDebug();

    }
    catch (err) {

        console.error(err);

    }

}

export function stopCamera() {

    if (!stream) return;

    stream.getTracks().forEach(track => track.stop());

    stream = null;

}

export function updateDebug() {

    if (!track) return;

    const debug = {

        capabilities:

            track.getCapabilities(),

        settings:

            track.getSettings(),

        constraints:

            track.getConstraints(),

        userAgent:

            navigator.userAgent,

        standalone:

            window.matchMedia("(display-mode: standalone)").matches,

        visibility:

            document.visibilityState,

        secureContext:

            window.isSecureContext

    };

    document.getElementById("debugOutput").textContent =

        JSON.stringify(debug, null, 4);

}