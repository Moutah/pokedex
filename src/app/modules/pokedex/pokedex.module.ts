import { NgModule } from '@angular/core';
import { SpeciesListPageComponent } from '@modules/pokedex/components/species-list-page/species-list-page.component';
import { SpeciesService } from '@modules/pokedex/services/species.service';
import { SpeciesState } from '@modules/pokedex/state/species/species.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [SpeciesListPageComponent, NgxsModule.forFeature([SpeciesState])],
  providers: [SpeciesService],
})
export class PokedexModule {}
