import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";

export class Episode2 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];
        let event1: DarkEvent = {
            title: 'Martha gets angry',
            description: 'haha lol',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/21/1987 16:00:00").getTime(),
            episodeTime: 100002001
        }
        events.push(event1);

        let event2: DarkEvent = {
            title: 'Hannah cheats everyone',
            description: ':p',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/23/1987 16:00:00").getTime(),
            episodeTime: 100002001
        }
        events.push(event2);

        events.push({
            title: 'Time Machine is created',
            description: 'asdf ;lkj',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("07/23/1997 23:00:00").getTime(),
            episodeTime: 100002001
        });

        events.push({
            title: 'Portal is closed',
            description: 'asdf asdf',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("07/22/1902 12:00:00").getTime(),
            episodeTime: 100002001
        });

        return events;
    }
}