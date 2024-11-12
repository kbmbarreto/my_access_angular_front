import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // Lógica de autenticação aqui
    this.router.navigate(['/home']); // Redireciona para a tela inicial
  }
}
