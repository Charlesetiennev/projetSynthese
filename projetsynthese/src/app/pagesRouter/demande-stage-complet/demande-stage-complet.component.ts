import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import { DemandeStage } from '../../demande-stage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-stage-complet',
  templateUrl: './demande-stage-complet.component.html',
  styleUrls: ['./demande-stage-complet.component.sass'],
})
export class DemandeStageCompletComponent implements OnInit {
  _id: string | null;
  demandeStage: DemandeStage;
  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
    });
    this.recuperationDemandeStagesId();
  }
  recuperationDemandeStagesId(): void {
    this.apiProjetSyntheseService
      .recuperationDemandeStagesId(this._id)
      .subscribe((resultat) => (this.demandeStage = resultat));
  }
}
