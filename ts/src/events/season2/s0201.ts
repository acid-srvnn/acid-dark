import { EventsProvider } from "../eventsProvider";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { EpisodeTime } from "../../models/episodeTime";

export class S0201 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Noah is building the cave passage',
            description: 'Adam commands Noah. Noah kills his coworker. Noah advices younger Noah to follow Adam.',
            persons: [{ person: DarkPersons.noah, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/1921 07:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: 'Jonas is in the future',
            description: 'Jonas wakes up. Goes to the bunker. Hears Claudia`s tapes. Apocalypse happened on June 27,2020. Claudia is one of the survivors. If the God particle is stabilized, maybe things can be fixed.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 07:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: 'Elisabeth leader',
            description: 'Elisabeth is the leader of the tribe in the future. She talks about the prophecy. Passage to open to paradise.',
            persons: [{ person: DarkPersons.elisabethDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.silja, personTime: AgeGroup.young },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: '6 days until apocalypse',
            description: 'Six months after mysterious disapperance of Erik, Mikkel, Yasin, Jonas, Helge, Ulrich. Regina cancer worsens. Clausen - head of Winden task force.',
            persons: [{ person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.clausen, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.jurgenObendorf, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 07:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: 'Power plant to be closed',
            description: 'Aleksander announces nuclear power plant to be closed in 6 days. Puts the barrels inside concrete.',
            persons: [{ person: DarkPersons.aleksanderTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.torbenWoller, personTime: AgeGroup.adult },
            { person: DarkPersons.bernadette, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas visits Hannah',
            description: 'Stranger Jonas visits Hannah and explains that he is Jonas from future.',
            persons: [{ person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 10:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: 'Elisabeth identifies Noah',
            description: 'Elisabeth identifies Noah in the Sic Mundus group picture. Peter informs it to Charlotte.',
            persons: [{ person: DarkPersons.elisabethDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 18:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        events.push({
            title: 'Jonas finds time portal inside power plant',
            description: 'Jonas secretly enters the power plant and using the geiger counter finds the God particle in unstabilized state.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 20:00:00").getTime(),
            episodeTime: new EpisodeTime(2, 1, ++episodeFrame)
        });

        return events;
    }
}