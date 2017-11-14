import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService) { }

  isLogged() {
    return localStorage.getItem('currentUser');
  }

  logout() {
    this.authenticationService.logout();
  }
}
