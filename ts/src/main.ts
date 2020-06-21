/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { DarkPersons } from './models/constants/darkPersons';
import { Events } from './timeline/events';
import { Popup } from './timeline/popup';
import { EventRenderer } from './timeline/eventRenderer';

declare global {
  interface Window {
    showEventDetails: any;
    showPersonDetails: any;
    changeTime: any;
  }
}

Events.initialize();
Popup.definePopupFunctions();

window.changeTime = function (order: string) {
  if (order === 'world') {
    EventRenderer.worldTimeline();
  } else if (order === 'mikkel') {
    EventRenderer.personTimeline(DarkPersons.mikkelNielsen);
  } else if (order === 'jonas') {
    EventRenderer.personTimeline(DarkPersons.jonasKahnwald);
  }
}

window.changeTime('world');