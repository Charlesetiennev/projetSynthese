import { Component, OnInit } from '@angular/core';
// Stage
import { OffreStage } from '../offre-stage';
import { OFFRESSTAGE } from '../mock-offres-stages';
// Stagiaire
import { Stagiaire } from '../stagiaire';
import { STAGIAIRES } from '../mock-stagiaires';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass'],
})
export class AccueilComponent implements OnInit {
  offresStages: OffreStage[] = OFFRESSTAGE;
  stagiaires: Stagiaire[] = STAGIAIRES;
  constructor() {}

  ngOnInit(): void {}
}
