import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../../../stagiaire';

@Component({
  selector: 'app-petite-carte-stagiaires-admin',
  templateUrl: './petite-carte-stagiaires-admin.component.html',
  styleUrls: ['./petite-carte-stagiaires-admin.component.sass'],
})
export class PetiteCarteStagiairesAdminComponent implements OnInit {
  @Input() stagiaire: Stagiaire;
  constructor() {}

  ngOnInit(): void {}
}
