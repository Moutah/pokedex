import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListPageComponent } from '@modules/pokedex/components/species-list-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: SpeciesListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PokedexRoutingModule {}
