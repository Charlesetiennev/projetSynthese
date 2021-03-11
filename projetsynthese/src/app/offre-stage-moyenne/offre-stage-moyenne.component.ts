import { Component, OnInit, Input } from '@angular/core';
import { OffreStage } from '../offre-stage';

@Component({
  selector: 'app-offre-stage-moyenne',
  templateUrl: './offre-stage-moyenne.component.html',
  styleUrls: ['./offre-stage-moyenne.component.sass'],
})
export class OffreStageMoyenneComponent implements OnInit {
  @Input() offreStage: OffreStage;
  constructor() {}

  ngOnInit(): void {}
}
