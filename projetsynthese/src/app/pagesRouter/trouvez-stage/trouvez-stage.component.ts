import { Component, OnInit } from '@angular/core';
// Stage
import { OffreStage } from '../../offre-stage';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';

@Component({
  selector: 'app-trouvez-stage',
  templateUrl: './trouvez-stage.component.html',
  styleUrls: ['./trouvez-stage.component.sass'],
})
export class TrouvezStageComponent implements OnInit {
  offresStages: OffreStage[];
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
