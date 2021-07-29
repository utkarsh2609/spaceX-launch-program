import { Component, OnInit } from '@angular/core';
import { FilterChip } from '../models/filter-chip.model';
import { LaunchFilters } from '../models/launch-filters.model';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  today = new Date().getFullYear();
  LAUNCH_YEAR: FilterChip[] = [];
  appliedFilters = new LaunchFilters();
  selectedLaunchYear = new Array();
  selectedSuccessfulLaunch = new Array();
  selectedSuccessfulLanding = new Array();
  SUCCESSFUL_LANDING = [
    { name: 'True', value: true },
    { name: 'False', value: false }
  ];
  SUCCESSFUL_LAUNCH = [
    { name: 'True', value: true },
    { name: 'False', value: false }
  ];

  constructor(
    private _launchService: LaunchService
  ) { }

  ngOnInit(): void {
    for (let i = 2006; i <= this.today; i++) {
      this.LAUNCH_YEAR.push({ name: i.toString(), value: i })
    }
  }

  /**
     * @description Determines whether chip selected on
     * @param chips selected
     */
  onChipSelected(chips: any[], type: FilterType) {
    const selected: any[] = [];
    chips.forEach(chip => selected.push(chip.value));
    if (type === FilterType.year) {
      this.appliedFilters.year = selected;
    } else if (type === FilterType.landing) {
      this.appliedFilters.land = selected;
    } else {
      this.appliedFilters.launch = selected;
    }
    this._launchService.appliedFilters.next(this.appliedFilters);
  }

}

export enum FilterType {
  year = 1,
  launch = 2,
  landing = 3
}
