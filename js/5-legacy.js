(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/eslint-loader/index.js?!./src/modules/Callback/Callback.ts?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/eslint-loader??ref--12-0!./src/modules/Callback/Callback.ts?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/routes */ \"./src/routes/index.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n    name: \"Callback\",\n    created: function () {\n        if (this.$route.query.error) {\n            // @ts-expect-error test\n            this.$auth.logout({\n                returnTo: window.location.origin +\n                    (\"/error?error=\" + encodeURI(this.$route.query.error.toString()) + \"&error_description=\" + encodeURI(this.$route.query.error_description.toString())),\n            });\n        }\n        else {\n            _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push({ path: \"dashboard\" });\n        }\n    },\n}));\n\n\n//# sourceURL=webpack:///./src/modules/Callback/Callback.ts?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/eslint-loader??ref--12-0");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./src/modules/Callback/Callback.html?vue&type=template&id=1c9a2d6e":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./src/modules/Callback/Callback.html?vue&type=template&id=1c9a2d6e ***!
  \***************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nfunction render(_ctx, _cache) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\"))\n}\n\n//# sourceURL=webpack:///./src/modules/Callback/Callback.html?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5");

/***/ }),

/***/ "./src/modules/Callback/Callback.html?vue&type=template&id=1c9a2d6e":
/*!**************************************************************************!*\
  !*** ./src/modules/Callback/Callback.html?vue&type=template&id=1c9a2d6e ***!
  \**************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_Callback_html_vue_type_template_id_1c9a2d6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./Callback.html?vue&type=template&id=1c9a2d6e */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./src/modules/Callback/Callback.html?vue&type=template&id=1c9a2d6e\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_Callback_html_vue_type_template_id_1c9a2d6e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/modules/Callback/Callback.html?");

/***/ }),

/***/ "./src/modules/Callback/Callback.ts?vue&type=script&lang=ts":
/*!******************************************************************!*\
  !*** ./src/modules/Callback/Callback.ts?vue&type=script&lang=ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_eslint_loader_index_js_ref_12_0_Callback_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/ts-loader??ref--13-1!../../../node_modules/eslint-loader??ref--12-0!./Callback.ts?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/eslint-loader/index.js?!./src/modules/Callback/Callback.ts?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_eslint_loader_index_js_ref_12_0_Callback_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/modules/Callback/Callback.ts?");

/***/ }),

/***/ "./src/modules/Callback/index.vue":
/*!****************************************!*\
  !*** ./src/modules/Callback/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Callback_html_vue_type_template_id_1c9a2d6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callback.html?vue&type=template&id=1c9a2d6e */ \"./src/modules/Callback/Callback.html?vue&type=template&id=1c9a2d6e\");\n/* harmony import */ var _Callback_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Callback.ts?vue&type=script&lang=ts */ \"./src/modules/Callback/Callback.ts?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport */\n\n\n_Callback_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Callback_html_vue_type_template_id_1c9a2d6e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Callback_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/modules/Callback/index.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Callback_ts_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/modules/Callback/index.vue?");

/***/ })

}]);