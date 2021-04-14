// entreprise-accepter.pipe
// Par Charles-Etienne Villemure
// Le 12 Avril 2021
import { Pipe, PipeTransform } from '@angular/core';
import { Entreprise } from '../entreprise';

@Pipe({
  name: 'entrepriseAccepter',
})
export class EntrepriseAccepterPipe implements PipeTransform {
  transform(entreprises: Entreprise[]): Entreprise[] {
    if (!entreprises) return entreprises;
    return entreprises.filter((entreprise) => entreprise.accepter == true);
  }
}
