import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpPostService } from './http-post.service';
import {
  BaseRequestOptions, Http, XHRBackend, HttpModule,
  Response, ResponseOptions, RequestMethod
} from '@angular/http';
import { ICourseModel } from '../interface/course-model';

describe('HttpPostService', () => {
  let mockBackend: MockBackend;


  // it() function tests the post values service
  // and Uses a matcher to test the content-type and the status of the response

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpPostService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  it('should insert new courseList',
    async(inject([HttpPostService], (service: HttpPostService) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        connection.mockRespond(new Response(new ResponseOptions({})));
        const contentType = connection.request.headers.get('Content-Type');
        expect(contentType).not.toBeNull();
        expect(contentType).toEqual('application/json');
        expect(connection.request.url).toBe('https://acadgild-ng-http.firebaseio.com/data.json');
      });
      const courseList: ICourseModel[] = [
        { 'course': 'Mobile Development' },
        { 'course': 'Web Development' },
        { 'course': 'IOS Development' },
        { 'course': 'Android Development' }
      ];
      const result = service.storeData(courseList);
      result.subscribe(
        (successResult) => {
          console.log(successResult);
          expect(successResult).toBeDefined();
          expect(successResult).toEqual([]);
        });
    })));
});
