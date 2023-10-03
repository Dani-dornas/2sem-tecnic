//Este exercício é uma versão atualizada dos exercícios anteriores


class Carro {
    private _marca: string = "";
    private _modelo: string = "";
    private static contador: number = 0;

    constructor(_marca:string, _modelo:string){
        this._marca = _marca;
        this._modelo = _modelo;
        Carro.contador++;
    }

    public static getContador():number {
        return Carro.contador;
    }

    get marca(){
        return this._marca;
    }

    set marca(_marca:string){
        this._marca = _marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(_modelo:string){
        this._modelo = _modelo;
    }
}

const a = new Carro("Ford", "Ka");
const b = new Carro("Fiat", "Uno");


export default Carro;