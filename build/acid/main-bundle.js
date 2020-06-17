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
        let episodeTime = (1 * 1000000 + 2 * 1000 + 0);
        events.push({
            title: 'Michael commits suicide',
            description: 'Michael commits suicide leaving behind a letter `Do not open before November 4, 10:13 PM`',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2019 13:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Hannah fucks Ulrich',
            description: 'Jonas wakes from a nightmare as usual. Hannah fucks Ulrich. Ulrich invites Hannah for the Ulrich-Katarina anniversary that night. Hannah is disappointed for not receiving `I love you` back',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Winden caves intro',
            description: 'Jonas leaves for school. Erik Obendorf is missing. Winden caves is located 3.5 kms from Winde. Jonas talks with his therapist Peter about his dreams and anger related to his dad',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:01").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Power Plant intro',
            description: 'Winden Nuclear Power Plant. Project plan started in 1953 and authorized in 1960. To be decommissioned in 2020 due to government. Ines has the letter left by Michael',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:02").getTime(),
            episodeTime: ++episodeTime
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
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Jonas goes to school',
            description: 'Jonas goes to school for first time after his dads suicide. Meets his friend Bartosz. Bartosz hid the fact about Jonas dad to the school people, Instead he told that Jonas was in two month exchage school in France. Martha now likes Bartosz as Jonas was missing for long time. Principal katarina talks to students about missing Erik. Bartosz plans on getting Erik`s stash',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:04").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Erik Investigation',
            description: '49 tire tracks including 2 trucks. 21,312 vehicles in Winden.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:05").getTime(),
            episodeTime: ++episodeTime
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
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Mikkel Investigation',
            description: 'Police finds a child body thats not mikkel.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/05/2019 07:00:01").getTime(),
            episodeTime: ++episodeTime
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
        let episodeTime = (1 * 1000000 + 2 * 1000 + 0);
        events.push({
            title: 'Jonas',
            description: 'Jonas wakes up from nightmares as usual. Stranger Jonas watches Mikkel search crew.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }
            ],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 07:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Unidentified child body report',
            description: 'Male, 10-12 years age. Time of death 16 hours ago. Eyes burnt and melted. Eardrums destroyed. Red soil in the ground. 80s clothes, shoes, walkman. 1986 coin.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Ulrich finds cave metal door',
            description: 'Ulrich finds cave metal door. Comes back to tell Charlotte and get search warrant. Fails to get warrant. Meets Aleksander in the gates and argues.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Aleksander orders Jurgen to move the cylinders',
            description: 'Aleksander orders Jurgen to move the cylinders',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Stranger Jonas comes to stay at winden hotel',
            description: 'Stranger Jonas comes to stay at winden hotel',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Jonas finds a map',
            description: 'Jonas finds a map of winden caves hidden in his dads room',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 09:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Jonas finds a map',
            description: 'Jonas finds a map of winden caves hidden in his dads room',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 09:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        events.push({
            title: 'Jonas finds a map',
            description: 'Jonas finds a map of winden caves hidden in his dads room',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 09:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        //TODO
        events.push({
            title: 'Ulrich investigates Jurgen',
            description: 'Ulrich analyses Mikkel clues. Jurgen has van and was working in the nuclear power plant as a drive the night Erik went missing. Ulrich investigates Jurgen. Find his stash and that he didnt work the previous day.',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        //TODO
        events.push({
            title: 'Helge kills Erik',
            description: 'Helge straps Erik to the bunker timemachine and kills him. Then drags him in the forest.',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        //TODO
        events.push({
            title: 'Aleksander loads barrels into a truck',
            description: '',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });
        /*
        ?? Mikkel travelled to past Nov5 morn. Why lights blink in the eve.
        events.push({
            title: 'TimeTravel happens',
            description: 'Blinking lights. Dead birds.',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: ++episodeTime
        });*/
        events.push({
            title: 'Mikkel in past',
            description: 'Mikkel walks out of cave, goes home, meets young Ulrich and Katarina',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: ++episodeTime
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMi50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3RpbWVUcmF2ZWxzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9kYXJrRmFtaWx5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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O1lBQzlDLFlBQVk7WUFDWiw4QkFBOEI7WUFDOUIsdUJBQXVCO1lBQ3ZCLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFFBQVEsQ0FBQztRQUNiLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxVQUFHLE1BQU0sQ0FBQyxNQUFNLDBDQUFFLElBQUksSUFBRyxNQUFNLFVBQUcsTUFBTSxDQUFDLE1BQU0sMENBQUUsSUFBSSxFQUFDLENBQUM7UUFDdkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQzs7QUEzSkwsd0JBNEpDO0FBMUpVLGlCQUFVLEdBQUc7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0NBQ2IsQ0FBQyIsImZpbGUiOiJhY2lkL21haW4tYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdXHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTEgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZVRpbWUgPSAoMSAqIDEwMDAwMDAgKyAyICogMTAwMCArIDApO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWljaGFlbCBjb21taXRzIHN1aWNpZGUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01pY2hhZWwgY29tbWl0cyBzdWljaWRlIGxlYXZpbmcgYmVoaW5kIGEgbGV0dGVyIGBEbyBub3Qgb3BlbiBiZWZvcmUgTm92ZW1iZXIgNCwgMTA6MTMgUE1gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIwNi8yMS8yMDE5IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhbm5haCBmdWNrcyBVbHJpY2gnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdha2VzIGZyb20gYSBuaWdodG1hcmUgYXMgdXN1YWwuIEhhbm5haCBmdWNrcyBVbHJpY2guIFVscmljaCBpbnZpdGVzIEhhbm5haCBmb3IgdGhlIFVscmljaC1LYXRhcmluYSBhbm5pdmVyc2FyeSB0aGF0IG5pZ2h0LiBIYW5uYWggaXMgZGlzYXBwb2ludGVkIGZvciBub3QgcmVjZWl2aW5nIGBJIGxvdmUgeW91YCBiYWNrJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dpbmRlbiBjYXZlcyBpbnRybycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgbGVhdmVzIGZvciBzY2hvb2wuIEVyaWsgT2JlbmRvcmYgaXMgbWlzc2luZy4gV2luZGVuIGNhdmVzIGlzIGxvY2F0ZWQgMy41IGttcyBmcm9tIFdpbmRlLiBKb25hcyB0YWxrcyB3aXRoIGhpcyB0aGVyYXBpc3QgUGV0ZXIgYWJvdXQgaGlzIGRyZWFtcyBhbmQgYW5nZXIgcmVsYXRlZCB0byBoaXMgZGFkJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAxXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Bvd2VyIFBsYW50IGludHJvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdXaW5kZW4gTnVjbGVhciBQb3dlciBQbGFudC4gUHJvamVjdCBwbGFuIHN0YXJ0ZWQgaW4gMTk1MyBhbmQgYXV0aG9yaXplZCBpbiAxOTYwLiBUbyBiZSBkZWNvbW1pc3Npb25lZCBpbiAyMDIwIGR1ZSB0byBnb3Zlcm5tZW50LiBJbmVzIGhhcyB0aGUgbGV0dGVyIGxlZnQgYnkgTWljaGFlbCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowMlwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOaWVsc2VuIEZhbWlseSBpbnRybycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFnbnVzIGhvb2RpZSBpcyBtaXNzaW5nLiBNaWtrZWwgbGlrZXMgbWFnaWMuIGBUaGUgcXVlc3Rpb24gaXNudCBob3csIGl0cyB3aGVuYCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowM1wiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBnb2VzIHRvIHNjaG9vbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgZ29lcyB0byBzY2hvb2wgZm9yIGZpcnN0IHRpbWUgYWZ0ZXIgaGlzIGRhZHMgc3VpY2lkZS4gTWVldHMgaGlzIGZyaWVuZCBCYXJ0b3N6LiBCYXJ0b3N6IGhpZCB0aGUgZmFjdCBhYm91dCBKb25hcyBkYWQgdG8gdGhlIHNjaG9vbCBwZW9wbGUsIEluc3RlYWQgaGUgdG9sZCB0aGF0IEpvbmFzIHdhcyBpbiB0d28gbW9udGggZXhjaGFnZSBzY2hvb2wgaW4gRnJhbmNlLiBNYXJ0aGEgbm93IGxpa2VzIEJhcnRvc3ogYXMgSm9uYXMgd2FzIG1pc3NpbmcgZm9yIGxvbmcgdGltZS4gUHJpbmNpcGFsIGthdGFyaW5hIHRhbGtzIHRvIHN0dWRlbnRzIGFib3V0IG1pc3NpbmcgRXJpay4gQmFydG9zeiBwbGFucyBvbiBnZXR0aW5nIEVyaWtgcyBzdGFzaCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJhcnRvc3pUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowNFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFcmlrIEludmVzdGlnYXRpb24nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzQ5IHRpcmUgdHJhY2tzIGluY2x1ZGluZyAyIHRydWNrcy4gMjEsMzEyIHZlaGljbGVzIGluIFdpbmRlbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowNVwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgZ29lcyBtaXNzaW5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUga2lkcyBnbyBzZWFyY2hpbmcgZm9yIEVyaWtgcyBzdGFzaCBuZWFyIFdpbmRlbiBDYXZlcy4gUGFyZW50cyBkbyBhIG1lZXRpbmcgdG8gZGlzY3VzcyBvbiBFcmlrLiBJbmVzIHJlYWRzIE1pY2hlYWxgcyBsZXR0ZXIuIFN0cmFuZ2Ugbm9pc2UgZnJvbSBjYXZlcy4gTWlra2VsIGdvZXMgbWlzc2luZycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJhcnRvc3pUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5mcmFuemlza2FEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxMTEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH0sXHJcbiAgICAgICAgICAgIHsgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxMTIsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAyMjowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgSW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUG9saWNlIGZpbmRzIGEgY2hpbGQgYm9keSB0aGF0cyBub3QgbWlra2VsLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA3OjAwOjAxXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9UT0RPIGVuZGluZyBldmVudFxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTIgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZVRpbWUgPSAoMSAqIDEwMDAwMDAgKyAyICogMTAwMCArIDApO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdha2VzIHVwIGZyb20gbmlnaHRtYXJlcyBhcyB1c3VhbC4gU3RyYW5nZXIgSm9uYXMgd2F0Y2hlcyBNaWtrZWwgc2VhcmNoIGNyZXcuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKytlcGlzb2RlVGltZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVW5pZGVudGlmaWVkIGNoaWxkIGJvZHkgcmVwb3J0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYWxlLCAxMC0xMiB5ZWFycyBhZ2UuIFRpbWUgb2YgZGVhdGggMTYgaG91cnMgYWdvLiBFeWVzIGJ1cm50IGFuZCBtZWx0ZWQuIEVhcmRydW1zIGRlc3Ryb3llZC4gUmVkIHNvaWwgaW4gdGhlIGdyb3VuZC4gODBzIGNsb3RoZXMsIHNob2VzLCB3YWxrbWFuLiAxOTg2IGNvaW4uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBmaW5kcyBjYXZlIG1ldGFsIGRvb3InLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VscmljaCBmaW5kcyBjYXZlIG1ldGFsIGRvb3IuIENvbWVzIGJhY2sgdG8gdGVsbCBDaGFybG90dGUgYW5kIGdldCBzZWFyY2ggd2FycmFudC4gRmFpbHMgdG8gZ2V0IHdhcnJhbnQuIE1lZXRzIEFsZWtzYW5kZXIgaW4gdGhlIGdhdGVzIGFuZCBhcmd1ZXMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSwgLy9UT0RPIGFsZWtzYW5kZXJcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FsZWtzYW5kZXIgb3JkZXJzIEp1cmdlbiB0byBtb3ZlIHRoZSBjeWxpbmRlcnMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FsZWtzYW5kZXIgb3JkZXJzIEp1cmdlbiB0byBtb3ZlIHRoZSBjeWxpbmRlcnMnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbXSwgLy9UT0RPIGFsZWtzYW5kZXIgYW5kIGp1cmdlblxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKytlcGlzb2RlVGltZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgY29tZXMgdG8gc3RheSBhdCB3aW5kZW4gaG90ZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0cmFuZ2VyIEpvbmFzIGNvbWVzIHRvIHN0YXkgYXQgd2luZGVuIGhvdGVsJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGZpbmRzIGEgbWFwJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBmaW5kcyBhIG1hcCBvZiB3aW5kZW4gY2F2ZXMgaGlkZGVuIGluIGhpcyBkYWRzIHJvb20nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKytlcGlzb2RlVGltZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgZmluZHMgYSBtYXAnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIGZpbmRzIGEgbWFwIG9mIHdpbmRlbiBjYXZlcyBoaWRkZW4gaW4gaGlzIGRhZHMgcm9vbScsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBmaW5kcyBhIG1hcCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgZmluZHMgYSBtYXAgb2Ygd2luZGVuIGNhdmVzIGhpZGRlbiBpbiBoaXMgZGFkcyByb29tJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBpbnZlc3RpZ2F0ZXMgSnVyZ2VuJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggYW5hbHlzZXMgTWlra2VsIGNsdWVzLiBKdXJnZW4gaGFzIHZhbiBhbmQgd2FzIHdvcmtpbmcgaW4gdGhlIG51Y2xlYXIgcG93ZXIgcGxhbnQgYXMgYSBkcml2ZSB0aGUgbmlnaHQgRXJpayB3ZW50IG1pc3NpbmcuIFVscmljaCBpbnZlc3RpZ2F0ZXMgSnVyZ2VuLiBGaW5kIGhpcyBzdGFzaCBhbmQgdGhhdCBoZSBkaWRudCB3b3JrIHRoZSBwcmV2aW91cyBkYXkuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW10sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSBraWxscyBFcmlrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBzdHJhcHMgRXJpayB0byB0aGUgYnVua2VyIHRpbWVtYWNoaW5lIGFuZCBraWxscyBoaW0uIFRoZW4gZHJhZ3MgaGltIGluIHRoZSBmb3Jlc3QuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW10sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiArK2VwaXNvZGVUaW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGVrc2FuZGVyIGxvYWRzIGJhcnJlbHMgaW50byBhIHRydWNrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICA/PyBNaWtrZWwgdHJhdmVsbGVkIHRvIHBhc3QgTm92NSBtb3JuLiBXaHkgbGlnaHRzIGJsaW5rIGluIHRoZSBldmUuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RpbWVUcmF2ZWwgaGFwcGVucycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmxpbmtpbmcgbGlnaHRzLiBEZWFkIGJpcmRzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFtdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogKytlcGlzb2RlVGltZVxyXG4gICAgICAgIH0pOyovXHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgaW4gcGFzdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWlra2VsIHdhbGtzIG91dCBvZiBjYXZlLCBnb2VzIGhvbWUsIG1lZXRzIHlvdW5nIFVscmljaCBhbmQgS2F0YXJpbmEnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6ICsrZXBpc29kZVRpbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbWVUcmF2ZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbFwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmVcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbERldmljZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbERldmljZVwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVUcmF2ZWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxMTE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZHNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxMTI6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvSlF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgRXBpc29kZTEgfSBmcm9tICcuL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxJztcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSAnLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnQnO1xyXG5pbXBvcnQgeyBFcGlzb2RlMiB9IGZyb20gJy4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSAnLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zJztcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gJy4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvbic7XHJcblxyXG5sZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5ldmVudHMgPSBldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTEpLmdldEV2ZW50cygpKTtcclxuZXZlbnRzID0gZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGUyKS5nZXRFdmVudHMoKSk7XHJcblxyXG5ldmVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4gIHJldHVybiAoYS53b3JsZFRpbWVJbk1pbGxpcyA+IGIud29ybGRUaW1lSW5NaWxsaXMpID8gMSA6IC0xXHJcbn0pO1xyXG5cclxuZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgaWYgKCEkKFwiI1wiICsgbW9udGhBbmRZZWFyKS5sZW5ndGgpIHtcclxuICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldE1vbnRoQW5kWWVhckh0bWwoZXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgbGV0IGRhdGUgPSBcImRhdGVfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkgKyBcIl9cIiArIG1vbnRoQW5kWWVhcjtcclxuXHJcbiAgaWYgKCEkKFwiI1wiICsgZGF0ZSkubGVuZ3RoKSB7XHJcbiAgICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuYXBwZW5kKFBhcnNlci5nZXREYXRlSHRtbChldmVudCkpXHJcbiAgfVxyXG5cclxuICAkKFwiI1wiICsgZGF0ZSkuYXBwZW5kKFBhcnNlci5nZXRFdmVudEh0bWwoZXZlbnQpKTtcclxuXHJcbn0pXHJcblxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgc2hvd0V2ZW50RGV0YWlsczogYW55O1xyXG4gICAgc2hvd1BlcnNvbkRldGFpbHM6IGFueTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5zaG93RXZlbnREZXRhaWxzID0gZnVuY3Rpb24gKGVwaXNvZGVUaW1lOiBudW1iZXIpIHtcclxuICBsZXQgcmVzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PiB7XHJcbiAgICByZXR1cm4gZXZlbnQuZXBpc29kZVRpbWUgPT09IGVwaXNvZGVUaW1lO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmVtcHR5KCk7XHJcbiAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50TW9kYWxIdG1sKHJlc1swXSkpO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCAubW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cclxufVxyXG5cclxud2luZG93LnNob3dQZXJzb25EZXRhaWxzID0gZnVuY3Rpb24gKHBlcnNvbjogRGFya1BlcnNvbikge1xyXG4gICQoJyNkYXJrLWV2ZW50LW1vZGFsJykuZW1wdHkoKTtcclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmFwcGVuZChQYXJzZXIuZ2V0UGVyc29uTW9kYWxIdG1sKHBlcnNvbikpO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCAubW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG59IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgRGFya0ZhbWlseSB9IGZyb20gXCIuL2VudW0vZGFya0ZhbWlseVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25zIHtcclxuXHJcbiAgICBzdGF0aWMgdW5rbm93blBlcnNvbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVua25vd25cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gVW5rbm93biBmYW1pbGllcyAgIFxyXG4gICAgXHJcbiAgICBzdGF0aWMgYmVybmFkZXR0ZTogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkJlcm5hZGV0dGVcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3JiZW5Xb2xsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJUb3JiZW4gV29sbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2lsamE6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJTaWxqYVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1c2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2ViYXN0aWFuS3J1Z2VyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2ViYXN0aWFuIEtydWdlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBoZ1Rhbm5oYXVzOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSC5HLiBUYW5uaGF1c1wiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBqdXJnZW5PYmVuZG9yZjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkrDvHJnZW4gT2JlbmRvcmZcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcmlrT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFcmlrIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHlhc2luRnJpZXNlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiWWFzaW4gRnJpZXNlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBOaWVsc2VuIEZhbWlseVxyXG5cclxuICAgIHN0YXRpYyBhZ25lc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJBZ25lcyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub2FoOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTm9haFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYWx0TmFtZTogW1wiSGFubm8gTm9haCBUYXViZXJcIl1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJvbnRlTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlRyb250ZSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmFnbmVzTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqYW5hTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkphbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdWxyaWNoTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVscmljaCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWRzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZHMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMga2F0YXJpbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiS2F0YXJpbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFnbnVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZ251cyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFydGhhTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hcnRoYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWlra2VsTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pa2tlbCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sXHJcbiAgICAgICAgYWx0TmFtZTogW1wiTWljaGFlbCBLaGFud2FsZFwiXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBLYWhud2FsZCBGYW1pbHlcclxuXHJcbiAgICBzdGF0aWMgZGFuaWVsS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEYW5pZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5lc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSW5lcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsIFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pY2hhZWxLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1pY2hhZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFubmFoS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIYW5uYWggS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnNlYmFzdGlhbktydWdlcixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqb25hc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSm9uYXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm1pY2hhZWxLYWhud2FsZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gRG9wcGxlciBGYW1pbHkgICAgXHJcbiAgICBcclxuICAgIHN0YXRpYyBiZXJuZERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuZCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQgLy9UT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdyZXRhRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkdyZXRhIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZCAvL1RPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVsZ2VEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSGVsZ2UgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5ncmV0YURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGV0ZXJEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUGV0ZXIgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhcmxvdHRlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNoYXJsb3R0ZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm5vYWgsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJhbnppc2thRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW56aXNrYSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWxpc2FiZXRoRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkVsaXNhYmV0aCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBUaWVkZW1hbm4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGVnb25UaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFZ29uIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCwgLy9UT0RPXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG9yaXNUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEb3JpcyBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsIC8vVE9ET1xyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVkaWFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1ZGlhIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5kb3Jpc1RpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpbmFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJSZWdpbmEgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWxla3NhbmRlclRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFsZWtzYW5kZXIgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLCAvL1RPRE9cclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXJ0b3N6VGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmFydG9zeiBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJleHBvcnQgZW51bSBBZ2VHcm91cCB7XHJcbiAgICB5b3VuZyA9IFwiWW91bmdcIixcclxuICAgIGFkdWx0ID0gXCJBZHVsdFwiLFxyXG4gICAgb2xkID0gXCJPbGRcIlxyXG59IiwiZXhwb3J0IGVudW0gRGFya0ZhbWlseSB7XHJcbiAgICBOaWVsc2VuID0gXCJOaWVsc2VuXCIsXHJcbiAgICBLYWhud2FsZCA9IFwiS2FobndhbGRcIixcclxuICAgIFRpZWRlbWFubiA9IFwiVGllZGVtYW5uXCIsXHJcbiAgICBEb3BwbGVyID0gXCJEb3BwbGVyXCIsXHJcbiAgICBVbmtub3duID0gXCJVbmtub3duXCJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVMaW5lIHtcclxuICAgIHQxOTIwLFxyXG4gICAgdDE5NTMsXHJcbiAgICB0MTk4NixcclxuICAgIHQyMDE5LFxyXG4gICAgdDIwNTJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVUcmF2ZWxEZXZpY2Uge1xyXG4gICAgdDE5MjBEZXZpY2UsXHJcbiAgICBjYXZlLFxyXG4gICAgdGFubmhhdXNEZXZpY2UsXHJcbiAgICBhbHRNYXJ0aGFEZXZpY2UsXHJcbiAgICBwb3dlclBsYW50XHJcbn0iLCJleHBvcnQgZW51bSBUaW1lVHJhdmVsVHlwZSB7XHJcbiAgICBpbixcclxuICAgIG91dFxyXG59IiwiaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25JbkRhcmtFdmVudCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25JbmRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsIH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsSW5EYXJrRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy90aW1lVHJhdmVsSW5EYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG5cclxuICAgIHN0YXRpYyBtb250aE5hbWVzID0gW1xyXG4gICAgICAgIFwiSmFudWFyeVwiLFxyXG4gICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICBcIk1hcmNoXCIsXHJcbiAgICAgICAgXCJBcHJpbFwiLFxyXG4gICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgXCJKdW5lXCIsXHJcbiAgICAgICAgXCJKdWx5XCIsXHJcbiAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgIFwiT2N0b2JlclwiLFxyXG4gICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICBcIkRlY2VtYmVyXCJcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIGdldERhdGVIdG1sKGV2ZW50OiBEYXJrRXZlbnQpOiBzdHJpbmcgfCBFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IERvY3VtZW50RnJhZ21lbnQgfCAoRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQpW10ge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSd0aW1lbGluZS1zZWN0aW9uJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBjbGFzcz0ndGltZWxpbmUtZGF0ZSc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICUlREFURVNUUiUlXCIgK1xyXG4gICAgICAgICAgICBcIiAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGlkPSclJURBVEUlJScgY2xhc3M9J3Jvdyc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IFwiZGF0ZV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKSArIFwiX1wiICsgbW9udGhBbmRZZWFyO1xyXG4gICAgICAgIGxldCBkYXRlU3RyID0gUGFyc2VyLm1vbnRoTmFtZXNbd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKV0gKyBcIiBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKS50b1N0cmluZygpICsgXCIsIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREFURVNUUiUlXCIsIGRhdGVTdHIpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVEQVRFJSVcIiwgZGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0TW9udGhBbmRZZWFySHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBpZD0nJSVJRCUlJyBjbGFzcz0ndGltZWxpbmUtbW9udGgnPlwiICtcclxuICAgICAgICAgICAgXCIlJU1PTlRIQU5EWUVBUiUlXCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXJTdHIgPSBQYXJzZXIubW9udGhOYW1lc1t3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpXSArIFwiLCBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJU1PTlRIQU5EWUVBUiUlXCIsIG1vbnRoQW5kWWVhclN0cik7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUlEJSVcIiwgbW9udGhBbmRZZWFyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgaHRtbCBcIiArIHJldHVyblN0cik7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnRIdG1sKGV2ZW50OiBEYXJrRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdjb2wtc20tNCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgY2xhc3M9J3RpbWVsaW5lLWJveCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8ZGl2IGNsYXNzPSdib3gtdGl0bGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxpIGNsYXNzPSdmYSBmYS1hc3RlcmlzayB0ZXh0LXN1Y2Nlc3MnIGFyaWEgLSBoaWRkZW49J3RydWUnID4gPC9pPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICUlVElUTEUlJVwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxhIGNsYXNzPSdidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHQnIG9uY2xpY2s9J3Nob3dFdmVudERldGFpbHMoXCIgKyBldmVudC5lcGlzb2RlVGltZSArIFwiKSc+IERldGFpbHMgPC9hPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8ZGl2IGNsYXNzPSdib3gtY29udGVudCcgc3R5bGU9J2hlaWdodDoxMDBweCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgPGRpdiBjbGFzcz0nYm94LWl0ZW0nPiAlJURFU0NSSVBUSU9OJSUgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICUlVElNRVRSQVZFTFMlJVwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LWZvb3Rlcic+ICUlUEVSU09OUyUlIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVRJVExFJSVcIiwgZXZlbnQudGl0bGUpO1xyXG4gICAgICAgIGxldCBkZXMgPSBldmVudC5kZXNjcmlwdGlvbjtcclxuICAgICAgICBpZiAoZGVzLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgICAgICAgICBkZXMgPSBkZXMuc3Vic3RyaW5nKDAsIDEwMCkgKyAnLi4uJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREVTQ1JJUFRJT04lJVwiLCBkZXMpO1xyXG4gICAgICAgIGxldCB0aW1lVHJhdmVscyA9ICcnO1xyXG4gICAgICAgIGlmIChldmVudC50aW1lVHJhdmVscykge1xyXG4gICAgICAgICAgICBldmVudC50aW1lVHJhdmVscy5mb3JFYWNoKHRpbWVUcmF2ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGltZVRyYXZlbHMgPSB0aW1lVHJhdmVscyArIFBhcnNlci5nZXRUaW1lVHJhdmVsSHRtbCh0aW1lVHJhdmVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVUSU1FVFJBVkVMUyUlXCIsIHRpbWVUcmF2ZWxzKTtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIGV2ZW50LnBlcnNvbnMuZm9yRWFjaChwZXJzb24gPT4ge1xyXG4gICAgICAgICAgICBwZXJzb25zID0gcGVyc29ucyArIFBhcnNlci5nZXRQZXJzb25IdG1sKHBlcnNvbi5wZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbDogVGltZVRyYXZlbEluRGFya0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9JyUlQ0xBU1MlJScgPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIHRpbWVUcmF2ZWwudGltZVRyYXZlbC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24ucGVyc29uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlUEVSU09OUyUlXCIsIHBlcnNvbnMpO1xyXG4gICAgICAgIGlmICh0aW1lVHJhdmVsLnR5cGUgPT0gVGltZVRyYXZlbFR5cGUuaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUNMQVNTJSVcIiwgJ2JveC1mb290ZXItdGltZS1pbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVDTEFTUyUlXCIsICdib3gtZm9vdGVyLXRpbWUtb3V0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBlcnNvbkh0bWwocGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J1wiICsgUGFyc2VyLmdldFBlcnNvbkltYWdlKHBlcnNvbikgKyBcIicgc3R5bGU9J3BhZGRpbmc6IDFweDt3aWR0aDogMzBweDtoZWlnaHQ6IDMwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ubmFtZSArIFwiJyBvbmNsaWNrPSdzaG93UGVyc29uRGV0YWlscyhcIiArIEpTT04uc3RyaW5naWZ5KHBlcnNvbikgKyBcIiknPiBcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSW1hZ2UocGVyc29uOiBEYXJrUGVyc29uKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAocGVyc29uLnBob3Rvc1sxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBob3Rvc1sxXS51cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwZXJzb24ucGhvdG9zWzBdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJzb24ucGhvdG9zWzBdLnVybDtcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcnNvbi5waG90b3NbMl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbi5waG90b3NbMl0udXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL3Vua25vd25wZXJzb24uanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFdmVudE1vZGFsSHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiUlVElUTEUlJTwvaDU+JyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgIDxwPiUlQk9EWSUlPC9wPicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElUTEUlJVwiLCBldmVudC50aXRsZSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUJPRFklJVwiLCBldmVudC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJzb25Nb2RhbEh0bWwocGVyc29uOiBEYXJrUGVyc29uKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiUlVElUTEUlJTwvaDU+JyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgIDxwPiUlQk9EWSUlPC9wPicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElUTEUlJVwiLCBwZXJzb24ubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUJPRFklJVwiLCBwZXJzb24uZmFtaWx5ICsgJzxicj4nICsgcGVyc29uLmZhdGhlcj8ubmFtZSArICc8YnI+JyArIHBlcnNvbi5tb3RoZXI/Lm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==