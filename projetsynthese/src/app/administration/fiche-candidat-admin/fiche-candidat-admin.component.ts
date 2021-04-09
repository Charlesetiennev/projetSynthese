// fiche-candidat-admin.ts
// Par Charles-Etienne Villemure
// Le 9 Avril 2021
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Stagiaire } from '../../stagiaire';
import { environement } from '../../environement';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fiche-candidat-admin',
  templateUrl: './fiche-candidat-admin.component.html',
  styleUrls: ['./fiche-candidat-admin.component.sass'],
})
export class FicheCandidatAdminComponent implements OnInit {
  stagiaire: any;
  _id: string | null;
  // Environement
  env = environement;
  // Formulaire
  modification = false;
  formulaireEdition: NgForm;
  soumission = false;
  // Liste pour le champs de la formation dans le formulaire
  formationsListe: string[] = ['AEC', 'DEC', 'BAC', 'Autres'];

  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    this.stagiaireAvecId();
  }

  get f() {
    return this.formulaireEdition.controls;
  }
  // Récupération d'un stagiaire par son ID
  stagiaireAvecId(): void {
    this.apiProjetSyntheseService
      .getStagiaireavecId(this._id)
      .subscribe((resultat) => console.log((this.stagiaire = resultat)));
  }
  // Action du formulaire
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  onSubmit() {
    this.apiProjetSyntheseService
      .majStagiaire(this.stagiaire)
      .subscribe(() => (this.stagiaire = null));
    this.modification = false;
  }
  annuler(): void {
    this.modification = false;
  }
}
