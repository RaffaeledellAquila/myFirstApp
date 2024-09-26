import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponentComponent } from "./component/about-component/about-component.component";
import { HomeComponentComponent } from "./component/home-component/home-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponentComponent, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
