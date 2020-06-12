import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";

export class Episode1 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];
        let event1: DarkEvent = {
            title: 'Jonas meets Claudia',
            description: 'Bla bla bla',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/21/1987 16:00:00").getTime(),
            episodeTime: 100001001
        }
        events.push(event1);
        return events;
    }
}