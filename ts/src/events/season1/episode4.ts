import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode4 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Doppler family',
            description: 'Peter and Charlotte dont sleep together. Franziska fights with Elisabeth for missing lipstick.',
            persons: [{ person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.franziskaDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.elisabethDoppler, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Peter meets Helge',
            description: 'Peter asks Helge not to wander. Helge replies that he has tell him and make it stop.',
            persons: [{ person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Charlotte steals roadside camera data',
            description: 'Charlotte steals roadside camera data and then leaves Elisabeth at school. Elisabeth tells about her boyfriend Yasin.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.elisabethDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.yasinFriese, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Jonas investigates winden caves',
            description: 'Jonas takes the map that he found and goes inside the caves. Stranger Jonas leaves a red knot rope on Jonas`s cycle and watches him from a distance. Jonas doesnt find his way inside the cave. Returns.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Charlotte investigation',
            description: 'Analyses the dead birds. Later goes through cam footage. Finds peter`s car in the footage. Hides the info from Woller. Peter removes red soil from his car. Peter lies when Charlotte asks about his location during Mikkel incident.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.torbenWoller, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 09:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Charlotte investigation',
            description: 'Charlotte questions bernadette about Peter. Then visits helge`s forest house. Finds red soil there. Gets report of dead birds in phone. Ear drums burnt. Finds a bunker near the house. Then goes to the powerplant as Ulrich was caught trespassing. Asks Peter to pickup Elisabeth from school.',
            persons: [{ person: DarkPersons.bernadette, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 11:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Elisabeth walks home',
            description: 'As no one came to pickup, Elisabeth walks home. Helge runs from hospital. Elisabeth goes missing. Charlotte finds Elisabeth`s scarf. Police start searching. Adult Helge visits Helge`s bunker. Helge roams and reaches Police. Elisabeth reaches home. Elisabeth says that she met Noah and he gave a stopwatch to give to Charlotte',
            persons: [{ person: DarkPersons.elisabethDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.old },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 17:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas guides Jonas',
            description: 'Stranger Jonas marks the location of cave door in Jonas`s map',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        events.push({
            title: 'Helge kidnaps Yasin',
            description: 'Helge kidnaps Yasin by order of Noah.',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.yasinFriese, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 4, ++episodeFrame)
        });

        return events;
    }
}