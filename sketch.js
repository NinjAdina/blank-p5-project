var house = {
    x: 100, // was houseX
    y: 300, // was houseY
    width: 200, // was houseWidth
    height: 200, // was houseHeight
    roofHeight: 100,
    draw: function() { // this is nearly identical to drawHouse(); what's different?
        rect(this.x, this.y, this.width, this.height); // Draw a structure
        triangle(this.x - 10, this.y, this.width / 2 + this.x, this.y - this.roofHeight, this.x + this.width + 10, this.y);
    }
};

var setup = function setup() {
  createCanvas(800, 800); // We still need a canvas

  house.draw();
  house.x = house.x + 250;
  house.draw();
}

var draw = function () {

}
