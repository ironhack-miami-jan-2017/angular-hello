import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding',
  templateUrl: './my-event-binding.component.html',
  styleUrls: ['./my-event-binding.component.css']
})
export class MyEventBindingComponent implements OnInit {
  lastLetter = '';
  currentText = '';

  constructor() { }

  ngOnInit() {
  }

  onKey (event, text) {
    this.lastLetter = event.key;
    this.currentText = text;
  }

}
