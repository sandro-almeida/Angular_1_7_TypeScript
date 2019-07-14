import { NegociacoesView, MensagemView } from './../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

export class NegociacaoController {

    //Injecting DOM elements directly in our class properties using property decorators (@domInject) for lazy loading
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {

        let date = new Date(this._inputData.val().replace(/-/g,','));
        if (!this._ehDiaUtil(date)) {
            this._mensagemView.update('Negociações são permitidas apenas em dias úteis.')
            return;
        }

        const negociacao = new Negociacao(
            new Date(date),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()));
        
        this._negociacoes.adiciona(negociacao);

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso !');

        // imprime a lista de negociações encapsulada 
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log("Data: ", negociacao.data.getFullYear() + "-" + (negociacao.data.getMonth()+1) + "-" + negociacao.data.getDate());
            console.log("Quantidade: ", negociacao.quantidade);
            console.log("Valor: ", negociacao.valor);
        })

        console.log(negociacao);
    }

    @throttle()
    importarDados() {

        function isOk(res: Response) {
            if(res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        this._service.obterNegociacoes(isOk)
            .then(negociacoes => {
                if (typeof negociacoes === 'object') {
                    negociacoes.forEach(negociacao => 
                        this._negociacoes.adiciona(negociacao));
                    this._negociacoesView.update(this._negociacoes);
                }
            }); 
    }

    private _ehDiaUtil(date : Date) : boolean {
        return date.getDay() != DiaDaSemana.Sabado && date.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo, //Domingo = 1, //if you assign a value to a enum member, then the remaining members use this value as a base value and are incremented by 1
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
