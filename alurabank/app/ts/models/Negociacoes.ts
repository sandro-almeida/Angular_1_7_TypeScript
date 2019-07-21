import { Negociacao} from './Negociacao';
import { Imprimivel } from '../helpers/index';

export class Negociacoes implements Imprimivel {
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

}