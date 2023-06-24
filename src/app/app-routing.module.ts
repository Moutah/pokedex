import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@modules/login/components/login-page/login-page.component';
import { LoginModule } from '@modules/login/login.module';
import { SpeciesListPageComponent } from '@modules/pokedex/components/species-list-page/species-list-page.component';
import { PokedexModule } from '@modules/pokedex/pokedex.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'species',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'species',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: SpeciesListPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, PokedexModule],
})
export class AppRoutingModule {}
