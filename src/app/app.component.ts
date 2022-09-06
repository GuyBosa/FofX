import { Component } from '@angular/core';

import { DATA } from './data';
import { Stock } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly stock: Stock[] = DATA;

  doSomething(stock: Stock) {
    console.log('Selected stock: ', stock);
  }
}
