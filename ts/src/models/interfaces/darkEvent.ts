import { TimeTravel } from "./timeTravel";
import { DarkPersonInDarkEvent } from "./darkPersonIndarkEvent";
import { TimeTravelInDarkEvent } from "./timeTravelInDarkEvent";
import { EpisodeTime } from "../episodeTime";

export interface DarkEvent {
    title: string,
    description: string,
    worldTimeInMillis: number,
    episodeTime: EpisodeTime,
    persons: DarkPersonInDarkEvent[],
    timeTravels?: TimeTravelInDarkEvent[]
}