import { Imprimivel } from "./Imprimivel";

export function imprime(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => objeto.paraTexto());
}
