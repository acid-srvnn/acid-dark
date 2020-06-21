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
        strToAppend += 'agnesNielsen --> tronteNielsen' + '\n';
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
        return strToAppend;
    }
}
exports.TreeRenderer = TreeRenderer;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2NvbnN0YW50cy9lbnVtL2RhcmtGYW1pbHkudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25QaG90by50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZWxpbmUvdHJlZVBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZWxpbmUvdHJlZVJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdB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QUFJLENBQUM7UUFDNUIsd0JBQXdCO1FBRXhCLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FFSjtBQXBERCxvQ0FvREMiLCJmaWxlIjoiYWNpZC90cmVlLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvc3JjL3RyZWUudHNcIik7XG4iLCJpbXBvcnQgeyBEYXJrUGVyc29uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZGFya1BlcnNvblwiO1xyXG5pbXBvcnQgeyBEYXJrRmFtaWx5IH0gZnJvbSBcIi4vZW51bS9kYXJrRmFtaWx5XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25QaG90byB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25QaG90b1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuL2VudW0vYWdlR3JvdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXJrUGVyc29ucyB7XHJcblxyXG4gICAgc3RhdGljIHVua25vd25QZXJzb246IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJVbmtub3duXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidW5rbm93bnBlcnNvblwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIFVua25vd24gZmFtaWxpZXMgXHJcblxyXG4gICAgc3RhdGljIGdyZXRjaGVuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiR3JldGNoZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJncmV0Y2hlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJlcm5hZGV0dGU6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuYWRldHRlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmFkZXR0ZVwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3JiZW5Xb2xsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJUb3JiZW4gV29sbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LldvbGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ0b3JiZW53b2xsZXJcIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuYWRldHRlLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNpbGphOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2lsamFcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJzaWxqYVwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1c2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdXNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVzZW5cIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2ViYXN0aWFuS3J1Z2VyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2ViYXN0aWFuIEtydWdlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LcnVnZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwic2ViYXN0aWFua3J1Z2VyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGdUYW5uaGF1czogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkguRy4gVGFubmhhdXNcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoZ3Rhbm5oYXVzXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMganVyZ2VuT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKw7xyZ2VuIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk9iZW5kb3JmLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImp1cmdlbm9iZW5kb3JmXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVyaWtPYmVuZG9yZjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkVyaWsgT2JlbmRvcmZcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuT2JlbmRvcmYsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZXJpa29iZW5kb3JmXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5qdXJnZW5PYmVuZG9yZixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB5YXNpbkZyaWVzZTogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIllhc2luIEZyaWVzZVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Gcmllc2UsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwieWFzaW5mcmllc2VcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIE5pZWxzZW4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGFnbmVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFnbmVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJhZ25lc25pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub2FoOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTm9haFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm5vYWhcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBhbHROYW1lOiBbXCJIYW5ubyBOb2FoIFRhdWJlclwiXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cm9udGVOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVHJvbnRlIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ0cm9udGVuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5hZ25lc05pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgamFuYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKYW5hIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqYW5hbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVscmljaE5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJVbHJpY2ggTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInVscmljaG5pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWRzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZHMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hZHNuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMga2F0YXJpbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiS2F0YXJpbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImthdGFyaW5hbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hZ251c05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYWdudXMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hZ251c25pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFydGhhTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hcnRoYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWFydGhhbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtaWtrZWxOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWlra2VsIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtaWtrZWxuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLFxyXG4gICAgICAgIGFsdE5hbWU6IFtcIk1pY2hhZWwgS2hhbndhbGRcIl1cclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBLYWhud2FsZCBGYW1pbHlcclxuXHJcbiAgICBzdGF0aWMgZGFuaWVsS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEYW5pZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZGFuaWVsa2FobndhbGRcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmVzS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJJbmVzIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImluZXNrYWhud2FsZFwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWljaGFlbEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWljaGFlbCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtaWNoYWVsa2FobndhbGRcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmluZXNLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5uYWhLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhhbm5haCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoYW5uYWhrYWhud2FsZFwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuc2ViYXN0aWFuS3J1Z2VyLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGpvbmFzS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKb25hcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqb25hc2thaG53YWxkXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5taWNoYWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIERvcHBsZXIgRmFtaWx5ICAgIFxyXG5cclxuICAgIHN0YXRpYyBiZXJuZERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuZCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmRkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ3JldGFEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiR3JldGEgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImdyZXRhZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbGdlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhlbGdlIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoZWxnZWRvcHBsZXJcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmJlcm5kRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmdyZXRhRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwZXRlckRvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJQZXRlciBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwicGV0ZXJkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhcmxvdHRlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNoYXJsb3R0ZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiY2hhcmxvdHRlZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMubm9haCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcmFuemlza2FEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRnJhbnppc2thIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJmcmFuemlza2Fkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVsaXNhYmV0aERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFbGlzYWJldGggRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImVsaXNhYmV0aGRvcHBsZXJcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBUaWVkZW1hbm4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGVnb25UaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFZ29uIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZWdvbnRpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvcmlzVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRG9yaXMgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJkb3Jpc3RpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVkaWFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1ZGlhIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiY2xhdWRpYXRpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmRvcmlzVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2luYVRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlJlZ2luYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInJlZ2luYXRpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbGVrc2FuZGVyVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQWxla3NhbmRlciBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImFsZWtzYW5kZXJ0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXJ0b3N6VGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmFydG9zeiBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJhcnRvc3p0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGVudW0gQWdlR3JvdXAge1xyXG4gICAgeW91bmcgPSBcIllvdW5nXCIsXHJcbiAgICBhZHVsdCA9IFwiQWR1bHRcIixcclxuICAgIG9sZCA9IFwiT2xkXCJcclxufSIsImV4cG9ydCBlbnVtIERhcmtGYW1pbHkge1xyXG4gICAgTmllbHNlbiA9IFwiTmllbHNlblwiLFxyXG4gICAgS2FobndhbGQgPSBcIkthaG53YWxkXCIsXHJcbiAgICBUaWVkZW1hbm4gPSBcIlRpZWRlbWFublwiLFxyXG4gICAgRG9wcGxlciA9IFwiRG9wcGxlclwiLFxyXG4gICAgVW5rbm93biA9IFwiVW5rbm93blwiLFxyXG4gICAgT2JlbmRvcmYgPSBcIk9iZW5kb3JmXCIsXHJcbiAgICBGcmllc2UgPSBcIkZyaWVzZVwiLFxyXG4gICAgS3J1Z2VyID0gXCJLcnVnZXJcIixcclxuICAgIFdvbGxlciA9IFwiV29sbGVyXCJcclxufSIsImltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGFya1BlcnNvblBob3RvIHtcclxuICAgIHlvdW5nOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgYWR1bHQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBvbGQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGVyc29uIDogc3RyaW5nLCBhZ2VHcm91cHM6IEFnZUdyb3VwW118dW5kZWZpbmVkKXtcclxuICAgICAgICBpZihhZ2VHcm91cHMgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy55b3VuZyA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMC5qcGcnO1xyXG4gICAgICAgICAgICB0aGlzLmFkdWx0ID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycxLmpwZyc7XHJcbiAgICAgICAgICAgIHRoaXMub2xkID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycyLmpwZyc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueW91bmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYWR1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub2xkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZihhZ2VHcm91cHMuaW5jbHVkZXMoQWdlR3JvdXAueW91bmcpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMueW91bmcgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzAuanBnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihhZ2VHcm91cHMuaW5jbHVkZXMoQWdlR3JvdXAuYWR1bHQpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR1bHQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzEuanBnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihhZ2VHcm91cHMuaW5jbHVkZXMoQWdlR3JvdXAub2xkKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMi5qcGcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L0pRdWVyeS5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSAnLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zJztcclxuaW1wb3J0IHsgVHJlZVBhcnNlciB9IGZyb20gJy4vdHJlZWxpbmUvdHJlZVBhcnNlcic7XHJcbmltcG9ydCB7IFRyZWVSZW5kZXJlciB9IGZyb20gJy4vdHJlZWxpbmUvdHJlZVJlbmRlcmVyJztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIGxvYWRUcmVlOiBhbnk7XHJcbiAgICBtZXJtYWlkSW5pdGlhbHplOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cubG9hZFRyZWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnI2RhcmtmYW1pbHknKS5lbXB0eSgpO1xyXG4gICQoJyNkYXJrZmFtaWx5JykucmVtb3ZlQXR0cignZGF0YS1wcm9jZXNzZWQnKTtcclxuICAkKCcjZGFya2ZhbWlseScpLnJlbW92ZUNsYXNzKCdtZXJtYWlkJyk7XHJcbiAgJCgnI2RhcmtmYW1pbHknKS5hZGRDbGFzcygnbWVybWFpZCcpO1xyXG5cclxuICAkKCcjZGFya2ZhbWlseScpLmFwcGVuZChUcmVlUmVuZGVyZXIuZ2V0VHJlZTJzKCkpO1xyXG5cclxuICB3aW5kb3cubWVybWFpZEluaXRpYWx6ZSgpO1xyXG59IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZVBhcnNlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUcmVlUGVyc29uKHBlcnNvbjogRGFya1BlcnNvbikge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzJiM2MTsnY2FyZCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgPGltZyBzcmMmIzYxOyclJUlNQUdFMCUlJyBjbGFzcyYjNjE7J2NhcmQtaW1nJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICA8aW1nIHNyYyYjNjE7JyUlSU1BR0UxJSUnIGNsYXNzJiM2MTsnY2FyZC1pbWcnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgIDxpbWcgc3JjJiM2MTsnJSVJTUFHRTIlJScgY2xhc3MmIzYxOydjYXJkLWltZyc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3MmIzYxOydjYXJkLWJvZHknPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgIDxwIGNsYXNzJiM2MTsnY2FyZC10ZXh0Jz4gJSVOQU1FJSUgPC9wPlwiICtcclxuICAgICAgICAgICAgXCIgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUFHRTAlJVwiLCBwZXJzb24ucGhvdG9zLnlvdW5nID09IHVuZGVmaW5lZCA/ICcnIDogcGVyc29uLnBob3Rvcy55b3VuZy5zcGxpdCgnLycpLmpvaW4oJyYjNDc7JykpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUFHRTElJVwiLCBwZXJzb24ucGhvdG9zLmFkdWx0ID09IHVuZGVmaW5lZCA/ICcnIDogcGVyc29uLnBob3Rvcy5hZHVsdC5zcGxpdCgnLycpLmpvaW4oJyYjNDc7JykpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUFHRTIlJVwiLCBwZXJzb24ucGhvdG9zLm9sZCA9PSB1bmRlZmluZWQgPyAnJyA6IHBlcnNvbi5waG90b3Mub2xkLnNwbGl0KCcvJykuam9pbignJiM0NzsnKSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJU5BTUUlJVwiLCBwZXJzb24ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVHJlZVBhcnNlciB9IGZyb20gXCIuL3RyZWVQYXJzZXJcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVSZW5kZXJlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUcmVlMnMoKSB7XHJcbiAgICAgICAgbGV0IHN0clRvQXBwZW5kID0gJycgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZ3JhcGggVEQnICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vc3ViZ3JhcGggTmllbHNlbiAtIHN0YXJ0XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3N1YmdyYXBoIE5pZWxzZW4nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuMFxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICduaWVsc2VuSGVhZFsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnVua25vd25QZXJzb24pICsgJ10nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuMVxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdhZ25lc05pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5hZ25lc05pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ25vYWhbJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5ub2FoKSArICddJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2dlbjJcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAndHJvbnRlTmllbHNlblsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2phbmFOaWVsc2VuWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMuamFuYU5pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3Ryb250ZU5pZWxzZW5YamFuYU5pZWxzZW5bIE1hcnJpZWQgXScgKyAnXFxuJztcclxuXHJcbiAgICAgICAgLy9nZW4zXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ21hZHNOaWVsc2VuWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubWFkc05pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdrYXRhcmluYU5pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuWyBNYXJyaWVkIF0nICsgJ1xcbic7XHJcblxyXG4gICAgICAgIC8vZ2VuNFxyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdtYWdudXNOaWVsc2VuWycgKyBUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbikgKyAnXScgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnbWFydGhhTmllbHNlblsnICsgVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4pICsgJ10nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ21pa2tlbE5pZWxzZW5bJyArIFRyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuKSArICddJyArICdcXG4nO1xyXG5cclxuICAgICAgICAvL2Nvbm5lY3Rpb25zXHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ25pZWxzZW5IZWFkIC0tPiBhZ25lc05pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ25pZWxzZW5IZWFkIC0tPiBub2FoJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICdhZ25lc05pZWxzZW4gLS0+IHRyb250ZU5pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3Ryb250ZU5pZWxzZW4gLS0+IHRyb250ZU5pZWxzZW5YamFuYU5pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2phbmFOaWVsc2VuIC0tPiB0cm9udGVOaWVsc2VuWGphbmFOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd0cm9udGVOaWVsc2VuWGphbmFOaWVsc2VuIC0tPiB1bHJpY2hOaWVsc2VuJyArICdcXG4nO1xyXG4gICAgICAgIHN0clRvQXBwZW5kICs9ICd0cm9udGVOaWVsc2VuWGphbmFOaWVsc2VuIC0tPiBtYWRzTmllbHNlbicgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAndWxyaWNoTmllbHNlbiAtLT4gdWxyaWNoTmllbHNlblhrYXRhcmluYU5pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ2thdGFyaW5hTmllbHNlbiAtLT4gdWxyaWNoTmllbHNlblhrYXRhcmluYU5pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuIC0tPiBtYWdudXNOaWVsc2VuICcgKyAnXFxuJztcclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAndWxyaWNoTmllbHNlblhrYXRhcmluYU5pZWxzZW4gLS0+IG1hcnRoYU5pZWxzZW4nICsgJ1xcbic7XHJcbiAgICAgICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuIC0tPiBtaWtrZWxOaWVsc2VuJyArICdcXG4nO1xyXG5cclxuICAgICAgICBzdHJUb0FwcGVuZCArPSAnZW5kJyArICdcXG4nO1xyXG4gICAgICAgIC8vc3ViZ3JhcGggTmllbHNlbiAtIGVuZFxyXG5cclxuICAgICAgICByZXR1cm4gc3RyVG9BcHBlbmQ7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==