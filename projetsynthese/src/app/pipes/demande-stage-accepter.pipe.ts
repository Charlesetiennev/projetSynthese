import { Pipe, PipeTransform } from '@angular/core';
import { DemandeStage } from '../demande-stage';
import { DemandeStageCompletComponent } from '../pagesRouter/demande-stage-complet/demande-stage-complet.component';

@Pipe({
  name: 'demandeStageAccepter',
})
export class DemandeStageAccepterPipe implements PipeTransform {
  transform(demandesStages: DemandeStage[]): DemandeStage[] {
    return demandesStages.filter(
      (demandeStage) => demandeStage.accepter == true
    );
  }
}
