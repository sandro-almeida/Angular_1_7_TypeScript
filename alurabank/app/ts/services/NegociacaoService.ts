import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: ResponseHandler): Promise<void | Negociacao[]> {

        //fetch returns a Promise<T>, but catch seems to return void
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json()) //json() method converts Json para JavaScript objects
            .then((dados: NegociacaoParcial[]) => //using external API interface NegociacaoParcial
                dados.map(dado => new Negociacao (new Date(), dado.vezes, dado.montante))
            )
            .catch(err => console.log('Erro: ', err.message));
    }
}

export interface ResponseHandler {

    (res: Response): Response; //function that receives and returns a Response
}
