import { LaunchLinks } from "./launch-link.model";

export interface Mission {
    flight_number: number;
    land_success: boolean;
    launch_success: boolean;
    launch_year: number;
    links: LaunchLinks;
    mission_name: string;
    mission_id: Array<string>;
    rocket ?: any;
}
