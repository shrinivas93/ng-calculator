import { Component } from '@angular/core';
import * as operators from 'poor-math';
import { add } from 'poor-math';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    console.log(operators.add(5, 6));
    console.log(add(4, 5));
  }
}
