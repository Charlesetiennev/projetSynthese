// demande-stage-accepter.pipe.ts
// Par Charles-Etienne Villemure
// Le 7 Avril 2021
import { Pipe, PipeTransform } from '@angular/core';
import { DemandeStage } from '../demande-stage';
import { DemandeStageCompletComponent } from '../pagesRouter/demande-stage-complet/demande-stage-complet.component';

@Pipe({
  name: 'demandeStageAccepter',
})
export class DemandeStageAccepterPipe implements PipeTransform {
  transform(demandesStages: DemandeStage[]): DemandeStage[] {
    if (!demandesStages) return demandesStages;
    return demandesStages.filter(
      (demandeStage) => demandeStage.accepter == true
    );
  }
}
