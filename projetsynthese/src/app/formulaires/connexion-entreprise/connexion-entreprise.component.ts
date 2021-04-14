// connexion-entreprise.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environement } from '../../environement';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-connexion-entreprise',
  templateUrl: './connexion-entreprise.component.html',
  styleUrls: ['./connexion-entreprise.component.sass'],
})
export class ConnexionEntrepriseComponent implements OnInit {
  env = environement;
  formulaireDeConnexion: FormGroup;
  soumission = false;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulaireDeConnexion = this.formBuilder.group({
      courriel: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.formulaireDeConnexion.controls;
  }
  onSubmit() {
    this.soumission = true;

    // Si formulaire valide
    if (this.formulaireDeConnexion.valid) {
      this.env.connecter = true;
      this.env.statusDeConnexion = 'entreprise';
      this.router.navigate([
        '/administration/ficheEntreprise/6076017fdd6fe400157e232a',
      ]);
    } else {
      console.log('non valide');
    }
  }
}
