import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DiscoverSpeciesModalComponent } from '@modules/pokedex/components/discover-modal/discover-species-modal.component';
import { GetSpecies } from '@modules/pokedex/state/species/species.actions';
import { SpeciesState } from '@modules/pokedex/state/species/species.state';
import { Store } from '@ngxs/store';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  selector: 'app-species-page',
  templateUrl: 'species-page.component.html',
  styleUrls: ['species-page.component.scss'],
})
export class SpeciesPageComponent {
  @Input()
  get speciesId(): number {
    return this._speciesId;
  }
  set speciesId(speciesId: number) {
    this._speciesId = speciesId;
    this.store.dispatch(new GetSpecies(speciesId));
  }

  private _speciesId!: number;

  store = inject(Store);
  dialog = inject(MatDialog);

  species$ = this.store
    .select(SpeciesState.species)
    .pipe(map((filterFn) => filterFn(this.speciesId)));

  speciesStatus$ = this.store.select(SpeciesState.status);

  openDiscoverModal() {
    this.dialog.open(DiscoverSpeciesModalComponent);
  }
}
