import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;

  srcResult = '';

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (!file) {
      return;
    }

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.srcResult = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  sendPhoto() {
    console.log(
      '%cdiscover-species-modal.component.ts %csendPhoto()',
      'color: #007acc;',
      'color: #ff8500;',
      {}
    );
  }
}
