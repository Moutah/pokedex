import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { DiscoverSpeciesModalComponent } from '@modules/pokedex/components/discover-modal/discover-species-modal.component';
import { GetSpeciesList } from '@modules/pokedex/state/species/species.actions';
import { SpeciesState } from '@modules/pokedex/state/species/species.state';
import { Store } from '@ngxs/store';
import { debounceTime, distinctUntilChanged, filter, map, Subject } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RouterLink,
    MatInputModule,
    FormsModule,
  ],
  selector: 'app-species-list-page',
  templateUrl: 'species-list-page.component.html',
  styleUrls: ['species-list-page.component.scss'],
})
export class SpeciesListPageComponent implements OnInit, OnDestroy {
  store = inject(Store);
  dialog = inject(MatDialog);

  speciesList$ = this.store.select(SpeciesState.speciesList);
  speciesStatus$ = this.store.select(SpeciesState.status);

  searchChanged$ = new Subject<void>();
  search = '';
  searchSubscription = this.searchChanged$
    .pipe(
      debounceTime(400),
      map(() => this.search),
      filter((search) => search?.length >= 3),
      distinctUntilChanged()
    )
    .subscribe((search) => {
      this.store.dispatch(new GetSpeciesList(search));
    });

  ngOnInit() {
    this.store.dispatch(new GetSpeciesList());
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  openDiscoverModal() {
    this.dialog.open(DiscoverSpeciesModalComponent);
  }

  clearSearch() {
    this.search = '';
    this.store.dispatch(new GetSpeciesList());
  }
}
