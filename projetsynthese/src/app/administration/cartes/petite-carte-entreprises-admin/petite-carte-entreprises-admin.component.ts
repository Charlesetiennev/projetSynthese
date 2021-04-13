// petite-carte-entreprises-admin.ts
// Par Charles-Etienne Villemure
// Le 12 Avril 2021
import { Component, OnInit, Input } from '@angular/core';
import { environement } from '../../../environement';
import { Entreprise } from '../../../entreprise';

@Component({
  selector: 'app-petite-carte-entreprises-admin',
  templateUrl: './petite-carte-entreprises-admin.component.html',
  styleUrls: ['./petite-carte-entreprises-admin.component.sass'],
})
export class PetiteCarteEntreprisesAdminComponent implements OnInit {
  @Input() entreprise: Entreprise;
  env = environement;
  constructor() {}

  ngOnInit(): void {}
}
