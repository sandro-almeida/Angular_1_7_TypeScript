export abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string){
        this._elemento = $(seletor);
    }

    update(model: T): void {
        this._elemento.html(this.template(model)); //jQuery version
    }

    template(model: T): string {
        throw new Error('ERRO: Você deve implementar o método template');
        //Outra opcao eh definir este metodo como abstract e entao nao sera necessario implementar nenhum codigo neste metodo,
        //exigindo que quem herde esta classe implemente este metodo
    }
}