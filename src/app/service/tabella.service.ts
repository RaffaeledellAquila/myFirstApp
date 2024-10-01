import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Persona } from '../models/persona.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabellaService {

  // private dataUrl = 'assets/data.json';  // Percorso al file JSON


  private persone: Persona[] = [
    // dati mock 
    { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 30 },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', eta: 25 },
    //anche cosi
    { "id": 3, "nome": "Peach", "cognome": "Toadetta", "eta": 28 },
    {"id": 4, "nome": "Daisy", "cognome": "Daisy", "eta": 22},
    {"id": 5, "nome": "Bowser", "cognome": "Koopa", "eta": 35},
    {"id": 6, "nome": "Toad", "cognome": "Toad", "eta": 31},
    {"id": 7, "nome": "Yoshi", "cognome": "Yoshi", "eta": 33}

    // altri dati ...
  ];


  
  constructor() {}

  getPersone(): Observable<Persona[]> {
    return of(this.persone);
  }

  //constructor(private http: HttpClient) {}


  // getPersone(): Observable<Persona[]> {
  //   return this.http.get<Persona[]>(this.dataUrl); 
  // }
}