import { Component, OnDestroy, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { LaunchService } from '../services/launch.service';
import { LaunchFilters } from '../models/launch-filters.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit, OnDestroy {
  launchList = new Array<Mission>();
  minLaunchYear: number = 2002;
  onDestroy = new Subject<void>();
  subscription: Subscription = new Subscription();

  constructor(
    private _launchService: LaunchService
  ) { }

  ngOnInit(): void {
    
    this._launchService.appliedFilters
    .pipe(
      debounceTime(1000),
      takeUntil(this.onDestroy)
      )
      .subscribe(filters => {
        this.getSpaceMissionList(filters);
    })

  }

  private getSpaceMissionList(appliedFilters : LaunchFilters) {
    this.subscription = this._launchService.getAllLaunches(appliedFilters)
      .subscribe(
        launches => {
          this.launchList = launches;
          this.minLaunchYear = this.getMinimumLaunchYear();
        }
      );
  }

  getMinimumLaunchYear(): number {
    let firstMission = this.launchList.reduce((prev, curr) => prev.launch_year < curr.launch_year ? prev : curr)
    return firstMission.launch_year;
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
    this.subscription.unsubscribe();
  }

}
