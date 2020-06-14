import { DarkEvent } from "./models/interfaces/darkEvent";
import { DarkPersonInDarkEvent } from "./models/interfaces/darkPersonIndarkEvent";
import { TimeTravel } from "./models/interfaces/timeTravel";
import { TimeTravelInDarkEvent } from "./models/interfaces/timeTravelInDarkEvent";
import { TimeTravelType } from "./models/constants/enum/timeTravelType";

export class Parser {

    static monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    static getDateHtml(event: DarkEvent): string | Element | JQuery<HTMLElement> | DocumentFragment | (Element | DocumentFragment)[] {
        let returnStr = "" +
            "<div class='timeline-section'>" +
            "   <div class='timeline-date'>" +
            "   %%DATESTR%%" +
            "   </div>" +
            "   <div id='%%DATE%%' class='row'>" +
            "   </div>" +
            "</div>";
        let worldTimeInMillis: Date = new Date(event.worldTimeInMillis);
        let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();
        let date = "date_" + worldTimeInMillis.getDate() + "_" + monthAndYear;
        let dateStr = Parser.monthNames[worldTimeInMillis.getMonth()] + " " + worldTimeInMillis.getDate().toString() + ", " + worldTimeInMillis.getFullYear();
        returnStr = returnStr.replace("%%DATESTR%%", dateStr);
        returnStr = returnStr.replace("%%DATE%%", date);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    static getMonthAndYearHtml(event: DarkEvent): string {
        let returnStr = "" +
            "<div id='%%ID%%' class='timeline-month'>" +
            "%%MONTHANDYEAR%%" +
            "</div>";
        let worldTimeInMillis: Date = new Date(event.worldTimeInMillis);
        let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();
        let monthAndYearStr = Parser.monthNames[worldTimeInMillis.getMonth()] + ", " + worldTimeInMillis.getFullYear();
        returnStr = returnStr.replace("%%MONTHANDYEAR%%", monthAndYearStr);
        returnStr = returnStr.replace("%%ID%%", monthAndYear);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    public static getEventHtml(event: DarkEvent): string {
        let returnStr = "" +
            "<div class='col-sm-4'>" +
            "   <div class='timeline-box'>" +
            "       <div class='box-title'>" +
            "           <i class='fa fa-asterisk text-success' aria - hidden='true' > </i>" +
            "           %%TITLE%%" +
            "       </div>" +
            "       <div class='box-content' style='height:100px'>" +
            "           <a class='btn btn-xs btn-default pull-right' > Details </a>" +
            "           <div class='box-item'> %%DESCRIPTION%% </div>" +
            "       </div>" +
            "       %%TIMETRAVELS%%" +
            "       <div class='box-footer'> %%PERSONS%% </div>" +
            "   </div>" +
            "</div>";
        returnStr = returnStr.replace("%%TITLE%%", event.title);
        let des = event.description;
        if (des.length > 100) {
            des = des.substring(0, 100) + '...'
        }
        returnStr = returnStr.replace("%%DESCRIPTION%%", des);
        let timeTravels = '';
        if (event.timeTravels) {
            event.timeTravels.forEach(timeTravel => {
                timeTravels = timeTravels + Parser.getTimeTravelHtml(timeTravel);
            });
        }
        returnStr = returnStr.replace("%%TIMETRAVELS%%", timeTravels);
        let persons = '';
        event.persons.forEach(person => {
            persons = persons + '<img src="' + Parser.getPersonImage(person) + '" style="padding: 1px;width: 30px;height: 30px;" title="' + person.person.name + '"> ';
        });
        returnStr = returnStr.replace("%%PERSONS%%", persons);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    static getTimeTravelHtml(timeTravel: TimeTravelInDarkEvent) {
        let returnStr = "" +
            "<div class='%%CLASS%%' > %%PERSONS%% </div>";
        let persons = '';
        timeTravel.timeTravel.persons.forEach(person => {
            persons = persons + '<img src="' + Parser.getPersonImage(person) + '" style="padding: 1px;width: 30px;height: 30px;" title="' + person.person.name + '"> ';
        });
        returnStr = returnStr.replace("%%PERSONS%%", persons);
        if (timeTravel.type == TimeTravelType.in) {
            returnStr = returnStr.replace("%%CLASS%%", 'box-footer-time-in');
        } else {
            returnStr = returnStr.replace("%%CLASS%%", 'box-footer-time-out');
        }
        return returnStr;
    }

    static getPersonImage(person: DarkPersonInDarkEvent): string {
        if (person.person.photos[1]) {
            return person.person.photos[1].url;
        } else if (person.person.photos[0]) {
            return person.person.photos[0].url;
        } else if (person.person.photos[2]) {
            return person.person.photos[2].url;
        } else {
            return '/acid/assets/unknownperson.jpg';
        }
    }
}