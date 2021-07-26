/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/demo/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/eslint-loader/index.js?!./src/modules/App/App.ts?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/eslint-loader??ref--12-0!./src/modules/App/App.ts?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    components: {},\n});\n\n\n//# sourceURL=webpack:///./src/modules/App/App.ts?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/eslint-loader??ref--12-0");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/modules/App/App.css?vue&type=style&index=0&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./src/modules/App/App.css?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n}\\n#nav {\\n  padding: 30px;\\n}\\n#nav a {\\n  font-weight: bold;\\n  color: #2c3e50;\\n}\\n#nav a.router-link-exact-active {\\n  color: #42b983;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/App/App.css?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./src/modules/App/App.html?vue&type=template&id=40e8fb9a":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./src/modules/App/App.html?vue&type=template&id=40e8fb9a ***!
  \*****************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nfunction render(_ctx, _cache) {\n  const _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-view\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_router_view))\n}\n\n//# sourceURL=webpack:///./src/modules/App/App.html?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/modules/App/App.css?vue&type=style&index=0&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./src/modules/App/App.css?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!./App.css?vue&type=style&index=0&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/modules/App/App.css?vue&type=style&index=0&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3d9be089\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/modules/App/App.css?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2");

/***/ }),

/***/ "./src/auth/Auth.ts":
/*!**************************!*\
  !*** ./src/auth/Auth.ts ***!
  \**************************/
/*! exports provided: getInstance, routeGuard, setupAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInstance\", function() { return getInstance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routeGuard\", function() { return routeGuard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupAuth\", function() { return setupAuth; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-spa-js */ \"./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\nvar client;\nvar state = Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"reactive\"])({\n    loading: true,\n    isAuthenticated: false,\n    user: {},\n    popupOpen: false,\n    error: null,\n});\nvar getInstance = function () { return authPlugin; };\nfunction loginWithPopup() {\n    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n        var e_1, _a;\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    state.popupOpen = true;\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 3, 4, 5]);\n                    return [4 /*yield*/, client.loginWithPopup(0)];\n                case 2:\n                    _b.sent();\n                    return [3 /*break*/, 5];\n                case 3:\n                    e_1 = _b.sent();\n                    console.error(e_1);\n                    return [3 /*break*/, 5];\n                case 4:\n                    state.popupOpen = false;\n                    return [7 /*endfinally*/];\n                case 5:\n                    _a = state;\n                    return [4 /*yield*/, client.getUser()];\n                case 6:\n                    _a.user = _b.sent();\n                    state.isAuthenticated = true;\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction handleRedirectCallback() {\n    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n        var _a, e_2;\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    state.loading = true;\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 4, 5, 6]);\n                    return [4 /*yield*/, client.handleRedirectCallback()];\n                case 2:\n                    _b.sent();\n                    _a = state;\n                    return [4 /*yield*/, client.getUser()];\n                case 3:\n                    _a.user = _b.sent();\n                    state.isAuthenticated = true;\n                    return [3 /*break*/, 6];\n                case 4:\n                    e_2 = _b.sent();\n                    state.error = e_2;\n                    return [3 /*break*/, 6];\n                case 5:\n                    state.loading = false;\n                    return [7 /*endfinally*/];\n                case 6: return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction loginWithRedirect(o) {\n    return client.loginWithRedirect(o);\n}\nfunction getIdTokenClaims(o) {\n    return client.getIdTokenClaims(o);\n}\nfunction getTokenSilently(o) {\n    return client.getTokenSilently(o);\n}\nfunction getTokenWithPopup(o) {\n    return client.getTokenWithPopup(o);\n}\nfunction logout(o) {\n    return client.logout(o);\n}\nvar authPlugin = {\n    isAuthenticated: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"computed\"])(function () { return state.isAuthenticated; }),\n    loading: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"computed\"])(function () { return state.loading; }),\n    user: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"computed\"])(function () { return state.user; }),\n    getIdTokenClaims: getIdTokenClaims,\n    getTokenSilently: getTokenSilently,\n    getTokenWithPopup: getTokenWithPopup,\n    handleRedirectCallback: handleRedirectCallback,\n    loginWithRedirect: loginWithRedirect,\n    loginWithPopup: loginWithPopup,\n    logout: logout,\n};\n// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\nvar routeGuard = function (to, _from, next) {\n    var isAuthenticated = authPlugin.isAuthenticated, loading = authPlugin.loading, loginWithRedirect = authPlugin.loginWithRedirect;\n    var verify = function () {\n        // If the user is authenticated, continue with the route\n        if (isAuthenticated.value) {\n            return next();\n        }\n        // Otherwise, log in\n        loginWithRedirect({ appState: { targetUrl: to.fullPath } });\n    };\n    // If loading has already finished, check our auth state using `fn()`\n    if (!loading.value) {\n        return verify();\n    }\n    // Watch for the loading property to change before we check isAuthenticated\n    Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"watchEffect\"])(function () {\n        if (loading.value === false) {\n            return verify();\n        }\n    });\n};\nvar setupAuth = function (options, callbackRedirect) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function () {\n    var pepe, e_3, _a, _b;\n    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 4, 5, 8]);\n                return [4 /*yield*/, Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"])({}, options))];\n            case 1:\n                client = _c.sent();\n                if (!(window.location.search.includes(\"code=\") && window.location.search.includes(\"state=\"))) return [3 /*break*/, 3];\n                return [4 /*yield*/, client.handleRedirectCallback()];\n            case 2:\n                pepe = _c.sent();\n                // Notify subscribers that the redirect callback has happened, passing the appState\n                // (useful for retrieving any pre-authentication state)\n                callbackRedirect(pepe.appState);\n                _c.label = 3;\n            case 3: return [3 /*break*/, 8];\n            case 4:\n                e_3 = _c.sent();\n                state.error = e_3;\n                return [3 /*break*/, 8];\n            case 5:\n                // Initialize our internal authentication state\n                _a = state;\n                return [4 /*yield*/, client.isAuthenticated()];\n            case 6:\n                // Initialize our internal authentication state\n                _a.isAuthenticated = _c.sent();\n                _b = state;\n                return [4 /*yield*/, client.getUser()];\n            case 7:\n                _b.user = _c.sent();\n                state.loading = false;\n                return [7 /*endfinally*/];\n            case 8: return [2 /*return*/, {\n                    install: function (app) {\n                        app.config.globalProperties.$auth = authPlugin;\n                    },\n                }];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./src/auth/Auth.ts?");

/***/ }),

/***/ "./src/auth/RouteGuard.ts":
/*!********************************!*\
  !*** ./src/auth/RouteGuard.ts ***!
  \********************************/
/*! exports provided: routeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routeGuard\", function() { return routeGuard; });\n/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth */ \"./src/auth/Auth.ts\");\n\nvar routeGuard = function (to, _from, next) {\n    var authService = Object(_Auth__WEBPACK_IMPORTED_MODULE_0__[\"getInstance\"])();\n    var guardAction = function () {\n        if (authService.isAuthenticated.value) {\n            return next();\n        }\n        authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });\n    };\n    // If the Auth0Plugin has loaded already, check the authentication state\n    if (!authService.loading.value) {\n        return guardAction();\n    }\n    // authService.$watch(\"loading\", (isLoading) => {\n    //   if (isLoading === false) {\n    //     return guardAction();\n    //   }\n    // });\n};\n\n\n//# sourceURL=webpack:///./src/auth/RouteGuard.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _modules_App_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/App/index.vue */ \"./src/modules/App/index.vue\");\n/* harmony import */ var vue_skeletor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-skeletor */ \"./node_modules/vue-skeletor/dist/vue-skeletor.esm.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\n/* harmony import */ var _auth_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/auth/Auth */ \"./src/auth/Auth.ts\");\n\n\n\n\n\n\n\nfunction callbackRedirect(appState) {\n    _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push(appState && appState.targetUrl ? appState.targetUrl : \"/demo/\" + \"login\");\n}\nvar authConfig = {\n    domain: \"boto.eu.auth0.com\",\n    client_id: \"0a6dnQhl2hzRichNO6kMWo1iNtfVCkyi\",\n    redirect_uri: \"https://botoapp.github.io/demo\" + \"/callback\",\n    audience: \"https://botoapp.github.io/demo\",\n};\nObject(_auth_Auth__WEBPACK_IMPORTED_MODULE_5__[\"setupAuth\"])(authConfig, callbackRedirect).then(function (auth) {\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createApp\"])(_modules_App_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        provide: {\n            globalVariable: 123,\n        },\n    })\n        .use(_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n        .use(auth)\n        .use(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n        .component(vue_skeletor__WEBPACK_IMPORTED_MODULE_2__[\"Skeletor\"].name, vue_skeletor__WEBPACK_IMPORTED_MODULE_2__[\"Skeletor\"])\n        .component(\"modal\", {\n        template: \"#modal-template\",\n    })\n        .mount(\"#app\");\n});\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/modules/App/App.css?vue&type=style&index=0&lang=css":
/*!*****************************************************************!*\
  !*** ./src/modules/App/App.css?vue&type=style&index=0&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_App_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!./App.css?vue&type=style&index=0&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/modules/App/App.css?vue&type=style&index=0&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_App_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_App_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_App_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_App_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/modules/App/App.css?");

/***/ }),

/***/ "./src/modules/App/App.html?vue&type=template&id=40e8fb9a":
/*!****************************************************************!*\
  !*** ./src/modules/App/App.html?vue&type=template&id=40e8fb9a ***!
  \****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_App_html_vue_type_template_id_40e8fb9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./App.html?vue&type=template&id=40e8fb9a */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./src/modules/App/App.html?vue&type=template&id=40e8fb9a\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_App_html_vue_type_template_id_40e8fb9a__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/modules/App/App.html?");

/***/ }),

/***/ "./src/modules/App/App.ts?vue&type=script&lang=ts":
/*!********************************************************!*\
  !*** ./src/modules/App/App.ts?vue&type=script&lang=ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_eslint_loader_index_js_ref_12_0_App_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/ts-loader??ref--13-1!../../../node_modules/eslint-loader??ref--12-0!./App.ts?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/eslint-loader/index.js?!./src/modules/App/App.ts?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_eslint_loader_index_js_ref_12_0_App_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/modules/App/App.ts?");

/***/ }),

/***/ "./src/modules/App/index.vue":
/*!***********************************!*\
  !*** ./src/modules/App/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_html_vue_type_template_id_40e8fb9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.html?vue&type=template&id=40e8fb9a */ \"./src/modules/App/App.html?vue&type=template&id=40e8fb9a\");\n/* harmony import */ var _App_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.ts?vue&type=script&lang=ts */ \"./src/modules/App/App.ts?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css?vue&type=style&index=0&lang=css */ \"./src/modules/App/App.css?vue&type=style&index=0&lang=css\");\n\n\n\n\n\n_App_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _App_html_vue_type_template_id_40e8fb9a__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_App_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/modules/App/index.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_App_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/modules/App/index.vue?");

/***/ }),

/***/ "./src/routes/PrivateRoutes.ts":
/*!*************************************!*\
  !*** ./src/routes/PrivateRoutes.ts ***!
  \*************************************/
/*! exports provided: PrivateRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PrivateRoutes\", function() { return PrivateRoutes; });\n/* harmony import */ var _auth_RouteGuard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth/RouteGuard */ \"./src/auth/RouteGuard.ts\");\n\nvar PrivateRoutes = [\n    {\n        path: \"/editor/:id?\",\n        name: \"home.editor\",\n        component: function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! @/modules/Editor/index.vue */ \"./src/modules/Editor/index.vue\")); },\n        beforeEnter: _auth_RouteGuard__WEBPACK_IMPORTED_MODULE_0__[\"routeGuard\"],\n    },\n    {\n        path: \"/dashboard\",\n        name: \"home.dashboard\",\n        component: function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @/modules/Dashboard/index.vue */ \"./src/modules/Dashboard/index.vue\")); },\n        beforeEnter: _auth_RouteGuard__WEBPACK_IMPORTED_MODULE_0__[\"routeGuard\"],\n    },\n    {\n        path: \"/botos\",\n        name: \"home.botos\",\n        component: function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! @/modules/Botos/index.vue */ \"./src/modules/Botos/index.vue\")); },\n        beforeEnter: _auth_RouteGuard__WEBPACK_IMPORTED_MODULE_0__[\"routeGuard\"],\n    },\n];\n\n\n//# sourceURL=webpack:///./src/routes/PrivateRoutes.ts?");

/***/ }),

/***/ "./src/routes/PublicRoutes.ts":
/*!************************************!*\
  !*** ./src/routes/PublicRoutes.ts ***!
  \************************************/
/*! exports provided: PublicRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PublicRoutes\", function() { return PublicRoutes; });\nvar PublicRoutes = [\n    {\n        path: \"/\",\n        name: \"home\",\n        redirect: \"/login\",\n    },\n    {\n        path: \"/login\",\n        name: \"home.login\",\n        component: function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/modules/Login/index.vue */ \"./src/modules/Login/index.vue\")); },\n    },\n    {\n        path: \"/callback\",\n        name: \"home.callback\",\n        component: function () { return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @/modules/Callback/index.vue */ \"./src/modules/Callback/index.vue\")); },\n    },\n];\n\n\n//# sourceURL=webpack:///./src/routes/PublicRoutes.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _PublicRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicRoutes */ \"./src/routes/PublicRoutes.ts\");\n/* harmony import */ var _PrivateRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrivateRoutes */ \"./src/routes/PrivateRoutes.ts\");\n\n\n\n\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"createRouter\"])({\n    history: Object(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"createWebHistory\"])(\"/demo/\"),\n    routes: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__spreadArrays\"])(_PublicRoutes__WEBPACK_IMPORTED_MODULE_2__[\"PublicRoutes\"], _PrivateRoutes__WEBPACK_IMPORTED_MODULE_3__[\"PrivateRoutes\"]),\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n    state: {},\n    mutations: {},\n    actions: {},\n    modules: {},\n}));\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });