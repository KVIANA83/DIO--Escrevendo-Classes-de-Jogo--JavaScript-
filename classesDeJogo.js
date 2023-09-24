
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "não sabe como atacar";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}


const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Miroku", 32, "monge");
const heroi4 = new Heroi("Kunoichi", 25, "ninja");


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
