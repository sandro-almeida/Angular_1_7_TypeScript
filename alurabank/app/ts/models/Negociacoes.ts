import { Negociacao} from './Negociacao';
import { MinhasInterfaces } from '../helpers/index';

export class Negociacoes implements MinhasInterfaces<Negociacoes> {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //the sintaxe below is to indicate that a new array is returned rather than the actual array
        return ([] as Negociacao[]).concat(this._negociacoes);
     }

     paraTexto() : void {
         console.log('-- Impressao de Negociacoes --');
         console.log(JSON.stringify(this._negociacoes));
     }

     ehIgual(negociacoes : Negociacoes) : boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
     }

}