import { Events } from "./events";
import { Parser } from "./parser";
import { DarkPerson } from "../models/interfaces/darkPerson";
import { DarkEvent } from "../models/interfaces/darkEvent";
import { AgeGroup } from "../models/constants/enum/ageGroup";
import { Utils } from "./utils";

export class EventRenderer {

    public static worldTimeline() {
        let filteredEvents = Events.getEvents().sort((a, b) => {
            return (a.worldTimeInMillis >= b.worldTimeInMillis) ? 1 : -1
        });

        $('#dark-container .timeline').empty();

        filteredEvents.forEach(event => {

            let worldTimeInMillis: Date = new Date(event.worldTimeInMillis);
            let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();

            if (!$("#" + monthAndYear).length) {
                $('#dark-container .timeline').append(Parser.getMonthAndYearHtml(event))
            }

            let date = "date_" + worldTimeInMillis.getDate() + "_" + monthAndYear;

            if (!$("#" + date).length) {
                $('#dark-container .timeline').append(Parser.getDateHtml(event))
            }

            $("#" + date).append(Parser.getEventHtml(event));

        })
    }

    public static personTimeline(darkPerson: DarkPerson) {
        let filteredEvents = Events.getEvents().sort((a, b) => {
            return (a.worldTimeInMillis >= b.worldTimeInMillis) ? 1 : -1
        });

        let filteredEvents1: DarkEvent[] = filteredEvents.filter(event => {
            let searchItem = { person: darkPerson, personTime: AgeGroup.young };
            if (Utils.isSamePerson(event.persons, searchItem)) {
                return true;
            }
            return false;
        });
        let filteredEvents2: DarkEvent[] = Events.getEvents().filter(event => {
            let searchItem = { person: darkPerson, personTime: AgeGroup.adult };
            if (Utils.isSamePerson(event.persons, searchItem)) {
                return true;
            }
            return false;
        });
        let filteredEvents3: DarkEvent[] = Events.getEvents().filter(event => {
            let searchItem = { person: darkPerson, personTime: AgeGroup.old };
            if (Utils.isSamePerson(event.persons, searchItem)) {
                return true;
            }
            return false;
        });

        //sort each
        //TODO

        filteredEvents = [];
        filteredEvents = filteredEvents.concat(filteredEvents1);
        filteredEvents = filteredEvents.concat(filteredEvents2);
        filteredEvents = filteredEvents.concat(filteredEvents3);


        $('#dark-container .timeline').empty();

        let prevDate = '';
        let prevI = 0;
        let iterator = 0;
        filteredEvents.forEach(event => {
            iterator = iterator + 1;
            let worldTimeInMillis: Date = new Date(event.worldTimeInMillis);
            let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();

            let date = "date_" + worldTimeInMillis.getDate() + "_" + monthAndYear;
            let suffix = iterator;

            if (prevDate == date) {
                suffix = prevI;
                date = date + '' + suffix;
            } else {
                prevDate = date;
                prevI = iterator;

                suffix = iterator;
                date = date + '' + suffix;
                $('#dark-container .timeline').append(Parser.getDateHtml2(event, date))
            }

            $("#" + date).append(Parser.getEventHtml(event));

        })
    }

}