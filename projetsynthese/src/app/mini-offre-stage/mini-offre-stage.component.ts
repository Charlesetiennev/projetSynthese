import { Component, OnInit, Input } from '@angular/core';
import { OffreStage } from '../offre-stage';

@Component({
  selector: 'app-mini-offre-stage',
  templateUrl: './mini-offre-stage.component.html',
  styleUrls: ['./mini-offre-stage.component.sass'],
})
export class MiniOffreStageComponent implements OnInit {
  @Input() offreStage: OffreStage;
  constructor() {}

  ngOnInit(): void {}
}
