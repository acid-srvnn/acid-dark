import { DarkPerson } from "../interfaces/darkPerson";
import { DarkFamily } from "./enum/darkFamily";
import { DarkPersonPhoto } from "../interfaces/darkPersonPhoto";
import { AgeGroup } from "./enum/ageGroup";

export class DarkPersons {

    static unknownPerson: DarkPerson = {
        name: "Unknown",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("unknownPerson", [AgeGroup.young]),
        father: undefined,
        mother: undefined
    }

    //Persons from Unknown families 

    static gretchen: DarkPerson = {
        name: "Gretchen",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("gretchen", undefined),
        father: undefined,
        mother: undefined
    }

    static bernadette: DarkPerson = {
        name: "Bernadette",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("bernadette", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static torbenWoller: DarkPerson = {
        name: "Torben Woller",
        family: DarkFamily.Woller,
        photos: new DarkPersonPhoto("torbenWoller", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static silja: DarkPerson = {
        name: "Silja",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("silja", [AgeGroup.young]),
        father: undefined,
        mother: undefined
    }

    static clausen: DarkPerson = {
        name: "Clausen",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("clausen", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static sebastianKruger: DarkPerson = {
        name: "Sebastian Kruger",
        family: DarkFamily.Kruger,
        photos: new DarkPersonPhoto("sebastianKruger", undefined),
        father: undefined,
        mother: undefined
    }

    static hgTannhaus: DarkPerson = {
        name: "H.G. Tannhaus",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("hgTannhaus", undefined),
        father: undefined,
        mother: undefined
    }

    static jurgenObendorf: DarkPerson = {
        name: "Jürgen Obendorf",
        family: DarkFamily.Obendorf,
        photos: new DarkPersonPhoto("jurgenObendorf", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static erikObendorf: DarkPerson = {
        name: "Erik Obendorf",
        family: DarkFamily.Obendorf,
        photos: new DarkPersonPhoto("erikObendorf", undefined),
        father: DarkPersons.jurgenObendorf,
        mother: undefined
    }

    static yasinFriese: DarkPerson = {
        name: "Yasin Friese",
        family: DarkFamily.Friese,
        photos: new DarkPersonPhoto("yasinFriese", undefined),
        father: undefined,
        mother: undefined
    }

    //Persons from Nielsen Family

    static agnesNielsen: DarkPerson = {
        name: "Agnes Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("agnesNielsen", undefined),
        father: undefined,
        mother: undefined
    }

    static noah: DarkPerson = {
        name: "Noah",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("noah", undefined),
        father: undefined,
        mother: undefined,
        altName: ["Hanno Noah Tauber"]
    }

    static tronteNielsen: DarkPerson = {
        name: "Tronte Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("tronteNielsen", undefined),
        father: undefined,
        mother: DarkPersons.agnesNielsen
    }

    static janaNielsen: DarkPerson = {
        name: "Jana Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("janaNielsen", undefined),
        father: undefined,
        mother: undefined
    }

    static ulrichNielsen: DarkPerson = {
        name: "Ulrich Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("ulrichNielsen", undefined),
        father: DarkPersons.tronteNielsen,
        mother: DarkPersons.janaNielsen
    }

    static madsNielsen: DarkPerson = {
        name: "Mads Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("madsNielsen", undefined),
        father: DarkPersons.tronteNielsen,
        mother: DarkPersons.janaNielsen
    }

    static katarinaNielsen: DarkPerson = {
        name: "Katarina Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("katarinaNielsen", undefined),
        father: undefined,
        mother: undefined
    }

    static magnusNielsen: DarkPerson = {
        name: "Magnus Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("magnusNielsen", undefined),
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen
    }

    static marthaNielsen: DarkPerson = {
        name: "Martha Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("marthaNielsen", undefined),
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen
    }

    static mikkelNielsen: DarkPerson = {
        name: "Mikkel Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("mikkelNielsen", undefined),
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen,
        altName: ["Michael Khanwald"]
    }

    //Persons from Kahnwald Family

    static danielKahnwald: DarkPerson = {
        name: "Daniel Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("danielKahnwald", undefined),
        father: undefined,
        mother: undefined
    }

    static inesKahnwald: DarkPerson = {
        name: "Ines Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("inesKahnwald", undefined),
        father: DarkPersons.danielKahnwald,
        mother: undefined
    }

    static michaelKahnwald: DarkPerson = {
        name: "Michael Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("michaelKahnwald", undefined),
        father: undefined,
        mother: DarkPersons.inesKahnwald
    }

    static hannahKahnwald: DarkPerson = {
        name: "Hannah Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("hannahKahnwald", undefined),
        father: DarkPersons.sebastianKruger,
        mother: undefined
    }

    static jonasKahnwald: DarkPerson = {
        name: "Jonas Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("jonasKahnwald", undefined),
        father: DarkPersons.michaelKahnwald,
        mother: DarkPersons.hannahKahnwald
    }

    //Persons from Doppler Family    

    static berndDoppler: DarkPerson = {
        name: "Bernd Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("berndDoppler", undefined),
        father: undefined,
        mother: undefined
    }

    static gretaDoppler: DarkPerson = {
        name: "Greta Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("gretaDoppler", undefined),
        father: undefined,
        mother: undefined
    }

    static helgeDoppler: DarkPerson = {
        name: "Helge Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("helgeDoppler", undefined),
        father: DarkPersons.berndDoppler,
        mother: DarkPersons.gretaDoppler
    }

    static peterDoppler: DarkPerson = {
        name: "Peter Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("peterDoppler", undefined),
        father: DarkPersons.helgeDoppler,
        mother: undefined
    }

    static charlotteDoppler: DarkPerson = {
        name: "Charlotte Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("charlotteDoppler", undefined),
        father: DarkPersons.noah,
        mother: undefined
    }

    static franziskaDoppler: DarkPerson = {
        name: "Franziska Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("franziskaDoppler", undefined),
        father: DarkPersons.peterDoppler,
        mother: DarkPersons.charlotteDoppler
    }

    static elisabethDoppler: DarkPerson = {
        name: "Elisabeth Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("elisabethDoppler", undefined),
        father: DarkPersons.peterDoppler,
        mother: DarkPersons.charlotteDoppler
    }

    //Persons from Tiedemann Family

    static egonTiedemann: DarkPerson = {
        name: "Egon Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("egonTiedemann", undefined),
        father: undefined,
        mother: undefined
    }

    static dorisTiedemann: DarkPerson = {
        name: "Doris Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("dorisTiedemann", undefined),
        father: undefined,
        mother: undefined
    }

    static claudiaTiedemann: DarkPerson = {
        name: "Claudia Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("claudiaTiedemann", undefined),
        father: DarkPersons.egonTiedemann,
        mother: DarkPersons.dorisTiedemann
    }

    static reginaTiedemann: DarkPerson = {
        name: "Regina Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("reginaTiedemann", undefined),
        father: undefined,
        mother: DarkPersons.claudiaTiedemann
    }

    static aleksanderTiedemann: DarkPerson = {
        name: "Aleksander Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("aleksanderTiedemann", undefined),
        father: undefined,
        mother: undefined
    }

    static bartoszTiedemann: DarkPerson = {
        name: "Bartosz Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("bartoszTiedemann", undefined),
        father: DarkPersons.aleksanderTiedemann,
        mother: DarkPersons.reginaTiedemann
    }


}