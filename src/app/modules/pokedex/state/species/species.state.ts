import { inject, Injectable } from '@angular/core';
import { SpeciesService } from '@modules/pokedex/services/species.service';
import { GetSpeciesList } from '@modules/pokedex/state/species/species.actions';
import { SpeciesStateModel } from '@modules/pokedex/state/species/species.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, of, tap } from 'rxjs';

@State<SpeciesStateModel>({
  name: 'species',
  defaults: {
    status: 'idle',
    species: [],
  },
})
@Injectable()
export class SpeciesState {
  speciesService = inject(SpeciesService);

  @Selector()
  static species(state: SpeciesStateModel) {
    return state.species;
  }

  @Action(GetSpeciesList)
  getSpeciesList(ctx: StateContext<SpeciesStateModel>) {
    ctx.patchState({ status: 'loading' });

    return this.speciesService.getList().pipe(
      tap((species) => ctx.patchState({ species })),
      catchError(() => {
        ctx.patchState({ status: 'failed' });
        return of();
      })
    );
  }
}
