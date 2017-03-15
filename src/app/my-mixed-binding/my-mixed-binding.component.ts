import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-mixed-binding',
  templateUrl: './my-mixed-binding.component.html',
  styleUrls: ['./my-mixed-binding.component.css']
})
export class MyMixedBindingComponent implements OnInit {
  isInputDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleInput () {
    this.isInputDisabled = !this.isInputDisabled;
  }

}
