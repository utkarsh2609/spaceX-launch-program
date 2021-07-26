import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit {
  @Input() launch!: Mission;
  constructor() { }

  ngOnInit(): void {
    console.log('INn Card', this.launch)
  }

}
