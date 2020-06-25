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
        //subgraph Nielsen - end

        return strToAppend;
    }

}