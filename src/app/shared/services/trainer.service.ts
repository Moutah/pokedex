import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { hydrateTrainer, TrainerJSON } from '@core/state/trainer';
import { API_URL } from '@shared/data';
import { map } from 'rxjs';

@Injectable()
export class TrainerService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  getMe() {
    return this.http
      .get<TrainerJSON>(`${this.apiUrl}/me`)
      .pipe(map((trainerJson) => hydrateTrainer(trainerJson)));
  }
}
