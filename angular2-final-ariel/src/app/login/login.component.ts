import { AuthenticationService } from '../services/authentication.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  @Input() private username: string;
  @Input() private password: string;

  ngOnInit() { }

  login() {
    this.authenticationService.login(this.username, this.password);
  }

}
