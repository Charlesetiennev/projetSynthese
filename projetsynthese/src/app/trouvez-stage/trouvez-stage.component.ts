import { Component, OnInit, Input } from '@angular/core';
// Stage
import { OffreStage } from '../offre-stage';
import { OFFRESSTAGE } from '../mock-offres-stages';
// Stagiaire
import { Stagiaire } from '../stagiaire';
import { STAGIAIRES } from '../mock-stagiaires';

@Component({
  selector: 'app-trouvez-stage',
  templateUrl: './trouvez-stage.component.html',
  styleUrls: ['./trouvez-stage.component.sass'],
})
export class TrouvezStageComponent implements OnInit {
  offresStages: OffreStage[] = OFFRESSTAGE;
  stagiaires: Stagiaire[] = STAGIAIRES;
  constructor() {}

  ngOnInit(): void {}
}
