import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stagiaire } from './stagiaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiProjetSyntheseService {
  stagiairesUrl = 'https://dbprojetsynthere.herokuapp.com/api/stagiaires';
  constructor(private http: HttpClient) {}
  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.stagiairesUrl);
  }
}
