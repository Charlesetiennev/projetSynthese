// Section-trouvez-stagiaires.ts
// Par Charles-Etienne Villemure
//
import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { DemandeStage } from '../../demande-stage';
@Component({
  selector: 'app-section-trouvez-stagiaires',
  templateUrl: './section-trouvez-stagiaires.component.html',
  styleUrls: ['./section-trouvez-stagiaires.component.sass'],
})
export class SectionTrouvezStagiairesComponent implements OnInit {
  stagiaires: Stagiaire[];
  demandesStages: DemandeStage[];
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.getStagiaires();
    this.recuperationDemandesStages();
  }
  recuperationDemandesStages(): void {
    this.apiProjetSyntheseService
      .recuperationDemandesStages()
      .subscribe((resultat) => (this.demandesStages = resultat));
  }
  getStagiaires(): void {
    this.apiProjetSyntheseService
      .getStagiaires()
      .subscribe((resultat) => (this.stagiaires = resultat));
  }
}
