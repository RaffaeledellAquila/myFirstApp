import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./page/about-component/about-component.component";
import { HomeComponent } from "./page/home-component/home-component.component";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    AboutComponent, 
    HomeComponent, 
    HeaderComponent, 
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
