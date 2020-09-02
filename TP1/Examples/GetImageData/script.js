let canvas = document.getElementById('canvas1');

let image = new Image();
image.crossOrigin = 'Anonymous';

// El servidor Imgur permite crossOrigin = 'Anonymous'
//image.src = 'https://i.imgur.com/lmy09aF.jpeg';

// Para cargar imagen de disco, se puede usar la extension Live Server, en gh-pages funciona
image.src = '../Images/lmy09aF.jpeg';

image.onload = function () {
    let context = canvas.getContext('2d');
    context.fillStyle = "#024359"; // canvas background color
    context.fillRect(0, 0, canvas.width, canvas.height);

    let imageAspectRatio = (1.0 * this.height) / this.width;    
    let imageScaledWidth = canvas.width;
    let imageScaledHeight = canvas.width * imageAspectRatio;    
    
    context.drawImage(this, 0, 0, imageScaledWidth, imageScaledHeight);

    let imageData = context.getImageData(0, 0, imageScaledWidth, imageScaledHeight);

    for (let j = 0; j < imageData.height; j++) {
        for (let i = 0; i < imageData.width; i++) {
            if (i % 2 == 0) {
                let index = (i + imageData.width * j) * 4;
                imageData.data[index + 0] = 0;
                imageData.data[index + 1] = 0;
                imageData.data[index + 2] = 0;
            }
        }
    }

    context.putImageData(imageData, 0, 0);
}