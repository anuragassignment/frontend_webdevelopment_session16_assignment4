import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

// HTTP GET service which get the drop-down values from the external URL and show the response in the View
@Injectable()
export class HttpGetService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://acadgild-ng-http.firebaseio.com/data.json').map(
      (response) => {
        const data = response.json();
        return data;
        // const keys = Object.keys(data);
        // return data[keys[0]];
      }
    ).catch(
      (error: Response) => {
        return Observable.throw(error);
      }
      );
  }

}
