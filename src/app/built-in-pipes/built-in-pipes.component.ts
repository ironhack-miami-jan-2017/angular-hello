import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  myName: string = 'Nizar';
  myDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  increment () {
    const changedDate = new Date(this.myDate);
    changedDate.setDate(this.myDate.getDate() + 1);
    this.myDate = changedDate;
  }

}
