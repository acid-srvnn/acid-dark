import { DarkEvent } from "../models/interfaces/darkEvent";

export abstract class EventsProvider {
    public abstract getEvents(): DarkEvent[]
}
