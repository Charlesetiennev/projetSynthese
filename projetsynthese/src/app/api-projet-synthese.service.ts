import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecteursActivites } from './secteurs-activites';
import { Stagiaire } from './stagiaire';
import { OffreStage } from './offre-stage';
import { DemandeStage } from './demande-stage';
import { Observable } from 'rxjs';
import { Entreprise } from './entreprise';
import { ThisReceiver } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiProjetSyntheseService {
  secteursActivitesUrl =
    'https://dbprojetsynthere.herokuapp.com/api/secteursActivites/';
  stagiairesUrl = 'https://dbprojetsynthere.herokuapp.com/api/stagiaires/';
  entreprisesUrl = 'https://dbprojetsynthere.herokuapp.com/api/entreprises/';
  offresStagesUrl = 'https://dbprojetsynthere.herokuapp.com/api/offresstages/';
  demandesStagesUrl =
    'https://dbprojetsynthere.herokuapp.com/api/demandesStages/';

  constructor(private http: HttpClient) {}
  // ******************
  // SECTEURS ACTIVITES
  // ******************
  recuperationSecteursActivites(): Observable<SecteursActivites[]> {
    return this.http.get<SecteursActivites[]>(this.secteursActivitesUrl);
  }
  // **********
  // STAGIAIRES
  // **********
  // Recuperation Stagiaires
  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.stagiairesUrl);
  }
  // Recuperation Stagiaire par ID
  getStagiaireavecId(_id: string | null): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(this.stagiairesUrl + _id, httpOptions);
  }
  // Ajout Stagiaire
  ajoutStagiaire(nouveauStagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.post<Stagiaire>(
      this.stagiairesUrl,
      nouveauStagiaire,
      httpOptions
    );
  }
  // Modification Stagiaire
  majStagiaire(stagiaire: any): Observable<any> {
    const id = stagiaire._id;
    return this.http.put<Stagiaire>(
      this.stagiairesUrl + id,
      stagiaire,
      httpOptions
    );
  }
  // Suppression Stagiaire
  suppressionStagiaire(id: string | null): Observable<Stagiaire> {
    return this.http.delete<Stagiaire>(this.stagiairesUrl + id, httpOptions);
  }
  // **********
  // ENTREPRISES
  // **********
  // Recuperation Entreprises
  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entreprisesUrl);
  }
  // Ajout Entreprise
  ajoutEntreprise(nouvelleEntreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(
      this.entreprisesUrl,
      nouvelleEntreprise,
      httpOptions
    );
  }
  // ****************
  // OFFRES DE STAGES
  // ****************
  // Recuperation Offres de stages
  recuperationOffresStages(): Observable<OffreStage[]> {
    return this.http.get<OffreStage[]>(this.offresStagesUrl);
  }
  // Recuperation Offre de stage par ID
  recuperationOffreStagesId(_id: string | null): Observable<OffreStage> {
    return this.http.get<OffreStage>(this.offresStagesUrl + _id, httpOptions);
  }
  // Ajout Offre de stage
  ajoutOffreDeStage(nouvelleOffreStage: OffreStage): Observable<OffreStage> {
    return this.http.post<OffreStage>(
      this.offresStagesUrl,
      nouvelleOffreStage,
      httpOptions
    );
  }
  // ****************
  // DEMANDES DE STAGES
  // ****************
  // Recuperation Demandes se stages
  recuperationDemandesStages(): Observable<DemandeStage[]> {
    return this.http.get<DemandeStage[]>(this.demandesStagesUrl);
  }
  // Ajout Demande de stage
  ajoutDemandeDeStage(
    nouvelleDemandeStage: DemandeStage
  ): Observable<OffreStage> {
    return this.http.post<OffreStage>(
      this.demandesStagesUrl,
      nouvelleDemandeStage,
      httpOptions
    );
  }
  // Recuperation Demande de stage par ID
  recuperationDemandeStagesId(_id: string | null): Observable<DemandeStage> {
    return this.http.get<DemandeStage>(
      this.demandesStagesUrl + _id,
      httpOptions
    );
  }
  //
}
