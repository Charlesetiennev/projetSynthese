// connexion-stagiaire.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environement } from '../../environement';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion-stagiaire',
  templateUrl: './connexion-stagiaire.component.html',
  styleUrls: ['./connexion-stagiaire.component.sass'],
})
export class ConnexionStagiaireComponent implements OnInit {
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
      this.env.statusDeConnexion = 'stagiaire';
      this.router.navigate([
        '/administration/ficheCandidat/605a31da6caff70015917aa4',
      ]);
    } else {
      console.log('non valide');
    }
  }
}
