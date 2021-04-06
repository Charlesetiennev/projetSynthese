import { Component, OnInit } from '@angular/core';
import { SecteursActivites } from '../../secteurs-activites';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entreprise } from 'src/app/entreprise';

@Component({
  selector: 'app-formulaire-entreprise',
  templateUrl: './formulaire-entreprise.component.html',
  styleUrls: ['./formulaire-entreprise.component.sass'],
})
export class FormulaireEntrepriseComponent implements OnInit {
  entrepriseAjoutForm: FormGroup;
  soumission = false;
  nouvelleEntreprise: Entreprise;
  secteursActivites: SecteursActivites[];
  constructor(
    private apiProjetSyntheseService: ApiProjetSyntheseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Secteur d'activites
    this.recuperationSecteursActivites();
    // Formulaire
    this.entrepriseAjoutForm = this.formBuilder.group({
      nomEntreprise: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],

      adresse: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      ville: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      courriel: ['', [Validators.required, Validators.email]],
      numeroTel: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      siteWeb: ['', [Validators.required]],
      aPropos: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1500),
        ],
      ],
      secteurActivite: ['', [Validators.required]],
      prenomResponsable: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      nomResponsable: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.entrepriseAjoutForm.controls;
  }
  onSubmit() {
    this.soumission = true;

    // Si formulaire valide
    if (this.entrepriseAjoutForm.valid) {
      this.nouvelleEntreprise = {
        _id: null,
        aPropos: this.entrepriseAjoutForm.get('aPropos')?.value,
        adresse: this.entrepriseAjoutForm.get('adresse')?.value,
        courriel: this.entrepriseAjoutForm.get('courriel')?.value,
        logo: this.entrepriseAjoutForm.get('logo')?.value,
        nomEntreprise: this.entrepriseAjoutForm.get('nomResponsable')?.value,
        nomResponsable: this.entrepriseAjoutForm.get('nomResponsable')?.value,
        numeroTel: this.entrepriseAjoutForm.get('numeroTel')?.value,
        prenomResponsable: this.entrepriseAjoutForm.get('prenomResponsable')
          ?.value,
        secteurActivite: this.entrepriseAjoutForm.get('secteurActivite')?.value,
        siteWeb: this.entrepriseAjoutForm.get('siteWeb')?.value,
        ville: this.entrepriseAjoutForm.get('ville')?.value,
        motDePasse: this.entrepriseAjoutForm.get('motDePasse')?.value,
        accepter: false,
        niveauAcces: 333,
      };
      this.entrepriseAjoutForm.reset();
      console.log(this.nouvelleEntreprise);
      this.apiProjetSyntheseService
        .ajoutEntreprise(this.nouvelleEntreprise)
        .subscribe(
          (nouvelleEntreprise) => (this.nouvelleEntreprise._id = null)
        );
    } else {
      console.log('invalide');
    }
  }

  redemarrer() {
    this.soumission = false;
    this.entrepriseAjoutForm.reset();
  }
  // Recuperations des secteurs d'activites
  recuperationSecteursActivites(): void {
    this.apiProjetSyntheseService
      .recuperationSecteursActivites()
      .subscribe((resultat) => (this.secteursActivites = resultat));
  }
}
