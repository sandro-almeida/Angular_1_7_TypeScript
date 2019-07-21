import { Imprimivel } from "../helpers/index";

export class Negociacao implements Imprimivel {
    
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    }

    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto() : void {
        console.log('-- Impressao de uma Negociacao --');
        console.log("Data: ", this.data.getFullYear() + "-" + (this.data.getMonth()+1) + "-" + this.data.getDate());
        console.log("Quantidade: ", this.quantidade);
        console.log("Valor: ", this.valor);
        console.log("Volume: ", this.volume);
    }
}