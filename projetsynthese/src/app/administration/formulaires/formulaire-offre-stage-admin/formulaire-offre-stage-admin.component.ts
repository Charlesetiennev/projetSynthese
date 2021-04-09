import { Component, OnInit } from '@angular/core';
import { OffreStage } from '../../../offre-stage';
import { SecteursActivites } from '../../../secteurs-activites';
import { ApiProjetSyntheseService } from '../../../api-projet-synthese.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-offre-stage-admin',
  templateUrl: './formulaire-offre-stage-admin.component.html',
  styleUrls: ['./formulaire-offre-stage-admin.component.sass'],
})
export class FormulaireOffreStageAdminComponent implements OnInit {
  offreStageAjoutForm: FormGroup;
  soumission = false;
  secteursActivites: SecteursActivites[];
  nouvelleOffreStage: OffreStage;

  constructor(
    private apiProjetSyntheseService: ApiProjetSyntheseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Secteurs d'activitées
    this.recuperationSecteursActivites();
    //
    this.offreStageAjoutForm = this.formBuilder.group({
      titre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
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
      emploieApresStage: ['', [Validators.required]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1500),
        ],
      ],
      competencesRechercher: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1500),
        ],
      ],
      informationSupplementaire: [''],
      secteursActivites: ['', [Validators.required]],
    });
  }

  get f() {
    return this.offreStageAjoutForm.controls;
  }
  onSubmit() {
    this.soumission = true;
    // Si formulaire valide
    if (this.offreStageAjoutForm.valid) {
      this.nouvelleOffreStage = {
        _id: null,
        titre: this.offreStageAjoutForm.get('titre')?.value,
        ville: this.offreStageAjoutForm.get('ville')?.value,
        dateDebut: this.offreStageAjoutForm.get('dateDebut')?.value,
        dateFin: this.offreStageAjoutForm.get('dateFin')?.value,
        nombreHeuresSemaine: this.offreStageAjoutForm.get('nombreHeuresSemaine')
          ?.value,
        emploieApresStage: this.offreStageAjoutForm.get('emploieApresStage')
          ?.value,
        description: this.offreStageAjoutForm.get('description')?.value,
        remuneration: this.offreStageAjoutForm.get('remuneration')?.value,
        competencesRechercher: this.offreStageAjoutForm.get(
          'competencesRechercher'
        )?.value,
        dureeStageSemaine: 0,
        secteursActivites: this.offreStageAjoutForm.get('secteursActivites')
          ?.value,
        informationSupplementaire: this.offreStageAjoutForm.get(
          'informationSupplementaire'
        )?.value,
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
          niveauAcces: 333,
        },
        accepter: false,
        dateDeParution: Date(),
      };
      console.log(this.nouvelleOffreStage);
      this.apiProjetSyntheseService
        .ajoutOffreDeStage(this.nouvelleOffreStage)
        .subscribe(
          (nouvelleOffreStage) => (this.nouvelleOffreStage._id = null)
        );
    } else {
      console.log('invalide');
    }
  }

  redemarrer() {
    this.soumission = false;
    this.offreStageAjoutForm.reset();
  }
  // Récuperations des secteurs d'activitées
  recuperationSecteursActivites(): void {
    this.apiProjetSyntheseService
      .recuperationSecteursActivites()
      .subscribe((resultat) => (this.secteursActivites = resultat));
  }
}
