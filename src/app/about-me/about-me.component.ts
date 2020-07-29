import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  listOfCatFacts;
  randomFact;


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

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.getCatFacts().subscribe(
      dataFromUlr => {
        this.listOfCatFacts = dataFromUlr.all;
        this.getRandomFact();
      }
    );
  }

  getCatFacts() {
    return this.http.get('https://cat-fact.herokuapp.com/facts');
  }

  getRandomFact() {

    let randomNumber = this.getRandomInt(260)
    this.randomFact = this.listOfCatFacts[randomNumber].text;

  }

   getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
