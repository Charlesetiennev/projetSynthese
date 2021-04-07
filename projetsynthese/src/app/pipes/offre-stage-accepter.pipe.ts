// offre-stage-accepter.pipe.ts
// Par Charles-Etienne Villemure
// Le 7 Avril 2021
import { Pipe, PipeTransform } from '@angular/core';
import { OffreStage } from '../offre-stage';

@Pipe({
  name: 'offreStageAccepter',
})
export class OffreStageAccepterPipe implements PipeTransform {
  transform(offresStages: OffreStage[]): OffreStage[] {
    return offresStages.filter((offreStage) => offreStage.accepter == true);
  }
}
