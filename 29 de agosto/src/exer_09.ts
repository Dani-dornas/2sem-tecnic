import {Geometria, Retangulo, Circulo} from "./exer_08"

class Quadrado extends Geometria{
    lado: number;
    
    constructor(lado: number){
        super ();
        this.lado = lado;
    }

    area():number {
        return this.lado**2
    }
}

let geom: Geometria = new Retangulo(10, 5);
console.log("Retângulo:", geom.area());
let geomi = new Circulo(5);
console.log("Círculo:", geom.area());
let gemini = new Quadrado(3);
console.log("Quadrado: ", geom.area());
