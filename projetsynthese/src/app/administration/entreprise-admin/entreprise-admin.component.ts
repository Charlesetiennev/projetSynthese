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
  // Environement
  env = environement;
  // Modification
  modification = false;
  formulaireEdition: NgForm;
  soumission = false;
  _id: string | null;
  entreprise: any;
  secteursActivites: SecteursActivites[];
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}
  ngOnInit(): void {
    // Secteurs d'activitées
    this.recuperationSecteursActivites();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    this.entrepriseAvecId();
  }
  get f() {
    return this.formulaireEdition.controls;
  }

  entrepriseAvecId(): void {
    this.apiProjetSyntheseService
      .recuperationEntrepriseavecId(this._id)
      .subscribe((resultat) => (this.entreprise = resultat));
  }
  // Ouverture du formulaire
  ouvrirFormulaire(): void {
    this.modification = true;
  }
  // soummission et annulation du formulaire
  onSubmit() {
    this.apiProjetSyntheseService
      .majEntreprise(this.entreprise)
      .subscribe(() => (this.entreprise = null));
    console.log(this.entreprise);
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
