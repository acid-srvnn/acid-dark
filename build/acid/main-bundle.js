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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9ldmVudHNQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxMC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGU2LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNy50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGU5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvdGltZVRyYXZlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2NvbnN0YW50cy9lbnVtL2RhcmtGYW1pbHkudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lTGluZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxEZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2VwaXNvZGVUaW1lLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uUGhvdG8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3RpbWVsaW5lL2V2ZW50UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL3RpbWVsaW5lL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdGltZWxpbmUvcGFyc2VyLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy90aW1lbGluZS9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvdGltZWxpbmUvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNE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RSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUkscUJBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ25CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFD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RyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUVKO0FBWkQsc0JBWUMiLCJmaWxlIjoiYWNpZC9tYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGFic3RyYWN0IGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVUaW1lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lcGlzb2RlVGltZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGUxIGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVGcmFtZSA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWNoYWVsIGNvbW1pdHMgc3VpY2lkZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWljaGFlbCBjb21taXRzIHN1aWNpZGUgbGVhdmluZyBiZWhpbmQgYSBsZXR0ZXIgYERvIG5vdCBvcGVuIGJlZm9yZSBOb3ZlbWJlciA0LCAxMDoxMyBQTWAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjA2LzIxLzIwMTkgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFubmFoIGZ1Y2tzIFVscmljaCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgd2FrZXMgZnJvbSBhIG5pZ2h0bWFyZSBhcyB1c3VhbC4gSGFubmFoIGZ1Y2tzIFVscmljaC4gVWxyaWNoIGludml0ZXMgSGFubmFoIGZvciB0aGUgVWxyaWNoLUthdGFyaW5hIGFubml2ZXJzYXJ5IHRoYXQgbmlnaHQuIEhhbm5haCBpcyBkaXNhcHBvaW50ZWQgZm9yIG5vdCByZWNlaXZpbmcgYEkgbG92ZSB5b3VgIGJhY2snLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnV2luZGVuIGNhdmVzIGludHJvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBsZWF2ZXMgZm9yIHNjaG9vbC4gRXJpayBPYmVuZG9yZiBpcyBtaXNzaW5nLiBXaW5kZW4gY2F2ZXMgaXMgbG9jYXRlZCAzLjUga21zIGZyb20gV2luZGUuIEpvbmFzIHRhbGtzIHdpdGggaGlzIHRoZXJhcGlzdCBQZXRlciBhYm91dCBoaXMgZHJlYW1zIGFuZCBhbmdlciByZWxhdGVkIHRvIGhpcyBkYWQnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDFcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG93ZXIgUGxhbnQgaW50cm8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dpbmRlbiBOdWNsZWFyIFBvd2VyIFBsYW50LiBQcm9qZWN0IHBsYW4gc3RhcnRlZCBpbiAxOTUzIGFuZCBhdXRob3JpemVkIGluIDE5NjAuIFRvIGJlIGRlY29tbWlzc2lvbmVkIGluIDIwMjAgZHVlIHRvIGdvdmVybm1lbnQuIEluZXMgaGFzIHRoZSBsZXR0ZXIgbGVmdCBieSBNaWNoYWVsJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAyXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ05pZWxzZW4gRmFtaWx5IGludHJvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYWdudXMgaG9vZGllIGlzIG1pc3NpbmcuIE1pa2tlbCBsaWtlcyBtYWdpYy4gYFRoZSBxdWVzdGlvbiBpc250IGhvdywgaXRzIHdoZW5gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjAzXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGdvZXMgdG8gc2Nob29sJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBnb2VzIHRvIHNjaG9vbCBmb3IgZmlyc3QgdGltZSBhZnRlciBoaXMgZGFkcyBzdWljaWRlLiBNZWV0cyBoaXMgZnJpZW5kIEJhcnRvc3ouIEJhcnRvc3ogaGlkIHRoZSBmYWN0IGFib3V0IEpvbmFzIGRhZCB0byB0aGUgc2Nob29sIHBlb3BsZSwgSW5zdGVhZCBoZSB0b2xkIHRoYXQgSm9uYXMgd2FzIGluIHR3byBtb250aCBleGNoYWdlIHNjaG9vbCBpbiBGcmFuY2UuIE1hcnRoYSBub3cgbGlrZXMgQmFydG9zeiBhcyBKb25hcyB3YXMgbWlzc2luZyBmb3IgbG9uZyB0aW1lLiBQcmluY2lwYWwga2F0YXJpbmEgdGFsa3MgdG8gc3R1ZGVudHMgYWJvdXQgbWlzc2luZyBFcmlrLiBCYXJ0b3N6IHBsYW5zIG9uIGdldHRpbmcgRXJpa2BzIHN0YXNoJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hcnRoYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjA0XCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VyaWsgSW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNDkgdGlyZSB0cmFja3MgaW5jbHVkaW5nIDIgdHJ1Y2tzLiAyMSwzMTIgdmVoaWNsZXMgaW4gV2luZGVuLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDA3OjAwOjA1XCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pa2tlbCBnb2VzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBraWRzIGdvIHNlYXJjaGluZyBmb3IgRXJpa2BzIHN0YXNoIG5lYXIgV2luZGVuIENhdmVzLiBQYXJlbnRzIGRvIGEgbWVldGluZyB0byBkaXNjdXNzIG9uIEVyaWsuIEluZXMgcmVhZHMgTWljaGVhbGBzIGxldHRlci4gU3RyYW5nZSBub2lzZSBmcm9tIGNhdmVzLiBNaWtrZWwgZ29lcyBtaXNzaW5nJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5tYWdudXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmZyYW56aXNrYURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDExMiwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNC8yMDE5IDIyOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTsgLy9UT0RPIFVwZGF0ZSB0aW1ldHJhdmVsIGluZm8gXHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgSW52ZXN0aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUG9saWNlIGZpbmRzIGEgY2hpbGQgYm9keSB0aGF0cyBub3QgbWlra2VsLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA3OjAwOjAxXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9UT0RPIGVuZGluZyBldmVudFxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTEwIGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVGcmFtZSA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQZXRlciByZWNlaXZlcyBNYWRzIGJvZHknLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BldGVyIHdhaXRzIGluIHRoZSBidW5rZXIgYXMgQ2xhdWRpYSB0b2xkLiBNYWRzIGJvZHkgZmFsbHMgdGhyb3VnaCBUaW1lVHJhdmVsLiBQZXRlciBjYWxscyBUcm9udGUuIENsYXVkaWEgdmlzaXRzIHRoZW0uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYWRzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDExMSwgdHlwZTogVGltZVRyYXZlbFR5cGUuaW4gfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMjI6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ09sZCBIZWxnZSBhZHZpY2VzIEhlbGdlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdPbGQgSGVsZ2Ugd2FrZXMgdXAgaW4gMTk4Ni4gT2xkIEhlbGdlIG1lZXRzIEhlbGdlIGFuZCBhc2tzIGhpbSBub3QgdG8gZG8gdGhlIHNhbWUgbWlzdGFrZScsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW5lcyBhZG9wdHMgTWlra2VsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJbmVzIGdldHMgY2xvc2Ugd2l0aCBNaWtrZWwuIEluZXMgYWRvcHRzIE1pa2tlbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzE5ODYgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Vnb24gaW1wcmlzb25zIFVscmljaCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRWdvbiBpbXByaXNvbnMgVWxyaWNoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzE5NTMgMTA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGNoZWNrcyBvbiBUYW5uaGF1cycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGFubmhhdXMgcHJvY2VlZHMgd2l0aCBoaXMgdGltZSBtYWNoaW5lIGJhc2VkIG9uIHRoZSB0aW1lIG1hY2hpZW4gZ2l2ZW4gYnkgSm9uYXMuIFVzZXMgVWxyaWNoYHMgcGhvbmUuIEpvbmFzIGdpdmVzIENhZXNpdW0tMTM3IHRvIFRhbm5oYXVzIG1hY2hpbmUgYW5kIHRha2VzIHRoZSBtYWNoaW5lIGZvciBoaW1zZWxmLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTg2IDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBnb2VzIHRvIGZpeCB0aGluZ3MnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JhcnRvc3ogaGl0cyBKb25hcy4gSm9uYXMgZGVjaWRlcyB0byBicmluZyBiYWNrIE1pa2tlbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MWExLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzIwMTkgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGdvZXMgdG8gZml4IHRoaW5ncycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXMgSm9uYXMgcmVhY2hlcyBNaWtrZWxgcyByb29tLCBOb2FoIGtpZG5hcHMgSm9uYXMgdG8gcHV0cyBpbiB0aGUgYnVua2VyLiBTdHJhbmdlciBKb25hcyB2aXNpdHMgSm9uYXMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxYTEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTg2IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFybG90dGUgZmluZHMgVWxyaWNoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgYW5hbHlzZXMgSGVsZ2Uga2lkbmFwIGluY2lkZW50IGluIDE5NTMgdG8gZmluZCBVbHJpY2ggYXMga2lkbmFwcGVyLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMjAxOSAxNTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGV0ZXIgYW5kIFRyb250ZSB3YWl0IGZvciB0aGUgZXZlbnQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BldGVyIGFuZCBUcm9udGUgd2FpdCBpbnNpZGUgdGhlIGJ1bmtlci4gUGV0ZXIgY2FsbHMgQ2hhcmxvdHRlIGFuZCBleHBsYWlucyB0aGluZ3MuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMjAxOSAxNjowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hlbGdlIHRyaWVzIHRvIGtpbGwgSGVsZ2UnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09sZCBIZWxnZSB0cmllcyB0byBraWxsIEhlbGdlIGJ5IGEgY2FyIGNyYXNoIGJ1dCBkaWVzIGhpbXNlbGYuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTg2IDE5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOb2FoIHRhbGtzIHRvIEJhcnRvc3onLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ05vYWggc2F5cyAtIEZpZ2h0IGJldHdlZW4gbGlnaHQgYW5kIHNoYWRvdyAtIE5vYWggbGlnaHQgLSBDbGF1ZGlhIHNoYWRvdyAtIENsYXVkaWEgbGllZCB0byBKb25hcyB0aGF0IGhlIGZpeCB0aGluZ3MgLSBKb25hcyBpcyB0aGUgb25lIHRvIHRyaWdnZXIgLSBNb3N0IHBlb3BsZSBhcmUgcHVwcGV0cy4gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMjAxOSAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgZ29lcyB0byBmaXggdGhpbmdzIGluIDE5ODYnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIGRpcmVjdGVkIGJ5IENsYXVkaWEuIFN0cmFuZ2VyIEpvbmFzIGdldHMgdGltZSBtYWNoaW5lIGZyb20gVGFubmhhdXMsIGZpbGxzIGl0IHdpdGggQ2Flc2l1bSBhbmQgdGFrZXMgaXQgaW5zaWRlIHRoZSBjYXZlLiBCbGlua2luZyBsaWdodHMgZXZlcnl3aGVyZSBpbiBhbGwgMyB0aW1lbGluZXMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTg2IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyBnb2VzIHRvIGZpeCB0aGluZ3MgaW4gMTk4NicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUG9ydGFsIG9wZW4gaW4gYnVua2VyIHdpdGggSm9uYXMgaW5zaWRlLiBKb25hcyBzZWVzIDE5NTMgSGVsZ2UgaW5zaWRlIFBvcnRhbC4gVGltZVRyYXZlbCBoYXBwZW5zLiBIZWxnZSByZWFjaGVzIDE5ODYuIEpvbmFzIHJlYWNoZXMgMjA1Mi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxYTIsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH0sXHJcbiAgICAgICAgICAgIHsgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxYTMsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTIvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMTAsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgZ29lcyB0byBmaXggdGhpbmdzIGluIDE5ODYnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BvcnRhbCBvcGVuIGluIGJ1bmtlciB3aXRoIEhlbGdlIGluc2lkZS4gSGVsZ2Ugc2VlcyAxOTg2IEpvbmFzIGluc2lkZSBQb3J0YWwuIFRpbWVUcmF2ZWwgaGFwcGVucy4gSGVsZ2UgcmVhY2hlcyAxOTg2LiAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDFhMiwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8xOTUzIDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUYW5uaGF1cyBpcyBidWlsZGluZyB0aGUgdGltZSBtYWNoaW5lJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUYW5uaGF1cyBpcyBidWlsZGluZyB0aGUgdGltZSBtYWNoaW5lIGJhc2VkIG9uIHRoZSBibHVlcHJpbnQgZ2l2ZW4gYnkgQ2xhdWRpYS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEyLzE5NTMgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEwLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIHJlYWNoZXMgZnV0dXJlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEdWUgdG8gdGhlIGFjdGlvbnMgb2YgU3RyYW5nZXIgSm9uYXMsIEpvbmFzIGZyb20gYnVua2VyIGluIDE5ODYgcmVhY2hlcyAyMDUyLiBTaWxqYSBjYXB0dXJlcyBoaW0uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuc2lsamEsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxYTMsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMi8yMDUyIDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAxMCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlMiBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgd2FrZXMgdXAnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdha2VzIHVwIGZyb20gbmlnaHRtYXJlcyBhcyB1c3VhbC4gU3RyYW5nZXIgSm9uYXMgd2F0Y2hlcyBNaWtrZWwgc2VhcmNoIGNyZXcuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVW5pZGVudGlmaWVkIGNoaWxkIGJvZHkgcmVwb3J0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYWxlLCAxMC0xMiB5ZWFycyBhZ2UuIFRpbWUgb2YgZGVhdGggMTYgaG91cnMgYWdvLiBFeWVzIGJ1cm50IGFuZCBtZWx0ZWQuIEVhcmRydW1zIGRlc3Ryb3llZC4gUmVkIHNvaWwgaW4gdGhlIGdyb3VuZC4gODBzIGNsb3RoZXMsIHNob2VzLCB3YWxrbWFuLiAxOTg2IGNvaW4uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBmaW5kcyBjYXZlIG1ldGFsIGRvb3InLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VscmljaCBmaW5kcyBjYXZlIG1ldGFsIGRvb3IuIENvbWVzIGJhY2sgdG8gdGVsbCBDaGFybG90dGUgYW5kIGdldCBzZWFyY2ggd2FycmFudC4gRmFpbHMgdG8gZ2V0IHdhcnJhbnQuIE1lZXRzIEFsZWtzYW5kZXIgaW4gdGhlIGdhdGVzIGFuZCBhcmd1ZXMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGVrc2FuZGVyIG9yZGVycyBKdXJnZW4gdG8gbW92ZSB0aGUgY3lsaW5kZXJzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbGVrc2FuZGVyIG9yZGVycyBKdXJnZW4gdG8gbW92ZSB0aGUgY3lsaW5kZXJzJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuanVyZ2VuT2JlbmRvcmYsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgY29tZXMgdG8gc3RheSBhdCB3aW5kZW4gaG90ZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0cmFuZ2VyIEpvbmFzIGNvbWVzIHRvIHN0YXkgYXQgd2luZGVuIGhvdGVsJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucmVnaW5hVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGZpbmRzIGEgbWFwJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyBmaW5kcyBhIG1hcCBvZiB3aW5kZW4gY2F2ZXMgaGlkZGVuIGluIGhpcyBkYWRzIHJvb20nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIGludmVzdGlnYXRlcyBKdXJnZW4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VscmljaCBhbmFseXNlcyBNaWtrZWwgY2x1ZXMuIEp1cmdlbiBoYXMgdmFuIGFuZCB3YXMgd29ya2luZyBpbiB0aGUgbnVjbGVhciBwb3dlciBwbGFudCBhcyBhIGRyaXZlIHRoZSBuaWdodCBFcmlrIHdlbnQgbWlzc2luZy4gVWxyaWNoIGludmVzdGlnYXRlcyBKdXJnZW4uIEZpbmQgaGlzIHN0YXNoIGFuZCB0aGF0IGhlIGRpZG50IHdvcmsgdGhlIHByZXZpb3VzIGRheS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSBraWxscyBFcmlrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBzdHJhcHMgRXJpayB0byB0aGUgYnVua2VyIHRpbWVtYWNoaW5lIGFuZCBraWxscyBoaW0uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lcmlrT2JlbmRvcmYsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLCAvL1RPRE9cclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FsZWtzYW5kZXIgbG9hZHMgYmFycmVscyBpbnRvIGEgdHJ1Y2snLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FsZWtzYW5kZXIgbG9hZHMgYmFycmVscyBpbnRvIGEgdHJ1Y2snLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGltZVRyYXZlbCBoYXBwZW5zJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCbGlua2luZyBsaWdodHMuIERlYWQgYmlyZHMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW10sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSwgLy9UT0RPXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pOyAgLy9UT0RPIFVwZGF0ZSB0aW1ldHJhdmVsIGluZm8gXHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgaW4gcGFzdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWlra2VsIHdhbGtzIG91dCBvZiBjYXZlLCBnb2VzIGhvbWUsIG1lZXRzIHlvdW5nIFVscmljaCBhbmQgS2F0YXJpbmEnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVUaW1lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lcGlzb2RlVGltZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGUzIGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVGcmFtZSA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgbWVldHMgSmFuYScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWFkcyBpbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBZHVsdCBJbmVzIGludHJvLiBZb3VuZyBDaGFybG90dGUgbm90aWNlcyBkZWFkIGJpcmRzLiAgRWdvbiBpbnZlc3RpZ2F0ZXMgbWlzc2luZyBNYWRzLiA0IHdlZWtzIHNpbmNlIG1hZHMgaXMgbWlzc2luZy4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWtrZWwgcm9hbXMgd2luZGVuJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNaWtrZWwgcm9hbXMgd2luZGVuLiBHb2VzIHRvIHNjaG9vbCBhbmQgbWVldHMgS2F0YXJpbmEgYW5kIEhhbm5haC4gR29lcyB0byBwb2xpY2Ugc3RhdGlvbiBhbmQgbWVldHMgRWdvbi4gRWdvbiBhc3N1bWVzIGl0cyBhIHByYW5rLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgdGFrZXMgY2hhcmdlIGF0IG51Y2xlYXIgcG93ZXIgcGxhbnQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIGdpdmUgVGltZVRyYXZlbCBib29rIHRvIENsYXVkaWEuIENsYXVkaWEgdGFrZXMgY2hhcmdlIGF0IG51Y2xlYXIgcG93ZXIgcGxhbnQuIENsYXVpZGEgZmluZHMgbWlzc2luZyBlbnRyaWVzIGluIGZpbmFuY2lhbCByZXBvcnQuIFRhbGtzIHRvIEJlcm5kLiBIZSBhZHZpY2VzIGl0cyBiZXR0ZXIgbm90IHRvIGtub3cuIENsYXVkaWEgaW5zaXN0cy4gQmVybmQgc2hvd3MgaGVyIHRoZSBoaWRkZW4gY3lsaW5kZXJzIG9mIHJhZGlvYWN0aXZlIHN1YnN0YW5jZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Vnb24gaW52ZXN0aWdhdGVzIGRlYWQgc2hlZXBzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOZXcgcHJpZXN0IGF0IGNodXJjaC4gMzMgc2hlZXBzIGRlYWQuIENhcmRpYWMgYXJyZXN0LiBFYXJkcnVtcyBydXB0dXJlZC4gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUcm9udGUgYWZmYWlyIHdpdGggQ2xhdWRpYScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVHJvbnRlIGFmZmFpciB3aXRoIENsYXVkaWEnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0luZXMgdGFrZXMgTWlra2VsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJbmVzIHRha2VzIE1pa2tlbCBmb3IgbWVkaWNhbCBhaWQuIE1pa2tlbCB3b3VsZG50IHRhbGsgd2l0aCBhbnlvbmUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RpbWVUcmF2ZWwgaGFwcGVucycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmxpbmtpbmcgbGlnaHRzLiBEZWFkIGJpcmRzLiBVbHJpY2ggYW5kIEhhbm5haCB0YWxrIGFib3V0IEFwb2NhbHlwc2UuIE1pa2tlbCBydW5zIGZyb20gaG9zcGl0YWwgdG8gdGhlIGNhdmUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLCAvL1RPRE9cclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7ICAvL1RPRE8gVXBkYXRlIHRpbWV0cmF2ZWwgaW5mbyBcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0guRy5UYW5uaGF1cyBpcyB3b3JraW5nIG9uIHRpbWUgbWFjaGluZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSC5HLlRhbm5oYXVzIGlzIHdvcmtpbmcgb24gdGltZSBtYWNoaW5lJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZ1Rhbm5oYXVzLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfSxdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTQgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RvcHBsZXIgZmFtaWx5JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXRlciBhbmQgQ2hhcmxvdHRlIGRvbnQgc2xlZXAgdG9nZXRoZXIuIEZyYW56aXNrYSBmaWdodHMgd2l0aCBFbGlzYWJldGggZm9yIG1pc3NpbmcgbGlwc3RpY2suJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZnJhbnppc2thRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVsaXNhYmV0aERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGV0ZXIgbWVldHMgSGVsZ2UnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BldGVyIGFza3MgSGVsZ2Ugbm90IHRvIHdhbmRlci4gSGVsZ2UgcmVwbGllcyB0aGF0IGhlIGhhcyB0ZWxsIGhpbSBhbmQgbWFrZSBpdCBzdG9wLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDYvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFybG90dGUgc3RlYWxzIHJvYWRzaWRlIGNhbWVyYSBkYXRhJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgc3RlYWxzIHJvYWRzaWRlIGNhbWVyYSBkYXRhIGFuZCB0aGVuIGxlYXZlcyBFbGlzYWJldGggYXQgc2Nob29sLiBFbGlzYWJldGggdGVsbHMgYWJvdXQgaGVyIGJveWZyaWVuZCBZYXNpbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lbGlzYWJldGhEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMueWFzaW5Gcmllc2UsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgaW52ZXN0aWdhdGVzIHdpbmRlbiBjYXZlcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgdGFrZXMgdGhlIG1hcCB0aGF0IGhlIGZvdW5kIGFuZCBnb2VzIGluc2lkZSB0aGUgY2F2ZXMuIFN0cmFuZ2VyIEpvbmFzIGxlYXZlcyBhIHJlZCBrbm90IHJvcGUgb24gSm9uYXNgcyBjeWNsZSBhbmQgd2F0Y2hlcyBoaW0gZnJvbSBhIGRpc3RhbmNlLiBKb25hcyBkb2VzbnQgZmluZCBoaXMgd2F5IGluc2lkZSB0aGUgY2F2ZS4gUmV0dXJucy4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBpbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbmFseXNlcyB0aGUgZGVhZCBiaXJkcy4gTGF0ZXIgZ29lcyB0aHJvdWdoIGNhbSBmb290YWdlLiBGaW5kcyBwZXRlcmBzIGNhciBpbiB0aGUgZm9vdGFnZS4gSGlkZXMgdGhlIGluZm8gZnJvbSBXb2xsZXIuIFBldGVyIHJlbW92ZXMgcmVkIHNvaWwgZnJvbSBoaXMgY2FyLiBQZXRlciBsaWVzIHdoZW4gQ2hhcmxvdHRlIGFza3MgYWJvdXQgaGlzIGxvY2F0aW9uIGR1cmluZyBNaWtrZWwgaW5jaWRlbnQuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudG9yYmVuV29sbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBpbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgcXVlc3Rpb25zIGJlcm5hZGV0dGUgYWJvdXQgUGV0ZXIuIFRoZW4gdmlzaXRzIGhlbGdlYHMgZm9yZXN0IGhvdXNlLiBGaW5kcyByZWQgc29pbCB0aGVyZS4gR2V0cyByZXBvcnQgb2YgZGVhZCBiaXJkcyBpbiBwaG9uZS4gRWFyIGRydW1zIGJ1cm50LiBGaW5kcyBhIGJ1bmtlciBuZWFyIHRoZSBob3VzZS4gVGhlbiBnb2VzIHRvIHRoZSBwb3dlcnBsYW50IGFzIFVscmljaCB3YXMgY2F1Z2h0IHRyZXNwYXNzaW5nLiBBc2tzIFBldGVyIHRvIHBpY2t1cCBFbGlzYWJldGggZnJvbSBzY2hvb2wuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5iZXJuYWRldHRlLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMTE6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRWxpc2FiZXRoIHdhbGtzIGhvbWUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIG5vIG9uZSBjYW1lIHRvIHBpY2t1cCwgRWxpc2FiZXRoIHdhbGtzIGhvbWUuIEhlbGdlIHJ1bnMgZnJvbSBob3NwaXRhbC4gRWxpc2FiZXRoIGdvZXMgbWlzc2luZy4gQ2hhcmxvdHRlIGZpbmRzIEVsaXNhYmV0aGBzIHNjYXJmLiBQb2xpY2Ugc3RhcnQgc2VhcmNoaW5nLiBBZHVsdCBIZWxnZSB2aXNpdHMgSGVsZ2VgcyBidW5rZXIuIEhlbGdlIHJvYW1zIGFuZCByZWFjaGVzIFBvbGljZS4gRWxpc2FiZXRoIHJlYWNoZXMgaG9tZS4gRWxpc2FiZXRoIHNheXMgdGhhdCBzaGUgbWV0IE5vYWggYW5kIGhlIGdhdmUgYSBzdG9wd2F0Y2ggdG8gZ2l2ZSB0byBDaGFybG90dGUnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVsaXNhYmV0aERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMTc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgZ3VpZGVzIEpvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBtYXJrcyB0aGUgbG9jYXRpb24gb2YgY2F2ZSBkb29yIGluIEpvbmFzYHMgbWFwJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDYvMjAxOSAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSBraWRuYXBzIFlhc2luJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBraWRuYXBzIFlhc2luIGJ5IG9yZGVyIG9mIE5vYWguJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy55YXNpbkZyaWVzZSwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMjAxOSAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlNSBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hhcmxvdHRlIGludmVzdGlnYXRlcyBZYXNpbiBjYXNlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgYXNrcyBFbGlzYWJldGggYW55IGluZm8gYWJvdXQgWWFzaW4gYW5kIGFib3V0IE5vYWguIE5vYWggLSB0YWxsIGFzIGRhZCAtIGJsdWUgZXllcy4gQ2hhcmxvdHRlIGNvbmZyb250cyBQZXRlciB3aGVyZSBoZSB3YXMgZHVyaW5nIE1pa2tlbHMgaW5jaWRlbnQuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWxpc2FiZXRoRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMjAxOSAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogTWlzc2VkIHNjZW5lIHdoZXJlIG1pa2tlbCByZXR1cm5zIHRvIGhvc3BpdGFsXHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJbmVzIHRhbGtzIHRvIE1pa2tlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW5lcyB0YWxrcyB0byBNaWtrZWwuIE5vYWggdmlzaXRzIE1pa2tlbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8xOTg2IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JhcnRvc3ogcmVjZWl2ZXMgY2FsbCBmcm9tIE5vYWgnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JhcnRvc3ogcmVjZWl2ZXMgY2FsbCBmcm9tIE5vYWggb24gdGhlIHBob25lIHRoYXQgaGUgZm91bmQgaW4gRXJpa2BzIHN0YXNoLiBCYXJ0b3N6IHRlbGwgSm9uYXMgdGhhdCBoZXMgbWVldGluZyBFcmlrYHMgZGVhbGVyIGFuZCB3YW50cyBoaW0gdG8gYWNjb21wYW55LiBKb25hcyBhZ3JlZXMuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFubmFoIHZpc2l0cyBOaWVsc2VucycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXMgVWxyaWNoIGRvZXNudCByZXR1cm4gSGFubmFoYHMgY2FsbHMsIFNoZSB2aXNpdHMuIEhhbm5haCBicmluZ3MgZm9vZCB0byB0aGUgTmllbHNlbiBob3VzZS4gVWxyaWNoIGRyb3BzIEhhbm5haCBhdCBoZXIgaG91c2UuIFVscmljaCBicmVha3MgdXAgSGFubmFoYHMgYWZmYWlyLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGxlYXZlcyBXaW5kZW4gaG90ZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0cmFuZ2VyIEpvbmFzIGxlYXZlcyBXaW5kZW4gaG90ZWwuIEtlZXBzIHRoZSByb29tLiBBc2tzIFJlZ2luYSB0byBkbyBhIGxvY2FsIGRlbGl2ZXJ5LiBUaGVuIGhlIGdvZXMgYW5kIG1lZXRzIEpvbmFzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFubmFoIG1lZXRzIE1pa2tlbCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGFubmFoIG1lZXRzIE1pa2tlbCBvdXRzaWRlIHNjaG9vbC4gSGFubmFoIGZpbmRzIFVscmljaCBhbmQgS2F0YXJpbmEgaGF2aW5nIHNleC4gSGFubmFoIHRlbGxzIGhlciBmYXRoZXIgYW5kIEVnb24gdGhhdCBVbHJpY2ggcmFwZWQgS2F0YXJpbmEuIEVnb24gYXJyZXN0cyBVbHJpY2guJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8xOTg2IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JhcnRvc3ogbWVldHMgTm9haCBhbG9uZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgd2F0Y2hlcyBNYXJ0aGFgcyBwZXJmb3JtYW5jZS4gQmFydG9zeiBtZWV0cyBOb2FoIGFsb25lIGFzIEpvbmFzIGRpZG50IHJlc3BvbmQuIFN0cmFuZ2VyIEpvbmFzIHRha2VzIFRhbm5oYXVzIHRpbWUgbWFjaGluZSBhbmQgZ29lcyBpbnNpZGUgY2F2ZS4gJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxNTEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMjAxOSAxNTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyByZWNlaXZlcyBwYWNrYWdlIGZyb20gU3RyYW5nZXIgSm9uYXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHJlY2VpdmVzIHRoZSBwYWNrYWdlIHNlbnQgYnkgU3RyYW5nZXIgSm9uYXMuIEEgdG9yY2ggbGlnaHQuIEEgR2VpZ2VyIGNvdW50ZXIgdG8gZGV0ZWN0IHJhZGlhdGlvbi4gVGhlIExldHRlciB0aGF0IE1pY2hhZWwgbGVmdC4gTGV0dGVyIHRoYXQgc2F5cyBNaWtrZWwgaXMgTWljaGFlbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgbWVldHMgSC5HLlRhbm5oYXVzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBtZWV0cyBILkcuVGFubmhhdXMgYW5kIHNheXMgdGhhdCBoZSB3YW50cyB0byB0YWxrIGFib3V0IHRpbWUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGdUYW5uaGF1cywgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxNTEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8xOTg2IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbHMgfSBmcm9tIFwiLi4vdGltZVRyYXZlbHNcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbFR5cGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVUaW1lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lcGlzb2RlVGltZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVwaXNvZGU2IGV4dGVuZHMgRXZlbnRzUHJvdmlkZXIge1xyXG4gICAgcHVibGljIGdldEV2ZW50cygpOiBEYXJrRXZlbnRbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogRGFya0V2ZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGVwaXNvZGVGcmFtZSA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYWRzIGdvZXMgbWlzc2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFkcyBnb2VzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZHNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMC8wOS8xOTg2IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ludmVzdGlnYXRpb24gY29udGludWVzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggaGVhcnMgZXZpZGVuY2VzIGZyb20gTWFkcyBjYXNlLiBOb3RpY2VzIGhpcyBtb20gaGFzIGxpZWQuIENvbmZyb250cyBoaXMgZGFkIHdoZXJlIGhlIHdhcyB0aGF0IG5pZ2h0LiBKYW5hIHJldmVhbHMgYWJvdXQgYWZmYWlyIGJldHdlZW4gVHJvbnRlIGFuZCBDbGF1ZGlhLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlZ2luYSBsZWFybnMgc2hlIGhhcyBjYW5jZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlZ2luYSBsZWFybnMgc2hlIGhhcyBjYW5jZXIuIEhpZGVzIGl0IGZyb20gQWxla3NhbmRlci4gQWxla3NhbmRlciBjYWxsIHRoZSBjZW50ZXIgYW5kIGdldHMgdGhlIGluZm8uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hZ251cyBmaW5kcyBhIHBlbmRhbnQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01hZ251cyBmaW5kcyBhIHBlbmRhbnQgbmVhciB0aGUgcGxhY2Ugd2hlcmUgRnJhbnppc2thIGtlZXBzIGhlciBtb25leS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA4LzIwMTkgMTA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDYsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgZ29lcyB0byB0aGUgY2F2ZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgdGFrZXMgdGhlIHRvb2xzIHRoYXQgU3RyYW5nZXIgSm9uYXMgc2VudCBhbmQgZ29lcyB0byB0aGUgY2F2ZS4gRmluZHMgYSByZWQgcm9wZSBhbmQgZm9sbG93cyBpdCBpbnNpZGUgdGhlIGNhdmUuIFRoZW4gaGUgZm9sbG93cyB0aGUgUmFkaWF0aW9uIHNpZ25hbC4gRmluZHMgdGhlIGNhdmUgdGltZSBtYWNoaW5lIGFuZCB1c2VzIGl0LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDE2MSwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0thdGFyaW5hIGxlYXJucyBvZiBVbHJpY2hgcyBhZmZhaXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0thdGFyaW5hIGFuYWx5c2VzIHBob25lIHJlY29yZHMgYW5kIGxlYXJucyBvZiBoZXIgaHVzYmFuZHMgYWZmYWlyLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA4LzIwMTkgMTA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDYsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIHF1ZXN0aW9ucyBSZWdpbmEgYWJvdXQgTWFkcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXMgSmFuYSBpbmZvcm1lZCB0aGF0IFJlZ2luYSB3YXMgdGhlIGxhc3QgcGVyc29uIHRvIG1lZXQgTWFkcywgVWxyaWNoIHF1ZXN0aW9ucyBSZWdpbmEgYWJvdXQgTWFkcy4gVWxyaWNoIGxlYXJucyB0aGF0IFJlZ2luYSBkaWQgbm90IGZyYW1lIGhpbSBvZiByYXBlIGFuZCBpdCB3YXMgSGFubmFoLiBVbHJpY2ggY29uZnJvbnRzIEhhbm5haC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA4LzIwMTkgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDYsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVHJvbnRlIGFuZCBQZXRlciB3YWl0IGZvciBldmVudCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVHJvbnRlIGFuZCBQZXRlciB3YWl0IGluIHRoZSBidW5rZXIgZm9yIGV2ZW50cyB0byBoYXBwZW4uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIGZpcnN0IHRpbWUgdHJhdmVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB1c2VzIFN0cmFuZ2VyIEpvbmFzIHRvb2xzIHRvIGRvIGhpcyBmaXJzdCB0aW1lIHRyYXZlbCB0byAxOTg2LiBKb25hcyBub3RpY2VzIHBvc3RlcnMgZm9yIG1pc3NpbmcgTWFkcy4gSm9uYXMgbWVldHMgeW91bmcgSGFubmFoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxNjEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8xOTg2IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBpZGVudGlmaWVzIE1hZHMgYm9keScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVWxyaWNoIGlkZW50aWZpZXMgdGhlIGZvdW5kIGRlYWQgYm9keSBhcyBNYWRzIC0gQ3V0IG9uIHRoZSBjaGluLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1hZHNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOC8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA2LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlNyBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgaW4gMTk4NicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgd2FrZXMsIHJvYW1zLCBnb2VzIHRvIHNjaG9vbC4gTWVldHMgUmVnaW5hLiBNZWV0cyBFZ29uLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOS8xOTg2IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA3LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Vnb24gaW52ZXN0aWdhdGVzIE1hZHMgY2FzZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRWdvbiBxdWVyaWVzIEhlbGdlIGFib3V0IGhpcyByb3V0ZS4gV2h5IGhlIHRvb2sgc3RhdGUgcm9hZCBpbnN0ZWFkIG9mIGZvcmVzdCByb2FkLiBLYXRhcmluYSBnZXRzIFVscmljaCBvdXQgb2YgamFpbC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFyb2xldHRlIHNlYXJjaGVzIHBvd2VyIHBsYW50JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgZ2V0cyBzZWFyY2ggd2FycmFudCBhbmQgc2VhcmNoZXMgcG93ZXIgcGxhbnQuIFVscmljaCBmaW5kcyBFZ29uIG5vdGVzIG9uIEhlbGdlIGZyb20gMTk4Ni4gQ2hhcmxvdHRlIGZpbmRzIHRoZSBwbGFjZSB3aGVyZSB0aGUgYmFycmVscyB3ZXJlIGtlcHQuIFVscmljaCBnb2VzIHRvIGhvc3BpdGFsIHRvIHF1ZXJ5IEhlbGdlIGFuZCBnZXRzIHN1c3BlbmRlZCBmb3IgdGhhdC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBmaW5kcyBNaWtrZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdhdGNoZXMgTWlra2VsIGluIHRoZSBjYXJlIG9mIEluZXMuIFRoZW4gU3RyYW5nZXIgSm9uYXMgY29tZXMgdGhlcmUgYW5kIHRlbGxzIG5vdCB0byBtZWRkbGUgd2l0aCB0aW1lLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOS8xOTg2IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA3LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0thdGFyaW5hIGNvbmZyb250cyBVbHJpY2gnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0thdGFyaW5hIGNvbmZyb250cyBVbHJpY2ggYWJvdXQgaGlzIGFmZmFpci4gVWxyaWNoIG1lZXRzIGhpcyBtb20uIEphbmEgdGVsbHMgdGhhdCBhIHNoZSBzYXcgYSBwcmllc3QoTm9haCkgYXJndWluZyB3aXRoIGEgbWFuKEhlbGdlKSBiZWZvcmUgTWFkcyBpbmNpZGVudCBhbmQgc2F3IHRoZSBzYW1lIG1hbiBpbiBwcmVzZW50IHdpdGggc2FtZSBhZ2UuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOS8yMDE5IDEzOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA3LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBnb2VzIHRvIGJ1bmtlcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIGdldHMgc3VzcGljaW9uIG9uIEhlbGdlIGZyb20gVWxyaWNoLiBRdWVzdGlvbnMgUGV0ZXIuIFZpc2l0cyB0aGUgYnVua2VyLiBKb25hcyBjb21lcyBiYWNrIHRvIHByZXNlbnQuIEpvbmFzIGJ1cm5zIHRoZSBsZXR0ZXIuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxNzEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLmluIH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOS8yMDE5IDE2OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA3LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzIHRyYXZlbHMgYmFjayB0byBwcmVzZW50JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB0cmF2ZWxzIGJhY2sgdG8gMjAxOSAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW3sgdGltZVRyYXZlbDogVGltZVRyYXZlbHMudHQxNzEsIHR5cGU6IFRpbWVUcmF2ZWxUeXBlLm91dCB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMTk4NiAxNjowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHsgLy9UT0RPXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIHZpc2l0cyBIZWxnZSBhZ2FpbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVWxyaWNoIHZpc2l0cyBIZWxnZS4gRmluZHMgdGhlIHRpbWUgdHJhdmVsIGJvb2sgd2l0aCAxOTg2IGNvaW4uIEhlbGdlIHJ1bnMgYXdheS4gVWxyaWNoIGZvbGxvd3MuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMjAxOSAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hlbGdlIHdpdGggYSBkZWFkIGJvZHknLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIGlzIHdpdGggYSBkZWFkIGJvZHkgb3V0c2lkZSB0aGUgYnVua2VyLiAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wOS8xOTUzIDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA3LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICAvL0Fzc3VtZWQgRXZlbnRzXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0J1bmtlciBUaW1lTWFjaGluZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2UgdXNlcyB0aW1lIG1hY2hpbmUgb24gRXJpayBPYmVuZHJvZmYuIEVyaWsgT2JlbmRyb2ZmIGRpZXMgYW5kIGdvZXMgdG8gMTk1My4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVyaWtPYmVuZG9yZiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0J1bmtlciBUaW1lTWFjaGluZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2UgdXNlcyB0aW1lIG1hY2hpbmUgb24gWWFzaW4gRnJpZXNlLiBZYXNpbiBGcmllc2UgZGllcyBhbmQgZ29lcyB0byAxOTUzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMueWFzaW5Gcmllc2UsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA5LzE5ODYgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDcsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCdW5rZXIgVGltZU1hY2hpbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIHVzZXMgdGltZSBtYWNoaW5lIG9uIEVyaWsgT2JlbmRyb2ZmIGluIDE5ODYuIEVyaWsgT2JlbmRyb2ZmIGRpZXMgYW5kIHJlYWNoZXMgMTk1My4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVyaWtPYmVuZG9yZiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk1MyAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0J1bmtlciBUaW1lTWFjaGluZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2UgdXNlcyB0aW1lIG1hY2hpbmUgb24gWWFzaW4gRnJpZXNlIGluIDE5ODYuIFlhc2luIEZyaWVzZSBkaWVzIGFuZCByZWFjaGVzIDE5NTMuIE5vYWggY2xlYW5zIHRoZSBwbGFjZS4gQWRkcyB0ZXh0IHRvIHRoZSB3YWxsIC0gTm92IDkgMTk1My4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnlhc2luRnJpZXNlLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDkvMTk1MyAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vZXZlbnRzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTggZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1R3byBib2RpZXMgZm91bmQgaW4gc2l0ZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUG9saWNlIGZpbmRzIHR3byBkZWFkIGJvZGllcyBpbiBwb3dlciBwbGFudCBjb25zdHJ1Y3Rpb24gc2l0ZS4gRWdvbiByZWFjaGVzIHRoZSBzcG90LiBIZWxnZSBmb2xsb3cgaGlzIGNhciBpbiBjeWNsZS4gRXllcyBidXJuZWQuIEVhcnMgZGVzdHJveWVkLiAxOTg2IGNvaW5zLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVyaWtPYmVuZG9yZiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnlhc2luRnJpZXNlLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEwLzE5NTMgMDg6MDA6MDBcIikuZ2V0VGltZSgpLCAvL1RPRE9cclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA4LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIHZpc2l0cyBILkcuVGFubmhhdXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0cmFuZ2VyIEpvbmFzIHZpc2l0cyBILkcuVGFubmhhdXMgYW5kIHRhbGsgYWJvdXQgdGltZS4gSm9uYXMgYXNrcyBoaW0gdG8gZml4IGhpcyB0aW1lIG1hY2hpbmUuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGdUYW5uaGF1cywgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzkvMTk4NiAyMjowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggZmlyc3QgdGltZSB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIGdvZXMgdG8gdGhlIGNhdmUgdHJhdmVscyB0byAxOTg2IGFuZCBVbHJpY2ggZm9sbG93cyBoaW0gYnV0IHJlYWNoZXMgMTk1My4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTgxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfSxcclxuICAgICAgICAgICAgeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDE4MiwgdHlwZTogVGltZVRyYXZlbFR5cGUub3V0IH1dLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS85LzIwMTkgMjI6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDgsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIGluIDE5NTMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VscmljaCBjb21lcyBvdXQgb2YgdGhlIGNhdmUuIFR3byBib3lzIGJ1bGx5IGhlbGdlLiBVcmxpY2ggZGlyZWN0cyBBZ25lcyBhbmQgVHJvbnRlLiBVbHJpY2ggZ29lcyB0byBILkcuVGFubmhhdXMgc2hvcC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5hZ25lc05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGdUYW5uaGF1cywgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbeyB0aW1lVHJhdmVsOiBUaW1lVHJhdmVscy50dDE4MiwgdHlwZTogVGltZVRyYXZlbFR5cGUuaW4gfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEwLzE5NTMgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDgsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xhdWRpYSB0dXRvcnMgSGVsZ2UnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NsYXVkaWEgdHV0b3JzIEhlbGdlLiBBZ25lcyB2aXNpdHMgVGllZGVtYW5uIGhvdXNlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmRvcmlzVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYWduZXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmdyZXRjaGVuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMC8xOTUzIDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA4LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBoaXRzIEhlbGdlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggbWVldHMgSmFuYSBhbmQgSW5lcyBpbiBILkcuVGFubmhhdXMgc2hvcC4gTGVhcm5zIGFib3V0IGRlYWQgYm9kaWVzLiBGb3JnZXRzIGhpcyBwaG9uZSBhbmQgcnVzaGVzIHRvIHBvbGljZSBzdGF0aW9uIGFuZCBsZWFybnMgYWJvdXQgRG9wcGxlcnMuIENhdGNoZXMgSGVsZ2UsIGhpdHMgaGltIGluIHRoZSBoZWFkIHdpdGggYSByb2NrIGFuZCBsZWF2ZXMgaGltIGluIHRoZSBidW5rZXIuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGdUYW5uaGF1cywgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmphbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMC8xOTUzIDEwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA4LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dyZXRjaGVuIHRpbWUgdHJhdmVscycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhdWRpYSB0YWtlcyBUcm9udGUgdG8gc2hvdyB0aGUgZm9yZXN0LiBIZWxnZSBhY2NvbXBhbmllcy4gU2VuZHMgR3JldGNoZW4gaW50byB0aGUgY2F2ZS4gT2xkIENsYXVkaWEgdGFrZXMgR3JldGNoZW4gdG8gMTk4Ni4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZ3JldGNoZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzEwLzE5NTMgMTA6MDA6MDBcIikuZ2V0VGltZSgpLCAvL1RPRE9cclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA4LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxzIH0gZnJvbSBcIi4uL3RpbWVUcmF2ZWxzXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsVHlwZVwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlVGltZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZXBpc29kZVRpbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcGlzb2RlOSBleHRlbmRzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBnZXRFdmVudHMoKTogRGFya0V2ZW50W10ge1xyXG4gICAgICAgIGxldCBldmVudHM6IERhcmtFdmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBlcGlzb2RlRnJhbWUgPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsZ2UgbWlzc2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmVybmQgcmVwb3J0cyBtaXNzaW5nIEhlbGdlIHRvIHBvbGljZS4gTm9haCB2aXNpdHMgRG9wcGxlcnMuIEVnb24gYXJyZXN0cyBVbHJpY2guJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5iZXJuZERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5ub2FoLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMTk1MyAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggaXMgcmVsZWFzZWQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0J5IEthdGFyaW5hYHMgc3RhdGVtZW50cywgVWxyaWNoIGlzIHJlbGVhc2VkLiBIYW5uYWggbGllcyB0byBLYXRhcmluYSB0aGF0IGl0IHdhcyBSZWdpbmEgd2hvIGZyYW1lZCBVbHJpY2guJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xhdWRpYSBmaW5kcyBHcmV0Y2hlbicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhdWRpYSBnb2VzIHRvIGJhcnJlbHMgdG8gdGFrZSBhIHBpY3R1cmUuIE9sZCBDbGF1ZGlhIGxlYXZlcyBHcmV0Y2hlbiBoZXJlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZ3JldGNoZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sIC8vVE9ET1xyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FsZWtzYW5kZXIgcHJvdGVjdHMgUmVnaW5hJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdLYXRhcmluYSBmaWdodHMgUmVnaW5hLiBBbGVrc2FuZGVyIGNvbWVzIGZvciBwcm90ZWN0aW9uLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMTM6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xhdWRpYSB0YWxrcyB0byBCZXJuZCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jbGF1ZGlhVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuYmVybmREb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMTk4NiAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSBkb2VzbnQgcmVwb3J0IHRvIEVnb24nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbGdlIGhpZGVzIGZyb20gRWdvbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMTk4NiAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOb2FoIGFuZCBIZWxnZSB3b3JrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOb2FoIGFuZCBIZWxnZSB3b3JrIG9uIHRoZSBidW5rZXIgdGltZSBtYWNoaW5lLiBJdCBmYWlsZWQgb24gdGhlIHByZXZpb3VzIHRyeS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzE5ODYgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWFnbnVzIGdpdmVzIHRoZSBwZW5kYW50IHRvIEZyYW56aXNrYScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFnbnVzIGdpdmVzIHRoZSBwZW5kYW50IHRvIEZyYW56aXNrYScsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWFnbnVzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmZyYW56aXNrYURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVWxyaWNoIGlzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0thdGFyaW5hIG5vdGljZXMgVWxyaWNoIGlzIG1pc3NpbmcuIEFza3MgQ2hhcmxvdHRlLiBGaWdodHMgd2l0aCBIYW5uYWguIEhhbm5haCBzaG93cyBBbGVrc2FuZGVyIHRoYXQgc2hlIGhhcyBwcm9vZiBvZiBoaXMgcGFzdC4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xhdWRpYSBtZWV0cyBCYXJ0b3N6JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbGF1ZGlhIGdpdmVzIGEgbGV0dGVyIHRvIEJhcnRvc3ogdG8gZ2l2ZSB0byBoaXMgbW9tLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDE1OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hcnRoYSBraXNzZXMgSm9uYXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIGF2b2lkcyBNYXJ0aGEuIE1hcnRoYSBjb25mcm9udHMgSm9uYXMuIEhlIHdhbGtzIGF3YXkuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMjAxOSAxNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCYXJ0b3N6IG1lZXRzIE5vYWggYWdhaW4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMTk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDksICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVnaW5hIGZpbmRzIFN0cmFuZ2VyIEpvbmFzIHRoaW5ncycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8yMDE5IDE5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgZ2l2ZXMgam9iIGZvciBBbGVrc2FuZGVyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8xMS8xOTg2IDE5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIHJlZmlsbHMgQ2Flc2l1bS0xMzcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzExLzIwMTkgMTk6MDA6MDBcIikuZ2V0VGltZSgpLCAvL1RPRE8gaGUgY2FtZSB0byAyMDE5IHRha2VzIENlc2l1bSBhbmQgbGVhdmVzIHRvIDE5ODNcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA5LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NsYXVkaWEgbWVldHMgVGFubmhhdXMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NsYXVkaWEgZ2l2ZSBibHVlcHJpbnQgb2YgVGFubmhhdXMgbWFjaGluZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGdUYW5uaGF1cywgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMTEvMTk1MyAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgOSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGltZVRyYXZlbCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy90aW1lVHJhdmVsXCI7XHJcbmltcG9ydCB7IFRpbWVMaW5lIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lTGluZVwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsRGV2aWNlIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnNcIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVRyYXZlbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyB0dDExMTogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICB0bzogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmJ1bmtlckRldmljZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5tYWRzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MTEyOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxNTE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0dDE2MTogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICB0bzogVGltZUxpbmUudDE5ODYsXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmNhdmUsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MTcxOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxODE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0dDE4MjogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICB0bzogVGltZUxpbmUudDE5NTMsXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLmNhdmUsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MWExOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxYTI6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDE5NTMsXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS50YW5uaGF1c0RldmljZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0dDFhMzogVGltZVRyYXZlbCA9IHtcclxuICAgICAgICBmcm9tOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICB0bzogVGltZUxpbmUudDIwNTIsXHJcbiAgICAgICAgZGV2aWNlOiBUaW1lVHJhdmVsRGV2aWNlLnRhbm5oYXVzRGV2aWNlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvSlF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tICcuL21vZGVscy9jb25zdGFudHMvZGFya1BlcnNvbnMnO1xyXG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuL3RpbWVsaW5lL2V2ZW50cyc7XHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi90aW1lbGluZS9wb3B1cCc7XHJcbmltcG9ydCB7IEV2ZW50UmVuZGVyZXIgfSBmcm9tICcuL3RpbWVsaW5lL2V2ZW50UmVuZGVyZXInO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgc2hvd0V2ZW50RGV0YWlsczogYW55O1xyXG4gICAgc2hvd1BlcnNvbkRldGFpbHM6IGFueTtcclxuICAgIGNoYW5nZVRpbWU6IGFueTtcclxuICB9XHJcbn1cclxuXHJcbkV2ZW50cy5pbml0aWFsaXplKCk7XHJcblBvcHVwLmRlZmluZVBvcHVwRnVuY3Rpb25zKCk7XHJcblxyXG53aW5kb3cuY2hhbmdlVGltZSA9IGZ1bmN0aW9uIChvcmRlcjogc3RyaW5nKSB7XHJcbiAgaWYgKG9yZGVyID09PSAnd29ybGQnKSB7XHJcbiAgICBFdmVudFJlbmRlcmVyLndvcmxkVGltZWxpbmUoKTtcclxuICB9IGVsc2UgaWYgKG9yZGVyID09PSAnbWlra2VsJykge1xyXG4gICAgRXZlbnRSZW5kZXJlci5wZXJzb25UaW1lbGluZShEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuKTtcclxuICB9IGVsc2UgaWYgKG9yZGVyID09PSAnam9uYXMnKSB7XHJcbiAgICBFdmVudFJlbmRlcmVyLnBlcnNvblRpbWVsaW5lKERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmNoYW5nZVRpbWUoJ3dvcmxkJyk7IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgRGFya0ZhbWlseSB9IGZyb20gXCIuL2VudW0vZGFya0ZhbWlseVwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29uUGhvdG8gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9kYXJrUGVyc29uUGhvdG9cIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGFya1BlcnNvbnMge1xyXG5cclxuICAgIHN0YXRpYyB1bmtub3duUGVyc29uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVW5rbm93blwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInVua25vd25wZXJzb25cIiwgW0FnZUdyb3VwLnlvdW5nXSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBVbmtub3duIGZhbWlsaWVzIFxyXG5cclxuICAgIHN0YXRpYyBncmV0Y2hlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkdyZXRjaGVuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZ3JldGNoZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiZXJuYWRldHRlOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmVybmFkZXR0ZVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJlcm5hZGV0dGVcIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9yYmVuV29sbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVG9yYmVuIFdvbGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Xb2xsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidG9yYmVud29sbGVyXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNpbGphOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2lsamFcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJzaWxqYVwiLCBbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1c2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdXNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVzZW5cIiwgW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2ViYXN0aWFuS3J1Z2VyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiU2ViYXN0aWFuIEtydWdlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LcnVnZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwic2ViYXN0aWFua3J1Z2VyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGdUYW5uaGF1czogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkguRy4gVGFubmhhdXNcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoZ3Rhbm5oYXVzXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMganVyZ2VuT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKw7xyZ2VuIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk9iZW5kb3JmLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImp1cmdlbm9iZW5kb3JmXCIsIFtBZ2VHcm91cC5hZHVsdF0pLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVyaWtPYmVuZG9yZjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkVyaWsgT2JlbmRvcmZcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuT2JlbmRvcmYsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZXJpa29iZW5kb3JmXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5qdXJnZW5PYmVuZG9yZixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB5YXNpbkZyaWVzZTogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIllhc2luIEZyaWVzZVwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Gcmllc2UsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwieWFzaW5mcmllc2VcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIE5pZWxzZW4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGFnbmVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFnbmVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJhZ25lc25pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub2FoOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTm9haFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm5vYWhcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBhbHROYW1lOiBbXCJIYW5ubyBOb2FoIFRhdWJlclwiXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cm9udGVOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiVHJvbnRlIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ0cm9udGVuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5hZ25lc05pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgamFuYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKYW5hIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqYW5hbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVscmljaE5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJVbHJpY2ggTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInVscmljaG5pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnRyb250ZU5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWRzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZHMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hZHNuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMga2F0YXJpbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiS2F0YXJpbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImthdGFyaW5hbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hZ251c05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYWdudXMgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hZ251c25pZWxzZW5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFydGhhTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hcnRoYSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWFydGhhbmllbHNlblwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtaWtrZWxOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWlra2VsIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtaWtrZWxuaWVsc2VuXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLFxyXG4gICAgICAgIGFsdE5hbWU6IFtcIk1pY2hhZWwgS2hhbndhbGRcIl1cclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBLYWhud2FsZCBGYW1pbHlcclxuXHJcbiAgICBzdGF0aWMgZGFuaWVsS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJEYW5pZWwgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZGFuaWVsa2FobndhbGRcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmVzS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJJbmVzIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImluZXNrYWhud2FsZFwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWljaGFlbEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWljaGFlbCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtaWNoYWVsa2FobndhbGRcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmluZXNLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5uYWhLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhhbm5haCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoYW5uYWhrYWhud2FsZFwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuc2ViYXN0aWFuS3J1Z2VyLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGpvbmFzS2FobndhbGQ6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKb25hcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqb25hc2thaG53YWxkXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5taWNoYWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIERvcHBsZXIgRmFtaWx5ICAgIFxyXG5cclxuICAgIHN0YXRpYyBiZXJuZERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuZCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmRkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ3JldGFEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiR3JldGEgRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImdyZXRhZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbGdlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkhlbGdlIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJoZWxnZWRvcHBsZXJcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmJlcm5kRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmdyZXRhRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwZXRlckRvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJQZXRlciBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwicGV0ZXJkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhcmxvdHRlRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkNoYXJsb3R0ZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiY2hhcmxvdHRlZG9wcGxlclwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMubm9haCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcmFuemlza2FEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRnJhbnppc2thIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJmcmFuemlza2Fkb3BwbGVyXCIsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVsaXNhYmV0aERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFbGlzYWJldGggRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImVsaXNhYmV0aGRvcHBsZXJcIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnBldGVyRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXJcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBUaWVkZW1hbm4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGVnb25UaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFZ29uIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZWdvbnRpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvcmlzVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRG9yaXMgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJkb3Jpc3RpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVkaWFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1ZGlhIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiY2xhdWRpYXRpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmRvcmlzVGllZGVtYW5uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2luYVRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlJlZ2luYSBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInJlZ2luYXRpZWRlbWFublwiLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFublxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbGVrc2FuZGVyVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQWxla3NhbmRlciBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImFsZWtzYW5kZXJ0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXJ0b3N6VGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmFydG9zeiBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJhcnRvc3p0aWVkZW1hbm5cIiwgdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGVudW0gQWdlR3JvdXAge1xyXG4gICAgeW91bmcgPSBcIllvdW5nXCIsXHJcbiAgICBhZHVsdCA9IFwiQWR1bHRcIixcclxuICAgIG9sZCA9IFwiT2xkXCJcclxufSIsImV4cG9ydCBlbnVtIERhcmtGYW1pbHkge1xyXG4gICAgTmllbHNlbiA9IFwiTmllbHNlblwiLFxyXG4gICAgS2FobndhbGQgPSBcIkthaG53YWxkXCIsXHJcbiAgICBUaWVkZW1hbm4gPSBcIlRpZWRlbWFublwiLFxyXG4gICAgRG9wcGxlciA9IFwiRG9wcGxlclwiLFxyXG4gICAgVW5rbm93biA9IFwiVW5rbm93blwiLFxyXG4gICAgT2JlbmRvcmYgPSBcIk9iZW5kb3JmXCIsXHJcbiAgICBGcmllc2UgPSBcIkZyaWVzZVwiLFxyXG4gICAgS3J1Z2VyID0gXCJLcnVnZXJcIixcclxuICAgIFdvbGxlciA9IFwiV29sbGVyXCJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVMaW5lIHtcclxuICAgIHQxOTIwLFxyXG4gICAgdDE5NTMsXHJcbiAgICB0MTk4NixcclxuICAgIHQyMDE5LFxyXG4gICAgdDIwNTJcclxufSIsImV4cG9ydCBlbnVtIFRpbWVUcmF2ZWxEZXZpY2Uge1xyXG4gICAgdDE5MjBEZXZpY2UsXHJcbiAgICBjYXZlLFxyXG4gICAgdGFubmhhdXNEZXZpY2UsXHJcbiAgICBhbHRNYXJ0aGFEZXZpY2UsXHJcbiAgICBwb3dlclBsYW50LFxyXG4gICAgYnVua2VyRGV2aWNlXHJcbn0iLCJleHBvcnQgZW51bSBUaW1lVHJhdmVsVHlwZSB7XHJcbiAgICBpbixcclxuICAgIG91dFxyXG59IiwiZXhwb3J0IGNsYXNzIEVwaXNvZGVUaW1lIHtcclxuICAgIHNlYXNvbjogbnVtYmVyID0gMDtcclxuICAgIGVwaXNvZGU6IG51bWJlciA9IDA7XHJcbiAgICBmcmFtZTogbnVtYmVyID0gMDtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKHNlYXNvbjogbnVtYmVyLCBlcGlzb2RlOiBudW1iZXIsIGZyYW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlYXNvbiA9IHNlYXNvbjtcclxuICAgICAgICB0aGlzLmVwaXNvZGUgPSBlcGlzb2RlO1xyXG4gICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcclxuICAgICAgICB0aGlzLm51bWJlciA9IHNlYXNvbiAqIDEwMDAwMDAgKyBlcGlzb2RlICogMTAwMCArIGZyYW1lO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuL2RhcmtQZXJzb25cIjtcclxuaW1wb3J0IHsgQWdlR3JvdXAgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXJrUGVyc29uUGhvdG8ge1xyXG4gICAgeW91bmc6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBhZHVsdDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIG9sZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwZXJzb24gOiBzdHJpbmcsIGFnZUdyb3VwczogQWdlR3JvdXBbXXx1bmRlZmluZWQpe1xyXG4gICAgICAgIGlmKGFnZUdyb3VwcyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnlvdW5nID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycwLmpwZyc7XHJcbiAgICAgICAgICAgIHRoaXMuYWR1bHQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzEuanBnJztcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzIuanBnJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy55b3VuZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5hZHVsdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmKGFnZUdyb3Vwcy5pbmNsdWRlcyhBZ2VHcm91cC55b3VuZykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy55b3VuZyA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMC5qcGcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGFnZUdyb3Vwcy5pbmNsdWRlcyhBZ2VHcm91cC5hZHVsdCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHVsdCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMS5qcGcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGFnZUdyb3Vwcy5pbmNsdWRlcyhBZ2VHcm91cC5vbGQpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycyLmpwZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvblwiO1xyXG5pbXBvcnQgeyBEYXJrRXZlbnQgfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRSZW5kZXJlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3b3JsZFRpbWVsaW5lKCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZEV2ZW50cyA9IEV2ZW50cy5nZXRFdmVudHMoKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYS53b3JsZFRpbWVJbk1pbGxpcyA+PSBiLndvcmxkVGltZUluTWlsbGlzKSA/IDEgOiAtMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgZmlsdGVyZWRFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgICAgIGxldCBtb250aEFuZFllYXIgPSBcIm15X1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKSArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQoXCIjXCIgKyBtb250aEFuZFllYXIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmFwcGVuZChQYXJzZXIuZ2V0TW9udGhBbmRZZWFySHRtbChldmVudCkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQoXCIjXCIgKyBkYXRlKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldERhdGVIdG1sKGV2ZW50KSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGRhdGUpLmFwcGVuZChQYXJzZXIuZ2V0RXZlbnRIdG1sKGV2ZW50KSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwZXJzb25UaW1lbGluZShkYXJrUGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkRXZlbnRzID0gRXZlbnRzLmdldEV2ZW50cygpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChhLndvcmxkVGltZUluTWlsbGlzID49IGIud29ybGRUaW1lSW5NaWxsaXMpID8gMSA6IC0xXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJlZEV2ZW50czE6IERhcmtFdmVudFtdID0gZmlsdGVyZWRFdmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaEl0ZW0gPSB7IHBlcnNvbjogZGFya1BlcnNvbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfTtcclxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzU2FtZVBlcnNvbihldmVudC5wZXJzb25zLCBzZWFyY2hJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZEV2ZW50czI6IERhcmtFdmVudFtdID0gRXZlbnRzLmdldEV2ZW50cygpLmZpbHRlcihldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hJdGVtID0geyBwZXJzb246IGRhcmtQZXJzb24sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH07XHJcbiAgICAgICAgICAgIGlmIChVdGlscy5pc1NhbWVQZXJzb24oZXZlbnQucGVyc29ucywgc2VhcmNoSXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmlsdGVyZWRFdmVudHMzOiBEYXJrRXZlbnRbXSA9IEV2ZW50cy5nZXRFdmVudHMoKS5maWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VhcmNoSXRlbSA9IHsgcGVyc29uOiBkYXJrUGVyc29uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfTtcclxuICAgICAgICAgICAgaWYgKFV0aWxzLmlzU2FtZVBlcnNvbihldmVudC5wZXJzb25zLCBzZWFyY2hJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3NvcnQgZWFjaFxyXG4gICAgICAgIC8vVE9ET1xyXG5cclxuICAgICAgICBmaWx0ZXJlZEV2ZW50cyA9IFtdO1xyXG4gICAgICAgIGZpbHRlcmVkRXZlbnRzID0gZmlsdGVyZWRFdmVudHMuY29uY2F0KGZpbHRlcmVkRXZlbnRzMSk7XHJcbiAgICAgICAgZmlsdGVyZWRFdmVudHMgPSBmaWx0ZXJlZEV2ZW50cy5jb25jYXQoZmlsdGVyZWRFdmVudHMyKTtcclxuICAgICAgICBmaWx0ZXJlZEV2ZW50cyA9IGZpbHRlcmVkRXZlbnRzLmNvbmNhdChmaWx0ZXJlZEV2ZW50czMpO1xyXG5cclxuXHJcbiAgICAgICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGxldCBwcmV2RGF0ZSA9ICcnO1xyXG4gICAgICAgIGxldCBwcmV2SSA9IDA7XHJcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcclxuICAgICAgICBmaWx0ZXJlZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaXRlcmF0b3IgPSBpdGVyYXRvciArIDE7XHJcbiAgICAgICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcbiAgICAgICAgICAgIGxldCBzdWZmaXggPSBpdGVyYXRvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2RGF0ZSA9PSBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBwcmV2STtcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBkYXRlICsgJycgKyBzdWZmaXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2RGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgICBwcmV2SSA9IGl0ZXJhdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IGl0ZXJhdG9yO1xyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUgKyAnJyArIHN1ZmZpeDtcclxuICAgICAgICAgICAgICAgICQoJyNkYXJrLWNvbnRhaW5lciAudGltZWxpbmUnKS5hcHBlbmQoUGFyc2VyLmdldERhdGVIdG1sMihldmVudCwgZGF0ZSkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBkYXRlKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50SHRtbChldmVudCkpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRXBpc29kZTEgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTFcIjtcclxuaW1wb3J0IHsgRXBpc29kZTIgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTJcIjtcclxuaW1wb3J0IHsgRXBpc29kZTMgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTNcIjtcclxuaW1wb3J0IHsgRXBpc29kZTQgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTRcIjtcclxuaW1wb3J0IHsgRXBpc29kZTUgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTVcIjtcclxuaW1wb3J0IHsgRXBpc29kZTYgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTZcIjtcclxuaW1wb3J0IHsgRXBpc29kZTcgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTdcIjtcclxuaW1wb3J0IHsgRXBpc29kZTggfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZThcIjtcclxuaW1wb3J0IHsgRXBpc29kZTkgfSBmcm9tIFwiLi4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTlcIjtcclxuaW1wb3J0IHsgRXBpc29kZTEwIH0gZnJvbSBcIi4uL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxMFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBzdGF0aWMgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlMSkuZ2V0RXZlbnRzKCkpO1xyXG4gICAgICAgIEV2ZW50cy5ldmVudHMgPSBFdmVudHMuZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGUyKS5nZXRFdmVudHMoKSk7XHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTMpLmdldEV2ZW50cygpKTtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlNCkuZ2V0RXZlbnRzKCkpO1xyXG4gICAgICAgIEV2ZW50cy5ldmVudHMgPSBFdmVudHMuZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGU1KS5nZXRFdmVudHMoKSk7XHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTYpLmdldEV2ZW50cygpKTtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlNykuZ2V0RXZlbnRzKCkpO1xyXG4gICAgICAgIEV2ZW50cy5ldmVudHMgPSBFdmVudHMuZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGU4KS5nZXRFdmVudHMoKSk7XHJcbiAgICAgICAgRXZlbnRzLmV2ZW50cyA9IEV2ZW50cy5ldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTkpLmdldEV2ZW50cygpKTtcclxuICAgICAgICBFdmVudHMuZXZlbnRzID0gRXZlbnRzLmV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlMTApLmdldEV2ZW50cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gRXZlbnRzLmV2ZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbkluRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25JbmRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsIH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbEluRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxJbkRhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcblxyXG4gICAgc3RhdGljIG1vbnRoTmFtZXMgPSBbXHJcbiAgICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICAgIFwiTWFyY2hcIixcclxuICAgICAgICBcIkFwcmlsXCIsXHJcbiAgICAgICAgXCJNYXlcIixcclxuICAgICAgICBcIkp1bmVcIixcclxuICAgICAgICBcIkp1bHlcIixcclxuICAgICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICAgIFwiRGVjZW1iZXJcIlxyXG4gICAgXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0RGF0ZUh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB8IEVsZW1lbnQgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+IHwgRG9jdW1lbnRGcmFnbWVudCB8IChFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudClbXSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3RpbWVsaW5lLXNlY3Rpb24nPlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGNsYXNzPSd0aW1lbGluZS1kYXRlJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgJSVEQVRFU1RSJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgaWQ9JyUlREFURSUlJyBjbGFzcz0ncm93Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcbiAgICAgICAgbGV0IGRhdGVTdHIgPSBQYXJzZXIubW9udGhOYW1lc1t3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpXSArIFwiIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyBcIiwgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVEQVRFU1RSJSVcIiwgZGF0ZVN0cik7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURBVEUlJVwiLCBkYXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgaHRtbCBcIiArIHJldHVyblN0cik7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXREYXRlSHRtbDIoZXZlbnQ6IERhcmtFdmVudCwgZGF0ZXZhcjogc3RyaW5nKTogc3RyaW5nIHwgRWxlbWVudCB8IEpRdWVyeTxIVE1MRWxlbWVudD4gfCBEb2N1bWVudEZyYWdtZW50IHwgKEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50KVtdIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ndGltZWxpbmUtc2VjdGlvbic+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgY2xhc3M9J3RpbWVsaW5lLWRhdGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAlJURBVEVTVFIlJVwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBpZD0nJSVEQVRFJSUnIGNsYXNzPSdyb3cnPlwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgbGV0IHdvcmxkVGltZUluTWlsbGlzOiBEYXRlID0gbmV3IERhdGUoZXZlbnQud29ybGRUaW1lSW5NaWxsaXMpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXIgPSBcIm15X1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKSArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBcImRhdGVfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkgKyBcIl9cIiArIG1vbnRoQW5kWWVhcjtcclxuICAgICAgICBsZXQgZGF0ZVN0ciA9IFBhcnNlci5tb250aE5hbWVzW3dvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCldICsgXCIgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkudG9TdHJpbmcoKSArIFwiLCBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURBVEVTVFIlJVwiLCBkYXRlU3RyKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREFURSUlXCIsIGRhdGV2YXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldE1vbnRoQW5kWWVhckh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgaWQ9JyUlSUQlJScgY2xhc3M9J3RpbWVsaW5lLW1vbnRoJz5cIiArXHJcbiAgICAgICAgICAgIFwiJSVNT05USEFORFlFQVIlJVwiICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyU3RyID0gUGFyc2VyLm1vbnRoTmFtZXNbd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKV0gKyBcIiwgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVNT05USEFORFlFQVIlJVwiLCBtb250aEFuZFllYXJTdHIpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJRCUlXCIsIG1vbnRoQW5kWWVhcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50SHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nY29sLXNtLTQnPlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGNsYXNzPSd0aW1lbGluZS1ib3gnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LXRpdGxlJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICA8ZGl2IGNsYXNzPSdkaXYtZWxsaXBzaXMnPiAlJVRJVExFJSUgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgPGRpdj4gPGEgY2xhc3M9J2J0biBidG4teHMgYnRuLWRlZmF1bHQgcHVsbC1yaWdodCcgb25jbGljaz0nc2hvd0V2ZW50RGV0YWlscyhcIiArIGV2ZW50LmVwaXNvZGVUaW1lLm51bWJlciArIFwiKSc+IERldGFpbHMgPC9hPiA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LWNvbnRlbnQnIHN0eWxlPSdoZWlnaHQ6MTAwcHgnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxkaXYgY2xhc3M9J2JveC1pdGVtJz4gJSVERVNDUklQVElPTiUlIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAlJVRJTUVUUkFWRUxTJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDxkaXYgY2xhc3M9J2JveC1mb290ZXInPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVUSVRMRSUlXCIsIGV2ZW50LnRpdGxlKTtcclxuICAgICAgICBsZXQgZGVzID0gZXZlbnQuZGVzY3JpcHRpb247XHJcbiAgICAgICAgaWYgKGRlcy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgZGVzID0gZGVzLnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURFU0NSSVBUSU9OJSVcIiwgZGVzKTtcclxuICAgICAgICBsZXQgdGltZVRyYXZlbHMgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGltZVRyYXZlbHMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGltZVRyYXZlbHMuZm9yRWFjaCh0aW1lVHJhdmVsID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWVUcmF2ZWxzID0gdGltZVRyYXZlbHMgKyBQYXJzZXIuZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElNRVRSQVZFTFMlJVwiLCB0aW1lVHJhdmVscyk7XHJcbiAgICAgICAgbGV0IHBlcnNvbnMgPSAnJztcclxuICAgICAgICBldmVudC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbDogVGltZVRyYXZlbEluRGFya0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9JyUlQ0xBU1MlJScgPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIHRpbWVUcmF2ZWwudGltZVRyYXZlbC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgaWYgKHRpbWVUcmF2ZWwudHlwZSA9PSBUaW1lVHJhdmVsVHlwZS5pbikge1xyXG4gICAgICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlQ0xBU1MlJVwiLCAnYm94LWZvb3Rlci10aW1lLWluJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUNMQVNTJSVcIiwgJ2JveC1mb290ZXItdGltZS1vdXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSHRtbChwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPSdcIiArIFBhcnNlci5nZXRQZXJzb25JbWFnZShwZXJzb24pICsgXCInIHN0eWxlPSdjdXJzb3I6cG9pbnRlcjtib3JkZXI6IHNvbGlkIDFweCAjNGRiYWRjO3BhZGRpbmc6IDFweDt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ucGVyc29uLm5hbWUgKyBcIicgb25jbGljaz0nc2hvd1BlcnNvbkRldGFpbHMoXCIgKyBKU09OLnN0cmluZ2lmeShwZXJzb24ucGVyc29uKSArIFwiKSc+IFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJzb25IdG1sMihwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPSdcIiArIFBhcnNlci5nZXRQZXJzb25JbWFnZShwZXJzb24pICsgXCInIHN0eWxlPSdib3JkZXI6IHNvbGlkIDFweCAjNGRiYWRjO3BhZGRpbmc6IDFweDt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ucGVyc29uLm5hbWUgKyBcIicgPiBcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSW1hZ2UocGVyc29uOiBEYXJrUGVyc29uSW5EYXJrRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChwZXJzb24ucGVyc29uVGltZSA9PSBBZ2VHcm91cC55b3VuZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBlcnNvbi5waG90b3MueW91bmchO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGVyc29uLnBlcnNvblRpbWUgPT0gQWdlR3JvdXAuYWR1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbi5wZXJzb24ucGhvdG9zLmFkdWx0ITtcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcnNvbi5wZXJzb25UaW1lID09IEFnZUdyb3VwLm9sZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBlcnNvbi5waG90b3Mub2xkITtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9wZXJzb25zL3Vua25vd25QZXJzb24wLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnRNb2RhbEh0bWwoZXZlbnQ6IERhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9ICcnICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPicgK1xyXG4gICAgICAgICAgICAnICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4lJVRJVExFJSU8L2g1PicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8cD4lJUJPRFklJTwvcD4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVRJVExFJSVcIiwgZXZlbnQudGl0bGUpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVCT0RZJSVcIiwgZXZlbnQuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGVyc29uTW9kYWxIdG1sKHBlcnNvbjogRGFya1BlcnNvbik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9ICcnICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPicgK1xyXG4gICAgICAgICAgICAnICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4lJVRJVExFJSU8L2g1PicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICUlSU1HMCUlJyArXHJcbiAgICAgICAgICAgICcgICAgICAlJUlNRzElJScgK1xyXG4gICAgICAgICAgICAnICAgICAgJSVJTUcyJSUnICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8cD4lJUJPRFklJTwvcD4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJVRJVExFJSVcIiwgcGVyc29uLm5hbWUpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVJTUcwJSVcIiwgUGFyc2VyLmdldFBlcnNvbkh0bWwyKHsgcGVyc29uOiBwZXJzb24sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0pKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlSU1HMSUlXCIsIFBhcnNlci5nZXRQZXJzb25IdG1sMih7IHBlcnNvbjogcGVyc29uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9KSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUlNRzIlJVwiLCBQYXJzZXIuZ2V0UGVyc29uSHRtbDIoeyBwZXJzb246IHBlcnNvbiwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH0pKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlQk9EWSUlXCIsIHBlcnNvbi5mYW1pbHkgKyAnPGJyPicgKyBwZXJzb24uZmF0aGVyPy5uYW1lICsgJzxicj4nICsgcGVyc29uLm1vdGhlcj8ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZmluZVBvcHVwRnVuY3Rpb25zKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cuc2hvd0V2ZW50RGV0YWlscyA9IGZ1bmN0aW9uIChlcGlzb2RlVGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBFdmVudHMuZ2V0RXZlbnRzKCkuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5lcGlzb2RlVGltZS5udW1iZXIgPT09IGVwaXNvZGVUaW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmFwcGVuZChQYXJzZXIuZ2V0RXZlbnRNb2RhbEh0bWwocmVzWzBdKSk7XHJcbiAgICAgICAgICAgICQoJyNkYXJrLWV2ZW50LW1vZGFsIC5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuc2hvd1BlcnNvbkRldGFpbHMgPSBmdW5jdGlvbiAocGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgICAgICAgICAgICQoJyNkYXJrLWV2ZW50LW1vZGFsJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5hcHBlbmQoUGFyc2VyLmdldFBlcnNvbk1vZGFsSHRtbChwZXJzb24pKTtcclxuICAgICAgICAgICAgJCgnI2RhcmstZXZlbnQtbW9kYWwgLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhcmtQZXJzb25JbkRhcmtFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uSW5kYXJrRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1NhbWVQZXJzb24ocGVyc29uczogRGFya1BlcnNvbkluRGFya0V2ZW50W10sIHNlYXJjaEl0ZW06IERhcmtQZXJzb25JbkRhcmtFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXMgPSBwZXJzb25zLmZpbHRlcihwZXJzb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyc29uLnBlcnNvbiA9PSBzZWFyY2hJdGVtLnBlcnNvbiAmJiBwZXJzb24ucGVyc29uVGltZSA9PSBzZWFyY2hJdGVtLnBlcnNvblRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==