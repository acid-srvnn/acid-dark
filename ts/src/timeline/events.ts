import { DarkEvent } from "../models/interfaces/darkEvent";
import { Episode1 } from "../events/season1/episode1";
import { Episode2 } from "../events/season1/episode2";
import { Episode3 } from "../events/season1/episode3";
import { Episode4 } from "../events/season1/episode4";
import { Episode5 } from "../events/season1/episode5";
import { Episode6 } from "../events/season1/episode6";
import { Episode7 } from "../events/season1/episode7";
import { Episode8 } from "../events/season1/episode8";
import { Episode9 } from "../events/season1/episode9";
import { Episode10 } from "../events/season1/episode10";
import { S0201 } from "../events/season2/s0201";
import { S0202 } from "../events/season2/s0202";
import { S0203 } from "../events/season2/s0203";

export class Events {
    static events: DarkEvent[] = [];

    public static initialize() {
        Events.events = Events.events.concat((new Episode1).getEvents());
        Events.events = Events.events.concat((new Episode2).getEvents());
        Events.events = Events.events.concat((new Episode3).getEvents());
        Events.events = Events.events.concat((new Episode4).getEvents());
        Events.events = Events.events.concat((new Episode5).getEvents());
        Events.events = Events.events.concat((new Episode6).getEvents());
        Events.events = Events.events.concat((new Episode7).getEvents());
        Events.events = Events.events.concat((new Episode8).getEvents());
        Events.events = Events.events.concat((new Episode9).getEvents());
        Events.events = Events.events.concat((new Episode10).getEvents());

        Events.events = Events.events.concat((new S0201).getEvents());
        Events.events = Events.events.concat((new S0202).getEvents());
        Events.events = Events.events.concat((new S0203).getEvents());
    }

    public static getEvents() {
        return Events.events;
    }
}