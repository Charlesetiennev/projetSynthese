// action-haut-admin.ts
// Par Charles-Etienne Villemure
// Le 9 Avril 2021
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environement } from '../../environement';

@Component({
  selector: 'app-action-haut-admin',
  templateUrl: './action-haut-admin.component.html',
  styleUrls: ['./action-haut-admin.component.sass'],
})
export class ActionHautAdminComponent implements OnInit {
  env = environement;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  // Déconnexion
  deconnexion() {
    this.env.connecter = false;
    this.router.navigate(['/']);
  }
}
