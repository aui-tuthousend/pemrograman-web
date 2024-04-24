const containers = document.querySelectorAll(".container");

function onMouseDrag({ movementX, movementY }) {
    let getContainerStyle = window.getComputedStyle(this);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
    this.style.left = `${leftValue + movementX}px`;
    this.style.top = `${topValue + movementY}px`;
}

containers.forEach(container => {
    container.addEventListener("mousedown", () => {
        container.addEventListener("mousemove", onMouseDrag);
    });

    document.addEventListener("mouseup", () => {
        container.removeEventListener("mousemove", onMouseDrag);
    });
});
