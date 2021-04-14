// app.module.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// accueil
import { AppComponent } from './app.component';
// public
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
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
import { AProposComponent } from './pagesRouter/a-propos/a-propos.component';
import { AnnonceLoremComponent } from './annonces/annonce-lorem/annonce-lorem.component';
import { ConnexionInscriptionComponent } from './pagesRouter/connexion-inscription/connexion-inscription.component';
import { TrouvezUnStageComponent } from './sectionLiens/trouvez-un-stage/trouvez-un-stage.component';
import { SectionTrouvezStagiairesComponent } from './sectionLiens/section-trouvez-stagiaires/section-trouvez-stagiaires.component';
import { CarteStagiaireMoyenComponent } from './carteStagiaires/carte-stagiaire-moyen/carte-stagiaire-moyen.component';
import { RechercheEnteteComponent } from './recherche-entete/recherche-entete.component';
import { FormulaireStagiaireComponent } from './formulaires/formulaire-stagiaire/formulaire-stagiaire.component';
import { FormulaireEntrepriseComponent } from './formulaires/formulaire-entreprise/formulaire-entreprise.component';
import { ConnexionStagiaireComponent } from './formulaires/connexion-stagiaire/connexion-stagiaire.component';
import { ConnexionEntrepriseComponent } from './formulaires/connexion-entreprise/connexion-entreprise.component';
import { OffreStageCompleteComponent } from './pagesRouter/offre-stage-complete/offre-stage-complete.component';
// administration
import { NavigationAdminComponent } from './administration/navigation-admin/navigation-admin.component';
import { AccueilAdminComponent } from './administration/accueil-admin/accueil-admin.component';
import { DemandeStageAdminComponent } from './administration/demande-stage-admin/demande-stage-admin.component';
import { EntrepriseAdminComponent } from './administration/entreprise-admin/entreprise-admin.component';
import { AttenteDemandeStageComponent } from './administration/cartes/attente-demande-stage/attente-demande-stage.component';
import { AttenteOffreStageComponent } from './administration/cartes/attente-offre-stage/attente-offre-stage.component';
import { DemandeStageDetailComponent } from './administration/cartes/demande-stage-detail/demande-stage-detail.component';
import { ActionHautAdminComponent } from './administration/action-haut-admin/action-haut-admin.component';
import { OffreStageDetailComponent } from './administration/cartes/offre-stage-detail/offre-stage-detail.component';
import { FicheCandidatAdminComponent } from './administration/fiche-candidat-admin/fiche-candidat-admin.component';
import { ListeCandidatsAdminComponent } from './administration/liste-candidats-admin/liste-candidats-admin.component';
import { PetiteCarteStagiairesAdminComponent } from './administration/cartes/petite-carte-stagiaires-admin/petite-carte-stagiaires-admin.component';
import { FormulaireOffreStageAdminComponent } from './administration/formulaires/formulaire-offre-stage-admin/formulaire-offre-stage-admin.component';
import { FormulaireDemandeStageAdmninistrationComponent } from './administration/formulaires/formulaire-demande-stage-admninistration/formulaire-demande-stage-admninistration.component';
import { DemandeStageCompletComponent } from './pagesRouter/demande-stage-complet/demande-stage-complet.component';
import { ListeEntreprisesComponent } from './administration/liste-entreprises/liste-entreprises.component';
import { PetiteCarteEntreprisesAdminComponent } from './administration/cartes/petite-carte-entreprises-admin/petite-carte-entreprises-admin.component';
// MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
// HTTP CLIENT
import { HttpClientModule } from '@angular/common/http';
import { ApiProjetSyntheseService } from './api-projet-synthese.service';
// Pipes
import { OffreStageAccepterPipe } from './pipes/offre-stage-accepter.pipe';
import { DemandeStageAccepterPipe } from './pipes/demande-stage-accepter.pipe';
import { StagiaireAccepterPipe } from './pipes/stagiaire-accepter.pipe';
import { EntrepriseAccepterPipe } from './pipes/entreprise-accepter.pipe';
import { OffresStageEntreprisePipe } from './pipes/offres-stage-entreprise.pipe';
// Français
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

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
    AProposComponent,
    AnnonceLoremComponent,
    ConnexionInscriptionComponent,
    TrouvezUnStageComponent,
    SectionTrouvezStagiairesComponent,
    CarteStagiaireMoyenComponent,
    RechercheEnteteComponent,
    FormulaireStagiaireComponent,
    FormulaireEntrepriseComponent,
    NavigationAdminComponent,
    AccueilAdminComponent,
    DemandeStageAdminComponent,
    EntrepriseAdminComponent,
    AttenteDemandeStageComponent,
    AttenteOffreStageComponent,
    DemandeStageDetailComponent,
    ActionHautAdminComponent,
    OffreStageDetailComponent,
    ConnexionStagiaireComponent,
    ConnexionEntrepriseComponent,
    FicheCandidatAdminComponent,
    ListeCandidatsAdminComponent,
    PetiteCarteStagiairesAdminComponent,
    FormulaireOffreStageAdminComponent,
    OffreStageCompleteComponent,
    FormulaireDemandeStageAdmninistrationComponent,
    DemandeStageCompletComponent,
    OffreStageAccepterPipe,
    DemandeStageAccepterPipe,
    OffresStageEntreprisePipe,
    StagiaireAccepterPipe,
    ListeEntreprisesComponent,
    PetiteCarteEntreprisesAdminComponent,
    EntrepriseAccepterPipe,
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    ApiProjetSyntheseService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
