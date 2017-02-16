import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../../providers/login';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Login]
})
export class LoginPage {
  homePage = HomePage;
  //registerCredentials = {email: '', password: ''};

  logEmail: string;
  logPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: Login) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoginSubmit(){
    this.httpService.onlogin(this.logEmail, this.logPassword)
      .subscribe(
        data => {console.log(data), this.navCtrl.setRoot(HomePage)},
        err => console.log("I fucked up:", err));
  }

}
