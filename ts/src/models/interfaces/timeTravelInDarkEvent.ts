import { TimeTravel } from "./timeTravel";
import { TimeTravelType } from "../constants/enum/timeTravelType";

export interface TimeTravelInDarkEvent {
    timeTravel: TimeTravel,
    type: TimeTravelType
}