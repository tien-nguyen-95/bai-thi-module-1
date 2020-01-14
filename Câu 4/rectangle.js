class Rectangle {
    constructor(x , y , width , height , color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(canvas) {
        canvas.beginPath();
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
        canvas.fill();
    }
}

function main() {
    let ctx = document.getElementById("myCanvas").getContext('2d');
    let rectangle = new Rectangle(10, 10, 200, 100, '#000000');
    rectangle.render(ctx);
}

main();