import { Igualavel } from './Igualavel';
import { Imprimivel } from './Imprimivel';

//An interface can extend multiple interfaces
export interface MinhasInterfaces<T> extends Imprimivel, Igualavel<T> {}
