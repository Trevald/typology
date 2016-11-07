import { Component } from '@angular/core';

import { CompositionService } from './composition/composition.service';

@Component({
  providers: [
    CompositionService
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }
}
