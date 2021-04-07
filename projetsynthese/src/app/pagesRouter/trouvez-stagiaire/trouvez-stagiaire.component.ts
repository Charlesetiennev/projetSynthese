// Trouvez-stagaire.ts
// Par Charles-Etiene Villemure
// Le 7 Avril 2021
import { Component, OnInit } from '@angular/core';
import { DemandeStage } from '../../demande-stage';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';

@Component({
  selector: 'app-trouvez-stagiaire',
  templateUrl: './trouvez-stagiaire.component.html',
  styleUrls: ['./trouvez-stagiaire.component.sass'],
})
export class TrouvezStagiaireComponent implements OnInit {
  demandesStages: DemandeStage[];
  // Gestion du bouton pour charger plus de demandes
  chargerPlus: boolean = false;
  afficher: boolean = true;
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.recuperationDemandesStages();
  }
  recuperationDemandesStages(): void {
    this.apiProjetSyntheseService
      .recuperationDemandesStages()
      .subscribe((resultat) => (this.demandesStages = resultat));
  }
}
