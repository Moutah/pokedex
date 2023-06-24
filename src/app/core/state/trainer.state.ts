import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthService, TrainerService } from '@shared/services';
import { tap } from 'rxjs';

import { TrainerLogin, TrainerLogout } from './trainer.actions';
import { TrainerStateModel } from './trainer.model';

@State<TrainerStateModel>({
  name: 'trainer',
  defaults: {
    status: 'connecting',
    trainer: void 0,
  },
})
@Injectable()
export class TrainerState {
  trainerService = inject(TrainerService);
  authService = inject(AuthService);
  router = inject(Router);

  @Action(TrainerLogin)
  loginTrainer(ctx: StateContext<TrainerStateModel>, { token }: TrainerLogin) {
    ctx.patchState({ status: 'connecting' });

    this.authService.login(token);
    return this.trainerService
      .getMe()
      .pipe(tap((trainer) => ctx.patchState({ status: 'connected', trainer })));
  }

  @Action(TrainerLogout)
  trainerLogout(ctx: StateContext<TrainerStateModel>) {
    ctx.patchState({ status: 'disconnected', trainer: void 0 });

    this.authService.logout();
    return this.router.navigate(['login']);
  }
}
