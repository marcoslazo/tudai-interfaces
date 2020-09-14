class Rect extends Figure {
    constructor(posX, posY, width, height, fill, context) {
        super(posX, posY, fill, context);

        this.width = width;
        this.height = height;
    }

    draw() {
        super.draw();
        this.context.fillRect(this.posX, this.posY, this.width, this.height);
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    isPointInside(x, y) {
        let _x = x - this.posX;
        let _y = y - this.posY;

        return (x >= this.posX && _x <= this.width && this.posY >= 0 && _y <= this.height);
    }
}
