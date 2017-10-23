import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ICourseModel } from '../interface/course-model';
import { DropDownService } from '../services/drop-down.service';
import { Observable } from 'rxjs/Observable';

// resolve which populates dropdown data from the DropDownService and provides it before the component initialize
@Injectable()
export class ResolveService implements Resolve<ICourseModel[]> {

  constructor(private dropDown: DropDownService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourseModel[]> {
    return Observable.of(this.dropDown.coursesDt);
  }
}
