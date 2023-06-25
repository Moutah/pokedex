import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { AuthService } from '@core/services/auth.service';
import { TrainerService } from '@core/services/trainer.service';
import { TrainerLogout, TrainerState } from '@core/state/trainer';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';

describe('LayoutComponent', () => {
  let store: Store;
  let storeDispatchSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        LayoutComponent,
        NgxsModule.forRoot([TrainerState]),
      ],
      providers: [TrainerService, AuthService],
    });

    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      trainer: {
        trainer: {
          id: 1,
          name: 'toto',
          created_at: new Date(),
          updated_at: new Date(),
        },
      },
    });
    storeDispatchSpy = jest.spyOn(store, 'dispatch').mockReturnValue(of());
  });

  it('should mount', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const layoutComponent = fixture.componentInstance;
    expect(layoutComponent).toBeTruthy();
  });

  it('logs out using trainer state', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    fixture.componentInstance.logout();

    const action = new TrainerLogout();
    expect(storeDispatchSpy).toHaveBeenCalledWith(action);
  });
});
