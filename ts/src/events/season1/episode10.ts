import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";
import { EpisodeTime } from "../../models/episodeTime";

export class Episode10 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        let episodeFrame = 0;

        events.push({
            title: 'Peter receives Mads body',
            description: 'Peter waits in the bunker as Claudia told. Mads body falls through TimeTravel. Peter calls Tronte. Claudia visits them.',
            persons: [{ person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.madsNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.tronteNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.claudiaTiedemann, personTime: AgeGroup.old }],
            timeTravels: [{ timeTravel: TimeTravels.tt111, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/04/2019 22:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Old Helge advices Helge',
            description: 'Old Helge wakes up in 1986. Old Helge meets Helge and asks him not to do the same mistake',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.old },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Ines adopts Mikkel',
            description: 'Ines gets close with Mikkel. Ines adopts Mikkel.',
            persons: [{ person: DarkPersons.inesKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 08:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Egon imprisons Ulrich',
            description: 'Egon imprisons Ulrich.',
            persons: [{ person: DarkPersons.egonTiedemann, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1953 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas checks on Tannhaus',
            description: 'Tannhaus proceeds with his time machine based on the time machien given by Jonas. Uses Ulrich`s phone. Jonas gives Caesium-137 to Tannhaus machine and takes the machine for himself.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.hgTannhaus, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 10:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Jonas goes to fix things',
            description: 'Bartosz hits Jonas. Jonas decides to bring back Mikkel.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt1a1, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/12/2019 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Jonas goes to fix things',
            description: 'As Jonas reaches Mikkel`s room, Noah kidnaps Jonas to puts in the bunker. Stranger Jonas visits Jonas.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [{ timeTravel: TimeTravels.tt1a1, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/12/1986 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Charlotte finds Ulrich',
            description: 'Charlotte analyses Helge kidnap incident in 1953 to find Ulrich as kidnapper.',
            persons: [{ person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/2019 15:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Peter and Tronte wait for the event',
            description: 'Peter and Tronte wait inside the bunker. Peter calls Charlotte and explains things.',
            persons: [{ person: DarkPersons.peterDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.tronteNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/2019 16:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });


        events.push({
            title: 'Helge tries to kill Helge',
            description: 'Old Helge tries to kill Helge by a car crash but dies himself.',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Noah talks to Bartosz',
            description: 'Noah says - Fight between light and shadow - Noah light - Claudia shadow - Claudia lied to Jonas that he fix things - Jonas is the one to trigger - Most people are puppets. ',
            persons: [{ person: DarkPersons.noah, personTime: AgeGroup.adult },
            { person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/2019 19:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas goes to fix things in 1986',
            description: 'As directed by Claudia. Stranger Jonas gets time machine from Tannhaus, fills it with Caesium and takes it inside the cave. Blinking lights everywhere in all 3 timelines.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas goes to fix things in 1986',
            description: 'Portal open in bunker with Jonas inside. Jonas sees 1953 Helge inside Portal. TimeTravel happens. Helge reaches 1986. Jonas reaches 2052.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt1a2, type: TimeTravelType.in },
            { timeTravel: TimeTravels.tt1a3, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/12/1986 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Stranger Jonas goes to fix things in 1986',
            description: 'Portal open in bunker with Helge inside. Helge sees 1986 Jonas inside Portal. TimeTravel happens. Helge reaches 1986. ',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt1a2, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/12/1953 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Tannhaus is building the time machine',
            description: 'Tannhaus is building the time machine based on the blueprint given by Claudia.',
            persons: [{ person: DarkPersons.hgTannhaus, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1952 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        events.push({
            title: 'Jonas reaches future',
            description: 'Due to the actions of Stranger Jonas, Jonas from bunker in 1986 reaches 2052. Silja captures him.',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.silja, personTime: AgeGroup.young }],
            timeTravels: [{ timeTravel: TimeTravels.tt1a3, type: TimeTravelType.in }],
            worldTimeInMillis: new Date("11/12/2052 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 10, ++episodeFrame)
        });

        return events;
    }
}