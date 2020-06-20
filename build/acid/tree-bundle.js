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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("unknownPerson", [ageGroup_1.AgeGroup.young]),
    father: undefined,
    mother: undefined
};
//Persons from Unknown families   
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("torbenWoller", [ageGroup_1.AgeGroup.adult]),
    father: undefined,
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("sebastianKruger", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.hgTannhaus = {
    name: "H.G. Tannhaus",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("hgTannhaus", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.jurgenObendorf = {
    name: "Jürgen Obendorf",
    family: darkFamily_1.DarkFamily.Obendorf,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("jurgenObendorf", [ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.erikObendorf = {
    name: "Erik Obendorf",
    family: darkFamily_1.DarkFamily.Obendorf,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("erikObendorf", undefined),
    father: DarkPersons.jurgenObendorf,
    mother: undefined
};
DarkPersons.yasinFriese = {
    name: "Yasin Friese",
    family: darkFamily_1.DarkFamily.Friese,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("yasinFriese", undefined),
    father: undefined,
    mother: undefined
};
//Persons from Nielsen Family
DarkPersons.agnesNielsen = {
    name: "Agnes Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("agnesNielsen", undefined),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("tronteNielsen", undefined),
    father: undefined,
    mother: DarkPersons.agnesNielsen
};
DarkPersons.janaNielsen = {
    name: "Jana Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("janaNielsen", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.ulrichNielsen = {
    name: "Ulrich Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("ulrichNielsen", undefined),
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.madsNielsen = {
    name: "Mads Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("madsNielsen", undefined),
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.katarinaNielsen = {
    name: "Katarina Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("katarinaNielsen", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.magnusNielsen = {
    name: "Magnus Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("magnusNielsen", undefined),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.marthaNielsen = {
    name: "Martha Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("marthaNielsen", undefined),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.mikkelNielsen = {
    name: "Mikkel Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("mikkelNielsen", undefined),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen,
    altName: ["Michael Khanwald"]
};
//Persons from Kahnwald Family
DarkPersons.danielKahnwald = {
    name: "Daniel Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("danielKahnwald", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.inesKahnwald = {
    name: "Ines Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("inesKahnwald", undefined),
    father: DarkPersons.danielKahnwald,
    mother: undefined
};
DarkPersons.michaelKahnwald = {
    name: "Michael Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("michaelKahnwald", undefined),
    father: undefined,
    mother: DarkPersons.inesKahnwald
};
DarkPersons.hannahKahnwald = {
    name: "Hannah Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("hannahKahnwald", undefined),
    father: DarkPersons.sebastianKruger,
    mother: undefined
};
DarkPersons.jonasKahnwald = {
    name: "Jonas Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("jonasKahnwald", undefined),
    father: DarkPersons.michaelKahnwald,
    mother: DarkPersons.hannahKahnwald
};
//Persons from Doppler Family    
DarkPersons.berndDoppler = {
    name: "Bernd Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("berndDoppler", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.gretaDoppler = {
    name: "Greta Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("gretaDoppler", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.helgeDoppler = {
    name: "Helge Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("helgeDoppler", undefined),
    father: DarkPersons.berndDoppler,
    mother: DarkPersons.gretaDoppler
};
DarkPersons.peterDoppler = {
    name: "Peter Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("peterDoppler", undefined),
    father: DarkPersons.helgeDoppler,
    mother: undefined
};
DarkPersons.charlotteDoppler = {
    name: "Charlotte Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("charlotteDoppler", undefined),
    father: DarkPersons.noah,
    mother: undefined
};
DarkPersons.franziskaDoppler = {
    name: "Franziska Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("franziskaDoppler", undefined),
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
DarkPersons.elisabethDoppler = {
    name: "Elisabeth Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("elisabethDoppler", undefined),
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
//Persons from Tiedemann Family
DarkPersons.egonTiedemann = {
    name: "Egon Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("egonTiedemann", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.dorisTiedemann = {
    name: "Doris Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("dorisTiedemann", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.claudiaTiedemann = {
    name: "Claudia Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("claudiaTiedemann", undefined),
    father: DarkPersons.egonTiedemann,
    mother: DarkPersons.dorisTiedemann
};
DarkPersons.reginaTiedemann = {
    name: "Regina Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("reginaTiedemann", undefined),
    father: undefined,
    mother: DarkPersons.claudiaTiedemann
};
DarkPersons.aleksanderTiedemann = {
    name: "Aleksander Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("aleksanderTiedemann", undefined),
    father: undefined,
    mother: undefined
};
DarkPersons.bartoszTiedemann = {
    name: "Bartosz Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("bartoszTiedemann", undefined),
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
const darkPersons_1 = __webpack_require__(/*! ./models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const treeParser_1 = __webpack_require__(/*! ./treeParser */ "./ts/src/treeParser.ts");
window.loadTree = function () {
    $('#darkfamily').empty();
    $('#darkfamily').removeAttr('data-processed');
    $('#darkfamily').removeClass('mermaid');
    $('#darkfamily').addClass('mermaid');
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
    console.log(strToAppend);
    $('#darkfamily').append(strToAppend);
    window.mermaidInitialze();
};


/***/ }),

/***/ "./ts/src/treeParser.ts":
/*!******************************!*\
  !*** ./ts/src/treeParser.ts ***!
  \******************************/
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2NvbnN0YW50cy9lbnVtL2RhcmtGYW1pbHkudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25QaG90by50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdHJlZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGtIQUErQztBQUMvQyxvSUFBZ0U7QUFDaEUsNEdB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QUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFDLENBQUMsRUFBRSxFQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFDLENBQUMsRUFBRSxFQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FFSjtBQXRCRCxnQ0FzQkMiLCJmaWxlIjoiYWNpZC90cmVlLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvc3JjL3RyZWUudHNcIik7XG4iLCJpbXBvcnQgeyBEYXJrUGVyc29uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZGFya1BlcnNvblwiO1xyXG5pbXBvcnQgeyBEYXJrRmFtaWx5IH0gZnJvbSBcIi4vZW51bS9kYXJrRmFtaWx5XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25QaG90byB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25QaG90b1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuL2VudW0vYWdlR3JvdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXJrUGVyc29ucyB7XHJcblxyXG4gICAgc3RhdGljIHVua25vd25QZXJzb246IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJVbmtub3duXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidW5rbm93blBlcnNvblwiLFtBZ2VHcm91cC55b3VuZ10pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gVW5rbm93biBmYW1pbGllcyAgIFxyXG5cclxuICAgIHN0YXRpYyBiZXJuYWRldHRlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmVybmFkZXR0ZVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJlcm5hZGV0dGVcIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9yYmVuV29sbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVG9yYmVuIFdvbGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Xb2xsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidG9yYmVuV29sbGVyXCIsW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2lsamE6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJTaWxqYVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInNpbGphXCIsW0FnZUdyb3VwLnlvdW5nXSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xhdXNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNsYXVzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJjbGF1c2VuXCIsW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2ViYXN0aWFuS3J1Z2VyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2ViYXN0aWFuIEtydWdlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LcnVnZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwic2ViYXN0aWFuS3J1Z2VyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZ1Rhbm5oYXVzOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSC5HLiBUYW5uaGF1c1wiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImhnVGFubmhhdXNcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp1cmdlbk9iZW5kb3JmOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSsO8cmdlbiBPYmVuZG9yZlwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5PYmVuZG9yZixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqdXJnZW5PYmVuZG9yZlwiLFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVyaWtPYmVuZG9yZjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkVyaWsgT2JlbmRvcmZcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuT2JlbmRvcmYsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZXJpa09iZW5kb3JmXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHlhc2luRnJpZXNlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiWWFzaW4gRnJpZXNlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkZyaWVzZSxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ5YXNpbkZyaWVzZVwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBOaWVsc2VuIEZhbWlseVxyXG5cclxuICAgIHN0YXRpYyBhZ25lc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJBZ25lcyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYWduZXNOaWVsc2VuXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub2FoOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTm9haFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm5vYWhcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIGFsdE5hbWU6IFtcIkhhbm5vIE5vYWggVGF1YmVyXCJdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyb250ZU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJUcm9udGUgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInRyb250ZU5pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuYWduZXNOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGphbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSmFuYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiamFuYU5pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVscmljaE5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJVbHJpY2ggTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInVscmljaE5pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmphbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hZHNOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFkcyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWFkc05pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmphbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGthdGFyaW5hTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkthdGFyaW5hIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJrYXRhcmluYU5pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hZ251c05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYWdudXMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hZ251c05pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXJ0aGFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFydGhhIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtYXJ0aGFOaWVsc2VuXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWlra2VsTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pa2tlbCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWlra2VsTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLFxyXG4gICAgICAgIGFsdE5hbWU6IFtcIk1pY2hhZWwgS2hhbndhbGRcIl1cclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBLYWhud2FsZCBGYW1pbHlcclxuXHJcbiAgICBzdGF0aWMgZGFuaWVsS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEYW5pZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZGFuaWVsS2FobndhbGRcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluZXNLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkluZXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaW5lc0thaG53YWxkXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pY2hhZWxLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pY2hhZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWljaGFlbEthaG53YWxkXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmluZXNLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5uYWhLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhhbm5haCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoYW5uYWhLYWhud2FsZFwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5zZWJhc3RpYW5LcnVnZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgam9uYXNLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkpvbmFzIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImpvbmFzS2FobndhbGRcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMubWljaGFlbEthaG53YWxkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBEb3BwbGVyIEZhbWlseSAgICBcclxuXHJcbiAgICBzdGF0aWMgYmVybmREb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmVybmQgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJlcm5kRG9wcGxlclwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ3JldGFEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiR3JldGEgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImdyZXRhRG9wcGxlclwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVsZ2VEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSGVsZ2UgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImhlbGdlRG9wcGxlclwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5ncmV0YURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGV0ZXJEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUGV0ZXIgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInBldGVyRG9wcGxlclwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhcmxvdHRlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNoYXJsb3R0ZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiY2hhcmxvdHRlRG9wcGxlclwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5ub2FoLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyYW56aXNrYURvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJGcmFuemlza2EgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImZyYW56aXNrYURvcHBsZXJcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbGlzYWJldGhEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRWxpc2FiZXRoIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJlbGlzYWJldGhEb3BwbGVyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBUaWVkZW1hbm4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGVnb25UaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFZ29uIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZWdvblRpZWRlbWFublwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG9yaXNUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEb3JpcyBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImRvcmlzVGllZGVtYW5uXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1ZGlhVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdWRpYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVkaWFUaWVkZW1hbm5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmRvcmlzVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2luYVRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlJlZ2luYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInJlZ2luYVRpZWRlbWFublwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFsZWtzYW5kZXJUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJBbGVrc2FuZGVyIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYWxla3NhbmRlclRpZWRlbWFublwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmFydG9zelRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkJhcnRvc3ogVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJiYXJ0b3N6VGllZGVtYW5uXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGVudW0gQWdlR3JvdXAge1xyXG4gICAgeW91bmcgPSBcIllvdW5nXCIsXHJcbiAgICBhZHVsdCA9IFwiQWR1bHRcIixcclxuICAgIG9sZCA9IFwiT2xkXCJcclxufSIsImV4cG9ydCBlbnVtIERhcmtGYW1pbHkge1xyXG4gICAgTmllbHNlbiA9IFwiTmllbHNlblwiLFxyXG4gICAgS2FobndhbGQgPSBcIkthaG53YWxkXCIsXHJcbiAgICBUaWVkZW1hbm4gPSBcIlRpZWRlbWFublwiLFxyXG4gICAgRG9wcGxlciA9IFwiRG9wcGxlclwiLFxyXG4gICAgVW5rbm93biA9IFwiVW5rbm93blwiLFxyXG4gICAgT2JlbmRvcmYgPSBcIk9iZW5kb3JmXCIsXHJcbiAgICBGcmllc2UgPSBcIkZyaWVzZVwiLFxyXG4gICAgS3J1Z2VyID0gXCJLcnVnZXJcIixcclxuICAgIFdvbGxlciA9IFwiV29sbGVyXCJcclxufSIsImltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGFya1BlcnNvblBob3RvIHtcclxuICAgIHlvdW5nOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgYWR1bHQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBvbGQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGVyc29uIDogc3RyaW5nLCBhZ2VHcm91cHM6IEFnZUdyb3VwW118dW5kZWZpbmVkKXtcclxuICAgICAgICBpZihhZ2VHcm91cHMgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy55b3VuZyA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMC5qcGcnO1xyXG4gICAgICAgICAgICB0aGlzLmFkdWx0ID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycxLmpwZyc7XHJcbiAgICAgICAgICAgIHRoaXMub2xkID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycyLmpwZyc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueW91bmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYWR1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub2xkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZihhZ2VHcm91cHMuaW5jbHVkZXMoQWdlR3JvdXAueW91bmcpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMueW91bmcgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzAuanBnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihhZ2VHcm91cHMuaW5jbHVkZXMoQWdlR3JvdXAuYWR1bHQpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR1bHQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzEuanBnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihhZ2VHcm91cHMuaW5jbHVkZXMoQWdlR3JvdXAub2xkKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMi5qcGcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L0pRdWVyeS5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IEVwaXNvZGUxIH0gZnJvbSAnLi9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMSc7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gJy4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50JztcclxuaW1wb3J0IHsgRXBpc29kZTIgfSBmcm9tICcuL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUyJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gJy4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29ucyc7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tICcuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb24nO1xyXG5pbXBvcnQgeyBUcmVlUGFyc2VyIH0gZnJvbSAnLi90cmVlUGFyc2VyJztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICBsb2FkVHJlZTogYW55O1xyXG4gICAgICBtZXJtYWlkSW5pdGlhbHplOiBhbnk7XHJcbiAgICB9XHJcbn1cclxuICBcclxud2luZG93LmxvYWRUcmVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2RhcmtmYW1pbHknKS5lbXB0eSgpO1xyXG4gICAgJCgnI2RhcmtmYW1pbHknKS5yZW1vdmVBdHRyKCdkYXRhLXByb2Nlc3NlZCcpO1xyXG4gICAgJCgnI2RhcmtmYW1pbHknKS5yZW1vdmVDbGFzcygnbWVybWFpZCcpO1xyXG4gICAgJCgnI2RhcmtmYW1pbHknKS5hZGRDbGFzcygnbWVybWFpZCcpO1xyXG4gICAgbGV0IHN0clRvQXBwZW5kID0gJycrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAnZ3JhcGggVEQnICsnXFxuJztcclxuXHJcbiAgICAvL3N1YmdyYXBoIE5pZWxzZW4gLSBzdGFydFxyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ3N1YmdyYXBoIE5pZWxzZW4nICsnXFxuJztcclxuXHJcbiAgICAvL2dlbjBcclxuICAgIHN0clRvQXBwZW5kICs9ICduaWVsc2VuSGVhZFsnK1RyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy51bmtub3duUGVyc29uKSsnXScrJ1xcbic7XHJcbiAgICBcclxuICAgIC8vZ2VuMVxyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ2FnbmVzTmllbHNlblsnK1RyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5hZ25lc05pZWxzZW4pKyddJysnXFxuJztcclxuICAgIHN0clRvQXBwZW5kICs9ICdub2FoWycrVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLm5vYWgpKyddJysnXFxuJztcclxuXHJcbiAgICAvL2dlbjJcclxuICAgIHN0clRvQXBwZW5kICs9ICd0cm9udGVOaWVsc2VuWycrVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4pKyddJysnXFxuJztcclxuICAgIHN0clRvQXBwZW5kICs9ICdqYW5hTmllbHNlblsnK1RyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy5qYW5hTmllbHNlbikrJ10nKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ3Ryb250ZU5pZWxzZW5YamFuYU5pZWxzZW5bIE1hcnJpZWQgXScrJ1xcbic7XHJcbiAgICBcclxuICAgIC8vZ2VuM1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ21hZHNOaWVsc2VuWycrVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLm1hZHNOaWVsc2VuKSsnXScrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAndWxyaWNoTmllbHNlblsnK1RyZWVQYXJzZXIuZ2V0VHJlZVBlcnNvbihEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuKSsnXScrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAna2F0YXJpbmFOaWVsc2VuWycrVHJlZVBhcnNlci5nZXRUcmVlUGVyc29uKERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbikrJ10nKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ3VscmljaE5pZWxzZW5Ya2F0YXJpbmFOaWVsc2VuWyBNYXJyaWVkIF0nKydcXG4nO1xyXG5cclxuICAgIC8vZ2VuNFxyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ21hZ251c05pZWxzZW5bJytUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbikrJ10nKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ21hcnRoYU5pZWxzZW5bJytUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubWFydGhhTmllbHNlbikrJ10nKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ21pa2tlbE5pZWxzZW5bJytUcmVlUGFyc2VyLmdldFRyZWVQZXJzb24oRGFya1BlcnNvbnMubWlra2VsTmllbHNlbikrJ10nKydcXG4nO1xyXG4gICAgXHJcbiAgICAvL2Nvbm5lY3Rpb25zXHJcbiAgICBzdHJUb0FwcGVuZCArPSAnbmllbHNlbkhlYWQgLS0+IGFnbmVzTmllbHNlbicrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAnbmllbHNlbkhlYWQgLS0+IG5vYWgnKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ2FnbmVzTmllbHNlbiAtLT4gdHJvbnRlTmllbHNlbicrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAndHJvbnRlTmllbHNlbiAtLT4gdHJvbnRlTmllbHNlblhqYW5hTmllbHNlbicrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAnamFuYU5pZWxzZW4gLS0+IHRyb250ZU5pZWxzZW5YamFuYU5pZWxzZW4nKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ3Ryb250ZU5pZWxzZW5YamFuYU5pZWxzZW4gLS0+IHVscmljaE5pZWxzZW4nKydcXG4nO1xyXG4gICAgc3RyVG9BcHBlbmQgKz0gJ3Ryb250ZU5pZWxzZW5YamFuYU5pZWxzZW4gLS0+IG1hZHNOaWVsc2VuJysnXFxuJztcclxuICAgIHN0clRvQXBwZW5kICs9ICd1bHJpY2hOaWVsc2VuIC0tPiB1bHJpY2hOaWVsc2VuWGthdGFyaW5hTmllbHNlbicrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAna2F0YXJpbmFOaWVsc2VuIC0tPiB1bHJpY2hOaWVsc2VuWGthdGFyaW5hTmllbHNlbicrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAndWxyaWNoTmllbHNlblhrYXRhcmluYU5pZWxzZW4gLS0+IG1hZ251c05pZWxzZW4gJysnXFxuJztcclxuICAgIHN0clRvQXBwZW5kICs9ICd1bHJpY2hOaWVsc2VuWGthdGFyaW5hTmllbHNlbiAtLT4gbWFydGhhTmllbHNlbicrJ1xcbic7XHJcbiAgICBzdHJUb0FwcGVuZCArPSAndWxyaWNoTmllbHNlblhrYXRhcmluYU5pZWxzZW4gLS0+IG1pa2tlbE5pZWxzZW4nKydcXG4nO1xyXG5cclxuICAgIHN0clRvQXBwZW5kICs9ICdlbmQnKydcXG4nO1xyXG4gICAgLy9zdWJncmFwaCBOaWVsc2VuIC0gZW5kXHJcblxyXG4gICAgY29uc29sZS5sb2coc3RyVG9BcHBlbmQpO1xyXG4gICAgJCgnI2RhcmtmYW1pbHknKS5hcHBlbmQoc3RyVG9BcHBlbmQpO1xyXG4gICAgd2luZG93Lm1lcm1haWRJbml0aWFsemUoKTtcclxufSIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29uSW5EYXJrRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uSW5kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbEluRGFya0V2ZW50IH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbEluRGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZVBhcnNlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRUcmVlUGVyc29uKHBlcnNvbjogRGFya1BlcnNvbil7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgIFwiPGRpdiBjbGFzcyYjNjE7J2NhcmQnPlwiICtcclxuICAgICAgICBcIiAgIDxkaXY+XCIgK1xyXG4gICAgICAgIFwiICAgICAgICA8aW1nIHNyYyYjNjE7JyUlSU1BR0UwJSUnIGNsYXNzJiM2MTsnY2FyZC1pbWcnPlwiICtcclxuICAgICAgICBcIiAgICAgICAgPGltZyBzcmMmIzYxOyclJUlNQUdFMSUlJyBjbGFzcyYjNjE7J2NhcmQtaW1nJz5cIiArXHJcbiAgICAgICAgXCIgICAgICAgIDxpbWcgc3JjJiM2MTsnJSVJTUFHRTIlJScgY2xhc3MmIzYxOydjYXJkLWltZyc+XCIgK1xyXG4gICAgICAgIFwiICAgIDwvZGl2PlwiICtcclxuICAgICAgICBcIiAgICA8ZGl2IGNsYXNzJiM2MTsnY2FyZC1ib2R5Jz5cIiArXHJcbiAgICAgICAgXCIgICAgICAgIDxwIGNsYXNzJiM2MTsnY2FyZC10ZXh0Jz4gJSVOQU1FJSUgPC9wPlwiICtcclxuICAgICAgICBcIiAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlSU1BR0UwJSVcIiwgcGVyc29uLnBob3Rvcy55b3VuZyA9PSB1bmRlZmluZWQ/ICcnOnBlcnNvbi5waG90b3MueW91bmcuc3BsaXQoJy8nKS5qb2luKCcmIzQ3OycpKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlSU1BR0UxJSVcIiwgcGVyc29uLnBob3Rvcy5hZHVsdCA9PSB1bmRlZmluZWQ/ICcnOnBlcnNvbi5waG90b3MuYWR1bHQuc3BsaXQoJy8nKS5qb2luKCcmIzQ3OycpKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlSU1BR0UyJSVcIiwgcGVyc29uLnBob3Rvcy5vbGQgPT0gdW5kZWZpbmVkPyAnJzpwZXJzb24ucGhvdG9zLm9sZC5zcGxpdCgnLycpLmpvaW4oJyYjNDc7JykpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVOQU1FJSVcIiwgcGVyc29uLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=