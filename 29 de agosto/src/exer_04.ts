import { REPL_MODE_SLOPPY } from "repl";

class Carro {
  marca?: string;
  modelo?: string;
  ano?: number;

  constructor();
  constructor(marca: string, modelo: string);
  constructor(marca: string, modelo: string, ano?: number);
  constructor(marca?: string, modelo?: string, ano?: number) {
    this.marca = marca;
    this.modelo = modelo;
    if (marca !== undefined) {
      this.marca = marca;
    }
    if (modelo !== undefined) {
      this.modelo = modelo;
    }
    if (ano !== undefined) {
      this.ano = ano;
    }
  }

  print(): void {
    console.log(this);
  }
}

const g = new Carro("Vw", "Gol", 2010);
g.print();
const f = new Carro("Fiat", "Uno", 2010);
f.print();
const v = new Carro();
v.print();