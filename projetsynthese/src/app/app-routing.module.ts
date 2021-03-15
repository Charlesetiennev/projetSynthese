import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrouvezStageComponent } from './pagesRouter/trouvez-stage/trouvez-stage.component';
import { TrouvezStagiaireComponent } from './pagesRouter/trouvez-stagiaire/trouvez-stagiaire.component';
import { AccueilComponent } from './pagesRouter/accueil/accueil.component';
import { AProposComponent } from './pagesRouter/a-propos/a-propos.component';
import { ConnexionInscriptionComponent } from './pagesRouter/connexion-inscription/connexion-inscription.component';
import { fromEventPattern } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'trouvezStage', component: TrouvezStageComponent },
  { path: 'trouvezStagiaire', component: TrouvezStagiaireComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'connexion-insription', component: ConnexionInscriptionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
