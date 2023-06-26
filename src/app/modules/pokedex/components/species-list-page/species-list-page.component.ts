import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GetSpeciesList } from '@modules/pokedex/state/species/species.actions';
import { SpeciesState } from '@modules/pokedex/state/species/species.state';
import { Store } from '@ngxs/store';

@Component({
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule],
  selector: 'app-species-list-page',
  templateUrl: 'species-list-page.component.html',
  styleUrls: ['species-list-page.component.scss'],
})
export class SpeciesListPageComponent implements OnInit {
  store = inject(Store);

  speciesList$ = this.store.select(SpeciesState.species);
  speciesStatus$ = this.store.select(SpeciesState.status);

  ngOnInit() {
    this.store.dispatch(new GetSpeciesList());
  }

  openDiscoverModal() {
    console.log(
      '%cspecies-list-page.component.ts %copenDiscoverModal()',
      'color: #007acc;',
      'color: #ff8500;',
      {}
    );
  }
}
