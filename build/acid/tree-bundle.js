/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/src/tree.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/src/models/constants/darkPersons.ts":
/*!************************************************!*\
  !*** ./ts/src/models/constants/darkPersons.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkPersons = void 0;
const darkFamily_1 = __webpack_require__(/*! ./enum/darkFamily */ "./ts/src/models/constants/enum/darkFamily.ts");
const darkPersonPhoto_1 = __webpack_require__(/*! ../interfaces/darkPersonPhoto */ "./ts/src/models/interfaces/darkPersonPhoto.ts");
const ageGroup_1 = __webpack_require__(/*! ./enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
class DarkPersons {
}
exports.DarkPersons = DarkPersons;
DarkPersons.unknownPerson = {
    name: "Unknown",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("unknownperson", [ageGroup_1.AgeGroup.young]),
    father: undefined,
    mother: undefined
};
//Persons from Unknown families 
DarkPersons.gretchen = {
    name: "Gretchen",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("gretchen", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.bernadette = {
    name: "Bernadette",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("bernadette", [ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.torbenWoller = {
    name: "Torben Woller",
    family: darkFamily_1.DarkFamily.Woller,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("torbenwoller", [ageGroup_1.AgeGroup.adult]),
    father: DarkPersons.bernadette,
    mother: undefined
};
DarkPersons.silja = {
    name: "Silja",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("silja", [ageGroup_1.AgeGroup.young]),
    father: undefined,
    mother: undefined
};
DarkPersons.clausen = {
    name: "Clausen",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("clausen", [ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.sebastianKruger = {
    name: "Sebastian Kruger",
    family: darkFamily_1.DarkFamily.Kruger,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("sebastiankruger", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.hgTannhaus = {
    name: "H.G. Tannhaus",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("hgtannhaus", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.jurgenObendorf = {
    name: "Jürgen Obendorf",
    family: darkFamily_1.DarkFamily.Obendorf,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("jurgenobendorf", [ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.erikObendorf = {
    name: "Erik Obendorf",
    family: darkFamily_1.DarkFamily.Obendorf,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("erikobendorf", undefined),
    father: DarkPersons.jurgenObendorf,
    mother: undefined
};
DarkPersons.yasinFriese = {
    name: "Yasin Friese",
    family: darkFamily_1.DarkFamily.Friese,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("yasinfriese", undefined),
    father: undefined,
    mother: undefined
};
//Persons from Nielsen Family
DarkPersons.agnesNielsen = {
    name: "Agnes Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("agnesnielsen", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.noah = {
    name: "Noah",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("noah", undefined),
    father: undefined,
    mother: undefined,
    altName: ["Hanno Noah Tauber"]
};
DarkPersons.tronteNielsen = {
    name: "Tronte Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("trontenielsen", undefined),
    father: undefined,
    mother: DarkPersons.agnesNielsen
};
DarkPersons.janaNielsen = {
    name: "Jana Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("jananielsen", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.ulrichNielsen = {
    name: "Ulrich Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("ulrichnielsen", undefined),
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.madsNielsen = {
    name: "Mads Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("madsnielsen", undefined),
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.katarinaNielsen = {
    name: "Katarina Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("katarinanielsen", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.magnusNielsen = {
    name: "Magnus Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("magnusnielsen", undefined),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.marthaNielsen = {
    name: "Martha Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("marthanielsen", undefined),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.mikkelNielsen = {
    name: "Mikkel Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("mikkelnielsen", undefined),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen,
    altName: ["Michael Khanwald"]
};
//Persons from Kahnwald Family
DarkPersons.danielKahnwald = {
    name: "Daniel Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("danielkahnwald", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.inesKahnwald = {
    name: "Ines Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("ineskahnwald", undefined),
    father: DarkPersons.danielKahnwald,
    mother: undefined
};
DarkPersons.michaelKahnwald = {
    name: "Michael Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("michaelkahnwald", undefined),
    father: undefined,
    mother: DarkPersons.inesKahnwald
};
DarkPersons.hannahKahnwald = {
    name: "Hannah Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("hannahkahnwald", undefined),
    father: DarkPersons.sebastianKruger,
    mother: undefined
};
DarkPersons.jonasKahnwald = {
    name: "Jonas Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("jonaskahnwald", undefined),
    father: DarkPersons.michaelKahnwald,
    mother: DarkPersons.hannahKahnwald
};
//Persons from Doppler Family    
DarkPersons.berndDoppler = {
    name: "Bernd Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("bernddoppler", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.gretaDoppler = {
    name: "Greta Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("gretadoppler", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.helgeDoppler = {
    name: "Helge Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("helgedoppler", undefined),
    father: DarkPersons.berndDoppler,
    mother: DarkPersons.gretaDoppler
};
DarkPersons.peterDoppler = {
    name: "Peter Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("peterdoppler", undefined),
    father: DarkPersons.helgeDoppler,
    mother: undefined
};
DarkPersons.charlotteDoppler = {
    name: "Charlotte Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("charlottedoppler", undefined),
    father: DarkPersons.noah,
    mother: undefined
};
DarkPersons.franziskaDoppler = {
    name: "Franziska Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("franziskadoppler", undefined),
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
DarkPersons.elisabethDoppler = {
    name: "Elisabeth Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("elisabethdoppler", undefined),
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
//Persons from Tiedemann Family
DarkPersons.egonTiedemann = {
    name: "Egon Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("egontiedemann", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.dorisTiedemann = {
    name: "Doris Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("doristiedemann", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.claudiaTiedemann = {
    name: "Claudia Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("claudiatiedemann", undefined),
    father: DarkPersons.egonTiedemann,
    mother: DarkPersons.dorisTiedemann
};
DarkPersons.reginaTiedemann = {
    name: "Regina Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("reginatiedemann", undefined),
    father: undefined,
    mother: DarkPersons.claudiaTiedemann
};
DarkPersons.aleksanderTiedemann = {
    name: "Aleksander Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("aleksandertiedemann", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.bartoszTiedemann = {
    name: "Bartosz Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("bartosztiedemann", undefined),
    father: DarkPersons.aleksanderTiedemann,
    mother: DarkPersons.reginaTiedemann
};


/***/ }),

/***/ "./ts/src/models/constants/enum/ageGroup.ts":
/*!**************************************************!*\
  !*** ./ts/src/models/constants/enum/ageGroup.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AgeGroup = void 0;
var AgeGroup;
(function (AgeGroup) {
    AgeGroup["young"] = "Young";
    AgeGroup["adult"] = "Adult";
    AgeGroup["old"] = "Old";
})(AgeGroup = exports.AgeGroup || (exports.AgeGroup = {}));


/***/ }),

/***/ "./ts/src/models/constants/enum/darkFamily.ts":
/*!****************************************************!*\
  !*** ./ts/src/models/constants/enum/darkFamily.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkFamily = void 0;
var DarkFamily;
(function (DarkFamily) {
    DarkFamily["Nielsen"] = "Nielsen";
    DarkFamily["Kahnwald"] = "Kahnwald";
    DarkFamily["Tiedemann"] = "Tiedemann";
    DarkFamily["Doppler"] = "Doppler";
    DarkFamily["Unknown"] = "Unknown";
    DarkFamily["Obendorf"] = "Obendorf";
    DarkFamily["Friese"] = "Friese";
    DarkFamily["Kruger"] = "Kruger";
    DarkFamily["Woller"] = "Woller";
})(DarkFamily = exports.DarkFamily || (exports.DarkFamily = {}));


/***/ }),

/***/ "./ts/src/models/interfaces/darkPersonPhoto.ts":
/*!*****************************************************!*\
  !*** ./ts/src/models/interfaces/darkPersonPhoto.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkPersonPhoto = void 0;
const ageGroup_1 = __webpack_require__(/*! ../constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
class DarkPersonPhoto {
    constructor(person, ageGroups) {
        if (ageGroups == undefined) {
            this.young = 'assets/persons/' + person + '0.jpg';
            this.adult = 'assets/persons/' + person + '1.jpg';
            this.old = 'assets/persons/' + person + '2.jpg';
        }
        else {
            this.young = undefined;
            this.adult = undefined;
            this.old = undefined;
            if (ageGroups.includes(ageGroup_1.AgeGroup.young)) {
                this.young = 'assets/persons/' + person + '0.jpg';
            }
            if (ageGroups.includes(ageGroup_1.AgeGroup.adult)) {
                this.adult = 'assets/persons/' + person + '1.jpg';
            }
            if (ageGroups.includes(ageGroup_1.AgeGroup.old)) {
                this.old = 'assets/persons/' + person + '2.jpg';
            }
        }
    }
}
exports.DarkPersonPhoto = DarkPersonPhoto;


/***/ }),

/***/ "./ts/src/tree.ts":
/*!************************!*\
  !*** ./ts/src/tree.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const treeRenderer_1 = __webpack_require__(/*! ./treeline/treeRenderer */ "./ts/src/treeline/treeRenderer.ts");
window.loadTree = function () {
    $('#darkfamily').empty();
    $('#darkfamily').removeAttr('data-processed');
    $('#darkfamily').removeClass('mermaid');
    $('#darkfamily').addClass('mermaid');
    $('#darkfamily').append(treeRenderer_1.TreeRenderer.getTree2s());
    window.mermaidInitialze();
};
window.loadTree();


/***/ }),

/***/ "./ts/src/treeline/treeParser.ts":
/*!***************************************!*\
  !*** ./ts/src/treeline/treeParser.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeParser = void 0;
class TreeParser {
    static getTreePerson(person) {
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
exports.TreeParser = TreeParser;


/***/ }),

/***/ "./ts/src/treeline/treeRenderer.ts":
/*!*****************************************!*\
  !*** ./ts/src/treeline/treeRenderer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeRenderer = void 0;
const treeParser_1 = __webpack_require__(/*! ./treeParser */ "./ts/src/treeline/treeParser.ts");
const darkPersons_1 = __webpack_require__(/*! ../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
class TreeRenderer {
    static getTree2s() {
        let strToAppend = '' + '\n';
        strToAppend += 'graph TD' + '\n';
        //subgraph Nielsen - start
        strToAppend += 'subgraph Nielsen' + '\n';
        //gen0
        strToAppend += 'nielsenHead[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        //gen1
        strToAppend += 'agnesNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.agnesNielsen) + ']' + '\n';
        strToAppend += 'agnesNielsenHusband[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'agnesNielsenXagnesNielsenHusband[ Married ]' + '\n';
        strToAppend += 'noah[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.noah) + ']' + '\n';
        //gen2
        strToAppend += 'tronteNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.tronteNielsen) + ']' + '\n';
        strToAppend += 'janaNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.janaNielsen) + ']' + '\n';
        strToAppend += 'tronteNielsenXjanaNielsen[ Married ]' + '\n';
        //gen3
        strToAppend += 'madsNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.madsNielsen) + ']' + '\n';
        strToAppend += 'ulrichNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.ulrichNielsen) + ']' + '\n';
        strToAppend += 'katarinaNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.katarinaNielsen) + ']' + '\n';
        strToAppend += 'ulrichNielsenXkatarinaNielsen[ Married ]' + '\n';
        //gen4
        strToAppend += 'magnusNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.magnusNielsen) + ']' + '\n';
        strToAppend += 'marthaNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.marthaNielsen) + ']' + '\n';
        strToAppend += 'mikkelNielsen[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.mikkelNielsen) + ']' + '\n';
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
        strToAppend += 'kahnwaldHead[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        //gen1
        strToAppend += 'danielKahnwald[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.danielKahnwald) + ']' + '\n';
        strToAppend += 'danielKahnwaldWife[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'danielKahnwaldXdanielKahnwaldWife[ Married ]' + '\n';
        //gen2
        strToAppend += 'inesKahnwald[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.inesKahnwald) + ']' + '\n';
        strToAppend += 'inesKahnwaldX[ Adopted ]' + '\n';
        strToAppend += 'sebastianKruger[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.sebastianKruger) + ']' + '\n';
        strToAppend += 'sebastianKrugerWife[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'sebastianKrugerXsebastianKrugerWife[ Married ]' + '\n';
        //gen3
        strToAppend += 'michaelKahnwald[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.michaelKahnwald) + ']' + '\n';
        strToAppend += 'hannahKahnwald[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.hannahKahnwald) + ']' + '\n';
        strToAppend += 'michaelKahnwaldXhannahKahnwald[ Married ]' + '\n';
        //gen4
        strToAppend += 'jonasKahnwald[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.jonasKahnwald) + ']' + '\n';
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
        strToAppend += 'tiedemannHead[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        //gen1
        strToAppend += 'egonTiedemann[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.egonTiedemann) + ']' + '\n';
        strToAppend += 'dorisTiedemann[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.dorisTiedemann) + ']' + '\n';
        strToAppend += 'egonTiedemannXdorisTiedemann[ Married ]' + '\n';
        //gen2
        strToAppend += 'claudiaTiedemann[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.claudiaTiedemann) + ']' + '\n';
        strToAppend += 'claudiaTiedemannHusband[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'claudiaTiedemannXclaudiaTiedemannHusband[ Married ]' + '\n';
        //gen3
        strToAppend += 'reginaTiedemann[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.reginaTiedemann) + ']' + '\n';
        strToAppend += 'aleksanderTiedemann[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.aleksanderTiedemann) + ']' + '\n';
        strToAppend += 'reginaTiedemannXaleksanderTiedemann[ Married ]' + '\n';
        //gen4
        strToAppend += 'bartoszTiedemann[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.bartoszTiedemann) + ']' + '\n';
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
        strToAppend += 'dopplerHead[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'dopplerHead2[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'dopplerHead3[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        //gen1
        strToAppend += 'berndDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.berndDoppler) + ']' + '\n';
        strToAppend += 'gretaDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.gretaDoppler) + ']' + '\n';
        strToAppend += 'gretaDopplerX[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'berndDopplerXgretaDoppler[ Married ]' + '\n';
        strToAppend += 'gretaDopplerXgretaDopplerX[ Affair ]' + '\n';
        strToAppend += 'hgTannhaus[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.hgTannhaus) + ']' + '\n';
        strToAppend += 'hgTannhausX[ Unknown ]' + '\n';
        //gen2
        strToAppend += 'helgeDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.helgeDoppler) + ']' + '\n';
        strToAppend += 'helgeDopplerX[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.unknownPerson) + ']' + '\n';
        strToAppend += 'helgeDopplerXhelgeDopplerX[ Married ]' + '\n';
        strToAppend += 'elisabethDoppler2[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.elisabethDoppler) + ']' + '\n';
        strToAppend += 'noah2[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.noah) + ']' + '\n';
        strToAppend += 'elisabethDoppler2Xnoah2[ Unknown ]' + '\n';
        //gen3
        strToAppend += 'charlotteDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.charlotteDoppler) + ']' + '\n';
        strToAppend += 'peterDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.peterDoppler) + ']' + '\n';
        strToAppend += 'charlotteDopplerXpeterDoppler[ Married ]' + '\n';
        //gen4
        strToAppend += 'franziskaDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.franziskaDoppler) + ']' + '\n';
        strToAppend += 'elisabethDoppler[' + treeParser_1.TreeParser.getTreePerson(darkPersons_1.DarkPersons.elisabethDoppler) + ']' + '\n';
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
exports.TreeRenderer = TreeRenderer;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2NvbnN0YW50cy9lbnVtL2RhcmtGYW1pbHkudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25QaG90by50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZWxpbmUvdHJlZVBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZWxpbmUvdHJlZVJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdB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bkQsV0FBVyxJQUFJLG1DQUFtQyxHQUFHLElBQUksQ0FBQztRQUMxRCxXQUFXLElBQUksNkNBQTZDLEdBQUcsSUFBSSxDQUFDO1FBQ3BFLFdBQVcsSUFBSSw4Q0FBOEMsR0FBRyxJQUFJLENBQUM7UUFDckUsV0FBVyxJQUFJLDZDQUE2QyxHQUFHLElBQUksQ0FBQztRQUNwRSxXQUFXLElBQUksK0NBQStDLEdBQUcsSUFBSSxDQUFDO1FBQ3RFLFdBQVcsSUFBSSxtQ0FBbUMsR0FBRyxJQUFJLENBQUM7UUFDMUQsV0FBVyxJQUFJLDhDQUE4QyxHQUFHLElBQUksQ0FBQztRQUNyRSxXQUFXLElBQUksb0RBQW9ELEdBQUcsSUFBSSxDQUFDO1FBQzNFLFdBQVcsSUFBSSxnREFBZ0QsR0FBRyxJQUFJLENBQUM7UUFDdkUsV0FBVyxJQUFJLG9EQUFvRCxHQUFHLElBQUksQ0FBQztRQUMzRSxXQUFXLElBQUksb0RBQW9ELEdBQUcsSUFBSSxDQUFDO1FBRTNFLFdBQVcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHdCQUF3QjtRQUl4QixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBRUo7QUF4TUQsb0NBd01DIiwiZmlsZSI6ImFjaWQvdHJlZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL3NyYy90cmVlLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgRGFya0ZhbWlseSB9IGZyb20gXCIuL2VudW0vZGFya0ZhbWlseVwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29uUGhvdG8gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9kYXJrUGVyc29uUGhvdG9cIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGFya1BlcnNvbnMge1xyXG5cclxuICAgIHN0YXRpYyB1bmtub3duUGVyc29uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVW5rbm93blwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInVua25vd25wZXJzb25cIiwgW0FnZUdyb3VwLnlvdW5nXSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBVbmtub3duIGZhbWlsaWVzIFxyXG5cclxuICAgIHN0YXRpYyBncmV0Y2hlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkdyZXRjaGVuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZ3JldGNoZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiZXJuYWRldHRlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmVybmFkZXR0ZVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJlcm5hZGV0dGVcIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9yYmVuV29sbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVG9yYmVuIFdvbGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Xb2xsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidG9yYmVud29sbGVyXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuYmVybmFkZXR0ZSxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaWxqYTogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlNpbGphXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwic2lsamFcIiwgW0FnZUdyb3VwLnlvdW5nXSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xhdXNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNsYXVzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJjbGF1c2VuXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNlYmFzdGlhbktydWdlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlNlYmFzdGlhbiBLcnVnZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS3J1Z2VyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInNlYmFzdGlhbmtydWdlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhnVGFubmhhdXM6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJILkcuIFRhbm5oYXVzXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGd0YW5uaGF1c1wiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp1cmdlbk9iZW5kb3JmOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSsO8cmdlbiBPYmVuZG9yZlwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5PYmVuZG9yZixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqdXJnZW5vYmVuZG9yZlwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcmlrT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFcmlrIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk9iZW5kb3JmLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImVyaWtvYmVuZG9yZlwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuanVyZ2VuT2JlbmRvcmYsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgeWFzaW5Gcmllc2U6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJZYXNpbiBGcmllc2VcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRnJpZXNlLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInlhc2luZnJpZXNlXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBOaWVsc2VuIEZhbWlseVxyXG5cclxuICAgIHN0YXRpYyBhZ25lc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJBZ25lcyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYWduZXNuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9haDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk5vYWhcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJub2FoXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYWx0TmFtZTogW1wiSGFubm8gTm9haCBUYXViZXJcIl1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJvbnRlTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlRyb250ZSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidHJvbnRlbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuYWduZXNOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGphbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSmFuYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiamFuYW5pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bHJpY2hOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVWxyaWNoIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ1bHJpY2huaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFkc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYWRzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtYWRzbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmphbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGthdGFyaW5hTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkthdGFyaW5hIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJrYXRhcmluYW5pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWdudXNOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFnbnVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtYWdudXNuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hcnRoYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYXJ0aGEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hcnRoYW5pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWlra2VsTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pa2tlbCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWlra2VsbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbixcclxuICAgICAgICBhbHROYW1lOiBbXCJNaWNoYWVsIEtoYW53YWxkXCJdXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gS2FobndhbGQgRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGRhbmllbEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRGFuaWVsIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImRhbmllbGthaG53YWxkXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5lc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSW5lcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJpbmVza2FobndhbGRcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pY2hhZWxLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pY2hhZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWljaGFlbGthaG53YWxkXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFubmFoS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIYW5uYWggS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGFubmFoa2FobndhbGRcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnNlYmFzdGlhbktydWdlcixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqb25hc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSm9uYXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiam9uYXNrYWhud2FsZFwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMubWljaGFlbEthaG53YWxkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBEb3BwbGVyIEZhbWlseSAgICBcclxuXHJcbiAgICBzdGF0aWMgYmVybmREb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmVybmQgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJlcm5kZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdyZXRhRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkdyZXRhIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJncmV0YWRvcHBsZXJcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxnZURvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIZWxnZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGVsZ2Vkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5ncmV0YURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGV0ZXJEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUGV0ZXIgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInBldGVyZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoYXJsb3R0ZURvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDaGFybG90dGUgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNoYXJsb3R0ZWRvcHBsZXJcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm5vYWgsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJhbnppc2thRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW56aXNrYSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZnJhbnppc2thZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbGlzYWJldGhEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRWxpc2FiZXRoIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJlbGlzYWJldGhkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gVGllZGVtYW5uIEZhbWlseVxyXG5cclxuICAgIHN0YXRpYyBlZ29uVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRWdvbiBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImVnb250aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3Jpc1RpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkRvcmlzIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZG9yaXN0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1ZGlhVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdWRpYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVkaWF0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5kb3Jpc1RpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpbmFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJSZWdpbmEgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJyZWdpbmF0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWxla3NhbmRlclRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFsZWtzYW5kZXIgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJhbGVrc2FuZGVydGllZGVtYW5uXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmFydG9zelRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkJhcnRvc3ogVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJiYXJ0b3N6dGllZGVtYW5uXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBlbnVtIEFnZUdyb3VwIHtcclxuICAgIHlvdW5nID0gXCJZb3VuZ1wiLFxyXG4gICAgYWR1bHQgPSBcIkFkdWx0XCIsXHJcbiAgICBvbGQgPSBcIk9sZFwiXHJcbn0iLCJleHBvcnQgZW51bSBEYXJrRmFtaWx5IHtcclxuICAgIE5pZWxzZW4gPSBcIk5pZWxzZW5cIixcclxuICAgIEthaG53YWxkID0gXCJLYWhud2FsZFwiLFxyXG4gICAgVGllZGVtYW5uID0gXCJUaWVkZW1hbm5cIixcclxuICAgIERvcHBsZXIgPSBcIkRvcHBsZXJcIixcclxuICAgIFVua25vd24gPSBcIlVua25vd25cIixcclxuICAgIE9iZW5kb3JmID0gXCJPYmVuZG9yZlwiLFxyXG4gICAgRnJpZXNlID0gXCJGcmllc2VcIixcclxuICAgIEtydWdlciA9IFwiS3J1Z2VyXCIsXHJcbiAgICBXb2xsZXIgPSBcIldvbGxlclwiXHJcbn0iLCJpbXBvcnQgeyBEYXJrUGVyc29uIH0gZnJvbSBcIi4vZGFya1BlcnNvblwiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25QaG90byB7XHJcbiAgICB5b3VuZzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIGFkdWx0OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgb2xkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBlcnNvbiA6IHN0cmluZywgYWdlR3JvdXBzOiBBZ2VHcm91cFtdfHVuZGVmaW5lZCl7XHJcbiAgICAgICAgaWYoYWdlR3JvdXBzID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMueW91bmcgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzAuanBnJztcclxuICAgICAgICAgICAgdGhpcy5hZHVsdCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMS5qcGcnO1xyXG4gICAgICAgICAgICB0aGlzLm9sZCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMi5qcGcnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnlvdW5nID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmFkdWx0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLm9sZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYoYWdlR3JvdXBzLmluY2x1ZGVzKEFnZUdyb3VwLnlvdW5nKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlvdW5nID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycwLmpwZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWdlR3JvdXBzLmluY2x1ZGVzKEFnZUdyb3VwLmFkdWx0KSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdWx0ID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycxLmpwZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWdlR3JvdXBzLmluY2x1ZGVzKEFnZUdyb3VwLm9sZCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzIuanBnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9KUXVlcnkuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gJy4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29ucyc7XHJcbmltcG9ydCB7IFRyZWVQYXJzZXIgfSBmcm9tICcuL3RyZWVsaW5lL3RyZWVQYXJzZXInO1xyXG5pbXBvcnQgeyBUcmVlUmVuZGVyZXIgfSBmcm9tICcuL3RyZWVsaW5lL3RyZWVSZW5kZXJlcic7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBsb2FkVHJlZTogYW55O1xyXG4gICAgbWVybWFpZEluaXRpYWx6ZTogYW55O1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmxvYWRUcmVlID0gZnVuY3Rpb24gKCkge1xyXG4gICQoJyNkYXJrZmFtaWx5JykuZW1wdHkoKTtcclxuICAkKCcjZGFya2ZhbWlseScpLnJlbW92ZUF0dHIoJ2RhdGEtcHJvY2Vzc2VkJyk7XHJcbiAgJCgnI2RhcmtmYW1pbHknKS5yZW1vdmVDbGFzcygnbWVybWFpZCcpO1xyXG4gICQoJyNkYXJrZmFtaWx5JykuYWRkQ2xhc3MoJ21lcm1haWQnKTtcclxuXHJcbiAgJCgnI2RhcmtmYW1pbHknKS5hcHBlbmQoVHJlZVJlbmRlcmVyLmdldFRyZWUycygpKTtcclxuXHJcbiAgd2luZG93Lm1lcm1haWRJbml0aWFsemUoKTtcclxufVxyXG5cclxud2luZG93LmxvYWRUcmVlKCk7IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZVBhcnNlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUcmVlUGVyc29uKHBlcnNvbjogRGFya1BlcnNvbikge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzJiM2MTsnY2FyZCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgPGltZyBzcmMmIzYxOyclJUlNQUdFMCUlJyBjbGFzcyYjNjE7J2NhcmQtaW1nJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICA8aW1nIHNyYyYjNjE7JyUlSU1BR0UxJSUnIGNsYXNzJiM2MTsnY2FyZC1pbWcnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgIDxpbWcgc3JjJiM2MTsnJSVJTUFHRTIlJScgY2xhc3MmIzYxOydjYXJkLWltZyc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3MmIzYxOydjYXJkLWJvZHknPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgIDxwIGNsYXNzJiM2MTsnY2FyZC10ZXh0Jz4gJSVOQU1FJSUgPC9wPlwiICtcclxuICAgICAgICAgICAgXCIgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUFHRTAlJVwiLCBwZXJzb24ucGhvdG9zLnlvdW5nID09IHVuZGVmaW5lZCA/ICcnIDogcGVyc29uLnBob3Rvcy55b3VuZy5zcGxpdCgnLycpLmpvaW4oJyYjNDc7JykpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUFHRTElJVwiLCBwZXJzb24ucGhvdG9zLmFkdWx0ID09IHVuZGVmaW5lZCA/ICcnIDogcGVyc29uLnBob3Rvcy5hZHVsdC5zcGxpdCgnLycpLmpvaW4oJyYjNDc7JykpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUFHRTIlJVwiLCBwZXJzb24ucGhvdG9zLm9sZCA9PSB1bmRlZmluZWQgPyAnJyA6IHBlcnNvbi5waG90b3Mub2xkLnNwbGl0KCcvJykuam9pbignJiM0NzsnKSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJU5BTUUlJVwiLCBwZXJzb24ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVHJlZVBhcnNlciB9IGZyb20gXCIuL3RyZWVQYXJzZXJcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVSZW5kZXJlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUcmVlMnMoKSB7XHJcbiAgICAgICAgbGV0IHN0clRvQXBwZW5kID0gJycgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZ3JhcGggVEQnICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vc3ViZ3JhcGggTmllbHNlbiAtIHN0YXJ0XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3N1YmdyYXBoIE5pZWxzZW4nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuMFxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICduaWVsc2VuSGVhZFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuMVxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdhZ25lc05pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5hZ25lc05pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2FnbmVzTmllbHNlbkh1c2JhbmRbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy51bmtub3duUGVyc29uKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdhZ25lc05pZWxzZW5YYWduZXNOaWVsc2VuSHVzYmFuZFsgTWFycmllZCBdJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdub2FoWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubm9haCkgKyAnXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4yXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3Ryb250ZU5pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdqYW5hTmllbHNlblsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmphbmFOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd0cm9udGVOaWVsc2VuWGphbmFOaWVsc2VuWyBNYXJyaWVkIF0nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuM1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdtYWRzTmllbHNlblsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLm1hZHNOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd1bHJpY2hOaWVsc2VuWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAna2F0YXJpbmFOaWVsc2VuWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd1bHJpY2hOaWVsc2VuWGthdGFyaW5hTmllbHNlblsgTWFycmllZCBdJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjRcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnbWFnbnVzTmllbHNlblsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ21hcnRoYU5pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdtaWtrZWxOaWVsc2VuWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubWlra2VsTmllbHNlbikgKyAnXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9jb25uZWN0aW9uc1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICduaWVsc2VuSGVhZCAtLT4gYWduZXNOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICduaWVsc2VuSGVhZCAtLT4gbm9haCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnYWduZXNOaWVsc2VuIC0tPiBhZ25lc05pZWxzZW5YYWduZXNOaWVsc2VuSHVzYmFuZCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnYWduZXNOaWVsc2VuSHVzYmFuZCAtLT4gYWduZXNOaWVsc2VuWGFnbmVzTmllbHNlbkh1c2JhbmQnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2FnbmVzTmllbHNlblhhZ25lc05pZWxzZW5IdXNiYW5kIC0tPiB0cm9udGVOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd0cm9udGVOaWVsc2VuIC0tPiB0cm9udGVOaWVsc2VuWGphbmFOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdqYW5hTmllbHNlbiAtLT4gdHJvbnRlTmllbHNlblhqYW5hTmllbHNlbicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAndHJvbnRlTmllbHNlblhqYW5hTmllbHNlbiAtLT4gdWxyaWNoTmllbHNlbicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAndHJvbnRlTmllbHNlblhqYW5hTmllbHNlbiAtLT4gbWFkc05pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW4gLS0+IHVscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdrYXRhcmluYU5pZWxzZW4gLS0+IHVscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd1bHJpY2hOaWVsc2VuWGthdGFyaW5hTmllbHNlbiAtLT4gbWFnbnVzTmllbHNlbiAnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuIC0tPiBtYXJ0aGFOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd1bHJpY2hOaWVsc2VuWGthdGFyaW5hTmllbHNlbiAtLT4gbWlra2VsTmllbHNlbicgKyAnXFxuJztcclxuXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2VuZCcgKyAnXFxuJztcclxuICAgICAgICAvL3N1YmdyYXBoIE5pZWxzZW4gLSBlbmRcclxuXHJcbiAgICAgICAgLy9zdWJncmFwaCBLaGFud2FsZCAtIHN0YXJ0XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3N1YmdyYXBoIEthaG53YWxkJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjBcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAna2FobndhbGRIZWFkWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMudW5rbm93blBlcnNvbikgKyAnXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4xXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RhbmllbEthaG53YWxkWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQpICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RhbmllbEthaG53YWxkV2lmZVsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RhbmllbEthaG53YWxkWGRhbmllbEthaG53YWxkV2lmZVsgTWFycmllZCBdJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjJcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnaW5lc0thaG53YWxkWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuaW5lc0thaG53YWxkKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdpbmVzS2FobndhbGRYWyBBZG9wdGVkIF0nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3NlYmFzdGlhbktydWdlclsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnNlYmFzdGlhbktydWdlcikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnc2ViYXN0aWFuS3J1Z2VyV2lmZVsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3NlYmFzdGlhbktydWdlclhzZWJhc3RpYW5LcnVnZXJXaWZlWyBNYXJyaWVkIF0nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuM1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdtaWNoYWVsS2FobndhbGRbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5taWNoYWVsS2FobndhbGQpICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hhbm5haEthaG53YWxkWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQpICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ21pY2hhZWxLYWhud2FsZFhoYW5uYWhLYWhud2FsZFsgTWFycmllZCBdJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjRcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnam9uYXNLYWhud2FsZFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQpICsgJ10nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vY29ubmVjdGlvbnNcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAna2FobndhbGRIZWFkIC0tPiBkYW5pZWxLYWhud2FsZCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZGFuaWVsS2FobndhbGQgLS0+IGRhbmllbEthaG53YWxkWGRhbmllbEthaG53YWxkV2lmZScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZGFuaWVsS2FobndhbGRXaWZlIC0tPiBkYW5pZWxLYWhud2FsZFhkYW5pZWxLYWhud2FsZFdpZmUnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RhbmllbEthaG53YWxkWGRhbmllbEthaG53YWxkV2lmZSAtLT4gaW5lc0thaG53YWxkJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdpbmVzS2FobndhbGQgLS0+IGluZXNLYWhud2FsZFgnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2luZXNLYWhud2FsZFggLS0+IG1pY2hhZWxLYWhud2FsZCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnc2ViYXN0aWFuS3J1Z2VyIC0tPiBzZWJhc3RpYW5LcnVnZXJYc2ViYXN0aWFuS3J1Z2VyV2lmZScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnc2ViYXN0aWFuS3J1Z2VyV2lmZSAtLT4gc2ViYXN0aWFuS3J1Z2VyWHNlYmFzdGlhbktydWdlcldpZmUnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3NlYmFzdGlhbktydWdlclhzZWJhc3RpYW5LcnVnZXJXaWZlIC0tPiBoYW5uYWhLYWhud2FsZCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnbWljaGFlbEthaG53YWxkIC0tPiBtaWNoYWVsS2FobndhbGRYaGFubmFoS2FobndhbGQnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hhbm5haEthaG53YWxkIC0tPiBtaWNoYWVsS2FobndhbGRYaGFubmFoS2FobndhbGQnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ21pY2hhZWxLYWhud2FsZFhoYW5uYWhLYWhud2FsZCAtLT4gam9uYXNLYWhud2FsZCcgKyAnXFxuJztcclxuXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2VuZCcgKyAnXFxuJztcclxuICAgICAgICAvL3N1YmdyYXBoIEtoYW53YWxkIC0gZW5kXHJcblxyXG5cclxuICAgICAgICAvL3N1YmdyYXBoIFRpZWRlbWFubiAtIHN0YXJ0XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3N1YmdyYXBoIFRpZWRlbWFubicgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4wXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3RpZWRlbWFubkhlYWRbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy51bmtub3duUGVyc29uKSArICddJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjFcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZWdvblRpZWRlbWFublsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RvcmlzVGllZGVtYW5uWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuZG9yaXNUaWVkZW1hbm4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2Vnb25UaWVkZW1hbm5YZG9yaXNUaWVkZW1hbm5bIE1hcnJpZWQgXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4yXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2NsYXVkaWFUaWVkZW1hbm5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdjbGF1ZGlhVGllZGVtYW5uSHVzYmFuZFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2NsYXVkaWFUaWVkZW1hbm5YY2xhdWRpYVRpZWRlbWFubkh1c2JhbmRbIE1hcnJpZWQgXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4zXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3JlZ2luYVRpZWRlbWFublsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnYWxla3NhbmRlclRpZWRlbWFublsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3JlZ2luYVRpZWRlbWFublhhbGVrc2FuZGVyVGllZGVtYW5uWyBNYXJyaWVkIF0nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuNFxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdiYXJ0b3N6VGllZGVtYW5uWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubikgKyAnXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9jb25uZWN0aW9uc1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd0aWVkZW1hbm5IZWFkIC0tPiBlZ29uVGllZGVtYW5uJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdlZ29uVGllZGVtYW5uIC0tPiBlZ29uVGllZGVtYW5uWGRvcmlzVGllZGVtYW5uJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdkb3Jpc1RpZWRlbWFubiAtLT4gZWdvblRpZWRlbWFublhkb3Jpc1RpZWRlbWFubicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZWdvblRpZWRlbWFublhkb3Jpc1RpZWRlbWFubiAtLT4gY2xhdWRpYVRpZWRlbWFubicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnY2xhdWRpYVRpZWRlbWFubiAtLT4gY2xhdWRpYVRpZWRlbWFublhjbGF1ZGlhVGllZGVtYW5uSHVzYmFuZCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnY2xhdWRpYVRpZWRlbWFubkh1c2JhbmQgLS0+IGNsYXVkaWFUaWVkZW1hbm5YY2xhdWRpYVRpZWRlbWFubkh1c2JhbmQnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2NsYXVkaWFUaWVkZW1hbm5YY2xhdWRpYVRpZWRlbWFubkh1c2JhbmQgLS0+IHJlZ2luYVRpZWRlbWFubicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAncmVnaW5hVGllZGVtYW5uIC0tPiByZWdpbmFUaWVkZW1hbm5YYWxla3NhbmRlclRpZWRlbWFubicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnYWxla3NhbmRlclRpZWRlbWFubiAtLT4gcmVnaW5hVGllZGVtYW5uWGFsZWtzYW5kZXJUaWVkZW1hbm4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3JlZ2luYVRpZWRlbWFublhhbGVrc2FuZGVyVGllZGVtYW5uIC0tPiBiYXJ0b3N6VGllZGVtYW5uJyArICdcXG4nO1xyXG5cclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZW5kJyArICdcXG4nO1xyXG4gICAgICAgIC8vc3ViZ3JhcGggVGllZGVtYW5uIC0gZW5kXHJcblxyXG4gICAgICAgIC8vc3ViZ3JhcGggRG9wcGxlciAtIHN0YXJ0XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3N1YmdyYXBoIERvcHBsZXInICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuMFxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdkb3BwbGVySGVhZFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RvcHBsZXJIZWFkMlsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2RvcHBsZXJIZWFkM1snICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuMVxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdiZXJuZERvcHBsZXJbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIpICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2dyZXRhRG9wcGxlclsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmdyZXRhRG9wcGxlcikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZ3JldGFEb3BwbGVyWFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2Jlcm5kRG9wcGxlclhncmV0YURvcHBsZXJbIE1hcnJpZWQgXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZ3JldGFEb3BwbGVyWGdyZXRhRG9wcGxlclhbIEFmZmFpciBdJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdoZ1Rhbm5oYXVzWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuaGdUYW5uaGF1cykgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnaGdUYW5uaGF1c1hbIFVua25vd24gXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4yXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hlbGdlRG9wcGxlclsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmhlbGdlRG9wcGxlcikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnaGVsZ2VEb3BwbGVyWFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hlbGdlRG9wcGxlclhoZWxnZURvcHBsZXJYWyBNYXJyaWVkIF0nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2VsaXNhYmV0aERvcHBsZXIyWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuZWxpc2FiZXRoRG9wcGxlcikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnbm9haDJbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5ub2FoKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdlbGlzYWJldGhEb3BwbGVyMlhub2FoMlsgVW5rbm93biBdJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjNcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnY2hhcmxvdHRlRG9wcGxlclsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIpICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3BldGVyRG9wcGxlclsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnBldGVyRG9wcGxlcikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnY2hhcmxvdHRlRG9wcGxlclhwZXRlckRvcHBsZXJbIE1hcnJpZWQgXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW40XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2ZyYW56aXNrYURvcHBsZXJbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5mcmFuemlza2FEb3BwbGVyKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdlbGlzYWJldGhEb3BwbGVyWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuZWxpc2FiZXRoRG9wcGxlcikgKyAnXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9jb25uZWN0aW9uc1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdkb3BwbGVySGVhZCAtLT4gYmVybmREb3BwbGVyJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdkb3BwbGVySGVhZDIgLS0+IGdyZXRhRG9wcGxlcicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZG9wcGxlckhlYWQzIC0tPiBoZ1Rhbm5oYXVzJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdiZXJuZERvcHBsZXIgLS0+IGJlcm5kRG9wcGxlclhncmV0YURvcHBsZXInICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2dyZXRhRG9wcGxlciAtLT4gYmVybmREb3BwbGVyWGdyZXRhRG9wcGxlcicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZ3JldGFEb3BwbGVyIC0tPiBncmV0YURvcHBsZXJYZ3JldGFEb3BwbGVyWCcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZ3JldGFEb3BwbGVyWCAtLT4gZ3JldGFEb3BwbGVyWGdyZXRhRG9wcGxlclgnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2dyZXRhRG9wcGxlclhncmV0YURvcHBsZXJYIC0tPiBoZWxnZURvcHBsZXInICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hnVGFubmhhdXMgLS0+IGhnVGFubmhhdXNYJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdoZ1Rhbm5oYXVzWCAtLT4gZWxpc2FiZXRoRG9wcGxlcjInICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hlbGdlRG9wcGxlciAtLT4gaGVsZ2VEb3BwbGVyWGhlbGdlRG9wcGxlclgnICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2hlbGdlRG9wcGxlclggLS0+IGhlbGdlRG9wcGxlclhoZWxnZURvcHBsZXJYJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdoZWxnZURvcHBsZXJYaGVsZ2VEb3BwbGVyWCAtLT4gcGV0ZXJEb3BwbGVyJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdlbGlzYWJldGhEb3BwbGVyMiAtLT4gZWxpc2FiZXRoRG9wcGxlcjJYbm9haDInICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ25vYWgyIC0tPiBlbGlzYWJldGhEb3BwbGVyMlhub2FoMicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZWxpc2FiZXRoRG9wcGxlcjJYbm9haDIgLS0+IGNoYXJsb3R0ZURvcHBsZXInICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2NoYXJsb3R0ZURvcHBsZXIgLS0+IGNoYXJsb3R0ZURvcHBsZXJYcGV0ZXJEb3BwbGVyJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdwZXRlckRvcHBsZXIgLS0+IGNoYXJsb3R0ZURvcHBsZXJYcGV0ZXJEb3BwbGVyJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdjaGFybG90dGVEb3BwbGVyWHBldGVyRG9wcGxlciAtLT4gZnJhbnppc2thRG9wcGxlcicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnY2hhcmxvdHRlRG9wcGxlclhwZXRlckRvcHBsZXIgLS0+IGVsaXNhYmV0aERvcHBsZXInICsgJ1xcbic7XHJcblxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdlbmQnICsgJ1xcbic7XHJcbiAgICAgICAgLy9zdWJncmFwaCBEb3BwbGVyIC0gZW5kXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0clRvQXBwZW5kO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=