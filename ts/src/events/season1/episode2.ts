import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";

export class Episode2 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        events.push({
            title: 'Jonas',
            description: 'Jonas wakes up from nightmares as usual. Adult Jonas watches Mikkel search crew.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult }
            ],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 07:00:00").getTime(),
            episodeTime: (1 * 1000000 + 2 * 1000 + 1)
        });

        events.push({
            title: 'Unidentified child body report',
            description: 'Male, 10-12 years age. Time of death 16 hours ago. Eyes burnt and melted. Eardrums destroyed. Red soil in the ground. 80s clothes, shoes, walkman. 1986 coin.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: (1 * 1000000 + 2 * 1000 + 2)
        });

        events.push({
            title: 'Ulrich finds cave metal door',
            description: 'Ulrich finds cave metal door. Comes back to tell Charlotte and get search warrant.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: (1 * 1000000 + 2 * 1000 + 3)
        });

        return events;
    }
}