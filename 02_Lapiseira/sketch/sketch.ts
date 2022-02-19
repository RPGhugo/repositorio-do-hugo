class Grafite{      // preciso ter a classe grafite, pra ter a classe lapiseira
  calibre: number;
  dureza: string;
  tamanho: number;

  constructor( calibre: number, dureza: string, tamanho: number) { // parametros // construtor para inicializar 
    this.calibre = calibre;
    this.dureza = dureza;
    this.tamanho = tamanho;
  }

  toString(): string {
   return `Grafite ${this.calibre} ${this.dureza} ${this.tamanho}`;
  }

}

class Lapiseira{
   calibre: number;
   dure
}

let grafite = new Grafite (10, "A", 10);
console.log(grafite.toString());


