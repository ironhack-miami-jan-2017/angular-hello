import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  blah = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit() {
  }

}
