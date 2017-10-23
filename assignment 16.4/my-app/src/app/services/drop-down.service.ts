import { Injectable } from '@angular/core';
import { ICourseModel } from '../interface/course-model';
import { HttpPostService } from './http-post.service';
import { HttpGetService } from './http-get.service';


@Injectable()
export class DropDownService {
  courses: ICourseModel[] = [
    { course: 'Mobile Development' },
    { course: 'Web Development' },
    { course: 'IOS Development' },
    { course: 'Android Development' }
  ];

  coursesDt: any = this.httpGet.getData();

  private setDt() {
    this.httpSer.storeData(this.courses).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); });
  }

  private getDt() {
    this.httpGet.getData().subscribe(
      (response) => { this.coursesDt = response; },
      (error) => { console.log(error); });
  }

  getData() {
    return this.courses;
  }

  setData(obj: { course: string }) {
    this.courses.unshift(obj);
  }
  constructor(private httpSer: HttpPostService, private httpGet: HttpGetService) {
    this.setDt();
    // this.getDt();
    console.log(this.coursesDt);
  }
}