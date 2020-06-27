import { EventsProvider } from "../eventsProvider";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { EpisodeTime } from "../../models/episodeTime";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";

export class S0202 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Jonas tries to stabilize God Particle',
            description: 'Audio says - `God particle stablized. Portal . Time Travel. Enough voltage keeps it stable.` Jonas stabilizes it with voltage. Goes back as fuel is empty. Steals fuel. Gets caught.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 20:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Jonas tries to stabilize God Particle',
            description: 'Steals fuel. Gets caught. Elisabeth hangs him then saves him. Neck mark. Puts in Jail. Silja frees him and takes to the portal.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.elisabethDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.silja, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/22/2053 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Mikkel lives with Ines',
            description: 'Mikkel lives with Ines',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/22/1987 07:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia meets claudia',
            description: 'Egon takes Regina to school. Egon has cancer.  Old Claudia meets Claudia and tells everything. Tells to stop Adam. Adult claudia takes out tannhaus time machine from ground.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.gretchen, personTime: AgeGroup.young },
            { person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old }],
            timeTravels: [{ timeTravel: TimeTravels.tt223, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("06/22/1987 07:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Clausen investigation',
            description: 'Clausen wants to interview Tiedemann. Talks to Regina. Regina tells about Stranger Jonas stay in hotel and his things.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.clausen, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/22/2020 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Jonas takes Hannah to past',
            description: 'Jonas takes Hannah to past to let her understand.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.clausen, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt222, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("06/22/2020 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Jonas brings Hannah',
            description: 'Jonas takes Hannah to past to let her understand. Watches Mikkel and returns.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.clausen, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt222, type: TimeTravelType.in },
            { timeTravel: TimeTravels.tt224, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("06/22/1987 13:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Jonas takes Hannah to past',
            description: 'Jonas takes Hannah to past to let her understand.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.clausen, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt224, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("06/22/2020 16:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Mikkel meets Noah',
            description: 'Mikkel goes to cave. Noah meets and talks about God.',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt222, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("06/22/1987 08:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Egon asks Helge',
            description: 'Helge says random stuff. Egon gets suspicious. Checks and meets old Ulrich.',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/22/1987 13:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        events.push({
            title: 'Claudia hides the tannhaus time machine in ground',
            description: 'Claudia hides the tannhaus time machine in ground',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/22/1954 13:00:00").getTime(), //TODO
            episodeTime: new EpisodeTime(2, 2, ++episodeFrame)
        });

        return events;
    }
}