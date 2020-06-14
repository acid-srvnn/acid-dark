import { TimeTravel } from "./timeTravel";
import { DarkPersonInDarkEvent } from "./darkPersonIndarkEvent";
import { TimeTravelInDarkEvent } from "./timeTravelInDarkEvent";

export interface DarkEvent {
    title: string,
    description: string,
    worldTimeInMillis: number,
    episodeTime: number,
    persons: DarkPersonInDarkEvent[],
    timeTravels?: TimeTravelInDarkEvent[]
}