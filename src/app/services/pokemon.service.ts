import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/random`);
  }

  guessPokemon(id: number, guessedName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/pokemon/guess`, { id, guessedName });
  }
}
