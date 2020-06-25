import { TreeParser } from "./treeParser";
import { DarkPersons } from "../models/constants/darkPersons";

export class TreeRenderer {

    public static getTree2s() {
        let strToAppend = '' + '\n';
        strToAppend += 'graph TD' + '\n';

        //subgraph Nielsen - start
        strToAppend += 'subgraph Nielsen' + '\n';

        //gen0
        strToAppend += 'nielsenHead[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';

        //gen1
        strToAppend += 'agnesNielsen[' + TreeParser.getTreePerson(DarkPersons.agnesNielsen) + ']' + '\n';
        strToAppend += 'agnesNielsenHusband[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'agnesNielsenXagnesNielsenHusband[ Married ]' + '\n';
        strToAppend += 'noah[' + TreeParser.getTreePerson(DarkPersons.noah) + ']' + '\n';

        //gen2
        strToAppend += 'tronteNielsen[' + TreeParser.getTreePerson(DarkPersons.tronteNielsen) + ']' + '\n';
        strToAppend += 'janaNielsen[' + TreeParser.getTreePerson(DarkPersons.janaNielsen) + ']' + '\n';
        strToAppend += 'tronteNielsenXjanaNielsen[ Married ]' + '\n';

        //gen3
        strToAppend += 'madsNielsen[' + TreeParser.getTreePerson(DarkPersons.madsNielsen) + ']' + '\n';
        strToAppend += 'ulrichNielsen[' + TreeParser.getTreePerson(DarkPersons.ulrichNielsen) + ']' + '\n';
        strToAppend += 'katarinaNielsen[' + TreeParser.getTreePerson(DarkPersons.katarinaNielsen) + ']' + '\n';
        strToAppend += 'ulrichNielsenXkatarinaNielsen[ Married ]' + '\n';

        //gen4
        strToAppend += 'magnusNielsen[' + TreeParser.getTreePerson(DarkPersons.magnusNielsen) + ']' + '\n';
        strToAppend += 'marthaNielsen[' + TreeParser.getTreePerson(DarkPersons.marthaNielsen) + ']' + '\n';
        strToAppend += 'mikkelNielsen[' + TreeParser.getTreePerson(DarkPersons.mikkelNielsen) + ']' + '\n';

        //connections
        strToAppend += 'nielsenHead --> agnesNielsen' + '\n';
        strToAppend += 'nielsenHead --> noah' + '\n';
        strToAppend += 'agnesNielsen --> agnesNielsenXagnesNielsenHusband' + '\n';
        strToAppend += 'agnesNielsenHusband --> agnesNielsenXagnesNielsenHusband' + '\n';
        strToAppend += 'agnesNielsenXagnesNielsenHusband --> tronteNielsen' + '\n';
        strToAppend += 'tronteNielsen --> tronteNielsenXjanaNielsen' + '\n';
        strToAppend += 'janaNielsen --> tronteNielsenXjanaNielsen' + '\n';
        strToAppend += 'tronteNielsenXjanaNielsen --> ulrichNielsen' + '\n';
        strToAppend += 'tronteNielsenXjanaNielsen --> madsNielsen' + '\n';
        strToAppend += 'ulrichNielsen --> ulrichNielsenXkatarinaNielsen' + '\n';
        strToAppend += 'katarinaNielsen --> ulrichNielsenXkatarinaNielsen' + '\n';
        strToAppend += 'ulrichNielsenXkatarinaNielsen --> magnusNielsen ' + '\n';
        strToAppend += 'ulrichNielsenXkatarinaNielsen --> marthaNielsen' + '\n';
        strToAppend += 'ulrichNielsenXkatarinaNielsen --> mikkelNielsen' + '\n';

        strToAppend += 'end' + '\n';
        //subgraph Nielsen - end

        //subgraph Khanwald - start
        strToAppend += 'subgraph Kahnwald' + '\n';

        //gen0
        strToAppend += 'kahnwaldHead[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';

        //gen1
        strToAppend += 'danielKahnwald[' + TreeParser.getTreePerson(DarkPersons.danielKahnwald) + ']' + '\n';
        strToAppend += 'danielKahnwaldWife[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'danielKahnwaldXdanielKahnwaldWife[ Married ]' + '\n';

        //gen2
        strToAppend += 'inesKahnwald[' + TreeParser.getTreePerson(DarkPersons.inesKahnwald) + ']' + '\n';
        strToAppend += 'inesKahnwaldX[ Adopted ]' + '\n';
        strToAppend += 'sebastianKruger[' + TreeParser.getTreePerson(DarkPersons.sebastianKruger) + ']' + '\n';
        strToAppend += 'sebastianKrugerWife[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'sebastianKrugerXsebastianKrugerWife[ Married ]' + '\n';

        //gen3
        strToAppend += 'michaelKahnwald[' + TreeParser.getTreePerson(DarkPersons.michaelKahnwald) + ']' + '\n';
        strToAppend += 'hannahKahnwald[' + TreeParser.getTreePerson(DarkPersons.hannahKahnwald) + ']' + '\n';
        strToAppend += 'michaelKahnwaldXhannahKahnwald[ Married ]' + '\n';

        //gen4
        strToAppend += 'jonasKahnwald[' + TreeParser.getTreePerson(DarkPersons.jonasKahnwald) + ']' + '\n';

        //connections
        strToAppend += 'kahnwaldHead --> danielKahnwald' + '\n';
        strToAppend += 'danielKahnwald --> danielKahnwaldXdanielKahnwaldWife' + '\n';
        strToAppend += 'danielKahnwaldWife --> danielKahnwaldXdanielKahnwaldWife' + '\n';
        strToAppend += 'danielKahnwaldXdanielKahnwaldWife --> inesKahnwald' + '\n';
        strToAppend += 'inesKahnwald --> inesKahnwaldX' + '\n';
        strToAppend += 'inesKahnwaldX --> michaelKahnwald' + '\n';
        strToAppend += 'sebastianKruger --> sebastianKrugerXsebastianKrugerWife' + '\n';
        strToAppend += 'sebastianKrugerWife --> sebastianKrugerXsebastianKrugerWife' + '\n';
        strToAppend += 'sebastianKrugerXsebastianKrugerWife --> hannahKahnwald' + '\n';
        strToAppend += 'michaelKahnwald --> michaelKahnwaldXhannahKahnwald' + '\n';
        strToAppend += 'hannahKahnwald --> michaelKahnwaldXhannahKahnwald' + '\n';
        strToAppend += 'michaelKahnwaldXhannahKahnwald --> jonasKahnwald' + '\n';

        strToAppend += 'end' + '\n';
        //subgraph Khanwald - end


        //subgraph Tiedemann - start
        strToAppend += 'subgraph Tiedemann' + '\n';

        //gen0
        strToAppend += 'tiedemannHead[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';

        //gen1
        strToAppend += 'egonTiedemann[' + TreeParser.getTreePerson(DarkPersons.egonTiedemann) + ']' + '\n';
        strToAppend += 'dorisTiedemann[' + TreeParser.getTreePerson(DarkPersons.dorisTiedemann) + ']' + '\n';
        strToAppend += 'egonTiedemannXdorisTiedemann[ Married ]' + '\n';

        //gen2
        strToAppend += 'claudiaTiedemann[' + TreeParser.getTreePerson(DarkPersons.claudiaTiedemann) + ']' + '\n';
        strToAppend += 'claudiaTiedemannHusband[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'claudiaTiedemannXclaudiaTiedemannHusband[ Married ]' + '\n';

        //gen3
        strToAppend += 'reginaTiedemann[' + TreeParser.getTreePerson(DarkPersons.reginaTiedemann) + ']' + '\n';
        strToAppend += 'aleksanderTiedemann[' + TreeParser.getTreePerson(DarkPersons.aleksanderTiedemann) + ']' + '\n';
        strToAppend += 'reginaTiedemannXaleksanderTiedemann[ Married ]' + '\n';

        //gen4
        strToAppend += 'bartoszTiedemann[' + TreeParser.getTreePerson(DarkPersons.bartoszTiedemann) + ']' + '\n';

        //connections
        strToAppend += 'tiedemannHead --> egonTiedemann' + '\n';
        strToAppend += 'egonTiedemann --> egonTiedemannXdorisTiedemann' + '\n';
        strToAppend += 'dorisTiedemann --> egonTiedemannXdorisTiedemann' + '\n';
        strToAppend += 'egonTiedemannXdorisTiedemann --> claudiaTiedemann' + '\n';
        strToAppend += 'claudiaTiedemann --> claudiaTiedemannXclaudiaTiedemannHusband' + '\n';
        strToAppend += 'claudiaTiedemannHusband --> claudiaTiedemannXclaudiaTiedemannHusband' + '\n';
        strToAppend += 'claudiaTiedemannXclaudiaTiedemannHusband --> reginaTiedemann' + '\n';
        strToAppend += 'reginaTiedemann --> reginaTiedemannXaleksanderTiedemann' + '\n';
        strToAppend += 'aleksanderTiedemann --> reginaTiedemannXaleksanderTiedemann' + '\n';
        strToAppend += 'reginaTiedemannXaleksanderTiedemann --> bartoszTiedemann' + '\n';

        strToAppend += 'end' + '\n';
        //subgraph Tiedemann - end

        //subgraph Doppler - start
        strToAppend += 'subgraph Doppler' + '\n';

        //gen0
        strToAppend += 'dopplerHead[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'dopplerHead2[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'dopplerHead3[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';

        //gen1
        strToAppend += 'berndDoppler[' + TreeParser.getTreePerson(DarkPersons.berndDoppler) + ']' + '\n';
        strToAppend += 'gretaDoppler[' + TreeParser.getTreePerson(DarkPersons.gretaDoppler) + ']' + '\n';
        strToAppend += 'gretaDopplerX[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'berndDopplerXgretaDoppler[ Married ]' + '\n';
        strToAppend += 'gretaDopplerXgretaDopplerX[ Affair ]' + '\n';
        strToAppend += 'hgTannhaus[' + TreeParser.getTreePerson(DarkPersons.hgTannhaus) + ']' + '\n';
        strToAppend += 'hgTannhausX[ Unknown ]' + '\n';

        //gen2
        strToAppend += 'helgeDoppler[' + TreeParser.getTreePerson(DarkPersons.helgeDoppler) + ']' + '\n';
        strToAppend += 'helgeDopplerX[' + TreeParser.getTreePerson(DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'helgeDopplerXhelgeDopplerX[ Married ]' + '\n';
        strToAppend += 'elisabethDoppler2[' + TreeParser.getTreePerson(DarkPersons.elisabethDoppler) + ']' + '\n';
        strToAppend += 'noah2[' + TreeParser.getTreePerson(DarkPersons.noah) + ']' + '\n';
        strToAppend += 'elisabethDoppler2Xnoah2[ Unknown ]' + '\n';

        //gen3
        strToAppend += 'charlotteDoppler[' + TreeParser.getTreePerson(DarkPersons.charlotteDoppler) + ']' + '\n';
        strToAppend += 'peterDoppler[' + TreeParser.getTreePerson(DarkPersons.peterDoppler) + ']' + '\n';
        strToAppend += 'charlotteDopplerXpeterDoppler[ Married ]' + '\n';

        //gen4
        strToAppend += 'franziskaDoppler[' + TreeParser.getTreePerson(DarkPersons.franziskaDoppler) + ']' + '\n';
        strToAppend += 'elisabethDoppler[' + TreeParser.getTreePerson(DarkPersons.elisabethDoppler) + ']' + '\n';

        //connections
        strToAppend += 'dopplerHead --> berndDoppler' + '\n';
        strToAppend += 'dopplerHead2 --> gretaDoppler' + '\n';
        strToAppend += 'dopplerHead3 --> hgTannhaus' + '\n';
        strToAppend += 'berndDoppler --> berndDopplerXgretaDoppler' + '\n';
        strToAppend += 'gretaDoppler --> berndDopplerXgretaDoppler' + '\n';
        strToAppend += 'gretaDoppler --> gretaDopplerXgretaDopplerX' + '\n';
        strToAppend += 'gretaDopplerX --> gretaDopplerXgretaDopplerX' + '\n';
        strToAppend += 'gretaDopplerXgretaDopplerX --> helgeDoppler' + '\n';
        strToAppend += 'hgTannhaus --> hgTannhausX' + '\n';
        strToAppend += 'hgTannhausX --> elisabethDoppler2' + '\n';
        strToAppend += 'helgeDoppler --> helgeDopplerXhelgeDopplerX' + '\n';
        strToAppend += 'helgeDopplerX --> helgeDopplerXhelgeDopplerX' + '\n';
        strToAppend += 'helgeDopplerXhelgeDopplerX --> peterDoppler' + '\n';
        strToAppend += 'elisabethDoppler2 --> elisabethDoppler2Xnoah2' + '\n';
        strToAppend += 'noah2 --> elisabethDoppler2Xnoah2' + '\n';
        strToAppend += 'elisabethDoppler2Xnoah2 --> charlotteDoppler' + '\n';
        strToAppend += 'charlotteDoppler --> charlotteDopplerXpeterDoppler' + '\n';
        strToAppend += 'peterDoppler --> charlotteDopplerXpeterDoppler' + '\n';
        strToAppend += 'charlotteDopplerXpeterDoppler --> franziskaDoppler' + '\n';
        strToAppend += 'charlotteDopplerXpeterDoppler --> elisabethDoppler' + '\n';

        strToAppend += 'end' + '\n';
        //subgraph Doppler - end



        return strToAppend;
    }

}