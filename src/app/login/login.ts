import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  private readonly router = inject(Router);
  email = '';
  password = '';
  rememberMe = false;

  onSubmit() {
    console.log('Login submitted', { email: this.email, rememberMe: this.rememberMe });
    this.router.navigate(['/dashboard']);
  }
}
