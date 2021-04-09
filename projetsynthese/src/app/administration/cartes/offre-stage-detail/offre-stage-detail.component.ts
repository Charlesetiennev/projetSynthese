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
  @Input() offreStage: OffreStage | any;
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
