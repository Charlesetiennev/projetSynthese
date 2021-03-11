import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrouvezStageComponent } from './trouvez-stage/trouvez-stage.component';
import { TrouvezStagiaireComponent } from './trouvez-stagiaire/trouvez-stagiaire.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { fromEventPattern } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'trouvezStage', component: TrouvezStageComponent },
  { path: 'trouvezStagiaire', component: TrouvezStagiaireComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'a-propos', component: AProposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
