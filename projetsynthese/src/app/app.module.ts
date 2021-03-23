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
import { FormulaireStagiaireComponent } from './formulaires/formulaire-stagiaire/formulaire-stagiaire.component';
import { FormulaireEntrepriseComponent } from './formulaires/formulaire-entreprise/formulaire-entreprise.component';
import { NavigationAdminComponent } from './administration/navigation-admin/navigation-admin.component';
import { AccueilAdminComponent } from './administration/accueil-admin/accueil-admin.component';
import { OffreStageAdminComponent } from './administration/offre-stage-admin/offre-stage-admin.component';
import { DemandeStageAdminComponent } from './administration/demande-stage-admin/demande-stage-admin.component';
import { CandidatsAdminComponent } from './administration/candidats-admin/candidats-admin.component';
import { EntrepriseAdminComponent } from './administration/entreprise-admin/entreprise-admin.component';
import { AttenteDemandeStageComponent } from './administration/cartes/attente-demande-stage/attente-demande-stage.component';
import { AttenteOffreStageComponent } from './administration/cartes/attente-offre-stage/attente-offre-stage.component';
import { DemandeStageDetailComponent } from './administration/cartes/demande-stage-detail/demande-stage-detail.component';
import { ActionHautAdminComponent } from './administration/action-haut-admin/action-haut-admin.component';
import { OffreStageDetailComponent } from './administration/cartes/offre-stage-detail/offre-stage-detail.component';
// MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
// HTTP CLIENT
import { HttpClientModule } from '@angular/common/http';
import { ApiProjetSyntheseService } from './api-projet-synthese.service';
import { ConnexionStagiaireComponent } from './formulaires/connexion-stagiaire/connexion-stagiaire.component';
import { ConnexionEntrepriseComponent } from './formulaires/connexion-entreprise/connexion-entreprise.component';
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
    FormulaireStagiaireComponent,
    FormulaireEntrepriseComponent,
    NavigationAdminComponent,
    AccueilAdminComponent,
    OffreStageAdminComponent,
    DemandeStageAdminComponent,
    CandidatsAdminComponent,
    EntrepriseAdminComponent,
    AttenteDemandeStageComponent,
    AttenteOffreStageComponent,
    DemandeStageDetailComponent,
    ActionHautAdminComponent,
    OffreStageDetailComponent,
    ConnexionStagiaireComponent,
    ConnexionEntrepriseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    TextFieldModule,
  ],
  providers: [ApiProjetSyntheseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
