export class LaunchFilters {
    year: Array<number> | undefined;
    land:  Array<string> | undefined;
    launch:  Array<string> | undefined;
    constructor(year?:Array<number>, land?:  Array<string>, launch?: Array<string>){
        this.year = year;
        this.land = land;
        this.launch = launch;
    }
}