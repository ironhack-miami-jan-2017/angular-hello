import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  isBlackBg: boolean = false;
  isYellowText: boolean = false;
  isLarge: boolean = true;

  animals: Array<Object> = [
    {
        id: 1,
        category: 'mammal',
        name: 'Dog'
    },{
        id: 2,
        category: 'oviparous',
        name: 'Duck'
    },{
        id: 3,
        category: 'mammal',
        name: 'Elephant'
    },{
        id: 4,
        category: 'reptile',
        name: 'Snake'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleBlack() {
    this.isBlackBg = !this.isBlackBg;
  }

  toggleYellow() {
    this.isYellowText = !this.isYellowText;
  }

  toggleBig() {
    this.isLarge = !this.isLarge;
  }

}
