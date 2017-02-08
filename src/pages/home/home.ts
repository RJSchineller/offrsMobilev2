import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name;
  aboutPage = AboutPage;

  constructor(public navCtrl: NavController) {
    this.name = "Richard";
  }

}

@Component({
  selector: 'date-pipe',
  template: '<p>{{Today | Date}}</p>'
})
export class DatePipeComponent{
  today: number = Date.now();
}
