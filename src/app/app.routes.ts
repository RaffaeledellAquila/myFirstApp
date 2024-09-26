import { Routes } from '@angular/router';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { AboutComponentComponent } from './component/about-component/about-component.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponentComponent },
    { path: 'about', component: AboutComponentComponent }
];
