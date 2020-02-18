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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/corgi.js":
/*!*********************************!*\
  !*** ./src/javascript/corgi.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./src/javascript/text.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar corgiImages = {\n  0: \"src/images/corgi.png\",\n  1: \"src/images/corgi1.png\",\n  2: \"src/images/corgi2.png\",\n  3: \"src/images/bread.png\",\n  4: \"src/images/bread1.png\"\n};\nvar candyImages = {\n  0: \"src/images/candy.png\",\n  1: \"src/images/candy2.png\",\n  2: \"src/images/candy3.png\",\n  3: \"src/images/candy4.png\"\n};\n\nvar Corgi =\n/*#__PURE__*/\nfunction () {\n  function Corgi(canvas, stage, score, stats) {\n    _classCallCheck(this, Corgi);\n\n    this.canvas = canvas;\n    this.stage = stage;\n    this.score = score;\n    this.stats = stats;\n    var dirs = [1, -1];\n    this.direction = dirs[Math.floor(Math.random() * 2)];\n    this.generateCorgi = this.generateCorgi.bind(this);\n    this.addListener = this.addListener.bind(this);\n    this.corgiReaction = this.corgiReaction.bind(this);\n    this.tagCorgi = this.tagCorgi.bind(this);\n    this.dropCandy = this.dropCandy.bind(this);\n    this.deleteCorgi = this.deleteCorgi.bind(this);\n  }\n\n  _createClass(Corgi, [{\n    key: \"generateCorgi\",\n    value: function generateCorgi(interval) {\n      var randomKey = Math.floor(Math.random() * 5);\n      var corgi = new createjs.Bitmap(corgiImages[randomKey]); //try with one corgi \n\n      if (randomKey === 3 || randomKey === 4) {\n        corgi.type = \"bomb\";\n        this.stats.increaseTotalBread();\n      } else {\n        corgi.type = \"corgi\";\n        this.stats.increaseTotalCorgis();\n      }\n\n      var tag = new createjs.Shape();\n      tag.graphics.beginFill('#000').drawRect(0, 50, 90, 70);\n      corgi.hitArea = tag;\n      corgi.x = Math.round(Math.random() * this.canvas.width);\n      corgi.y = 800;\n      corgi.rotation = Math.random() * 360;\n      this.stage.addChild(this.corgi);\n      this.addListener(corgi, interval);\n      return corgi;\n    }\n  }, {\n    key: \"addListener\",\n    value: function addListener(corgi, interval) {\n      var _this = this;\n\n      corgi.addEventListener('mouseover', function () {\n        var type = corgi.type;\n\n        _this.corgiReaction(corgi, type);\n\n        _this.deleteCorgi(corgi, interval);\n\n        _this.stage.update();\n      });\n    }\n  }, {\n    key: \"corgiReaction\",\n    value: function corgiReaction(corgi, type) {\n      var _this2 = this;\n\n      this.score.updateScore(type);\n\n      if (type === \"corgi\") {\n        this.tagCorgi(corgi);\n        this.dropCandy(corgi);\n        this.stats.increaseTagCorgis();\n      } else if (type === \"bomb\") {\n        this.stats.increaseTagBread();\n        this.stage.addChild(_text__WEBPACK_IMPORTED_MODULE_0__[\"yikes\"], _text__WEBPACK_IMPORTED_MODULE_0__[\"beCareful\"]);\n        setTimeout(function () {\n          return _this2.stage.removeChild(_text__WEBPACK_IMPORTED_MODULE_0__[\"yikes\"], _text__WEBPACK_IMPORTED_MODULE_0__[\"beCareful\"]);\n        }, 1500);\n      }\n    }\n  }, {\n    key: \"tagCorgi\",\n    value: function tagCorgi(corgi) {\n      var _this3 = this;\n\n      var happyCorgi = new createjs.Bitmap(\"src/images/happy_corgi.png\");\n      happyCorgi.x = corgi.x;\n      happyCorgi.y = corgi.y;\n      this.stage.addChild(happyCorgi);\n      setTimeout(function () {\n        return _this3.stage.removeChild(happyCorgi);\n      }, 750);\n    }\n  }, {\n    key: \"dropCandy\",\n    value: function dropCandy(corgi) {\n      var randomKey = Math.floor(Math.random() * 4);\n      var droppedCandy = new createjs.Bitmap(candyImages[randomKey]);\n      droppedCandy.x = corgi.x;\n      droppedCandy.y = Math.random() * 30 + 680;\n      this.stage.addChild(droppedCandy);\n    }\n  }, {\n    key: \"deleteCorgi\",\n    value: function deleteCorgi(corgi, interval) {\n      this.stage.removeChild(corgi);\n      clearInterval(interval);\n    }\n  }]);\n\n  return Corgi;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corgi);\n\n//# sourceURL=webpack:///./src/javascript/corgi.js?");

/***/ }),

/***/ "./src/javascript/game.js":
/*!********************************!*\
  !*** ./src/javascript/game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/javascript/timer.js\");\n/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats */ \"./src/javascript/stats.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ \"./src/javascript/score.js\");\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectile */ \"./src/javascript/projectile.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ \"./src/javascript/text.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(canvas, stage) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.stage = stage;\n    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stage);\n    this.score = new _score__WEBPACK_IMPORTED_MODULE_2__[\"default\"](stage, this.timer);\n    this.stats = new _stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stage);\n    this.currentBTickers = {};\n    this.started = false;\n    this.generateCorgis = this.generateCorgis.bind(this);\n    this.start = this.start.bind(this);\n    this.end = this.end.bind(this);\n    this.pause = this.pause.bind(this);\n    this.unpause = this.unpause.bind(this);\n  }\n\n  _createClass(Game, [{\n    key: \"generateCorgis\",\n    value: function generateCorgis() {\n      var numCorgis = Math.random() * 3 + 1;\n\n      for (var i = 0; i < numCorgis; i++) {\n        var c = new _projectile__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.canvas, this.stage, this.score, this.stats, this.currentBTickers);\n        this.currentBTickers[c.interval] = c;\n      }\n    }\n  }, {\n    key: \"start\",\n    value: function start(time) {\n      var _this = this;\n\n      this.started = true;\n      this.beginGame = setInterval(this.generateCorgis, 2000);\n      this.timer.start();\n      this.stage.addChild(_text__WEBPACK_IMPORTED_MODULE_4__[\"pause\"]);\n      this.stage.update();\n      this.endTimer = setTimeout(function () {\n        _text__WEBPACK_IMPORTED_MODULE_4__[\"start\"].text = \"Game over! Your score was \".concat(_this.score.score);\n        _text__WEBPACK_IMPORTED_MODULE_4__[\"corgiTagPercentage\"].text = \"Corgis Tagged: \".concat(_this.stats.corgiTagPercentage(), \"%\");\n        _text__WEBPACK_IMPORTED_MODULE_4__[\"breadTagPercentage\"].text = \"Bread Avoided: \".concat(100 - _this.stats.breadTagPercentage(), \"%\");\n\n        _this.end();\n\n        Object(_text__WEBPACK_IMPORTED_MODULE_4__[\"resize\"])(_text__WEBPACK_IMPORTED_MODULE_4__[\"start\"], _text__WEBPACK_IMPORTED_MODULE_4__[\"corgiTagPercentage\"], _text__WEBPACK_IMPORTED_MODULE_4__[\"breadTagPercentage\"]);\n\n        _this.stage.addChild(_text__WEBPACK_IMPORTED_MODULE_4__[\"start\"], _text__WEBPACK_IMPORTED_MODULE_4__[\"restart\"], _text__WEBPACK_IMPORTED_MODULE_4__[\"corgiTagPercentage\"], _text__WEBPACK_IMPORTED_MODULE_4__[\"breadTagPercentage\"]);\n      }, time);\n    }\n  }, {\n    key: \"end\",\n    value: function end() {\n      this.started = false;\n      this.score.reset();\n      this.stats.reset();\n      this.timer.reset();\n      this.stage.removeAllChildren();\n      this.stage.addChild(this.score.scoreText, this.timer.time);\n      clearInterval(this.beginGame);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      clearInterval(this.beginGame);\n      clearInterval(this.endTimer);\n      Object.keys(this.currentBTickers).forEach(function (_int) {\n        return clearInterval(_int);\n      });\n      this.timer.pause();\n    }\n  }, {\n    key: \"unpause\",\n    value: function unpause(time) {\n      var corgis = Object.values(this.currentBTickers);\n      corgis.forEach(function (corgi) {\n        return corgi.setMotion();\n      });\n      this.start(time);\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/javascript/game.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/javascript/game.js\");\n/* harmony import */ var _pause__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pause */ \"./src/javascript/pause.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"./src/javascript/text.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/javascript/modal.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  window.stage = stage;\n  var canvas = document.getElementById('canvas');\n  var stage = new createjs.Stage(canvas);\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, stage);\n  var score = game.score,\n      stats = game.stats;\n  var pause = new _pause__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stage, game);\n  stage.enableMouseOver(20);\n  var tag = new createjs.Shape();\n  tag.graphics.beginFill(\"#000\").drawRect(-210, -270, canvas.width, canvas.height);\n  _text__WEBPACK_IMPORTED_MODULE_2__[\"start\"].hitArea = tag;\n  Object(_text__WEBPACK_IMPORTED_MODULE_2__[\"resize\"])(_text__WEBPACK_IMPORTED_MODULE_2__[\"start\"]);\n  Object(_text__WEBPACK_IMPORTED_MODULE_2__[\"resize\"])(_text__WEBPACK_IMPORTED_MODULE_2__[\"start\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"restart\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"corgiTagPercentage\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"breadTagPercentage\"]);\n  stage.addChild(_text__WEBPACK_IMPORTED_MODULE_2__[\"start\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"restart\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"corgiTagPercentage\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"breadTagPercentage\"]);\n  stage.update();\n  _text__WEBPACK_IMPORTED_MODULE_2__[\"start\"].addEventListener(\"click\", function (e) {\n    stage.removeChild(_text__WEBPACK_IMPORTED_MODULE_2__[\"start\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"restart\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"corgiTagPercentage\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"breadTagPercentage\"]);\n    _text__WEBPACK_IMPORTED_MODULE_2__[\"restart\"].text = \"(Click anywhere to restart)\";\n    game.start(61000);\n  });\n  Object(_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pause);\n});\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/modal.js":
/*!*********************************!*\
  !*** ./src/javascript/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar registerListeners = function registerListeners(pause) {\n  var modal = document.getElementById('modal');\n  var instructions = document.getElementById('instructions');\n  var instrBtn = document.getElementById('instrBtn');\n  var close = document.getElementById('close');\n\n  window.onclick = function (event) {\n    if (event.target === modal) {\n      modal.style.display = \"none\";\n\n      if (pause.paused) {\n        pause.unpauseGame();\n        playBtn.style.display = \"none\";\n      }\n    }\n  }; // instrBtn.onclick = () => {\n  //   modal.style.display = \"flex\";\n  //   instructions.style.display = \"block\";\n  //   if (pause.game.started) {\n  //     pause.pauseGame(); \n  //   }\n  // }\n  // close.onclick = () => {\n  //   if (!pause.paused) {\n  //     modal.style.display = \"none\"; \n  //   }\n  //   if (pause.game.started) {\n  //     pause.unpauseGame(); \n  //   }\n  //   instructions.style.display = \"none\";  \n  // }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerListeners);\n\n//# sourceURL=webpack:///./src/javascript/modal.js?");

/***/ }),

/***/ "./src/javascript/pause.js":
/*!*********************************!*\
  !*** ./src/javascript/pause.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./src/javascript/text.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Pause =\n/*#__PURE__*/\nfunction () {\n  function Pause(stage, game) {\n    _classCallCheck(this, Pause);\n\n    this.stage = stage;\n    this.game = game;\n    this.pause = _text__WEBPACK_IMPORTED_MODULE_0__[\"pause\"];\n    this.play = _text__WEBPACK_IMPORTED_MODULE_0__[\"play\"];\n    game.stage.addChild(this.pause);\n    this.paused = false;\n    this.addClick = this.addClick.bind(this);\n    this.pauseGame = this.pauseGame.bind(this);\n    this.unpauseGame = this.unpauseGame.bind(this);\n    this.addClick(this.play);\n    this.addClick(this.pause);\n  }\n\n  _createClass(Pause, [{\n    key: \"addClick\",\n    value: function addClick(button) {\n      var _this = this;\n\n      button.addEventListener('click', function () {\n        if (_this.paused) {\n          _this.unpauseGame();\n        } else {\n          _this.pauseGame();\n        }\n\n        _this.stage.update();\n      });\n    }\n  }, {\n    key: \"pauseGame\",\n    value: function pauseGame() {\n      this.stage.removeChild(this.pause);\n      this.paused = true;\n      this.game.pause();\n      document.getElementById('modal').style.display = \"flex\"; // document.getElementById('playBtn').style.display = \"block\";\n\n      this.stage.addChild(this.play);\n    }\n  }, {\n    key: \"unpauseGame\",\n    value: function unpauseGame() {\n      this.stage.addChild(this.pause);\n      this.paused = false;\n      this.game.unpause(this.game.timer.timeLeft * 1000);\n      document.getElementById('modal').style.display = \"none\";\n    }\n  }]);\n\n  return Pause;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pause);\n\n//# sourceURL=webpack:///./src/javascript/pause.js?");

/***/ }),

/***/ "./src/javascript/projectile.js":
/*!**************************************!*\
  !*** ./src/javascript/projectile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _corgi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corgi */ \"./src/javascript/corgi.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Projectile =\n/*#__PURE__*/\nfunction () {\n  function Projectile(canvas, stage, score, stats, currentBTickers) {\n    _classCallCheck(this, Projectile);\n\n    this.canvas = canvas;\n    this.stage = stage;\n    this.currentBTickers = currentBTickers;\n    this.setVelocity = this.setVelocity.bind(this);\n    this.setMotion = this.setMotion.bind(this);\n    this.tick = this.tick.bind(this);\n    this[\"delete\"] = this[\"delete\"].bind(this);\n    this.setMotion();\n    this.time = 0;\n    this.CorgiClass = new _corgi__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, stage, score, stats);\n    this.corgi = this.CorgiClass.generateCorgi(this.interval);\n    this.xDirection = this.corgi.x > canvas.width / 2 ? -1 : 1;\n    this.setVelocity();\n    stage.addChild(this.corgi);\n  }\n\n  _createClass(Projectile, [{\n    key: \"setVelocity\",\n    value: function setVelocity() {\n      this.x_velocity = Math.random() * 12 * this.xDirection;\n      this.y_velocity = Math.random() * 10 + 33;\n    }\n  }, {\n    key: \"setMotion\",\n    value: function setMotion() {\n      this.interval = setInterval(this.tick, 25);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.time += 25;\n      var corgi = this.corgi;\n      var time = this.time / 1000;\n      corgi.x = corgi.x + this.x_velocity;\n      corgi.y = corgi.y - time * (this.y_velocity - 30 * time);\n      corgi.rotation += 3 * this.xDirection;\n\n      if (corgi.y > 800) {\n        this[\"delete\"]();\n      }\n\n      this.stage.update();\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete() {\n      var _this = this;\n\n      this.CorgiClass.deleteCorgi(this.corgi, this.interval);\n      var keys = Object.keys(this.currentBTickers);\n      this.currentBTickers = keys.filter(function (el) {\n        return el !== _this.interval;\n      });\n    }\n  }]);\n\n  return Projectile;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);\n\n//# sourceURL=webpack:///./src/javascript/projectile.js?");

/***/ }),

/***/ "./src/javascript/score.js":
/*!*********************************!*\
  !*** ./src/javascript/score.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./src/javascript/text.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Score =\n/*#__PURE__*/\nfunction () {\n  function Score(stage, timer) {\n    _classCallCheck(this, Score);\n\n    this.stage = stage;\n    this.timer = timer;\n    this.score = 0;\n    this.scoreText = new createjs.Text(\"Score: \".concat(this.score), 'bold 45px Gloria Hallelujah', '#000000');\n    this.scoreText.x = 375;\n    this.scoreText.y = 15;\n    stage.addChild(this.scoreText);\n    this.fixWidth = this.fixWidth.bind(this);\n    this.updateScore = this.updateScore.bind(this);\n    this.reset = this.reset.bind(this);\n  }\n\n  _createClass(Score, [{\n    key: \"fixWidth\",\n    value: function fixWidth() {\n      var startWidth = this.scoreText.getBounds().width;\n      this.scoreText.x = (900 - startWidth) / 2;\n    }\n  }, {\n    key: \"updateScore\",\n    value: function updateScore(type) {\n      if (type === \"corgi\") {\n        this.score += 10;\n      } else {\n        this.score -= 50;\n        this.stage.removeAllChildren();\n        this.stage.addChild(this.scoreText, this.timer.time, _text__WEBPACK_IMPORTED_MODULE_0__[\"pause\"]);\n      }\n\n      this.scoreText.text = \"Score: \".concat(this.score);\n      this.fixWidth();\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.score = 0;\n      this.scoreText.text = \"Score: \".concat(this.score);\n    }\n  }]);\n\n  return Score;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);\n\n//# sourceURL=webpack:///./src/javascript/score.js?");

/***/ }),

/***/ "./src/javascript/stats.js":
/*!*********************************!*\
  !*** ./src/javascript/stats.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Stats =\n/*#__PURE__*/\nfunction () {\n  function Stats(stage) {\n    _classCallCheck(this, Stats);\n\n    this.stage = stage;\n    this.totalCorgis = 0;\n    this.tagCorgis = 0;\n    this.totalBread = 0;\n    this.tagBread = 0;\n    this.increaseTotalCorgis = this.increaseTotalCorgis.bind(this);\n    this.increaseTagCorgis = this.increaseTagCorgis.bind(this);\n    this.increaseTotalBread = this.increaseTotalBread.bind(this);\n    this.increaseTagBread = this.increaseTagBread.bind(this);\n    this.corgiTagPercentage = this.corgiTagPercentage.bind(this);\n    this.breadTagPercentage = this.breadTagPercentage.bind(this);\n    this.reset = this.reset.bind(this);\n  }\n\n  _createClass(Stats, [{\n    key: \"increaseTotalCorgis\",\n    value: function increaseTotalCorgis() {\n      this.totalCorgis += 1;\n    }\n  }, {\n    key: \"increaseTagCorgis\",\n    value: function increaseTagCorgis() {\n      this.tagCorgis += 1;\n    }\n  }, {\n    key: \"increaseTotalBread\",\n    value: function increaseTotalBread() {\n      this.totalBread += 1;\n    }\n  }, {\n    key: \"increaseTagBread\",\n    value: function increaseTagBread() {\n      this.tagBread += 1;\n    }\n  }, {\n    key: \"corgiTagPercentage\",\n    value: function corgiTagPercentage() {\n      return Math.round(this.tagCorgis / this.totalCorgis * 10000) / 100;\n    }\n  }, {\n    key: \"breadTagPercentage\",\n    value: function breadTagPercentage() {\n      return Math.round(this.tagBread / this.totalBread * 10000) / 100;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.totalCorgis = 0;\n      this.tagCorgis = 0;\n      this.totalBread = 0;\n      this.tagBread = 0;\n    }\n  }]);\n\n  return Stats;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);\n\n//# sourceURL=webpack:///./src/javascript/stats.js?");

/***/ }),

/***/ "./src/javascript/text.js":
/*!********************************!*\
  !*** ./src/javascript/text.js ***!
  \********************************/
/*! exports provided: resize, restart, start, corgiTagPercentage, breadTagPercentage, yikes, beCareful, pause, play, endGameMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resize\", function() { return resize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restart\", function() { return restart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"corgiTagPercentage\", function() { return corgiTagPercentage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breadTagPercentage\", function() { return breadTagPercentage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yikes\", function() { return yikes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"beCareful\", function() { return beCareful; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pause\", function() { return pause; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endGameMessage\", function() { return endGameMessage; });\nvar resize = function resize() {\n  for (var _len = arguments.length, texts = new Array(_len), _key = 0; _key < _len; _key++) {\n    texts[_key] = arguments[_key];\n  }\n\n  texts.forEach(function (text) {\n    var width = text.getBounds().width;\n    text.x = (900 - width) / 2;\n  });\n};\nvar restart = new createjs.Text(\"(Click anywhere to start)\", \" bold 25px Gloria Hallelujah\", \"#000000\");\nrestart.y = 480;\nvar start = new createjs.Text(\"Welcome to Corgi Tag!\", \"bold 35px Gloria Hallelujah\", \"#000000\");\nstart.y = 270;\nvar corgiTagPercentage = new createjs.Text(\"Tag as many corgis as you can\", \"bold 35px Gloria Hallelujah\", \"#000000\");\ncorgiTagPercentage.y = 350;\nvar breadTagPercentage = new createjs.Text(\"but don't tag any bread!\", \"bold 35px Gloria Hallelujah\", \"#000000\");\nbreadTagPercentage.y = 400;\nvar yikes = new createjs.Text(\"YIKES!\", \"bold 90px Gloria Hallelujah\", \"#000000\");\nyikes.y = 270;\nvar beCareful = new createjs.Text(\"Be careful!\", \"bold 40px Gloria Hallelujah\", \"#000000\");\nbeCareful.y = 400;\nresize(yikes, beCareful);\nvar pause = new createjs.Bitmap(\"src/images/pause.png\");\npause.x = 15;\npause.y = 675;\nvar play = new createjs.Bitmap(\"src/images/play.png\");\nplay.x = 15;\nplay.y = 675;\nvar phit = new createjs.Shape();\nphit.graphics.beginFill(\"#000\").drawRect(0, 0, 53, 53);\npause.hitArea = phit;\nplay.hitArea = phit;\nvar endGameMessage = function endGameMessage(stage, game, score, stats, time) {\n  setTimeout(function () {\n    start.text = \"Game over! Your score was \".concat(score.score);\n    corgiTagPercentage.text = \"Corgis Tagged: \".concat(stats.corgiTagPercentage(), \"%\");\n    breadTagPercentage.text = \"Bread Avoided: \".concat(100 - stats.breadTagPercentage(), \"%\");\n    game.end();\n    resize(start, corgiTagPercentage, breadTagPercentage);\n    stage.addChild(start, restart, pause, corgiTagPercentage, breadTagPercentage);\n  }, time);\n};\n\n//# sourceURL=webpack:///./src/javascript/text.js?");

/***/ }),

/***/ "./src/javascript/timer.js":
/*!*********************************!*\
  !*** ./src/javascript/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer =\n/*#__PURE__*/\nfunction () {\n  function Timer(stage) {\n    _classCallCheck(this, Timer);\n\n    this.stage = stage;\n    this.timeLeft = 60;\n    this.time = new createjs.Text('60', 'bold 35px Gloria Hallelujah', '#000000');\n    this.time.x = 840;\n    this.time.y = 670;\n    stage.addChild(this.time);\n    this.start = this.start.bind(this);\n    this.pause = this.pause.bind(this);\n    this.reset = this.reset.bind(this);\n  }\n\n  _createClass(Timer, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      this.timer = setInterval(function () {\n        _this.timeLeft -= 1;\n        _this.time.text = _this.timeLeft;\n\n        _this.stage.addChild(_this.time);\n\n        _this.stage.update();\n      }, 1000);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      clearInterval(this.timer);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      clearInterval(this.timer);\n      this.timeLeft = 60;\n      this.time.text = this.timeLeft;\n    }\n  }]);\n\n  return Timer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/javascript/timer.js?");

/***/ })

/******/ });