"use strict";

let stream = null;

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

            video: {
                facingMode: "environment"
            },

            audio: false

        });

        video.srcObject = stream;

        console.log("Camera started");

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