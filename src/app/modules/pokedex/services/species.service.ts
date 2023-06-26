import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment';
import { Species } from '@modules/pokedex/state/species/species.model';

@Injectable()
export class SpeciesService {
  private readonly http = inject(HttpClient);

  getList() {
    return this.http.get<Species[]>(`${environment.apiUrl}/species`);
  }
}
