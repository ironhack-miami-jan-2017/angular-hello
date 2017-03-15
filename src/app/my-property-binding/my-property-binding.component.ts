import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})
export class MyPropertyBindingComponent implements OnInit {
  myImageSource: string = 'https://media.giphy.com/media/nkUcca2CQ7VT2/giphy.gif';

  images: Array<string> = [
    'https://media.giphy.com/media/nkUcca2CQ7VT2/giphy.gif',
    'https://media.giphy.com/media/l0HlDU4DedRPkbUAw/giphy.gif',
    'https://media.giphy.com/media/McQiJ8FMNACpG/giphy.gif',
    'https://media.giphy.com/media/KI6ZEnkYMljCE/giphy.gif',
    'https://media.giphy.com/media/YO7IB8IvlFFSw/giphy.gif'
  ];

  constructor() { }

  ngOnInit() {
  }

  changeImage () {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.myImageSource = this.images[randomIndex];
  }

}
