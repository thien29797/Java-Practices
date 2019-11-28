import { Injectable } from '@angular/core';
import {parse} from 'ts-node';

const ID_KEY = 'ID';
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const PASSWORD_KEY = 'AuthPassword';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getID(): number {
    // tslint:disable-next-line:radix
    return parseInt(sessionStorage.getItem(ID_KEY));
  }

  public getPassword(): string {
    return sessionStorage.getItem(PASSWORD_KEY);
  }

  public savePassword(password: string) {
    window.sessionStorage.removeItem(PASSWORD_KEY);
    window.sessionStorage.setItem(PASSWORD_KEY, password);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
}
