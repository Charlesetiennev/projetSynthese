import { Component, OnInit, Input } from '@angular/core';
import { OffreStage } from '../../../offre-stage';

@Component({
  selector: 'app-attente-offre-stage',
  templateUrl: './attente-offre-stage.component.html',
  styleUrls: ['./attente-offre-stage.component.sass'],
})
export class AttenteOffreStageComponent implements OnInit {
  @Input() offreStage: OffreStage;
  constructor() {}

  ngOnInit(): void {}
}
