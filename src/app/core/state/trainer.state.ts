import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthService, TrainerService } from '@shared/services';
import { tap } from 'rxjs';

import { LoginTrainer } from './trainer.actions';
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

  @Action(LoginTrainer)
  loginTrainer(ctx: StateContext<TrainerStateModel>, { token }: LoginTrainer) {
    ctx.patchState({ status: 'connecting' });

    this.authService.login(token);
    return this.trainerService
      .getMe()
      .pipe(tap((trainer) => ctx.patchState({ status: 'connected', trainer })));
  }
}
