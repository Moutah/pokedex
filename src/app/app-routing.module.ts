import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokedex',
  },
  {
    path: 'pokedex',
    loadChildren: () => import('@modules/pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('@modules/profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
