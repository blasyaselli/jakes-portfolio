import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() adjective = 'Sad';
  @Input() holidayName = 'New Years';
  @Output() closeButton = new EventEmitter();


  // public holidayName = '4th of July';

  constructor() { }

  ngOnInit() {
  }

  closeButtonClicked() {
    this.closeButton.emit({ loading: true});
  }

}
