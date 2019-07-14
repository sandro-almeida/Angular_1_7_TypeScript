export function throttle(milissegundos = 500) {

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

        let timer = 0;

        descriptor.value = function(...args : any[]) { //args: parameters passed to the method being decorated

            //event can be accessed implicitly inside any function call even without being passed as a parameter
            if(event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);

        }

        return descriptor;
    }
}