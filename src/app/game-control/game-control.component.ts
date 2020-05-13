import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  private control: any;
  public counter = 1;

  @Output() counterStart = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.control = setInterval(() => {
      this.counterStart.emit(this.counter++);
    }, 1000);
  }

  onPause() {
    clearInterval(this.control);
  }
}
