import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DiscoverSpeciesModalComponent } from '@modules/pokedex/components/discover-modal/discover-species-modal.component';
import { GetSpeciesList } from '@modules/pokedex/state/species/species.actions';
import { SpeciesState } from '@modules/pokedex/state/species/species.state';
import { Store } from '@ngxs/store';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  selector: 'app-species-list-page',
  templateUrl: 'species-list-page.component.html',
  styleUrls: ['species-list-page.component.scss'],
})
export class SpeciesListPageComponent implements OnInit {
  store = inject(Store);
  dialog = inject(MatDialog);

  speciesList$ = this.store.select(SpeciesState.speciesList);
  speciesStatus$ = this.store.select(SpeciesState.status);

  ngOnInit() {
    this.store.dispatch(new GetSpeciesList());
  }

  openDiscoverModal() {
    this.dialog.open(DiscoverSpeciesModalComponent);
  }
}
