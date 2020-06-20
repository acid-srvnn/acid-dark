import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode5 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Doppler family',
            description: 'Peter and Charlotte dont sleep together. Franziska fights with Elisabeth for missing lipstick.',
            persons: [{ person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.franziskaDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.elisabethDoppler, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });



        return events;
    }
}