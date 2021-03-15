import { Component, OnInit } from '@angular/core';
// Stage
import { OffreStage } from '../../offre-stage';
import { OFFRESSTAGE } from '../../mock-offres-stages';

@Component({
  selector: 'app-trouvez-stage',
  templateUrl: './trouvez-stage.component.html',
  styleUrls: ['./trouvez-stage.component.sass'],
})
export class TrouvezStageComponent implements OnInit {
  offresStages: OffreStage[] = OFFRESSTAGE;
  constructor() {}

  ngOnInit(): void {}
}
