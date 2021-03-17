import { Component, OnInit } from '@angular/core';
// Stage
import { OffreStage } from '../../offre-stage';
import { OFFRESSTAGE } from '../../mock-offres-stages';

@Component({
  selector: 'app-offre-stage-admin',
  templateUrl: './offre-stage-admin.component.html',
  styleUrls: ['./offre-stage-admin.component.sass'],
})
export class OffreStageAdminComponent implements OnInit {
  offresStages: OffreStage[] = OFFRESSTAGE;
  constructor() {}

  ngOnInit(): void {}
}
