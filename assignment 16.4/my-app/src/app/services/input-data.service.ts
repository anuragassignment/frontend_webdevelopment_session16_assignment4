import { Injectable } from '@angular/core';
import { IPersonModel } from '../interface/person-model';

// input data service which adds and provides data to view
@Injectable()
export class InputDataService {
  public personArr = [];

  personDetails: IPersonModel = {
    name: '',
    email: '',
    address: '',
    date: '',
    chosenCourse: ''
  };


  setStateDt(obj: IPersonModel) {
    this.personArr.push(obj);
    console.log(this.personArr);
  }

  getPersonData() {
    return this.personDetails;
  }

  setPersonData(obj: IPersonModel) {
    this.personDetails.name = obj.name;
    this.personDetails.email = obj.email;
    this.personDetails.address = obj.address;
    this.personDetails.chosenCourse = obj.chosenCourse;

  }

  constructor() { }

}
