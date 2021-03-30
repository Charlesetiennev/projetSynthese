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
  constructor(private router: Router) {}

  ngOnInit(): void {}
  gererConnexionEntreprise(entrepriseConnexion: NgForm) {
    this.env.connecter = true;
    this.env.statusDeConnexion = 'entreprise';
    this.router.navigate(['/administration/accueil']);
    console.log(this.env.statusDeConnexion);
  }
}
