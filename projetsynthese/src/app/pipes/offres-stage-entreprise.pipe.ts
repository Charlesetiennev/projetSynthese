// offre-stage-entreprise.pipe
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Pipe, PipeTransform } from '@angular/core';
import { OffreStage } from '../offre-stage';

@Pipe({
  name: 'offresStageEntreprise',
})
export class OffresStageEntreprisePipe implements PipeTransform {
  transform(offresStage: OffreStage[]): OffreStage[] {
    return offresStage.filter(
      (offreStage) => (offreStage.entreprise.nomEntreprise = 'entreprise web')
    );
  }
}
