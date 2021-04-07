import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { OffreStage } from '../../offre-stage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-stage-complete',
  templateUrl: './offre-stage-complete.component.html',
  styleUrls: ['./offre-stage-complete.component.sass'],
})
export class OffreStageCompleteComponent implements OnInit {
  _id: string | null;
  envoieCourriel: string;
  offreStage: OffreStage;

  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    this.offreStageAvecId();
  }
  offreStageAvecId(): void {
    this.apiProjetSyntheseService
      .recuperationOffreStagesId(this._id)
      .subscribe((resultat) => (this.offreStage = resultat));
  }
  // Calucul nombres semaines de stage
  dureeDuStage(
    dateDebut: string | number | Date,
    dateFin: string | number | Date
  ) {
    let dateDeDebut: any = new Date(dateDebut);
    let dateDeFin: any = new Date(dateFin);
    let difference = Math.round(
      Math.abs(
        (dateDeFin.getTime() - dateDeDebut.getTime()) / (1000 * 7 * 3600 * 24)
      )
    );
    return difference;
  }
}
