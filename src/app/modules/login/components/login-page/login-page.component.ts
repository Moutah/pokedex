import { NgIf } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { TrainerLogin } from '@core/state/trainer';
import { TrainerState } from '@core/state/trainer';
import { Store } from '@ngxs/store';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
  ],
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  store = inject(Store);
  router = inject(Router);

  tokenControl = new FormControl('', Validators.required);
  isDisplayToken = false;
  isInvalidToken = false;

  private hasSubmitted = false;

  private readonly trainerStatusSubscription = this.store
    .select(TrainerState.status)
    .subscribe((status) => {
      if (status === 'connected') {
        void this.router.navigate(['pokedex', 'list']);
        return;
      }

      if (status === 'disconnected' && this.hasSubmitted) {
        this.isInvalidToken = true;
      }
    });

  ngOnDestroy() {
    this.trainerStatusSubscription.unsubscribe();
  }

  onSubmit() {
    if (!this.tokenControl.value) {
      return;
    }

    this.hasSubmitted = true;
    this.store.dispatch(new TrainerLogin(this.tokenControl.value));
  }
}
