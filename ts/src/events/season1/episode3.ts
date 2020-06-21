import { EventsProvider } from "../eventsProvider";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode3 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Mikkel meets Jana',
            description: '',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.janaNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'Mads investigation',
            description: 'Adult Ines intro. Young Charlotte notices dead birds.  Egon investigates missing Mads. 4 weeks since mads is missing.',
            persons: [{ person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.egonTiedemann, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'Mikkel roams winden',
            description: 'Mikkel roams winden. Goes to school and meets Katarina and Hannah. Goes to police station and meets Egon. Egon assumes its a prank.',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'Claudia takes charge at nuclear power plant',
            description: 'Helge give TimeTravel book to Claudia. Claudia takes charge at nuclear power plant. Clauida finds missing entries in financial report. Talks to Bernd. He advices its better not to know. Claudia insists. Bernd shows her the hidden cylinders of radioactive substance.',
            persons: [{ person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.berndDoppler, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'Egon investigates dead sheeps',
            description: 'New priest at church. 33 sheeps dead. Cardiac arrest. Eardrums ruptured. ',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'Tronte affair with Claudia',
            description: 'Tronte affair with Claudia',
            persons: [{ person: DarkPersons.tronteNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 09:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'Ines takes Mikkel',
            description: 'Ines takes Mikkel for medical aid. Mikkel wouldnt talk with anyone.',
            persons: [{ person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 09:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        events.push({
            title: 'TimeTravel happens',
            description: 'Blinking lights. Dead birds. Ulrich and Hannah talk about Apocalypse. Mikkel runs from hospital to the cave.',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.old },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.young }],
            timeTravels: [], //TODO
            worldTimeInMillis: new Date("11/05/1986 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });  //TODO Update timetravel info 

        events.push({
            title: 'H.G.Tannhaus is working on time machine',
            description: 'H.G.Tannhaus is working on time machine',
            persons: [{ person: DarkPersons.hgTannhaus, personTime: AgeGroup.old },],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 3, ++episodeFrame)
        });

        return events;
    }
}