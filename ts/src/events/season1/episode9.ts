import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode9 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Helge missing',
            description: 'Bernd reports missing Helge to police. Noah visits Dopplers. Egon arrests Ulrich.',
            persons: [{ person: DarkPersons.berndDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.danielKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1953 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich is released',
            description: 'By Katarina`s statements, Ulrich is released. Hannah lies to Katarina that it was Regina who framed Ulrich.',
            persons: [{ person: DarkPersons.katarinaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.janaNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Claudia finds Gretchen',
            description: 'Claudia goes to barrels to take a picture. Old Claudia leaves Gretchen here.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.gretchen, personTime: AgeGroup.young }],
            timeTravels: [], //TODO
            worldTimeInMillis: new Date("11/11/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Aleksander protects Regina',
            description: 'Katarina fights Regina. Aleksander comes for protection.',
            persons: [{ person: DarkPersons.katarinaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 13:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Claudia talks to Bernd',
            description: '',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.berndDoppler, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 13:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Helge doesnt report to Egon',
            description: 'Helge hides from Egon.',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.old },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 13:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Noah and Helge work',
            description: 'Noah and Helge work on the bunker time machine. It failed on the previous try.',
            persons: [{ person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Magnus gives the pendant to Franziska',
            description: 'Magnus gives the pendant to Franziska',
            persons: [{ person: DarkPersons.magnusNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.franziskaDoppler, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Ulrich is missing',
            description: 'Katarina notices Ulrich is missing. Asks Charlotte. Fights with Hannah. Hannah shows Aleksander that she has proof of his past.',
            persons: [{ person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Claudia meets Bartosz',
            description: 'Claudia gives a letter to Bartosz to give to his mom.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Martha kisses Jonas',
            description: 'Jonas avoids Martha. Martha confronts Jonas. He walks away.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.marthaNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 17:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Bartosz meets Noah again',
            description: '',
            persons: [{ person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Regina finds Stranger Jonas things',
            description: '',
            persons: [{ person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult },],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Claudia gives job for Aleksander',
            description: '',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas refills Caesium-137',
            description: '',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 19:00:00").getTime(), //TODO he came to 2019 takes Cesium and leaves to 1983
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });

        events.push({
            title: 'Claudia meets Tannhaus',
            description: 'Claudia give blueprint of Tannhaus machine.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1953 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 9, ++episodeFrame)
        });


        return events;
    }
}