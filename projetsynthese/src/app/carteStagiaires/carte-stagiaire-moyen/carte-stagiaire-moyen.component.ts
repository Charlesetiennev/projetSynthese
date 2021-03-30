import { Component, OnInit, Input } from '@angular/core';
import { DemandeStage } from '../../demande-stage';
import { Stagiaire } from '../../stagiaire';

@Component({
  selector: 'app-carte-stagiaire-moyen',
  templateUrl: './carte-stagiaire-moyen.component.html',
  styleUrls: ['./carte-stagiaire-moyen.component.sass'],
})
export class CarteStagiaireMoyenComponent implements OnInit {
  @Input() stagiaire: Stagiaire;
  @Input() demandeStage: DemandeStage;
  constructor() {}

  ngOnInit(): void {}
}
