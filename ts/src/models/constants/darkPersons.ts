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

    static inesKahnwald: DarkPerson = {
        name: "Ines Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: undefined, //TODO
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
        father: undefined, //TODO
        mother: undefined
    }

    static jonasKahnwald: DarkPerson = {
        name: "Jonas Kahnwald",
        family: DarkFamily.Kahnwald,
        photos: [],
        father: DarkPersons.michaelKahnwald,
        mother: DarkPersons.hannahKahnwald
    }

    static helgeDoppler: DarkPerson = {
        name: "Helge Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: undefined, //TODO
        mother: undefined //TODO
    }

    static peterDoppler: DarkPerson = {
        name: "Peter Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: DarkPersons.helgeDoppler,
        mother: undefined
    }


    static bartoszTiedemann: DarkPerson = {
        name: "Bartosz Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static charlotteDoppler: DarkPerson = {
        name: "Charlotte Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }

    static franziskaDoppler: DarkPerson = {
        name: "Franziska Doppler",
        family: DarkFamily.Doppler,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }


    static reginaTiedemann: DarkPerson = {
        name: "Regina Tiedemann",
        family: DarkFamily.Tiedemann,
        photos: [],
        father: undefined, //TODO
        mother: undefined
    }
}