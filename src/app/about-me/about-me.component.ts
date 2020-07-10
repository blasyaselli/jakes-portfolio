import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  hobbies = ['cook', 'hike', 'golf'];
  hobbiesWithLocation = [
    {
      hobbyName: 'cook',
      hobbyLocation: 'Home'
    },
    {
      hobbyName: 'hike',
      hobbyLocation: 'Pike Peak'
    },
    {
      hobbyName: 'golf',
      hobbyLocation: 'Meadows'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
