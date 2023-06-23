import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@shared/data';

@Injectable()
export class TrainerService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  getMe() {
    return this.http.get(`${this.apiUrl}/me`);
  }
}
