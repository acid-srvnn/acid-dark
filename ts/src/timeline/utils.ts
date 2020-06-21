import { DarkPersonInDarkEvent } from "../models/interfaces/darkPersonIndarkEvent";

export class Utils {

    public static isSamePerson(persons: DarkPersonInDarkEvent[], searchItem: DarkPersonInDarkEvent): boolean {
        let res = persons.filter(person => {
            if (person.person == searchItem.person && person.personTime == searchItem.personTime) {
                return true;
            }
            return false;
        });
        return res.length > 0;
    }

}