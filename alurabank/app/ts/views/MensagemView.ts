import { View } from './View';

export class MensagemView extends View<string> {

    template(model: string): string {
        if (model != null && model.length > 0) {
            return `<p class="alert alert-info">${model}</p>`;
        }

        return '';
        
    }
}