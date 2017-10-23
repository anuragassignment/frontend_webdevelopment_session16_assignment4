import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { InputDataService } from '../services/input-data.service';

// mouseover and mouseleave function executes on event and the background color changes accordingly
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('usrSt', [
      // transform to scale(1) for inactive and scale(1.1) for active
      state('active', style({ 'background-color': '#cfd8dc', 'transform': 'scale(1.1)' })),
      state('inactive', style({ 'background-color': '#fff', 'transform': 'scale(1)' })),
      // transition for active and inactive animate for 500ms both
      transition('active <=> inactive', animate('500ms'))
    ]),
    // animations for the data when it gets displayed and created
    trigger('dataIn', [
      state('in', style({ 'transform': 'translateX(0)', 'opacity': '1' })),
      // transition for enter and in style, transform to translate from the Y axis. Add animate for 500.
      transition(':enter', animate('400ms', keyframes([
        // keyframes to do multi-step animations for the enter event animate time for 400
        style({ 'transform': 'translateY(-100px)', 'opacity': '0' }),
        style({ 'transform': 'translateY(-50px)', 'opacity': '0.5' }),
        style({ 'transform': 'translateY(0)', 'opacity': '0.8' })
      ])))
    ])
  ]
})
export class ListComponent implements OnInit {

  public personsList;
  st;
  index;
  @Input() coursestat: string;

  constructor(private getDt: InputDataService) {

  }

  ngOnInit() {
    this.personsList = this.getDt.personArr;
    // console.log(this.personsList);
    this.st = Array.from(this.personsList, _ => 'inactive');
    // console.log(this.st);
  }

  onMouseover(i: number) {
    this.index = i;
    this.st[this.index] = 'active';
    // console.log(this.st);
  }
  onMouseleave(i: number) {
    this.st[this.index] = 'inactive';
    // console.log(this.st);
  }

  // animate call-back function which shows the values in console
  animationStarted(e: Event) {
    console.log('animation started', e);
  }
  animationDone(e: Event) {
    console.log('animation finished', e);
  }
}
