import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  userFullName: string;

  constructor(@Inject(OKTA_AUTH) private oktaAuthService: OktaAuth) {}

  ngOnInit(): void {
    //subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe((result) => {
      this.isAuthenticated = result;
      this.getUserDetails();
    });
  }
  getUserDetails() {
    if (this.isAuthenticated) {
      //fetch the logged in user details

      //user full name is exposed as a property name
      this.oktaAuthService.getUser().then((res) => {
        this.userFullName = res.name;
      });
    }
  }

  logout() {
    //terminates the session with Okta and removes current tokens
    this.oktaAuthService.signOut();
  }
}
