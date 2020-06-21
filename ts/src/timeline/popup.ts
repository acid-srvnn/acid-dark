import { Events } from "./events";
import { Parser } from "./parser";
import { DarkPerson } from "../models/interfaces/darkPerson";

export class Popup {

    public static definePopupFunctions() {

        window.showEventDetails = function (episodeTime: number) {
            let res = Events.getEvents().filter(event => {
                return event.episodeTime.number === episodeTime;
            });
            $('#dark-event-modal').empty();
            $('#dark-event-modal').append(Parser.getEventModalHtml(res[0]));
            $('#dark-event-modal .modal').modal('show');
        }

        window.showPersonDetails = function (person: DarkPerson) {
            $('#dark-event-modal').empty();
            $('#dark-event-modal').append(Parser.getPersonModalHtml(person));
            $('#dark-event-modal .modal').modal('show');
        }

    }

}