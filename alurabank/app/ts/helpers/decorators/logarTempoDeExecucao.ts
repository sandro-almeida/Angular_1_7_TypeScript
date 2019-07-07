export function logarTempoDeExecucao(emSegundos : boolean = false) {

    /**
     * Decorators should always return a function.
     * The returned function receives 3 parameters:
     *  1) target: it has a reference to the element in which the method was decorated by logarTempoDeExecucao;
     *  2) propertyKey: the name of the method being decorated;
     *  3) descriptor: give us access to the method (through descriptor.value) in order to allow us to change its execution
     */
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        //metodoOriginal: receives a reference to the original method.
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args : any[]) { //args: parameters passed to the method being decorated

            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            
            console.log('-----------------------');
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            //metodoOriginal.apply: to invoke the original method, capture its result, if any, and return it.
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do método ${propertyKey}: ${JSON.stringify(resultado)}`);

            const t2 = performance.now();
            console.log(`Método ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('-----------------------');

            return resultado; //this is the return of the method being decorated
        }

        return descriptor;
    }
}