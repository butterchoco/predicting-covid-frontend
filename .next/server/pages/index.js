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
    const responseActualData = await fetchActualData();
    const slicedCovidData = sliceData(responseActualData, daysPredict);
    const covidCase = reformatResponseToBackendFormat(slicedCovidData);
    const predictData = await sendDataToBackend(covidCase, daysPredict);
    saveData(reformatToObject(covidCase), reformatToObject(predictData));
  };

  const fetchActualData = async () => {
    let covidData;

    try {
      const fetchCovid = await fetch(`${"https://data.covid19.go.id/public/api"}/update.json`);
      covidData = (await fetchCovid.json()).update.harian;
    } catch (e) {
      covidData = [];
    }

    return covidData;
  };

  const sendDataToBackend = async (covidData, daysToPredict) => {
    let predictData;

    try {
      const fetchPredict = await fetch(`${"http://localhost:3000"}/get-predicted-result`, {
        method: "POST",
        body: JSON.stringify({
          cases: covidData,
          days_predict: daysToPredict
        })
      });
      predictData = await fetchPredict.json();
    } catch (e) {
      predictData = [];
    }

    return predictData;
  };

  const sliceData = (arr, dataRemain) => {
    const clone = [...arr];
    clone.splice(0, arr.length - dataRemain);
    return clone;
  };

  const reformatResponseToBackendFormat = rawData => {
    return rawData.map((data, index) => {
      return {
        day: index + 1,
        positive: data.jumlah_positif.value
      };
    });
  };

  const reformatToObject = data => {
    const day = data.map(node => node.day);
    const positive = data.map(node => node.positive);
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
      lineNumber: 95,
      columnNumber: 9
    }, this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcGV4Y2hhcnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2hhcnRDb21wb25lbnQiLCJkeW5hbWljIiwic3NyIiwiSG9tZSIsImFjdHVhbERhdGEiLCJzZXRBY3R1YWxEYXRhIiwidXNlU3RhdGUiLCJwcmVkaWN0aW9ucyIsInNldFByZWRpY3Rpb25zIiwiZGF5c1ByZWRpY3QiLCJzZXREYXlzUHJlZGljdCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInNldEludGVydmFsIiwicmVzcG9uc2VBY3R1YWxEYXRhIiwiZmV0Y2hBY3R1YWxEYXRhIiwic2xpY2VkQ292aWREYXRhIiwic2xpY2VEYXRhIiwiY292aWRDYXNlIiwicmVmb3JtYXRSZXNwb25zZVRvQmFja2VuZEZvcm1hdCIsInByZWRpY3REYXRhIiwic2VuZERhdGFUb0JhY2tlbmQiLCJzYXZlRGF0YSIsInJlZm9ybWF0VG9PYmplY3QiLCJjb3ZpZERhdGEiLCJmZXRjaENvdmlkIiwiZmV0Y2giLCJwcm9jZXNzIiwianNvbiIsInVwZGF0ZSIsImhhcmlhbiIsImUiLCJkYXlzVG9QcmVkaWN0IiwiZmV0Y2hQcmVkaWN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXNlcyIsImRheXNfcHJlZGljdCIsImFyciIsImRhdGFSZW1haW4iLCJjbG9uZSIsInNwbGljZSIsImxlbmd0aCIsInJhd0RhdGEiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJkYXkiLCJwb3NpdGl2ZSIsImp1bWxhaF9wb3NpdGlmIiwidmFsdWUiLCJub2Rl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QUFDakMsVUFBTUUsR0FBRyxHQUFHRixJQUFJLENBQUNELEdBQUwsQ0FBVU8sSUFBRCxJQUFVQSxJQUFJLENBQUNKLEdBQXhCLENBQVo7QUFDQSxVQUFNQyxRQUFRLEdBQUdILElBQUksQ0FBQ0QsR0FBTCxDQUFVTyxJQUFELElBQVVBLElBQUksQ0FBQ0gsUUFBeEIsQ0FBakI7QUFDQSxXQUFPO0FBQUVELFNBQUcsRUFBRUEsR0FBUDtBQUFZQyxjQUFRLEVBQUVBO0FBQXRCLEtBQVA7QUFDRCxHQUpEOztBQU1BLFFBQU01QixRQUFRLEdBQUcsQ0FBQ0UsU0FBRCxFQUFZSixXQUFaLEtBQTRCO0FBQzNDZixpQkFBYSxDQUFDbUIsU0FBRCxDQUFiO0FBQ0FoQixrQkFBYyxDQUFDWSxXQUFELENBQWQ7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xrQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxFQUFFLFFBRlA7QUFHTEMsb0JBQWMsRUFBRSxRQUhYO0FBSUxDLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFBQSxjQVFHckQsVUFBVSxDQUFDd0MsTUFBWCxLQUFzQixDQUF0QixJQUEyQnJDLFdBQVcsQ0FBQ3FDLE1BQVosS0FBdUIsQ0FBbEQsZ0JBQ0MscUVBQUMsY0FBRDtBQUFnQixnQkFBVSxFQUFFeEMsVUFBNUI7QUFBd0MsaUJBQVcsRUFBRUc7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEdBRUc7QUFWTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRCxDOzs7Ozs7Ozs7OztBQ2xHRCx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBDaGFydENvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9DaGFydENvbXBvbmVudFwiKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbYWN0dWFsRGF0YSwgc2V0QWN0dWFsRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3ByZWRpY3Rpb25zLCBzZXRQcmVkaWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RheXNQcmVkaWN0LCBzZXREYXlzUHJlZGljdF0gPSB1c2VTdGF0ZSgzMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICAgIHNldEludGVydmFsKGZldGNoRGF0YSwgNTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZUFjdHVhbERhdGEgPSBhd2FpdCBmZXRjaEFjdHVhbERhdGEoKTtcclxuICAgIGNvbnN0IHNsaWNlZENvdmlkRGF0YSA9IHNsaWNlRGF0YShyZXNwb25zZUFjdHVhbERhdGEsIGRheXNQcmVkaWN0KTtcclxuICAgIGNvbnN0IGNvdmlkQ2FzZSA9IHJlZm9ybWF0UmVzcG9uc2VUb0JhY2tlbmRGb3JtYXQoc2xpY2VkQ292aWREYXRhKTtcclxuICAgIGNvbnN0IHByZWRpY3REYXRhID0gYXdhaXQgc2VuZERhdGFUb0JhY2tlbmQoY292aWRDYXNlLCBkYXlzUHJlZGljdCk7XHJcbiAgICBzYXZlRGF0YShyZWZvcm1hdFRvT2JqZWN0KGNvdmlkQ2FzZSksIHJlZm9ybWF0VG9PYmplY3QocHJlZGljdERhdGEpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEFjdHVhbERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgY292aWREYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hDb3ZpZCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPVklEX1VSTH0vdXBkYXRlLmpzb25gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvdmlkRGF0YSA9IChhd2FpdCBmZXRjaENvdmlkLmpzb24oKSkudXBkYXRlLmhhcmlhbjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY292aWREYXRhID0gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY292aWREYXRhO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmREYXRhVG9CYWNrZW5kID0gYXN5bmMgKGNvdmlkRGF0YSwgZGF5c1RvUHJlZGljdCkgPT4ge1xyXG4gICAgbGV0IHByZWRpY3REYXRhO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hQcmVkaWN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2dldC1wcmVkaWN0ZWQtcmVzdWx0YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBjYXNlczogY292aWREYXRhLFxyXG4gICAgICAgICAgICBkYXlzX3ByZWRpY3Q6IGRheXNUb1ByZWRpY3QsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHByZWRpY3REYXRhID0gYXdhaXQgZmV0Y2hQcmVkaWN0Lmpzb24oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcHJlZGljdERhdGEgPSBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmVkaWN0RGF0YTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzbGljZURhdGEgPSAoYXJyLCBkYXRhUmVtYWluKSA9PiB7XHJcbiAgICBjb25zdCBjbG9uZSA9IFsuLi5hcnJdO1xyXG4gICAgY2xvbmUuc3BsaWNlKDAsIGFyci5sZW5ndGggLSBkYXRhUmVtYWluKTtcclxuICAgIHJldHVybiBjbG9uZTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWZvcm1hdFJlc3BvbnNlVG9CYWNrZW5kRm9ybWF0ID0gKHJhd0RhdGEpID0+IHtcclxuICAgIHJldHVybiByYXdEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXk6IGluZGV4ICsgMSxcclxuICAgICAgICBwb3NpdGl2ZTogZGF0YS5qdW1sYWhfcG9zaXRpZi52YWx1ZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZm9ybWF0VG9PYmplY3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgZGF5ID0gZGF0YS5tYXAoKG5vZGUpID0+IG5vZGUuZGF5KTtcclxuICAgIGNvbnN0IHBvc2l0aXZlID0gZGF0YS5tYXAoKG5vZGUpID0+IG5vZGUucG9zaXRpdmUpO1xyXG4gICAgcmV0dXJuIHsgZGF5OiBkYXksIHBvc2l0aXZlOiBwb3NpdGl2ZSB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmVEYXRhID0gKGNvdmlkRGF0YSwgcHJlZGljdERhdGEpID0+IHtcclxuICAgIHNldEFjdHVhbERhdGEoY292aWREYXRhKTtcclxuICAgIHNldFByZWRpY3Rpb25zKHByZWRpY3REYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHthY3R1YWxEYXRhLmxlbmd0aCAhPT0gMCAmJiBwcmVkaWN0aW9ucy5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgPENoYXJ0Q29tcG9uZW50IGFjdHVhbERhdGE9e2FjdHVhbERhdGF9IHByZWRpY3Rpb25zPXtwcmVkaWN0aW9uc30gLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9