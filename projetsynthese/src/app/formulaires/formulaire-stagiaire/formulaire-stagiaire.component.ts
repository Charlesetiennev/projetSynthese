import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/stagiaire';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-formulaire-stagiaire',
  templateUrl: './formulaire-stagiaire.component.html',
  styleUrls: ['./formulaire-stagiaire.component.sass'],
})
export class FormulaireStagiaireComponent implements OnInit {
  stagiaireAjoutForm: FormGroup;
  soumission = false;
  nouveauStagiaire: Stagiaire;
  stagiaires: Stagiaire[];
  formationsListe: string[] = ['AEC', 'DEC', 'BAC', 'Autres'];
  constructor(
    private apiProjetSyntheseService: ApiProjetSyntheseService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.stagiaireAjoutForm = this.formBuilder.group({
      formations: ['', Validators.required],
      prenom: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      nom: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      courriel: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      ville: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      competences: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1500),
        ],
      ],
      messageMotivation: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1500),
        ],
      ],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.stagiaireAjoutForm.controls;
  }

  onSubmit() {
    this.soumission = true;

    // Si formulaire valide
    if (this.stagiaireAjoutForm.valid) {
      this.nouveauStagiaire = {
        _id: null,
        prenom: this.stagiaireAjoutForm.get('prenom')?.value,
        nom: this.stagiaireAjoutForm.get('nom')?.value,
        courriel: this.stagiaireAjoutForm.get('courriel')?.value,
        telephone: this.stagiaireAjoutForm.get('telephone')?.value,
        ville: this.stagiaireAjoutForm.get('ville')?.value,
        competences: this.stagiaireAjoutForm.get('competences')?.value,
        formations: this.stagiaireAjoutForm.get('formations')?.value,
        messageMotivation: this.stagiaireAjoutForm.get('messageMotivation')
          ?.value,
        accepter: false,
        motDePasse: this.stagiaireAjoutForm.get('motDePasse')?.value,
      };
      console.log('valide');
      this.apiProjetSyntheseService
        .ajoutStagiaire(this.nouveauStagiaire)
        .subscribe((nouveauStagiaire) => {
          this.nouveauStagiaire._id = null;
        });

      this.stagiaireAjoutForm.reset();
    } else {
      console.log('non valide');
    }
  }

  redemarrer() {
    this.soumission = false;
    this.stagiaireAjoutForm.reset();
  }
}
