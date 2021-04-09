// entreprise-admin.ts
// Par Charles-Etienne Villemure
// Le 9 Avril 2021
import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../entreprise';
import { SecteursActivites } from '../../secteurs-activites';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environement } from '../../environement';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entreprise-admin',
  templateUrl: './entreprise-admin.component.html',
  styleUrls: ['./entreprise-admin.component.sass'],
})
export class EntrepriseAdminComponent implements OnInit {
  _id: string | null;
  entreprise: any;
  // Environement
  env = environement;
  // Formulaire
  modification = false;
  formulaireEdition: NgForm;
  soumission = false;
  // Secteurs d'activité
  secteursActivites: SecteursActivites[];
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}
  ngOnInit(): void {
    // Secteurs d'activité
    this.recuperationSecteursActivites();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    this.entrepriseAvecId();
  }
  get f() {
    return this.formulaireEdition.controls;
  }
  // Récupération d'une entreprise avec son champ ID
  entrepriseAvecId(): void {
    this.apiProjetSyntheseService
      .recuperationEntrepriseavecId(this._id)
      .subscribe((resultat) => (this.entreprise = resultat));
  }
  // Action du formulaire
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  onSubmit() {
    this.apiProjetSyntheseService
      .majEntreprise(this.entreprise)
      .subscribe(() => (this.entreprise = null));
    this.modification = false;
    console.log(this.entreprise);
  }
  annuler(): void {
    this.modification = false;
  }
  // Récupérations des secteurs d'activité
  recuperationSecteursActivites(): void {
    this.apiProjetSyntheseService
      .recuperationSecteursActivites()
      .subscribe((resultat) => (this.secteursActivites = resultat));
  }
}
