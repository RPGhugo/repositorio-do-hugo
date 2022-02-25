class Kid {
    nome: string;
    idade: number;

      constructor (nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
      }

      toString(): string{
        return `${this.nome} tem ${this.idade} anos`;
      }
  }

class Trem{
  pessoas: Kid[];
  potencia: number;
  tempo: number;
  lotacao: number;

    constructor(potencia: number, lotacao: number){
      this.potencia = potencia;
      this.pessoas = []; // inicialização do vetor || new Array<Pessoa>()
      this.tempo = 0;
      this.lotacao = lotacao;
    }

    comprarTempo(qtd: number): void {
      this.tempo +=qtd;
    }

    dirigir(tempo: number): boolean {
      if (this.pessoas.length == 0){
        console.log("Trem vazio");
        return false;
      }
      if (this.pessoas[0].idade < 5){
        console.log("Criança muito nova para dirigir o trem");
        return false; 
      }
      if (this.tempo < tempo){
        console.log("tempo insuficiente");
        return false;
      }
      this.tempo -= tempo;
      return true;
    }

      buzinar(): string{
        let som = "P";
        for (let g = 0; g < this.potencia; g++)
          som += "e";
        return som + "m";
      }

      subirNoTrem(pessoa: Kid): boolean {
        if (this.pessoas.length === this.lotacao){
          console.log("Ninguém sobe mais! O trem está lotado!");
          return false;
        }
        else{
          this.pessoas.push(pessoa);
          if (this.pessoas.includes(pessoa)){  //verifica se o objeto está na lista
            console.log(pessoa.nome + " está a bordo!");
            return true;
          }
          else{
            console.log("Deu erro");
            return false;
          }
         }
      }

      descerDoTrem(): Kid | null {
        if (this.pessoas.length == 0){
          console.log("Trem vazio");
          return null;
        }
        else {
          let kid = this.pessoas.shift();
          if (kid === undefined){
            return null;
          
          } else console.log(kid.nome + " desceu do trem");
          return kid; 


        }

      }

        toString(): string {
          if (this.pessoas.length == 0){
            return "Trem Vazio"; 
          }
        let saida = `${this.pessoas[0].nome} é maquinista [ `;
        for (let i = 1; i < this.pessoas.length; i++){
        saida += `${this.pessoas[i].nome} `;
        }
        return saida + "]";
    }   

  }
    let trem = new Trem(10, 5);
    trem.subirNoTrem(new Kid("João", 5));
    trem.comprarTempo(20);
    trem.subirNoTrem(new Kid("Pedro", 9));
    trem.subirNoTrem(new Kid("Julia", 2));
    trem.descerDoTrem();



