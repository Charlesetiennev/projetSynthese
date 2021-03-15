import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { STAGIAIRES } from '../../mock-stagiaires';

@Component({
  selector: 'app-section-trouvez-stagiaires',
  templateUrl: './section-trouvez-stagiaires.component.html',
  styleUrls: ['./section-trouvez-stagiaires.component.sass'],
})
export class SectionTrouvezStagiairesComponent implements OnInit {
  stagiaires: Stagiaire[] = STAGIAIRES;
  constructor() {}

  ngOnInit(): void {}
}
