import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";

export class Episode2 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];
        let event1: DarkEvent = {
            title: 'testev2',
            description: 'des2',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/21/1987 16:00:00").getTime(),
            episodeTime: 100002001
        }
        events.push(event1);

        let event2: DarkEvent = {
            title: 'testev3',
            description: 'des3',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/23/1987 16:00:00").getTime(),
            episodeTime: 100002001
        }
        events.push(event2);
        return events;
    }
}