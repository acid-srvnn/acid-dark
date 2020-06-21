/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { Episode1 } from './events/season1/episode1';
import { DarkEvent } from './models/interfaces/darkEvent';
import { Episode2 } from './events/season1/episode2';
import { Parser } from './parser';
import { DarkPersons } from './models/constants/darkPersons';
import { DarkPerson } from './models/interfaces/darkPerson';
import { AgeGroup } from './models/constants/enum/ageGroup';
import { DarkPersonInDarkEvent } from './models/interfaces/darkPersonIndarkEvent';
import { Episode3 } from './events/season1/episode3';
import { Episode4 } from './events/season1/episode4';
import { Episode5 } from './events/season1/episode5';
import { Episode6 } from './events/season1/episode6';
import { Episode7 } from './events/season1/episode7';
import { Episode8 } from './events/season1/episode8';
import { Episode9 } from './events/season1/episode9';
import { Episode10 } from './events/season1/episode10';

let events: DarkEvent[] = [];
events = events.concat((new Episode1).getEvents());
events = events.concat((new Episode2).getEvents());
events = events.concat((new Episode3).getEvents());
events = events.concat((new Episode4).getEvents());
events = events.concat((new Episode5).getEvents());
events = events.concat((new Episode6).getEvents());
events = events.concat((new Episode7).getEvents());
events = events.concat((new Episode8).getEvents());
events = events.concat((new Episode9).getEvents());
events = events.concat((new Episode10).getEvents());

declare global {
  interface Window {
    showEventDetails: any;
    showPersonDetails: any;
    changeTime: any;
  }
}

window.showEventDetails = function (episodeTime: number) {
  let res = events.filter(event => {
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

function isSamePerson(persons: DarkPersonInDarkEvent[], searchItem: DarkPersonInDarkEvent): boolean {
  let res = persons.filter(person => {
    if (person.person == searchItem.person && person.personTime == searchItem.personTime) {
      return true;
    }
    return false;
  });
  return res.length > 0;
}

window.changeTime = function (order: string) {

  let filteredEvents: DarkEvent[] = [];

  if (order === 'world') {
    filteredEvents = events.sort((a, b) => {
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


  } else if (order === 'mikkel') {
    personTimeline(DarkPersons.mikkelNielsen);
  } else if (order === 'jonas') {
    personTimeline(DarkPersons.jonasKahnwald);
  }

}

function personTimeline(darkPerson: DarkPerson) {
  let filteredEvents = events.sort((a, b) => {
    return (a.worldTimeInMillis >= b.worldTimeInMillis) ? 1 : -1
  });

  let filteredEvents1: DarkEvent[] = filteredEvents.filter(event => {
    let searchItem = { person: darkPerson, personTime: AgeGroup.young };
    if (isSamePerson(event.persons, searchItem)) {
      return true;
    }
    return false;
  });
  let filteredEvents2: DarkEvent[] = events.filter(event => {
    let searchItem = { person: darkPerson, personTime: AgeGroup.adult };
    if (isSamePerson(event.persons, searchItem)) {
      return true;
    }
    return false;
  });
  let filteredEvents3: DarkEvent[] = events.filter(event => {
    let searchItem = { person: darkPerson, personTime: AgeGroup.old };
    if (isSamePerson(event.persons, searchItem)) {
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


window.changeTime('world');