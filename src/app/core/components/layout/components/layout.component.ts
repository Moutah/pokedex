import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TrainerLogout, TrainerState } from '@core/state/trainer';
import { Store } from '@ngxs/store';
import { distinctUntilChanged, map } from 'rxjs';

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

  isConnected$ = this.store.select(TrainerState.status).pipe(
    map((status) => status === 'connected'),
    distinctUntilChanged()
  );

  logout() {
    this.store.dispatch(new TrainerLogout());
  }
}
