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

/***/ "./ts/src/events/eventsProvider.ts":
/*!*****************************************!*\
  !*** ./ts/src/events/eventsProvider.ts ***!
  \*****************************************/
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
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode1 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Michael commits suicide',
            description: 'Michael commits suicide leaving behind a letter `Do not open before November 4, 10:13 PM`',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2019 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        });
        events.push({
            title: 'Hannah fucks Ulrich',
            description: 'Jonas wakes from a nightmare as usual. Hannah fucks Ulrich. Ulrich invites Hannah for the Ulrich-Katarina anniversary that night. Hannah is disappointed for not receiving `I love you` back',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        });
        events.push({
            title: 'Winden caves intro',
            description: 'Jonas leaves for school. Erik Obendorf is missing. Winden caves is located 3.5 kms from Winde. Jonas talks with his therapist Peter about his dreams and anger related to his dad',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:01").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        });
        events.push({
            title: 'Power Plant intro',
            description: 'Winden Nuclear Power Plant. Project plan started in 1953 and authorized in 1960. To be decommissioned in 2020 due to government. Ines has the letter left by Michael',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/04/2019 07:00:02").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
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
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        });
        events.push({
            title: 'Jonas goes to school',
            description: 'Jonas goes to school for first time after his dads suicide. Meets his friend Bartosz. Bartosz hid the fact about Jonas dad to the school people, Instead he told that Jonas was in two month exchage school in France. Martha now likes Bartosz as Jonas was missing for long time. Principal katarina talks to students about missing Erik. Bartosz plans on getting Erik`s stash',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:04").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        });
        events.push({
            title: 'Erik Investigation',
            description: '49 tire tracks including 2 trucks. 21,312 vehicles in Winden.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/04/2019 07:00:05").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
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
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt112, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/04/2019 22:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        }); //TODO Update timetravel info 
        events.push({
            title: 'Mikkel Investigation',
            description: 'Police finds a child body thats not mikkel.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            worldTimeInMillis: new Date("11/05/2019 07:00:01").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 1, ++episodeFrame)
        });
        //TODO ending event
        return events;
    }
}
exports.Episode1 = Episode1;


/***/ }),

/***/ "./ts/src/events/season1/episode10.ts":
/*!********************************************!*\
  !*** ./ts/src/events/season1/episode10.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode10 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode10 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Peter receives Mads body',
            description: 'Peter waits in the bunker as Claudia told. Mads body falls through TimeTravel. Peter calls Tronte. Claudia visits them.',
            persons: [{ person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.madsNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt111, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/04/2019 22:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Old Helge advices Helge',
            description: 'Old Helge wakes up in 1986. Old Helge meets Helge and asks him not to do the same mistake',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Ines adopts Mikkel',
            description: 'Ines gets close with Mikkel. Ines adopts Mikkel.',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Egon imprisons Ulrich',
            description: 'Egon imprisons Ulrich.',
            persons: [{ person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1953 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas checks on Tannhaus',
            description: 'Tannhaus proceeds with his time machine based on the time machien given by Jonas. Uses Ulrich`s phone. Jonas gives Caesium-137 to Tannhaus machine and takes the machine for himself.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Jonas goes to fix things',
            description: 'Bartosz hits Jonas. Jonas decides to bring back Mikkel.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt1a1, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/12/2019 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Jonas goes to fix things',
            description: 'As Jonas reaches Mikkel`s room, Noah kidnaps Jonas to puts in the bunker. Stranger Jonas visits Jonas.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt1a1, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/12/1986 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Charlotte finds Ulrich',
            description: 'Charlotte analyses Helge kidnap incident in 1953 to find Ulrich as kidnapper.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/2019 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Peter and Tronte wait for the event',
            description: 'Peter and Tronte wait inside the bunker. Peter calls Charlotte and explains things.',
            persons: [{ person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/2019 16:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Helge tries to kill Helge',
            description: 'Old Helge tries to kill Helge by a car crash but dies himself.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Noah talks to Bartosz',
            description: 'Noah says - Fight between light and shadow - Noah light - Claudia shadow - Claudia lied to Jonas that he fix things - Jonas is the one to trigger - Most people are puppets. ',
            persons: [{ person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/2019 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas goes to fix things in 1986',
            description: 'As directed by Claudia. Stranger Jonas gets time machine from Tannhaus, fills it with Caesium and takes it inside the cave. Blinking lights everywhere in all 3 timelines.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1986 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas goes to fix things in 1986',
            description: 'Portal open in bunker with Jonas inside. Jonas sees 1953 Helge inside Portal. TimeTravel happens. Helge reaches 1986. Jonas reaches 2052.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt1a2, type: timeTravelType_1.TimeTravelType.in },
                { timeTravel: timeTravels_1.TimeTravels.tt1a3, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/12/1986 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas goes to fix things in 1986',
            description: 'Portal open in bunker with Helge inside. Helge sees 1986 Jonas inside Portal. TimeTravel happens. Helge reaches 1986. ',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt1a2, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/12/1953 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Tannhaus is building the time machine',
            description: 'Tannhaus is building the time machine based on the blueprint given by Claudia.',
            persons: [{ person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/12/1953 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        events.push({
            title: 'Jonas reaches future',
            description: 'Due to the actions of Stranger Jonas, Jonas from bunker in 1986 reaches 2052. Silja captures him.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.silja, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt1a3, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/12/2052 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 10, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode10 = Episode10;


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
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode2 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Jonas wakes up',
            description: 'Jonas wakes up from nightmares as usual. Stranger Jonas watches Mikkel search crew.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }
            ],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Unidentified child body report',
            description: 'Male, 10-12 years age. Time of death 16 hours ago. Eyes burnt and melted. Eardrums destroyed. Red soil in the ground. 80s clothes, shoes, walkman. 1986 coin.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich finds cave metal door',
            description: 'Ulrich finds cave metal door. Comes back to tell Charlotte and get search warrant. Fails to get warrant. Meets Aleksander in the gates and argues.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Aleksander orders Jurgen to move the cylinders',
            description: 'Aleksander orders Jurgen to move the cylinders',
            persons: [{ person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jurgenObendorf, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas comes to stay at winden hotel',
            description: 'Stranger Jonas comes to stay at winden hotel',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Jonas finds a map',
            description: 'Jonas finds a map of winden caves hidden in his dads room',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 09:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich investigates Jurgen',
            description: 'Ulrich analyses Mikkel clues. Jurgen has van and was working in the nuclear power plant as a drive the night Erik went missing. Ulrich investigates Jurgen. Find his stash and that he didnt work the previous day.',
            persons: [{ person: darkPersons_1.DarkPersons.jurgenObendorf, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Helge kills Erik',
            description: 'Helge straps Erik to the bunker timemachine and kills him.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.erikObendorf, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'Aleksander loads barrels into a truck',
            description: 'Aleksander loads barrels into a truck',
            persons: [{ person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        events.push({
            title: 'TimeTravel happens',
            description: 'Blinking lights. Dead birds.',
            persons: [],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        }); //TODO Update timetravel info 
        events.push({
            title: 'Mikkel in past',
            description: 'Mikkel walks out of cave, goes home, meets young Ulrich and Katarina',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 2, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode2 = Episode2;


/***/ }),

/***/ "./ts/src/events/season1/episode3.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode3.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode3 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode3 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Mikkel meets Jana',
            description: '',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.janaNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'Mads investigation',
            description: 'Adult Ines intro. Young Charlotte notices dead birds.  Egon investigates missing Mads. 4 weeks since mads is missing.',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'Mikkel roams winden',
            description: 'Mikkel roams winden. Goes to school and meets Katarina and Hannah. Goes to police station and meets Egon. Egon assumes its a prank.',
            persons: [{ person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'Claudia takes charge at nuclear power plant',
            description: 'Helge give TimeTravel book to Claudia. Claudia takes charge at nuclear power plant. Clauida finds missing entries in financial report. Talks to Bernd. He advices its better not to know. Claudia insists. Bernd shows her the hidden cylinders of radioactive substance.',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.berndDoppler, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'Egon investigates dead sheeps',
            description: 'New priest at church. 33 sheeps dead. Cardiac arrest. Eardrums ruptured. ',
            persons: [{ person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'Tronte affair with Claudia',
            description: 'Tronte affair with Claudia',
            persons: [{ person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 09:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'Ines takes Mikkel',
            description: 'Ines takes Mikkel for medical aid. Mikkel wouldnt talk with anyone.',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 09:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        events.push({
            title: 'TimeTravel happens',
            description: 'Blinking lights. Dead birds. Ulrich and Hannah talk about Apocalypse. Mikkel runs from hospital to the cave.',
            persons: [{ person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        }); //TODO Update timetravel info 
        events.push({
            title: 'H.G.Tannhaus is working on time machine',
            description: 'H.G.Tannhaus is working on time machine',
            persons: [{ person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.old },],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 3, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode3 = Episode3;


/***/ }),

/***/ "./ts/src/events/season1/episode4.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode4.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode4 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode4 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Doppler family',
            description: 'Peter and Charlotte dont sleep together. Franziska fights with Elisabeth for missing lipstick.',
            persons: [{ person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.franziskaDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.elisabethDoppler, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Peter meets Helge',
            description: 'Peter asks Helge not to wander. Helge replies that he has tell him and make it stop.',
            persons: [{ person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Charlotte steals roadside camera data',
            description: 'Charlotte steals roadside camera data and then leaves Elisabeth at school. Elisabeth tells about her boyfriend Yasin.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.elisabethDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.yasinFriese, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Jonas investigates winden caves',
            description: 'Jonas takes the map that he found and goes inside the caves. Stranger Jonas leaves a red knot rope on Jonas`s cycle and watches him from a distance. Jonas doesnt find his way inside the cave. Returns.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Charlotte investigation',
            description: 'Analyses the dead birds. Later goes through cam footage. Finds peter`s car in the footage. Hides the info from Woller. Peter removes red soil from his car. Peter lies when Charlotte asks about his location during Mikkel incident.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.torbenWoller, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 09:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Charlotte investigation',
            description: 'Charlotte questions bernadette about Peter. Then visits helge`s forest house. Finds red soil there. Gets report of dead birds in phone. Ear drums burnt. Finds a bunker near the house. Then goes to the powerplant as Ulrich was caught trespassing. Asks Peter to pickup Elisabeth from school.',
            persons: [{ person: darkPersons_1.DarkPersons.bernadette, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 11:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Elisabeth walks home',
            description: 'As no one came to pickup, Elisabeth walks home. Helge runs from hospital. Elisabeth goes missing. Charlotte finds Elisabeth`s scarf. Police start searching. Adult Helge visits Helge`s bunker. Helge roams and reaches Police. Elisabeth reaches home. Elisabeth says that she met Noah and he gave a stopwatch to give to Charlotte',
            persons: [{ person: darkPersons_1.DarkPersons.elisabethDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 17:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas guides Jonas',
            description: 'Stranger Jonas marks the location of cave door in Jonas`s map',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/06/2019 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        events.push({
            title: 'Helge kidnaps Yasin',
            description: 'Helge kidnaps Yasin by order of Noah.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.yasinFriese, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 4, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode4 = Episode4;


/***/ }),

/***/ "./ts/src/events/season1/episode5.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode5.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode5 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode5 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Charlotte investigates Yasin case',
            description: 'Charlotte asks Elisabeth any info about Yasin and about Noah. Noah - tall as dad - blue eyes. Charlotte confronts Peter where he was during Mikkels incident.',
            persons: [{ person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.elisabethDoppler, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        //TODO: Missed scene where mikkel returns to hospital
        events.push({
            title: 'Ines talks to Mikkel',
            description: 'Ines talks to Mikkel. Noah visits Mikkel.',
            persons: [{ person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Bartosz receives call from Noah',
            description: 'Bartosz receives call from Noah on the phone that he found in Erik`s stash. Bartosz tell Jonas that hes meeting Erik`s dealer and wants him to accompany. Jonas agrees.',
            persons: [{ person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Hannah visits Nielsens',
            description: 'As Ulrich doesnt return Hannah`s calls, She visits. Hannah brings food to the Nielsen house. Ulrich drops Hannah at her house. Ulrich breaks up Hannah`s affair.',
            persons: [{ person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas leaves Winden hotel',
            description: 'Stranger Jonas leaves Winden hotel. Keeps the room. Asks Regina to do a local delivery. Then he goes and meets Jonas.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Hannah meets Mikkel',
            description: 'Hannah meets Mikkel outside school. Hannah finds Ulrich and Katarina having sex. Hannah tells her father and Egon that Ulrich raped Katarina. Egon arrests Ulrich.',
            persons: [{ person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.danielKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/1986 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Bartosz meets Noah alone',
            description: 'Jonas watches Martha`s performance. Bartosz meets Noah alone as Jonas didnt respond. Stranger Jonas takes Tannhaus time machine and goes inside cave. ',
            persons: [{ person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt151, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/07/2019 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Jonas receives package from Stranger Jonas',
            description: 'Jonas receives the package sent by Stranger Jonas. A torch light. A Geiger counter to detect radiation. The Letter that Michael left. Letter that says Mikkel is Michael.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/07/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas meets H.G.Tannhaus',
            description: 'Stranger Jonas meets H.G.Tannhaus and says that he wants to talk about time.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt151, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/07/1986 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 5, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode5 = Episode5;


/***/ }),

/***/ "./ts/src/events/season1/episode6.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode6.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode6 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode6 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Mads goes missing',
            description: 'Mads goes missing',
            persons: [{ person: darkPersons_1.DarkPersons.madsNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("10/09/1986 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Investigation continues',
            description: 'Ulrich hears evidences from Mads case. Notices his mom has lied. Confronts his dad where he was that night. Jana reveals about affair between Tronte and Claudia.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.janaNielsen, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Regina learns she has cancer',
            description: 'Regina learns she has cancer. Hides it from Aleksander. Aleksander call the center and gets the info.',
            persons: [{ person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Magnus finds a pendant',
            description: 'Magnus finds a pendant near the place where Franziska keeps her money.',
            persons: [{ person: darkPersons_1.DarkPersons.magnusNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Jonas goes to the cave',
            description: 'Jonas takes the tools that Stranger Jonas sent and goes to the cave. Finds a red rope and follows it inside the cave. Then he follows the Radiation signal. Finds the cave time machine and uses it.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt161, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Katarina learns of Ulrich`s affair',
            description: 'Katarina analyses phone records and learns of her husbands affair.',
            persons: [{ person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich questions Regina about Mads',
            description: 'As Jana informed that Regina was the last person to meet Mads, Ulrich questions Regina about Mads. Ulrich learns that Regina did not frame him of rape and it was Hannah. Ulrich confronts Hannah.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Tronte and Peter wait for event',
            description: 'Tronte and Peter wait in the bunker for events to happen.',
            persons: [{ person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Jonas first time travel',
            description: 'Jonas uses Stranger Jonas tools to do his first time travel to 1986. Jonas notices posters for missing Mads. Jonas meets young Hannah.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.danielKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt161, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/08/1986 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich identifies Mads body',
            description: 'Ulrich identifies the found dead body as Mads - Cut on the chin.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.madsNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/08/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 6, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode6 = Episode6;


/***/ }),

/***/ "./ts/src/events/season1/episode7.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode7.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode7 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode7 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Jonas in 1986',
            description: 'Jonas wakes, roams, goes to school. Meets Regina. Meets Egon.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Egon investigates Mads case',
            description: 'Egon queries Helge about his route. Why he took state road instead of forest road. Katarina gets Ulrich out of jail.',
            persons: [{ person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Charolette searches power plant',
            description: 'Charlotte gets search warrant and searches power plant. Ulrich finds Egon notes on Helge from 1986. Charlotte finds the place where the barrels were kept. Ulrich goes to hospital to query Helge and gets suspended for that.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Jonas finds Mikkel',
            description: 'Jonas watches Mikkel in the care of Ines. Then Stranger Jonas comes there and tells not to meddle with time.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.mikkelNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Katarina confronts Ulrich',
            description: 'Katarina confronts Ulrich about his affair. Ulrich meets his mom. Jana tells that a she saw a priest(Noah) arguing with a man(Helge) before Mads incident and saw the same man in present with same age.',
            persons: [{ person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.janaNielsen, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/2019 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Charlotte goes to bunker',
            description: 'Charlotte gets suspicion on Helge from Ulrich. Questions Peter. Visits the bunker. Jonas comes back to present. Jonas burns the letter.',
            persons: [{ person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt171, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/09/2019 16:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Jonas travels back to present',
            description: 'Jonas travels back to 2019 ',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt171, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/09/1986 16:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich visits Helge again',
            description: 'Ulrich visits Helge. Finds the time travel book with 1986 coin. Helge runs away. Ulrich follows.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/2019 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        /*events.push({
            title: 'Helge with a dead body',
            description: 'Helge is with a dead body outside the bunker. ',
            persons: [{ person: DarkPersons.helgeDoppler, personTime: AgeGroup.adult },
            { person: DarkPersons.noah, personTime: AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1953 20:00:00").getTime(),
            episodeTime: new EpisodeTime(1, 7, ++episodeFrame)
        });*/
        //Assumed Events
        events.push({
            title: 'Bunker TimeMachine',
            description: 'Helge uses time machine on Erik Obendroff. Erik Obendroff dies and goes to 1953.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.erikObendorf, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1986 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Bunker TimeMachine',
            description: 'Helge uses time machine on Yasin Friese. Yasin Friese dies and goes to 1953.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.yasinFriese, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1986 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Bunker TimeMachine',
            description: 'Helge uses time machine on Erik Obendroff in 1986. Erik Obendroff dies and reaches 1953.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.erikObendorf, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/05/1953 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        events.push({
            title: 'Bunker TimeMachine',
            description: 'Helge uses time machine on Yasin Friese in 1986. Yasin Friese dies and reaches 1953. Noah cleans the place. Adds text to the wall - Nov 9 1953.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.yasinFriese, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/09/1953 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 7, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode7 = Episode7;


/***/ }),

/***/ "./ts/src/events/season1/episode8.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode8.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode8 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode8 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Two bodies found in site',
            description: 'Police finds two dead bodies in power plant construction site. Egon reaches the spot. Helge follow his car in cycle. Eyes burned. Ears destroyed. 1986 coins.',
            persons: [{ person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.erikObendorf, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.yasinFriese, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.danielKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas visits H.G.Tannhaus',
            description: 'Stranger Jonas visits H.G.Tannhaus and talk about time. Jonas asks him to fix his time machine.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/9/1986 22:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich first time travel',
            description: 'Helge goes to the cave travels to 1986 and Ulrich follows him but reaches 1953.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt181, type: timeTravelType_1.TimeTravelType.out },
                { timeTravel: timeTravels_1.TimeTravels.tt182, type: timeTravelType_1.TimeTravelType.out }],
            worldTimeInMillis: new Date("11/9/2019 22:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich in 1953',
            description: 'Ulrich comes out of the cave. Two boys bully helge. Urlich directs Agnes and Tronte. Ulrich goes to H.G.Tannhaus shop.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.agnesNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt182, type: timeTravelType_1.TimeTravelType.in }],
            worldTimeInMillis: new Date("11/10/1953 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        events.push({
            title: 'Claudia tutors Helge',
            description: 'Claudia tutors Helge. Agnes visits Tiedemann house.',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.dorisTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.agnesNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.gretchen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 09:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich hits Helge',
            description: 'Ulrich meets Jana and Ines in H.G.Tannhaus shop. Learns about dead bodies. Forgets his phone and rushes to police station and learns about Dopplers. Catches Helge, hits him in the head with a rock and leaves him in the bunker.',
            persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.janaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.inesKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        events.push({
            title: 'Gretchen time travels',
            description: 'Claudia takes Tronte to show the forest. Helge accompanies. Sends Gretchen into the cave. Old Claudia takes Gretchen to 1986.',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.tronteNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.gretchen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/10/1953 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 8, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode8 = Episode8;


/***/ }),

/***/ "./ts/src/events/season1/episode9.ts":
/*!*******************************************!*\
  !*** ./ts/src/events/season1/episode9.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode9 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode9 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Helge missing',
            description: 'Bernd reports missing Helge to police. Noah visits Dopplers. Egon arrests Ulrich.',
            persons: [{ person: darkPersons_1.DarkPersons.berndDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.danielKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1953 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich is released',
            description: 'By Katarina`s statements, Ulrich is released. Hannah lies to Katarina that it was Regina who framed Ulrich.',
            persons: [{ person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.janaNielsen, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Claudia finds Gretchen',
            description: 'Claudia goes to barrels to take a picture. Old Claudia leaves Gretchen here.',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.gretchen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 08:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Aleksander protects Regina',
            description: 'Katarina fights Regina. Aleksander comes for protection.',
            persons: [{ person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Claudia talks to Bernd',
            description: '',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.berndDoppler, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Helge doesnt report to Egon',
            description: 'Helge hides from Egon.',
            persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.egonTiedemann, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 13:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Noah and Helge work',
            description: 'Noah and Helge work on the bunker time machine. It failed on the previous try.',
            persons: [{ person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Magnus gives the pendant to Franziska',
            description: 'Magnus gives the pendant to Franziska',
            persons: [{ person: darkPersons_1.DarkPersons.magnusNielsen, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.franziskaDoppler, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Ulrich is missing',
            description: 'Katarina notices Ulrich is missing. Asks Charlotte. Fights with Hannah. Hannah shows Aleksander that she has proof of his past.',
            persons: [{ person: darkPersons_1.DarkPersons.katarinaNielsen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Claudia meets Bartosz',
            description: 'Claudia gives a letter to Bartosz to give to his mom.',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 15:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Martha kisses Jonas',
            description: 'Jonas avoids Martha. Martha confronts Jonas. He walks away.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.marthaNielsen, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 17:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Bartosz meets Noah again',
            description: '',
            persons: [{ person: darkPersons_1.DarkPersons.bartoszTiedemann, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Regina finds Stranger Jonas things',
            description: '',
            persons: [{ person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult },],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Claudia gives job for Aleksander',
            description: '',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1986 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas refills Caesium-137',
            description: '',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult },],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/2019 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        events.push({
            title: 'Claudia meets Tannhaus',
            description: 'Claudia give blueprint of Tannhaus machine.',
            persons: [{ person: darkPersons_1.DarkPersons.claudiaTiedemann, personTime: ageGroup_1.AgeGroup.old },
                { person: darkPersons_1.DarkPersons.hgTannhaus, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("11/11/1953 19:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(1, 9, ++episodeFrame)
        });
        return events;
    }
}
exports.Episode9 = Episode9;


/***/ }),

/***/ "./ts/src/events/season2/s0201.ts":
/*!****************************************!*\
  !*** ./ts/src/events/season2/s0201.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.S0201 = void 0;
const eventsProvider_1 = __webpack_require__(/*! ../eventsProvider */ "./ts/src/events/eventsProvider.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class S0201 extends eventsProvider_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Noah is building the cave passage',
            description: 'Adam commands Noah. Noah kills his coworker. Noah advices younger Noah to follow Adam.',
            persons: [{ person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.noah, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.old }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/1921 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: 'Jonas is in the future',
            description: 'Jonas wakes up. Goes to the bunker. Hears Claudia`s tapes. Apocalypse happened on June 27,2020. Claudia is one of the survivors. If the God particle is stabilized, maybe things can be fixed.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: 'Elisabeth leader',
            description: 'Elisabeth is the leader of the tribe in the future. She talks about the prophecy. Passage to open to paradise.',
            persons: [{ person: darkPersons_1.DarkPersons.elisabethDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.silja, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: '6 days until apocalypse',
            description: 'Six months after mysterious disapperance of Erik, Mikkel, Yasin, Jonas, Helge, Ulrich. Regina cancer worsens. Clausen - head of Winden task force.',
            persons: [{ person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.reginaTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.clausen, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jurgenObendorf, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 07:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: 'Power plant to be closed',
            description: 'Aleksander announces nuclear power plant to be closed in 6 days. Puts the barrels inside concrete.',
            persons: [{ person: darkPersons_1.DarkPersons.aleksanderTiedemann, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.torbenWoller, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.bernadette, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: 'Stranger Jonas visits Hannah',
            description: 'Stranger Jonas visits Hannah and explains that he is Jonas from future.',
            persons: [{ person: darkPersons_1.DarkPersons.hannahKahnwald, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 10:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: 'Elisabeth identifies Noah',
            description: 'Elisabeth identifies Noah in the Sic Mundus group picture. Peter informs it to Charlotte.',
            persons: [{ person: darkPersons_1.DarkPersons.elisabethDoppler, personTime: ageGroup_1.AgeGroup.young },
                { person: darkPersons_1.DarkPersons.peterDoppler, personTime: ageGroup_1.AgeGroup.adult },
                { person: darkPersons_1.DarkPersons.charlotteDoppler, personTime: ageGroup_1.AgeGroup.adult }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2020 18:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        events.push({
            title: 'Jonas finds time portal inside power plant',
            description: 'Jonas secretly enters the power plant and using the geiger counter finds the time portal.',
            persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }],
            timeTravels: [],
            worldTimeInMillis: new Date("06/21/2053 20:00:00").getTime(),
            episodeTime: new episodeTime_1.EpisodeTime(2, 1, ++episodeFrame)
        });
        return events;
    }
}
exports.S0201 = S0201;


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
    device: timeTravelDevice_1.TimeTravelDevice.bunkerDevice,
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
TimeTravels.tt151 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }]
};
TimeTravels.tt161 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }]
};
TimeTravels.tt171 = {
    from: timeLine_1.TimeLine.t1986,
    to: timeLine_1.TimeLine.t2019,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }]
};
TimeTravels.tt181 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.old }]
};
TimeTravels.tt182 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1953,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.ulrichNielsen, personTime: ageGroup_1.AgeGroup.adult }]
};
TimeTravels.tt1a1 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }]
};
TimeTravels.tt1a2 = {
    from: timeLine_1.TimeLine.t1953,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.tannhausDevice,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.helgeDoppler, personTime: ageGroup_1.AgeGroup.young }]
};
TimeTravels.tt1a3 = {
    from: timeLine_1.TimeLine.t1986,
    to: timeLine_1.TimeLine.t2052,
    device: timeTravelDevice_1.TimeTravelDevice.tannhausDevice,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.young }]
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
const darkPersons_1 = __webpack_require__(/*! ./models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const events_1 = __webpack_require__(/*! ./timeline/events */ "./ts/src/timeline/events.ts");
const popup_1 = __webpack_require__(/*! ./timeline/popup */ "./ts/src/timeline/popup.ts");
const eventRenderer_1 = __webpack_require__(/*! ./timeline/eventRenderer */ "./ts/src/timeline/eventRenderer.ts");
events_1.Events.initialize();
popup_1.Popup.definePopupFunctions();
window.changeTime = function (order) {
    if (order === 'world') {
        eventRenderer_1.EventRenderer.worldTimeline();
    }
    else if (order === 'mikkel') {
        eventRenderer_1.EventRenderer.personTimeline(darkPersons_1.DarkPersons.mikkelNielsen);
    }
    else if (order === 'jonas') {
        eventRenderer_1.EventRenderer.personTimeline(darkPersons_1.DarkPersons.jonasKahnwald);
    }
};
window.changeTime('world');


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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("gretchen", [ageGroup_1.AgeGroup.young]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("sebastiankruger", [ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.hgTannhaus = {
    name: "H.G. Tannhaus",
    family: darkFamily_1.DarkFamily.Unknown,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("hgtannhaus", [ageGroup_1.AgeGroup.adult, ageGroup_1.AgeGroup.old]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("erikobendorf", [ageGroup_1.AgeGroup.young]),
    father: DarkPersons.jurgenObendorf,
    mother: undefined
};
DarkPersons.yasinFriese = {
    name: "Yasin Friese",
    family: darkFamily_1.DarkFamily.Friese,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("yasinfriese", [ageGroup_1.AgeGroup.young]),
    father: undefined,
    mother: undefined
};
//Persons from Nielsen Family
DarkPersons.agnesNielsen = {
    name: "Agnes Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("agnesnielsen", [ageGroup_1.AgeGroup.adult]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("madsnielsen", [ageGroup_1.AgeGroup.young]),
    father: DarkPersons.tronteNielsen,
    mother: DarkPersons.janaNielsen
};
DarkPersons.katarinaNielsen = {
    name: "Katarina Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("katarinanielsen", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.magnusNielsen = {
    name: "Magnus Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("magnusnielsen", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.old]),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.marthaNielsen = {
    name: "Martha Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("marthanielsen", [ageGroup_1.AgeGroup.young]),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen
};
DarkPersons.mikkelNielsen = {
    name: "Mikkel Nielsen",
    family: darkFamily_1.DarkFamily.Nielsen,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("mikkelnielsen", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: DarkPersons.ulrichNielsen,
    mother: DarkPersons.katarinaNielsen,
    altName: ["Michael Khanwald"]
};
//Persons from Kahnwald Family
DarkPersons.danielKahnwald = {
    name: "Daniel Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("danielkahnwald", [ageGroup_1.AgeGroup.adult]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("michaelkahnwald", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: DarkPersons.inesKahnwald
};
DarkPersons.hannahKahnwald = {
    name: "Hannah Kahnwald",
    family: darkFamily_1.DarkFamily.Kahnwald,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("hannahkahnwald", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("bernddoppler", [ageGroup_1.AgeGroup.adult, ageGroup_1.AgeGroup.old]),
    father: undefined,
    mother: undefined
};
DarkPersons.gretaDoppler = {
    name: "Greta Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("gretadoppler", [ageGroup_1.AgeGroup.adult]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("peterdoppler", [ageGroup_1.AgeGroup.adult]),
    father: DarkPersons.helgeDoppler,
    mother: undefined
};
DarkPersons.charlotteDoppler = {
    name: "Charlotte Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("charlottedoppler", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: DarkPersons.noah,
    mother: undefined
};
DarkPersons.franziskaDoppler = {
    name: "Franziska Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("franziskadoppler", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.old]),
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
DarkPersons.elisabethDoppler = {
    name: "Elisabeth Doppler",
    family: darkFamily_1.DarkFamily.Doppler,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("elisabethdoppler", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: DarkPersons.peterDoppler,
    mother: DarkPersons.charlotteDoppler
};
//Persons from Tiedemann Family
DarkPersons.egonTiedemann = {
    name: "Egon Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("egontiedemann", [ageGroup_1.AgeGroup.adult, ageGroup_1.AgeGroup.old]),
    father: undefined,
    mother: undefined
};
DarkPersons.dorisTiedemann = {
    name: "Doris Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("doristiedemann", [ageGroup_1.AgeGroup.adult]),
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
    photos: new darkPersonPhoto_1.DarkPersonPhoto("reginatiedemann", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: DarkPersons.claudiaTiedemann
};
DarkPersons.aleksanderTiedemann = {
    name: "Aleksander Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("aleksandertiedemann", [ageGroup_1.AgeGroup.young, ageGroup_1.AgeGroup.adult]),
    father: undefined,
    mother: undefined
};
DarkPersons.bartoszTiedemann = {
    name: "Bartosz Tiedemann",
    family: darkFamily_1.DarkFamily.Tiedemann,
    photos: new darkPersonPhoto_1.DarkPersonPhoto("bartosztiedemann", [ageGroup_1.AgeGroup.young]),
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
    TimeTravelDevice[TimeTravelDevice["bunkerDevice"] = 5] = "bunkerDevice";
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

/***/ "./ts/src/models/episodeTime.ts":
/*!**************************************!*\
  !*** ./ts/src/models/episodeTime.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeTime = void 0;
class EpisodeTime {
    constructor(season, episode, frame) {
        this.season = 0;
        this.episode = 0;
        this.frame = 0;
        this.number = 0;
        this.season = season;
        this.episode = episode;
        this.frame = frame;
        this.number = season * 1000000 + episode * 1000 + frame;
    }
}
exports.EpisodeTime = EpisodeTime;


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

/***/ "./ts/src/timeline/eventRenderer.ts":
/*!******************************************!*\
  !*** ./ts/src/timeline/eventRenderer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRenderer = void 0;
const events_1 = __webpack_require__(/*! ./events */ "./ts/src/timeline/events.ts");
const parser_1 = __webpack_require__(/*! ./parser */ "./ts/src/timeline/parser.ts");
const ageGroup_1 = __webpack_require__(/*! ../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./ts/src/timeline/utils.ts");
class EventRenderer {
    static worldTimeline() {
        let filteredEvents = events_1.Events.getEvents().sort((a, b) => {
            return (a.worldTimeInMillis >= b.worldTimeInMillis) ? 1 : -1;
        });
        $('#dark-container .timeline').empty();
        filteredEvents.forEach(event => {
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
    }
    static personTimeline(darkPerson) {
        let filteredEvents = events_1.Events.getEvents().sort((a, b) => {
            return (a.worldTimeInMillis >= b.worldTimeInMillis) ? 1 : -1;
        });
        let filteredEvents1 = filteredEvents.filter(event => {
            let searchItem = { person: darkPerson, personTime: ageGroup_1.AgeGroup.young };
            if (utils_1.Utils.isSamePerson(event.persons, searchItem)) {
                return true;
            }
            return false;
        });
        let filteredEvents2 = events_1.Events.getEvents().filter(event => {
            let searchItem = { person: darkPerson, personTime: ageGroup_1.AgeGroup.adult };
            if (utils_1.Utils.isSamePerson(event.persons, searchItem)) {
                return true;
            }
            return false;
        });
        let filteredEvents3 = events_1.Events.getEvents().filter(event => {
            let searchItem = { person: darkPerson, personTime: ageGroup_1.AgeGroup.old };
            if (utils_1.Utils.isSamePerson(event.persons, searchItem)) {
                return true;
            }
            return false;
        });
        //sort each
        //TODO
        filteredEvents = [];
        filteredEvents = filteredEvents.concat(filteredEvents1);
        filteredEvents = filteredEvents.concat(filteredEvents2);
        filteredEvents = filteredEvents.concat(filteredEvents3);
        $('#dark-container .timeline').empty();
        let prevDate = '';
        let prevI = 0;
        let iterator = 0;
        filteredEvents.forEach(event => {
            iterator = iterator + 1;
            let worldTimeInMillis = new Date(event.worldTimeInMillis);
            let monthAndYear = "my_" + worldTimeInMillis.getMonth() + worldTimeInMillis.getFullYear();
            let date = "date_" + worldTimeInMillis.getDate() + "_" + monthAndYear;
            let suffix = iterator;
            if (prevDate == date) {
                suffix = prevI;
                date = date + '' + suffix;
            }
            else {
                prevDate = date;
                prevI = iterator;
                suffix = iterator;
                date = date + '' + suffix;
                $('#dark-container .timeline').append(parser_1.Parser.getDateHtml2(event, date));
            }
            $("#" + date).append(parser_1.Parser.getEventHtml(event));
        });
    }
}
exports.EventRenderer = EventRenderer;


/***/ }),

/***/ "./ts/src/timeline/events.ts":
/*!***********************************!*\
  !*** ./ts/src/timeline/events.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const episode1_1 = __webpack_require__(/*! ../events/season1/episode1 */ "./ts/src/events/season1/episode1.ts");
const episode2_1 = __webpack_require__(/*! ../events/season1/episode2 */ "./ts/src/events/season1/episode2.ts");
const episode3_1 = __webpack_require__(/*! ../events/season1/episode3 */ "./ts/src/events/season1/episode3.ts");
const episode4_1 = __webpack_require__(/*! ../events/season1/episode4 */ "./ts/src/events/season1/episode4.ts");
const episode5_1 = __webpack_require__(/*! ../events/season1/episode5 */ "./ts/src/events/season1/episode5.ts");
const episode6_1 = __webpack_require__(/*! ../events/season1/episode6 */ "./ts/src/events/season1/episode6.ts");
const episode7_1 = __webpack_require__(/*! ../events/season1/episode7 */ "./ts/src/events/season1/episode7.ts");
const episode8_1 = __webpack_require__(/*! ../events/season1/episode8 */ "./ts/src/events/season1/episode8.ts");
const episode9_1 = __webpack_require__(/*! ../events/season1/episode9 */ "./ts/src/events/season1/episode9.ts");
const episode10_1 = __webpack_require__(/*! ../events/season1/episode10 */ "./ts/src/events/season1/episode10.ts");
const s0201_1 = __webpack_require__(/*! ../events/season2/s0201 */ "./ts/src/events/season2/s0201.ts");
class Events {
    static initialize() {
        Events.events = Events.events.concat((new episode1_1.Episode1).getEvents());
        Events.events = Events.events.concat((new episode2_1.Episode2).getEvents());
        Events.events = Events.events.concat((new episode3_1.Episode3).getEvents());
        Events.events = Events.events.concat((new episode4_1.Episode4).getEvents());
        Events.events = Events.events.concat((new episode5_1.Episode5).getEvents());
        Events.events = Events.events.concat((new episode6_1.Episode6).getEvents());
        Events.events = Events.events.concat((new episode7_1.Episode7).getEvents());
        Events.events = Events.events.concat((new episode8_1.Episode8).getEvents());
        Events.events = Events.events.concat((new episode9_1.Episode9).getEvents());
        Events.events = Events.events.concat((new episode10_1.Episode10).getEvents());
        Events.events = Events.events.concat((new s0201_1.S0201).getEvents());
    }
    static getEvents() {
        return Events.events;
    }
}
exports.Events = Events;
Events.events = [];


/***/ }),

/***/ "./ts/src/timeline/parser.ts":
/*!***********************************!*\
  !*** ./ts/src/timeline/parser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const timeTravelType_1 = __webpack_require__(/*! ../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const ageGroup_1 = __webpack_require__(/*! ../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
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
    static getDateHtml2(event, datevar) {
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
        returnStr = returnStr.replace("%%DATE%%", datevar);
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
            "           <div class='div-ellipsis'> %%TITLE%% </div>" +
            "           <div> <a class='btn btn-xs btn-default pull-right' onclick='showEventDetails(" + event.episodeTime.number + ")'> Details </a> </div>" +
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
            persons = persons + Parser.getPersonHtml(person);
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
            persons = persons + Parser.getPersonHtml(person);
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
        return "<img src='" + Parser.getPersonImage(person) + "' style='cursor:pointer;border: solid 1px #4dbadc;padding: 1px;width: 50px;height: 50px;' title='" + person.person.name + "' onclick='showPersonDetails(" + JSON.stringify(person.person) + ")'> ";
    }
    static getPersonHtml2(person) {
        return "<img src='" + Parser.getPersonImage(person) + "' style='border: solid 1px #4dbadc;padding: 1px;width: 50px;height: 50px;' title='" + person.person.name + "' > ";
    }
    static getPersonImage(person) {
        if (person.personTime == ageGroup_1.AgeGroup.young) {
            return person.person.photos.young;
        }
        else if (person.personTime == ageGroup_1.AgeGroup.adult) {
            return person.person.photos.adult;
        }
        else if (person.personTime == ageGroup_1.AgeGroup.old) {
            return person.person.photos.old;
        }
        else {
            return 'assets/persons/unknownPerson0.jpg';
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
            '    <div class="modal-header">' +
            '      %%IMG0%%' +
            '      %%IMG1%%' +
            '      %%IMG2%%' +
            '    </div>' +
            '    <div class="modal-header">' +
            '      <p>%%BODY%%</p>' +
            '    </div>' +
            '  </div>' +
            '</div>' +
            '</div>';
        returnStr = returnStr.replace("%%TITLE%%", person.name);
        returnStr = returnStr.replace("%%IMG0%%", Parser.getPersonHtml2({ person: person, personTime: ageGroup_1.AgeGroup.young }));
        returnStr = returnStr.replace("%%IMG1%%", Parser.getPersonHtml2({ person: person, personTime: ageGroup_1.AgeGroup.adult }));
        returnStr = returnStr.replace("%%IMG2%%", Parser.getPersonHtml2({ person: person, personTime: ageGroup_1.AgeGroup.old }));
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


/***/ }),

/***/ "./ts/src/timeline/popup.ts":
/*!**********************************!*\
  !*** ./ts/src/timeline/popup.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
const events_1 = __webpack_require__(/*! ./events */ "./ts/src/timeline/events.ts");
const parser_1 = __webpack_require__(/*! ./parser */ "./ts/src/timeline/parser.ts");
class Popup {
    static definePopupFunctions() {
        window.showEventDetails = function (episodeTime) {
            let res = events_1.Events.getEvents().filter(event => {
                return event.episodeTime.number === episodeTime;
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
    }
}
exports.Popup = Popup;


/***/ }),

/***/ "./ts/src/timeline/utils.ts":
/*!**********************************!*\
  !*** ./ts/src/timeline/utils.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static isSamePerson(persons, searchItem) {
        let res = persons.filter(person => {
            if (person.person == searchItem.person && person.personTime == searchItem.personTime) {
                return true;
            }
            return false;
        });
        return res.length > 0;
    }
}
exports.Utils = Utils;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9ldmVudHNQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxMC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGU2LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNy50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGU5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMi9zMDIwMS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3RpbWVUcmF2ZWxzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9kYXJrRmFtaWx5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9lcGlzb2RlVGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvblBob3RvLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy90aW1lbGluZS9ldmVudFJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy90aW1lbGluZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3RpbWVsaW5lL3BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdGltZWxpbmUvcG9wdXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3RpbWVsaW5lL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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QU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxxQkFBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUztRQUNuQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7QUFwQkwsd0JBcUJDO0FBcEJVLGFBQU0sR0FBZ0IsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVnBDLGdKQUF5RTtBQUV6RSw4SEFBNkQ7QUFFN0QsTUFBYSxNQUFNO0lBaUJmLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBZ0I7UUFDL0IsSUFBSSxTQUFTLEdBQUcsRUFBRTtZQUNkLGdDQUFnQztZQUNoQyxnQ0FBZ0M7WUFDaEMsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxvQ0FBb0M7WUFDcEMsV0FBVztZQUNYLFFBQVEsQ0FBQztRQUNiLElBQUksaUJBQWlCLEdBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsSUFBSSxZQUFZLEdBQUcsS0FBSyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFGLElBQUksSUFBSSxHQUFHLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ3RFLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RKLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBZ0IsRUFBRSxPQUFlO1FBQ2pELElBQUksU0FBUyxHQUFHLEVBQUU7WUFDZCxnQ0FBZ0M7WUFDaEMsZ0NBQWdDO1lBQ2hDLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsb0NBQW9DO1lBQ3BDLFdBQVc7WUFDWCxRQUFRLENBQUM7UUFDYixJQUFJLGlCQUFpQixHQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksWUFBWSxHQUFHLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRixJQUFJLElBQUksR0FBRyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN0RSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0SixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBZ0I7UUFDdkMsSUFBSSxTQUFTLEdBQUcsRUFBRTtZQUNkLDBDQUEwQztZQUMxQyxrQkFBa0I7WUFDbEIsUUFBUSxDQUFDO1FBQ2IsSUFBSSxpQkFBaUIsR0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxJQUFJLFlBQVksR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUYsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvRyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNuRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBZ0I7UUFDdkMsSUFBSSxTQUFTLEdBQUcsRUFBRTtZQUNkLHdCQUF3QjtZQUN4QiwrQkFBK0I7WUFDL0IsZ0NBQWdDO1lBQ2hDLHdEQUF3RDtZQUN4RCwwRkFBMEYsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyx5QkFBeUI7WUFDakosZUFBZTtZQUNmLHVEQUF1RDtZQUN2RCwwREFBMEQ7WUFDMUQsZUFBZTtZQUNmLHdCQUF3QjtZQUN4QixvREFBb0Q7WUFDcEQsV0FBVztZQUNYLFFBQVEsQ0FBQztRQUNiLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUM1QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLO1NBQ3RDO1FBQ0QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNuQixLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbkMsV0FBVyxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFpQztRQUN0RCxJQUFJLFNBQVMsR0FBRyxFQUFFO1lBQ2QsNkNBQTZDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLCtCQUFjLENBQUMsRUFBRSxFQUFFO1lBQ3RDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztTQUNyRTtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQTZCO1FBQzlDLE9BQU8sWUFBWSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsbUdBQW1HLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsK0JBQStCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQzlQLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQTZCO1FBQy9DLE9BQU8sWUFBWSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsb0ZBQW9GLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQzdLLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQTZCO1FBQy9DLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxtQkFBUSxDQUFDLEtBQUssRUFBRTtZQUNyQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQztTQUN0QzthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxtQkFBUSxDQUFDLEtBQUssRUFBRTtZQUM1QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQztTQUN0QzthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxtQkFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0gsT0FBTyxtQ0FBbUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBZ0I7UUFDNUMsSUFBSSxTQUFTLEdBQUcsRUFBRTtZQUNkLGlEQUFpRDtZQUNqRCw0Q0FBNEM7WUFDNUMsK0JBQStCO1lBQy9CLGdDQUFnQztZQUNoQyw4Q0FBOEM7WUFDOUMsWUFBWTtZQUNaLDhCQUE4QjtZQUM5Qix1QkFBdUI7WUFDdkIsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUSxDQUFDO1FBQ2IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBa0I7O1FBQy9DLElBQUksU0FBUyxHQUFHLEVBQUU7WUFDZCxpREFBaUQ7WUFDakQsNENBQTRDO1lBQzVDLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFDaEMsOENBQThDO1lBQzlDLFlBQVk7WUFDWixnQ0FBZ0M7WUFDaEMsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGdDQUFnQztZQUNoQyx1QkFBdUI7WUFDdkIsWUFBWTtZQUNaLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUSxDQUFDO1FBQ2IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pILFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakgsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxtQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQUcsTUFBTSxDQUFDLE1BQU0sMENBQUUsSUFBSSxJQUFHLE1BQU0sVUFBRyxNQUFNLENBQUMsTUFBTSwwQ0FBRSxJQUFJLEVBQUMsQ0FBQztRQUN2SCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN6QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOztBQXhMTCx3QkF5TEM7QUF2TFUsaUJBQVUsR0FBRztJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJOLG9GQUFrQztBQUNsQyxvRkFBa0M7QUFHbEMsTUFBYSxLQUFLO0lBRVAsTUFBTSxDQUFDLG9CQUFvQjtRQUU5QixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxXQUFtQjtZQUNuRCxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLE1BQWtCO1lBQ25ELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUVMLENBQUM7Q0FFSjtBQXJCRCxzQkFxQkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQsTUFBYSxLQUFLO0lBRVAsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFnQyxFQUFFLFVBQWlDO1FBQzFGLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUNsRixPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FFSjtBQVpELHNCQVlDIiwiZmlsZSI6ImFjaWQvbWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFdmVudHMoKTogRGFya0V2ZW50W11cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlMSBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWljaGFlbCBjb21taXRzIHN1aWNpZGUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01pY2hhZWwgY29tbWl0cyBzdWljaWRlIGxlYXZpbmcgYmVoaW5kIGEgbGV0dGVyIGBEbyBub3Qgb3BlbiBiZWZvcmUgTm92ZW1iZXIgNCwgMTA6MTMgUE1gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIwNi8yMS8yMDE5IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhbm5haCBmdWNrcyBVbHJpY2gnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdha2VzIGZyb20gYSBuaWdodG1hcmUgYXMgdXN1YWwuIEhhbm5haCBmdWNrcyBVbHJpY2guIFVscmljaCBpbnZpdGVzIEhhbm5haCBmb3IgdGhlIFVscmljaC1LYXRhcmluYSBhbm5pdmVyc2FyeSB0aGF0IG5pZ2h0LiBIYW5uYWggaXMgZGlzYXBwb2ludGVkIGZvciBub3QgcmVjZWl2aW5nIGBJIGxvdmUgeW91YCBiYWNrJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dpbmRlbiBjYXZlcyBpbnRybycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgbGVhdmVzIGZvciBzY2hvb2wuIEVyaWsgT2JlbmRvcmYgaXMgbWlzc2luZy4gV2luZGVuIGNhdmVzIGlzIGxvY2F0ZWQgMy41IGttcyBmcm9tIFdpbmRlLiBKb25hcyB0YWxrcyB3aXRoIGhpcyB0aGVyYXBpc3QgUGV0ZXIgYWJvdXQgaGlzIGRyZWFtcyBhbmQgYW5nZXIgcmVsYXRlZCB0byBoaXMgZGFkJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAxXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Bvd2VyIFBsYW50IGludHJvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdXaW5kZW4gTnVjbGVhciBQb3dlciBQbGFudC4gUHJvamVjdCBwbGFuIHN0YXJ0ZWQgaW4gMTk1MyBhbmQgYXV0aG9yaXplZCBpbiAxOTYwLiBUbyBiZSBkZWNvbW1pc3Npb25lZCBpbiAyMDIwIGR1ZSB0byBnb3Zlcm5tZW50LiBJbmVzIGhhcyB0aGUgbGV0dGVyIGxlZnQgYnkgTWljaGFlbCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowMlwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOaWVsc2VuIEZhbWlseSBpbnRybycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFnbnVzIGhvb2RpZSBpcyBtaXNzaW5nLiBNaWtrZWwgbGlrZXMgbWFnaWMuIGBUaGUgcXVlc3Rpb24gaXNudCBob3csIGl0cyB3aGVuYCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowM1wiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBnb2VzIHRvIHNjaG9vbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgZ29lcyB0byBzY2hvb2wgZm9yIGZpcnN0IHRpbWUgYWZ0ZXIgaGlzIGRhZHMgc3VpY2lkZS4gTWVldHMgaGlzIGZyaWVuZCBCYXJ0b3N6LiBCYXJ0b3N6IGhpZCB0aGUgZmFjdCBhYm91dCBKb25hcyBkYWQgdG8gdGhlIHNjaG9vbCBwZW9wbGUsIEluc3RlYWQgaGUgdG9sZCB0aGF0IEpvbmFzIHdhcyBpbiB0d28gbW9udGggZXhjaGFnZSBzY2hvb2wgaW4gRnJhbmNlLiBNYXJ0aGEgbm93IGxpa2VzIEJhcnRvc3ogYXMgSm9uYXMgd2FzIG1pc3NpbmcgZm9yIGxvbmcgdGltZS4gUHJpbmNpcGFsIGthdGFyaW5hIHRhbGtzIHRvIHN0dWRlbnRzIGFib3V0IG1pc3NpbmcgRXJpay4gQmFydG9zeiBwbGFucyBvbiBnZXR0aW5nIEVyaWtgcyBzdGFzaCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJhcnRvc3pUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowNFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFcmlrIEludmVzdGlnYXRpb24nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzQ5IHRpcmUgdHJhY2tzIGluY2x1ZGluZyAyIHRydWNrcy4gMjEsMzEyIHZlaGljbGVzIGluIFdpbmRlbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowNVwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgZ29lcyBtaXNzaW5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUga2lkcyBnbyBzZWFyY2hpbmcgZm9yIEVyaWtgcyBzdGFzaCBuZWFyIFdpbmRlbiBDYXZlcy4gUGFyZW50cyBkbyBhIG1lZXRpbmcgdG8gZGlzY3VzcyBvbiBFcmlrLiBJbmVzIHJlYWRzIE1pY2hlYWxgcyBsZXR0ZXIuIFN0cmFuZ2Ugbm9pc2UgZnJvbSBjYXZlcy4gTWlra2VsIGdvZXMgbWlzc2luZycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJhcnRvc3pUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5mcmFuemlza2FEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxMTIsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAyMjowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7IC8vVE9ETyBVcGRhdGUgdGltZXRyYXZlbCBpbmZvIFxyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIEludmVzdGlnYXRpb24nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvbGljZSBmaW5kcyBhIGNoaWxkIGJvZHkgdGhhdHMgbm90IG1pa2tlbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwNzowMDowMVwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vVE9ETyBlbmRpbmcgZXZlbnRcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVUaW1lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lcGlzb2RlVGltZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGUxMCBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGV0ZXIgcmVjZWl2ZXMgTWFkcyBib2R5JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXRlciB3YWl0cyBpbiB0aGUgYnVua2VyIGFzIENsYXVkaWEgdG9sZC4gTWFkcyBib2R5IGZhbGxzIHRocm91Z2ggVGltZVRyYXZlbC4gUGV0ZXIgY2FsbHMgVHJvbnRlLiBDbGF1ZGlhIHZpc2l0cyB0aGVtLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFkc05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxMTEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDIyOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPbGQgSGVsZ2UgYWR2aWNlcyBIZWxnZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT2xkIEhlbGdlIHdha2VzIHVwIGluIDE5ODYuIE9sZCBIZWxnZSBtZWV0cyBIZWxnZSBhbmQgYXNrcyBoaW0gbm90IHRvIGRvIHRoZSBzYW1lIG1pc3Rha2UnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzE5ODYgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0luZXMgYWRvcHRzIE1pa2tlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW5lcyBnZXRzIGNsb3NlIHdpdGggTWlra2VsLiBJbmVzIGFkb3B0cyBNaWtrZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTg2IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFZ29uIGltcHJpc29ucyBVbHJpY2gnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Vnb24gaW1wcmlzb25zIFVscmljaC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTUzIDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyBjaGVja3Mgb24gVGFubmhhdXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Rhbm5oYXVzIHByb2NlZWRzIHdpdGggaGlzIHRpbWUgbWFjaGluZSBiYXNlZCBvbiB0aGUgdGltZSBtYWNoaWVuIGdpdmVuIGJ5IEpvbmFzLiBVc2VzIFVscmljaGBzIHBob25lLiBKb25hcyBnaXZlcyBDYWVzaXVtLTEzNyB0byBUYW5uaGF1cyBtYWNoaW5lIGFuZCB0YWtlcyB0aGUgbWFjaGluZSBmb3IgaGltc2VsZi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZ1Rhbm5oYXVzLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk4NiAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgZ29lcyB0byBmaXggdGhpbmdzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXJ0b3N6IGhpdHMgSm9uYXMuIEpvbmFzIGRlY2lkZXMgdG8gYnJpbmcgYmFjayBNaWtrZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDFhMSwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8yMDE5IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBnb2VzIHRvIGZpeCB0aGluZ3MnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIEpvbmFzIHJlYWNoZXMgTWlra2VsYHMgcm9vbSwgTm9haCBraWRuYXBzIEpvbmFzIHRvIHB1dHMgaW4gdGhlIGJ1bmtlci4gU3RyYW5nZXIgSm9uYXMgdmlzaXRzIEpvbmFzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MWExLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk4NiAxNTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hhcmxvdHRlIGZpbmRzIFVscmljaCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIGFuYWx5c2VzIEhlbGdlIGtpZG5hcCBpbmNpZGVudCBpbiAxOTUzIHRvIGZpbmQgVWxyaWNoIGFzIGtpZG5hcHBlci4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzIwMTkgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BldGVyIGFuZCBUcm9udGUgd2FpdCBmb3IgdGhlIGV2ZW50JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXRlciBhbmQgVHJvbnRlIHdhaXQgaW5zaWRlIHRoZSBidW5rZXIuIFBldGVyIGNhbGxzIENoYXJsb3R0ZSBhbmQgZXhwbGFpbnMgdGhpbmdzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzIwMTkgMTY6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSB0cmllcyB0byBraWxsIEhlbGdlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdPbGQgSGVsZ2UgdHJpZXMgdG8ga2lsbCBIZWxnZSBieSBhIGNhciBjcmFzaCBidXQgZGllcyBoaW1zZWxmLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk4NiAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTm9haCB0YWxrcyB0byBCYXJ0b3N6JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOb2FoIHNheXMgLSBGaWdodCBiZXR3ZWVuIGxpZ2h0IGFuZCBzaGFkb3cgLSBOb2FoIGxpZ2h0IC0gQ2xhdWRpYSBzaGFkb3cgLSBDbGF1ZGlhIGxpZWQgdG8gSm9uYXMgdGhhdCBoZSBmaXggdGhpbmdzIC0gSm9uYXMgaXMgdGhlIG9uZSB0byB0cmlnZ2VyIC0gTW9zdCBwZW9wbGUgYXJlIHB1cHBldHMuICcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJhcnRvc3pUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzIwMTkgMTk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGdvZXMgdG8gZml4IHRoaW5ncyBpbiAxOTg2JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBcyBkaXJlY3RlZCBieSBDbGF1ZGlhLiBTdHJhbmdlciBKb25hcyBnZXRzIHRpbWUgbWFjaGluZSBmcm9tIFRhbm5oYXVzLCBmaWxscyBpdCB3aXRoIENhZXNpdW0gYW5kIHRha2VzIGl0IGluc2lkZSB0aGUgY2F2ZS4gQmxpbmtpbmcgbGlnaHRzIGV2ZXJ5d2hlcmUgaW4gYWxsIDMgdGltZWxpbmVzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgZ29lcyB0byBmaXggdGhpbmdzIGluIDE5ODYnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvcnRhbCBvcGVuIGluIGJ1bmtlciB3aXRoIEpvbmFzIGluc2lkZS4gSm9uYXMgc2VlcyAxOTUzIEhlbGdlIGluc2lkZSBQb3J0YWwuIFRpbWVUcmF2ZWwgaGFwcGVucy4gSGVsZ2UgcmVhY2hlcyAxOTg2LiBKb25hcyByZWFjaGVzIDIwNTIuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MWEyLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9LFxyXG4gICAgICAgICAgICB7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MWEzLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzE5ODYgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGdvZXMgdG8gZml4IHRoaW5ncyBpbiAxOTg2JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQb3J0YWwgb3BlbiBpbiBidW5rZXIgd2l0aCBIZWxnZSBpbnNpZGUuIEhlbGdlIHNlZXMgMTk4NiBKb25hcyBpbnNpZGUgUG9ydGFsLiBUaW1lVHJhdmVsIGhhcHBlbnMuIEhlbGdlIHJlYWNoZXMgMTk4Ni4gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxYTIsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk1MyAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGFubmhhdXMgaXMgYnVpbGRpbmcgdGhlIHRpbWUgbWFjaGluZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGFubmhhdXMgaXMgYnVpbGRpbmcgdGhlIHRpbWUgbWFjaGluZSBiYXNlZCBvbiB0aGUgYmx1ZXByaW50IGdpdmVuIGJ5IENsYXVkaWEuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZ1Rhbm5oYXVzLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTUzIDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyByZWFjaGVzIGZ1dHVyZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRHVlIHRvIHRoZSBhY3Rpb25zIG9mIFN0cmFuZ2VyIEpvbmFzLCBKb25hcyBmcm9tIGJ1bmtlciBpbiAxOTg2IHJlYWNoZXMgMjA1Mi4gU2lsamEgY2FwdHVyZXMgaGltLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnNpbGphLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MWEzLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMjA1MiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTIgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIHdha2VzIHVwJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB3YWtlcyB1cCBmcm9tIG5pZ2h0bWFyZXMgYXMgdXN1YWwuIFN0cmFuZ2VyIEpvbmFzIHdhdGNoZXMgTWlra2VsIHNlYXJjaCBjcmV3LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VuaWRlbnRpZmllZCBjaGlsZCBib2R5IHJlcG9ydCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFsZSwgMTAtMTIgeWVhcnMgYWdlLiBUaW1lIG9mIGRlYXRoIDE2IGhvdXJzIGFnby4gRXllcyBidXJudCBhbmQgbWVsdGVkLiBFYXJkcnVtcyBkZXN0cm95ZWQuIFJlZCBzb2lsIGluIHRoZSBncm91bmQuIDgwcyBjbG90aGVzLCBzaG9lcywgd2Fsa21hbi4gMTk4NiBjb2luLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggZmluZHMgY2F2ZSBtZXRhbCBkb29yJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggZmluZHMgY2F2ZSBtZXRhbCBkb29yLiBDb21lcyBiYWNrIHRvIHRlbGwgQ2hhcmxvdHRlIGFuZCBnZXQgc2VhcmNoIHdhcnJhbnQuIEZhaWxzIHRvIGdldCB3YXJyYW50LiBNZWV0cyBBbGVrc2FuZGVyIGluIHRoZSBnYXRlcyBhbmQgYXJndWVzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWxla3NhbmRlciBvcmRlcnMgSnVyZ2VuIHRvIG1vdmUgdGhlIGN5bGluZGVycycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWxla3NhbmRlciBvcmRlcnMgSnVyZ2VuIHRvIG1vdmUgdGhlIGN5bGluZGVycycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGNvbWVzIHRvIHN0YXkgYXQgd2luZGVuIGhvdGVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBjb21lcyB0byBzdGF5IGF0IHdpbmRlbiBob3RlbCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBmaW5kcyBhIG1hcCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgZmluZHMgYSBtYXAgb2Ygd2luZGVuIGNhdmVzIGhpZGRlbiBpbiBoaXMgZGFkcyByb29tJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBpbnZlc3RpZ2F0ZXMgSnVyZ2VuJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggYW5hbHlzZXMgTWlra2VsIGNsdWVzLiBKdXJnZW4gaGFzIHZhbiBhbmQgd2FzIHdvcmtpbmcgaW4gdGhlIG51Y2xlYXIgcG93ZXIgcGxhbnQgYXMgYSBkcml2ZSB0aGUgbmlnaHQgRXJpayB3ZW50IG1pc3NpbmcuIFVscmljaCBpbnZlc3RpZ2F0ZXMgSnVyZ2VuLiBGaW5kIGhpcyBzdGFzaCBhbmQgdGhhdCBoZSBkaWRudCB3b3JrIHRoZSBwcmV2aW91cyBkYXkuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qdXJnZW5PYmVuZG9yZiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsZ2Uga2lsbHMgRXJpaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2Ugc3RyYXBzIEVyaWsgdG8gdGhlIGJ1bmtlciB0aW1lbWFjaGluZSBhbmQga2lsbHMgaGltLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZXJpa09iZW5kb3JmLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSwgLy9UT0RPXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGVrc2FuZGVyIGxvYWRzIGJhcnJlbHMgaW50byBhIHRydWNrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbGVrc2FuZGVyIGxvYWRzIGJhcnJlbHMgaW50byBhIHRydWNrJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RpbWVUcmF2ZWwgaGFwcGVucycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmxpbmtpbmcgbGlnaHRzLiBEZWFkIGJpcmRzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFtdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sIC8vVE9ET1xyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTsgIC8vVE9ETyBVcGRhdGUgdGltZXRyYXZlbCBpbmZvIFxyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIGluIHBhc3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01pa2tlbCB3YWxrcyBvdXQgb2YgY2F2ZSwgZ29lcyBob21lLCBtZWV0cyB5b3VuZyBVbHJpY2ggYW5kIEthdGFyaW5hJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlMyBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIG1lZXRzIEphbmEnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmphbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hZHMgaW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWR1bHQgSW5lcyBpbnRyby4gWW91bmcgQ2hhcmxvdHRlIG5vdGljZXMgZGVhZCBiaXJkcy4gIEVnb24gaW52ZXN0aWdhdGVzIG1pc3NpbmcgTWFkcy4gNCB3ZWVrcyBzaW5jZSBtYWRzIGlzIG1pc3NpbmcuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIHJvYW1zIHdpbmRlbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWlra2VsIHJvYW1zIHdpbmRlbi4gR29lcyB0byBzY2hvb2wgYW5kIG1lZXRzIEthdGFyaW5hIGFuZCBIYW5uYWguIEdvZXMgdG8gcG9saWNlIHN0YXRpb24gYW5kIG1lZXRzIEVnb24uIEVnb24gYXNzdW1lcyBpdHMgYSBwcmFuay4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDbGF1ZGlhIHRha2VzIGNoYXJnZSBhdCBudWNsZWFyIHBvd2VyIHBsYW50JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBnaXZlIFRpbWVUcmF2ZWwgYm9vayB0byBDbGF1ZGlhLiBDbGF1ZGlhIHRha2VzIGNoYXJnZSBhdCBudWNsZWFyIHBvd2VyIHBsYW50LiBDbGF1aWRhIGZpbmRzIG1pc3NpbmcgZW50cmllcyBpbiBmaW5hbmNpYWwgcmVwb3J0LiBUYWxrcyB0byBCZXJuZC4gSGUgYWR2aWNlcyBpdHMgYmV0dGVyIG5vdCB0byBrbm93LiBDbGF1ZGlhIGluc2lzdHMuIEJlcm5kIHNob3dzIGhlciB0aGUgaGlkZGVuIGN5bGluZGVycyBvZiByYWRpb2FjdGl2ZSBzdWJzdGFuY2UuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmVybmREb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFZ29uIGludmVzdGlnYXRlcyBkZWFkIHNoZWVwcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IHByaWVzdCBhdCBjaHVyY2guIDMzIHNoZWVwcyBkZWFkLiBDYXJkaWFjIGFycmVzdC4gRWFyZHJ1bXMgcnVwdHVyZWQuICcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVHJvbnRlIGFmZmFpciB3aXRoIENsYXVkaWEnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Ryb250ZSBhZmZhaXIgd2l0aCBDbGF1ZGlhJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJbmVzIHRha2VzIE1pa2tlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW5lcyB0YWtlcyBNaWtrZWwgZm9yIG1lZGljYWwgYWlkLiBNaWtrZWwgd291bGRudCB0YWxrIHdpdGggYW55b25lLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUaW1lVHJhdmVsIGhhcHBlbnMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JsaW5raW5nIGxpZ2h0cy4gRGVhZCBiaXJkcy4gVWxyaWNoIGFuZCBIYW5uYWggdGFsayBhYm91dCBBcG9jYWx5cHNlLiBNaWtrZWwgcnVucyBmcm9tIGhvc3BpdGFsIHRvIHRoZSBjYXZlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSwgLy9UT0RPXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pOyAgLy9UT0RPIFVwZGF0ZSB0aW1ldHJhdmVsIGluZm8gXHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdILkcuVGFubmhhdXMgaXMgd29ya2luZyBvbiB0aW1lIG1hY2hpbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0guRy5UYW5uaGF1cyBpcyB3b3JraW5nIG9uIHRpbWUgbWFjaGluZScsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGdUYW5uaGF1cywgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0sXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVUaW1lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lcGlzb2RlVGltZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGU0IGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVGcmFtZSA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEb3BwbGVyIGZhbWlseScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGV0ZXIgYW5kIENoYXJsb3R0ZSBkb250IHNsZWVwIHRvZ2V0aGVyLiBGcmFuemlza2EgZmlnaHRzIHdpdGggRWxpc2FiZXRoIGZvciBtaXNzaW5nIGxpcHN0aWNrLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmZyYW56aXNrYURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lbGlzYWJldGhEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BldGVyIG1lZXRzIEhlbGdlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXRlciBhc2tzIEhlbGdlIG5vdCB0byB3YW5kZXIuIEhlbGdlIHJlcGxpZXMgdGhhdCBoZSBoYXMgdGVsbCBoaW0gYW5kIG1ha2UgaXQgc3RvcC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hhcmxvdHRlIHN0ZWFscyByb2Fkc2lkZSBjYW1lcmEgZGF0YScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIHN0ZWFscyByb2Fkc2lkZSBjYW1lcmEgZGF0YSBhbmQgdGhlbiBsZWF2ZXMgRWxpc2FiZXRoIGF0IHNjaG9vbC4gRWxpc2FiZXRoIHRlbGxzIGFib3V0IGhlciBib3lmcmllbmQgWWFzaW4uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWxpc2FiZXRoRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnlhc2luRnJpZXNlLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGludmVzdGlnYXRlcyB3aW5kZW4gY2F2ZXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHRha2VzIHRoZSBtYXAgdGhhdCBoZSBmb3VuZCBhbmQgZ29lcyBpbnNpZGUgdGhlIGNhdmVzLiBTdHJhbmdlciBKb25hcyBsZWF2ZXMgYSByZWQga25vdCByb3BlIG9uIEpvbmFzYHMgY3ljbGUgYW5kIHdhdGNoZXMgaGltIGZyb20gYSBkaXN0YW5jZS4gSm9uYXMgZG9lc250IGZpbmQgaGlzIHdheSBpbnNpZGUgdGhlIGNhdmUuIFJldHVybnMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDYvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFybG90dGUgaW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW5hbHlzZXMgdGhlIGRlYWQgYmlyZHMuIExhdGVyIGdvZXMgdGhyb3VnaCBjYW0gZm9vdGFnZS4gRmluZHMgcGV0ZXJgcyBjYXIgaW4gdGhlIGZvb3RhZ2UuIEhpZGVzIHRoZSBpbmZvIGZyb20gV29sbGVyLiBQZXRlciByZW1vdmVzIHJlZCBzb2lsIGZyb20gaGlzIGNhci4gUGV0ZXIgbGllcyB3aGVuIENoYXJsb3R0ZSBhc2tzIGFib3V0IGhpcyBsb2NhdGlvbiBkdXJpbmcgTWlra2VsIGluY2lkZW50LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnRvcmJlbldvbGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDYvMjAxOSAwOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFybG90dGUgaW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIHF1ZXN0aW9ucyBiZXJuYWRldHRlIGFib3V0IFBldGVyLiBUaGVuIHZpc2l0cyBoZWxnZWBzIGZvcmVzdCBob3VzZS4gRmluZHMgcmVkIHNvaWwgdGhlcmUuIEdldHMgcmVwb3J0IG9mIGRlYWQgYmlyZHMgaW4gcGhvbmUuIEVhciBkcnVtcyBidXJudC4gRmluZHMgYSBidW5rZXIgbmVhciB0aGUgaG91c2UuIFRoZW4gZ29lcyB0byB0aGUgcG93ZXJwbGFudCBhcyBVbHJpY2ggd2FzIGNhdWdodCB0cmVzcGFzc2luZy4gQXNrcyBQZXRlciB0byBwaWNrdXAgRWxpc2FiZXRoIGZyb20gc2Nob29sLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYmVybmFkZXR0ZSwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDExOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VsaXNhYmV0aCB3YWxrcyBob21lJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBcyBubyBvbmUgY2FtZSB0byBwaWNrdXAsIEVsaXNhYmV0aCB3YWxrcyBob21lLiBIZWxnZSBydW5zIGZyb20gaG9zcGl0YWwuIEVsaXNhYmV0aCBnb2VzIG1pc3NpbmcuIENoYXJsb3R0ZSBmaW5kcyBFbGlzYWJldGhgcyBzY2FyZi4gUG9saWNlIHN0YXJ0IHNlYXJjaGluZy4gQWR1bHQgSGVsZ2UgdmlzaXRzIEhlbGdlYHMgYnVua2VyLiBIZWxnZSByb2FtcyBhbmQgcmVhY2hlcyBQb2xpY2UuIEVsaXNhYmV0aCByZWFjaGVzIGhvbWUuIEVsaXNhYmV0aCBzYXlzIHRoYXQgc2hlIG1ldCBOb2FoIGFuZCBoZSBnYXZlIGEgc3RvcHdhdGNoIHRvIGdpdmUgdG8gQ2hhcmxvdHRlJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5lbGlzYWJldGhEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDE3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGd1aWRlcyBKb25hcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyYW5nZXIgSm9uYXMgbWFya3MgdGhlIGxvY2F0aW9uIG9mIGNhdmUgZG9vciBpbiBKb25hc2BzIG1hcCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMTk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsZ2Uga2lkbmFwcyBZYXNpbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2Uga2lkbmFwcyBZYXNpbiBieSBvcmRlciBvZiBOb2FoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMueWFzaW5Gcmllc2UsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTUgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBpbnZlc3RpZ2F0ZXMgWWFzaW4gY2FzZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIGFza3MgRWxpc2FiZXRoIGFueSBpbmZvIGFib3V0IFlhc2luIGFuZCBhYm91dCBOb2FoLiBOb2FoIC0gdGFsbCBhcyBkYWQgLSBibHVlIGV5ZXMuIENoYXJsb3R0ZSBjb25mcm9udHMgUGV0ZXIgd2hlcmUgaGUgd2FzIGR1cmluZyBNaWtrZWxzIGluY2lkZW50LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVsaXNhYmV0aERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL1RPRE86IE1pc3NlZCBzY2VuZSB3aGVyZSBtaWtrZWwgcmV0dXJucyB0byBob3NwaXRhbFxyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW5lcyB0YWxrcyB0byBNaWtrZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0luZXMgdGFsa3MgdG8gTWlra2VsLiBOb2FoIHZpc2l0cyBNaWtrZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCYXJ0b3N6IHJlY2VpdmVzIGNhbGwgZnJvbSBOb2FoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXJ0b3N6IHJlY2VpdmVzIGNhbGwgZnJvbSBOb2FoIG9uIHRoZSBwaG9uZSB0aGF0IGhlIGZvdW5kIGluIEVyaWtgcyBzdGFzaC4gQmFydG9zeiB0ZWxsIEpvbmFzIHRoYXQgaGVzIG1lZXRpbmcgRXJpa2BzIGRlYWxlciBhbmQgd2FudHMgaGltIHRvIGFjY29tcGFueS4gSm9uYXMgYWdyZWVzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhbm5haCB2aXNpdHMgTmllbHNlbnMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIFVscmljaCBkb2VzbnQgcmV0dXJuIEhhbm5haGBzIGNhbGxzLCBTaGUgdmlzaXRzLiBIYW5uYWggYnJpbmdzIGZvb2QgdG8gdGhlIE5pZWxzZW4gaG91c2UuIFVscmljaCBkcm9wcyBIYW5uYWggYXQgaGVyIGhvdXNlLiBVbHJpY2ggYnJlYWtzIHVwIEhhbm5haGBzIGFmZmFpci4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyBsZWF2ZXMgV2luZGVuIGhvdGVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBsZWF2ZXMgV2luZGVuIGhvdGVsLiBLZWVwcyB0aGUgcm9vbS4gQXNrcyBSZWdpbmEgdG8gZG8gYSBsb2NhbCBkZWxpdmVyeS4gVGhlbiBoZSBnb2VzIGFuZCBtZWV0cyBKb25hcy4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhbm5haCBtZWV0cyBNaWtrZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hhbm5haCBtZWV0cyBNaWtrZWwgb3V0c2lkZSBzY2hvb2wuIEhhbm5haCBmaW5kcyBVbHJpY2ggYW5kIEthdGFyaW5hIGhhdmluZyBzZXguIEhhbm5haCB0ZWxscyBoZXIgZmF0aGVyIGFuZCBFZ29uIHRoYXQgVWxyaWNoIHJhcGVkIEthdGFyaW5hLiBFZ29uIGFycmVzdHMgVWxyaWNoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMTk4NiAxNTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCYXJ0b3N6IG1lZXRzIE5vYWggYWxvbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdhdGNoZXMgTWFydGhhYHMgcGVyZm9ybWFuY2UuIEJhcnRvc3ogbWVldHMgTm9haCBhbG9uZSBhcyBKb25hcyBkaWRudCByZXNwb25kLiBTdHJhbmdlciBKb25hcyB0YWtlcyBUYW5uaGF1cyB0aW1lIG1hY2hpbmUgYW5kIGdvZXMgaW5zaWRlIGNhdmUuICcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTUxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgcmVjZWl2ZXMgcGFja2FnZSBmcm9tIFN0cmFuZ2VyIEpvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyByZWNlaXZlcyB0aGUgcGFja2FnZSBzZW50IGJ5IFN0cmFuZ2VyIEpvbmFzLiBBIHRvcmNoIGxpZ2h0LiBBIEdlaWdlciBjb3VudGVyIHRvIGRldGVjdCByYWRpYXRpb24uIFRoZSBMZXR0ZXIgdGhhdCBNaWNoYWVsIGxlZnQuIExldHRlciB0aGF0IHNheXMgTWlra2VsIGlzIE1pY2hhZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIG1lZXRzIEguRy5UYW5uaGF1cycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyYW5nZXIgSm9uYXMgbWVldHMgSC5HLlRhbm5oYXVzIGFuZCBzYXlzIHRoYXQgaGUgd2FudHMgdG8gdGFsayBhYm91dCB0aW1lLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTUxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlNiBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWFkcyBnb2VzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01hZHMgZ29lcyBtaXNzaW5nJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5tYWRzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTAvMDkvMTk4NiAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJbnZlc3RpZ2F0aW9uIGNvbnRpbnVlcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVWxyaWNoIGhlYXJzIGV2aWRlbmNlcyBmcm9tIE1hZHMgY2FzZS4gTm90aWNlcyBoaXMgbW9tIGhhcyBsaWVkLiBDb25mcm9udHMgaGlzIGRhZCB3aGVyZSBoZSB3YXMgdGhhdCBuaWdodC4gSmFuYSByZXZlYWxzIGFib3V0IGFmZmFpciBiZXR3ZWVuIFRyb250ZSBhbmQgQ2xhdWRpYS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmphbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDgvMjAxOSAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZWdpbmEgbGVhcm5zIHNoZSBoYXMgY2FuY2VyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSZWdpbmEgbGVhcm5zIHNoZSBoYXMgY2FuY2VyLiBIaWRlcyBpdCBmcm9tIEFsZWtzYW5kZXIuIEFsZWtzYW5kZXIgY2FsbCB0aGUgY2VudGVyIGFuZCBnZXRzIHRoZSBpbmZvLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDgvMjAxOSAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYWdudXMgZmluZHMgYSBwZW5kYW50JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYWdudXMgZmluZHMgYSBwZW5kYW50IG5lYXIgdGhlIHBsYWNlIHdoZXJlIEZyYW56aXNrYSBrZWVwcyBoZXIgbW9uZXkuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5tYWdudXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGdvZXMgdG8gdGhlIGNhdmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHRha2VzIHRoZSB0b29scyB0aGF0IFN0cmFuZ2VyIEpvbmFzIHNlbnQgYW5kIGdvZXMgdG8gdGhlIGNhdmUuIEZpbmRzIGEgcmVkIHJvcGUgYW5kIGZvbGxvd3MgaXQgaW5zaWRlIHRoZSBjYXZlLiBUaGVuIGhlIGZvbGxvd3MgdGhlIFJhZGlhdGlvbiBzaWduYWwuIEZpbmRzIHRoZSBjYXZlIHRpbWUgbWFjaGluZSBhbmQgdXNlcyBpdC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxNjEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDgvMjAxOSAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdLYXRhcmluYSBsZWFybnMgb2YgVWxyaWNoYHMgYWZmYWlyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdLYXRhcmluYSBhbmFseXNlcyBwaG9uZSByZWNvcmRzIGFuZCBsZWFybnMgb2YgaGVyIGh1c2JhbmRzIGFmZmFpci4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBxdWVzdGlvbnMgUmVnaW5hIGFib3V0IE1hZHMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIEphbmEgaW5mb3JtZWQgdGhhdCBSZWdpbmEgd2FzIHRoZSBsYXN0IHBlcnNvbiB0byBtZWV0IE1hZHMsIFVscmljaCBxdWVzdGlvbnMgUmVnaW5hIGFib3V0IE1hZHMuIFVscmljaCBsZWFybnMgdGhhdCBSZWdpbmEgZGlkIG5vdCBmcmFtZSBoaW0gb2YgcmFwZSBhbmQgaXQgd2FzIEhhbm5haC4gVWxyaWNoIGNvbmZyb250cyBIYW5uYWguJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Ryb250ZSBhbmQgUGV0ZXIgd2FpdCBmb3IgZXZlbnQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Ryb250ZSBhbmQgUGV0ZXIgd2FpdCBpbiB0aGUgYnVua2VyIGZvciBldmVudHMgdG8gaGFwcGVuLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDgvMjAxOSAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBmaXJzdCB0aW1lIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgdXNlcyBTdHJhbmdlciBKb25hcyB0b29scyB0byBkbyBoaXMgZmlyc3QgdGltZSB0cmF2ZWwgdG8gMTk4Ni4gSm9uYXMgbm90aWNlcyBwb3N0ZXJzIGZvciBtaXNzaW5nIE1hZHMuIEpvbmFzIG1lZXRzIHlvdW5nIEhhbm5haC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTYxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDgvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggaWRlbnRpZmllcyBNYWRzIGJvZHknLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VscmljaCBpZGVudGlmaWVzIHRoZSBmb3VuZCBkZWFkIGJvZHkgYXMgTWFkcyAtIEN1dCBvbiB0aGUgY2hpbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYWRzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDgvMjAxOSAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTcgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGluIDE5ODYnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdha2VzLCByb2FtcywgZ29lcyB0byBzY2hvb2wuIE1lZXRzIFJlZ2luYS4gTWVldHMgRWdvbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFZ29uIGludmVzdGlnYXRlcyBNYWRzIGNhc2UnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Vnb24gcXVlcmllcyBIZWxnZSBhYm91dCBoaXMgcm91dGUuIFdoeSBoZSB0b29rIHN0YXRlIHJvYWQgaW5zdGVhZCBvZiBmb3Jlc3Qgcm9hZC4gS2F0YXJpbmEgZ2V0cyBVbHJpY2ggb3V0IG9mIGphaWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA5LzE5ODYgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hhcm9sZXR0ZSBzZWFyY2hlcyBwb3dlciBwbGFudCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIGdldHMgc2VhcmNoIHdhcnJhbnQgYW5kIHNlYXJjaGVzIHBvd2VyIHBsYW50LiBVbHJpY2ggZmluZHMgRWdvbiBub3RlcyBvbiBIZWxnZSBmcm9tIDE5ODYuIENoYXJsb3R0ZSBmaW5kcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIGJhcnJlbHMgd2VyZSBrZXB0LiBVbHJpY2ggZ29lcyB0byBob3NwaXRhbCB0byBxdWVyeSBIZWxnZSBhbmQgZ2V0cyBzdXNwZW5kZWQgZm9yIHRoYXQuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA5LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgZmluZHMgTWlra2VsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB3YXRjaGVzIE1pa2tlbCBpbiB0aGUgY2FyZSBvZiBJbmVzLiBUaGVuIFN0cmFuZ2VyIEpvbmFzIGNvbWVzIHRoZXJlIGFuZCB0ZWxscyBub3QgdG8gbWVkZGxlIHdpdGggdGltZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMTk4NiAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdLYXRhcmluYSBjb25mcm9udHMgVWxyaWNoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdLYXRhcmluYSBjb25mcm9udHMgVWxyaWNoIGFib3V0IGhpcyBhZmZhaXIuIFVscmljaCBtZWV0cyBoaXMgbW9tLiBKYW5hIHRlbGxzIHRoYXQgYSBzaGUgc2F3IGEgcHJpZXN0KE5vYWgpIGFyZ3Vpbmcgd2l0aCBhIG1hbihIZWxnZSkgYmVmb3JlIE1hZHMgaW5jaWRlbnQgYW5kIHNhdyB0aGUgc2FtZSBtYW4gaW4gcHJlc2VudCB3aXRoIHNhbWUgYWdlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmphbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMjAxOSAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFybG90dGUgZ29lcyB0byBidW5rZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NoYXJsb3R0ZSBnZXRzIHN1c3BpY2lvbiBvbiBIZWxnZSBmcm9tIFVscmljaC4gUXVlc3Rpb25zIFBldGVyLiBWaXNpdHMgdGhlIGJ1bmtlci4gSm9uYXMgY29tZXMgYmFjayB0byBwcmVzZW50LiBKb25hcyBidXJucyB0aGUgbGV0dGVyLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTcxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMjAxOSAxNjowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyB0cmF2ZWxzIGJhY2sgdG8gcHJlc2VudCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgdHJhdmVscyBiYWNrIHRvIDIwMTkgJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTcxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA5LzE5ODYgMTY6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7IC8vVE9ET1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCB2aXNpdHMgSGVsZ2UgYWdhaW4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VscmljaCB2aXNpdHMgSGVsZ2UuIEZpbmRzIHRoZSB0aW1lIHRyYXZlbCBib29rIHdpdGggMTk4NiBjb2luLiBIZWxnZSBydW5zIGF3YXkuIFVscmljaCBmb2xsb3dzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA5LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKmV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSB3aXRoIGEgZGVhZCBib2R5JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBpcyB3aXRoIGEgZGVhZCBib2R5IG91dHNpZGUgdGhlIGJ1bmtlci4gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMTk1MyAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgICAgLy9Bc3N1bWVkIEV2ZW50c1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCdW5rZXIgVGltZU1hY2hpbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIHVzZXMgdGltZSBtYWNoaW5lIG9uIEVyaWsgT2JlbmRyb2ZmLiBFcmlrIE9iZW5kcm9mZiBkaWVzIGFuZCBnb2VzIHRvIDE5NTMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lcmlrT2JlbmRvcmYsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCdW5rZXIgVGltZU1hY2hpbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIHVzZXMgdGltZSBtYWNoaW5lIG9uIFlhc2luIEZyaWVzZS4gWWFzaW4gRnJpZXNlIGRpZXMgYW5kIGdvZXMgdG8gMTk1My4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnlhc2luRnJpZXNlLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOS8xOTg2IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA3LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnVua2VyIFRpbWVNYWNoaW5lJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSB1c2VzIHRpbWUgbWFjaGluZSBvbiBFcmlrIE9iZW5kcm9mZiBpbiAxOTg2LiBFcmlrIE9iZW5kcm9mZiBkaWVzIGFuZCByZWFjaGVzIDE5NTMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lcmlrT2JlbmRvcmYsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5NTMgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCdW5rZXIgVGltZU1hY2hpbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIHVzZXMgdGltZSBtYWNoaW5lIG9uIFlhc2luIEZyaWVzZSBpbiAxOTg2LiBZYXNpbiBGcmllc2UgZGllcyBhbmQgcmVhY2hlcyAxOTUzLiBOb2FoIGNsZWFucyB0aGUgcGxhY2UuIEFkZHMgdGV4dCB0byB0aGUgd2FsbCAtIE5vdiA5IDE5NTMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy55YXNpbkZyaWVzZSwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA5LzE5NTMgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVUaW1lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lcGlzb2RlVGltZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGU4IGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVGcmFtZSA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUd28gYm9kaWVzIGZvdW5kIGluIHNpdGUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvbGljZSBmaW5kcyB0d28gZGVhZCBib2RpZXMgaW4gcG93ZXIgcGxhbnQgY29uc3RydWN0aW9uIHNpdGUuIEVnb24gcmVhY2hlcyB0aGUgc3BvdC4gSGVsZ2UgZm9sbG93IGhpcyBjYXIgaW4gY3ljbGUuIEV5ZXMgYnVybmVkLiBFYXJzIGRlc3Ryb3llZC4gMTk4NiBjb2lucy4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lcmlrT2JlbmRvcmYsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy55YXNpbkZyaWVzZSwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMC8xOTUzIDA4OjAwOjAwXCIpLmdldFRpbWUoKSwgLy9UT0RPXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyB2aXNpdHMgSC5HLlRhbm5oYXVzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyB2aXNpdHMgSC5HLlRhbm5oYXVzIGFuZCB0YWxrIGFib3V0IHRpbWUuIEpvbmFzIGFza3MgaGltIHRvIGZpeCBoaXMgdGltZSBtYWNoaW5lLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS85LzE5ODYgMjI6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDgsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIGZpcnN0IHRpbWUgdHJhdmVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBnb2VzIHRvIHRoZSBjYXZlIHRyYXZlbHMgdG8gMTk4NiBhbmQgVWxyaWNoIGZvbGxvd3MgaGltIGJ1dCByZWFjaGVzIDE5NTMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDE4MSwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH0sXHJcbiAgICAgICAgICAgIHsgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxODIsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvOS8yMDE5IDIyOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA4LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBpbiAxOTUzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggY29tZXMgb3V0IG9mIHRoZSBjYXZlLiBUd28gYm95cyBidWxseSBoZWxnZS4gVXJsaWNoIGRpcmVjdHMgQWduZXMgYW5kIFRyb250ZS4gVWxyaWNoIGdvZXMgdG8gSC5HLlRhbm5oYXVzIHNob3AuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYWduZXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxODIsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMC8xOTUzIDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA4LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgdHV0b3JzIEhlbGdlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbGF1ZGlhIHR1dG9ycyBIZWxnZS4gQWduZXMgdmlzaXRzIFRpZWRlbWFubiBob3VzZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5kb3Jpc1RpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmFnbmVzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ncmV0Y2hlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTAvMTk1MyAwOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggaGl0cyBIZWxnZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVWxyaWNoIG1lZXRzIEphbmEgYW5kIEluZXMgaW4gSC5HLlRhbm5oYXVzIHNob3AuIExlYXJucyBhYm91dCBkZWFkIGJvZGllcy4gRm9yZ2V0cyBoaXMgcGhvbmUgYW5kIHJ1c2hlcyB0byBwb2xpY2Ugc3RhdGlvbiBhbmQgbGVhcm5zIGFib3V0IERvcHBsZXJzLiBDYXRjaGVzIEhlbGdlLCBoaXRzIGhpbSBpbiB0aGUgaGVhZCB3aXRoIGEgcm9jayBhbmQgbGVhdmVzIGhpbSBpbiB0aGUgYnVua2VyLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTAvMTk1MyAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHcmV0Y2hlbiB0aW1lIHRyYXZlbHMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NsYXVkaWEgdGFrZXMgVHJvbnRlIHRvIHNob3cgdGhlIGZvcmVzdC4gSGVsZ2UgYWNjb21wYW5pZXMuIFNlbmRzIEdyZXRjaGVuIGludG8gdGhlIGNhdmUuIE9sZCBDbGF1ZGlhIHRha2VzIEdyZXRjaGVuIHRvIDE5ODYuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmdyZXRjaGVuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMC8xOTUzIDEwOjAwOjAwXCIpLmdldFRpbWUoKSwgLy9UT0RPXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTkgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hlbGdlIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Jlcm5kIHJlcG9ydHMgbWlzc2luZyBIZWxnZSB0byBwb2xpY2UuIE5vYWggdmlzaXRzIERvcHBsZXJzLiBFZ29uIGFycmVzdHMgVWxyaWNoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYmVybmREb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzE5NTMgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIGlzIHJlbGVhc2VkJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCeSBLYXRhcmluYWBzIHN0YXRlbWVudHMsIFVscmljaCBpcyByZWxlYXNlZC4gSGFubmFoIGxpZXMgdG8gS2F0YXJpbmEgdGhhdCBpdCB3YXMgUmVnaW5hIHdobyBmcmFtZWQgVWxyaWNoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmphbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgZmluZHMgR3JldGNoZW4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NsYXVkaWEgZ29lcyB0byBiYXJyZWxzIHRvIHRha2UgYSBwaWN0dXJlLiBPbGQgQ2xhdWRpYSBsZWF2ZXMgR3JldGNoZW4gaGVyZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmdyZXRjaGVuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLCAvL1RPRE9cclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGVrc2FuZGVyIHByb3RlY3RzIFJlZ2luYScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnS2F0YXJpbmEgZmlnaHRzIFJlZ2luYS4gQWxla3NhbmRlciBjb21lcyBmb3IgcHJvdGVjdGlvbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgdGFsa3MgdG8gQmVybmQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJlcm5kRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzE5ODYgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsZ2UgZG9lc250IHJlcG9ydCB0byBFZ29uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBoaWRlcyBmcm9tIEVnb24uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzE5ODYgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTm9haCBhbmQgSGVsZ2Ugd29yaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTm9haCBhbmQgSGVsZ2Ugd29yayBvbiB0aGUgYnVua2VyIHRpbWUgbWFjaGluZS4gSXQgZmFpbGVkIG9uIHRoZSBwcmV2aW91cyB0cnkuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8xOTg2IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hZ251cyBnaXZlcyB0aGUgcGVuZGFudCB0byBGcmFuemlza2EnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01hZ251cyBnaXZlcyB0aGUgcGVuZGFudCB0byBGcmFuemlza2EnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5mcmFuemlza2FEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBpcyBtaXNzaW5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdLYXRhcmluYSBub3RpY2VzIFVscmljaCBpcyBtaXNzaW5nLiBBc2tzIENoYXJsb3R0ZS4gRmlnaHRzIHdpdGggSGFubmFoLiBIYW5uYWggc2hvd3MgQWxla3NhbmRlciB0aGF0IHNoZSBoYXMgcHJvb2Ygb2YgaGlzIHBhc3QuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgbWVldHMgQmFydG9zeicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhdWRpYSBnaXZlcyBhIGxldHRlciB0byBCYXJ0b3N6IHRvIGdpdmUgdG8gaGlzIG1vbS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMjAxOSAxNTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYXJ0aGEga2lzc2VzIEpvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBhdm9pZHMgTWFydGhhLiBNYXJ0aGEgY29uZnJvbnRzIEpvbmFzLiBIZSB3YWxrcyBhd2F5LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMTc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmFydG9zeiBtZWV0cyBOb2FoIGFnYWluJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmJhcnRvc3pUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDE5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlZ2luYSBmaW5kcyBTdHJhbmdlciBKb25hcyB0aGluZ3MnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LF0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMjAxOSAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDbGF1ZGlhIGdpdmVzIGpvYiBmb3IgQWxla3NhbmRlcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMTk4NiAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyByZWZpbGxzIENhZXNpdW0tMTM3JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDE5OjAwOjAwXCIpLmdldFRpbWUoKSwgLy9UT0RPIGhlIGNhbWUgdG8gMjAxOSB0YWtlcyBDZXNpdW0gYW5kIGxlYXZlcyB0byAxOTgzXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDbGF1ZGlhIG1lZXRzIFRhbm5oYXVzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbGF1ZGlhIGdpdmUgYmx1ZXByaW50IG9mIFRhbm5oYXVzIG1hY2hpbmUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzE5NTMgMTk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUzAyMDEgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ05vYWggaXMgYnVpbGRpbmcgdGhlIGNhdmUgcGFzc2FnZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWRhbSBjb21tYW5kcyBOb2FoLiBOb2FoIGtpbGxzIGhpcyBjb3dvcmtlci4gTm9haCBhZHZpY2VzIHlvdW5nZXIgTm9haCB0byBmb2xsb3cgQWRhbS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjA2LzIxLzE5MjEgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDIsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgaXMgaW4gdGhlIGZ1dHVyZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgd2FrZXMgdXAuIEdvZXMgdG8gdGhlIGJ1bmtlci4gSGVhcnMgQ2xhdWRpYWBzIHRhcGVzLiBBcG9jYWx5cHNlIGhhcHBlbmVkIG9uIEp1bmUgMjcsMjAyMC4gQ2xhdWRpYSBpcyBvbmUgb2YgdGhlIHN1cnZpdm9ycy4gSWYgdGhlIEdvZCBwYXJ0aWNsZSBpcyBzdGFiaWxpemVkLCBtYXliZSB0aGluZ3MgY2FuIGJlIGZpeGVkLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjA1MyAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMiwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFbGlzYWJldGggbGVhZGVyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFbGlzYWJldGggaXMgdGhlIGxlYWRlciBvZiB0aGUgdHJpYmUgaW4gdGhlIGZ1dHVyZS4gU2hlIHRhbGtzIGFib3V0IHRoZSBwcm9waGVjeS4gUGFzc2FnZSB0byBvcGVuIHRvIHBhcmFkaXNlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuZWxpc2FiZXRoRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnNpbGphLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjA1MyAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMiwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICc2IGRheXMgdW50aWwgYXBvY2FseXBzZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2l4IG1vbnRocyBhZnRlciBteXN0ZXJpb3VzIGRpc2FwcGVyYW5jZSBvZiBFcmlrLCBNaWtrZWwsIFlhc2luLCBKb25hcywgSGVsZ2UsIFVscmljaC4gUmVnaW5hIGNhbmNlciB3b3JzZW5zLiBDbGF1c2VuIC0gaGVhZCBvZiBXaW5kZW4gdGFzayBmb3JjZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdXNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qdXJnZW5PYmVuZG9yZiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjAyMCAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMiwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3dlciBwbGFudCB0byBiZSBjbG9zZWQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FsZWtzYW5kZXIgYW5ub3VuY2VzIG51Y2xlYXIgcG93ZXIgcGxhbnQgdG8gYmUgY2xvc2VkIGluIDYgZGF5cy4gUHV0cyB0aGUgYmFycmVscyBpbnNpZGUgY29uY3JldGUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudG9yYmVuV29sbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmVybmFkZXR0ZSwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjAyMCAxMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMiwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyB2aXNpdHMgSGFubmFoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyB2aXNpdHMgSGFubmFoIGFuZCBleHBsYWlucyB0aGF0IGhlIGlzIEpvbmFzIGZyb20gZnV0dXJlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIwNi8yMS8yMDIwIDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgyLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VsaXNhYmV0aCBpZGVudGlmaWVzIE5vYWgnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VsaXNhYmV0aCBpZGVudGlmaWVzIE5vYWggaW4gdGhlIFNpYyBNdW5kdXMgZ3JvdXAgcGljdHVyZS4gUGV0ZXIgaW5mb3JtcyBpdCB0byBDaGFybG90dGUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5lbGlzYWJldGhEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjAyMCAxODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMiwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBmaW5kcyB0aW1lIHBvcnRhbCBpbnNpZGUgcG93ZXIgcGxhbnQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHNlY3JldGx5IGVudGVycyB0aGUgcG93ZXIgcGxhbnQgYW5kIHVzaW5nIHRoZSBnZWlnZXIgY291bnRlciBmaW5kcyB0aGUgdGltZSBwb3J0YWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIwNi8yMS8yMDUzIDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgyLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbWVUcmF2ZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbFwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmVcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbERldmljZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbERldmljZVwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVUcmF2ZWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxMTE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5idW5rZXJEZXZpY2UsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWFkc05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0dDExMjogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICB0bzogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmNhdmUsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MTUxOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxNjE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0dDE3MTogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICB0bzogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmNhdmUsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MTgxOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxODI6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTUzLFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0dDFhMTogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICB0bzogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmNhdmUsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MWEyOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQxOTUzLFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UudGFubmhhdXNEZXZpY2UsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxYTM6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQyMDUyLFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS50YW5uaGF1c0RldmljZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L0pRdWVyeS5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSAnLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zJztcclxuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi90aW1lbGluZS9ldmVudHMnO1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vdGltZWxpbmUvcG9wdXAnO1xyXG5pbXBvcnQgeyBFdmVudFJlbmRlcmVyIH0gZnJvbSAnLi90aW1lbGluZS9ldmVudFJlbmRlcmVyJztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIHNob3dFdmVudERldGFpbHM6IGFueTtcclxuICAgIHNob3dQZXJzb25EZXRhaWxzOiBhbnk7XHJcbiAgICBjaGFuZ2VUaW1lOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5FdmVudHMuaW5pdGlhbGl6ZSgpO1xyXG5Qb3B1cC5kZWZpbmVQb3B1cEZ1bmN0aW9ucygpO1xyXG5cclxud2luZG93LmNoYW5nZVRpbWUgPSBmdW5jdGlvbiAob3JkZXI6IHN0cmluZykge1xyXG4gIGlmIChvcmRlciA9PT0gJ3dvcmxkJykge1xyXG4gICAgRXZlbnRSZW5kZXJlci53b3JsZFRpbWVsaW5lKCk7XHJcbiAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ21pa2tlbCcpIHtcclxuICAgIEV2ZW50UmVuZGVyZXIucGVyc29uVGltZWxpbmUoRGFya1BlcnNvbnMubWlra2VsTmllbHNlbik7XHJcbiAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2pvbmFzJykge1xyXG4gICAgRXZlbnRSZW5kZXJlci5wZXJzb25UaW1lbGluZShEYXJrUGVyc29ucy5qb25hc0thaG53YWxkKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jaGFuZ2VUaW1lKCd3b3JsZCcpOyIsImltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IERhcmtGYW1pbHkgfSBmcm9tIFwiLi9lbnVtL2RhcmtGYW1pbHlcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvblBob3RvIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZGFya1BlcnNvblBob3RvXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4vZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25zIHtcclxuXHJcbiAgICBzdGF0aWMgdW5rbm93blBlcnNvbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVua25vd25cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ1bmtub3ducGVyc29uXCIsIFtBZ2VHcm91cC55b3VuZ10pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gVW5rbm93biBmYW1pbGllcyBcclxuXHJcbiAgICBzdGF0aWMgZ3JldGNoZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJHcmV0Y2hlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImdyZXRjaGVuXCIsIFtBZ2VHcm91cC55b3VuZ10pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJlcm5hZGV0dGU6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuYWRldHRlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmFkZXR0ZVwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3JiZW5Xb2xsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJUb3JiZW4gV29sbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LldvbGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ0b3JiZW53b2xsZXJcIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuYWRldHRlLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNpbGphOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2lsamFcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJzaWxqYVwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1c2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdXNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVzZW5cIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2ViYXN0aWFuS3J1Z2VyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2ViYXN0aWFuIEtydWdlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LcnVnZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwic2ViYXN0aWFua3J1Z2VyXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhnVGFubmhhdXM6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJILkcuIFRhbm5oYXVzXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGd0YW5uaGF1c1wiLCBbQWdlR3JvdXAuYWR1bHQsIEFnZUdyb3VwLm9sZF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp1cmdlbk9iZW5kb3JmOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSsO8cmdlbiBPYmVuZG9yZlwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5PYmVuZG9yZixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqdXJnZW5vYmVuZG9yZlwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcmlrT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFcmlrIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk9iZW5kb3JmLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImVyaWtvYmVuZG9yZlwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHlhc2luRnJpZXNlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiWWFzaW4gRnJpZXNlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkZyaWVzZSxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ5YXNpbmZyaWVzZVwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIE5pZWxzZW4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGFnbmVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFnbmVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJhZ25lc25pZWxzZW5cIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9haDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk5vYWhcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJub2FoXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYWx0TmFtZTogW1wiSGFubm8gTm9haCBUYXViZXJcIl1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJvbnRlTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlRyb250ZSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidHJvbnRlbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuYWduZXNOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGphbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSmFuYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiamFuYW5pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bHJpY2hOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVWxyaWNoIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ1bHJpY2huaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFkc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYWRzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtYWRzbmllbHNlblwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBrYXRhcmluYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJLYXRhcmluYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwia2F0YXJpbmFuaWVsc2VuXCIsIFtBZ2VHcm91cC55b3VuZywgQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWdudXNOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWFnbnVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtYWdudXNuaWVsc2VuXCIsIFtBZ2VHcm91cC55b3VuZywgQWdlR3JvdXAub2xkXSksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hcnRoYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYXJ0aGEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hcnRoYW5pZWxzZW5cIiwgW0FnZUdyb3VwLnlvdW5nXSksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pa2tlbE5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNaWtrZWwgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1pa2tlbG5pZWxzZW5cIiwgW0FnZUdyb3VwLnlvdW5nLCBBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbixcclxuICAgICAgICBhbHROYW1lOiBbXCJNaWNoYWVsIEtoYW53YWxkXCJdXHJcbiAgICB9XHJcblxyXG4gICAgLy9QZXJzb25zIGZyb20gS2FobndhbGQgRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGRhbmllbEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRGFuaWVsIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImRhbmllbGthaG53YWxkXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluZXNLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkluZXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaW5lc2thaG53YWxkXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5kYW5pZWxLYWhud2FsZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtaWNoYWVsS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNaWNoYWVsIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1pY2hhZWxrYWhud2FsZFwiLCBbQWdlR3JvdXAueW91bmcsIEFnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFubmFoS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIYW5uYWggS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGFubmFoa2FobndhbGRcIiwgW0FnZUdyb3VwLnlvdW5nLCBBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuc2ViYXN0aWFuS3J1Z2VyLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGpvbmFzS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKb25hcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqb25hc2thaG53YWxkXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5taWNoYWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIERvcHBsZXIgRmFtaWx5ICAgIFxyXG5cclxuICAgIHN0YXRpYyBiZXJuZERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuZCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmRkb3BwbGVyXCIsIFtBZ2VHcm91cC5hZHVsdCwgQWdlR3JvdXAub2xkXSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ3JldGFEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiR3JldGEgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImdyZXRhZG9wcGxlclwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxnZURvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIZWxnZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGVsZ2Vkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5ncmV0YURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGV0ZXJEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUGV0ZXIgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInBldGVyZG9wcGxlclwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFybG90dGVEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2hhcmxvdHRlIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJjaGFybG90dGVkb3BwbGVyXCIsIFtBZ2VHcm91cC55b3VuZywgQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm5vYWgsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJhbnppc2thRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW56aXNrYSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZnJhbnppc2thZG9wcGxlclwiLCBbQWdlR3JvdXAueW91bmcsIEFnZUdyb3VwLm9sZF0pLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbGlzYWJldGhEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRWxpc2FiZXRoIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJlbGlzYWJldGhkb3BwbGVyXCIsIFtBZ2VHcm91cC55b3VuZywgQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBUaWVkZW1hbm4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGVnb25UaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFZ29uIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZWdvbnRpZWRlbWFublwiLCBbQWdlR3JvdXAuYWR1bHQsIEFnZUdyb3VwLm9sZF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvcmlzVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRG9yaXMgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJkb3Jpc3RpZWRlbWFublwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1ZGlhVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdWRpYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVkaWF0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5kb3Jpc1RpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpbmFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJSZWdpbmEgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJyZWdpbmF0aWVkZW1hbm5cIiwgW0FnZUdyb3VwLnlvdW5nLCBBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbGVrc2FuZGVyVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQWxla3NhbmRlciBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImFsZWtzYW5kZXJ0aWVkZW1hbm5cIiwgW0FnZUdyb3VwLnlvdW5nLCBBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJhcnRvc3pUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCYXJ0b3N6IFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmFydG9zenRpZWRlbWFublwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGVudW0gQWdlR3JvdXAge1xyXG4gICAgeW91bmcgPSBcIllvdW5nXCIsXHJcbiAgICBhZHVsdCA9IFwiQWR1bHRcIixcclxuICAgIG9sZCA9IFwiT2xkXCJcclxufSIsImV4cG9ydCBlbnVtIERhcmtGYW1pbHkge1xyXG4gICAgTmllbHNlbiA9IFwiTmllbHNlblwiLFxyXG4gICAgS2FobndhbGQgPSBcIkthaG53YWxkXCIsXHJcbiAgICBUaWVkZW1hbm4gPSBcIlRpZWRlbWFublwiLFxyXG4gICAgRG9wcGxlciA9IFwiRG9wcGxlclwiLFxyXG4gICAgVW5rbm93biA9IFwiVW5rbm93blwiLFxyXG4gICAgT2JlbmRvcmYgPSBcIk9iZW5kb3JmXCIsXHJcbiAgICBGcmllc2UgPSBcIkZyaWVzZVwiLFxyXG4gICAgS3J1Z2VyID0gXCJLcnVnZXJcIixcclxuICAgIFdvbGxlciA9IFwiV29sbGVyXCJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVMaW5lIHtcclxuICAgIHQxOTIwLFxyXG4gICAgdDE5NTMsXHJcbiAgICB0MTk4NixcclxuICAgIHQyMDE5LFxyXG4gICAgdDIwNTJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVUcmF2ZWxEZXZpY2Uge1xyXG4gICAgdDE5MjBEZXZpY2UsXHJcbiAgICBjYXZlLFxyXG4gICAgdGFubmhhdXNEZXZpY2UsXHJcbiAgICBhbHRNYXJ0aGFEZXZpY2UsXHJcbiAgICBwb3dlclBsYW50LFxyXG4gICAgYnVua2VyRGV2aWNlXHJcbn0iLCJleHBvcnQgZW51bSBUaW1lVHJhdmVsVHlwZSB7XHJcbiAgICBpbixcclxuICAgIG91dFxyXG59IiwiZXhwb3J0IGNsYXNzIEVwaXNvZGVUaW1lIHtcclxuICAgIHNlYXNvbjogbnVtYmVyID0gMDtcclxuICAgIGVwaXNvZGU6IG51bWJlciA9IDA7XHJcbiAgICBmcmFtZTogbnVtYmVyID0gMDtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKHNlYXNvbjogbnVtYmVyLCBlcGlzb2RlOiBudW1iZXIsIGZyYW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlYXNvbiA9IHNlYXNvbjtcclxuICAgICAgICB0aGlzLmVwaXNvZGUgPSBlcGlzb2RlO1xyXG4gICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcclxuICAgICAgICB0aGlzLm51bWJlciA9IHNlYXNvbiAqIDEwMDAwMDAgKyBlcGlzb2RlICogMTAwMCArIGZyYW1lO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXJrUGVyc29uUGhvdG8ge1xyXG4gICAgeW91bmc6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBhZHVsdDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIG9sZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwZXJzb24gOiBzdHJpbmcsIGFnZUdyb3VwczogQWdlR3JvdXBbXXx1bmRlZmluZWQpe1xyXG4gICAgICAgIGlmKGFnZUdyb3VwcyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnlvdW5nID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycwLmpwZyc7XHJcbiAgICAgICAgICAgIHRoaXMuYWR1bHQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzEuanBnJztcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzIuanBnJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy55b3VuZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5hZHVsdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmKGFnZUdyb3Vwcy5pbmNsdWRlcyhBZ2VHcm91cC55b3VuZykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy55b3VuZyA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMC5qcGcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGFnZUdyb3Vwcy5pbmNsdWRlcyhBZ2VHcm91cC5hZHVsdCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHVsdCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMS5qcGcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGFnZUdyb3Vwcy5pbmNsdWRlcyhBZ2VHcm91cC5vbGQpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycyLmpwZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvblwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRSZW5kZXJlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3b3JsZFRpbWVsaW5lKCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZEV2ZW50cyA9IEV2ZW50cy5nZXRFdmVudHMoKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYS53b3JsZFRpbWVJbk1pbGxpcyA+PSBiLndvcmxkVGltZUluTWlsbGlzKSA/IDEgOiAtMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgZmlsdGVyZWRFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgICAgIGxldCBtb250aEFuZFllYXIgPSBcIm15X1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKSArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQoXCIjXCIgKyBtb250aEFuZFllYXIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmFwcGVuZChQYXJzZXIuZ2V0TW9udGhBbmRZZWFySHRtbChldmVudCkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQoXCIjXCIgKyBkYXRlKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldERhdGVIdG1sKGV2ZW50KSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGRhdGUpLmFwcGVuZChQYXJzZXIuZ2V0RXZlbnRIdG1sKGV2ZW50KSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwZXJzb25UaW1lbGluZShkYXJrUGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkRXZlbnRzID0gRXZlbnRzLmdldEV2ZW50cygpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChhLndvcmxkVGltZUluTWlsbGlzID49IGIud29ybGRUaW1lSW5NaWxsaXMpID8gMSA6IC0xXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJlZEV2ZW50czE6IERhcmtFdmVudFtdID0gZmlsdGVyZWRFdmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaEl0ZW0gPSB7IHBlcnNvbjogZGFya1BlcnNvbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfTtcclxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzU2FtZVBlcnNvbihldmVudC5wZXJzb25zLCBzZWFyY2hJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZEV2ZW50czI6IERhcmtFdmVudFtdID0gRXZlbnRzLmdldEV2ZW50cygpLmZpbHRlcihldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hJdGVtID0geyBwZXJzb246IGRhcmtQZXJzb24sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH07XHJcbiAgICAgICAgICAgIGlmIChVdGlscy5pc1NhbWVQZXJzb24oZXZlbnQucGVyc29ucywgc2VhcmNoSXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmlsdGVyZWRFdmVudHMzOiBEYXJrRXZlbnRbXSA9IEV2ZW50cy5nZXRFdmVudHMoKS5maWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VhcmNoSXRlbSA9IHsgcGVyc29uOiBkYXJrUGVyc29uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfTtcclxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzU2FtZVBlcnNvbihldmVudC5wZXJzb25zLCBzZWFyY2hJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3NvcnQgZWFjaFxyXG4gICAgICAgIC8vVE9ET1xyXG5cclxuICAgICAgICBmaWx0ZXJlZEV2ZW50cyA9IFtdO1xyXG4gICAgICAgIGZpbHRlcmVkRXZlbnRzID0gZmlsdGVyZWRFdmVudHMuY29uY2F0KGZpbHRlcmVkRXZlbnRzMSk7XHJcbiAgICAgICAgZmlsdGVyZWRFdmVudHMgPSBmaWx0ZXJlZEV2ZW50cy5jb25jYXQoZmlsdGVyZWRFdmVudHMyKTtcclxuICAgICAgICBmaWx0ZXJlZEV2ZW50cyA9IGZpbHRlcmVkRXZlbnRzLmNvbmNhdChmaWx0ZXJlZEV2ZW50czMpO1xyXG5cclxuXHJcbiAgICAgICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGxldCBwcmV2RGF0ZSA9ICcnO1xyXG4gICAgICAgIGxldCBwcmV2SSA9IDA7XHJcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcclxuICAgICAgICBmaWx0ZXJlZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaXRlcmF0b3IgPSBpdGVyYXRvciArIDE7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcbiAgICAgICAgICAgIGxldCBzdWZmaXggPSBpdGVyYXRvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2RGF0ZSA9PSBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBwcmV2STtcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBkYXRlICsgJycgKyBzdWZmaXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2RGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgICBwcmV2SSA9IGl0ZXJhdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IGl0ZXJhdG9yO1xyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUgKyAnJyArIHN1ZmZpeDtcclxuICAgICAgICAgICAgICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldERhdGVIdG1sMihldmVudCwgZGF0ZSkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBkYXRlKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50SHRtbChldmVudCkpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRXBpc29kZTEgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTFcIjtcclxuaW1wb3J0IHsgRXBpc29kZTIgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTJcIjtcclxuaW1wb3J0IHsgRXBpc29kZTMgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTNcIjtcclxuaW1wb3J0IHsgRXBpc29kZTQgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTRcIjtcclxuaW1wb3J0IHsgRXBpc29kZTUgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTVcIjtcclxuaW1wb3J0IHsgRXBpc29kZTYgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTZcIjtcclxuaW1wb3J0IHsgRXBpc29kZTcgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTdcIjtcclxuaW1wb3J0IHsgRXBpc29kZTggfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZThcIjtcclxuaW1wb3J0IHsgRXBpc29kZTkgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTlcIjtcclxuaW1wb3J0IHsgRXBpc29kZTEwIH0gZnJvbSBcIi4uL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxMFwiO1xyXG5pbXBvcnQgeyBTMDIwMSB9IGZyb20gXCIuLi9ldmVudHMvc2Vhc29uMi9zMDIwMVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBzdGF0aWMgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlMSkuZ2V0RXZlbnRzKCkpO1xyXG4gICAgICAgIEV2ZW50cy5ldmVudHMgPSBFdmVudHMuZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGUyKS5nZXRFdmVudHMoKSk7XHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTMpLmdldEV2ZW50cygpKTtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlNCkuZ2V0RXZlbnRzKCkpO1xyXG4gICAgICAgIEV2ZW50cy5ldmVudHMgPSBFdmVudHMuZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGU1KS5nZXRFdmVudHMoKSk7XHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTYpLmdldEV2ZW50cygpKTtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlNykuZ2V0RXZlbnRzKCkpO1xyXG4gICAgICAgIEV2ZW50cy5ldmVudHMgPSBFdmVudHMuZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGU4KS5nZXRFdmVudHMoKSk7XHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTkpLmdldEV2ZW50cygpKTtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlMTApLmdldEV2ZW50cygpKTtcclxuXHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgUzAyMDEpLmdldEV2ZW50cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gRXZlbnRzLmV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbkluRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25JbmRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsIH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbEluRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxJbkRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcblxyXG4gICAgc3RhdGljIG1vbnRoTmFtZXMgPSBbXHJcbiAgICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICAgIFwiTWFyY2hcIixcclxuICAgICAgICBcIkFwcmlsXCIsXHJcbiAgICAgICAgXCJNYXlcIixcclxuICAgICAgICBcIkp1bmVcIixcclxuICAgICAgICBcIkp1bHlcIixcclxuICAgICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICAgIFwiRGVjZW1iZXJcIlxyXG4gICAgXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0RGF0ZUh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB8IEVsZW1lbnQgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+IHwgRG9jdW1lbnRGcmFnbWVudCB8IChFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudClbXSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3RpbWVsaW5lLXNlY3Rpb24nPlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGNsYXNzPSd0aW1lbGluZS1kYXRlJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgJSVEQVRFU1RSJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgaWQ9JyUlREFURSUlJyBjbGFzcz0ncm93Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcbiAgICAgICAgbGV0IGRhdGVTdHIgPSBQYXJzZXIubW9udGhOYW1lc1t3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpXSArIFwiIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyBcIiwgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVEQVRFU1RSJSVcIiwgZGF0ZVN0cik7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURBVEUlJVwiLCBkYXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgaHRtbCBcIiArIHJldHVyblN0cik7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXREYXRlSHRtbDIoZXZlbnQ6IERhcmtFdmVudCwgZGF0ZXZhcjogc3RyaW5nKTogc3RyaW5nIHwgRWxlbWVudCB8IEpRdWVyeTxIVE1MRWxlbWVudD4gfCBEb2N1bWVudEZyYWdtZW50IHwgKEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50KVtdIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ndGltZWxpbmUtc2VjdGlvbic+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgY2xhc3M9J3RpbWVsaW5lLWRhdGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAlJURBVEVTVFIlJVwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBpZD0nJSVEQVRFJSUnIGNsYXNzPSdyb3cnPlwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgbGV0IHdvcmxkVGltZUluTWlsbGlzOiBEYXRlID0gbmV3IERhdGUoZXZlbnQud29ybGRUaW1lSW5NaWxsaXMpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXIgPSBcIm15X1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKSArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBcImRhdGVfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkgKyBcIl9cIiArIG1vbnRoQW5kWWVhcjtcclxuICAgICAgICBsZXQgZGF0ZVN0ciA9IFBhcnNlci5tb250aE5hbWVzW3dvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCldICsgXCIgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkudG9TdHJpbmcoKSArIFwiLCBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURBVEVTVFIlJVwiLCBkYXRlU3RyKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREFURSUlXCIsIGRhdGV2YXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldE1vbnRoQW5kWWVhckh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgaWQ9JyUlSUQlJScgY2xhc3M9J3RpbWVsaW5lLW1vbnRoJz5cIiArXHJcbiAgICAgICAgICAgIFwiJSVNT05USEFORFlFQVIlJVwiICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyU3RyID0gUGFyc2VyLm1vbnRoTmFtZXNbd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKV0gKyBcIiwgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVNT05USEFORFlFQVIlJVwiLCBtb250aEFuZFllYXJTdHIpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJRCUlXCIsIG1vbnRoQW5kWWVhcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50SHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nY29sLXNtLTQnPlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGNsYXNzPSd0aW1lbGluZS1ib3gnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LXRpdGxlJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICA8ZGl2IGNsYXNzPSdkaXYtZWxsaXBzaXMnPiAlJVRJVExFJSUgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgPGRpdj4gPGEgY2xhc3M9J2J0biBidG4teHMgYnRuLWRlZmF1bHQgcHVsbC1yaWdodCcgb25jbGljaz0nc2hvd0V2ZW50RGV0YWlscyhcIiArIGV2ZW50LmVwaXNvZGVUaW1lLm51bWJlciArIFwiKSc+IERldGFpbHMgPC9hPiA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LWNvbnRlbnQnIHN0eWxlPSdoZWlnaHQ6MTAwcHgnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxkaXYgY2xhc3M9J2JveC1pdGVtJz4gJSVERVNDUklQVElPTiUlIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAlJVRJTUVUUkFWRUxTJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDxkaXYgY2xhc3M9J2JveC1mb290ZXInPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVUSVRMRSUlXCIsIGV2ZW50LnRpdGxlKTtcclxuICAgICAgICBsZXQgZGVzID0gZXZlbnQuZGVzY3JpcHRpb247XHJcbiAgICAgICAgaWYgKGRlcy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgZGVzID0gZGVzLnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURFU0NSSVBUSU9OJSVcIiwgZGVzKTtcclxuICAgICAgICBsZXQgdGltZVRyYXZlbHMgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGltZVRyYXZlbHMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGltZVRyYXZlbHMuZm9yRWFjaCh0aW1lVHJhdmVsID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWVUcmF2ZWxzID0gdGltZVRyYXZlbHMgKyBQYXJzZXIuZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElNRVRSQVZFTFMlJVwiLCB0aW1lVHJhdmVscyk7XHJcbiAgICAgICAgbGV0IHBlcnNvbnMgPSAnJztcclxuICAgICAgICBldmVudC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbDogVGltZVRyYXZlbEluRGFya0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9JyUlQ0xBU1MlJScgPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIHRpbWVUcmF2ZWwudGltZVRyYXZlbC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgaWYgKHRpbWVUcmF2ZWwudHlwZSA9PSBUaW1lVHJhdmVsVHlwZS5pbikge1xyXG4gICAgICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlQ0xBU1MlJVwiLCAnYm94LWZvb3Rlci10aW1lLWluJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUNMQVNTJSVcIiwgJ2JveC1mb290ZXItdGltZS1vdXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSHRtbChwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPSdcIiArIFBhcnNlci5nZXRQZXJzb25JbWFnZShwZXJzb24pICsgXCInIHN0eWxlPSdjdXJzb3I6cG9pbnRlcjtib3JkZXI6IHNvbGlkIDFweCAjNGRiYWRjO3BhZGRpbmc6IDFweDt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ucGVyc29uLm5hbWUgKyBcIicgb25jbGljaz0nc2hvd1BlcnNvbkRldGFpbHMoXCIgKyBKU09OLnN0cmluZ2lmeShwZXJzb24ucGVyc29uKSArIFwiKSc+IFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJzb25IdG1sMihwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPSdcIiArIFBhcnNlci5nZXRQZXJzb25JbWFnZShwZXJzb24pICsgXCInIHN0eWxlPSdib3JkZXI6IHNvbGlkIDFweCAjNGRiYWRjO3BhZGRpbmc6IDFweDt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ucGVyc29uLm5hbWUgKyBcIicgPiBcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSW1hZ2UocGVyc29uOiBEYXJrUGVyc29uSW5EYXJrRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChwZXJzb24ucGVyc29uVGltZSA9PSBBZ2VHcm91cC55b3VuZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBlcnNvbi5waG90b3MueW91bmchO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGVyc29uLnBlcnNvblRpbWUgPT0gQWdlR3JvdXAuYWR1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbi5wZXJzb24ucGhvdG9zLmFkdWx0ITtcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcnNvbi5wZXJzb25UaW1lID09IEFnZUdyb3VwLm9sZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBlcnNvbi5waG90b3Mub2xkITtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9wZXJzb25zL3Vua25vd25QZXJzb24wLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnRNb2RhbEh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9ICcnICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPicgK1xyXG4gICAgICAgICAgICAnICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4lJVRJVExFJSU8L2g1PicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8cD4lJUJPRFklJTwvcD4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVRJVExFJSVcIiwgZXZlbnQudGl0bGUpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVCT0RZJSVcIiwgZXZlbnQuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGVyc29uTW9kYWxIdG1sKHBlcnNvbjogRGFya1BlcnNvbik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9ICcnICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPicgK1xyXG4gICAgICAgICAgICAnICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4lJVRJVExFJSU8L2g1PicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICUlSU1HMCUlJyArXHJcbiAgICAgICAgICAgICcgICAgICAlJUlNRzElJScgK1xyXG4gICAgICAgICAgICAnICAgICAgJSVJTUcyJSUnICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8cD4lJUJPRFklJTwvcD4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVRJVExFJSVcIiwgcGVyc29uLm5hbWUpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUcwJSVcIiwgUGFyc2VyLmdldFBlcnNvbkh0bWwyKHsgcGVyc29uOiBwZXJzb24sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0pKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlSU1HMSUlXCIsIFBhcnNlci5nZXRQZXJzb25IdG1sMih7IHBlcnNvbjogcGVyc29uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9KSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUlNRzIlJVwiLCBQYXJzZXIuZ2V0UGVyc29uSHRtbDIoeyBwZXJzb246IHBlcnNvbiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0pKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlQk9EWSUlXCIsIHBlcnNvbi5mYW1pbHkgKyAnPGJyPicgKyBwZXJzb24uZmF0aGVyPy5uYW1lICsgJzxicj4nICsgcGVyc29uLm1vdGhlcj8ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZmluZVBvcHVwRnVuY3Rpb25zKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cuc2hvd0V2ZW50RGV0YWlscyA9IGZ1bmN0aW9uIChlcGlzb2RlVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBFdmVudHMuZ2V0RXZlbnRzKCkuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5lcGlzb2RlVGltZS5udW1iZXIgPT09IGVwaXNvZGVUaW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmFwcGVuZChQYXJzZXIuZ2V0RXZlbnRNb2RhbEh0bWwocmVzWzBdKSk7XHJcbiAgICAgICAgICAgICQoJyNkYXJrLWV2ZW50LW1vZGFsIC5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuc2hvd1BlcnNvbkRldGFpbHMgPSBmdW5jdGlvbiAocGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgICAgICAgICAgICQoJyNkYXJrLWV2ZW50LW1vZGFsJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5hcHBlbmQoUGFyc2VyLmdldFBlcnNvbk1vZGFsSHRtbChwZXJzb24pKTtcclxuICAgICAgICAgICAgJCgnI2RhcmstZXZlbnQtbW9kYWwgLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhcmtQZXJzb25JbkRhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uSW5kYXJrRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1NhbWVQZXJzb24ocGVyc29uczogRGFya1BlcnNvbkluRGFya0V2ZW50W10sIHNlYXJjaEl0ZW06IERhcmtQZXJzb25JbkRhcmtFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXMgPSBwZXJzb25zLmZpbHRlcihwZXJzb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyc29uLnBlcnNvbiA9PSBzZWFyY2hJdGVtLnBlcnNvbiAmJiBwZXJzb24ucGVyc29uVGltZSA9PSBzZWFyY2hJdGVtLnBlcnNvblRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==