import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../../stagiaire';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
@Component({
  selector: 'app-liste-candidats-admin',
  templateUrl: './liste-candidats-admin.component.html',
  styleUrls: ['./liste-candidats-admin.component.sass'],
})
export class ListeCandidatsAdminComponent implements OnInit {
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
