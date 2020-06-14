/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { Episode1 } from './events/season1/episode1';
import { DarkEvent } from './models/interfaces/darkEvent';
import { Episode2 } from './events/season1/episode2';
import { Parser } from './parser';
import { DarkPersons } from './models/constants/darkPersons';
import { DarkPerson } from './models/interfaces/darkPerson';

let events: DarkEvent[] = [];
events = events.concat((new Episode1).getEvents());
events = events.concat((new Episode2).getEvents());

events.sort((a, b) => {
  return (a.worldTimeInMillis > b.worldTimeInMillis) ? 1 : -1
});

events.forEach(event => {

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


declare global {
  interface Window {
    showEventDetails: any;
    showPersonDetails: any;
  }
}

window.showEventDetails = function (episodeTime: number) {
  let res = events.filter(event => {
    return event.episodeTime === episodeTime;
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