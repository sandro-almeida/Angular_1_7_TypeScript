export abstract class View<T> {

    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar?: boolean){
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T): void {
        let template = this.template(model);
        if (this._escapar) {
            //using regular expression to strip script tags
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template); //jQuery version
    }

    template(model: T): string {
        throw new Error('ERRO: Você deve implementar o método template');
        //Outra opcao eh definir este metodo como abstract e entao nao sera necessario implementar nenhum codigo neste metodo,
        //exigindo que quem herde esta classe implemente este metodo
    }
}