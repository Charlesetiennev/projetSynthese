import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { TrouvezStageComponent } from './pagesRouter/trouvez-stage/trouvez-stage.component';
import { TrouvezStagiaireComponent } from './pagesRouter/trouvez-stagiaire/trouvez-stagiaire.component';
import { AccueilComponent } from './pagesRouter/accueil/accueil.component';
import { MiniOffreStageComponent } from './carteStage/mini-offre-stage/mini-offre-stage.component';
import { PourquoiPublierStageComponent } from './sectionLiens/pourquoi-publier-stage/pourquoi-publier-stage.component';
import { MiniStagiaireCarteComponent } from './carteStagiaires/mini-stagiaire-carte/mini-stagiaire-carte.component';
import { SectionTrouvezStageComponent } from './sectionLiens/section-trouvez-stage/section-trouvez-stage.component';
import { OffreStageMoyenneComponent } from './carteStage/offre-stage-moyenne/offre-stage-moyenne.component';
import { TableauSecteursActiviteComponent } from './tableau-secteurs-activite/tableau-secteurs-activite.component';
import { AnnonceComponent } from './annonces/annonce/annonce.component';
import { OffreStageCompletComponent } from './carteStage/offre-stage-complet/offre-stage-complet.component';
import { AProposComponent } from './pagesRouter/a-propos/a-propos.component';
import { AnnonceLoremComponent } from './annonces/annonce-lorem/annonce-lorem.component';
import { ConnexionInscriptionComponent } from './pagesRouter/connexion-inscription/connexion-inscription.component';
import { FuturStagiaireComponent } from './futur-stagiaire/futur-stagiaire.component';
import { TrouvezUnStageComponent } from './sectionLiens/trouvez-un-stage/trouvez-un-stage.component';
import { SectionTrouvezStagiairesComponent } from './sectionLiens/section-trouvez-stagiaires/section-trouvez-stagiaires.component';
import { CarteStagiaireMoyenComponent } from './carteStagiaires/carte-stagiaire-moyen/carte-stagiaire-moyen.component';
import { RechercheEnteteComponent } from './recherche-entete/recherche-entete.component';

@NgModule({
  declarations: [
    AppComponent,
    PiedDePageComponent,
    NavigationComponent,
    TrouvezStageComponent,
    TrouvezStagiaireComponent,
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
    ConnexionInscriptionComponent,
    FuturStagiaireComponent,
    TrouvezUnStageComponent,
    SectionTrouvezStagiairesComponent,
    CarteStagiaireMoyenComponent,
    RechercheEnteteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
