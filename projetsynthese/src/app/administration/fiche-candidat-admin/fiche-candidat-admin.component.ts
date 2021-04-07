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
  // Environement
  env = environement;
  // Modification
  modification = false;
  _id: string | null;
  formationsListe: string[] = ['AEC', 'DEC', 'BAC', 'Autres'];
  formulaireEdition: NgForm;
  soumission = false;
  stagiaire: any;
  stagiaireModifier: Stagiaire;

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

  stagiaireAvecId(): void {
    this.apiProjetSyntheseService
      .getStagiaireavecId(this._id)
      .subscribe((resultat) => console.log((this.stagiaire = resultat)));
  }
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  onSubmit() {
    this.apiProjetSyntheseService
      .majStagiaire(this.stagiaire)
      .subscribe(() => (this.stagiaire._id = this.stagiaire._id));

    console.log(this.stagiaire);
  }
}
