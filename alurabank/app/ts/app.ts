const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit',controller.adiciona.bind(controller));

/*
let negociacao = new Negociacao(new Date(), 10, 150);
console.log("negociacao:", negociacao);
console.log("negociacao.valor:", negociacao.valor);
*/
