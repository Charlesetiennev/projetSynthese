// Connexion-inscription.ts
// Par Charles-Etienne Villemure
// Le 6 Avril 2021
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion-inscription',
  templateUrl: './connexion-inscription.component.html',
  styleUrls: ['./connexion-inscription.component.sass'],
})
export class ConnexionInscriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formulaireDiv = {
    stagiaire: false,
    entreprise: false,
  };
}
