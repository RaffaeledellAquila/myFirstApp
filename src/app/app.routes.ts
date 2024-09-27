import { Routes } from '@angular/router';
import { HomeComponent } from './page/home-component/home-component.component';
import { AboutComponent } from './page/about-component/about-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
