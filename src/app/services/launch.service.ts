import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

@Injectable({
    providedIn: 'root'
})
export class LaunchService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllLaunches(): Observable<Mission[]> {
        return this.httpClient.get<Mission[]>('https://api.spacexdata.com/v3/launches?limit=100');
    }
}
