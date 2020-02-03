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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config = {\n  viewport: {\n    aspectRatio: 16 / 9,\n    height: 1000\n  },\n\n  performance: {\n    frameRate: 30\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App.js */ \"./src/App.js\");\n/* harmony import */ var _src_states_TitleScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/states/TitleScreen.js */ \"./src/states/TitleScreen.js\");\n\n\n\nconst app = Object(_src_App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nconst game = Object(_src_states_TitleScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\napp.stateStack.push(game)\napp.init()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ \"./config/config.js\");\n/* harmony import */ var _StateStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateStack.js */ \"./src/StateStack.js\");\n/* harmony import */ var _Viewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viewport.js */ \"./src/Viewport.js\");\n/* harmony import */ var _Gamepad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gamepad.js */ \"./src/Gamepad.js\");\n\n\n\n\n\nconst App = () => {\n  const viewport = Object(_Viewport_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  const stateStack = Object(_StateStack_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  const gamepad = Object(_Gamepad_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n  const app = {\n    stateStack,\n\n    tick: (deltaTime) => {\n      if (stateStack.isEmpty()) {\n        // terminate\n      }\n      // window.requestAnimationFrame(gamepad.processInput)\n      gamepad.listen()\n      stateStack.update(deltaTime)\n      stateStack.draw(viewport.canvas)\n    },\n\n    runLoop: (fps) => {\n      let previous = window.performance.now()\n      setInterval(function () {\n        const now = window.performance.now()\n        const delta = now - previous\n        app.tick(delta / fps)\n        previous = window.performance.now()\n      }, 1000 / fps)\n    },\n\n    init: (args) => {\n      viewport.setAspectRatio()\n      window.onresize = function () {\n        viewport.setAspectRatio()\n      }\n      gamepad.listen()\n      app.runLoop(_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].performance.frameRate)\n    }\n  }\n\n  return app\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Gamepad.js":
/*!************************!*\
  !*** ./src/Gamepad.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Gamepad = function () {\n  let controllers = {}\n\n  const gamepadListener = {\n\n    addGamepad: (gamepad) => {\n      controllers[gamepad.index] = gamepad\n    },\n\n    scangamepads: () => {\n      const gamepads = navigator.getGamepads ? navigator.getGamepads() : (\n        navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []\n      )\n      Array.from(gamepads).forEach(function (gamepad) {\n        if (gamepad) {\n          if (gamepad.index in controllers) {\n            controllers[gamepad.index] = gamepad\n          } else {\n            console.log('from scan', gamepad)\n            gamepadListener.addGamepad(gamepad)\n          }\n        }\n      })\n    },\n\n    listen: () => {\n      gamepadListener.scangamepads()\n\n      for (var j in controllers) {\n        var controller = controllers[j]\n\n        for (var i = 0; i < controller.buttons.length; i++) {\n          var val = controller.buttons[i]\n          var pressed = val === 1.0\n          if (typeof val === 'object') {\n            pressed = val.pressed\n            val = val.value\n          }\n\n          if (pressed) {\n            console.log('pressed', i)\n          } else {\n            // b.className = 'button'\n          }\n        }\n\n        for (var k = 0; k < controller.axes.length; k++) {\n          const value = controller.axes[k].toFixed(4)\n          if (value > 0.2 || value < -0.2) console.log('axis', k, value)\n        }\n      }\n    }\n  }\n\n  window.addEventListener('gamepadconnected', function (e) {\n    gamepadListener.addGamepad(e.gamepad)\n  })\n\n  window.addEventListener('gamepaddisconnected', function (e) {\n    const gamepad = e.gamepad\n    delete controllers[gamepad.index]\n  })\n  return gamepadListener\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gamepad);\n\n\n//# sourceURL=webpack:///./src/Gamepad.js?");

/***/ }),

/***/ "./src/StateStack.js":
/*!***************************!*\
  !*** ./src/StateStack.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst StateStack = () => {\n  return {\n    states: [],\n\n    push: function (state) {\n      this.states.push(state)\n    },\n\n    pop: function () {\n      this.states.pop()\n    },\n\n    emptyStack: function () {\n      while (this.states.length > 0) {\n        this.states.pop()\n      }\n    },\n\n    isEmpty: function () {\n      return (this.states.length === 0)\n    },\n\n    update: function (deltaTime) {\n      const stackSize = this.states.length\n      if (stackSize > 0) {\n        const topState = this.states[stackSize - 1]\n        topState.update(deltaTime)\n        // if (topState.fluid) update the other states\n      }\n    },\n\n    draw: function (canvas) {\n      // clear window\n      // canvas.fillStyle = \"#000000\";\n      // canvas.fillRect(0, 0, Config.canvasWidth, Config.canvasHeight);\n      this.states.forEach((state) => {\n        state.draw(canvas)\n      })\n    },\n\n    processRealtimeInput: function (event, isKeyPressed) {\n      for (let i = this.states.length - 1; i >= 0; i--) {\n        // pass events to each state from top of stack to bottom\n        this.states[i].processRealtimeInput(event, isKeyPressed)\n      }\n    },\n\n    processEvent: function (event) {\n      const stackSize = this.states.length\n      if (stackSize > 0) {\n        const topState = this.states[stackSize - 1]\n        topState.processEvent(event)\n        // if (topState.fluid) update the other states\n      }\n      // for (var i = this.stack.length - 1; i >= 0; i--) {\n      // this.stack[i].processEvent(event);\n      // }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateStack);\n\n\n//# sourceURL=webpack:///./src/StateStack.js?");

/***/ }),

/***/ "./src/Viewport.js":
/*!*************************!*\
  !*** ./src/Viewport.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ \"./config/config.js\");\n\n\nconst Viewport = () => {\n  const context = {}\n  const canvasElement = document.getElementById('canvas')\n\n  const ratio = _config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewport.aspectRatio\n  const maxWidth = window.innerHeight * ratio\n\n  canvasElement.width = 1000 * ratio\n  canvasElement.height = 1000\n\n  if (canvasElement.getContext) {\n    const ctx = canvasElement.getContext('2d')\n    context.canvas = ctx\n    context.commandQueue = [] // this should end up somewhere\n  }\n\n  return {\n    canvas: context.canvas,\n\n    setAspectRatio: () => {\n      document.querySelector('#app').style.maxWidth = maxWidth + 'px'\n      document.querySelector('#game').style.setProperty('--aspect-ratio', `${ratio}`)\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Viewport);\n\n\n//# sourceURL=webpack:///./src/Viewport.js?");

/***/ }),

/***/ "./src/states/TitleScreen.js":
/*!***********************************!*\
  !*** ./src/states/TitleScreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config.js */ \"./config/config.js\");\n\n\nconst TitleScreen = () => {\n  const viewportHeight = _config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewport.height\n  const viewportWidth = _config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewport.height * _config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewport.aspectRatio\n\n  return {\n    processEvent: (event) => {\n\n    },\n\n    processRealtimeInput: (event, isKeyPressed) => {\n\n    },\n\n    draw: (canvas) => {\n      canvas.fillRect(\n        0, 0, viewportWidth, viewportHeight\n      )\n    },\n\n    update: (deltaTime) => {\n      // console.log(deltaTime)\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleScreen);\n\n\n//# sourceURL=webpack:///./src/states/TitleScreen.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/ericharm/home/code/dueling/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });