import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse, SearchResponse } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiBaseURL = "https://api.pokemontcg.io/v2/";
  private apiKey = "d9685b88-0b98-4b0d-b1ab-9f2e7fc30217";

  private options = {
    headers: new HttpHeaders({
      "X-Api-Key": this.apiKey,
    })
  };

  constructor(private http: HttpClient) { }

  search(q: string, pageSize: number = 10): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.apiBaseURL}cards?pageSize=${pageSize}`, this.options)
  }

  getById(id: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.apiBaseURL + "cards/" + id, this.options)
  }
}
