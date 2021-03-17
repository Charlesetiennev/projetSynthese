import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../../../stagiaire';

@Component({
  selector: 'app-attente-demande-stage',
  templateUrl: './attente-demande-stage.component.html',
  styleUrls: ['./attente-demande-stage.component.sass'],
})
export class AttenteDemandeStageComponent implements OnInit {
  @Input() stagiaire: Stagiaire;
  constructor() {}

  ngOnInit(): void {}
}
