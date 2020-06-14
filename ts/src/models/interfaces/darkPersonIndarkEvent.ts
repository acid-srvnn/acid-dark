import { DarkPerson } from "./darkPerson";
import { AgeGroup } from "../constants/enum/ageGroup";

export interface DarkPersonInDarkEvent {
    person: DarkPerson,
    personTime: AgeGroup
}