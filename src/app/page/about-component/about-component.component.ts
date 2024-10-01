import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabellaComponent } from "../../component/tabella/tabella.component";
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [RouterModule, TabellaComponent, CommonModule, CardComponent, CardComponent],
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.css'
})
export class AboutComponent {

}
