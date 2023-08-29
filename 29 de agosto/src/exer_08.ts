class Geometria {
  area(): number {
    return 0;
  }
}

class Retangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  area(): number {
    return this.base * this.altura;
  }
}

class Circulo {
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  area(): number {
    return Math.PI * this.raio ** 2;
  }
}

let geom: Geometria = new Retangulo(10, 5);
console.log("Retângulo:", geom.area());
geom = new Circulo(5);
console.log("Círculo:", geom.area());
