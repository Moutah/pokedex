import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiUrlProvider, AuthInterceptorProvider } from '@shared/data';
import { AuthService, TrainerService } from '@shared/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/components/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [ApiUrlProvider, AuthInterceptorProvider, AuthService, TrainerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
