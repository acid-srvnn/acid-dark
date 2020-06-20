import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode6 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Mads goes missing',
            description: 'Mads goes missing',
            persons: [{ person: DarkPersons.madsNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("10/09/1986 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Investigation continues',
            description: 'Ulrich hears evidences from Mads case. Notices his mom has lied. Confronts his dad where he was that night. Jana reveals about affair between Tronte and Claudia.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.tronteNielsen, personTime: AgeGroup.old },
            { person: DarkPersons.janaNielsen, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Regina learns she has cancer',
            description: 'Regina learns she has cancer. Hides it from Aleksander. Aleksander call the center and gets the info.',
            persons: [{ person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Magnus finds a pendant',
            description: 'Magnus finds a pendant near the place where Franziska keeps her money.',
            persons: [{ person: DarkPersons.magnusNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Jonas goes to the cave',
            description: 'Jonas takes the tools that Stranger Jonas sent and goes to the cave. Finds a red rope and follows it inside the cave. Then he follows the Radiation signal. Finds the cave time machine and uses it.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt161, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Katarina learns of Ulrich`s affair',
            description: 'Katarina analyses phone records and learns of her husbands affair.',
            persons: [{ person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich questions Regina about Mads',
            description: 'As Jana informed that Regina was the last person to meet Mads, Ulrich questions Regina about Mads. Ulrich learns that Regina did not frame him of rape and it was Hannah. Ulrich confronts Hannah.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 13:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Tronte and Peter wait for event',
            description: 'Tronte and Peter wait in the bunker for events to happen.',
            persons: [{ person: DarkPersons.tronteNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.peterDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Jonas first time travel',
            description: 'Jonas uses Stranger Jonas tools to do his first time travel to 1986. Jonas notices posters for missing Mads. Jonas meets young Hannah.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.danielKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt161, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/08/1986 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich identifies Mads body',
            description: 'Ulrich identifies the found dead body as Mads - Cut on the chin.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.madsNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 6, ++episodeFrame)
        });


        return events;
    }
}