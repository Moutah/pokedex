import { NgModule } from '@angular/core';
import { SpeciesListPageComponent } from '@modules/pokedex/components/species-list-page';
import { PokedexRoutingModule } from '@modules/pokedex/pokedex-routing.module';

@NgModule({
  imports: [SpeciesListPageComponent, PokedexRoutingModule],
})
export class PokedexModule {}
