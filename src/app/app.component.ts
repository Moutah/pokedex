import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthService } from '@shared/services';

import { TrainerLogin, TrainerLogout } from './core/state/trainer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  store = inject(Store);
  authService = inject(AuthService);

  ngOnInit() {
    this.restoreLogin();
  }

  private restoreLogin() {
    const token = this.authService.getToken();

    if (!token) {
      this.store.dispatch(new TrainerLogout());
      return;
    }

    this.store.dispatch(new TrainerLogin(token));
  }
}
