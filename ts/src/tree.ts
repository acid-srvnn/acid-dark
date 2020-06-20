/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { Episode1 } from './events/season1/episode1';
import { DarkEvent } from './models/interfaces/darkEvent';
import { Episode2 } from './events/season1/episode2';
import { Parser } from './parser';
import { DarkPersons } from './models/constants/darkPersons';
import { DarkPerson } from './models/interfaces/darkPerson';
import { TreeParser } from './treeParser';

declare global {
    interface Window {
      loadTree: any;
      mermaidInitialze: any;
    }
}
  
window.loadTree = function () {
    $('#darkfamily').empty();
    $('#darkfamily').removeAttr('data-processed');
    $('#darkfamily').removeClass('mermaid');
    $('#darkfamily').addClass('mermaid');
    let strToAppend = ''+'\n';
    strToAppend += 'graph TD' +'\n';

    //subgraph Nielsen - start
    strToAppend += 'subgraph Nielsen' +'\n';

    //gen0
    strToAppend += 'nielsenHead['+TreeParser.getTreePerson(DarkPersons.unknownPerson)+']'+'\n';
    
    //gen1
    strToAppend += 'agnesNielsen['+TreeParser.getTreePerson(DarkPersons.agnesNielsen)+']'+'\n';
    strToAppend += 'noah['+TreeParser.getTreePerson(DarkPersons.noah)+']'+'\n';

    //gen2
    strToAppend += 'tronteNielsen['+TreeParser.getTreePerson(DarkPersons.tronteNielsen)+']'+'\n';
    strToAppend += 'janaNielsen['+TreeParser.getTreePerson(DarkPersons.janaNielsen)+']'+'\n';
    strToAppend += 'tronteNielsenXjanaNielsen[ Married ]'+'\n';
    
    //gen3
    strToAppend += 'madsNielsen['+TreeParser.getTreePerson(DarkPersons.madsNielsen)+']'+'\n';
    strToAppend += 'ulrichNielsen['+TreeParser.getTreePerson(DarkPersons.ulrichNielsen)+']'+'\n';
    strToAppend += 'katarinaNielsen['+TreeParser.getTreePerson(DarkPersons.katarinaNielsen)+']'+'\n';
    strToAppend += 'ulrichNielsenXkatarinaNielsen[ Married ]'+'\n';

    //gen4
    strToAppend += 'magnusNielsen['+TreeParser.getTreePerson(DarkPersons.magnusNielsen)+']'+'\n';
    strToAppend += 'marthaNielsen['+TreeParser.getTreePerson(DarkPersons.marthaNielsen)+']'+'\n';
    strToAppend += 'mikkelNielsen['+TreeParser.getTreePerson(DarkPersons.mikkelNielsen)+']'+'\n';
    
    //connections
    strToAppend += 'nielsenHead --> agnesNielsen'+'\n';
    strToAppend += 'nielsenHead --> noah'+'\n';
    strToAppend += 'agnesNielsen --> tronteNielsen'+'\n';
    strToAppend += 'tronteNielsen --> tronteNielsenXjanaNielsen'+'\n';
    strToAppend += 'janaNielsen --> tronteNielsenXjanaNielsen'+'\n';
    strToAppend += 'tronteNielsenXjanaNielsen --> ulrichNielsen'+'\n';
    strToAppend += 'tronteNielsenXjanaNielsen --> madsNielsen'+'\n';
    strToAppend += 'ulrichNielsen --> ulrichNielsenXkatarinaNielsen'+'\n';
    strToAppend += 'katarinaNielsen --> ulrichNielsenXkatarinaNielsen'+'\n';
    strToAppend += 'ulrichNielsenXkatarinaNielsen --> magnusNielsen '+'\n';
    strToAppend += 'ulrichNielsenXkatarinaNielsen --> marthaNielsen'+'\n';
    strToAppend += 'ulrichNielsenXkatarinaNielsen --> mikkelNielsen'+'\n';

    strToAppend += 'end'+'\n';
    //subgraph Nielsen - end

    console.log(strToAppend);
    $('#darkfamily').append(strToAppend);
    window.mermaidInitialze();
}