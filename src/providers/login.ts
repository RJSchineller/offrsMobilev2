import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Login {
  private offrsUrl = 'http://live2.offrs.com/mobileapi/getUser.cfm?';

  constructor(public http: Http) {
    console.log('Hello Login Provider');
  }

  public onlogin(email: string, password: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', email);
    params.set('password', password);

    return this.http.get(this.offrsUrl, { search: params })
      .map(res => res.json())
  }
}

  


