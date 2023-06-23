import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private token?: string;

  login(token: string) {
    this.token = token;
  }

  logout() {
    this.token = undefined;
  }

  getToken() {
    return this.token;
  }
}
