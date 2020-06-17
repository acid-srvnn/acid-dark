import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";

export class Episode3 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeTime = (1 * 1000000 + 3 * 1000 + 0);

        events.push({
            title: 'Mikkel meets Jana',
            description: '',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.janaNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Mads investigation',
            description: 'Adult Ines intro. Young Charlotte notices dead birds. Adult Egon investigates missing Mads. 4 weeks since mads is missing.',
            persons: [{ person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.young }], //TODO Egon
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        return events;
    }
}