 
class Grafite{      // preciso ter a classe grafite, pra ter a classe lapiseira
  calibre: number;
  dureza: string;
  tamanho: number;

  constructor(calibre: number, dureza: string, tamanho: number) { // parametros // construtor para inicializar 
    this.calibre = calibre;
    this.dureza = dureza;
    this.tamanho = tamanho;
  }

  gastoPorFolha(): number { 
    if (this.dureza === 'HB')
    return 1;
    if (this.dureza === '2B')
    return 2;
    if (this.dureza === '4B')
    return 4;
    if (this.dureza === '6B')
    return 6;

   return 0;
  
  }

  toString(): string {
   return `Grafite ${this.calibre}: ${this.dureza}: ${this.tamanho}`;
  }
}


    // agregação
    class Lapiseira {
      calibre: number;
      private grafite: Grafite | null;  // tipos diferentes

      constructor(calibre: number) { // a lapiseira recebe o grafite
       this.calibre = calibre;
       this.grafite = null; // grafite começa com zero
    }

  

   setGrafite(grafite: Grafite): boolean { // teste se há grafite
    if (this.grafite != null){
      console.log("A lapiseira já possui um grafite");
      return false;
    }

    if (grafite.calibre != this.calibre){
      console.log("O grafite não é compatível com a lapiseira");
      return false;
    }
    this.grafite = grafite;
    return true;
  }

 
  removerGrafite(): Grafite | null  {
    if (this.grafite == null){
      console.log ("A lapiseira não possui um grafite");
      return null;
    }

   let grafite = this.grafite;
   this.grafite = null; // deixa algo na função que foi executada
   return grafite;
  } 

  luzGrafite(): void {
    if(this.grafite != null){
      console.log("Laser azul");
    }
    else(this.grafite === null) 
      console.log("Insira um grafite e tente novamente");
    

  }

  escrever(folhas: number): boolean {
    if (this.grafite == null){
      console.log("Não há grafite suficiente")
      return false;
  }
  
    let gasto = this.grafite.gastoPorFolha() * folhas;
    if(gasto <= this.grafite.tamanho){ // se o gasto for menor ou igual que o tamanho, grafite escreve
      console.log("Escrita concluída");
      this.grafite.tamanho -= gasto;
   
    } else {        
      let realizado = this.grafite.tamanho / this.grafite.gastoPorFolha() // se o gasto for maior que o tamanho, grafite escreve incompleto
      console.log("Escrita parcial: " + realizado + " folhas");
      this.grafite.tamanho == 0;
    }
      if (this.grafite.tamanho == 0){ // grafite de tamanho zerado = null
      this.grafite = null;
      }
  }

}


  let pentel = new Lapiseira(0.5);
  pentel.setGrafite(new Grafite(0.5, "HB", 40));
  pentel.luzGrafite();
  pentel.escrever(10);
  pentel.luzGrafite();
  pentel.escrever(40);
  pentel.luzGrafite();


