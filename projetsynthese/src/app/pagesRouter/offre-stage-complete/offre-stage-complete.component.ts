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
  offreStage: OffreStage;

  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    console.log(this._id);
    this.offreStageAvecId();
  }
  offreStageAvecId(): void {
    this.apiProjetSyntheseService
      .recuperationOffreStagesId(this._id)
      .subscribe((resultat) => (this.offreStage = resultat));
  }
}
