import { Component, OnInit } from '@angular/core';
import { FilterChip } from '../models/filter-chip.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  today = new Date().getFullYear();
  LAUNCH_YEAR: FilterChip[] = [];
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

  constructor() { }

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
    let selectedArray = type === FilterType.year ? this.selectedLaunchYear : type === FilterType.launch ? this.selectedSuccessfulLaunch : this.selectedSuccessfulLanding;
    const selected: any[] = [];
    chips.forEach(chip => selected.push(chip.value));
    console.log('SELECTED CHIPS', selected)
    selectedArray = selected;
  }

}

export enum FilterType {
  year = 1,
  launch = 2,
  landing = 3
}
