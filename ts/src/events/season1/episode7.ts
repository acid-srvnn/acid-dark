import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode7 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Jonas in 1986',
            description: 'Jonas wakes, roams, goes to school. Meets Regina. Meets Egon.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Egon investigates Mads case',
            description: 'Egon queries Helge about his route. Why he took state road instead of forest road. Katarina gets Ulrich out of jail.',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Charolette searches power plant',
            description: 'Charlotte gets search warrant and searches power plant. Ulrich finds Egon notes on Helge from 1986. Charlotte finds the place where the barrels were kept. Ulrich goes to hospital to query Helge and gets suspended for that.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Jonas finds Mikkel',
            description: 'Jonas watches Mikkel in the care of Ines. Then Stranger Jonas comes there and tells not to meddle with time.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 13:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Katarina confronts Ulrich',
            description: 'Katarina confronts Ulrich about his affair. Ulrich meets his mom. Jana tells that a she saw a priest(Noah) arguing with a man(Helge) before Mads incident and saw the same man in present with same age.',
            persons: [{ person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.janaNielsen, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/2019 13:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Charlotte goes to bunker',
            description: 'Charlotte gets suspicion on Helge from Ulrich. Questions Peter. Visits the bunker. Jonas comes back to present. Jonas burns the letter.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.peterDoppler, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt171, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/09/2019 16:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Jonas travels back to present',
            description: 'Jonas travels back to 2019 ',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt171, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/09/1986 16:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({ //TODO
            title: 'Ulrich visits Helge again',
            description: 'Ulrich visits Helge. Finds the time travel book with 1986 coin. Helge runs away. Ulrich follows.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/2019 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });

        events.push({
            title: 'Helge with a dead body', //TODO
            description: 'Helge is with a dead body outside the bunker. Noah cleans the place. Adds text to the wall - Nov 9 1953.',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.noah, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1953 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });


        return events;
    }
}