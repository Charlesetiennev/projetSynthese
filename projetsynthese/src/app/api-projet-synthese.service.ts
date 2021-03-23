import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stagiaire } from './stagiaire';
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
  stagiairesUrl = 'https://dbprojetsynthere.herokuapp.com/api/stagiaires/';
  entreprisesUrl = 'https://dbprojetsynthere.herokuapp.com/api/entreprises/';
  constructor(private http: HttpClient) {}
  // Recuperation Entreprises
  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entreprisesUrl);
  }
  // Recuperation Stagiaires
  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.stagiairesUrl);
  }
  // Ajout Stagiaire
  ajoutStagiaire(nouveauStagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.post<Stagiaire>(
      this.stagiairesUrl,
      nouveauStagiaire,
      httpOptions
    );
  }
  // Ajout Entreprise
  ajoutEntreprise(nouvelleEntreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(
      this.entreprisesUrl,
      nouvelleEntreprise,
      httpOptions
    );
  }
}
