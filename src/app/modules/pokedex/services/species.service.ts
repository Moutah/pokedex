import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { unwrapData } from '@core/http/unwrap-data';
import { environment } from '@environment';
import { Species, SpeciesAbstract } from '@modules/pokedex/state/species/species.model';
import { map } from 'rxjs';

@Injectable()
export class SpeciesService {
  private readonly http = inject(HttpClient);

  getList(search?: string) {
    const url = new URL(`${environment.apiUrl}/species`, window.origin);

    if (search) {
      url.searchParams.set('search', search);
    }

    return this.http.get<SpeciesAbstract[]>(url.toString()).pipe(map(unwrapData));
  }

  get(id: number) {
    return this.http.get<Species>(`${environment.apiUrl}/species/${id}`).pipe(map(unwrapData));
  }

  identify(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http
      .post<SpeciesAbstract>(`${environment.apiUrl}/species/identify`, formData)
      .pipe(map(unwrapData));
  }
}
