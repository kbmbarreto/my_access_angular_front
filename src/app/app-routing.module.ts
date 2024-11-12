import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },  // Mostra a tela de login na rota raiz
  { path: 'home', component: HomeComponent }  // Mostra a tela inicial na rota /home
];
