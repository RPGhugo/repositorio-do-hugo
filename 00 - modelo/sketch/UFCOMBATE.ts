class Lutador{
 private nome: string;
 private nacionalidade: string;
 private idade: number;
 private altura: number; // cm
 private peso: number; // kg
 private categoria: string; 
 private vitorias: number;
 private derrotas: number;
 private empates: number;
 
    construtor(nome: string, nacionalidade: string, id: number, altura: number, peso: number, vitorias: number, derrotas: number, empates: number){
        this.nome = nome;
        this.idade = id;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
    }
    
    getNome(): string{
        return this.nome;
    }
    setNome(nome: string){
        this.nome = nome;
    }

    getIdade(): number{
        return this.idade;
    }
    setIdade(id: number){
        this.idade = id;
    }

    getPeso(): number{
        return this.peso;
    }
    setPeso(peso: number){
        this.peso = peso;
        setCategoria();
    }

    setCategoria(){
        if (this.peso < 52.2){
            this.categoria = "Inválido";
        }
        else if (this.peso <= 70.3){
            this.categoria = "Peso leve";
        }
        else if (this.peso <= 83.9){
            this.categoria = "Médio";
        }
        else if (this.peso <= 120.2){
            this.categoria = "Pesado";
        }
    }

    getVitorias(): number {
        return this.vitorias;
    }
    setVitorias(vitorias: number){
        this.vitorias = vitorias;
    }

    getDerrotas(): number {
        return this.derrotas;
    }
    setDerrotas(derrotas: number){
        this.derrotas = derrotas;
    }

    getEmpates(): number {
        return this.derrotas;
    }
    setEmpates(empates: number){
        this.empates = empates;
    }

    ganharLuta(){
        this.setVitorias(this.getVitorias() + 1);        
    }

    perderLuta(){
        this.setDerrotas(this.getDerrotas() + 1);  
    }

    empatarLuta(){
        this.setEmpates(this.getEmpates() + 1);
    }

    apresentar(){
        toString(): string {
         return `${this.nome} tem ${this.idade} anos, de ${this.nacionalidade}, com ${this.altura} de altura, concorrendo a categoria ${this.categoria}!`
    }
}


