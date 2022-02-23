/* Você deverá implementar a classe Pessoa e a class Moto.
Iniciar
A moto inicia com 1 de potência, sem minutos e sem ninguém.
Subir
Só pode estar uma pessoa na moto por vez. Para subir, informe nome e idade de quem está subindo.
Descer
Só pode descer se tiver alguém na moto.
Comprar tempo
O tempo em minutos é comprado e enquanto houver tempo, qualquer pessoa pode dirigir.
Dirigir tempo
Se houver uma pessoa com 10 anos ou menos e houver minutos, então ela pode passear de moto.
Se o tempo acabar no meio do passeio, informe o quanto a pessoa andou.
Buzinar
Qualquer pessoa pode buzinar(honk)
O barulho da buzina é "Pem", porém o número de e é igual ao valor da potência.
Ex: se a potência for 5, buzinar deve gerar: Peeeeem */

class Pessoa {
  nome: string
  idade: number

  constructor (nome: string, idade: number){
    this.nome = nome;
    this.idade = idade; 
  }

  toString(): string {
    return `${this.nome} tem ${this.idade} anos`;
  }
}

class Motoca {
  potencia: number;
  tempo: number;
  pessoa: Pessoa | null

  constructor (potencia: number){
    this.potencia = potencia;
    this.pessoa = null;
    this.tempo = 0;
  }

    comprarTempo(qtd: number): void {
      this.tempo += qtd;
    }


    dirigir(tempo: number): boolean {
      if(this.pessoa == null){
        console.log("Moto vazia");
        return false;
      }
      if (this.pessoa.idade > 10){
        console.log("Criança muito grande pra motoca")
      return false;
      }
       if (this.tempo < tempo){
         console.log("tempo insuficiente");
         return false
       }
        else
        this.tempo -= tempo;
        return true;
    }



    buzinar(): string {
      let saida = "P";
      for (let i = 0; i < this.potencia; i++){
        saida += "e";
      return saida + "m";
      }
    }

    subirnaMotoca(pessoa: Pessoa): boolean {
      if(this.pessoa === null){
        this.pessoa = pessoa;
        return true;
      }
      else 
      console.log("Motoca já ocupada");
      return false;
}

    descerdaMotoca(): Pessoa | null{
    if(this.pessoa === null){
    console.log("Moto vazia")
    
    }
    else {
    const pessoa = this.pessoa;
    this.pessoa = null;
    return pessoa;
    }
    }
}

let moto = new Motoca(10);
console.log(moto.buzinar());
moto.subirnaMotoca(new Pessoa("João", 1));
moto.descerdaMotoca();


