import { DarkPerson } from "../models/interfaces/darkPerson";

export class TreeParser {

    public static getTreePerson(person: DarkPerson) {
        let returnStr = "" +
            "<div class&#61;'card'>" +
            "   <div>" +
            "        <img src&#61;'%%IMAGE0%%' class&#61;'card-img'>" +
            "        <img src&#61;'%%IMAGE1%%' class&#61;'card-img'>" +
            "        <img src&#61;'%%IMAGE2%%' class&#61;'card-img'>" +
            "    </div>" +
            "    <div class&#61;'card-body'>" +
            "        <p class&#61;'card-text'> %%NAME%% </p>" +
            "    </div>" +
            "</div>";
        returnStr = returnStr.replace("%%IMAGE0%%", person.photos.young == undefined ? '' : person.photos.young.split('/').join('&#47;'));
        returnStr = returnStr.replace("%%IMAGE1%%", person.photos.adult == undefined ? '' : person.photos.adult.split('/').join('&#47;'));
        returnStr = returnStr.replace("%%IMAGE2%%", person.photos.old == undefined ? '' : person.photos.old.split('/').join('&#47;'));
        returnStr = returnStr.replace("%%NAME%%", person.name);
        console.log("Sending html " + returnStr);
        return returnStr;
    }

}