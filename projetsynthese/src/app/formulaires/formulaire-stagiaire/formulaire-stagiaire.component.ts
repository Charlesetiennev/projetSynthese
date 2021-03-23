import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/stagiaire';
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
  selector: 'app-formulaire-stagiaire',
  templateUrl: './formulaire-stagiaire.component.html',
  styleUrls: ['./formulaire-stagiaire.component.sass'],
})
export class FormulaireStagiaireComponent implements OnInit {
  nouveauStagiaire: Stagiaire;
  stagiaires: Stagiaire[];
  formationsListe: string[] = ['AEC', 'DEC', 'BAC', 'Autres'];
  constructor(private apiProjetSyntheseService: ApiProjetSyntheseService) {}

  ngOnInit(): void {
    this.nouveauStagiaire = {
      _id: null,
      prenom: '',
      nom: '',
      courriel: '',
      ville: '',
      telephone: '',
      formations: '',
      competences: [],
      dateDebutStage: '',
      messageMotivation: '',
    };
  }

  formulaireTerminer(stagiaireAjoutForm: NgForm) {
    this.apiProjetSyntheseService
      .ajoutStagiaire(this.nouveauStagiaire)
      .subscribe((nouveauStagiaire) => {
        stagiaireAjoutForm.resetForm();
        this.nouveauStagiaire._id = null;
      });
  }
}
