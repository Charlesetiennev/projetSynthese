/*****************************************************/
/********Page non utilisé (Pour administrateur)*******/
/*****************************************************/
// attende-demande-stage.ts
// Par Charles-Etienne Villemure
// Le 9 Avril 2021
import { Component, OnInit, Input } from '@angular/core';
import { DemandeStage } from '../../../demande-stage';

@Component({
  selector: 'app-attente-demande-stage',
  templateUrl: './attente-demande-stage.component.html',
  styleUrls: ['./attente-demande-stage.component.sass'],
})
export class AttenteDemandeStageComponent implements OnInit {
  @Input() demandeStage: DemandeStage;

  constructor() {}

  ngOnInit(): void {}
}
