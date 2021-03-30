import { Component, OnInit } from '@angular/core';

//Offre Stage
import { OffreStage } from '../../offre-stage';
import { OFFRESSTAGE } from '../../mock-offres-stages';
// Demande Stage
import { DemandeStage } from '../../demande-stage';
//Environement
import { environement } from '../../environement';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.sass'],
})
export class AccueilAdminComponent implements OnInit {
  env = environement;
  demandesStages: DemandeStage[];
  offresStages: OffreStage[];
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.recuperationDemandesStages();
    this.recuperationOffresStages();
  }
  // Demandes de stages
  recuperationDemandesStages(): void {
    this.apiProjetSyntheseService
      .recuperationDemandesStages()
      .subscribe((resultat) => (this.demandesStages = resultat));
  }
  // Offres de stages
  recuperationOffresStages(): void {
    this.apiProjetSyntheseService
      .recuperationOffresStages()
      .subscribe((resultat) => (this.offresStages = resultat));
  }
}
// recuperationOffresStages
