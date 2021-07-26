import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  launchList = new Array<Mission>();
  minLaunchYear: number = 2002;

  constructor(
    private _launchService: LaunchService
  ) { }

  ngOnInit(): void {
    this.getSpaceMissionList();


  }

  private getSpaceMissionList() {
    this._launchService.getAllLaunches()
      .subscribe(
        launches => {
          console.log(launches);
          this.launchList = launches;
          this.minLaunchYear = this.getMinimumLaunchYear();
          console.log('MIN_YEAR', this.minLaunchYear)
        }
      );
  }

  getMinimumLaunchYear(): number {
    let firstMission = this.launchList.reduce((prev, curr) => prev.launch_year < curr.launch_year ? prev : curr)
    return firstMission.launch_year;
  }

}
