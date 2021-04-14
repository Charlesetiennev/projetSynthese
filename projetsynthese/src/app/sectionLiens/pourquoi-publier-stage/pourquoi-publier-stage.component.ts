// pourquoi-publier-stage.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Component, OnInit } from '@angular/core';
import { environement } from '../../environement';

@Component({
  selector: 'app-pourquoi-publier-stage',
  templateUrl: './pourquoi-publier-stage.component.html',
  styleUrls: ['./pourquoi-publier-stage.component.sass'],
})
export class PourquoiPublierStageComponent implements OnInit {
  env = environement;
  constructor() {}

  ngOnInit(): void {}
}
