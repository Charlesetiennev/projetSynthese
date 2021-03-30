import { Component, OnInit } from '@angular/core';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { SECTEURSACTIVITE } from '../../mock-secteurs-activite';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';
import { Entreprise } from 'src/app/entreprise';

@Component({
  selector: 'app-formulaire-entreprise',
  templateUrl: './formulaire-entreprise.component.html',
  styleUrls: ['./formulaire-entreprise.component.sass'],
})
export class FormulaireEntrepriseComponent implements OnInit {
  //
  form: FormGroup;
  //

  nouvelleEntreprise: Entreprise;
  secteursActivite: string[] = SECTEURSACTIVITE;
  constructor(
    private apiProjetSyntheseService: ApiProjetSyntheseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //
    this.form = this.formBuilder.group({
      nomEntreprise: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      adresse: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
    });
    //
    this.nouvelleEntreprise = {
      _id: null,
      nom: '',
      aPropos: '',
      adresse: '',
      courriel: '',
      logo: '',
      nomEntreprise: '',
      nomResponsable: '',
      numeroTel: '',
      prenomResponsable: '',
      secteurActivite: [],
      siteWeb: '',
      ville: '',
      motDePasse: '',
    };
  }

  formulaireTerminer(entrepriseAjoutForm: NgForm) {
    this.apiProjetSyntheseService
      .ajoutEntreprise(this.nouvelleEntreprise)
      .subscribe((nouvelleEntreprise) => {
        entrepriseAjoutForm.resetForm();
        this.nouvelleEntreprise._id = null;
      });
  }
}
