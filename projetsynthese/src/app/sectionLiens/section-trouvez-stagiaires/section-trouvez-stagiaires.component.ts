// Section-trouvez-stagiaires.ts
// Par Charles-Etienne Villemure
// Le 25 Mars 2021
import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';

@Component({
  selector: 'app-section-trouvez-stagiaires',
  templateUrl: './section-trouvez-stagiaires.component.html',
  styleUrls: ['./section-trouvez-stagiaires.component.sass'],
})
export class SectionTrouvezStagiairesComponent implements OnInit {
  stagiaires: Stagiaire[];
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.getStagiaires();
  }
  getStagiaires(): void {
    this.apiProjetSyntheseService
      .getStagiaires()
      .subscribe((resultat) => (this.stagiaires = resultat));
  }
}
