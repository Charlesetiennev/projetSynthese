import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrouvezStageComponent } from './pagesRouter/trouvez-stage/trouvez-stage.component';
import { TrouvezStagiaireComponent } from './pagesRouter/trouvez-stagiaire/trouvez-stagiaire.component';
import { AccueilComponent } from './pagesRouter/accueil/accueil.component';
import { AProposComponent } from './pagesRouter/a-propos/a-propos.component';
import { ConnexionInscriptionComponent } from './pagesRouter/connexion-inscription/connexion-inscription.component';
import { AccueilAdminComponent } from './administration/accueil-admin/accueil-admin.component';
import { OffreStageAdminComponent } from './administration/offre-stage-admin/offre-stage-admin.component';
import { FicheCandidatAdminComponent } from './administration/fiche-candidat-admin/fiche-candidat-admin.component';
import { ListeCandidatsAdminComponent } from './administration/liste-candidats-admin/liste-candidats-admin.component';
import { FormulaireOffreStageAdminComponent } from './administration/formulaires/formulaire-offre-stage-admin/formulaire-offre-stage-admin.component';

import { OffreStageCompleteComponent } from './pagesRouter/offre-stage-complete/offre-stage-complete.component';
import { DemandeStageCompletComponent } from './pagesRouter/demande-stage-complet/demande-stage-complet.component';
import { DemandeStageAdminComponent } from './administration/demande-stage-admin/demande-stage-admin.component';
import { FormulaireDemandeStageAdmninistrationComponent } from './administration/formulaires/formulaire-demande-stage-admninistration/formulaire-demande-stage-admninistration.component';
import { fromEventPattern } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'trouvezStage', component: TrouvezStageComponent },
  { path: 'offreStageComplet/:id', component: OffreStageCompleteComponent },
  { path: 'demandeStageComplet/:id', component: DemandeStageCompletComponent },
  { path: 'trouvezStagiaire', component: TrouvezStagiaireComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'connexion-insription', component: ConnexionInscriptionComponent },
  // Page Administration
  { path: 'administration/accueil', component: AccueilAdminComponent },
  { path: 'administration/offreStage', component: OffreStageAdminComponent },
  {
    path: 'administration/listeCandidats',
    component: ListeCandidatsAdminComponent,
  },
  {
    path: 'administration/ficheCandidat/:id',
    component: FicheCandidatAdminComponent,
  },
  {
    path: 'administration/offreStageFormulaire',
    component: FormulaireOffreStageAdminComponent,
  },

  {
    path: 'administration/demandeStageFormulaire',
    component: FormulaireDemandeStageAdmninistrationComponent,
  },
  {
    path: 'administration/demandeStage',
    component: DemandeStageAdminComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
