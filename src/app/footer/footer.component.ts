import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public enableFourthOfJulyBanner = true;
  isBannerOpen = true;

  constructor() { }

  ngOnInit() {
  }

  enableBanner() {
    this.enableFourthOfJulyBanner = true;
  }

  disableBanner() {
    this.enableFourthOfJulyBanner = false;
  }

  isBannerEnabled () {
    return true;
  }

  closeBanner(event) {
    this.isBannerOpen = false;
    console.log('this is the event ->', event);
    console.log('The Close Button Function got Triggered');
  }

}
