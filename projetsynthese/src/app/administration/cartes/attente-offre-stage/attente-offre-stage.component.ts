import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { OffreStage } from '../../../offre-stage';
import { environement } from '../../../environement';

@Component({
  selector: 'app-attente-offre-stage',
  templateUrl: './attente-offre-stage.component.html',
  styleUrls: ['./attente-offre-stage.component.sass'],
})
export class AttenteOffreStageComponent implements OnInit {
  env = environement;
  @Input() offreStage: OffreStage;
  constructor() {}

  ngOnInit(): void {}
}
