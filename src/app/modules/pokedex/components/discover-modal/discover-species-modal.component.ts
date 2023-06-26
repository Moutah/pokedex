import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DiscoverSpecies } from '@modules/pokedex/state/species/species.actions';
import { Store } from '@ngxs/store';
import { take, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    A11yModule,
  ],
  selector: 'app-discover-species-modal',
  templateUrl: 'discover-species-modal.component.html',
  styleUrls: ['discover-species-modal.component.scss'],
})
export class DiscoverSpeciesModalComponent {
  store = inject(Store);
  dialogRef = inject(MatDialogRef<DiscoverSpeciesModalComponent>);

  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;

  file?: File;
  srcResult = '';
  isLoading = false;

  onFileSelected(event: Event) {
    this.file = (event.target as HTMLInputElement)?.files?.[0];

    if (!this.file) {
      return;
    }

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.srcResult = reader.result as string;
    };
    reader.readAsDataURL(this.file);
  }

  sendPhoto() {
    if (!this.file) {
      return;
    }

    this.isLoading = true;
    this.store
      .dispatch(new DiscoverSpecies(this.file))
      .pipe(take(1))
      .subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close();
      });
  }
}
