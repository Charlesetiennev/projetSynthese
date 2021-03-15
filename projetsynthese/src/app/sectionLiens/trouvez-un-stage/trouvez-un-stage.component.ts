import { Component, OnInit } from '@angular/core';
// Stage
import { OffreStage } from '../../offre-stage';
import { OFFRESSTAGE } from '../../mock-offres-stages';

@Component({
  selector: 'app-trouvez-un-stage',
  templateUrl: './trouvez-un-stage.component.html',
  styleUrls: ['./trouvez-un-stage.component.sass'],
})
export class TrouvezUnStageComponent implements OnInit {
  offresStages: OffreStage[] = OFFRESSTAGE;
  constructor() {}

  ngOnInit(): void {}
}
