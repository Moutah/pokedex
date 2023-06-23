import { NgModule } from '@angular/core';
import { LoginPageComponent } from '@modules/login/components/login-page';
import { LoginRoutingModule } from '@modules/login/login-routing.module';

@NgModule({
  imports: [LoginPageComponent, LoginRoutingModule],
})
export class LoginModule {}
