import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from '../../stagiaire';
import { environement } from '../../environement';
import { ApiProjetSyntheseService } from '../../api-projet-synthese.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-fiche-candidat-admin',
  templateUrl: './fiche-candidat-admin.component.html',
  styleUrls: ['./fiche-candidat-admin.component.sass'],
})
export class FicheCandidatAdminComponent implements OnInit {
  // Environement
  env = environement;
  // Modification
  modification = false;
  _id: string | null;
  formulaireEdition: NgForm;
  stagiaire: Stagiaire;
  stagiaireSelectionner: Stagiaire;

  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private apiProjetSyntheseService: ApiProjetSyntheseService
  ) {}

  ngOnInit(): void {
    this._id = '605a31da6caff70015917aa4';
    this.stagiaireAvecId();
    this.stagiaireSelectionner = {
      _id: this._id,
      nom: 'Charles-Etienne',
      competences: 'asdad fadsdfa',
      courriel: 'Charles_##',
      formations: 'asdfasdf',
      messageMotivation: 'asdfasdfasdf',
      telephone: 'asdfasdf',
      ville: 'asdfasdf',
      prenom: 'asdfasdf',
      accepter: true,
      motDePasse: '',
    };
    console.log(this.stagiaireSelectionner);
  }
  stagiaireAvecId(): void {
    this.apiProjetSyntheseService
      .getStagiaireavecId(this._id)
      .subscribe((resultat) => (this.stagiaire = resultat));
  }
  modificationForm(): void {
    if (this.modification === true) {
      // this.apiProjetSyntheseService
      // .majStagiaire(this.stagiaire)
      // .subscribe(() => console.log(this.stagiaire));
    }
  }
  onSubmit() {
    this.apiProjetSyntheseService
      .majStagiaire(this.stagiaire)
      .subscribe(() => this.stagiaire);
    console.log(this.stagiaire);
  }
}
