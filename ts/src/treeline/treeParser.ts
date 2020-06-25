import { DarkPerson } from "../models/interfaces/darkPerson";

export class TreeParser {

    public static getTreePerson(person: DarkPerson) {
        let returnStr = "" +
            "<div class&#61;'card'>" +
            "   <div>" +
            "        %%IMAGE0%%" +
            "        %%IMAGE1%%" +
            "        %%IMAGE2%%" +
            "    </div>" +
            "    <div class&#61;'card-body'>" +
            "        <p class&#61;'card-text'> %%NAME%% </p>" +
            "    </div>" +
            "</div>";
        let imgStr = "<img src&#61;'%%IMAGE%%' class&#61;'card-img'>";
        if (person.photos.young) {
            returnStr = returnStr.replace("%%IMAGE0%%", imgStr.replace("%%IMAGE%%", person.photos.young.split('/').join('&#47;')));
        } else {
            returnStr = returnStr.replace("%%IMAGE0%%", "");
        }
        if (person.photos.adult) {
            returnStr = returnStr.replace("%%IMAGE1%%", imgStr.replace("%%IMAGE%%", person.photos.adult.split('/').join('&#47;')));
        } else {
            returnStr = returnStr.replace("%%IMAGE1%%", "");
        }
        if (person.photos.old) {
            returnStr = returnStr.replace("%%IMAGE2%%", imgStr.replace("%%IMAGE%%", person.photos.old.split('/').join('&#47;')));
        } else {
            returnStr = returnStr.replace("%%IMAGE2%%", "");
        }
        returnStr = returnStr.replace("%%NAME%%", person.name);
        console.log("Sending html " + returnStr);
        return returnStr;
    }

}