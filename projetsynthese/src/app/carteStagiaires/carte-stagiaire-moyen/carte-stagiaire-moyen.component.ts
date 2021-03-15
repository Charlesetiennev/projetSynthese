import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../../stagiaire';

@Component({
  selector: 'app-carte-stagiaire-moyen',
  templateUrl: './carte-stagiaire-moyen.component.html',
  styleUrls: ['./carte-stagiaire-moyen.component.sass'],
})
export class CarteStagiaireMoyenComponent implements OnInit {
  @Input() stagiaire: Stagiaire;
  constructor() {}

  ngOnInit(): void {}
}
