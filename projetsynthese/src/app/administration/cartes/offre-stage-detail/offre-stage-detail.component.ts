import { Component, OnInit, Input } from '@angular/core';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { OffreStage } from '../../../offre-stage';
import { SecteursActivites } from '../../../secteurs-activites';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-offre-stage-detail',
  templateUrl: './offre-stage-detail.component.html',
  styleUrls: ['./offre-stage-detail.component.sass'],
})
export class OffreStageDetailComponent implements OnInit {
  @Input() offreStage: OffreStage;
  secteursActivites: SecteursActivites[];
  formulaireEdition: NgForm;
  modification = false;
  soumission = false;
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    // Secteur d'activitées
    this.recuperationSecteursActivites();
  }
  get f() {
    return this.formulaireEdition.controls;
  }
  onSubmit() {
    console.log(this.offreStage);
  }
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  annuler(): void {
    this.modification = false;
  }
  // Récupérations des secteurs d'activitées
  recuperationSecteursActivites(): void {
    this.apiProjetSyntheseService
      .recuperationSecteursActivites()
      .subscribe((resultat) => (this.secteursActivites = resultat));
  }
}
