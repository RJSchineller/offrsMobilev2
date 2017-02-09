import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User{
  name: string;
  email: string;

  constructor(name: string, email: string){
      this.name = name;
      this.email = email;
  }
}

@Injectable()
export class Data {
  currentUser: User;
  
  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

}
