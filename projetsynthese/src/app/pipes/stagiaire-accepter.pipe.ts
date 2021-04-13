// stagiaire-accepter.pipe
// Par Charles-Etienne Villemure
// Le 12 Avril 2021
import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from '../stagiaire';
@Pipe({
  name: 'stagiaireAccepter',
})
export class StagiaireAccepterPipe implements PipeTransform {
  transform(stagiaires: Stagiaire[]): Stagiaire[] {
    if (!stagiaires) return stagiaires;
    return stagiaires.filter((stagiaire) => stagiaire.accepter == true);
  }
}
