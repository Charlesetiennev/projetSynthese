import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { STAGIAIRES } from '../../mock-stagiaires';
// Stage
import { OffreStage } from '../../offre-stage';
import { OFFRESSTAGE } from '../../mock-offres-stages';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.sass'],
})
export class AccueilAdminComponent implements OnInit {
  stagiaires: Stagiaire[] = STAGIAIRES;
  offresStages: OffreStage[] = OFFRESSTAGE;
  constructor() {}

  ngOnInit(): void {}
}
