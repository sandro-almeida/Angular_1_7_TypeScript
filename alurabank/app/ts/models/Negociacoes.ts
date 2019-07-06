import { Negociacao} from './Negociacao';

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //the sintaxe below is to indicate that a new array is returned rather than the actual array
        return ([] as Negociacao[]).concat(this._negociacoes);
     }

}