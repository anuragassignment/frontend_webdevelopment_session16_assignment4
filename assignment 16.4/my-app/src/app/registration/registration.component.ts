import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DropDownService } from '../services/drop-down.service';
import { IPersonModel } from '../interface/person-model';
import { InputDataService } from '../services/input-data.service';
// FormBuilder imported from anuglar/forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: []
})
export class RegistrationComponent implements OnInit {

  courseForm: FormGroup;
  personDetail: IPersonModel;
  dropDownArr = [];
  selectedOption = null;
  courseStat = '';
  coursesDp;

  constructor(public dropdown: DropDownService,
    public fieldData: InputDataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  onSubmit(): void {
    // adds the user submited data to personDetail object
    this.personDetail.chosenCourse = this.selectedOption;
    this.personDetail.name = this.courseForm.value.username;
    this.personDetail.email = this.courseForm.value.email;
    this.personDetail.address = this.courseForm.value.address;
    this.personDetail.date = this.courseForm.value.date;
    this.fieldData.setPersonData({ ...this.personDetail });
    this.courseForm.reset();
    this.fieldData.setStateDt({ ...this.personDetail });
    this.router.navigate(['/users']);
  }


  // resets the form on clicking the reset button
  resetForm(): void {
    this.courseForm.reset();
  }
  // sets the dropdownlist values on intialization
  ngOnInit() {
    // form controls validation specicified in the class for the Reactive Forms
    this.courseForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,16}$/)]],
      email: [null, [Validators.required, Validators.pattern('([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})')]],
      address: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      date: [null, [Validators.required]],
      select: [null, [Validators.required]]
    });
    // passing the observable to the variable which then uses async pipe
    this.route.data.subscribe((data: Data) => { this.coursesDp = data['course']; });


    this.personDetail = this.fieldData.getPersonData();
  }

}
