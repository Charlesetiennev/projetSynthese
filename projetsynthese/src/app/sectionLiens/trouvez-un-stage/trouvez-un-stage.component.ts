import { Component, OnInit } from '@angular/core';
// Stage
import { OffreStage } from '../../offre-stage';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';

@Component({
  selector: 'app-trouvez-un-stage',
  templateUrl: './trouvez-un-stage.component.html',
  styleUrls: ['./trouvez-un-stage.component.sass'],
})
export class TrouvezUnStageComponent implements OnInit {
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
