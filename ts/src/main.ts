/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { Episode1 } from './events/season1/episode1';
import { DarkEvent } from './models/interfaces/darkEvent';
import { Episode2 } from './events/season1/episode2';
import { Parser } from './parser';

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
