import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode5 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Charlotte investigates Yasin case',
            description: 'Charlotte asks Elisabeth any info about Yasin and about Noah. Noah - tall as dad - blue eyes. Charlotte confronts Peter where he was during Mikkels incident.',
            persons: [{ person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.elisabethDoppler, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        //TODO: Missed scene where mikkel returns to hospital

        events.push({
            title: 'Ines talks to Mikkel',
            description: 'Ines talks to Mikkel. Noah visits Mikkel.',
            persons: [{ person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Bartosz receives call from Noah',
            description: 'Bartosz receives call from Noah on the phone that he found in Erik`s stash. Bartosz tell Jonas that hes meeting Erik`s dealer and wants him to accompany. Jonas agrees.',
            persons: [{ person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Hannah visits Nielsens',
            description: 'As Ulrich doesnt return Hannah`s calls, She visits. Hannah brings food to the Nielsen house. Ulrich drops Hannah at her house. Ulrich breaks up Hannah`s affair.',
            persons: [{ person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas leaves Winden hotel',
            description: 'Stranger Jonas leaves Winden hotel. Keeps the room. Asks Regina to do a local delivery. Then he goes and meets Jonas.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Hannah meets Mikkel',
            description: 'Hannah meets Mikkel outside school. Hannah finds Ulrich and Katarina having sex. Hannah tells her father and Egon that Ulrich raped Katarina. Egon arrests Ulrich.',
            persons: [{ person: DarkPersons.hannahKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.danielKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/1986 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Bartosz meets Noah alone',
            description: 'Jonas watches Martha`s performance. Bartosz meets Noah alone as Jonas didnt respond. Stranger Jonas takes Tannhaus time machine and goes inside cave. ',
            persons: [{ person: DarkPersons.hannahKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt151, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/07/2019 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Jonas receives package from Stranger Jonas',
            description: 'Jonas receives the package sent by Stranger Jonas. A torch light. A Geiger counter to detect radiation. The Letter that Michael left. Letter that says Mikkel is Michael.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas meets H.G.Tannhaus',
            description: 'Stranger Jonas meets H.G.Tannhaus and says that he wants to talk about time.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.old }],
            timeTravels: [{ timeTravel: TimeTravels.tt151, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/07/1986 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 5, ++episodeFrame)
        });

        return events;
    }
}