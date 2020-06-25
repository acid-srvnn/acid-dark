/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { DarkPersons } from './models/constants/darkPersons';
import { TreeParser } from './treeline/treeParser';
import { TreeRenderer } from './treeline/treeRenderer';

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

  $('#darkfamily').append(TreeRenderer.getTree2s());

  window.mermaidInitialze();
}

window.loadTree();