import { Component, OnInit } from '@angular/core';
import { OffreStage } from '../../../offre-stage';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-formulaire-offre-stage-admin',
  templateUrl: './formulaire-offre-stage-admin.component.html',
  styleUrls: ['./formulaire-offre-stage-admin.component.sass'],
})
export class FormulaireOffreStageAdminComponent implements OnInit {
  nouvelleOffreStage: OffreStage;
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.nouvelleOffreStage = {
      accepter: false,
      _id: null,
      dureeStageSemaine: 0,
      secteursActivites: [''],
      typeDeStage: '',
      competencesRechercher: '',
      dateDeParution: Date(),
      dateDebut: '',
      dateFin: '',
      description: '',
      emploieApresStage: false,
      nombreHeuresSemaine: 0,
      remuneration: false,
      titre: '',
      ville: '',
      informationSupplementaire: '',
      entreprise: {
        _id: null,
        aPropos:
          'Etiam mattis est in tellus mattis maximus. Etiam non molestie metus. Donec quis mauris metus. Cras tempor varius odio, nec varius nisi sollicitudin ac. Praesent vitae elementum augue, non suscipit turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc, iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est lectus, elementum pellentesque nisi cursus at. Maecenas nec elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris placerat euismod lectus, quis laoreet libero commodo vel. Nullam metus ipsum, pulvinar a nulla nec, tristique scelerisque libero. Pellentesque turpis libero, hendrerit vitae placerat id, laoreet consectetur lectus.',
        adresse: '19832 boulevard Maison',
        courriel: 'abc@hotmail.maroc',
        logo: 'https://picsum.photos/150/100',
        nomEntreprise: 'Compagnie web',
        nomResponsable: 'Cloutier',
        numeroTel: '819-791-3212',
        prenomResponsable: 'Laurent',
        secteurActivite: [
          'Transport par camion',
          'Construction',
          'Extraction minière,  et extraction de pétrole et de gaz',
        ],
        siteWeb: 'https://google.ca',
        ville: 'Sherbrooke',
        accepter: true,
        motDePasse: 'asdasd',
      },
    };
  }
  formulaireTerminer(offreStageAjoutForm: NgForm) {
    this.apiProjetSyntheseService
      .ajoutOffreDeStage(this.nouvelleOffreStage)
      .subscribe((nouvelleOffreStage) => {
        this.nouvelleOffreStage._id = null;
      });
  }
}
