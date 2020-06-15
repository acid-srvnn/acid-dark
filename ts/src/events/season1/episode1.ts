import { EventsProvider } from "../events";
import { DarkEvent } from "../../models/interfaces/darkEvent";
import { DarkPersons } from "../../models/constants/darkPersons";
import { AgeGroup } from "../../models/constants/enum/ageGroup";
import { TimeTravels } from "../timeTravels";
import { TimeTravelType } from "../../models/constants/enum/timeTravelType";

export class Episode1 extends EventsProvider {
    public getEvents(): DarkEvent[] {
        let events: DarkEvent[] = [];

        events.push({
            title: 'Michael commits suicide',
            description: 'Michael commits suicide leaving behind a letter `Do not open before November 4, 10:13 PM`',
            persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2019 13:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });

        events.push({
            title: 'Hannah fucks Ulrich',
            description: 'Jonas wakes from a nightmare as usual. Hannah fucks Ulrich. Ulrich invites Hannah for the Ulrich-Katarina anniversary that night. Hannah is disappointed for not receiving `I love you` back',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });

        events.push({
            title: 'Winden caves intro',
            description: 'Jonas leaves for school. Erik Obendorf is missing. Winden caves is located 3.5 kms from Winde. Jonas talks with his therapist Peter about his dreams and anger related to his dad',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.peterDoppler, personTime: AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:01").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 2)
        });

        events.push({
            title: 'Power Plant intro',
            description: 'Winden Nuclear Power Plant. Project plan started in 1953 and authorized in 1960. To be decommissioned in 2020 due to government. Ines has the letter left by Michael',
            persons: [{ person: DarkPersons.inesKahnwald, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:02").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 3)
        });

        events.push({
            title: 'Nielsen Family intro',
            description: 'Magnus hoodie is missing. Mikkel likes magic. `The question isnt how, its when`',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.magnusNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.marthaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:03").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 4)
        });

        events.push({
            title: 'Jonas goes to school',
            description: 'Jonas goes to school for first time after his dads suicide. Meets his friend Bartosz. Bartosz hid the fact about Jonas dad to the school people, Instead he told that Jonas was in two month exchage school in France. Martha now likes Bartosz as Jonas was missing for long time. Principal katarina talks to students about missing Erik. Bartosz plans on getting Erik`s stash',
            persons: [{ person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.marthaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:04").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 5)
        });

        events.push({
            title: 'Erik Investigation',
            description: '49 tire tracks including 2 trucks. 21,312 vehicles in Winden.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:05").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 6)
        });

        events.push({
            title: 'Mikkel goes missing',
            description: 'The kids go searching for Erik`s stash near Winden Caves. Parents do a meeting to discuss on Erik. Ines reads Micheal`s letter. Strange noise from caves. Mikkel goes missing',
            persons: [{ person: DarkPersons.magnusNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.marthaNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young },
            { person: DarkPersons.jonasKahnwald, personTime: AgeGroup.young },
            { person: DarkPersons.bartoszTiedemann, personTime: AgeGroup.young },
            { person: DarkPersons.franziskaDoppler, personTime: AgeGroup.young },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.katarinaNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.hannahKahnwald, personTime: AgeGroup.adult },
            { person: DarkPersons.reginaTiedemann, personTime: AgeGroup.adult }
            ],
            timeTravels: [{ timeTravel: TimeTravels.tt111, type: TimeTravelType.in },
            { timeTravel: TimeTravels.tt112, type: TimeTravelType.out }],
            worldTimeInMillis: new Date("11/04/2019 22:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 7)
        });

        events.push({
            title: 'Mikkel Investigation',
            description: 'Police finds a child body thats not mikkel.',
            persons: [{ person: DarkPersons.ulrichNielsen, personTime: AgeGroup.adult },
            { person: DarkPersons.charlotteDoppler, personTime: AgeGroup.adult }],
            worldTimeInMillis: new Date("11/05/2019 07:00:01").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 8)
        });

        //TODO ending event

        return events;
    }
}