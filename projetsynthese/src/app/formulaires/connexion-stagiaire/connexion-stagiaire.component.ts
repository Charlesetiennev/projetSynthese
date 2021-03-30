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
  selector: 'app-connexion-stagiaire',
  templateUrl: './connexion-stagiaire.component.html',
  styleUrls: ['./connexion-stagiaire.component.sass'],
})
export class ConnexionStagiaireComponent implements OnInit {
  env = environement;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  gererConnexionStagiaire(connexionStagiaire: NgForm) {
    this.env.connecter = true;
    this.env.statusDeConnexion = 'stagiaire';
    this.router.navigate([
      '/administration/ficheCandidat/605a31da6caff70015917aa4',
    ]);
  }
}
