const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
    const x = e.layerX - e.target.offsetLeft;
    const y = e.layerY - e.target.offsetTop;

    if (e.target.width == undefined) {
        return;
    }

    const maxYAngle = 20;
    const maxXAngle = maxYAngle * (e.target.height / e.target.width);

    const horizontalFactor = maxXAngle * (x - e.target.width / 2) / e.target.width;
    const verticalFactor = -maxYAngle * (y - e.target.height / 2) / e.target.height;

    console.log(x + " " + y);
    console.log(horizontalFactor);

    img.style.transform = `rotateY(${horizontalFactor}deg) rotateX(${verticalFactor}deg)`;
});