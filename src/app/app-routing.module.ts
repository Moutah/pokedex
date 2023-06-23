import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokedex',
  },
  {
    path: 'login',
    loadChildren: () => import('@modules/login/login.module').then((m) => m.LoginModule),
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
