export function domInject(seletor: string) {
    //seletor: this is the DOM element that will be load using lazy load approach

    /**
     * The returned function receives 2 parameters:
     *  1) target: it has a reference to the element in which the property was decorated by domInject;
     *  2) key: parameter's name.
     */
    return function(target: any, key: string) {

        let elemento: JQuery;

        const getter = function() {

            //Lazy load assignment: we only look for the DOM element when getter is accessed for the first time
            if(!elemento) {
                console.log(`buscando ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }

            return elemento;
        }

        //Links the 'get' property with the 'getter' function defined above
        Object.defineProperty(target, key, {
            get: getter
        });
    }
}
