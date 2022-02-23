var Grafite = (function () {
    function Grafite(calibre, dureza, tamanho) {
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }
    Grafite.prototype.toString = function () {
        return "Grafite " + this.calibre + " " + this.dureza + " " + this.tamanho;
    };
    return Grafite;
}());
var Lapiseira = (function () {
    function Lapiseira() {
    }
    return Lapiseira;
}());
var grafite = new Grafite(10, "A", 10);
console.log(grafite.toString());
//# sourceMappingURL=build.js.map