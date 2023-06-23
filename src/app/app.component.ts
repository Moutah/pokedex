import { Component, inject, OnInit } from '@angular/core';
import { TrainerService } from '@shared/data/trainer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  trainerService = inject(TrainerService);

  ngOnInit() {
    this.trainerService.getMe().subscribe((data) => {
      console.log('%capp.component.ts line:29%c data', 'color: #007acc;', 'color: #67c2ff;', data);
    });
  }
}
