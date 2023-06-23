import { NgModule } from '@angular/core';
import { ProfilePageComponent } from '@modules/profile/components/profile-page';
import { ProfileRoutingModule } from '@modules/profile/profile-routing.module';

@NgModule({
  imports: [ProfilePageComponent, ProfileRoutingModule],
})
export class ProfileModule {}
