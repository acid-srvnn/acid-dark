import { DarkPerson } from "../interfaces/darkPerson";
import { DarkFamily } from "./enum/darkFamily";
import { DarkPersonPhoto } from "../interfaces/darkPersonPhoto";
import { AgeGroup } from "./enum/ageGroup";

export class DarkPersons {

    static unknownPerson: DarkPerson = {
        name: "Unknown",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("unknownperson", [AgeGroup.young]),
        father: undefined,
        mother: undefined
    }

    //Persons from Unknown families 

    static gretchen: DarkPerson = {
        name: "Gretchen",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("gretchen", [AgeGroup.young]),
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
        photos: new DarkPersonPhoto("torbenwoller", [AgeGroup.adult]),
        father: DarkPersons.bernadette,
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
        photos: new DarkPersonPhoto("sebastiankruger", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static hgTannhaus: DarkPerson = {
        name: "H.G. Tannhaus",
        family: DarkFamily.Unknown,
        photos: new DarkPersonPhoto("hgtannhaus", [AgeGroup.adult, AgeGroup.old]),
        father: undefined,
        mother: undefined
    }

    static jurgenObendorf: DarkPerson = {
        name: "Jürgen Obendorf",
        family: DarkFamily.Obendorf,
        photos: new DarkPersonPhoto("jurgenobendorf", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static erikObendorf: DarkPerson = {
        name: "Erik Obendorf",
        family: DarkFamily.Obendorf,
        photos: new DarkPersonPhoto("erikobendorf", [AgeGroup.young]),
        father: DarkPersons.jurgenObendorf,
        mother: undefined
    }

    static yasinFriese: DarkPerson = {
        name: "Yasin Friese",
        family: DarkFamily.Friese,
        photos: new DarkPersonPhoto("yasinfriese", [AgeGroup.young]),
        father: undefined,
        mother: undefined
    }

    //Persons from Nielsen Family

    static agnesNielsen: DarkPerson = {
        name: "Agnes Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("agnesnielsen", [AgeGroup.adult]),
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
        photos: new DarkPersonPhoto("trontenielsen", undefined),
        father: undefined,
        mother: DarkPersons.agnesNielsen
    }

    static janaNielsen: DarkPerson = {
        name: "Jana Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("jananielsen", undefined),
        father: undefined,
        mother: undefined
    }

    static ulrichNielsen: DarkPerson = {
        name: "Ulrich Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("ulrichnielsen", undefined),
        father: DarkPersons.tronteNielsen,
        mother: DarkPersons.janaNielsen
    }

    static madsNielsen: DarkPerson = {
        name: "Mads Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("madsnielsen", [AgeGroup.young]),
        father: DarkPersons.tronteNielsen,
        mother: DarkPersons.janaNielsen
    }

    static katarinaNielsen: DarkPerson = {
        name: "Katarina Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("katarinanielsen", [AgeGroup.young, AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static magnusNielsen: DarkPerson = {
        name: "Magnus Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("magnusnielsen", [AgeGroup.young, AgeGroup.old]),
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen
    }

    static marthaNielsen: DarkPerson = {
        name: "Martha Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("marthanielsen", [AgeGroup.young]),
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen
    }

    static mikkelNielsen: DarkPerson = {
        name: "Mikkel Nielsen",
        family: DarkFamily.Nielsen,
        photos: new DarkPersonPhoto("mikkelnielsen", [AgeGroup.young, AgeGroup.adult]),
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen,
        altName: ["Michael Khanwald"]
    }

    //Persons from Kahnwald Family

    static danielKahnwald: DarkPerson = {
        name: "Daniel Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("danielkahnwald", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static inesKahnwald: DarkPerson = {
        name: "Ines Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("ineskahnwald", undefined),
        father: DarkPersons.danielKahnwald,
        mother: undefined
    }

    static michaelKahnwald: DarkPerson = {
        name: "Michael Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("michaelkahnwald", [AgeGroup.young, AgeGroup.adult]),
        father: undefined,
        mother: DarkPersons.inesKahnwald
    }

    static hannahKahnwald: DarkPerson = {
        name: "Hannah Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("hannahkahnwald", [AgeGroup.young, AgeGroup.adult]),
        father: DarkPersons.sebastianKruger,
        mother: undefined
    }

    static jonasKahnwald: DarkPerson = {
        name: "Jonas Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: new DarkPersonPhoto("jonaskahnwald", undefined),
        father: DarkPersons.michaelKahnwald,
        mother: DarkPersons.hannahKahnwald
    }

    //Persons from Doppler Family    

    static berndDoppler: DarkPerson = {
        name: "Bernd Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("bernddoppler", [AgeGroup.adult, AgeGroup.old]),
        father: undefined,
        mother: undefined
    }

    static gretaDoppler: DarkPerson = {
        name: "Greta Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("gretadoppler", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static helgeDoppler: DarkPerson = {
        name: "Helge Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("helgedoppler", undefined),
        father: DarkPersons.berndDoppler,
        mother: DarkPersons.gretaDoppler
    }

    static peterDoppler: DarkPerson = {
        name: "Peter Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("peterdoppler", [AgeGroup.adult]),
        father: DarkPersons.helgeDoppler,
        mother: undefined
    }

    static charlotteDoppler: DarkPerson = {
        name: "Charlotte Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("charlottedoppler", [AgeGroup.young, AgeGroup.adult]),
        father: DarkPersons.noah,
        mother: undefined
    }

    static franziskaDoppler: DarkPerson = {
        name: "Franziska Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("franziskadoppler", [AgeGroup.young, AgeGroup.old]),
        father: DarkPersons.peterDoppler,
        mother: DarkPersons.charlotteDoppler
    }

    static elisabethDoppler: DarkPerson = {
        name: "Elisabeth Doppler",
        family: DarkFamily.Doppler,
        photos: new DarkPersonPhoto("elisabethdoppler", [AgeGroup.young, AgeGroup.adult]),
        father: DarkPersons.peterDoppler,
        mother: DarkPersons.charlotteDoppler
    }

    //Persons from Tiedemann Family

    static egonTiedemann: DarkPerson = {
        name: "Egon Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("egontiedemann", [AgeGroup.adult, AgeGroup.old]),
        father: undefined,
        mother: undefined
    }

    static dorisTiedemann: DarkPerson = {
        name: "Doris Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("doristiedemann", [AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static claudiaTiedemann: DarkPerson = {
        name: "Claudia Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("claudiatiedemann", undefined),
        father: DarkPersons.egonTiedemann,
        mother: DarkPersons.dorisTiedemann
    }

    static reginaTiedemann: DarkPerson = {
        name: "Regina Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("reginatiedemann", [AgeGroup.young, AgeGroup.adult]),
        father: undefined,
        mother: DarkPersons.claudiaTiedemann
    }

    static aleksanderTiedemann: DarkPerson = {
        name: "Aleksander Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("aleksandertiedemann", [AgeGroup.young, AgeGroup.adult]),
        father: undefined,
        mother: undefined
    }

    static bartoszTiedemann: DarkPerson = {
        name: "Bartosz Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: new DarkPersonPhoto("bartosztiedemann", [AgeGroup.young]),
        father: DarkPersons.aleksanderTiedemann,
        mother: DarkPersons.reginaTiedemann
    }


}