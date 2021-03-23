import { Component, OnInit } from '@angular/core';
// Stagiaire
import { Stagiaire } from '../../stagiaire';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
// import { STAGIAIRES } from '../../mock-stagiaires';

@Component({
  selector: 'app-trouvez-stagiaire',
  templateUrl: './trouvez-stagiaire.component.html',
  styleUrls: ['./trouvez-stagiaire.component.sass'],
})
export class TrouvezStagiaireComponent implements OnInit {
  stagiaires: Stagiaire[];
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
