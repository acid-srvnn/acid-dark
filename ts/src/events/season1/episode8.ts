import { EventsProvider } from "../eventsProvider";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode8 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Two bodies found in site',
            description: 'Police finds two dead bodies in power plant construction site. Egon reaches the spot. Helge follow his car in cycle. Eyes burned. Ears destroyed. 1986 coins.',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.erikObendorf, personTime: AgeGroup.young },
            { person: DarkPersons.yasinFriese, personTime: AgeGroup.young },
            { person: DarkPersons.danielKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 08:00:00").getTime(), //TODO
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas visits H.G.Tannhaus',
            description: 'Stranger Jonas visits H.G.Tannhaus and talk about time. Jonas asks him to fix his time machine.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/9/1986 22:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich first time travel',
            description: 'Helge goes to the cave travels to 1986 and Ulrich follows him but reaches 1953.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.old }],
            timeTravels: [{ timeTravel: TimeTravels.tt181, type: TimeTravelType.out },
            { timeTravel: TimeTravels.tt182, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/9/2019 22:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich in 1953',
            description: 'Ulrich comes out of the cave. Two boys bully helge. Urlich directs Agnes and Tronte. Ulrich goes to H.G.Tannhaus shop.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.agnesNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.tronteNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt182, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/10/1953 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });

        events.push({
            title: 'Claudia tutors Helge',
            description: 'Claudia tutors Helge. Agnes visits Tiedemann house.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.dorisTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.agnesNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.tronteNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.gretchen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 09:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich hits Helge',
            description: 'Ulrich meets Jana and Ines in H.G.Tannhaus shop. Learns about dead bodies. Forgets his phone and rushes to police station and learns about Dopplers. Catches Helge, hits him in the head with a rock and leaves him in the bunker.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.adult },
            { person: DarkPersons.janaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.inesKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });

        events.push({
            title: 'Gretchen time travels',
            description: 'Claudia takes Tronte to show the forest. Helge accompanies. Sends Gretchen into the cave. Old Claudia takes Gretchen to 1986.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.tronteNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.gretchen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 10:00:00").getTime(), //TODO
            episodeTime: new EpisodeTime(1, 8, ++episodeFrame)
        });


        return events;
    }
}