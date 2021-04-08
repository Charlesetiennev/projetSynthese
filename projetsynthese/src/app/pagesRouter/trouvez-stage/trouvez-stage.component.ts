// trouvez-stage.ts
// Par Charles-Etienne Villemure
// Le 7 Avril 2021
import { Component, OnInit } from '@angular/core';
import { OffreStage } from '../../offre-stage';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';

@Component({
  selector: 'app-trouvez-stage',
  templateUrl: './trouvez-stage.component.html',
  styleUrls: ['./trouvez-stage.component.sass'],
})
export class TrouvezStageComponent implements OnInit {
  titre: string = 'Offres de stage';
  offresStages: OffreStage[];
  // Gestion du bouton pour charger plus d'offre
  chargerPlus: boolean = false;
  afficher: boolean = true;
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.recuperationOffreStage();
  }
  recuperationOffreStage() {
    this.apiProjetSyntheseService
      .recuperationOffresStages()
      .subscribe((resultat) => (this.offresStages = resultat));
  }
}
