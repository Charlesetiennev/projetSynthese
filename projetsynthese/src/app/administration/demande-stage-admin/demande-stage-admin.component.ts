// demande-stage-admin.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Component, OnInit } from '@angular/core';
import { DemandeStage } from '../../demande-stage';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
@Component({
  selector: 'app-demande-stage-admin',
  templateUrl: './demande-stage-admin.component.html',
  styleUrls: ['./demande-stage-admin.component.sass'],
})
export class DemandeStageAdminComponent implements OnInit {
  demandesStages: DemandeStage[];

  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.recuperationDemandesStages();
  }
  recuperationDemandesStages(): void {
    this.apiProjetSyntheseService
      .recuperationDemandesStages()
      .subscribe((resultat) => (this.demandesStages = resultat));
  }
}
