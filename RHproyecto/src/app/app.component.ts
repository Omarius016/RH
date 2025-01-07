import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: '<app-login></app-login>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RHproyecto';
}
