import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  private id = 0;

  constructor(
    private tokenStorage: TokenStorageService,
    private loginService: LoginService,
    private token: TokenStorageService) { }

  ngOnInit() {
    this.id = this.loginService.getId();
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
