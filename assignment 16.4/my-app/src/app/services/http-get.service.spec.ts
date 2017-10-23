import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpGetService } from './http-get.service';
import {
  BaseRequestOptions, Http, XHRBackend, HttpModule,
  Response, ResponseOptions, RequestMethod
} from '@angular/http';
import { ICourseModel } from '../interface/course-model';

describe('HttpGetService', () => {
  let mockBackend: MockBackend;

  // declared the describe function and created a function
  // beforeEach to call before every spec
  // matchers like “toBeDefined() , toEqual(), not.toBe()” used
  // it() function test for the response which we are getting from service

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpGetService,
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


  it('should get courseList', (done) => {
    let getDataService: HttpGetService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                { 'course': 'Mobile Development' },
                { 'course': 'Web Development' },
                { 'course': 'IOS Development' },
                { 'course': 'Android Development' }
              ]
            }
            )));
        });

      getDataService = getTestBed().get(HttpGetService);
      expect(getDataService).toBeDefined();

      getDataService.getData().subscribe((CourseList: ICourseModel[]) => {
        expect(CourseList.length).toBeDefined();
        expect(CourseList.length).toEqual(4);
        expect(CourseList.length).not.toBe(1);
        done();
      });
    });
  });


  it('should check the service',
    inject([HttpGetService], (service: HttpGetService) => {
      expect(service).toBeTruthy();
    }));

  // function it() test for the response which we are
  // getting from service async.
  // values in the response are checked using matchers like “toBeDefined() ,
  // toEqual(), not.toBe(), toBe()”

  it('should get courseList async',
    async(inject([HttpGetService], (getDataService: HttpGetService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                { 'course': 'Mobile Development' },
                { 'course': 'Web Development' },
                { 'course': 'IOS Development' },
                { 'course': 'Android Development' }
              ]
            }
            )));
        });
      getDataService.getData().subscribe(
        (response) => {
          expect(response.length).toBe(4);
          expect(response[0].course).toBe('Mobile Development');
          expect(response[1].course).toBe('Web Development');
          expect(response).toEqual([
            { 'course': 'Mobile Development' },
            { 'course': 'Web Development' },
            { 'course': 'IOS Development' },
            { 'course': 'Android Development' }
          ]);
        });
    })));
});
