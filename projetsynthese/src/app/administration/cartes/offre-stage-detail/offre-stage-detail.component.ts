// offre-stage-detail.ts
// Par Charles-Etienne Villemure
// Le 9 Avril 2021
import { Component, OnInit, Input } from '@angular/core';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { OffreStage } from '../../../offre-stage';
import { SecteursActivites } from '../../../secteurs-activites';
import { NgForm } from '@angular/forms';
import { environement } from '../../../environement';

@Component({
  selector: 'app-offre-stage-detail',
  templateUrl: './offre-stage-detail.component.html',
  styleUrls: ['./offre-stage-detail.component.sass'],
})
export class OffreStageDetailComponent implements OnInit {
  @Input() offreStage: OffreStage | any;
  // Formulaire
  formulaireEdition: NgForm;
  modification = false;
  soumission = false;
  // Secteurs d'activité
  secteursActivites: SecteursActivites[];

  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    // Secteur d'activité
    this.recuperationSecteursActivites();
  }
  get f() {
    return this.formulaireEdition.controls;
  }
  // Action du formulaire
  onSubmit() {
    this.apiProjetSyntheseService
      .majOffreDeStage(this.offreStage)
      .subscribe(() => (this.offreStage = null));
    this.modification = false;
    console.log(this.offreStage);
  }
  suppressionOffre(): void {
    this.apiProjetSyntheseService
      .suppressionOffreDeStage(this.offreStage._id)
      .subscribe((result) => this.offreStage);
    window.location.reload();
    environement.connecter = true;
    environement.statusDeConnexion = 'entreprise';
  }
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  annuler(): void {
    this.modification = false;
  }
  // Récupération des secteurs d'activitées
  recuperationSecteursActivites(): void {
    this.apiProjetSyntheseService
      .recuperationSecteursActivites()
      .subscribe((resultat) => (this.secteursActivites = resultat));
  }
}
