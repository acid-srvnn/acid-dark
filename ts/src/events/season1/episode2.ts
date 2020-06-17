import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";

export class Episode2 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeTime = (1 * 1000000 + 2 * 1000 + 0);

        events.push({
            title: 'Jonas',
            description: 'Jonas wakes up from nightmares as usual. Stranger Jonas watches Mikkel search crew.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult }
            ],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 07:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Unidentified child body report',
            description: 'Male, 10-12 years age. Time of death 16 hours ago. Eyes burnt and melted. Eardrums destroyed. Red soil in the ground. 80s clothes, shoes, walkman. 1986 coin.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Ulrich finds cave metal door',
            description: 'Ulrich finds cave metal door. Comes back to tell Charlotte and get search warrant. Fails to get warrant. Meets Aleksander in the gates and argues.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Aleksander orders Jurgen to move the cylinders',
            description: 'Aleksander orders Jurgen to move the cylinders',
            persons: [{ person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.jurgenObendorf, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Stranger Jonas comes to stay at winden hotel',
            description: 'Stranger Jonas comes to stay at winden hotel',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Jonas finds a map',
            description: 'Jonas finds a map of winden caves hidden in his dads room',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 09:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Ulrich investigates Jurgen',
            description: 'Ulrich analyses Mikkel clues. Jurgen has van and was working in the nuclear power plant as a drive the night Erik went missing. Ulrich investigates Jurgen. Find his stash and that he didnt work the previous day.',
            persons: [{ person: DarkPersons.jurgenObendorf, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Helge kills Erik',
            description: 'Helge straps Erik to the bunker timemachine and kills him.',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.erikObendorf, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(), //TODO
            episodeTime: ++episodeTime
        });

        events.push({
            title: 'Aleksander loads barrels into a truck',
            description: 'Aleksander loads barrels into a truck',
            persons: [{ person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        /*
        ?? Mikkel travelled to past Nov5 morn. Why lights blink in the eve.
        events.push({
            title: 'TimeTravel happens',
            description: 'Blinking lights. Dead birds.',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });*/

        events.push({
            title: 'Mikkel in past',
            description: 'Mikkel walks out of cave, goes home, meets young Ulrich and Katarina',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: ++episodeTime
        });

        return events;
    }
}