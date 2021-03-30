import { Component, OnInit } from '@angular/core';
import { SecteursActivites } from '../secteurs-activites';
import { ApiProjetSyntheseService } from '../api-projet-synthese.service';

@Component({
  selector: 'app-tableau-secteurs-activite',
  templateUrl: './tableau-secteurs-activite.component.html',
  styleUrls: ['./tableau-secteurs-activite.component.sass'],
})
export class TableauSecteursActiviteComponent implements OnInit {
  secteursActivites: SecteursActivites[];

  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.recuperationSecteursActivites();
  }
  recuperationSecteursActivites(): void {
    this.apiProjetSyntheseService
      .recuperationSecteursActivites()
      .subscribe((resultat) => (this.secteursActivites = resultat));
  }
}
