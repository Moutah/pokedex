import { inject, Injectable } from '@angular/core';
import { SpeciesService } from '@modules/pokedex/services/species.service';
import {
  DiscoverSpecies,
  GetSpecies,
  GetSpeciesList,
} from '@modules/pokedex/state/species/species.actions';
import { SpeciesStateModel } from '@modules/pokedex/state/species/species.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, of, tap } from 'rxjs';

@State<SpeciesStateModel>({
  name: 'species',
  defaults: {
    status: 'idle',
    speciesList: [],
    species: {},
  },
})
@Injectable()
export class SpeciesState {
  speciesService = inject(SpeciesService);

  @Selector()
  static speciesList(state: SpeciesStateModel) {
    return state.speciesList;
  }

  @Selector()
  static species(state: SpeciesStateModel) {
    return (id: number) => state.species[id] || {};
  }

  @Selector()
  static status(state: SpeciesStateModel) {
    return state.status;
  }

  @Action(GetSpeciesList)
  getSpeciesList(ctx: StateContext<SpeciesStateModel>, { search }: GetSpeciesList) {
    ctx.patchState({ status: 'loading' });

    return this.speciesService.getList(search).pipe(
      tap((species) => ctx.patchState({ status: 'idle', speciesList: species })),
      catchError(() => {
        ctx.patchState({ status: 'failed' });
        return of();
      })
    );
  }

  @Action(DiscoverSpecies)
  discoverSpecies(ctx: StateContext<SpeciesStateModel>, { file }: DiscoverSpecies) {
    return this.speciesService.identify(file).pipe(
      tap((newSpecies) => {
        const state = ctx.getState();

        ctx.patchState({
          speciesList: state.speciesList.map((species) =>
            species.id === newSpecies.id ? newSpecies : species
          ),
        });
      }),
      catchError(() => {
        return of();
      })
    );
  }

  @Action(GetSpecies)
  getSpecies(ctx: StateContext<SpeciesStateModel>, { id }: GetSpecies) {
    ctx.patchState({ status: 'loading' });

    return this.speciesService.get(id).pipe(
      tap((species) => {
        const state = ctx.getState();

        ctx.patchState({
          status: 'idle',
          species: {
            ...state.species,
            [id]: species,
          },
        });
      }),
      catchError(() => {
        ctx.patchState({ status: 'failed' });
        return of();
      })
    );
  }
}
