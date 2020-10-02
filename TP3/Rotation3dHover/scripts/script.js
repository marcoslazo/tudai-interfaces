const img = document.querySelector("img");

window.addEventListener("mousemove", (e) => {
    const x = e.pageX;
    const y = e.pageY;

    let width = window.innerWidth;    
    let height = window.innerHeight;

    const maxYAngle = 20;
    const maxXAngle = maxYAngle * height / width;

    const horizontalFactor = maxXAngle * (x / width - 0.5);
    const verticalFactor = -maxYAngle * (y / height - 0.5);

    img.style.transform = `scale(0.8) rotateY(${horizontalFactor}deg) rotateX(${verticalFactor}deg)`;
});