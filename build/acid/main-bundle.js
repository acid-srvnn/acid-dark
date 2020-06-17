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
            episodeTime: (1 * 1000000 + 1 * 1000 + 2)
        });
        events.push({
            title: 'Power Plant intro',
            description: 'Winden Nuclear Power Plant. Project plan started in 1953 and authorized in 1960. To be decommissioned in 2020 due to government. Ines has the letter left by Michael',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:02").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 3)
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
            episodeTime: (1 * 1000000 + 1 * 1000 + 4)
        });
        events.push({
            title: 'Jonas goes to school',
            description: 'Jonas goes to school for first time after his dads suicide. Meets his friend Bartosz. Bartosz hid the fact about Jonas dad to the school people, Instead he told that Jonas was in two month exchage school in France. Martha now likes Bartosz as Jonas was missing for long time. Principal katarina talks to students about missing Erik. Bartosz plans on getting Erik`s stash',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:04").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 5)
        });
        events.push({
            title: 'Erik Investigation',
            description: '49 tire tracks including 2 trucks. 21,312 vehicles in Winden.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:05").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 6)
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
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt111, type: timeTravelType_1.TimeTravelType.in },
                { timeTravel: timeTravels_1.TimeTravels.tt112, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/04/2019 22:00:00").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 7)
        });
        events.push({
            title: 'Mikkel Investigation',
            description: 'Police finds a child body thats not mikkel.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/05/2019 07:00:01").getTime(),
            episodeTime: (1 * 1000000 + 1 * 1000 + 8)
        });
        //TODO ending event
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
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
class Episode2 extends events_1.EventsProvider {
    getEvents() {
        let events = [];
        events.push({
            title: 'Jonas',
            description: 'Jonas wakes up from nightmares as usual. Adult Jonas watches Mikkel search crew.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }
            ],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 07:00:00").getTime(),
            episodeTime: (1 * 1000000 + 2 * 1000 + 1)
        });
        events.push({
            title: 'Unidentified child body report',
            description: 'Male, 10-12 years age. Time of death 16 hours ago. Eyes burnt and melted. Eardrums destroyed. Red soil in the ground. 80s clothes, shoes, walkman. 1986 coin.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: (1 * 1000000 + 2 * 1000 + 2)
        });
        events.push({
            title: 'Ulrich finds cave metal door',
            description: 'Ulrich finds cave metal door. Comes back to tell Charlotte and get search warrant.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: (1 * 1000000 + 2 * 1000 + 3)
        });
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
    from: timeLine_1.TimeLine.t1986,
    to: timeLine_1.TimeLine.t2019,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.madsNielsen, personTime: ageGroup_1.AgeGroup.young }]
};
TimeTravels.tt112 = {
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
window.showEventDetails = function (episodeTime) {
    let res = events.filter(event => {
        return event.episodeTime === episodeTime;
    });
    $('#dark-event-modal').empty();
    $('#dark-event-modal').append(parser_1.Parser.getEventModalHtml(res[0]));
    $('#dark-event-modal .modal').modal('show');
};
window.showPersonDetails = function (person) {
    $('#dark-event-modal').empty();
    $('#dark-event-modal').append(parser_1.Parser.getPersonModalHtml(person));
    $('#dark-event-modal .modal').modal('show');
};


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
//Persons from Unknown families   
DarkPersons.bernadette = {
    name: "Bernadette",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.torbenWoller = {
    name: "Torben Woller",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.silja = {
    name: "Silja",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.clausen = {
    name: "Clausen",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.sebastianKruger = {
    name: "Sebastian Kruger",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.hgTannhaus = {
    name: "H.G. Tannhaus",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.jurgenObendorf = {
    name: "Jürgen Obendorf",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.erikObendorf = {
    name: "Erik Obendorf",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: DarkPersons.jurgenObendorf,
    mother: undefined
};
DarkPersons.yasinFriese = {
    name: "Yasin Friese",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: [],
    father: undefined,
    mother: undefined
};
//Persons from Nielsen Family
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
//Persons from Kahnwald Family
DarkPersons.danielKahnwald = {
    name: "Daniel Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.inesKahnwald = {
    name: "Ines Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: DarkPersons.danielKahnwald,
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
    father: DarkPersons.sebastianKruger,
    mother: undefined
};
DarkPersons.jonasKahnwald = {
    name: "Jonas Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: [],
    father: DarkPersons.michaelKahnwald,
    mother: DarkPersons.hannahKahnwald
};
//Persons from Doppler Family    
DarkPersons.berndDoppler = {
    name: "Bernd Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: undefined,
    mother: undefined //TODO
};
DarkPersons.gretaDoppler = {
    name: "Greta Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: undefined,
    mother: undefined //TODO
};
DarkPersons.helgeDoppler = {
    name: "Helge Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: DarkPersons.berndDoppler,
    mother: DarkPersons.gretaDoppler
};
DarkPersons.peterDoppler = {
    name: "Peter Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: DarkPersons.helgeDoppler,
    mother: undefined
};
DarkPersons.charlotteDoppler = {
    name: "Charlotte Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: DarkPersons.noah,
    mother: undefined
};
DarkPersons.franziskaDoppler = {
    name: "Franziska Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
DarkPersons.elisabethDoppler = {
    name: "Elisabeth Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: [],
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
//Persons from Tiedemann Family
DarkPersons.egonTiedemann = {
    name: "Egon Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.dorisTiedemann = {
    name: "Doris Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.claudiaTiedemann = {
    name: "Claudia Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: DarkPersons.egonTiedemann,
    mother: DarkPersons.dorisTiedemann
};
DarkPersons.reginaTiedemann = {
    name: "Regina Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: undefined,
    mother: DarkPersons.claudiaTiedemann
};
DarkPersons.aleksanderTiedemann = {
    name: "Aleksander Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
    father: undefined,
    mother: undefined
};
DarkPersons.bartoszTiedemann = {
    name: "Bartosz Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: [],
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
            "           <a class='btn btn-xs btn-default pull-right' onclick='showEventDetails(" + event.episodeTime + ")'> Details </a>" +
            "       </div>" +
            "       <div class='box-content' style='height:100px'>" +
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
            persons = persons + Parser.getPersonHtml(person.person);
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
            persons = persons + Parser.getPersonHtml(person.person);
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
    static getPersonHtml(person) {
        return "<img src='" + Parser.getPersonImage(person) + "' style='padding: 1px;width: 30px;height: 30px;' title='" + person.name + "' onclick='showPersonDetails(" + JSON.stringify(person) + ")'> ";
    }
    static getPersonImage(person) {
        if (person.photos[1]) {
            return person.photos[1].url;
        }
        else if (person.photos[0]) {
            return person.photos[0].url;
        }
        else if (person.photos[2]) {
            return person.photos[2].url;
        }
        else {
            return 'assets/unknownperson.jpg';
        }
    }
    static getEventModalHtml(event) {
        let returnStr = '' +
            '<div class="modal" tabindex="-1" role="dialog">' +
            '<div class="modal-dialog" role="document">' +
            '  <div class="modal-content">' +
            '    <div class="modal-header">' +
            '      <h5 class="modal-title">%%TITLE%%</h5>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '      <p>%%BODY%%</p>' +
            '    </div>' +
            '  </div>' +
            '</div>' +
            '</div>';
        returnStr = returnStr.replace("%%TITLE%%", event.title);
        returnStr = returnStr.replace("%%BODY%%", event.description);
        console.log("Sending html " + returnStr);
        return returnStr;
    }
    static getPersonModalHtml(person) {
        var _a, _b;
        let returnStr = '' +
            '<div class="modal" tabindex="-1" role="dialog">' +
            '<div class="modal-dialog" role="document">' +
            '  <div class="modal-content">' +
            '    <div class="modal-header">' +
            '      <h5 class="modal-title">%%TITLE%%</h5>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '      <p>%%BODY%%</p>' +
            '    </div>' +
            '  </div>' +
            '</div>' +
            '</div>';
        returnStr = returnStr.replace("%%TITLE%%", person.name);
        returnStr = returnStr.replace("%%BODY%%", person.family + '<br>' + ((_a = person.father) === null || _a === void 0 ? void 0 : _a.name) + '<br>' + ((_b = person.mother) === null || _b === void 0 ? void 0 : _b.name));
        console.log("Sending html " + returnStr);
        return returnStr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMi50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3RpbWVUcmF2ZWxzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9kYXJrRmFtaWx5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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LE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7O0FBM0pMLHdCQTRKQztBQTFKVSxpQkFBVSxHQUFHO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsT0FBTztJQUNQLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtDQUNiLENBQUMiLCJmaWxlIjoiYWNpZC9tYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGFic3RyYWN0IGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1wiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGUxIGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pY2hhZWwgY29tbWl0cyBzdWljaWRlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNaWNoYWVsIGNvbW1pdHMgc3VpY2lkZSBsZWF2aW5nIGJlaGluZCBhIGxldHRlciBgRG8gbm90IG9wZW4gYmVmb3JlIE5vdmVtYmVyIDQsIDEwOjEzIFBNYCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjAxOSAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiAoMSAqIDEwMDAwMDAgKyAxICogMTAwMCArIDEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIYW5uYWggZnVja3MgVWxyaWNoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB3YWtlcyBmcm9tIGEgbmlnaHRtYXJlIGFzIHVzdWFsLiBIYW5uYWggZnVja3MgVWxyaWNoLiBVbHJpY2ggaW52aXRlcyBIYW5uYWggZm9yIHRoZSBVbHJpY2gtS2F0YXJpbmEgYW5uaXZlcnNhcnkgdGhhdCBuaWdodC4gSGFubmFoIGlzIGRpc2FwcG9pbnRlZCBmb3Igbm90IHJlY2VpdmluZyBgSSBsb3ZlIHlvdWAgYmFjaycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiAoMSAqIDEwMDAwMDAgKyAxICogMTAwMCArIDEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXaW5kZW4gY2F2ZXMgaW50cm8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIGxlYXZlcyBmb3Igc2Nob29sLiBFcmlrIE9iZW5kb3JmIGlzIG1pc3NpbmcuIFdpbmRlbiBjYXZlcyBpcyBsb2NhdGVkIDMuNSBrbXMgZnJvbSBXaW5kZS4gSm9uYXMgdGFsa3Mgd2l0aCBoaXMgdGhlcmFwaXN0IFBldGVyIGFib3V0IGhpcyBkcmVhbXMgYW5kIGFuZ2VyIHJlbGF0ZWQgdG8gaGlzIGRhZCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowMVwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiAoMSAqIDEwMDAwMDAgKyAxICogMTAwMCArIDIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3dlciBQbGFudCBpbnRybycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2luZGVuIE51Y2xlYXIgUG93ZXIgUGxhbnQuIFByb2plY3QgcGxhbiBzdGFydGVkIGluIDE5NTMgYW5kIGF1dGhvcml6ZWQgaW4gMTk2MC4gVG8gYmUgZGVjb21taXNzaW9uZWQgaW4gMjAyMCBkdWUgdG8gZ292ZXJubWVudC4gSW5lcyBoYXMgdGhlIGxldHRlciBsZWZ0IGJ5IE1pY2hhZWwnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDJcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyAzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmllbHNlbiBGYW1pbHkgaW50cm8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01hZ251cyBob29kaWUgaXMgbWlzc2luZy4gTWlra2VsIGxpa2VzIG1hZ2ljLiBgVGhlIHF1ZXN0aW9uIGlzbnQgaG93LCBpdHMgd2hlbmAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYWdudXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDNcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyA0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgZ29lcyB0byBzY2hvb2wnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIGdvZXMgdG8gc2Nob29sIGZvciBmaXJzdCB0aW1lIGFmdGVyIGhpcyBkYWRzIHN1aWNpZGUuIE1lZXRzIGhpcyBmcmllbmQgQmFydG9zei4gQmFydG9zeiBoaWQgdGhlIGZhY3QgYWJvdXQgSm9uYXMgZGFkIHRvIHRoZSBzY2hvb2wgcGVvcGxlLCBJbnN0ZWFkIGhlIHRvbGQgdGhhdCBKb25hcyB3YXMgaW4gdHdvIG1vbnRoIGV4Y2hhZ2Ugc2Nob29sIGluIEZyYW5jZS4gTWFydGhhIG5vdyBsaWtlcyBCYXJ0b3N6IGFzIEpvbmFzIHdhcyBtaXNzaW5nIGZvciBsb25nIHRpbWUuIFByaW5jaXBhbCBrYXRhcmluYSB0YWxrcyB0byBzdHVkZW50cyBhYm91dCBtaXNzaW5nIEVyaWsuIEJhcnRvc3ogcGxhbnMgb24gZ2V0dGluZyBFcmlrYHMgc3Rhc2gnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDRcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyA1KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXJpayBJbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc0OSB0aXJlIHRyYWNrcyBpbmNsdWRpbmcgMiB0cnVja3MuIDIxLDMxMiB2ZWhpY2xlcyBpbiBXaW5kZW4uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDVcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyA2KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIGdvZXMgbWlzc2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGtpZHMgZ28gc2VhcmNoaW5nIGZvciBFcmlrYHMgc3Rhc2ggbmVhciBXaW5kZW4gQ2F2ZXMuIFBhcmVudHMgZG8gYSBtZWV0aW5nIHRvIGRpc2N1c3Mgb24gRXJpay4gSW5lcyByZWFkcyBNaWNoZWFsYHMgbGV0dGVyLiBTdHJhbmdlIG5vaXNlIGZyb20gY2F2ZXMuIE1pa2tlbCBnb2VzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZnJhbnppc2thRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTExLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9LFxyXG4gICAgICAgICAgICB7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTEyLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMjI6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKDEgKiAxMDAwMDAwICsgMSAqIDEwMDAgKyA3KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIEludmVzdGlnYXRpb24nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvbGljZSBmaW5kcyBhIGNoaWxkIGJvZHkgdGhhdHMgbm90IG1pa2tlbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwNzowMDowMVwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiAoMSAqIDEwMDAwMDAgKyAxICogMTAwMCArIDgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vVE9ETyBlbmRpbmcgZXZlbnRcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1wiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGUyIGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB3YWtlcyB1cCBmcm9tIG5pZ2h0bWFyZXMgYXMgdXN1YWwuIEFkdWx0IEpvbmFzIHdhdGNoZXMgTWlra2VsIHNlYXJjaCBjcmV3LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDIgKiAxMDAwICsgMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VuaWRlbnRpZmllZCBjaGlsZCBib2R5IHJlcG9ydCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFsZSwgMTAtMTIgeWVhcnMgYWdlLiBUaW1lIG9mIGRlYXRoIDE2IGhvdXJzIGFnby4gRXllcyBidXJudCBhbmQgbWVsdGVkLiBFYXJkcnVtcyBkZXN0cm95ZWQuIFJlZCBzb2lsIGluIHRoZSBncm91bmQuIDgwcyBjbG90aGVzLCBzaG9lcywgd2Fsa21hbi4gMTk4NiBjb2luLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiAoMSAqIDEwMDAwMDAgKyAyICogMTAwMCArIDIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggZmluZHMgY2F2ZSBtZXRhbCBkb29yJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggZmluZHMgY2F2ZSBtZXRhbCBkb29yLiBDb21lcyBiYWNrIHRvIHRlbGwgQ2hhcmxvdHRlIGFuZCBnZXQgc2VhcmNoIHdhcnJhbnQuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICgxICogMTAwMDAwMCArIDIgKiAxMDAwICsgMylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbWVUcmF2ZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbFwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmVcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbERldmljZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbERldmljZVwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVUcmF2ZWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxMTE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZHNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxMTI6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvSlF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgRXBpc29kZTEgfSBmcm9tICcuL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxJztcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSAnLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnQnO1xyXG5pbXBvcnQgeyBFcGlzb2RlMiB9IGZyb20gJy4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSAnLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zJztcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gJy4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvbic7XHJcblxyXG5sZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5ldmVudHMgPSBldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTEpLmdldEV2ZW50cygpKTtcclxuZXZlbnRzID0gZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGUyKS5nZXRFdmVudHMoKSk7XHJcblxyXG5ldmVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4gIHJldHVybiAoYS53b3JsZFRpbWVJbk1pbGxpcyA+IGIud29ybGRUaW1lSW5NaWxsaXMpID8gMSA6IC0xXHJcbn0pO1xyXG5cclxuZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgaWYgKCEkKFwiI1wiICsgbW9udGhBbmRZZWFyKS5sZW5ndGgpIHtcclxuICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldE1vbnRoQW5kWWVhckh0bWwoZXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgbGV0IGRhdGUgPSBcImRhdGVfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkgKyBcIl9cIiArIG1vbnRoQW5kWWVhcjtcclxuXHJcbiAgaWYgKCEkKFwiI1wiICsgZGF0ZSkubGVuZ3RoKSB7XHJcbiAgICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuYXBwZW5kKFBhcnNlci5nZXREYXRlSHRtbChldmVudCkpXHJcbiAgfVxyXG5cclxuICAkKFwiI1wiICsgZGF0ZSkuYXBwZW5kKFBhcnNlci5nZXRFdmVudEh0bWwoZXZlbnQpKTtcclxuXHJcbn0pXHJcblxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgc2hvd0V2ZW50RGV0YWlsczogYW55O1xyXG4gICAgc2hvd1BlcnNvbkRldGFpbHM6IGFueTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5zaG93RXZlbnREZXRhaWxzID0gZnVuY3Rpb24gKGVwaXNvZGVUaW1lOiBudW1iZXIpIHtcclxuICBsZXQgcmVzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PiB7XHJcbiAgICByZXR1cm4gZXZlbnQuZXBpc29kZVRpbWUgPT09IGVwaXNvZGVUaW1lO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmVtcHR5KCk7XHJcbiAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50TW9kYWxIdG1sKHJlc1swXSkpO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCAubW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cclxufVxyXG5cclxud2luZG93LnNob3dQZXJzb25EZXRhaWxzID0gZnVuY3Rpb24gKHBlcnNvbjogRGFya1BlcnNvbikge1xyXG4gICQoJyNkYXJrLWV2ZW50LW1vZGFsJykuZW1wdHkoKTtcclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmFwcGVuZChQYXJzZXIuZ2V0UGVyc29uTW9kYWxIdG1sKHBlcnNvbikpO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCAubW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG59IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgRGFya0ZhbWlseSB9IGZyb20gXCIuL2VudW0vZGFya0ZhbWlseVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25zIHtcclxuXHJcbiAgICBzdGF0aWMgdW5rbm93blBlcnNvbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVua25vd25cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gVW5rbm93biBmYW1pbGllcyAgIFxyXG4gICAgXHJcbiAgICBzdGF0aWMgYmVybmFkZXR0ZTogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkJlcm5hZGV0dGVcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3JiZW5Xb2xsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJUb3JiZW4gV29sbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2lsamE6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJTaWxqYVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1c2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2ViYXN0aWFuS3J1Z2VyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2ViYXN0aWFuIEtydWdlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBoZ1Rhbm5oYXVzOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSC5HLiBUYW5uaGF1c1wiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBqdXJnZW5PYmVuZG9yZjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkrDvHJnZW4gT2JlbmRvcmZcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcmlrT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFcmlrIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHlhc2luRnJpZXNlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiWWFzaW4gRnJpZXNlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBOaWVsc2VuIEZhbWlseVxyXG5cclxuICAgIHN0YXRpYyBhZ25lc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJBZ25lcyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub2FoOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTm9haFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYWx0TmFtZTogW1wiSGFubm8gTm9haCBUYXViZXJcIl1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJvbnRlTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlRyb250ZSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmFnbmVzTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqYW5hTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkphbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdWxyaWNoTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVscmljaCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWRzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZHMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMga2F0YXJpbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiS2F0YXJpbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFnbnVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZ251cyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFydGhhTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hcnRoYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWlra2VsTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pa2tlbCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sXHJcbiAgICAgICAgYWx0TmFtZTogW1wiTWljaGFlbCBLaGFud2FsZFwiXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBLYWhud2FsZCBGYW1pbHlcclxuXHJcbiAgICBzdGF0aWMgZGFuaWVsS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEYW5pZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5lc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSW5lcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsIFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pY2hhZWxLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pY2hhZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFubmFoS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIYW5uYWggS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnNlYmFzdGlhbktydWdlcixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqb25hc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSm9uYXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm1pY2hhZWxLYWhud2FsZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gRG9wcGxlciBGYW1pbHkgICAgXHJcbiAgICBcclxuICAgIHN0YXRpYyBiZXJuZERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuZCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQgLy9UT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdyZXRhRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkdyZXRhIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZCAvL1RPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVsZ2VEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSGVsZ2UgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5ncmV0YURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGV0ZXJEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUGV0ZXIgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhcmxvdHRlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNoYXJsb3R0ZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm5vYWgsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJhbnppc2thRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW56aXNrYSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWxpc2FiZXRoRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkVsaXNhYmV0aCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBUaWVkZW1hbm4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGVnb25UaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFZ29uIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG9yaXNUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEb3JpcyBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVkaWFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1ZGlhIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5kb3Jpc1RpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpbmFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJSZWdpbmEgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWxla3NhbmRlclRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFsZWtzYW5kZXIgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXJ0b3N6VGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmFydG9zeiBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJleHBvcnQgZW51bSBBZ2VHcm91cCB7XHJcbiAgICB5b3VuZyA9IFwiWW91bmdcIixcclxuICAgIGFkdWx0ID0gXCJBZHVsdFwiLFxyXG4gICAgb2xkID0gXCJPbGRcIlxyXG59IiwiZXhwb3J0IGVudW0gRGFya0ZhbWlseSB7XHJcbiAgICBOaWVsc2VuID0gXCJOaWVsc2VuXCIsXHJcbiAgICBLYWhud2FsZCA9IFwiS2FobndhbGRcIixcclxuICAgIFRpZWRlbWFubiA9IFwiVGllZGVtYW5uXCIsXHJcbiAgICBEb3BwbGVyID0gXCJEb3BwbGVyXCIsXHJcbiAgICBVbmtub3duID0gXCJVbmtub3duXCJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVMaW5lIHtcclxuICAgIHQxOTIwLFxyXG4gICAgdDE5NTMsXHJcbiAgICB0MTk4NixcclxuICAgIHQyMDE5LFxyXG4gICAgdDIwNTJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVUcmF2ZWxEZXZpY2Uge1xyXG4gICAgdDE5MjBEZXZpY2UsXHJcbiAgICBjYXZlLFxyXG4gICAgdGFubmhhdXNEZXZpY2UsXHJcbiAgICBhbHRNYXJ0aGFEZXZpY2UsXHJcbiAgICBwb3dlclBsYW50XHJcbn0iLCJleHBvcnQgZW51bSBUaW1lVHJhdmVsVHlwZSB7XHJcbiAgICBpbixcclxuICAgIG91dFxyXG59IiwiaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25JbkRhcmtFdmVudCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25JbmRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsIH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsSW5EYXJrRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy90aW1lVHJhdmVsSW5EYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG5cclxuICAgIHN0YXRpYyBtb250aE5hbWVzID0gW1xyXG4gICAgICAgIFwiSmFudWFyeVwiLFxyXG4gICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICBcIk1hcmNoXCIsXHJcbiAgICAgICAgXCJBcHJpbFwiLFxyXG4gICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgXCJKdW5lXCIsXHJcbiAgICAgICAgXCJKdWx5XCIsXHJcbiAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgIFwiT2N0b2JlclwiLFxyXG4gICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICBcIkRlY2VtYmVyXCJcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIGdldERhdGVIdG1sKGV2ZW50OiBEYXJrRXZlbnQpOiBzdHJpbmcgfCBFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IERvY3VtZW50RnJhZ21lbnQgfCAoRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQpW10ge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSd0aW1lbGluZS1zZWN0aW9uJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBjbGFzcz0ndGltZWxpbmUtZGF0ZSc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICUlREFURVNUUiUlXCIgK1xyXG4gICAgICAgICAgICBcIiAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGlkPSclJURBVEUlJScgY2xhc3M9J3Jvdyc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IFwiZGF0ZV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKSArIFwiX1wiICsgbW9udGhBbmRZZWFyO1xyXG4gICAgICAgIGxldCBkYXRlU3RyID0gUGFyc2VyLm1vbnRoTmFtZXNbd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKV0gKyBcIiBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKS50b1N0cmluZygpICsgXCIsIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREFURVNUUiUlXCIsIGRhdGVTdHIpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVEQVRFJSVcIiwgZGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0TW9udGhBbmRZZWFySHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBpZD0nJSVJRCUlJyBjbGFzcz0ndGltZWxpbmUtbW9udGgnPlwiICtcclxuICAgICAgICAgICAgXCIlJU1PTlRIQU5EWUVBUiUlXCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXJTdHIgPSBQYXJzZXIubW9udGhOYW1lc1t3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpXSArIFwiLCBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJU1PTlRIQU5EWUVBUiUlXCIsIG1vbnRoQW5kWWVhclN0cik7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUlEJSVcIiwgbW9udGhBbmRZZWFyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgaHRtbCBcIiArIHJldHVyblN0cik7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnRIdG1sKGV2ZW50OiBEYXJrRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdjb2wtc20tNCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgY2xhc3M9J3RpbWVsaW5lLWJveCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8ZGl2IGNsYXNzPSdib3gtdGl0bGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxpIGNsYXNzPSdmYSBmYS1hc3RlcmlzayB0ZXh0LXN1Y2Nlc3MnIGFyaWEgLSBoaWRkZW49J3RydWUnID4gPC9pPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICUlVElUTEUlJVwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxhIGNsYXNzPSdidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHQnIG9uY2xpY2s9J3Nob3dFdmVudERldGFpbHMoXCIgKyBldmVudC5lcGlzb2RlVGltZSArIFwiKSc+IERldGFpbHMgPC9hPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8ZGl2IGNsYXNzPSdib3gtY29udGVudCcgc3R5bGU9J2hlaWdodDoxMDBweCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgPGRpdiBjbGFzcz0nYm94LWl0ZW0nPiAlJURFU0NSSVBUSU9OJSUgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICUlVElNRVRSQVZFTFMlJVwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LWZvb3Rlcic+ICUlUEVSU09OUyUlIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVRJVExFJSVcIiwgZXZlbnQudGl0bGUpO1xyXG4gICAgICAgIGxldCBkZXMgPSBldmVudC5kZXNjcmlwdGlvbjtcclxuICAgICAgICBpZiAoZGVzLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgICAgICAgICBkZXMgPSBkZXMuc3Vic3RyaW5nKDAsIDEwMCkgKyAnLi4uJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREVTQ1JJUFRJT04lJVwiLCBkZXMpO1xyXG4gICAgICAgIGxldCB0aW1lVHJhdmVscyA9ICcnO1xyXG4gICAgICAgIGlmIChldmVudC50aW1lVHJhdmVscykge1xyXG4gICAgICAgICAgICBldmVudC50aW1lVHJhdmVscy5mb3JFYWNoKHRpbWVUcmF2ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGltZVRyYXZlbHMgPSB0aW1lVHJhdmVscyArIFBhcnNlci5nZXRUaW1lVHJhdmVsSHRtbCh0aW1lVHJhdmVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVUSU1FVFJBVkVMUyUlXCIsIHRpbWVUcmF2ZWxzKTtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIGV2ZW50LnBlcnNvbnMuZm9yRWFjaChwZXJzb24gPT4ge1xyXG4gICAgICAgICAgICBwZXJzb25zID0gcGVyc29ucyArIFBhcnNlci5nZXRQZXJzb25IdG1sKHBlcnNvbi5wZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbDogVGltZVRyYXZlbEluRGFya0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9JyUlQ0xBU1MlJScgPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIHRpbWVUcmF2ZWwudGltZVRyYXZlbC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24ucGVyc29uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlUEVSU09OUyUlXCIsIHBlcnNvbnMpO1xyXG4gICAgICAgIGlmICh0aW1lVHJhdmVsLnR5cGUgPT0gVGltZVRyYXZlbFR5cGUuaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUNMQVNTJSVcIiwgJ2JveC1mb290ZXItdGltZS1pbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVDTEFTUyUlXCIsICdib3gtZm9vdGVyLXRpbWUtb3V0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBlcnNvbkh0bWwocGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J1wiICsgUGFyc2VyLmdldFBlcnNvbkltYWdlKHBlcnNvbikgKyBcIicgc3R5bGU9J3BhZGRpbmc6IDFweDt3aWR0aDogMzBweDtoZWlnaHQ6IDMwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ubmFtZSArIFwiJyBvbmNsaWNrPSdzaG93UGVyc29uRGV0YWlscyhcIiArIEpTT04uc3RyaW5naWZ5KHBlcnNvbikgKyBcIiknPiBcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSW1hZ2UocGVyc29uOiBEYXJrUGVyc29uKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAocGVyc29uLnBob3Rvc1sxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBob3Rvc1sxXS51cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwZXJzb24ucGhvdG9zWzBdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJzb24ucGhvdG9zWzBdLnVybDtcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcnNvbi5waG90b3NbMl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbi5waG90b3NbMl0udXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL3Vua25vd25wZXJzb24uanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFdmVudE1vZGFsSHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiUlVElUTEUlJTwvaDU+JyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgIDxwPiUlQk9EWSUlPC9wPicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElUTEUlJVwiLCBldmVudC50aXRsZSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUJPRFklJVwiLCBldmVudC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJzb25Nb2RhbEh0bWwocGVyc29uOiBEYXJrUGVyc29uKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiUlVElUTEUlJTwvaDU+JyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgIDxwPiUlQk9EWSUlPC9wPicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElUTEUlJVwiLCBwZXJzb24ubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUJPRFklJVwiLCBwZXJzb24uZmFtaWx5ICsgJzxicj4nICsgcGVyc29uLmZhdGhlcj8ubmFtZSArICc8YnI+JyArIHBlcnNvbi5tb3RoZXI/Lm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==