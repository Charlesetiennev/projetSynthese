// liste-entreprises.ts
// Par Charles-Etienne Villemure
// Le 12 Avril 2021
import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../entreprise';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
@Component({
  selector: 'app-liste-entreprises',
  templateUrl: './liste-entreprises.component.html',
  styleUrls: ['./liste-entreprises.component.sass'],
})
export class ListeEntreprisesComponent implements OnInit {
  entreprises: Entreprise[];
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.recuperationEntreprises();
  }
  recuperationEntreprises(): void {
    this.apiProjetSyntheseService
      .recuperationEntreprises()
      .subscribe((resultat) => (this.entreprises = resultat));
  }
}
