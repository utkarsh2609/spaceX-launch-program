import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mission } from '../models/mission.model';
import { LaunchFilters } from '../models/launch-filters.model';

@Injectable({
    providedIn: 'root'
})
export class LaunchService {
    filter = new LaunchFilters();
    appliedFilters = new BehaviorSubject<LaunchFilters>(this.filter);

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllLaunches(filters: LaunchFilters): Observable<Mission[]> {
        let params: HttpParams = new HttpParams();
        if (filters.launch?.length) {
            params = params.append('launch_success', `${filters.launch}`)
        }
        if (filters.land?.length) {
            params = params.append('land_success', `${filters.land}`)
        }
        if (filters.year?.length) {
            params = params.append('launch_year', `${filters.year}`);
        }
        return this.httpClient.get<Mission[]>('https://api.spacexdata.com/v3/launches?limit=100', { params });
    }
}
