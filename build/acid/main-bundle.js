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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/src/events/events.ts":
/*!*********************************!*\
  !*** ./ts/src/events/events.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsProvider = void 0;
class EventsProvider {
}
exports.EventsProvider = EventsProvider;


/***/ }),

/***/ "./ts/src/events/season1/episode1.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode1.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode1 = void 0;
const events_1 = __webpack_require__(/*! ../events */ "./ts/src/events/events.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
class Episode1 extends events_1.EventsProvider {
    getEvents() {
        let events = [];
        events.push({
            title: 'Michael commits suicide',
            description: 'Michael commits suicide leaving behind a letter `Do not open before November 4, 10:13 PM`',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2019 13:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Hannah fucks Ulrich',
            description: 'Jonas wakes from a nightmare as usual. Hannah fucks Ulrich. Ulrich invites Hannah for the Ulrich-Katarina anniversary that night. Hannah is disappointed for not receiving `I love you` back',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Winden caves intro',
            description: 'Jonas leaves for school. Erik Obendorf is missing. Winden caves is located 3.5 kms from Winde. Jonas talks with his therapist Peter about his dreams and anger related to his dad',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:01").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Power Plant intro',
            description: 'Winden Nuclear Power Plant. Project plan started in 1953 and authorized in 1960. To be decommissioned in 2020 due to government. Ines has the letter left by Michael',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:02").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Nielsen Family intro',
            description: 'Magnus hoodie is missing. Mikkel likes magic. `The question isnt how, its when`',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.magnusNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:03").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Jonas goes to school',
            description: 'Jonas goes to school for first time after his dads suicide. Meets his friend Bartosz. Bartosz hid the fact about Jonas dad to the school people, Instead he told that Jonas was in two month exchage school in France. Martha now likes Bartosz as Jonas was missing for long time. Principal katarina talks to students about missing Erik. Bartosz plans on getting Erik`s stash',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:04").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Erik Investigation',
            description: '49 tire tracks including 2 trucks. 21,312 vehicles in Winden.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:05").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        events.push({
            title: 'Mikkel goes missing',
            description: 'The kids go searching for Erik`s stash near Winden Caves. Parents do a meeting to discuss on Erik. Ines reads Micheal`s letter. Strange noise from caves. Mikkel goes missing',
            persons: [{ person: darkPersons_1.DarkPersons.magnusNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.franziskaDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult }
            ],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt111, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/04/2019 22:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 1)
        });
        return events;
    }
}
exports.Episode1 = Episode1;


/***/ }),

/***/ "./ts/src/events/season1/episode2.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode2.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode2 = void 0;
const events_1 = __webpack_require__(/*! ../events */ "./ts/src/events/events.ts");
class Episode2 extends events_1.EventsProvider {
    getEvents() {
        let events = [];
        return events;
    }
}
exports.Episode2 = Episode2;


/***/ }),

/***/ "./ts/src/events/timeTravels.ts":
/*!**************************************!*\
  !*** ./ts/src/events/timeTravels.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTravels = void 0;
const timeLine_1 = __webpack_require__(/*! ../models/constants/enum/timeLine */ "./ts/src/models/constants/enum/timeLine.ts");
const timeTravelDevice_1 = __webpack_require__(/*! ../models/constants/enum/timeTravelDevice */ "./ts/src/models/constants/enum/timeTravelDevice.ts");
const darkPersons_1 = __webpack_require__(/*! ../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
class TimeTravels {
}
exports.TimeTravels = TimeTravels;
TimeTravels.tt111 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young }]
};


/***/ }),

/***/ "./ts/src/main.ts":
/*!************************!*\
  !*** ./ts/src/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const episode1_1 = __webpack_require__(/*! ./events/season1/episode1 */ "./ts/src/events/season1/episode1.ts");
const episode2_1 = __webpack_require__(/*! ./events/season1/episode2 */ "./ts/src/events/season1/episode2.ts");
const parser_1 = __webpack_require__(/*! ./parser */ "./ts/src/parser.ts");
let events = [];
events = events.concat((new episode1_1.Episode1).getEvents());
events = events.concat((new episode2_1.Episode2).getEvents());
events.sort((a, b) => {
    return (a.worldTimeInMillis > b.worldTimeInMillis) ? 1 : -1;
});
events.forEach(event => {
    let worldTimeInMillis = new Date(event.worldTimeInMillis);
    let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();
    if (!$("#" + monthAndYear).length) {
        $('#dark-container .timeline').append(parser_1.Parser.getMonthAndYearHtml(event));
    }
    let date = "date_" + worldTimeInMillis.getDate() + "_" + monthAndYear;
    if (!$("#" + date).length) {
        $('#dark-container .timeline').append(parser_1.Parser.getDateHtml(event));
    }
    $("#" + date).append(parser_1.Parser.getEventHtml(event));
});


/***/ }),

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
class DarkPersons {
}
exports.DarkPersons = DarkPersons;
DarkPersons.unknownPerson = {
    name: "Unknown",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.agnesNielsen = {
    name: "Agnes Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.noah = {
    name: "Noah",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined,
    altName: ["Hanno Noah Tauber"]
};
DarkPersons.tronteNielsen = {
    name: "Tronte Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: undefined,
    mother: DarkPersons.agnesNielsen
};
DarkPersons.janaNielsen = {
    name: "Jana Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.ulrichNielsen = {
    name: "Ulrich Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.madsNielsen = {
    name: "Mads Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.katarinaNielsen = {
    name: "Katarina Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.magnusNielsen = {
    name: "Magnus Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.marthaNielsen = {
    name: "Martha Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.mikkelNielsen = {
    name: "Mikkel Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: [],
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen,
    altName: ["Michael Khanwald"]
};
DarkPersons.inesKahnwald = {
    name: "Ines Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.michaelKahnwald = {
    name: "Michael Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: undefined,
    mother: DarkPersons.inesKahnwald
};
DarkPersons.hannahKahnwald = {
    name: "Hannah Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.jonasKahnwald = {
    name: "Jonas Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: DarkPersons.michaelKahnwald,
    mother: DarkPersons.hannahKahnwald
};
DarkPersons.helgeDoppler = {
    name: "Helge Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: undefined,
    mother: undefined //TODO
};
DarkPersons.peterDoppler = {
    name: "Peter Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: DarkPersons.helgeDoppler,
    mother: undefined
};
DarkPersons.bartoszTiedemann = {
    name: "Bartosz Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.charlotteDoppler = {
    name: "Charlotte Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.franziskaDoppler = {
    name: "Franziska Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.reginaTiedemann = {
    name: "Regina Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: undefined,
    mother: undefined
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
    DarkFamily[DarkFamily["Nielsen"] = 0] = "Nielsen";
    DarkFamily[DarkFamily["Kahnwald"] = 1] = "Kahnwald";
    DarkFamily[DarkFamily["Tiedemann"] = 2] = "Tiedemann";
    DarkFamily[DarkFamily["Doppler"] = 3] = "Doppler";
    DarkFamily[DarkFamily["Unknown"] = 4] = "Unknown";
})(DarkFamily = exports.DarkFamily || (exports.DarkFamily = {}));


/***/ }),

/***/ "./ts/src/models/constants/enum/timeLine.ts":
/*!**************************************************!*\
  !*** ./ts/src/models/constants/enum/timeLine.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLine = void 0;
var TimeLine;
(function (TimeLine) {
    TimeLine[TimeLine["t1920"] = 0] = "t1920";
    TimeLine[TimeLine["t1953"] = 1] = "t1953";
    TimeLine[TimeLine["t1986"] = 2] = "t1986";
    TimeLine[TimeLine["t2019"] = 3] = "t2019";
    TimeLine[TimeLine["t2052"] = 4] = "t2052";
})(TimeLine = exports.TimeLine || (exports.TimeLine = {}));


/***/ }),

/***/ "./ts/src/models/constants/enum/timeTravelDevice.ts":
/*!**********************************************************!*\
  !*** ./ts/src/models/constants/enum/timeTravelDevice.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTravelDevice = void 0;
var TimeTravelDevice;
(function (TimeTravelDevice) {
    TimeTravelDevice[TimeTravelDevice["t1920Device"] = 0] = "t1920Device";
    TimeTravelDevice[TimeTravelDevice["cave"] = 1] = "cave";
    TimeTravelDevice[TimeTravelDevice["tannhausDevice"] = 2] = "tannhausDevice";
    TimeTravelDevice[TimeTravelDevice["altMarthaDevice"] = 3] = "altMarthaDevice";
    TimeTravelDevice[TimeTravelDevice["powerPlant"] = 4] = "powerPlant";
})(TimeTravelDevice = exports.TimeTravelDevice || (exports.TimeTravelDevice = {}));


/***/ }),

/***/ "./ts/src/models/constants/enum/timeTravelType.ts":
/*!********************************************************!*\
  !*** ./ts/src/models/constants/enum/timeTravelType.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTravelType = void 0;
var TimeTravelType;
(function (TimeTravelType) {
    TimeTravelType[TimeTravelType["in"] = 0] = "in";
    TimeTravelType[TimeTravelType["out"] = 1] = "out";
})(TimeTravelType = exports.TimeTravelType || (exports.TimeTravelType = {}));


/***/ }),

/***/ "./ts/src/parser.ts":
/*!**************************!*\
  !*** ./ts/src/parser.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const timeTravelType_1 = __webpack_require__(/*! ./models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
class Parser {
    static getDateHtml(event) {
        let returnStr = "" +
            "<div class='timeline-section'>" +
            "   <div class='timeline-date'>" +
            "   %%DATESTR%%" +
            "   </div>" +
            "   <div id='%%DATE%%' class='row'>" +
            "   </div>" +
            "</div>";
        let worldTimeInMillis = new Date(event.worldTimeInMillis);
        let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();
        let date = "date_" + worldTimeInMillis.getDate() + "_" + monthAndYear;
        let dateStr = Parser.monthNames[worldTimeInMillis.getMonth()] + " " + worldTimeInMillis.getDate().toString() + ", " + worldTimeInMillis.getFullYear();
        returnStr = returnStr.replace("%%DATESTR%%", dateStr);
        returnStr = returnStr.replace("%%DATE%%", date);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    static getMonthAndYearHtml(event) {
        let returnStr = "" +
            "<div id='%%ID%%' class='timeline-month'>" +
            "%%MONTHANDYEAR%%" +
            "</div>";
        let worldTimeInMillis = new Date(event.worldTimeInMillis);
        let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();
        let monthAndYearStr = Parser.monthNames[worldTimeInMillis.getMonth()] + ", " + worldTimeInMillis.getFullYear();
        returnStr = returnStr.replace("%%MONTHANDYEAR%%", monthAndYearStr);
        returnStr = returnStr.replace("%%ID%%", monthAndYear);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    static getEventHtml(event) {
        let returnStr = "" +
            "<div class='col-sm-4'>" +
            "   <div class='timeline-box'>" +
            "       <div class='box-title'>" +
            "           <i class='fa fa-asterisk text-success' aria - hidden='true' > </i>" +
            "           %%TITLE%%" +
            "       </div>" +
            "       <div class='box-content' style='height:100px'>" +
            "           <a class='btn btn-xs btn-default pull-right' > Details </a>" +
            "           <div class='box-item'> %%DESCRIPTION%% </div>" +
            "       </div>" +
            "       %%TIMETRAVELS%%" +
            "       <div class='box-footer'> %%PERSONS%% </div>" +
            "   </div>" +
            "</div>";
        returnStr = returnStr.replace("%%TITLE%%", event.title);
        let des = event.description;
        if (des.length > 100) {
            des = des.substring(0, 100) + '...';
        }
        returnStr = returnStr.replace("%%DESCRIPTION%%", des);
        let timeTravels = '';
        if (event.timeTravels) {
            event.timeTravels.forEach(timeTravel => {
                timeTravels = timeTravels + Parser.getTimeTravelHtml(timeTravel);
            });
        }
        returnStr = returnStr.replace("%%TIMETRAVELS%%", timeTravels);
        let persons = '';
        event.persons.forEach(person => {
            persons = persons + '<img src="' + Parser.getPersonImage(person) + '" style="padding: 1px;width: 30px;height: 30px;" title="' + person.person.name + '"> ';
        });
        returnStr = returnStr.replace("%%PERSONS%%", persons);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    static getTimeTravelHtml(timeTravel) {
        let returnStr = "" +
            "<div class='%%CLASS%%' > %%PERSONS%% </div>";
        let persons = '';
        timeTravel.timeTravel.persons.forEach(person => {
            persons = persons + '<img src="' + Parser.getPersonImage(person) + '" style="padding: 1px;width: 30px;height: 30px;" title="' + person.person.name + '"> ';
        });
        returnStr = returnStr.replace("%%PERSONS%%", persons);
        if (timeTravel.type == timeTravelType_1.TimeTravelType.in) {
            returnStr = returnStr.replace("%%CLASS%%", 'box-footer-time-in');
        }
        else {
            returnStr = returnStr.replace("%%CLASS%%", 'box-footer-time-out');
        }
        return returnStr;
    }
    static getPersonImage(person) {
        if (person.person.photos[1]) {
            return person.person.photos[1].url;
        }
        else if (person.person.photos[0]) {
            return person.person.photos[0].url;
        }
        else if (person.person.photos[2]) {
            return person.person.photos[2].url;
        }
        else {
            return 'assets/unknownperson.jpg';
        }
    }
}
exports.Parser = Parser;
Parser.monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMi50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3RpbWVUcmF2ZWxzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9kYXJrRmFtaWx5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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QUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN0QzthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sMEJBQTBCLENBQUM7U0FDckM7SUFDTCxDQUFDOztBQS9HTCx3QkFnSEM7QUE5R1UsaUJBQVUsR0FBRztJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7Q0FDYixDQUFDIiwiZmlsZSI6ImFjaWQvbWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFdmVudHMoKTogRGFya0V2ZW50W11cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlMSBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWNoYWVsIGNvbW1pdHMgc3VpY2lkZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWljaGFlbCBjb21taXRzIHN1aWNpZGUgbGVhdmluZyBiZWhpbmQgYSBsZXR0ZXIgYERvIG5vdCBvcGVuIGJlZm9yZSBOb3ZlbWJlciA0LCAxMDoxMyBQTWAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjA2LzIxLzIwMTkgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyAxKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFubmFoIGZ1Y2tzIFVscmljaCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgd2FrZXMgZnJvbSBhIG5pZ2h0bWFyZSBhcyB1c3VhbC4gSGFubmFoIGZ1Y2tzIFVscmljaC4gVWxyaWNoIGludml0ZXMgSGFubmFoIGZvciB0aGUgVWxyaWNoLUthdGFyaW5hIGFubml2ZXJzYXJ5IHRoYXQgbmlnaHQuIEhhbm5haCBpcyBkaXNhcHBvaW50ZWQgZm9yIG5vdCByZWNlaXZpbmcgYEkgbG92ZSB5b3VgIGJhY2snLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyAxKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2luZGVuIGNhdmVzIGludHJvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBsZWF2ZXMgZm9yIHNjaG9vbC4gRXJpayBPYmVuZG9yZiBpcyBtaXNzaW5nLiBXaW5kZW4gY2F2ZXMgaXMgbG9jYXRlZCAzLjUga21zIGZyb20gV2luZGUuIEpvbmFzIHRhbGtzIHdpdGggaGlzIHRoZXJhcGlzdCBQZXRlciBhYm91dCBoaXMgZHJlYW1zIGFuZCBhbmdlciByZWxhdGVkIHRvIGhpcyBkYWQnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDFcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyAxKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG93ZXIgUGxhbnQgaW50cm8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dpbmRlbiBOdWNsZWFyIFBvd2VyIFBsYW50LiBQcm9qZWN0IHBsYW4gc3RhcnRlZCBpbiAxOTUzIGFuZCBhdXRob3JpemVkIGluIDE5NjAuIFRvIGJlIGRlY29tbWlzc2lvbmVkIGluIDIwMjAgZHVlIHRvIGdvdmVybm1lbnQuIEluZXMgaGFzIHRoZSBsZXR0ZXIgbGVmdCBieSBNaWNoYWVsJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAyXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDEgKiAxMDAwICsgMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ05pZWxzZW4gRmFtaWx5IGludHJvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYWdudXMgaG9vZGllIGlzIG1pc3NpbmcuIE1pa2tlbCBsaWtlcyBtYWdpYy4gYFRoZSBxdWVzdGlvbiBpc250IGhvdywgaXRzIHdoZW5gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAzXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDEgKiAxMDAwICsgMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGdvZXMgdG8gc2Nob29sJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBnb2VzIHRvIHNjaG9vbCBmb3IgZmlyc3QgdGltZSBhZnRlciBoaXMgZGFkcyBzdWljaWRlLiBNZWV0cyBoaXMgZnJpZW5kIEJhcnRvc3ouIEJhcnRvc3ogaGlkIHRoZSBmYWN0IGFib3V0IEpvbmFzIGRhZCB0byB0aGUgc2Nob29sIHBlb3BsZSwgSW5zdGVhZCBoZSB0b2xkIHRoYXQgSm9uYXMgd2FzIGluIHR3byBtb250aCBleGNoYWdlIHNjaG9vbCBpbiBGcmFuY2UuIE1hcnRoYSBub3cgbGlrZXMgQmFydG9zeiBhcyBKb25hcyB3YXMgbWlzc2luZyBmb3IgbG9uZyB0aW1lLiBQcmluY2lwYWwga2F0YXJpbmEgdGFsa3MgdG8gc3R1ZGVudHMgYWJvdXQgbWlzc2luZyBFcmlrLiBCYXJ0b3N6IHBsYW5zIG9uIGdldHRpbmcgRXJpa2BzIHN0YXNoJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjA0XCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDEgKiAxMDAwICsgMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VyaWsgSW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNDkgdGlyZSB0cmFja3MgaW5jbHVkaW5nIDIgdHJ1Y2tzLiAyMSwzMTIgdmVoaWNsZXMgaW4gV2luZGVuLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjA1XCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDEgKiAxMDAwICsgMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pa2tlbCBnb2VzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBraWRzIGdvIHNlYXJjaGluZyBmb3IgRXJpa2BzIHN0YXNoIG5lYXIgV2luZGVuIENhdmVzLiBQYXJlbnRzIGRvIGEgbWVldGluZyB0byBkaXNjdXNzIG9uIEVyaWsuIEluZXMgcmVhZHMgTWljaGVhbGBzIGxldHRlci4gU3RyYW5nZSBub2lzZSBmcm9tIGNhdmVzLiBNaWtrZWwgZ29lcyBtaXNzaW5nJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5tYWdudXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmZyYW56aXNrYURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDExMSwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDIyOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDEgKiAxMDAwICsgMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1wiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTIgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGltZVRyYXZlbCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy90aW1lVHJhdmVsXCI7XHJcbmltcG9ydCB7IFRpbWVMaW5lIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lTGluZVwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsRGV2aWNlIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVRyYXZlbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyB0dDExMTogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICB0bzogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmNhdmUsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9KUXVlcnkuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBFcGlzb2RlMSB9IGZyb20gJy4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTEnO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tICcuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudCc7XHJcbmltcG9ydCB7IEVwaXNvZGUyIH0gZnJvbSAnLi9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMic7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuXHJcbmxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcbmV2ZW50cyA9IGV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlMSkuZ2V0RXZlbnRzKCkpO1xyXG5ldmVudHMgPSBldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTIpLmdldEV2ZW50cygpKTtcclxuXHJcbmV2ZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgcmV0dXJuIChhLndvcmxkVGltZUluTWlsbGlzID4gYi53b3JsZFRpbWVJbk1pbGxpcykgPyAxIDogLTFcclxufSk7XHJcblxyXG5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblxyXG4gIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBpZiAoISQoXCIjXCIgKyBtb250aEFuZFllYXIpLmxlbmd0aCkge1xyXG4gICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmFwcGVuZChQYXJzZXIuZ2V0TW9udGhBbmRZZWFySHRtbChldmVudCkpXHJcbiAgfVxyXG5cclxuICBsZXQgZGF0ZSA9IFwiZGF0ZV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKSArIFwiX1wiICsgbW9udGhBbmRZZWFyO1xyXG5cclxuICBpZiAoISQoXCIjXCIgKyBkYXRlKS5sZW5ndGgpIHtcclxuICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldERhdGVIdG1sKGV2ZW50KSlcclxuICB9XHJcblxyXG4gICQoXCIjXCIgKyBkYXRlKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50SHRtbChldmVudCkpO1xyXG5cclxufSlcclxuIiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgRGFya0ZhbWlseSB9IGZyb20gXCIuL2VudW0vZGFya0ZhbWlseVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25zIHtcclxuXHJcbiAgICBzdGF0aWMgdW5rbm93blBlcnNvbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVua25vd25cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFnbmVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFnbmVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vYWg6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJOb2FoXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBhbHROYW1lOiBbXCJIYW5ubyBOb2FoIFRhdWJlclwiXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cm9udGVOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVHJvbnRlIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuYWduZXNOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGphbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSmFuYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bHJpY2hOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVWxyaWNoIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmphbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hZHNOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFkcyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBrYXRhcmluYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJLYXRhcmluYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWdudXNOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFnbnVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXJ0aGFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFydGhhIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtaWtrZWxOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWlra2VsIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbixcclxuICAgICAgICBhbHROYW1lOiBbXCJNaWNoYWVsIEtoYW53YWxkXCJdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluZXNLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkluZXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWljaGFlbEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWljaGFlbCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmluZXNLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5uYWhLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhhbm5haCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqb25hc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSm9uYXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm1pY2hhZWxLYWhud2FsZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbGdlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhlbGdlIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZCAvL1RPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGV0ZXJEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUGV0ZXIgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGJhcnRvc3pUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCYXJ0b3N6IFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhcmxvdHRlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNoYXJsb3R0ZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJhbnppc2thRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW56aXNrYSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHJlZ2luYVRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlJlZ2luYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBBZ2VHcm91cCB7XHJcbiAgICB5b3VuZyA9IFwiWW91bmdcIixcclxuICAgIGFkdWx0ID0gXCJBZHVsdFwiLFxyXG4gICAgb2xkID0gXCJPbGRcIlxyXG59IiwiZXhwb3J0IGVudW0gRGFya0ZhbWlseSB7XHJcbiAgICBOaWVsc2VuLFxyXG4gICAgS2FobndhbGQsXHJcbiAgICBUaWVkZW1hbm4sXHJcbiAgICBEb3BwbGVyLFxyXG4gICAgVW5rbm93blxyXG59IiwiZXhwb3J0IGVudW0gVGltZUxpbmUge1xyXG4gICAgdDE5MjAsXHJcbiAgICB0MTk1MyxcclxuICAgIHQxOTg2LFxyXG4gICAgdDIwMTksXHJcbiAgICB0MjA1MlxyXG59IiwiZXhwb3J0IGVudW0gVGltZVRyYXZlbERldmljZSB7XHJcbiAgICB0MTkyMERldmljZSxcclxuICAgIGNhdmUsXHJcbiAgICB0YW5uaGF1c0RldmljZSxcclxuICAgIGFsdE1hcnRoYURldmljZSxcclxuICAgIHBvd2VyUGxhbnRcclxufSIsImV4cG9ydCBlbnVtIFRpbWVUcmF2ZWxUeXBlIHtcclxuICAgIGluLFxyXG4gICAgb3V0XHJcbn0iLCJpbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbkluRGFya0V2ZW50IH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvbkluZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWwgfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy90aW1lVHJhdmVsXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxJbkRhcmtFdmVudCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxJbkRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcblxyXG4gICAgc3RhdGljIG1vbnRoTmFtZXMgPSBbXHJcbiAgICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICAgIFwiTWFyY2hcIixcclxuICAgICAgICBcIkFwcmlsXCIsXHJcbiAgICAgICAgXCJNYXlcIixcclxuICAgICAgICBcIkp1bmVcIixcclxuICAgICAgICBcIkp1bHlcIixcclxuICAgICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICAgIFwiRGVjZW1iZXJcIlxyXG4gICAgXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0RGF0ZUh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB8IEVsZW1lbnQgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+IHwgRG9jdW1lbnRGcmFnbWVudCB8IChFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudClbXSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3RpbWVsaW5lLXNlY3Rpb24nPlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGNsYXNzPSd0aW1lbGluZS1kYXRlJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgJSVEQVRFU1RSJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgaWQ9JyUlREFURSUlJyBjbGFzcz0ncm93Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcbiAgICAgICAgbGV0IGRhdGVTdHIgPSBQYXJzZXIubW9udGhOYW1lc1t3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpXSArIFwiIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyBcIiwgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVEQVRFU1RSJSVcIiwgZGF0ZVN0cik7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURBVEUlJVwiLCBkYXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgaHRtbCBcIiArIHJldHVyblN0cik7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRNb250aEFuZFllYXJIdG1sKGV2ZW50OiBEYXJrRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGlkPSclJUlEJSUnIGNsYXNzPSd0aW1lbGluZS1tb250aCc+XCIgK1xyXG4gICAgICAgICAgICBcIiUlTU9OVEhBTkRZRUFSJSVcIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgbGV0IHdvcmxkVGltZUluTWlsbGlzOiBEYXRlID0gbmV3IERhdGUoZXZlbnQud29ybGRUaW1lSW5NaWxsaXMpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXIgPSBcIm15X1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKSArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IG1vbnRoQW5kWWVhclN0ciA9IFBhcnNlci5tb250aE5hbWVzW3dvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCldICsgXCIsIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlTU9OVEhBTkRZRUFSJSVcIiwgbW9udGhBbmRZZWFyU3RyKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlSUQlJVwiLCBtb250aEFuZFllYXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFdmVudEh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2NvbC1zbS00Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBjbGFzcz0ndGltZWxpbmUtYm94Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDxkaXYgY2xhc3M9J2JveC10aXRsZSc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgPGkgY2xhc3M9J2ZhIGZhLWFzdGVyaXNrIHRleHQtc3VjY2VzcycgYXJpYSAtIGhpZGRlbj0ndHJ1ZScgPiA8L2k+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgJSVUSVRMRSUlXCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDxkaXYgY2xhc3M9J2JveC1jb250ZW50JyBzdHlsZT0naGVpZ2h0OjEwMHB4Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICA8YSBjbGFzcz0nYnRuIGJ0bi14cyBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyA+IERldGFpbHMgPC9hPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxkaXYgY2xhc3M9J2JveC1pdGVtJz4gJSVERVNDUklQVElPTiUlIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAlJVRJTUVUUkFWRUxTJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDxkaXYgY2xhc3M9J2JveC1mb290ZXInPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVUSVRMRSUlXCIsIGV2ZW50LnRpdGxlKTtcclxuICAgICAgICBsZXQgZGVzID0gZXZlbnQuZGVzY3JpcHRpb247XHJcbiAgICAgICAgaWYgKGRlcy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgZGVzID0gZGVzLnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURFU0NSSVBUSU9OJSVcIiwgZGVzKTtcclxuICAgICAgICBsZXQgdGltZVRyYXZlbHMgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGltZVRyYXZlbHMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGltZVRyYXZlbHMuZm9yRWFjaCh0aW1lVHJhdmVsID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWVUcmF2ZWxzID0gdGltZVRyYXZlbHMgKyBQYXJzZXIuZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElNRVRSQVZFTFMlJVwiLCB0aW1lVHJhdmVscyk7XHJcbiAgICAgICAgbGV0IHBlcnNvbnMgPSAnJztcclxuICAgICAgICBldmVudC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyAnPGltZyBzcmM9XCInICsgUGFyc2VyLmdldFBlcnNvbkltYWdlKHBlcnNvbikgKyAnXCIgc3R5bGU9XCJwYWRkaW5nOiAxcHg7d2lkdGg6IDMwcHg7aGVpZ2h0OiAzMHB4O1wiIHRpdGxlPVwiJyArIHBlcnNvbi5wZXJzb24ubmFtZSArICdcIj4gJztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlUEVSU09OUyUlXCIsIHBlcnNvbnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFRpbWVUcmF2ZWxIdG1sKHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxJbkRhcmtFdmVudCkge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSclJUNMQVNTJSUnID4gJSVQRVJTT05TJSUgPC9kaXY+XCI7XHJcbiAgICAgICAgbGV0IHBlcnNvbnMgPSAnJztcclxuICAgICAgICB0aW1lVHJhdmVsLnRpbWVUcmF2ZWwucGVyc29ucy5mb3JFYWNoKHBlcnNvbiA9PiB7XHJcbiAgICAgICAgICAgIHBlcnNvbnMgPSBwZXJzb25zICsgJzxpbWcgc3JjPVwiJyArIFBhcnNlci5nZXRQZXJzb25JbWFnZShwZXJzb24pICsgJ1wiIHN0eWxlPVwicGFkZGluZzogMXB4O3dpZHRoOiAzMHB4O2hlaWdodDogMzBweDtcIiB0aXRsZT1cIicgKyBwZXJzb24ucGVyc29uLm5hbWUgKyAnXCI+ICc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVBFUlNPTlMlJVwiLCBwZXJzb25zKTtcclxuICAgICAgICBpZiAodGltZVRyYXZlbC50eXBlID09IFRpbWVUcmF2ZWxUeXBlLmluKSB7XHJcbiAgICAgICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVDTEFTUyUlXCIsICdib3gtZm9vdGVyLXRpbWUtaW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlQ0xBU1MlJVwiLCAnYm94LWZvb3Rlci10aW1lLW91dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJzb25JbWFnZShwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBlcnNvbi5wZXJzb24ucGhvdG9zWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJzb24ucGVyc29uLnBob3Rvc1sxXS51cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwZXJzb24ucGVyc29uLnBob3Rvc1swXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBlcnNvbi5waG90b3NbMF0udXJsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGVyc29uLnBlcnNvbi5waG90b3NbMl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbi5wZXJzb24ucGhvdG9zWzJdLnVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy91bmtub3ducGVyc29uLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==