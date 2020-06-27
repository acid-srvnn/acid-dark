import { EventsProvider } from "../eventsProvider";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { EpisodeTime } from "../../models/episodeTime";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";

export class S0203 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Noah send Helge back',
            description: 'Noah sends Helge back',
            persons: [{ person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt231, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("06/23/1987 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Helge is found',
            description: 'Helge is found after 7 months. Agnes fun with Doris. Egon visits. He wouldnt talk. Noah visits. ',
            persons: [{ person: DarkPersons.gretaDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt231, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("06/23/1954 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia',
            description: 'Claudia has the tannhaus time machine. Finds her time travel book. Claudia talks with Helge. Helge tells about Noah. Not to trust him. Then meets H.G.Tannhaus to ask about book. Book is Bootstrap Paradox. Tannhaus tells claudia how device works. More paradox.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1987 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia',
            description: 'Egon visits Claudia. Tells he has cancer.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1987 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia with Agnes',
            description: 'Claudia gives paper to be given to her adult self.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.agnesNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1954 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Egon meets Urlich',
            description: 'Egon meets Ulrich again in hospital. Asks how knew lyrics. About White Devil. Tells he is from future. ',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1987 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Egon meets Urlich',
            description: 'Egon gets a picture of Mikkel from Ines. Shows it to Ulrich. ',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1987 13:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Egon meets Urlich',
            description: 'Egon meets Ulrich in prison. Claudia visits Egon.',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old }],
            timeTravels: [], //TODO Claudia comes here after giving newspaper to Agnes
            worldTimeInMillis: new Date("06/23/1954 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Agnes meets Noah',
            description: 'Agnes meets Noah in church. Wants to join Adam. Tells missing papers are with claudia. Gives info about Claudia.',
            persons: [{ person: DarkPersons.agnesNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.noah, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1954 10:00:00").getTime(), //TODO
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia final actions 2.1',
            description: 'Claudia gives time travel book to Tannhaus. Tells he has to explain how device works in future.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1954 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia final actions 2.2',
            description: 'Noah shoots Claudia. Gets the missing pages. Learns about charlotte. Lies to Adam.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.noah, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/23/1954 15:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia visits future',
            description: 'Claudia visits future to see regina.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt232, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("06/23/1987 15:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia visits future',
            description: 'Claudia visits future to see regina with cancer. All her future doing to be bases on this.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt232, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("06/23/2020 15:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });



        return events;
    }
}