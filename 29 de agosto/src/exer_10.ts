class Texto extends String {
  primeira(): string {
    return this.charAt(0);
  }
  ultima(): string {
    return this.charAt(this.length - 1);
  }
}

const nome = new Texto("Batatao");
console.log("Quantidade: ", nome.length);
console.log("Primeira: ", nome.primeira());
console.log("Ultima: ", nome.ultima());
console.log("Minuscula: ", nome.toLowerCase());