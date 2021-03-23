import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
// import { STAGIAIRES } from '../../mock-stagiaires';

@Component({
  selector: 'app-section-trouvez-stagiaires',
  templateUrl: './section-trouvez-stagiaires.component.html',
  styleUrls: ['./section-trouvez-stagiaires.component.sass'],
})
export class SectionTrouvezStagiairesComponent implements OnInit {
  stagiaires: Stagiaire[] 
  // = STAGIAIRES;
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
