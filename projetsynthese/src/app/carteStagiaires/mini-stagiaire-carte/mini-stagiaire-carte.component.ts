// mini-carte-stagiaire.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Component, OnInit, Input } from '@angular/core';
import { DemandeStage } from '../../demande-stage';

@Component({
  selector: 'app-mini-stagiaire-carte',
  templateUrl: './mini-stagiaire-carte.component.html',
  styleUrls: ['./mini-stagiaire-carte.component.sass'],
})
export class MiniStagiaireCarteComponent implements OnInit {
  @Input() demandeStage: DemandeStage;
  constructor() {}

  ngOnInit(): void {}
}
