import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
  gererConnexionStagiaire(connexionStagiaire: NgForm) {}
}
