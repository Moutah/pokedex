import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TrainerLogout, TrainerReset, TrainerState } from '@core/state/trainer';
import { Store } from '@ngxs/store';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AsyncPipe,
    NgIf,
  ],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  store = inject(Store);

  trainer$ = this.store.select(TrainerState.trainer);

  logout() {
    this.store.dispatch(new TrainerLogout());
  }

  reset() {
    this.store.dispatch(new TrainerReset());
  }
}
