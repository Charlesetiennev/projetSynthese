import { Component, OnInit } from '@angular/core';
import { environement } from '../../environement';

@Component({
  selector: 'app-section-trouvez-stage',
  templateUrl: './section-trouvez-stage.component.html',
  styleUrls: ['./section-trouvez-stage.component.sass'],
})
export class SectionTrouvezStageComponent implements OnInit {
  env = environement;
  constructor() {}

  ngOnInit(): void {}
}
