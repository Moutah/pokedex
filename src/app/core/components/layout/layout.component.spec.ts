import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { AuthService } from '@core/services/auth.service';
import { TrainerService } from '@core/services/trainer.service';
import { TrainerState } from '@core/state/trainer';
import { NgxsModule } from '@ngxs/store';

describe('LayoutComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        LayoutComponent,
        NgxsModule.forRoot([TrainerState]),
      ],
      providers: [TrainerService, AuthService],
    })
  );

  it('should mount', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const layoutComponent = fixture.componentInstance;
    expect(layoutComponent).toBeTruthy();
  });

  it.todo('logout using trainer state');
});
