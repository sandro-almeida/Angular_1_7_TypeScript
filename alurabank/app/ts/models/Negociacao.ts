import { MinhasInterfaces } from "../helpers/index";

export class Negociacao implements MinhasInterfaces<Negociacao> {
    
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

    ehIgual(negociacao : Negociacao) : boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}