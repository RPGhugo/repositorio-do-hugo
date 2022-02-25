/* Requisitos
Seu sistema deverá:

[3.0 P] Inicializando.
Iniciar a sala de cinema.
Ao iniciar, você deve informar quantos assentos existem na sua sala.
Mostrar o estado da sala, escrevendo um - para cada cadeira vazia.
Se uma nova sala for iniciada, apague todas as informações da sala antiga.
[4.0 P] Reservas.
reservar uma cadeira para um cliente passando id, telefone e número da cadeira.
avise que houve erro ao tentar colocar duas pessoas na mesma cadeira.
avise que houve erro ao tentar colocar duas pessoas com mesmo id na sala.
atualize a função show para mostrar os clientes onde estiverem sentados.
[3.0 P] Cancelamentos.
Cancele reserva passando o id do cliente. */

class Pessoa {
    constructor(public nome: string) {} //conveção (nome: string) // this.nome = nome
}

class Cinema {
    cadeiras: Map<number, Pessoa> // lembrança de matriz, índice e valor
    nomes: Map<string, number> //inverso

    constructor(public lotacao: number) {
        this.cadeiras = new Map<number, Pessoa>(); // mapa para acessar através do id
        this.nomes = new Map<string, number>(); // acessar através do nome
    }
    
    procurarId(nome: string): number {
        for (let [id, pessoa] of this.cadeiras){
            if (pessoa.nome == nome){
                return id;
            }
        }
      return -1;
    }


    public reservar(id: number, pessoa: Pessoa) {
        if (this.cadeiras.has(id)) { // percorre e retorna true ou false
            console.log("Posicao ocupada");
            return;
        }
        if (this.nomes.has(pessoa.nome)){
            console.log("a pessoa já está no cinema");
            return;
        }
        this.cadeiras.set(id, pessoa);
        this.nomes.set(pessoa.nome, id); //reserva efetuada
    }
    
    public cancelar (nome: string){
        if(!this.nomes.has(nome)){
            console.log("Pessoa não encontrada")
            return;
        }
        let id = this.nomes.get(nome); // cancelamento efetuado
            this.cadeiras.delete(id);
            this.nomes.delete(nome);

    }


    public toString(){
        let saida = "";
        for(let i = 0; i <= this.lotacao; i++){ //sala e cadeira escolhida <= último assento pode ser escolhido
            if (this.cadeiras.has(i)) {
                let pessoa = this.cadeiras.get(i);
                saida += pessoa.nome + " ";
            }
            else {
                saida += "- ";
             } 
        }
    }
}

let cinema = new Cinema (50);
let Ronaldo = new Pessoa("Ronaldo");
cinema.reservar(45, Ronaldo);

