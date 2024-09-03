const canvas = document.getElementById("primary-canvas");

canvas.width = 400;
canvas.height = 400;

let c = canvas.getContext("2d");

function Square(x, y, shapeWidth, dx, dy) {
    this.x = x;
    this.y = y;
    this.shapeWidth = shapeWidth;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.fillStyle = "orange";
        c.fillRect(this.x, this.y, this.shapeWidth, this.shapeWidth)
    };

    this.update = function() {
        if (this.x + this.shapeWidth > canvas.width || this.x - this.shapeWidth < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.shapeWidth > canvas.height || this.y - this.shapeWidth < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };

};

let square = new Square(200, 200, 3, 1, 1);

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas on each frame
    square.update(); // Update the square's position
    requestAnimationFrame(animate); // Request the next frame
}

animate(); // Start the animation