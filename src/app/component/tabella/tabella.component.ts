import { Component } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { TabellaService } from '../../service/tabella.service';

import {  NgFor } from '@angular/common';


@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {
  persone: Persona[] = [];

  constructor(private tabellaService: TabellaService) {}

  ngOnInit(): void {
    this.tabellaService.getPersone().subscribe({
      next: (data: Persona[]) => {
        this.persone = data;
      },
      error: (error) => {
        console.error('Errore durante il caricamento dei dati:', error);
      }
    });
  }
}
