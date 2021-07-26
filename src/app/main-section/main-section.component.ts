import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  launchList = new Array<Mission>();

  constructor(
    private _launchService: LaunchService
  ) { }

  ngOnInit(): void {
    this._launchService.getAllLaunches()
    .subscribe(
      launches => {
        console.log(launches);
        this.launchList = launches;
      }
    )
  }

}
