import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: number[] = [];

  onStartCounter(counter: number) {
    console.log(counter)
    this.numbers.push(counter);
  }
}
