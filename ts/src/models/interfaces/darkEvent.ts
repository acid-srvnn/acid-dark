import { TimeTravel } from "./timeTravel";
import { DarkPersonInDarkEvent } from "./darkPersonIndarkEvent";

export interface DarkEvent {
    title: string,
    description: string,
    worldTimeInMillis: number,
    episodeTime: number,
    persons: DarkPersonInDarkEvent[],
    timeTravels: TimeTravel[]
}