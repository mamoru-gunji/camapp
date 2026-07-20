export function isLandscape() {

    return window.matchMedia("(orientation:landscape)").matches;
}

window.addEventListener("resize", () => {

    document.body.dataset.orientation =
        isLandscape()
            ? "landscape"
            : "portrait";
});