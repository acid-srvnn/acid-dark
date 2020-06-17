import { DarkPerson } from "../interfaces/darkPerson";
import { DarkFamily } from "./enum/darkFamily";

export class DarkPersons {

    static unknownPerson: DarkPerson = {
        name: "Unknown",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined,
        mother: undefined
    }

    //Persons from Unknown families   
    
    static bernadette: DarkPerson = {
        name: "Bernadette",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static torbenWoller: DarkPerson = {
        name: "Torben Woller",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static silja: DarkPerson = {
        name: "Silja",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static clausen: DarkPerson = {
        name: "Clausen",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static sebastianKruger: DarkPerson = {
        name: "Sebastian Kruger",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }
    
    static hgTannhaus: DarkPerson = {
        name: "H.G. Tannhaus",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }
    
    static jurgenObendorf: DarkPerson = {
        name: "Jürgen Obendorf",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static erikObendorf: DarkPerson = {
        name: "Erik Obendorf",
        family: DarkFamily.Unknown,
        photos: [],
        father: DarkPersons.jurgenObendorf,
        mother: undefined
    }

    static yasinFriese: DarkPerson = {
        name: "Yasin Friese",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    //Persons from Nielsen Family

    static agnesNielsen: DarkPerson = {
        name: "Agnes Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: undefined,
        mother: undefined
    }

    static noah: DarkPerson = {
        name: "Noah",
        family: DarkFamily.Unknown,
        photos: [],
        father: undefined,
        mother: undefined,
        altName: ["Hanno Noah Tauber"]
    }

    static tronteNielsen: DarkPerson = {
        name: "Tronte Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: undefined,
        mother: DarkPersons.agnesNielsen
    }

    static janaNielsen: DarkPerson = {
        name: "Jana Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: undefined,
        mother: undefined
    }

    static ulrichNielsen: DarkPerson = {
        name: "Ulrich Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: DarkPersons.tronteNielsen,
        mother: DarkPersons.janaNielsen
    }

    static madsNielsen: DarkPerson = {
        name: "Mads Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: DarkPersons.tronteNielsen,
        mother: DarkPersons.janaNielsen
    }

    static katarinaNielsen: DarkPerson = {
        name: "Katarina Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: undefined,
        mother: undefined
    }

    static magnusNielsen: DarkPerson = {
        name: "Magnus Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen
    }

    static marthaNielsen: DarkPerson = {
        name: "Martha Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen
    }

    static mikkelNielsen: DarkPerson = {
        name: "Mikkel Nielsen",
        family: DarkFamily.Nielsen,
        photos: [],
        father: DarkPersons.ulrichNielsen,
        mother: DarkPersons.katarinaNielsen,
        altName: ["Michael Khanwald"]
    }
    
    //Persons from Kahnwald Family

    static danielKahnwald: DarkPerson = {
        name: "Daniel Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static inesKahnwald: DarkPerson = {
        name: "Ines Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: DarkPersons.danielKahnwald, 
        mother: undefined
    }

    static michaelKahnwald: DarkPerson = {
        name: "Michael Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: undefined, //TODO
        mother: DarkPersons.inesKahnwald
    }

    static hannahKahnwald: DarkPerson = {
        name: "Hannah Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: DarkPersons.sebastianKruger,
        mother: undefined
    }

    static jonasKahnwald: DarkPerson = {
        name: "Jonas Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: DarkPersons.michaelKahnwald,
        mother: DarkPersons.hannahKahnwald
    }

    //Persons from Doppler Family    
    
    static berndDoppler: DarkPerson = {
        name: "Bernd Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: undefined, //TODO
        mother: undefined //TODO
    }

    static gretaDoppler: DarkPerson = {
        name: "Greta Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: undefined, //TODO
        mother: undefined //TODO
    }

    static helgeDoppler: DarkPerson = {
        name: "Helge Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: DarkPersons.berndDoppler,
        mother: DarkPersons.gretaDoppler
    }

    static peterDoppler: DarkPerson = {
        name: "Peter Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: DarkPersons.helgeDoppler,
        mother: undefined
    }

    static charlotteDoppler: DarkPerson = {
        name: "Charlotte Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: DarkPersons.noah,
        mother: undefined
    }

    static franziskaDoppler: DarkPerson = {
        name: "Franziska Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: DarkPersons.peterDoppler,
        mother: DarkPersons.charlotteDoppler
    }

    static elisabethDoppler: DarkPerson = {
        name: "Elisabeth Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: DarkPersons.peterDoppler,
        mother: DarkPersons.charlotteDoppler
    }

    //Persons from Tiedemann Family

    static egonTiedemann: DarkPerson = {
        name: "Egon Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static dorisTiedemann: DarkPerson = {
        name: "Doris Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static claudiaTiedemann: DarkPerson = {
        name: "Claudia Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: DarkPersons.egonTiedemann,
        mother: DarkPersons.dorisTiedemann
    }

    static reginaTiedemann: DarkPerson = {
        name: "Regina Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: undefined, //TODO
        mother: DarkPersons.claudiaTiedemann
    }

    static aleksanderTiedemann: DarkPerson = {
        name: "Aleksander Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static bartoszTiedemann: DarkPerson = {
        name: "Bartosz Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: DarkPersons.aleksanderTiedemann,
        mother: DarkPersons.reginaTiedemann
    }

    
}