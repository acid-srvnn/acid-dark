import { TimeLine } from "../constants/enum/timeLine";
import { DarkPerson } from "./darkPerson";
import { TimeTravelDevice } from "../constants/enum/timeTravelDevice";
import { DarkPersonInDarkEvent } from "./darkPersonIndarkEvent";

export interface TimeTravel {
    from: TimeLine,
    to: TimeLine,
    persons: DarkPersonInDarkEvent[],
    location: string,
    device: TimeTravelDevice
}