import { Component, inject, OnInit } from '@angular/core';
import { GetSpeciesList } from '@modules/pokedex/state/species/species.actions';
import { Store } from '@ngxs/store';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-species-list-page',
  template: 'app-species-list-page',
  styles: [],
})
export class SpeciesListPageComponent implements OnInit {
  store = inject(Store);

  ngOnInit() {
    console.log('%cspecies-list-page.component.ts line:16%c wat', 'color: #007acc;');
    this.store.dispatch(new GetSpeciesList());
  }
}
