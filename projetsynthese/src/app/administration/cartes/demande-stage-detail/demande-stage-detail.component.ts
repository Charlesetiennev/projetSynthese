import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { DemandeStage } from '../../../demande-stage';
import { Component, OnInit } from '@angular/core';
import { environement } from '../../../environement';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demande-stage-detail',
  templateUrl: './demande-stage-detail.component.html',
  styleUrls: ['./demande-stage-detail.component.sass'],
})
export class DemandeStageDetailComponent implements OnInit {
  // Environement
  env = environement;
  // Modification
  modification = false;
  formulaireEdition: NgForm;
  soumission = false;
  demandeStage: any;
  _id: string | null;
  typesDeStageListe: string[] = [
    'Temps plein',
    'Temps partiel',
    'Alternance travail études',
  ];
  remunerationChoix: string[] = [
    'Oui',
    'Non',
    'à la discrétion de l’entreprise',
  ];

  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    this.recuperationDemandeStagesId();
  }
  get f() {
    return this.formulaireEdition.controls;
  }
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  onSubmit() {
    this.apiProjetSyntheseService
      .majDemandeDeStage(this.demandeStage)
      .subscribe(() => (this.demandeStage = null));
    this.modification = false;
    console.log(this.demandeStage);
  }
  annuler(): void {
    this.modification = false;
  }
  recuperationDemandeStagesId(): void {
    this.apiProjetSyntheseService
      .recuperationDemandeStagesId(this._id)
      .subscribe((resultat) => (this.demandeStage = resultat));
  }
}
