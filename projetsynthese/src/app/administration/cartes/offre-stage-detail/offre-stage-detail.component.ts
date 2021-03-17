import { Component, OnInit, Input } from '@angular/core';
import { OffreStage } from '../../../offre-stage';

@Component({
  selector: 'app-offre-stage-detail',
  templateUrl: './offre-stage-detail.component.html',
  styleUrls: ['./offre-stage-detail.component.sass'],
})
export class OffreStageDetailComponent implements OnInit {
  @Input() offreStage: OffreStage;
  constructor() {}

  ngOnInit(): void {}
}
