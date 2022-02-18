var Bubble = (function () {
    function Bubble(x, y, letter, speed) {
        this.alive = true;
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.speed = speed;
    }
    Bubble.prototype.update = function () {
        this.y += this.speed;
    };
    Bubble.prototype.draw = function () {
        fill(255);
        stroke(255);
        circle(this.x, this.y, 2 * Bubble.radius);
        fill(0);
        stroke(0);
        textSize(15);
        text(this.letter, this.x - 5, this.y + 5);
    };
    Bubble.radius = 20;
    return Bubble;
}());
var Board = (function () {
    function Board() {
        this.bubbles = [];
        this.bubbles = [new Bubble(100, 100, "a", 1)];
        this.bubbles.push(new Bubble(200, 100, "b", 2));
        this.bubbles.push(new Bubble(300, 100, "c", 3));
    }
    Board.prototype.update = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble_1 = _a[_i];
            bubble_1.update();
        }
    };
    Board.prototype.draw = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble_2 = _a[_i];
            bubble_2.draw();
        }
    };
    return Board;
}());
var bubble;
var board;
function setup() {
    createCanvas(800, 600);
    board = new Board();
}
function draw() {
    background(50, 50, 50);
    board.update();
    board.draw();
}
//# sourceMappingURL=build.js.map