import { Component } from '@angular/core';
import { environement } from './environement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  env = environement;
  constructor() {}

  ngOnInit() {}
}
