import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@core/components/layout';
import { TrainerState } from '@core/state/trainer';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { ApiUrlProvider, AuthInterceptorProvider } from '@shared/data';
import { AuthService, TrainerService } from '@shared/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxsModule.forRoot([TrainerState], {
      developmentMode: isDevMode(),
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    LayoutModule,
  ],
  providers: [ApiUrlProvider, AuthInterceptorProvider, AuthService, TrainerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
