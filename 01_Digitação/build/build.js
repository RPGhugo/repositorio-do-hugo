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
        this.timeout = 30;
        this.timer = 0;
        this.hits = 0;
        this.mistakes = 0;
        this.bubbles = [new Bubble(100, 100, "a", 1)];
        this.bubbles.push(new Bubble(200, 100, "b", 2));
        this.bubbles.push(new Bubble(300, 100, "c", 3));
    }
    Board.prototype.update = function () {
        this.checkBubbleTime();
        this.markOutsideBubbles();
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble_1 = _a[_i];
            bubble_1.update();
        }
        this.removeDeadBubbles();
    };
    Board.prototype.removeDeadBubbles = function () {
        this.bubbles = this.bubbles.filter(function (b) { return b.alive; });
    };
    Board.prototype.removeByHit = function (code) {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble_2 = _a[_i];
            if (bubble_2.letter[0].toUpperCase().charCodeAt(0) == code) {
                bubble_2.alive = false;
                this.hits++;
                break;
            }
        }
    };
    Board.prototype.checkBubbleTime = function () {
        this.timer -= 1;
        if (this.timer <= 0) {
            this.addBubble();
            this.timer = this.timeout;
        }
    };
    Board.prototype.markOutsideBubbles = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble_3 = _a[_i];
            if (bubble_3.y + 2 * Bubble.radius >= height) {
                bubble_3.alive = false;
                this.mistakes++;
            }
        }
    };
    Board.prototype.addBubble = function () {
        var x = random(0, width - Bubble.radius);
        var y = -2 * Bubble.radius;
        var letter = random(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
        var speed = random(1, 5);
        var bubble = new Bubble(x, y, letter, speed);
        this.bubbles.push(bubble);
    };
    Board.prototype.draw = function () {
        stroke("white");
        fill("white");
        textSize(30);
        text("hits: " + this.hits + " mistakes: " + this.mistakes, 30, 30);
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble_4 = _a[_i];
            bubble_4.draw();
        }
    };
    return Board;
}());
var bubble;
var Game = (function () {
    function Game() {
        this.board = new Board();
        this.activeState = this.gamePlay;
    }
    Game.prototype.gamePlay = function () {
        this.board.update();
        background(50, 50, 50);
        this.board.draw();
        if (this.board.mistakes > 5)
            this.activeState = this.gameOver;
        if (this.board.hits > 15)
            this.activeState = this.gameWin;
    };
    Game.prototype.gameOver = function () {
        background(255, 0, 0);
        fill(0);
        textSize(100);
        text("Game Over", 50, 300);
    };
    Game.prototype.gameWin = function () {
        background(0, 254, 0);
        fill(0);
        textSize(100);
        text("YOU WIN!", 50, 300);
    };
    return Game;
}());
var game;
function setup() {
    createCanvas(800, 600);
    frameRate(30);
    game = new Game();
}
function keyPressed() {
    game.board.removeByHit(keyCode);
}
function draw() {
    game.activeState();
}
//# sourceMappingURL=build.js.map