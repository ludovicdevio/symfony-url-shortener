(self["webpackChunk"] = self["webpackChunk"] || []).push([["home"],{

/***/ "./assets/home.js":
/*!************************!*\
  !*** ./assets/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
var form = document.querySelector('#shortenForm');
var shortenCard = document.querySelector('#shortenCard');
var inputUrl = document.querySelector('#url');
var btnShortenUrl = document.querySelector('#btnShortenUrl');
var URL_SHORTEN = '/ajax/shorten';
var errorMessages = {
  'INVALID_ARG_URL': "Impossible de raccourcir ce lien. Ce n'est pas une URL valide",
  'MISSING_ARG_URL': "Veuillez fournir une URL valide"
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(URL_SHORTEN, {
    method: 'POST',
    body: new FormData(e.target)
  }).then(function (response) {
    return response.json();
  }).then(handleData);
});
var handleData = function handleData(data) {
  if (data.statusCode >= 400) {
    return handleError(data);
  }
  inputUrl.value = data.link;
  btnShortenUrl.innerText = "Copier";
  btnShortenUrl.addEventListener('click', function (e) {
    e.preventDefault();
    inputUrl.select();
    document.execCommand('copy');
    this.innerText = "Réduire l'URL";
  }, {
    once: true
  });
};
var handleError = function handleError(data) {
  var alert = document.createElement('div');
  alert.classList.add('alert', 'alert-danger', 'mt-2');
  alert.innerText = errorMessages[data.statusText];
  shortenCard.after(alert);
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--571bb8","vendors-node_modules_core-js_modules_es_promise_js"], () => (__webpack_exec__("./assets/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLElBQUksdUVBQXVFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5saW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvcnRlbkZvcm0nKTtcbmNvbnN0IHNob3J0ZW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3J0ZW5DYXJkJyk7XG5jb25zdCBpbnB1dFVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cmwnKTtcbmNvbnN0IGJ0blNob3J0ZW5VcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2hvcnRlblVybCcpO1xuXG5jb25zdCBVUkxfU0hPUlRFTiA9ICcvYWpheC9zaG9ydGVuJztcblxuY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAnSU5WQUxJRF9BUkdfVVJMJzogXCJJbXBvc3NpYmxlIGRlIHJhY2NvdXJjaXIgY2UgbGllbi4gQ2Ugbidlc3QgcGFzIHVuZSBVUkwgdmFsaWRlXCIsXG4gICAgJ01JU1NJTkdfQVJHX1VSTCc6IFwiVmV1aWxsZXogZm91cm5pciB1bmUgVVJMIHZhbGlkZVwiXG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZldGNoKFVSTF9TSE9SVEVOLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEoZS50YXJnZXQpXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihoYW5kbGVEYXRhKTtcbn0pO1xuXG5jb25zdCBoYW5kbGVEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN0YXR1c0NvZGUgPj0gNDAwKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcihkYXRhKTtcbiAgICB9XG5cbiAgICBpbnB1dFVybC52YWx1ZSA9IGRhdGEubGluaztcbiAgICBidG5TaG9ydGVuVXJsLmlubmVyVGV4dCA9IFwiQ29waWVyXCI7XG5cbiAgICBidG5TaG9ydGVuVXJsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgIGlucHV0VXJsLnNlbGVjdCgpO1xuICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG5cbiAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiUsOpZHVpcmUgbCdVUkxcIjtcbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbmNvbnN0IGhhbmRsZUVycm9yID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJywgJ210LTInKTtcbiAgICBhbGVydC5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2VzW2RhdGEuc3RhdHVzVGV4dF07XG5cbiAgICBzaG9ydGVuQ2FyZC5hZnRlcihhbGVydCk7XG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xuXG4vLyBgQ3JlYXRlSFRNTGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWh0bWxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyByZXBsYWNlKHRvU3RyaW5nKHZhbHVlKSwgcXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGNoZWNrIHRoZSBleGlzdGVuY2Ugb2YgYSBtZXRob2QsIGxvd2VyY2FzZVxuLy8gb2YgYSB0YWcgYW5kIGVzY2FwaW5nIHF1b3RlcyBpbiBhcmd1bWVudHNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSAnJ1tNRVRIT0RfTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUhUTUwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWh0bWwnKTtcbnZhciBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5saW5rYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5saW5rXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCgnbGluaycpIH0sIHtcbiAgbGluazogZnVuY3Rpb24gbGluayh1cmwpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3J0ZW5DYXJkIiwiaW5wdXRVcmwiLCJidG5TaG9ydGVuVXJsIiwiVVJMX1NIT1JURU4iLCJlcnJvck1lc3NhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImhhbmRsZURhdGEiLCJkYXRhIiwic3RhdHVzQ29kZSIsImhhbmRsZUVycm9yIiwidmFsdWUiLCJsaW5rIiwiaW5uZXJUZXh0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJvbmNlIiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhdHVzVGV4dCIsImFmdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==