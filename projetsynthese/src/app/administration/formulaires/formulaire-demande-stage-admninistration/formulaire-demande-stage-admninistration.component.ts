import { Component, OnInit } from '@angular/core';
import { DemandeStage } from '../../../demande-stage';
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
  selector: 'app-formulaire-demande-stage-admninistration',
  templateUrl: './formulaire-demande-stage-admninistration.component.html',
  styleUrls: ['./formulaire-demande-stage-admninistration.component.sass'],
})
export class FormulaireDemandeStageAdmninistrationComponent implements OnInit {
  nouvelleDemandeStage: DemandeStage;
  typesDeStageListe: string[] = [
    'Temps plein',
    'Temps partiel',
    'Alternance travail études',
  ];
  remunerationChoix: string[] = [
    'Oui',
    'Non',
    'à la discrétion de l’entreprise',
  ];
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.nouvelleDemandeStage = {
      _id: null,
      accepter: false,
      titre: '',
      ville: '',
      dateDeParution: Date(),
      competencesAcquises: '',
      dateDebut: '',
      dateFin: '',
      description: '',
      dureeStageSemaine: 0,
      nombreHeuresSemaine: 0,
      programmeSuivi: '',
      remuneration: '',
      typeDeStage: '',
      autreFormation: '',
      informationSupplementaire: '',
      stagiaire: {
        _id: 'fdsadfs',
        nom: 'Villemure',
        prenom: 'Charles',
        ville: 'Shawinigan',
        courriel: 'Charles@etienne.ca',
        telephone: '819-701-7918',
        competences: 'VueJs Angular React',
        formations: 'AEC',
        messageMotivation:
          'Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il.',
        accepter: true,
        motDePasse: '',
      },
    };
  }
  formulaireTerminer(demandeStageAjout: NgForm) {
    this.apiProjetSyntheseService
      .ajoutDemandeDeStage(this.nouvelleDemandeStage)
      .subscribe((nouvelleDemandeStage) => {
        this.nouvelleDemandeStage;
      });
  }
}
