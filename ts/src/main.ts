/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import template from 'lodash/template';
import { Episode1 } from './events/season1/episode1';
import { DarkEvent } from './models/interfaces/darkEvent';
import { Episode2 } from './events/season1/episode2';
import { Parser } from './parser';



const outputElement = document.getElementById('output');
if (outputElement) {
  var compiled = template(`
    Built at: <%- dateTimeString %>
  `.trim());
  outputElement.innerHTML = compiled({
    dateTimeString: new Date().toISOString(),
  });
}

let events: DarkEvent[] = [];
events = events.concat((new Episode1).getEvents());
events = events.concat((new Episode2).getEvents());

events.forEach(event => {

  let worldTimeInMillis: Date = new Date(event.worldTimeInMillis);
  let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();

  if (!$("#" + monthAndYear).length) {
    $('#dark-container .timeline').append(Parser.getMonthAndYearHtml(event))
  }

  let date = "date_" + worldTimeInMillis.getDate();

  if (!$("#" + date).length) {
    $("#" + monthAndYear).append(Parser.getDateHtml(event))
  }

  $("#" + date).append(Parser.getEventHtml(event));

})
