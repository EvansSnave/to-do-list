"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_1"] = self["webpackChunkto_do_list_1"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\r\n  color: #545862;\r\n  font-weight: 400;\r\n  border: none;\r\n  font-size: calc(1.5vh + 1px);\r\n}\r\n\r\ntextarea:focus,\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.add-task {\r\n  font-style: italic;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-rows: repeat(4, 0fr);\r\n  margin: calc(2vw + 1px);\r\n  row-gap: calc(1vw + 1px);\r\n  width: calc(60vw + 1px);\r\n  box-shadow: 0 2px 8px hsl(0deg 0% 0% / 43%);\r\n  background-color: #fff;\r\n}\r\n\r\nimg {\r\n  width: calc(1vw + 1px);\r\n  float: right;\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n}\r\n\r\n.to-do-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.to-do-list > * {\r\n  margin: calc(1.5vw + 1px);\r\n}\r\n\r\n.task-check {\r\n  margin-right: calc(2vw + 1px);\r\n}\r\n\r\n.demo,\r\n.add-task,\r\n.clear-completed {\r\n  margin: calc(1.5vw + 1px);\r\n}\r\n\r\n.clear-completed {\r\n  margin: 0;\r\n  padding: calc(1.5vw + 1px);\r\n}\r\n\r\n.task-value {\r\n  width: calc(52vw + 1px);\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.block {\r\n  display: block;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-1/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearCompleted: () => (/* binding */ clearCompleted)\n/* harmony export */ });\n/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask */ \"./src/modules/removeTask.js\");\n\r\n\r\nconst clearCompleted = (button, arr) => {\r\n  button.addEventListener('click', () => {\r\n    const completed = arr.filter( element => element.completed === true);\r\n    completed.forEach( element => {\r\n      const label = document.getElementsByClassName('label-case');\r\n      const html = label[element.index];\r\n      (0,_removeTask__WEBPACK_IMPORTED_MODULE_0__.removeTask)(html, arr, element);\r\n    });\r\n  });\r\n};\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/modules/index.js\");\n\r\n\r\nconst display = () => {\r\n  const input = document.querySelector('.add-task');\r\n  input.addEventListener('keypress', (event) => {\r\n    if (event.key === 'Enter') {\r\n      let text = document.querySelector('.add-task');\r\n      if (text.value === '') return;\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(text.value);\r\n      text.value = '';\r\n    };\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   updateStatus: () => (/* binding */ updateStatus)\n/* harmony export */ });\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _src_assets_trash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/assets/trash.png */ \"./src/assets/trash.png\");\n/* harmony import */ var _src_assets_dots_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/assets/dots.png */ \"./src/assets/dots.png\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status.js */ \"./src/modules/status.js\");\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clearAll.js */ \"./src/modules/clearAll.js\");\n/* eslint-disable function-paren-newline */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasks = [];\r\n\r\nconst addTask = (task) => {\r\n  const toDoList = document.querySelector('.to-do-list');\r\n  const label = document.createElement('label');\r\n  const input = document.createElement('input');\r\n  const inputUser = document.createElement('input');\r\n  const dots = document.createElement('img');\r\n  const trash = document.createElement('img');\r\n  dots.src = _src_assets_dots_png__WEBPACK_IMPORTED_MODULE_5__;\r\n  trash.src = _src_assets_trash_png__WEBPACK_IMPORTED_MODULE_4__;\r\n  input.type = 'checkbox';\r\n  dots.classList.add('dots');\r\n  trash.classList.add('trash');\r\n  input.classList.add('task-check');\r\n  inputUser.classList.add('task-value');\r\n  inputUser.value = `${task}`;\r\n  label.append(input, inputUser, dots, trash);\r\n  toDoList.appendChild(label);\r\n  const newTask = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__.TaskToDo(inputUser.value, 0);\r\n  tasks.push(newTask);\r\n  newTask.index = tasks.indexOf(newTask);\r\n  label.classList.add('label-case');\r\n  inputUser.addEventListener('focusin', () => {\r\n    dots.classList.add('none');\r\n    dots.classList.remove('block');\r\n    trash.classList.add('block');\r\n    trash.classList.remove('none');\r\n  });\r\n  inputUser.addEventListener('focusout', () => {\r\n    dots.classList.add('block');\r\n    dots.classList.remove('none');\r\n    trash.classList.add('none');\r\n    trash.classList.remove('block');\r\n  });\r\n  trash.addEventListener('mousedown', () => { \r\n    (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_7__.removeTask)(label, tasks, newTask);\r\n  });\r\n  inputUser.addEventListener('keyup', () => {\r\n    newTask.description = inputUser.value;\r\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.updateInput)(newTask);\r\n  });\r\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.saveData)(newTask, tasks);\r\n  (0,_status_js__WEBPACK_IMPORTED_MODULE_6__.status)(input, newTask, tasks);\r\n};\r\n\r\n(0,_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst updateStatus = (arr) => {\r\n  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));\r\n  arr.forEach(element => {\r\n    const current = savedData[element.index];\r\n    if (current == undefined) return;\r\n    element.completed = current.completed;\r\n    const check = document.getElementsByClassName('task-check');\r\n    const html = check[current.index];\r\n    html.checked = current.completed;\r\n  });\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const removeButton = document.querySelector('.clear-completed')\r\n  ;(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.updateIndex)(tasks);\r\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.getData)();\r\n  (0,_clearAll_js__WEBPACK_IMPORTED_MODULE_8__.clearCompleted)(removeButton, tasks);\r\n  updateStatus(tasks);\r\n});\r\n\r\nconst form = document.querySelector('form');\r\nform.addEventListener('keypress', function (e) {\r\n  if (e.key === 'Enter') {\r\n    e.preventDefault();\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   removeData: () => (/* binding */ removeData),\n/* harmony export */   saveData: () => (/* binding */ saveData),\n/* harmony export */   updateIndex: () => (/* binding */ updateIndex),\n/* harmony export */   updateInput: () => (/* binding */ updateInput)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/modules/index.js\");\n\r\n\r\nconst saveData = (taskData, arr) => {\r\n  if (localStorage.getItem('ObjectSaved') == null) localStorage.setItem('ObjectSaved', '[]');;\r\n  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));\r\n  if (savedData.length < arr.length) savedData.push(taskData);\r\n  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));\r\n};\r\n\r\nconst removeData = (index) => {\r\n  if (localStorage.getItem('ObjectSaved') == null) return;\r\n  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));\r\n  savedData.splice(index, 1);\r\n  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));\r\n};\r\n\r\nconst updateInput = (object) => {\r\n  if (localStorage.getItem('ObjectSaved') == null) return;\r\n  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));\r\n  const OldObject = savedData[object.index];\r\n  OldObject.description = object.description;\r\n  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));\r\n};\r\n\r\nconst updateIndex = (arr) => {\r\n  if (localStorage.getItem('ObjectSaved') == null) return;\r\n  const savedData = JSON.parse(localStorage.getItem('ObjectSaved'));\r\n  arr.forEach( (element, ind) => {\r\n    element.index = ind;\r\n    savedData[ind].index = ind;\r\n    savedData[ind].completed = element.completed;\r\n  });\r\n  localStorage.setItem('ObjectSaved', JSON.stringify(savedData));\r\n};\r\n\r\nconst getData = () => {\r\n  if (localStorage.getItem('ObjectSaved') != null) {\r\n    const data = JSON.parse(localStorage.getItem('ObjectSaved'));\r\n    data.forEach(element => {\r\n      const oldTask = element.description;\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(oldTask);\r\n    });\r\n  };\r\n};\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n\r\n\r\nconst removeTask = (element, arr, obj) => {\r\n  element.remove();\r\n  arr.splice(arr.indexOf(obj), 1);\r\n  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.removeData)(obj.index);\r\n  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.updateIndex)(arr);\r\n};\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   status: () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n\r\n\r\nconst status = (input, object, arr) => {\r\n  input.addEventListener('change', function() {\r\n    if (this.checked) {\r\n      object.completed = true;\r\n    } else {\r\n      object.completed = false;\r\n    };\r\n    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.updateIndex)(arr);\r\n  });\r\n};\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/status.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskToDo: () => (/* binding */ TaskToDo)\n/* harmony export */ });\nclass TaskToDo {\r\n  constructor (description, index, completed = false) {\r\n    document.querySelector('form').addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n    });\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  };\r\n};\n\n//# sourceURL=webpack://to-do-list-1/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/assets/dots.png":
/*!*****************************!*\
  !*** ./src/assets/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fd4c1b073c6db808db5.png\";\n\n//# sourceURL=webpack://to-do-list-1/./src/assets/dots.png?");

/***/ }),

/***/ "./src/assets/trash.png":
/*!******************************!*\
  !*** ./src/assets/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"089321841fb701cd043f.png\";\n\n//# sourceURL=webpack://to-do-list-1/./src/assets/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);