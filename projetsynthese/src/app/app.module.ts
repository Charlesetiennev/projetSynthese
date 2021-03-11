import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { TrouvezStageComponent } from './trouvez-stage/trouvez-stage.component';
import { TrouvezStagiaireComponent } from './trouvez-stagiaire/trouvez-stagiaire.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MiniOffreStageComponent } from './mini-offre-stage/mini-offre-stage.component';
import { PourquoiPublierStageComponent } from './pourquoi-publier-stage/pourquoi-publier-stage.component';
import { MiniStagiaireCarteComponent } from './mini-stagiaire-carte/mini-stagiaire-carte.component';
import { SectionTrouvezStageComponent } from './section-trouvez-stage/section-trouvez-stage.component';
import { OffreStageMoyenneComponent } from './offre-stage-moyenne/offre-stage-moyenne.component';
import { TableauSecteursActiviteComponent } from './tableau-secteurs-activite/tableau-secteurs-activite.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { OffreStageCompletComponent } from './offre-stage-complet/offre-stage-complet.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AnnonceLoremComponent } from './annonce-lorem/annonce-lorem.component';
import { StagiaireMoyenComponent } from './stagiaire-moyen/stagiaire-moyen.component';

@NgModule({
  declarations: [
    AppComponent,
    PiedDePageComponent,
    NavigationComponent,
    TrouvezStageComponent,
    TrouvezStagiaireComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent,
    MiniOffreStageComponent,
    PourquoiPublierStageComponent,
    MiniStagiaireCarteComponent,
    SectionTrouvezStageComponent,
    OffreStageMoyenneComponent,
    TableauSecteursActiviteComponent,
    AnnonceComponent,
    OffreStageCompletComponent,
    AProposComponent,
    AnnonceLoremComponent,
    StagiaireMoyenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
