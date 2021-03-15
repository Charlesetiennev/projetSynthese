import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { STAGIAIRES } from '../../mock-stagiaires';

@Component({
  selector: 'app-trouvez-stagiaire',
  templateUrl: './trouvez-stagiaire.component.html',
  styleUrls: ['./trouvez-stagiaire.component.sass'],
})
export class TrouvezStagiaireComponent implements OnInit {
  stagiaires: Stagiaire[] = STAGIAIRES;
  constructor() {}

  ngOnInit(): void {}
}
