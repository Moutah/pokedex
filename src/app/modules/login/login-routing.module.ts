import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@modules/login/components/login-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoginRoutingModule {}
