// formulaire-demande-stage-administration.ts
// Par Charles-Etienne Villemure
// Le 9 Avril 2021
import { Component, OnInit } from '@angular/core';
import { DemandeStage } from '../../../demande-stage';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-demande-stage-admninistration',
  templateUrl: './formulaire-demande-stage-admninistration.component.html',
  styleUrls: ['./formulaire-demande-stage-admninistration.component.sass'],
})
export class FormulaireDemandeStageAdmninistrationComponent implements OnInit {
  nouvelleDemandeStage: DemandeStage;
  // Formulaire
  demandeStageAjoutForm: FormGroup;
  soumission = false;
  // Date minimum
  dateAujourdhui = new Date();
  // Listes des champs a choix du formulaire
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
  constructor(
    private router: Router,
    private apiProjetSyntheseService: ApiProjetSyntheseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.demandeStageAjoutForm = this.formBuilder.group({
      titre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      programmeSuivi: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      typeDeStage: ['', [Validators.required]],
      ville: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z -àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*'),
        ],
      ],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      nombreHeuresSemaine: [
        '',
        [Validators.required, Validators.min(1), Validators.max(50)],
      ],
      remuneration: ['', [Validators.required]],
      autreFormation: [''],
      competencesAcquises: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500),
        ],
      ],
      informationSupplementaire: [''],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1500),
        ],
      ],
    });
  }

  get f() {
    return this.demandeStageAjoutForm.controls;
  }
  // Action Formulaire
  onSubmit() {
    this.soumission = true;
    // Si formulaire valide
    if (this.demandeStageAjoutForm.valid) {
      this.nouvelleDemandeStage = {
        _id: null,
        accepter: false,
        competencesAcquises: this.demandeStageAjoutForm.get(
          'competencesAcquises'
        )?.value,
        dateDeParution: Date(),
        dateDebut: this.demandeStageAjoutForm.get('dateDebut')?.value,
        dateFin: this.demandeStageAjoutForm.get('dateFin')?.value,
        description: this.demandeStageAjoutForm.get('description')?.value,
        dureeStageSemaine: 0,
        nombreHeuresSemaine: this.demandeStageAjoutForm.get(
          'nombreHeuresSemaine'
        )?.value,
        programmeSuivi: this.demandeStageAjoutForm.get('programmeSuivi')?.value,
        remuneration: this.demandeStageAjoutForm.get('remuneration')?.value,
        titre: this.demandeStageAjoutForm.get('titre')?.value,
        typeDeStage: this.demandeStageAjoutForm.get('typeDeStage')?.value,
        ville: this.demandeStageAjoutForm.get('ville')?.value,
        autreFormation: this.demandeStageAjoutForm.get('autreFormation')?.value,
        informationSupplementaire: this.demandeStageAjoutForm.get(
          'informationSupplementaire'
        )?.value,
        stagiaire: {
          _id: null,
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
          niveauAcces: 111,
        },
      };
      console.log(this.nouvelleDemandeStage);
      this.apiProjetSyntheseService
        .ajoutDemandeDeStage(this.nouvelleDemandeStage)
        .subscribe(
          (nouvelleDemandeStage) => (this.nouvelleDemandeStage._id = null)
        );
      // Redirection vers la fiche du candidat
      this.router.navigate([
        '/administration/ficheCandidat/605a31da6caff70015917aa4',
      ]);
    } else {
      console.log('invalide');
    }
  }
}
