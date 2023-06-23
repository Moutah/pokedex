import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from '@modules/profile/components/profile-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {}
