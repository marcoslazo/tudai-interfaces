let canvas = document.getElementById('canvas1');

let image = new Image();
image.crossOrigin = 'Anonymous';

// El servidor Imgur permite crossOrigin = 'Anonymous'
//image.src = 'https://i.imgur.com/lmy09aF.jpeg';

// Para cargar imagen de disco, se puede usar la extension Live Server
image.src = 'lmy09aF.jpeg';
image.onload = function () {
    width = this.width;
    height = this.height;

    let context = canvas.getContext('2d');
    let canvasAspectRatio = (1.0 * canvas.width) / canvas.height;
    let widthInCanvas = canvas.width
    let heightInCanvas = canvas.height * canvasAspectRatio

    context.fillStyle = "#024359"; // canvas background color
    context.fillRect(0, 0, width, height);
    context.drawImage(this, 0, 0, widthInCanvas, heightInCanvas);

    let imageData = context.getImageData(0, 0, widthInCanvas, heightInCanvas);

    let from = widthInCanvas * 0.3;
    let to = heightInCanvas * 0.6;

    for (let j = from; j < to; j++) {
        for (let i = from; i < to; i++) {
            let index = (j + imageData.width * i) * 4;
            imageData.data[index + 0] = 0;
            imageData.data[index + 1] = 0;
            imageData.data[index + 2] = 0;
        }
    }

    context.putImageData(imageData, 100, 0);
}