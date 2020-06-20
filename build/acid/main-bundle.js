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
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode1 extends events_1.EventsProvider {
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
            timeTravels: [{ timeTravel: timeTravels_1.TimeTravels.tt111, type: timeTravelType_1.TimeTravelType.in },
                { timeTravel: timeTravels_1.TimeTravels.tt112, type: timeTravelType_1.TimeTravelType.out }],
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
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode2 extends events_1.EventsProvider {
    getEvents() {
        let events = [];
        let episodeFrame = 0;
        events.push({
            title: 'Jonas',
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
const events_1 = __webpack_require__(/*! ../events */ "./ts/src/events/events.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode3 extends events_1.EventsProvider {
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
const events_1 = __webpack_require__(/*! ../events */ "./ts/src/events/events.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode4 extends events_1.EventsProvider {
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
const events_1 = __webpack_require__(/*! ../events */ "./ts/src/events/events.ts");
const darkPersons_1 = __webpack_require__(/*! ../../models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ../../models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const timeTravels_1 = __webpack_require__(/*! ../timeTravels */ "./ts/src/events/timeTravels.ts");
const timeTravelType_1 = __webpack_require__(/*! ../../models/constants/enum/timeTravelType */ "./ts/src/models/constants/enum/timeTravelType.ts");
const episodeTime_1 = __webpack_require__(/*! ../../models/episodeTime */ "./ts/src/models/episodeTime.ts");
class Episode5 extends events_1.EventsProvider {
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
TimeTravels.tt151 = {
    from: timeLine_1.TimeLine.t2019,
    to: timeLine_1.TimeLine.t1986,
    device: timeTravelDevice_1.TimeTravelDevice.cave,
    location: '',
    persons: [{ person: darkPersons_1.DarkPersons.jonasKahnwald, personTime: ageGroup_1.AgeGroup.adult }]
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
const darkPersons_1 = __webpack_require__(/*! ./models/constants/darkPersons */ "./ts/src/models/constants/darkPersons.ts");
const ageGroup_1 = __webpack_require__(/*! ./models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
const episode3_1 = __webpack_require__(/*! ./events/season1/episode3 */ "./ts/src/events/season1/episode3.ts");
const episode4_1 = __webpack_require__(/*! ./events/season1/episode4 */ "./ts/src/events/season1/episode4.ts");
const episode5_1 = __webpack_require__(/*! ./events/season1/episode5 */ "./ts/src/events/season1/episode5.ts");
let events = [];
events = events.concat((new episode1_1.Episode1).getEvents());
events = events.concat((new episode2_1.Episode2).getEvents());
events = events.concat((new episode3_1.Episode3).getEvents());
events = events.concat((new episode4_1.Episode4).getEvents());
events = events.concat((new episode5_1.Episode5).getEvents());
window.showEventDetails = function (episodeTime) {
    let res = events.filter(event => {
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
function isSamePerson(persons, searchItem) {
    let res = persons.filter(person => {
        if (person.person == searchItem.person && person.personTime == searchItem.personTime) {
            return true;
        }
        return false;
    });
    return res.length > 0;
}
window.changeTime = function (order) {
    let filteredEvents = [];
    if (order === 'world') {
        filteredEvents = events.sort((a, b) => {
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
    else if (order === 'mikkel') {
        personTimeline(darkPersons_1.DarkPersons.mikkelNielsen);
    }
    else if (order === 'jonas') {
        personTimeline(darkPersons_1.DarkPersons.jonasKahnwald);
    }
};
function personTimeline(darkPerson) {
    let filteredEvents = events.sort((a, b) => {
        return (a.worldTimeInMillis >= b.worldTimeInMillis) ? 1 : -1;
    });
    let filteredEvents1 = filteredEvents.filter(event => {
        let searchItem = { person: darkPerson, personTime: ageGroup_1.AgeGroup.young };
        if (isSamePerson(event.persons, searchItem)) {
            return true;
        }
        return false;
    });
    let filteredEvents2 = events.filter(event => {
        let searchItem = { person: darkPerson, personTime: ageGroup_1.AgeGroup.adult };
        if (isSamePerson(event.persons, searchItem)) {
            return true;
        }
        return false;
    });
    let filteredEvents3 = events.filter(event => {
        let searchItem = { person: darkPerson, personTime: ageGroup_1.AgeGroup.old };
        if (isSamePerson(event.persons, searchItem)) {
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
const ageGroup_1 = __webpack_require__(/*! ./models/constants/enum/ageGroup */ "./ts/src/models/constants/enum/ageGroup.ts");
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
            "           <i class='fa fa-asterisk text-success' aria - hidden='true' > </i>" +
            "           %%TITLE%%" +
            "           <a class='btn btn-xs btn-default pull-right' onclick='showEventDetails(" + event.episodeTime.number + ")'> Details </a>" +
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
        return "<img src='" + Parser.getPersonImage(person) + "' style='border: solid 1px #4dbadc;padding: 1px;width: 50px;height: 50px;' title='" + person.person.name + "' onclick='showPersonDetails(" + JSON.stringify(person.person) + ")'> ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMi50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3NlYXNvbjEvZXBpc29kZTMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL2V2ZW50cy9zZWFzb24xL2VwaXNvZGU0LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvZXZlbnRzL3RpbWVUcmF2ZWxzLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS9kYXJrRmFtaWx5LnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZUxpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9jb25zdGFudHMvZW51bS90aW1lVHJhdmVsRGV2aWNlLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc3JjL21vZGVscy9lcGlzb2RlVGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9zcmMvbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvblBob3RvLnRzIiwid2VicGFjazovLy8uL3RzL3NyYy9wYXJzZXIudHMiXSwi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Q1QsVUFBVTtJQUNWLE9BQU87SUFDUCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7Q0FDYixDQUFDIiwiZmlsZSI6ImFjaWQvbWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50c1Byb3ZpZGVyIHtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFdmVudHMoKTogRGFya0V2ZW50W11cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTEgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pY2hhZWwgY29tbWl0cyBzdWljaWRlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNaWNoYWVsIGNvbW1pdHMgc3VpY2lkZSBsZWF2aW5nIGJlaGluZCBhIGxldHRlciBgRG8gbm90IG9wZW4gYmVmb3JlIE5vdmVtYmVyIDQsIDEwOjEzIFBNYCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMDYvMjEvMjAxOSAxMzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIYW5uYWggZnVja3MgVWxyaWNoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB3YWtlcyBmcm9tIGEgbmlnaHRtYXJlIGFzIHVzdWFsLiBIYW5uYWggZnVja3MgVWxyaWNoLiBVbHJpY2ggaW52aXRlcyBIYW5uYWggZm9yIHRoZSBVbHJpY2gtS2F0YXJpbmEgYW5uaXZlcnNhcnkgdGhhdCBuaWdodC4gSGFubmFoIGlzIGRpc2FwcG9pbnRlZCBmb3Igbm90IHJlY2VpdmluZyBgSSBsb3ZlIHlvdWAgYmFjaycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXaW5kZW4gY2F2ZXMgaW50cm8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIGxlYXZlcyBmb3Igc2Nob29sLiBFcmlrIE9iZW5kb3JmIGlzIG1pc3NpbmcuIFdpbmRlbiBjYXZlcyBpcyBsb2NhdGVkIDMuNSBrbXMgZnJvbSBXaW5kZS4gSm9uYXMgdGFsa3Mgd2l0aCBoaXMgdGhlcmFwaXN0IFBldGVyIGFib3V0IGhpcyBkcmVhbXMgYW5kIGFuZ2VyIHJlbGF0ZWQgdG8gaGlzIGRhZCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDQvMjAxOSAwNzowMDowMVwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3dlciBQbGFudCBpbnRybycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2luZGVuIE51Y2xlYXIgUG93ZXIgUGxhbnQuIFByb2plY3QgcGxhbiBzdGFydGVkIGluIDE5NTMgYW5kIGF1dGhvcml6ZWQgaW4gMTk2MC4gVG8gYmUgZGVjb21taXNzaW9uZWQgaW4gMjAyMCBkdWUgdG8gZ292ZXJubWVudC4gSW5lcyBoYXMgdGhlIGxldHRlciBsZWZ0IGJ5IE1pY2hhZWwnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDJcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmllbHNlbiBGYW1pbHkgaW50cm8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01hZ251cyBob29kaWUgaXMgbWlzc2luZy4gTWlra2VsIGxpa2VzIG1hZ2ljLiBgVGhlIHF1ZXN0aW9uIGlzbnQgaG93LCBpdHMgd2hlbmAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYWdudXNOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDNcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgZ29lcyB0byBzY2hvb2wnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIGdvZXMgdG8gc2Nob29sIGZvciBmaXJzdCB0aW1lIGFmdGVyIGhpcyBkYWRzIHN1aWNpZGUuIE1lZXRzIGhpcyBmcmllbmQgQmFydG9zei4gQmFydG9zeiBoaWQgdGhlIGZhY3QgYWJvdXQgSm9uYXMgZGFkIHRvIHRoZSBzY2hvb2wgcGVvcGxlLCBJbnN0ZWFkIGhlIHRvbGQgdGhhdCBKb25hcyB3YXMgaW4gdHdvIG1vbnRoIGV4Y2hhZ2Ugc2Nob29sIGluIEZyYW5jZS4gTWFydGhhIG5vdyBsaWtlcyBCYXJ0b3N6IGFzIEpvbmFzIHdhcyBtaXNzaW5nIGZvciBsb25nIHRpbWUuIFByaW5jaXBhbCBrYXRhcmluYSB0YWxrcyB0byBzdHVkZW50cyBhYm91dCBtaXNzaW5nIEVyaWsuIEJhcnRvc3ogcGxhbnMgb24gZ2V0dGluZyBFcmlrYHMgc3Rhc2gnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWFydGhhTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDRcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXJpayBJbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc0OSB0aXJlIHRyYWNrcyBpbmNsdWRpbmcgMiB0cnVja3MuIDIxLDMxMiB2ZWhpY2xlcyBpbiBXaW5kZW4uJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMDc6MDA6MDVcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIGdvZXMgbWlzc2luZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGtpZHMgZ28gc2VhcmNoaW5nIGZvciBFcmlrYHMgc3Rhc2ggbmVhciBXaW5kZW4gQ2F2ZXMuIFBhcmVudHMgZG8gYSBtZWV0aW5nIHRvIGRpc2N1c3Mgb24gRXJpay4gSW5lcyByZWFkcyBNaWNoZWFsYHMgbGV0dGVyLiBTdHJhbmdlIG5vaXNlIGZyb20gY2F2ZXMuIE1pa2tlbCBnb2VzIG1pc3NpbmcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1hZ251c05pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5tYXJ0aGFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubWlra2VsTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5iYXJ0b3N6VGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZnJhbnppc2thRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTExLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9LFxyXG4gICAgICAgICAgICB7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTEyLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA0LzIwMTkgMjI6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pOyAvL1RPRE8gVXBkYXRlIHRpbWV0cmF2ZWwgaW5mbyBcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pa2tlbCBJbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQb2xpY2UgZmluZHMgYSBjaGlsZCBib2R5IHRoYXRzIG5vdCBtaWtrZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDc6MDA6MDFcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDEsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL1RPRE8gZW5kaW5nIGV2ZW50XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTIgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyB3YWtlcyB1cCBmcm9tIG5pZ2h0bWFyZXMgYXMgdXN1YWwuIFN0cmFuZ2VyIEpvbmFzIHdhdGNoZXMgTWlra2VsIHNlYXJjaCBjcmV3LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VuaWRlbnRpZmllZCBjaGlsZCBib2R5IHJlcG9ydCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFsZSwgMTAtMTIgeWVhcnMgYWdlLiBUaW1lIG9mIGRlYXRoIDE2IGhvdXJzIGFnby4gRXllcyBidXJudCBhbmQgbWVsdGVkLiBFYXJkcnVtcyBkZXN0cm95ZWQuIFJlZCBzb2lsIGluIHRoZSBncm91bmQuIDgwcyBjbG90aGVzLCBzaG9lcywgd2Fsa21hbi4gMTk4NiBjb2luLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbHJpY2ggZmluZHMgY2F2ZSBtZXRhbCBkb29yJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggZmluZHMgY2F2ZSBtZXRhbCBkb29yLiBDb21lcyBiYWNrIHRvIHRlbGwgQ2hhcmxvdHRlIGFuZCBnZXQgc2VhcmNoIHdhcnJhbnQuIEZhaWxzIHRvIGdldCB3YXJyYW50LiBNZWV0cyBBbGVrc2FuZGVyIGluIHRoZSBnYXRlcyBhbmQgYXJndWVzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmFsZWtzYW5kZXJUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWxla3NhbmRlciBvcmRlcnMgSnVyZ2VuIHRvIG1vdmUgdGhlIGN5bGluZGVycycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWxla3NhbmRlciBvcmRlcnMgSnVyZ2VuIHRvIG1vdmUgdGhlIGN5bGluZGVycycsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmp1cmdlbk9iZW5kb3JmLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIGNvbWVzIHRvIHN0YXkgYXQgd2luZGVuIGhvdGVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBjb21lcyB0byBzdGF5IGF0IHdpbmRlbiBob3RlbCcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKb25hcyBmaW5kcyBhIG1hcCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgZmluZHMgYSBtYXAgb2Ygd2luZGVuIGNhdmVzIGhpZGRlbiBpbiBoaXMgZGFkcyByb29tJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1VscmljaCBpbnZlc3RpZ2F0ZXMgSnVyZ2VuJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbHJpY2ggYW5hbHlzZXMgTWlra2VsIGNsdWVzLiBKdXJnZW4gaGFzIHZhbiBhbmQgd2FzIHdvcmtpbmcgaW4gdGhlIG51Y2xlYXIgcG93ZXIgcGxhbnQgYXMgYSBkcml2ZSB0aGUgbmlnaHQgRXJpayB3ZW50IG1pc3NpbmcuIFVscmljaCBpbnZlc3RpZ2F0ZXMgSnVyZ2VuLiBGaW5kIGhpcyBzdGFzaCBhbmQgdGhhdCBoZSBkaWRudCB3b3JrIHRoZSBwcmV2aW91cyBkYXkuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qdXJnZW5PYmVuZG9yZiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzIwMTkgMjA6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDIsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsZ2Uga2lsbHMgRXJpaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2Ugc3RyYXBzIEVyaWsgdG8gdGhlIGJ1bmtlciB0aW1lbWFjaGluZSBhbmQga2lsbHMgaGltLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZXJpa09iZW5kb3JmLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSwgLy9UT0RPXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGVrc2FuZGVyIGxvYWRzIGJhcnJlbHMgaW50byBhIHRydWNrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbGVrc2FuZGVyIGxvYWRzIGJhcnJlbHMgaW50byBhIHRydWNrJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5hbGVrc2FuZGVyVGllZGVtYW5uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RpbWVUcmF2ZWwgaGFwcGVucycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQmxpbmtpbmcgbGlnaHRzLiBEZWFkIGJpcmRzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFtdLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sIC8vVE9ET1xyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAyLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTsgIC8vVE9ETyBVcGRhdGUgdGltZXRyYXZlbCBpbmZvIFxyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWlra2VsIGluIHBhc3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01pa2tlbCB3YWxrcyBvdXQgb2YgY2F2ZSwgZ29lcyBob21lLCBtZWV0cyB5b3VuZyBVbHJpY2ggYW5kIEthdGFyaW5hJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMiwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTMgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pa2tlbCBtZWV0cyBKYW5hJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qYW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYWRzIGludmVzdGlnYXRpb24nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FkdWx0IEluZXMgaW50cm8uIFlvdW5nIENoYXJsb3R0ZSBub3RpY2VzIGRlYWQgYmlyZHMuICBFZ29uIGludmVzdGlnYXRlcyBtaXNzaW5nIE1hZHMuIDQgd2Vla3Mgc2luY2UgbWFkcyBpcyBtaXNzaW5nLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA3OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pa2tlbCByb2FtcyB3aW5kZW4nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01pa2tlbCByb2FtcyB3aW5kZW4uIEdvZXMgdG8gc2Nob29sIGFuZCBtZWV0cyBLYXRhcmluYSBhbmQgSGFubmFoLiBHb2VzIHRvIHBvbGljZSBzdGF0aW9uIGFuZCBtZWV0cyBFZ29uLiBFZ29uIGFzc3VtZXMgaXRzIGEgcHJhbmsuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xhdWRpYSB0YWtlcyBjaGFyZ2UgYXQgbnVjbGVhciBwb3dlciBwbGFudCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsZ2UgZ2l2ZSBUaW1lVHJhdmVsIGJvb2sgdG8gQ2xhdWRpYS4gQ2xhdWRpYSB0YWtlcyBjaGFyZ2UgYXQgbnVjbGVhciBwb3dlciBwbGFudC4gQ2xhdWlkYSBmaW5kcyBtaXNzaW5nIGVudHJpZXMgaW4gZmluYW5jaWFsIHJlcG9ydC4gVGFsa3MgdG8gQmVybmQuIEhlIGFkdmljZXMgaXRzIGJldHRlciBub3QgdG8ga25vdy4gQ2xhdWRpYSBpbnNpc3RzLiBCZXJuZCBzaG93cyBoZXIgdGhlIGhpZGRlbiBjeWxpbmRlcnMgb2YgcmFkaW9hY3RpdmUgc3Vic3RhbmNlLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuY2xhdWRpYVRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmJlcm5kRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAub2xkIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRWdvbiBpbnZlc3RpZ2F0ZXMgZGVhZCBzaGVlcHMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ05ldyBwcmllc3QgYXQgY2h1cmNoLiAzMyBzaGVlcHMgZGVhZC4gQ2FyZGlhYyBhcnJlc3QuIEVhcmRydW1zIHJ1cHR1cmVkLiAnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Ryb250ZSBhZmZhaXIgd2l0aCBDbGF1ZGlhJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUcm9udGUgYWZmYWlyIHdpdGggQ2xhdWRpYScsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMudHJvbnRlTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW5lcyB0YWtlcyBNaWtrZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0luZXMgdGFrZXMgTWlra2VsIGZvciBtZWRpY2FsIGFpZC4gTWlra2VsIHdvdWxkbnQgdGFsayB3aXRoIGFueW9uZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmluZXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA1LzE5ODYgMDk6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDMsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGltZVRyYXZlbCBoYXBwZW5zJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCbGlua2luZyBsaWdodHMuIERlYWQgYmlyZHMuIFVscmljaCBhbmQgSGFubmFoIHRhbGsgYWJvdXQgQXBvY2FseXBzZS4gTWlra2VsIHJ1bnMgZnJvbSBob3NwaXRhbCB0byB0aGUgY2F2ZS4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVnb25UaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm1pa2tlbE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sIC8vVE9ET1xyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNS8xOTg2IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCAzLCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTsgIC8vVE9ETyBVcGRhdGUgdGltZXRyYXZlbCBpbmZvIFxyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSC5HLlRhbm5oYXVzIGlzIHdvcmtpbmcgb24gdGltZSBtYWNoaW5lJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdILkcuVGFubmhhdXMgaXMgd29ya2luZyBvbiB0aW1lIG1hY2hpbmUnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LF0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDUvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgMywgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTQgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RvcHBsZXIgZmFtaWx5JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXRlciBhbmQgQ2hhcmxvdHRlIGRvbnQgc2xlZXAgdG9nZXRoZXIuIEZyYW56aXNrYSBmaWdodHMgd2l0aCBFbGlzYWJldGggZm9yIG1pc3NpbmcgbGlwc3RpY2suJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZnJhbnppc2thRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVsaXNhYmV0aERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGV0ZXIgbWVldHMgSGVsZ2UnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BldGVyIGFza3MgSGVsZ2Ugbm90IHRvIHdhbmRlci4gSGVsZ2UgcmVwbGllcyB0aGF0IGhlIGhhcyB0ZWxsIGhpbSBhbmQgbWFrZSBpdCBzdG9wLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuaGVsZ2VEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDYvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaGFybG90dGUgc3RlYWxzIHJvYWRzaWRlIGNhbWVyYSBkYXRhJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgc3RlYWxzIHJvYWRzaWRlIGNhbWVyYSBkYXRhIGFuZCB0aGVuIGxlYXZlcyBFbGlzYWJldGggYXQgc2Nob29sLiBFbGlzYWJldGggdGVsbHMgYWJvdXQgaGVyIGJveWZyaWVuZCBZYXNpbi4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmNoYXJsb3R0ZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5lbGlzYWJldGhEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMueWFzaW5Gcmllc2UsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMDg6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgaW52ZXN0aWdhdGVzIHdpbmRlbiBjYXZlcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSm9uYXMgdGFrZXMgdGhlIG1hcCB0aGF0IGhlIGZvdW5kIGFuZCBnb2VzIGluc2lkZSB0aGUgY2F2ZXMuIFN0cmFuZ2VyIEpvbmFzIGxlYXZlcyBhIHJlZCBrbm90IHJvcGUgb24gSm9uYXNgcyBjeWNsZSBhbmQgd2F0Y2hlcyBoaW0gZnJvbSBhIGRpc3RhbmNlLiBKb25hcyBkb2VzbnQgZmluZCBoaXMgd2F5IGluc2lkZSB0aGUgY2F2ZS4gUmV0dXJucy4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBpbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbmFseXNlcyB0aGUgZGVhZCBiaXJkcy4gTGF0ZXIgZ29lcyB0aHJvdWdoIGNhbSBmb290YWdlLiBGaW5kcyBwZXRlcmBzIGNhciBpbiB0aGUgZm9vdGFnZS4gSGlkZXMgdGhlIGluZm8gZnJvbSBXb2xsZXIuIFBldGVyIHJlbW92ZXMgcmVkIHNvaWwgZnJvbSBoaXMgY2FyLiBQZXRlciBsaWVzIHdoZW4gQ2hhcmxvdHRlIGFza3MgYWJvdXQgaGlzIGxvY2F0aW9uIGR1cmluZyBNaWtrZWwgaW5jaWRlbnQuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudG9yYmVuV29sbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNi8yMDE5IDA5OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA0LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBpbnZlc3RpZ2F0aW9uJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGFybG90dGUgcXVlc3Rpb25zIGJlcm5hZGV0dGUgYWJvdXQgUGV0ZXIuIFRoZW4gdmlzaXRzIGhlbGdlYHMgZm9yZXN0IGhvdXNlLiBGaW5kcyByZWQgc29pbCB0aGVyZS4gR2V0cyByZXBvcnQgb2YgZGVhZCBiaXJkcyBpbiBwaG9uZS4gRWFyIGRydW1zIGJ1cm50LiBGaW5kcyBhIGJ1bmtlciBuZWFyIHRoZSBob3VzZS4gVGhlbiBnb2VzIHRvIHRoZSBwb3dlcnBsYW50IGFzIFVscmljaCB3YXMgY2F1Z2h0IHRyZXNwYXNzaW5nLiBBc2tzIFBldGVyIHRvIHBpY2t1cCBFbGlzYWJldGggZnJvbSBzY2hvb2wuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5iZXJuYWRldHRlLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMTE6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRWxpc2FiZXRoIHdhbGtzIGhvbWUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIG5vIG9uZSBjYW1lIHRvIHBpY2t1cCwgRWxpc2FiZXRoIHdhbGtzIGhvbWUuIEhlbGdlIHJ1bnMgZnJvbSBob3NwaXRhbC4gRWxpc2FiZXRoIGdvZXMgbWlzc2luZy4gQ2hhcmxvdHRlIGZpbmRzIEVsaXNhYmV0aGBzIHNjYXJmLiBQb2xpY2Ugc3RhcnQgc2VhcmNoaW5nLiBBZHVsdCBIZWxnZSB2aXNpdHMgSGVsZ2VgcyBidW5rZXIuIEhlbGdlIHJvYW1zIGFuZCByZWFjaGVzIFBvbGljZS4gRWxpc2FiZXRoIHJlYWNoZXMgaG9tZS4gRWxpc2FiZXRoIHNheXMgdGhhdCBzaGUgbWV0IE5vYWggYW5kIGhlIGdhdmUgYSBzdG9wd2F0Y2ggdG8gZ2l2ZSB0byBDaGFybG90dGUnLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmVsaXNhYmV0aERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLnBldGVyRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA2LzIwMTkgMTc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDQsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RyYW5nZXIgSm9uYXMgZ3VpZGVzIEpvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBtYXJrcyB0aGUgbG9jYXRpb24gb2YgY2F2ZSBkb29yIGluIEpvbmFzYHMgbWFwJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDYvMjAxOSAxOTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxnZSBraWRuYXBzIFlhc2luJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxnZSBraWRuYXBzIFlhc2luIGJ5IG9yZGVyIG9mIE5vYWguJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5oZWxnZURvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy55YXNpbkZyaWVzZSwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMjAxOSAwNzowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNCwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudHNQcm92aWRlciB9IGZyb20gXCIuLi9ldmVudHNcIjtcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVscyB9IGZyb20gXCIuLi90aW1lVHJhdmVsc1wiO1xyXG5pbXBvcnQgeyBUaW1lVHJhdmVsVHlwZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vdGltZVRyYXZlbFR5cGVcIjtcclxuaW1wb3J0IHsgRXBpc29kZVRpbWUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VwaXNvZGVUaW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXBpc29kZTUgZXh0ZW5kcyBFdmVudHNQcm92aWRlciB7XHJcbiAgICBwdWJsaWMgZ2V0RXZlbnRzKCk6IERhcmtFdmVudFtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZXBpc29kZUZyYW1lID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NoYXJsb3R0ZSBpbnZlc3RpZ2F0ZXMgWWFzaW4gY2FzZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmxvdHRlIGFza3MgRWxpc2FiZXRoIGFueSBpbmZvIGFib3V0IFlhc2luIGFuZCBhYm91dCBOb2FoLiBOb2FoIC0gdGFsbCBhcyBkYWQgLSBibHVlIGV5ZXMuIENoYXJsb3R0ZSBjb25mcm9udHMgUGV0ZXIgd2hlcmUgaGUgd2FzIGR1cmluZyBNaWtrZWxzIGluY2lkZW50LicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlciwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmVsaXNhYmV0aERvcHBsZXIsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH1dLFxyXG4gICAgICAgICAgICB0aW1lVHJhdmVsczogW10sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMDc6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL1RPRE86IE1pc3NlZCBzY2VuZSB3aGVyZSBtaWtrZWwgcmV0dXJucyB0byBob3NwaXRhbFxyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW5lcyB0YWxrcyB0byBNaWtrZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0luZXMgdGFsa3MgdG8gTWlra2VsLiBOb2FoIHZpc2l0cyBNaWtrZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5pbmVzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMubm9haCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMTk4NiAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCYXJ0b3N6IHJlY2VpdmVzIGNhbGwgZnJvbSBOb2FoJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXJ0b3N6IHJlY2VpdmVzIGNhbGwgZnJvbSBOb2FoIG9uIHRoZSBwaG9uZSB0aGF0IGhlIGZvdW5kIGluIEVyaWtgcyBzdGFzaC4gQmFydG9zeiB0ZWxsIEpvbmFzIHRoYXQgaGVzIG1lZXRpbmcgRXJpa2BzIGRlYWxlciBhbmQgd2FudHMgaGltIHRvIGFjY29tcGFueS4gSm9uYXMgYWdyZWVzLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuYmFydG9zelRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLm5vYWgsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhbm5haCB2aXNpdHMgTmllbHNlbnMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FzIFVscmljaCBkb2VzbnQgcmV0dXJuIEhhbm5haGBzIGNhbGxzLCBTaGUgdmlzaXRzLiBIYW5uYWggYnJpbmdzIGZvb2QgdG8gdGhlIE5pZWxzZW4gaG91c2UuIFVscmljaCBkcm9wcyBIYW5uYWggYXQgaGVyIGhvdXNlLiBVbHJpY2ggYnJlYWtzIHVwIEhhbm5haGBzIGFmZmFpci4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmhhbm5haEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMjAxOSAwODowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTdHJhbmdlciBKb25hcyBsZWF2ZXMgV2luZGVuIGhvdGVsJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdHJhbmdlciBKb25hcyBsZWF2ZXMgV2luZGVuIGhvdGVsLiBLZWVwcyB0aGUgcm9vbS4gQXNrcyBSZWdpbmEgdG8gZG8gYSBsb2NhbCBkZWxpdmVyeS4gVGhlbiBoZSBnb2VzIGFuZCBtZWV0cyBKb25hcy4nLFxyXG4gICAgICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5yZWdpbmFUaWVkZW1hbm4sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDA4OjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhbm5haCBtZWV0cyBNaWtrZWwnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hhbm5haCBtZWV0cyBNaWtrZWwgb3V0c2lkZSBzY2hvb2wuIEhhbm5haCBmaW5kcyBVbHJpY2ggYW5kIEthdGFyaW5hIGhhdmluZyBzZXguIEhhbm5haCB0ZWxscyBoZXIgZmF0aGVyIGFuZCBFZ29uIHRoYXQgVWxyaWNoIHJhcGVkIEthdGFyaW5hLiBFZ29uIGFycmVzdHMgVWxyaWNoLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmRhbmllbEthaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5hZHVsdCB9LFxyXG4gICAgICAgICAgICB7IHBlcnNvbjogRGFya1BlcnNvbnMuZWdvblRpZWRlbWFubiwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfV0sXHJcbiAgICAgICAgICAgIHRpbWVUcmF2ZWxzOiBbXSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMTk4NiAxNTowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCYXJ0b3N6IG1lZXRzIE5vYWggYWxvbmUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0pvbmFzIHdhdGNoZXMgTWFydGhhYHMgcGVyZm9ybWFuY2UuIEJhcnRvc3ogbWVldHMgTm9haCBhbG9uZSBhcyBKb25hcyBkaWRudCByZXNwb25kLiBTdHJhbmdlciBKb25hcyB0YWtlcyBUYW5uaGF1cyB0aW1lIG1hY2hpbmUgYW5kIGdvZXMgaW5zaWRlIGNhdmUuICcsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuaGFubmFoS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLnlvdW5nIH0sXHJcbiAgICAgICAgICAgIHsgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTUxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5vdXQgfV0sXHJcbiAgICAgICAgICAgIHdvcmxkVGltZUluTWlsbGlzOiBuZXcgRGF0ZShcIjExLzA3LzIwMTkgMTU6MDA6MDBcIikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBlcGlzb2RlVGltZTogbmV3IEVwaXNvZGVUaW1lKDEsIDUsICsrZXBpc29kZUZyYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSm9uYXMgcmVjZWl2ZXMgcGFja2FnZSBmcm9tIFN0cmFuZ2VyIEpvbmFzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdKb25hcyByZWNlaXZlcyB0aGUgcGFja2FnZSBzZW50IGJ5IFN0cmFuZ2VyIEpvbmFzLiBBIHRvcmNoIGxpZ2h0LiBBIEdlaWdlciBjb3VudGVyIHRvIGRldGVjdCByYWRpYXRpb24uIFRoZSBMZXR0ZXIgdGhhdCBNaWNoYWVsIGxlZnQuIExldHRlciB0aGF0IHNheXMgTWlra2VsIGlzIE1pY2hhZWwuJyxcclxuICAgICAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5qb25hc0thaG53YWxkLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFtdLFxyXG4gICAgICAgICAgICB3b3JsZFRpbWVJbk1pbGxpczogbmV3IERhdGUoXCIxMS8wNy8yMDE5IDIwOjAwOjAwXCIpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZXBpc29kZVRpbWU6IG5ldyBFcGlzb2RlVGltZSgxLCA1LCArK2VwaXNvZGVGcmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1N0cmFuZ2VyIEpvbmFzIG1lZXRzIEguRy5UYW5uaGF1cycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyYW5nZXIgSm9uYXMgbWVldHMgSC5HLlRhbm5oYXVzIGFuZCBzYXlzIHRoYXQgaGUgd2FudHMgdG8gdGFsayBhYm91dCB0aW1lLicsXHJcbiAgICAgICAgICAgIHBlcnNvbnM6IFt7IHBlcnNvbjogRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCwgcGVyc29uVGltZTogQWdlR3JvdXAuYWR1bHQgfSxcclxuICAgICAgICAgICAgeyBwZXJzb246IERhcmtQZXJzb25zLmhnVGFubmhhdXMsIHBlcnNvblRpbWU6IEFnZUdyb3VwLm9sZCB9XSxcclxuICAgICAgICAgICAgdGltZVRyYXZlbHM6IFt7IHRpbWVUcmF2ZWw6IFRpbWVUcmF2ZWxzLnR0MTUxLCB0eXBlOiBUaW1lVHJhdmVsVHlwZS5pbiB9XSxcclxuICAgICAgICAgICAgd29ybGRUaW1lSW5NaWxsaXM6IG5ldyBEYXRlKFwiMTEvMDcvMTk4NiAyMDowMDowMFwiKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGVwaXNvZGVUaW1lOiBuZXcgRXBpc29kZVRpbWUoMSwgNSwgKytlcGlzb2RlRnJhbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaW1lVHJhdmVsIH0gZnJvbSBcIi4uL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxcIjtcclxuaW1wb3J0IHsgVGltZUxpbmUgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVMaW5lXCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxEZXZpY2UgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxEZXZpY2VcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvbnMgfSBmcm9tIFwiLi4vbW9kZWxzL2NvbnN0YW50cy9kYXJrUGVyc29uc1wiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lVHJhdmVscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MTExOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MjAxOSxcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5tYWRzTmllbHNlbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR0MTEyOiBUaW1lVHJhdmVsID0ge1xyXG4gICAgICAgIGZyb206IFRpbWVMaW5lLnQyMDE5LFxyXG4gICAgICAgIHRvOiBUaW1lTGluZS50MTk4NixcclxuICAgICAgICBkZXZpY2U6IFRpbWVUcmF2ZWxEZXZpY2UuY2F2ZSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgcGVyc29uczogW3sgcGVyc29uOiBEYXJrUGVyc29ucy5taWtrZWxOaWVsc2VuLCBwZXJzb25UaW1lOiBBZ2VHcm91cC55b3VuZyB9XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHQxNTE6IFRpbWVUcmF2ZWwgPSB7XHJcbiAgICAgICAgZnJvbTogVGltZUxpbmUudDIwMTksXHJcbiAgICAgICAgdG86IFRpbWVMaW5lLnQxOTg2LFxyXG4gICAgICAgIGRldmljZTogVGltZVRyYXZlbERldmljZS5jYXZlLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICBwZXJzb25zOiBbeyBwZXJzb246IERhcmtQZXJzb25zLmpvbmFzS2FobndhbGQsIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH1dXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvSlF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgRXBpc29kZTEgfSBmcm9tICcuL2V2ZW50cy9zZWFzb24xL2VwaXNvZGUxJztcclxuaW1wb3J0IHsgRGFya0V2ZW50IH0gZnJvbSAnLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrRXZlbnQnO1xyXG5pbXBvcnQgeyBFcGlzb2RlMiB9IGZyb20gJy4vZXZlbnRzL3NlYXNvbjEvZXBpc29kZTInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IERhcmtQZXJzb25zIH0gZnJvbSAnLi9tb2RlbHMvY29uc3RhbnRzL2RhcmtQZXJzb25zJztcclxuaW1wb3J0IHsgRGFya1BlcnNvbiB9IGZyb20gJy4vbW9kZWxzL2ludGVyZmFjZXMvZGFya1BlcnNvbic7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSAnLi9tb2RlbHMvY29uc3RhbnRzL2VudW0vYWdlR3JvdXAnO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29uSW5EYXJrRXZlbnQgfSBmcm9tICcuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtQZXJzb25JbmRhcmtFdmVudCc7XHJcbmltcG9ydCB7IEVwaXNvZGUzIH0gZnJvbSAnLi9ldmVudHMvc2Vhc29uMS9lcGlzb2RlMyc7XHJcbmltcG9ydCB7IEVwaXNvZGU0IH0gZnJvbSAnLi9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNCc7XHJcbmltcG9ydCB7IEVwaXNvZGU1IH0gZnJvbSAnLi9ldmVudHMvc2Vhc29uMS9lcGlzb2RlNSc7XHJcblxyXG5sZXQgZXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5ldmVudHMgPSBldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTEpLmdldEV2ZW50cygpKTtcclxuZXZlbnRzID0gZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGUyKS5nZXRFdmVudHMoKSk7XHJcbmV2ZW50cyA9IGV2ZW50cy5jb25jYXQoKG5ldyBFcGlzb2RlMykuZ2V0RXZlbnRzKCkpO1xyXG5ldmVudHMgPSBldmVudHMuY29uY2F0KChuZXcgRXBpc29kZTQpLmdldEV2ZW50cygpKTtcclxuZXZlbnRzID0gZXZlbnRzLmNvbmNhdCgobmV3IEVwaXNvZGU1KS5nZXRFdmVudHMoKSk7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBzaG93RXZlbnREZXRhaWxzOiBhbnk7XHJcbiAgICBzaG93UGVyc29uRGV0YWlsczogYW55O1xyXG4gICAgY2hhbmdlVGltZTogYW55O1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LnNob3dFdmVudERldGFpbHMgPSBmdW5jdGlvbiAoZXBpc29kZVRpbWU6IG51bWJlcikge1xyXG4gIGxldCByZXMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgIHJldHVybiBldmVudC5lcGlzb2RlVGltZS5udW1iZXIgPT09IGVwaXNvZGVUaW1lO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZGFyay1ldmVudC1tb2RhbCcpLmVtcHR5KCk7XHJcbiAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50TW9kYWxIdG1sKHJlc1swXSkpO1xyXG4gICQoJyNkYXJrLWV2ZW50LW1vZGFsIC5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblxyXG59XHJcblxyXG53aW5kb3cuc2hvd1BlcnNvbkRldGFpbHMgPSBmdW5jdGlvbiAocGVyc29uOiBEYXJrUGVyc29uKSB7XHJcbiAgJCgnI2RhcmstZXZlbnQtbW9kYWwnKS5lbXB0eSgpO1xyXG4gICQoJyNkYXJrLWV2ZW50LW1vZGFsJykuYXBwZW5kKFBhcnNlci5nZXRQZXJzb25Nb2RhbEh0bWwocGVyc29uKSk7XHJcbiAgJCgnI2RhcmstZXZlbnQtbW9kYWwgLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYW1lUGVyc29uKHBlcnNvbnM6IERhcmtQZXJzb25JbkRhcmtFdmVudFtdLCBzZWFyY2hJdGVtOiBEYXJrUGVyc29uSW5EYXJrRXZlbnQpOiBib29sZWFuIHtcclxuICBsZXQgcmVzID0gcGVyc29ucy5maWx0ZXIocGVyc29uID0+IHtcclxuICAgIGlmIChwZXJzb24ucGVyc29uID09IHNlYXJjaEl0ZW0ucGVyc29uICYmIHBlcnNvbi5wZXJzb25UaW1lID09IHNlYXJjaEl0ZW0ucGVyc29uVGltZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4gcmVzLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbndpbmRvdy5jaGFuZ2VUaW1lID0gZnVuY3Rpb24gKG9yZGVyOiBzdHJpbmcpIHtcclxuXHJcbiAgbGV0IGZpbHRlcmVkRXZlbnRzOiBEYXJrRXZlbnRbXSA9IFtdO1xyXG5cclxuICBpZiAob3JkZXIgPT09ICd3b3JsZCcpIHtcclxuICAgIGZpbHRlcmVkRXZlbnRzID0gZXZlbnRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIChhLndvcmxkVGltZUluTWlsbGlzID49IGIud29ybGRUaW1lSW5NaWxsaXMpID8gMSA6IC0xXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuZW1wdHkoKTtcclxuXHJcbiAgICBmaWx0ZXJlZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgIGlmICghJChcIiNcIiArIG1vbnRoQW5kWWVhcikubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmFwcGVuZChQYXJzZXIuZ2V0TW9udGhBbmRZZWFySHRtbChldmVudCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcblxyXG4gICAgICBpZiAoISQoXCIjXCIgKyBkYXRlKS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuYXBwZW5kKFBhcnNlci5nZXREYXRlSHRtbChldmVudCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoXCIjXCIgKyBkYXRlKS5hcHBlbmQoUGFyc2VyLmdldEV2ZW50SHRtbChldmVudCkpO1xyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICB9IGVsc2UgaWYgKG9yZGVyID09PSAnbWlra2VsJykge1xyXG4gICAgcGVyc29uVGltZWxpbmUoRGFya1BlcnNvbnMubWlra2VsTmllbHNlbik7XHJcbiAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2pvbmFzJykge1xyXG4gICAgcGVyc29uVGltZWxpbmUoRGFya1BlcnNvbnMuam9uYXNLYWhud2FsZCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcGVyc29uVGltZWxpbmUoZGFya1BlcnNvbjogRGFya1BlcnNvbikge1xyXG4gIGxldCBmaWx0ZXJlZEV2ZW50cyA9IGV2ZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gKGEud29ybGRUaW1lSW5NaWxsaXMgPj0gYi53b3JsZFRpbWVJbk1pbGxpcykgPyAxIDogLTFcclxuICB9KTtcclxuXHJcbiAgbGV0IGZpbHRlcmVkRXZlbnRzMTogRGFya0V2ZW50W10gPSBmaWx0ZXJlZEV2ZW50cy5maWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgbGV0IHNlYXJjaEl0ZW0gPSB7IHBlcnNvbjogZGFya1BlcnNvbiwgcGVyc29uVGltZTogQWdlR3JvdXAueW91bmcgfTtcclxuICAgIGlmIChpc1NhbWVQZXJzb24oZXZlbnQucGVyc29ucywgc2VhcmNoSXRlbSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbiAgbGV0IGZpbHRlcmVkRXZlbnRzMjogRGFya0V2ZW50W10gPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgIGxldCBzZWFyY2hJdGVtID0geyBwZXJzb246IGRhcmtQZXJzb24sIHBlcnNvblRpbWU6IEFnZUdyb3VwLmFkdWx0IH07XHJcbiAgICBpZiAoaXNTYW1lUGVyc29uKGV2ZW50LnBlcnNvbnMsIHNlYXJjaEl0ZW0pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIGxldCBmaWx0ZXJlZEV2ZW50czM6IERhcmtFdmVudFtdID0gZXZlbnRzLmZpbHRlcihldmVudCA9PiB7XHJcbiAgICBsZXQgc2VhcmNoSXRlbSA9IHsgcGVyc29uOiBkYXJrUGVyc29uLCBwZXJzb25UaW1lOiBBZ2VHcm91cC5vbGQgfTtcclxuICAgIGlmIChpc1NhbWVQZXJzb24oZXZlbnQucGVyc29ucywgc2VhcmNoSXRlbSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIC8vc29ydCBlYWNoXHJcbiAgLy9UT0RPXHJcblxyXG4gIGZpbHRlcmVkRXZlbnRzID0gW107XHJcbiAgZmlsdGVyZWRFdmVudHMgPSBmaWx0ZXJlZEV2ZW50cy5jb25jYXQoZmlsdGVyZWRFdmVudHMxKTtcclxuICBmaWx0ZXJlZEV2ZW50cyA9IGZpbHRlcmVkRXZlbnRzLmNvbmNhdChmaWx0ZXJlZEV2ZW50czIpO1xyXG4gIGZpbHRlcmVkRXZlbnRzID0gZmlsdGVyZWRFdmVudHMuY29uY2F0KGZpbHRlcmVkRXZlbnRzMyk7XHJcblxyXG5cclxuICAkKCcjZGFyay1jb250YWluZXIgLnRpbWVsaW5lJykuZW1wdHkoKTtcclxuXHJcbiAgbGV0IHByZXZEYXRlID0gJyc7XHJcbiAgbGV0IHByZXZJID0gMDtcclxuICBsZXQgaXRlcmF0b3IgPSAwO1xyXG4gIGZpbHRlcmVkRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvciArIDE7XHJcbiAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIGxldCBkYXRlID0gXCJkYXRlX1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RGF0ZSgpICsgXCJfXCIgKyBtb250aEFuZFllYXI7XHJcbiAgICBsZXQgc3VmZml4ID0gaXRlcmF0b3I7XHJcblxyXG4gICAgaWYgKHByZXZEYXRlID09IGRhdGUpIHtcclxuICAgICAgc3VmZml4ID0gcHJldkk7XHJcbiAgICAgIGRhdGUgPSBkYXRlICsgJycgKyBzdWZmaXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmV2RGF0ZSA9IGRhdGU7XHJcbiAgICAgIHByZXZJID0gaXRlcmF0b3I7XHJcblxyXG4gICAgICBzdWZmaXggPSBpdGVyYXRvcjtcclxuICAgICAgZGF0ZSA9IGRhdGUgKyAnJyArIHN1ZmZpeDtcclxuICAgICAgJCgnI2RhcmstY29udGFpbmVyIC50aW1lbGluZScpLmFwcGVuZChQYXJzZXIuZ2V0RGF0ZUh0bWwyKGV2ZW50LCBkYXRlKSlcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI1wiICsgZGF0ZSkuYXBwZW5kKFBhcnNlci5nZXRFdmVudEh0bWwoZXZlbnQpKTtcclxuXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbndpbmRvdy5jaGFuZ2VUaW1lKCd3b3JsZCcpOyIsImltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IERhcmtGYW1pbHkgfSBmcm9tIFwiLi9lbnVtL2RhcmtGYW1pbHlcIjtcclxuaW1wb3J0IHsgRGFya1BlcnNvblBob3RvIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZGFya1BlcnNvblBob3RvXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4vZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25zIHtcclxuXHJcbiAgICBzdGF0aWMgdW5rbm93blBlcnNvbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVua25vd25cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVW5rbm93bixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ1bmtub3duUGVyc29uXCIsW0FnZUdyb3VwLnlvdW5nXSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL1BlcnNvbnMgZnJvbSBVbmtub3duIGZhbWlsaWVzICAgXHJcblxyXG4gICAgc3RhdGljIGJlcm5hZGV0dGU6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuYWRldHRlXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmFkZXR0ZVwiLCBbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3JiZW5Xb2xsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJUb3JiZW4gV29sbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LldvbGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJ0b3JiZW5Xb2xsZXJcIixbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaWxqYTogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlNpbGphXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwic2lsamFcIixbQWdlR3JvdXAueW91bmddKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGF1c2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2xhdXNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Vbmtub3duLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImNsYXVzZW5cIixbQWdlR3JvdXAuYWR1bHRdKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZWJhc3RpYW5LcnVnZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJTZWJhc3RpYW4gS3J1Z2VyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LktydWdlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJzZWJhc3RpYW5LcnVnZXJcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhnVGFubmhhdXM6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJILkcuIFRhbm5oYXVzXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGdUYW5uaGF1c1wiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMganVyZ2VuT2JlbmRvcmY6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKw7xyZ2VuIE9iZW5kb3JmXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk9iZW5kb3JmLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImp1cmdlbk9iZW5kb3JmXCIsW0FnZUdyb3VwLmFkdWx0XSksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXJpa09iZW5kb3JmOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiRXJpayBPYmVuZG9yZlwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5PYmVuZG9yZixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJlcmlrT2JlbmRvcmZcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuanVyZ2VuT2JlbmRvcmYsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgeWFzaW5Gcmllc2U6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJZYXNpbiBGcmllc2VcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRnJpZXNlLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcInlhc2luRnJpZXNlXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIE5pZWxzZW4gRmFtaWx5XHJcblxyXG4gICAgc3RhdGljIGFnbmVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFnbmVzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJhZ25lc05pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vYWg6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJOb2FoXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlVua25vd24sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibm9haFwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgYWx0TmFtZTogW1wiSGFubm8gTm9haCBUYXViZXJcIl1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJvbnRlTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlRyb250ZSBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidHJvbnRlTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5hZ25lc05pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgamFuYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJKYW5hIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJqYW5hTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdWxyaWNoTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIlVscmljaCBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwidWxyaWNoTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFkc05pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYWRzIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtYWRzTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy50cm9udGVOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuamFuYU5pZWxzZW5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMga2F0YXJpbmFOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiS2F0YXJpbmEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImthdGFyaW5hTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFnbnVzTmllbHNlbjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIk1hZ251cyBOaWVsc2VuXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5Lk5pZWxzZW4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwibWFnbnVzTmllbHNlblwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy51bHJpY2hOaWVsc2VuLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMua2F0YXJpbmFOaWVsc2VuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1hcnRoYU5pZWxzZW46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJNYXJ0aGEgTmllbHNlblwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5OaWVsc2VuLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcIm1hcnRoYU5pZWxzZW5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMudWxyaWNoTmllbHNlbixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmthdGFyaW5hTmllbHNlblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtaWtrZWxOaWVsc2VuOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWlra2VsIE5pZWxzZW5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuTmllbHNlbixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtaWtrZWxOaWVsc2VuXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnVscmljaE5pZWxzZW4sXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5rYXRhcmluYU5pZWxzZW4sXHJcbiAgICAgICAgYWx0TmFtZTogW1wiTWljaGFlbCBLaGFud2FsZFwiXVxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIEthaG53YWxkIEZhbWlseVxyXG5cclxuICAgIHN0YXRpYyBkYW5pZWxLYWhud2FsZDogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkRhbmllbCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJkYW5pZWxLYWhud2FsZFwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5lc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSW5lcyBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJpbmVzS2FobndhbGRcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuZGFuaWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWljaGFlbEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTWljaGFlbCBLYWhud2FsZFwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5LYWhud2FsZCxcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJtaWNoYWVsS2FobndhbGRcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuaW5lc0thaG53YWxkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhbm5haEthaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSGFubmFoIEthaG53YWxkXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkthaG53YWxkLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImhhbm5haEthaG53YWxkXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLnNlYmFzdGlhbktydWdlcixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqb25hc0thaG53YWxkOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiSm9uYXMgS2FobndhbGRcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuS2FobndhbGQsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiam9uYXNLYWhud2FsZFwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5taWNoYWVsS2FobndhbGQsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5oYW5uYWhLYWhud2FsZFxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIERvcHBsZXIgRmFtaWx5ICAgIFxyXG5cclxuICAgIHN0YXRpYyBiZXJuZERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJuZCBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiYmVybmREb3BwbGVyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBncmV0YURvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJHcmV0YSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZ3JldGFEb3BwbGVyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxnZURvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJIZWxnZSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiaGVsZ2VEb3BwbGVyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmJlcm5kRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmdyZXRhRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwZXRlckRvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJQZXRlciBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwicGV0ZXJEb3BwbGVyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLmhlbGdlRG9wcGxlcixcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFybG90dGVEb3BwbGVyOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQ2hhcmxvdHRlIERvcHBsZXJcIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuRG9wcGxlcixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJjaGFybG90dGVEb3BwbGVyXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IERhcmtQZXJzb25zLm5vYWgsXHJcbiAgICAgICAgbW90aGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJhbnppc2thRG9wcGxlcjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkZyYW56aXNrYSBEb3BwbGVyXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LkRvcHBsZXIsXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZnJhbnppc2thRG9wcGxlclwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5wZXRlckRvcHBsZXIsXHJcbiAgICAgICAgbW90aGVyOiBEYXJrUGVyc29ucy5jaGFybG90dGVEb3BwbGVyXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVsaXNhYmV0aERvcHBsZXI6IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJFbGlzYWJldGggRG9wcGxlclwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5Eb3BwbGVyLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImVsaXNhYmV0aERvcHBsZXJcIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMucGV0ZXJEb3BwbGVyLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuY2hhcmxvdHRlRG9wcGxlclxyXG4gICAgfVxyXG5cclxuICAgIC8vUGVyc29ucyBmcm9tIFRpZWRlbWFubiBGYW1pbHlcclxuXHJcbiAgICBzdGF0aWMgZWdvblRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkVnb24gVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJlZ29uVGllZGVtYW5uXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3Jpc1RpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkRvcmlzIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiZG9yaXNUaWVkZW1hbm5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vdGhlcjogdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYXVkaWFUaWVkZW1hbm46IERhcmtQZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJDbGF1ZGlhIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwiY2xhdWRpYVRpZWRlbWFublwiLHVuZGVmaW5lZCksXHJcbiAgICAgICAgZmF0aGVyOiBEYXJrUGVyc29ucy5lZ29uVGllZGVtYW5uLFxyXG4gICAgICAgIG1vdGhlcjogRGFya1BlcnNvbnMuZG9yaXNUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaW5hVGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiUmVnaW5hIFRpZWRlbWFublwiLFxyXG4gICAgICAgIGZhbWlseTogRGFya0ZhbWlseS5UaWVkZW1hbm4sXHJcbiAgICAgICAgcGhvdG9zOiBuZXcgRGFya1BlcnNvblBob3RvKFwicmVnaW5hVGllZGVtYW5uXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLmNsYXVkaWFUaWVkZW1hbm5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWxla3NhbmRlclRpZWRlbWFubjogRGFya1BlcnNvbiA9IHtcclxuICAgICAgICBuYW1lOiBcIkFsZWtzYW5kZXIgVGllZGVtYW5uXCIsXHJcbiAgICAgICAgZmFtaWx5OiBEYXJrRmFtaWx5LlRpZWRlbWFubixcclxuICAgICAgICBwaG90b3M6IG5ldyBEYXJrUGVyc29uUGhvdG8oXCJhbGVrc2FuZGVyVGllZGVtYW5uXCIsdW5kZWZpbmVkKSxcclxuICAgICAgICBmYXRoZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBtb3RoZXI6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXJ0b3N6VGllZGVtYW5uOiBEYXJrUGVyc29uID0ge1xyXG4gICAgICAgIG5hbWU6IFwiQmFydG9zeiBUaWVkZW1hbm5cIixcclxuICAgICAgICBmYW1pbHk6IERhcmtGYW1pbHkuVGllZGVtYW5uLFxyXG4gICAgICAgIHBob3RvczogbmV3IERhcmtQZXJzb25QaG90byhcImJhcnRvc3pUaWVkZW1hbm5cIix1bmRlZmluZWQpLFxyXG4gICAgICAgIGZhdGhlcjogRGFya1BlcnNvbnMuYWxla3NhbmRlclRpZWRlbWFubixcclxuICAgICAgICBtb3RoZXI6IERhcmtQZXJzb25zLnJlZ2luYVRpZWRlbWFublxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZW51bSBBZ2VHcm91cCB7XHJcbiAgICB5b3VuZyA9IFwiWW91bmdcIixcclxuICAgIGFkdWx0ID0gXCJBZHVsdFwiLFxyXG4gICAgb2xkID0gXCJPbGRcIlxyXG59IiwiZXhwb3J0IGVudW0gRGFya0ZhbWlseSB7XHJcbiAgICBOaWVsc2VuID0gXCJOaWVsc2VuXCIsXHJcbiAgICBLYWhud2FsZCA9IFwiS2FobndhbGRcIixcclxuICAgIFRpZWRlbWFubiA9IFwiVGllZGVtYW5uXCIsXHJcbiAgICBEb3BwbGVyID0gXCJEb3BwbGVyXCIsXHJcbiAgICBVbmtub3duID0gXCJVbmtub3duXCIsXHJcbiAgICBPYmVuZG9yZiA9IFwiT2JlbmRvcmZcIixcclxuICAgIEZyaWVzZSA9IFwiRnJpZXNlXCIsXHJcbiAgICBLcnVnZXIgPSBcIktydWdlclwiLFxyXG4gICAgV29sbGVyID0gXCJXb2xsZXJcIlxyXG59IiwiZXhwb3J0IGVudW0gVGltZUxpbmUge1xyXG4gICAgdDE5MjAsXHJcbiAgICB0MTk1MyxcclxuICAgIHQxOTg2LFxyXG4gICAgdDIwMTksXHJcbiAgICB0MjA1MlxyXG59IiwiZXhwb3J0IGVudW0gVGltZVRyYXZlbERldmljZSB7XHJcbiAgICB0MTkyMERldmljZSxcclxuICAgIGNhdmUsXHJcbiAgICB0YW5uaGF1c0RldmljZSxcclxuICAgIGFsdE1hcnRoYURldmljZSxcclxuICAgIHBvd2VyUGxhbnRcclxufSIsImV4cG9ydCBlbnVtIFRpbWVUcmF2ZWxUeXBlIHtcclxuICAgIGluLFxyXG4gICAgb3V0XHJcbn0iLCJleHBvcnQgY2xhc3MgRXBpc29kZVRpbWUge1xyXG4gICAgc2Vhc29uOiBudW1iZXIgPSAwO1xyXG4gICAgZXBpc29kZTogbnVtYmVyID0gMDtcclxuICAgIGZyYW1lOiBudW1iZXIgPSAwO1xyXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwO1xyXG4gICAgY29uc3RydWN0b3Ioc2Vhc29uOiBudW1iZXIsIGVwaXNvZGU6IG51bWJlciwgZnJhbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2Vhc29uID0gc2Vhc29uO1xyXG4gICAgICAgIHRoaXMuZXBpc29kZSA9IGVwaXNvZGU7XHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gc2Vhc29uICogMTAwMDAwMCArIGVwaXNvZGUgKiAxMDAwICsgZnJhbWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEYXJrUGVyc29uIH0gZnJvbSBcIi4vZGFya1BlcnNvblwiO1xyXG5pbXBvcnQgeyBBZ2VHcm91cCB9IGZyb20gXCIuLi9jb25zdGFudHMvZW51bS9hZ2VHcm91cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhcmtQZXJzb25QaG90byB7XHJcbiAgICB5b3VuZzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIGFkdWx0OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgb2xkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBlcnNvbiA6IHN0cmluZywgYWdlR3JvdXBzOiBBZ2VHcm91cFtdfHVuZGVmaW5lZCl7XHJcbiAgICAgICAgaWYoYWdlR3JvdXBzID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMueW91bmcgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzAuanBnJztcclxuICAgICAgICAgICAgdGhpcy5hZHVsdCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMS5qcGcnO1xyXG4gICAgICAgICAgICB0aGlzLm9sZCA9ICdhc3NldHMvcGVyc29ucy8nK3BlcnNvbisnMi5qcGcnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnlvdW5nID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmFkdWx0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLm9sZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYoYWdlR3JvdXBzLmluY2x1ZGVzKEFnZUdyb3VwLnlvdW5nKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlvdW5nID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycwLmpwZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWdlR3JvdXBzLmluY2x1ZGVzKEFnZUdyb3VwLmFkdWx0KSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdWx0ID0gJ2Fzc2V0cy9wZXJzb25zLycrcGVyc29uKycxLmpwZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWdlR3JvdXBzLmluY2x1ZGVzKEFnZUdyb3VwLm9sZCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGQgPSAnYXNzZXRzL3BlcnNvbnMvJytwZXJzb24rJzIuanBnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERhcmtFdmVudCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL2RhcmtFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXJrUGVyc29uSW5EYXJrRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uSW5kYXJrRXZlbnRcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbCB9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL3RpbWVUcmF2ZWxcIjtcclxuaW1wb3J0IHsgVGltZVRyYXZlbEluRGFya0V2ZW50IH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvdGltZVRyYXZlbEluRGFya0V2ZW50XCI7XHJcbmltcG9ydCB7IFRpbWVUcmF2ZWxUeXBlIH0gZnJvbSBcIi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL3RpbWVUcmF2ZWxUeXBlXCI7XHJcbmltcG9ydCB7IERhcmtQZXJzb24gfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9kYXJrUGVyc29uXCI7XHJcbmltcG9ydCB7IEFnZUdyb3VwIH0gZnJvbSBcIi4vbW9kZWxzL2NvbnN0YW50cy9lbnVtL2FnZUdyb3VwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuXHJcbiAgICBzdGF0aWMgbW9udGhOYW1lcyA9IFtcclxuICAgICAgICBcIkphbnVhcnlcIixcclxuICAgICAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICAgIFwiQXByaWxcIixcclxuICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgIFwiSnVuZVwiLFxyXG4gICAgICAgIFwiSnVseVwiLFxyXG4gICAgICAgIFwiQXVndXN0XCIsXHJcbiAgICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICAgICAgXCJEZWNlbWJlclwiXHJcbiAgICBdO1xyXG5cclxuICAgIHN0YXRpYyBnZXREYXRlSHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHwgRWxlbWVudCB8IEpRdWVyeTxIVE1MRWxlbWVudD4gfCBEb2N1bWVudEZyYWdtZW50IHwgKEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50KVtdIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ndGltZWxpbmUtc2VjdGlvbic+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgY2xhc3M9J3RpbWVsaW5lLWRhdGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAlJURBVEVTVFIlJVwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBpZD0nJSVEQVRFJSUnIGNsYXNzPSdyb3cnPlwiICtcclxuICAgICAgICAgICAgXCIgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgbGV0IHdvcmxkVGltZUluTWlsbGlzOiBEYXRlID0gbmV3IERhdGUoZXZlbnQud29ybGRUaW1lSW5NaWxsaXMpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXIgPSBcIm15X1wiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKSArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBcImRhdGVfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkgKyBcIl9cIiArIG1vbnRoQW5kWWVhcjtcclxuICAgICAgICBsZXQgZGF0ZVN0ciA9IFBhcnNlci5tb250aE5hbWVzW3dvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCldICsgXCIgXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXREYXRlKCkudG9TdHJpbmcoKSArIFwiLCBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURBVEVTVFIlJVwiLCBkYXRlU3RyKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREFURSUlXCIsIGRhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldERhdGVIdG1sMihldmVudDogRGFya0V2ZW50LCBkYXRldmFyOiBzdHJpbmcpOiBzdHJpbmcgfCBFbGVtZW50IHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IERvY3VtZW50RnJhZ21lbnQgfCAoRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQpW10ge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSd0aW1lbGluZS1zZWN0aW9uJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPGRpdiBjbGFzcz0ndGltZWxpbmUtZGF0ZSc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICUlREFURVNUUiUlXCIgK1xyXG4gICAgICAgICAgICBcIiAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICA8ZGl2IGlkPSclJURBVEUlJScgY2xhc3M9J3Jvdyc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgd29ybGRUaW1lSW5NaWxsaXM6IERhdGUgPSBuZXcgRGF0ZShldmVudC53b3JsZFRpbWVJbk1pbGxpcyk7XHJcbiAgICAgICAgbGV0IG1vbnRoQW5kWWVhciA9IFwibXlfXCIgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IFwiZGF0ZV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKSArIFwiX1wiICsgbW9udGhBbmRZZWFyO1xyXG4gICAgICAgIGxldCBkYXRlU3RyID0gUGFyc2VyLm1vbnRoTmFtZXNbd29ybGRUaW1lSW5NaWxsaXMuZ2V0TW9udGgoKV0gKyBcIiBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldERhdGUoKS50b1N0cmluZygpICsgXCIsIFwiICsgd29ybGRUaW1lSW5NaWxsaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlREFURVNUUiUlXCIsIGRhdGVTdHIpO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVEQVRFJSVcIiwgZGF0ZXZhcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0TW9udGhBbmRZZWFySHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gXCJcIiArXHJcbiAgICAgICAgICAgIFwiPGRpdiBpZD0nJSVJRCUlJyBjbGFzcz0ndGltZWxpbmUtbW9udGgnPlwiICtcclxuICAgICAgICAgICAgXCIlJU1PTlRIQU5EWUVBUiUlXCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIGxldCB3b3JsZFRpbWVJbk1pbGxpczogRGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndvcmxkVGltZUluTWlsbGlzKTtcclxuICAgICAgICBsZXQgbW9udGhBbmRZZWFyID0gXCJteV9cIiArIHdvcmxkVGltZUluTWlsbGlzLmdldE1vbnRoKCkgKyB3b3JsZFRpbWVJbk1pbGxpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtb250aEFuZFllYXJTdHIgPSBQYXJzZXIubW9udGhOYW1lc1t3b3JsZFRpbWVJbk1pbGxpcy5nZXRNb250aCgpXSArIFwiLCBcIiArIHdvcmxkVGltZUluTWlsbGlzLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJU1PTlRIQU5EWUVBUiUlXCIsIG1vbnRoQW5kWWVhclN0cik7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUlEJSVcIiwgbW9udGhBbmRZZWFyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgaHRtbCBcIiArIHJldHVyblN0cik7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnRIdG1sKGV2ZW50OiBEYXJrRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHIgPSBcIlwiICtcclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdjb2wtc20tNCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgIDxkaXYgY2xhc3M9J3RpbWVsaW5lLWJveCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICA8ZGl2IGNsYXNzPSdib3gtdGl0bGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxpIGNsYXNzPSdmYSBmYS1hc3RlcmlzayB0ZXh0LXN1Y2Nlc3MnIGFyaWEgLSBoaWRkZW49J3RydWUnID4gPC9pPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICUlVElUTEUlJVwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxhIGNsYXNzPSdidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHQnIG9uY2xpY2s9J3Nob3dFdmVudERldGFpbHMoXCIgKyBldmVudC5lcGlzb2RlVGltZS5udW1iZXIgKyBcIiknPiBEZXRhaWxzIDwvYT5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPGRpdiBjbGFzcz0nYm94LWNvbnRlbnQnIHN0eWxlPSdoZWlnaHQ6MTAwcHgnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgIDxkaXYgY2xhc3M9J2JveC1pdGVtJz4gJSVERVNDUklQVElPTiUlIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAlJVRJTUVUUkFWRUxTJSVcIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgIDxkaXYgY2xhc3M9J2JveC1mb290ZXInPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVUSVRMRSUlXCIsIGV2ZW50LnRpdGxlKTtcclxuICAgICAgICBsZXQgZGVzID0gZXZlbnQuZGVzY3JpcHRpb247XHJcbiAgICAgICAgaWYgKGRlcy5sZW5ndGggPiAxMDApIHtcclxuICAgICAgICAgICAgZGVzID0gZGVzLnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJURFU0NSSVBUSU9OJSVcIiwgZGVzKTtcclxuICAgICAgICBsZXQgdGltZVRyYXZlbHMgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQudGltZVRyYXZlbHMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGltZVRyYXZlbHMuZm9yRWFjaCh0aW1lVHJhdmVsID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWVUcmF2ZWxzID0gdGltZVRyYXZlbHMgKyBQYXJzZXIuZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElNRVRSQVZFTFMlJVwiLCB0aW1lVHJhdmVscyk7XHJcbiAgICAgICAgbGV0IHBlcnNvbnMgPSAnJztcclxuICAgICAgICBldmVudC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VGltZVRyYXZlbEh0bWwodGltZVRyYXZlbDogVGltZVRyYXZlbEluRGFya0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHJldHVyblN0ciA9IFwiXCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9JyUlQ0xBU1MlJScgPiAlJVBFUlNPTlMlJSA8L2Rpdj5cIjtcclxuICAgICAgICBsZXQgcGVyc29ucyA9ICcnO1xyXG4gICAgICAgIHRpbWVUcmF2ZWwudGltZVRyYXZlbC5wZXJzb25zLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgcGVyc29ucyA9IHBlcnNvbnMgKyBQYXJzZXIuZ2V0UGVyc29uSHRtbChwZXJzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKFwiJSVQRVJTT05TJSVcIiwgcGVyc29ucyk7XHJcbiAgICAgICAgaWYgKHRpbWVUcmF2ZWwudHlwZSA9PSBUaW1lVHJhdmVsVHlwZS5pbikge1xyXG4gICAgICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlQ0xBU1MlJVwiLCAnYm94LWZvb3Rlci10aW1lLWluJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUNMQVNTJSVcIiwgJ2JveC1mb290ZXItdGltZS1vdXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyc29uSHRtbChwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPSdcIiArIFBhcnNlci5nZXRQZXJzb25JbWFnZShwZXJzb24pICsgXCInIHN0eWxlPSdib3JkZXI6IHNvbGlkIDFweCAjNGRiYWRjO3BhZGRpbmc6IDFweDt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7JyB0aXRsZT0nXCIgKyBwZXJzb24ucGVyc29uLm5hbWUgKyBcIicgb25jbGljaz0nc2hvd1BlcnNvbkRldGFpbHMoXCIgKyBKU09OLnN0cmluZ2lmeShwZXJzb24ucGVyc29uKSArIFwiKSc+IFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJzb25JbWFnZShwZXJzb246IERhcmtQZXJzb25JbkRhcmtFdmVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBlcnNvbi5wZXJzb25UaW1lID09IEFnZUdyb3VwLnlvdW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJzb24ucGVyc29uLnBob3Rvcy55b3VuZyE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwZXJzb24ucGVyc29uVGltZSA9PSBBZ2VHcm91cC5hZHVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29uLnBlcnNvbi5waG90b3MuYWR1bHQhO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGVyc29uLnBlcnNvblRpbWUgPT0gQWdlR3JvdXAub2xkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJzb24ucGVyc29uLnBob3Rvcy5vbGQhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL3BlcnNvbnMvdW5rbm93blBlcnNvbjAuanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFdmVudE1vZGFsSHRtbChldmVudDogRGFya0V2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiUlVElUTEUlJTwvaDU+JyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgIDxwPiUlQk9EWSUlPC9wPicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElUTEUlJVwiLCBldmVudC50aXRsZSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUJPRFklJVwiLCBldmVudC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGh0bWwgXCIgKyByZXR1cm5TdHIpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJzb25Nb2RhbEh0bWwocGVyc29uOiBEYXJrUGVyc29uKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuU3RyID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiUlVElUTEUlJTwvaDU+JyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nICtcclxuICAgICAgICAgICAgJyAgICAgIDxwPiUlQk9EWSUlPC9wPicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZShcIiUlVElUTEUlJVwiLCBwZXJzb24ubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoXCIlJUJPRFklJVwiLCBwZXJzb24uZmFtaWx5ICsgJzxicj4nICsgcGVyc29uLmZhdGhlcj8ubmFtZSArICc8YnI+JyArIHBlcnNvbi5tb3RoZXI/Lm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBodG1sIFwiICsgcmV0dXJuU3RyKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==