import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ICourseModel } from '../interface/course-model';
import { Observable } from 'rxjs/Observable';

// HTTP Post service to post the data to the server. Add Content-type in the header while posting a data
@Injectable()
export class HttpPostService {

  constructor(private http: Http) { }

  storeData(crs: ICourseModel[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://acadgild-ng-http.firebaseio.com/data.json', crs, options).map((res: Response) => {
      const body = res.json();
      return body || [];
    }).catch(
      (error: Response) => {
        return Observable.throw(error);
      }
    );
  }

}
