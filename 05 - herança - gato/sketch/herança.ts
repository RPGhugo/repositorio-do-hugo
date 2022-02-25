


class Animal {
    private alive: boolean = true;
    private raca: string;

    constructor(private raca: string){
        this.raca = raca;
    }

    public isAlive(): boolean {
        return this.alive; 
    }

    public kill(): void {
        this.alive = false;
    }

    public getRaca(): string {
        return this.raca;
    }

    public toString(){
        return this.raca + ";" + (this.alive ? "alive" : "dead");
    }

}

class Pet extends Animal { // herda tudo de animal
    protected nome: string;

    public constructor(nome: string, raca: string){
       super(raca); // construtor é acessado a partir da super

    }
}

class Cat extends Pet {
    private vidas: number;
    constructor(nome: string, vidas: number){
        super(nome, "gato");
        this.vidas = vidas;
    }

    public brincar() {
        if (this.isAlive()){
            console.log("brincando com " + this.nome);
        }else {
            console.log("Não pode mais brincar");
        }   
    }

    public miar() {
        if (this.isAlive()){
            console.log("miau miau miau");
        } else {
        console.log("...")
        }
    }

    public lamber() {
        if(this.isAlive()){
            console.log("lambendo");
        
        } else {
            console.log(".....");
        }
    }

    public kill() {
        if (!this.isAlive()) {
            console.log("Este gato está morto!");
        } else if (this.vidas > 1) {
            console.log("Perdeu uma vida");
            this.vidas--;

        } else{ 
            this.vidas--; 
            super.kill();
        }
    }

    public toString(): string {
        return super.toString() + ":" + this.vidas;
    }

}

    function main(){
        let gato = new Animal("gato");
        let gatinho = new Pet ("Fofuxo", "gatinho pé duro")
        console.log(gato.toString());
        gato.kill();
        console.log(gato.toString());
        let saco: Animal[] = [];
        saco.push(new Animal("cachorro"));
        saco.push(new Pet("Junim", "cachorro"));
        saco.push(new Cat("Vanuza", 4));
        saco.push(new Cat("Larinha", 2));

        while (saco.length > 1) {
            for (let animal of saco)
                animal.kill();
            saco = saco.filter(animal => animal.isAlive());
        }

        let sobrevivente: Animal = saco[0];
        if (sobrevivente instanceof Cat){
            let gato: Cat = <Cat>sobrevivente;
            gato.lamber();
        }
    }

    main();

