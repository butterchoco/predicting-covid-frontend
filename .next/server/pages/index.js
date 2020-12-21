module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Documents\\Kuliah\\PemFung\\predictiing-covid-frontend\\pages\\index.js";


const ChartComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/ChartComponent */ "./components/ChartComponent.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/ChartComponent */ "./components/ChartComponent.js")],
    modules: ["../components/ChartComponent"]
  }
});
function Home() {
  const {
    0: actualData,
    1: setActualData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: predictions,
    1: setPredictions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: daysPredict,
    1: setDaysPredict
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(30);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchData();
    setInterval(fetchData, 5000);
  }, []);

  const fetchData = async () => {
    let covidData;

    try {
      const fetchCovid = await fetch(`${"https://data.covid19.go.id/public/api"}/update.json`);
      covidData = (await fetchCovid.json()).update.harian;
    } catch (e) {
      covidData = [];
    }

    covidData.splice(0, covidData.length - daysPredict);
    const covidCase = covidData.map((data, index) => {
      return {
        day: index + 1,
        positive: data.jumlah_positif.value
      };
    });
    const fetchPredict = await fetch(`${"http://localhost:3000"}/get-predicted-result`, {
      method: "POST",
      body: JSON.stringify({
        cases: covidCase,
        days_predict: daysPredict
      })
    });
    const predictData = await fetchPredict.json();
    saveData(reformatToObject(covidCase), reformatToObject(predictData));
  };

  const reformatToObject = data => {
    const day = data.map(node => {
      return node.day;
    });
    const positive = data.map(node => {
      return node.positive;
    });
    return {
      day: day,
      positive: positive
    };
  };

  const saveData = (covidData, predictData) => {
    setActualData(covidData);
    setPredictions(predictData);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    },
    children: actualData.length !== 0 && predictions.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChartComponent, {
      actualData: actualData,
      predictions: predictions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apexcharts");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcGV4Y2hhcnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2hhcnRDb21wb25lbnQiLCJkeW5hbWljIiwic3NyIiwiSG9tZSIsImFjdHVhbERhdGEiLCJzZXRBY3R1YWxEYXRhIiwidXNlU3RhdGUiLCJwcmVkaWN0aW9ucyIsInNldFByZWRpY3Rpb25zIiwiZGF5c1ByZWRpY3QiLCJzZXREYXlzUHJlZGljdCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInNldEludGVydmFsIiwiY292aWREYXRhIiwiZmV0Y2hDb3ZpZCIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJ1cGRhdGUiLCJoYXJpYW4iLCJlIiwic3BsaWNlIiwibGVuZ3RoIiwiY292aWRDYXNlIiwibWFwIiwiZGF0YSIsImluZGV4IiwiZGF5IiwicG9zaXRpdmUiLCJqdW1sYWhfcG9zaXRpZiIsInZhbHVlIiwiZmV0Y2hQcmVkaWN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXNlcyIsImRheXNfcHJlZGljdCIsInByZWRpY3REYXRhIiwic2F2ZURhdGEiLCJyZWZvcm1hdFRvT2JqZWN0Iiwibm9kZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtR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OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IENoYXJ0Q29tcG9uZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0NoYXJ0Q29tcG9uZW50XCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFthY3R1YWxEYXRhLCBzZXRBY3R1YWxEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJlZGljdGlvbnMsIHNldFByZWRpY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF5c1ByZWRpY3QsIHNldERheXNQcmVkaWN0XSA9IHVzZVN0YXRlKDMwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gICAgc2V0SW50ZXJ2YWwoZmV0Y2hEYXRhLCA1MDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBjb3ZpZERhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmZXRjaENvdmlkID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09WSURfVVJMfS91cGRhdGUuanNvbmBcclxuICAgICAgKTtcclxuICAgICAgY292aWREYXRhID0gKGF3YWl0IGZldGNoQ292aWQuanNvbigpKS51cGRhdGUuaGFyaWFuO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb3ZpZERhdGEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb3ZpZERhdGEuc3BsaWNlKDAsIGNvdmlkRGF0YS5sZW5ndGggLSBkYXlzUHJlZGljdCk7XHJcbiAgICBjb25zdCBjb3ZpZENhc2UgPSBjb3ZpZERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRheTogaW5kZXggKyAxLFxyXG4gICAgICAgIHBvc2l0aXZlOiBkYXRhLmp1bWxhaF9wb3NpdGlmLnZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hQcmVkaWN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9nZXQtcHJlZGljdGVkLXJlc3VsdGAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGNhc2VzOiBjb3ZpZENhc2UsXHJcbiAgICAgICAgICBkYXlzX3ByZWRpY3Q6IGRheXNQcmVkaWN0LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJlZGljdERhdGEgPSBhd2FpdCBmZXRjaFByZWRpY3QuanNvbigpO1xyXG4gICAgc2F2ZURhdGEocmVmb3JtYXRUb09iamVjdChjb3ZpZENhc2UpLCByZWZvcm1hdFRvT2JqZWN0KHByZWRpY3REYXRhKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVmb3JtYXRUb09iamVjdCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBkYXkgPSBkYXRhLm1hcCgobm9kZSkgPT4ge1xyXG4gICAgICByZXR1cm4gbm9kZS5kYXk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBvc2l0aXZlID0gZGF0YS5tYXAoKG5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIG5vZGUucG9zaXRpdmU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IGRheTogZGF5LCBwb3NpdGl2ZTogcG9zaXRpdmUgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlRGF0YSA9IChjb3ZpZERhdGEsIHByZWRpY3REYXRhKSA9PiB7XHJcbiAgICBzZXRBY3R1YWxEYXRhKGNvdmlkRGF0YSk7XHJcbiAgICBzZXRQcmVkaWN0aW9ucyhwcmVkaWN0RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7YWN0dWFsRGF0YS5sZW5ndGggIT09IDAgJiYgcHJlZGljdGlvbnMubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgIDxDaGFydENvbXBvbmVudCBhY3R1YWxEYXRhPXthY3R1YWxEYXRhfSBwcmVkaWN0aW9ucz17cHJlZGljdGlvbnN9IC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBleGNoYXJ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==