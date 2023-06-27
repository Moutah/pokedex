import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment';
import { Species, SpeciesAbstract } from '@modules/pokedex/state/species/species.model';

@Injectable()
export class SpeciesService {
  private readonly http = inject(HttpClient);

  getList() {
    return this.http.get<SpeciesAbstract[]>(`${environment.apiUrl}/species`);
  }

  get(id: number) {
    return this.http.get<Species>(`${environment.apiUrl}/species/${id}`);
  }

  identify(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<SpeciesAbstract>(`${environment.apiUrl}/species/identify`, formData);
  }

  reset() {
    return this.http.delete(`${environment.apiUrl}/species/reset`);
  }
}
