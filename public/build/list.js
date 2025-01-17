"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["list"],{

/***/ "./assets/list.js":
/*!************************!*\
  !*** ./assets/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");








var copyToast = new bootstrap__WEBPACK_IMPORTED_MODULE_7__.Toast('#copyToast', {
  autohide: true,
  delay: 2000
});
var listGroupItems = document.querySelectorAll('.list-group-item');
var actions = document.querySelector('#actions');
var btnCopy = document.querySelector('#btnCopy');
var btnStats = document.querySelector('#btnStats');
var btnDelete = document.querySelector('#btnDelete');
var URL_DELETE = '/ajax/delete';
var URL_STATISTICS = '/statistics';
var selectedItem = null;
var hash = null;
listGroupItems.forEach(function (item) {
  item.addEventListener('click', function () {
    if (selectedItem === this) {
      selectedItem = null;
      hash = null;
      this.classList.remove('active');
      toggleButtonsInteraction(true);
      return;
    }
    listGroupItems.forEach(function (item) {
      return item.classList.remove('active');
    });
    selectedItem = this;
    hash = selectedItem.dataset.hash;
    selectedItem.classList.add('active');
    toggleButtonsInteraction();
  });
});
btnCopy.addEventListener('click', function () {
  var link = document.querySelector("#anchor_".concat(hash));
  navigator.clipboard.writeText(link.href).then(function () {
    copyToast.show();
  });
});
btnStats.addEventListener('click', function () {
  if (hash) {
    window.open("".concat(URL_STATISTICS, "/").concat(hash));
  }
});
btnDelete.addEventListener('click', function () {
  fetch("".concat(URL_DELETE, "/").concat(hash)).then(function (response) {
    return response.json();
  }).then(handleData);
});
var toggleButtonsInteraction = function toggleButtonsInteraction() {
  var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  Array.from(actions.children).forEach(function (button) {
    button.disabled = isDisabled;
  });
};
var handleData = function handleData(data) {
  switch (data.statusCode) {
    case 'DELETE_SUCCESSFUL':
      selectedItem.remove();
      break;
  }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--571bb8","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--d86934","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-413ffd"], () => (__webpack_exec__("./assets/list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUVsQyxJQUFNQyxTQUFTLEdBQUcsSUFBSUQsNENBQUssQ0FBQyxZQUFZLEVBQUM7RUFDckNFLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQztBQUdGLElBQU1DLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNwRSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUVsRCxJQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNsRCxJQUFNRSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxJQUFNRyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFlBQVksQ0FBQztBQUV0RCxJQUFNSSxVQUFVLEdBQUcsY0FBYztBQUNqQyxJQUFNQyxjQUFjLEdBQUcsYUFBYTtBQUVwQyxJQUFJQyxZQUFZLEdBQUcsSUFBSTtBQUN2QixJQUFJQyxJQUFJLEdBQUcsSUFBSTtBQUVmWCxjQUFjLENBQUNZLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7RUFDNUJBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDdkMsSUFBSUosWUFBWSxLQUFLLElBQUksRUFBRTtNQUN2QkEsWUFBWSxHQUFHLElBQUk7TUFDbkJDLElBQUksR0FBRyxJQUFJO01BQ1gsSUFBSSxDQUFDSSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDL0JDLHdCQUF3QixDQUFDLElBQUksQ0FBQztNQUM5QjtJQUNKO0lBRUFqQixjQUFjLENBQUNZLE9BQU8sQ0FBQyxVQUFBQyxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFBQSxFQUFDO0lBRS9ETixZQUFZLEdBQUcsSUFBSTtJQUNuQkMsSUFBSSxHQUFHRCxZQUFZLENBQUNRLE9BQU8sQ0FBQ1AsSUFBSTtJQUNoQ0QsWUFBWSxDQUFDSyxTQUFTLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDcENGLHdCQUF3QixDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUZaLE9BQU8sQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7RUFDekMsSUFBTU0sSUFBSSxHQUFHbkIsUUFBUSxDQUFDRyxhQUFhLFlBQUFpQixNQUFBLENBQVlWLElBQUksQ0FBRSxDQUFDO0VBQ3REVyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSixJQUFJLENBQUNLLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBTTtJQUNoRDdCLFNBQVMsQ0FBQzhCLElBQUksQ0FBQyxDQUFDO0VBQ3BCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGckIsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztFQUMxQyxJQUFJSCxJQUFJLEVBQUU7SUFDTmlCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFBUixNQUFBLENBQUlaLGNBQWMsT0FBQVksTUFBQSxDQUFJVixJQUFJLENBQUUsQ0FBQztFQUM1QztBQUNKLENBQUMsQ0FBQztBQUVGSixTQUFTLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0VBQzNDZ0IsS0FBSyxJQUFBVCxNQUFBLENBQUliLFVBQVUsT0FBQWEsTUFBQSxDQUFJVixJQUFJLENBQUUsQ0FBQyxDQUN6QmUsSUFBSSxDQUFDLFVBQUFLLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQUEsRUFBQyxDQUNqQ04sSUFBSSxDQUFDTyxVQUFVLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsSUFBTWhCLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0JBLENBQUEsRUFBZ0M7RUFBQSxJQUFwQmlCLFVBQVUsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsS0FBSztFQUN4REcsS0FBSyxDQUFDQyxJQUFJLENBQUNwQyxPQUFPLENBQUNxQyxRQUFRLENBQUMsQ0FBQzVCLE9BQU8sQ0FBQyxVQUFBNkIsTUFBTSxFQUFJO0lBQzNDQSxNQUFNLENBQUNDLFFBQVEsR0FBR1IsVUFBVTtFQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTUQsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQVlVLElBQUksRUFBRTtFQUM5QixRQUFRQSxJQUFJLENBQUNDLFVBQVU7SUFDbkIsS0FBSyxtQkFBbUI7TUFDcEJsQyxZQUFZLENBQUNNLE1BQU0sQ0FBQyxDQUFDO01BQ3pCO0VBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG5cbmNvbnN0IGNvcHlUb2FzdCA9IG5ldyBUb2FzdCgnI2NvcHlUb2FzdCcse1xuICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgIGRlbGF5OiAyMDAwXG59KTtcblxuXG5jb25zdCBsaXN0R3JvdXBJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWdyb3VwLWl0ZW0nKTtcbmNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9ucycpO1xuXG5jb25zdCBidG5Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNvcHknKTtcbmNvbnN0IGJ0blN0YXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blN0YXRzJyk7XG5jb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuRGVsZXRlJyk7XG5cbmNvbnN0IFVSTF9ERUxFVEUgPSAnL2FqYXgvZGVsZXRlJztcbmNvbnN0IFVSTF9TVEFUSVNUSUNTID0gJy9zdGF0aXN0aWNzJ1xuXG5sZXQgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbmxldCBoYXNoID0gbnVsbDtcblxubGlzdEdyb3VwSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gdGhpcykge1xuICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICBoYXNoID0gbnVsbDtcbiAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgdG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uKHRydWUpO1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgfVxuXG4gICAgICAgbGlzdEdyb3VwSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcztcbiAgICAgICBoYXNoID0gc2VsZWN0ZWRJdGVtLmRhdGFzZXQuaGFzaDtcbiAgICAgICBzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgdG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uKCk7XG4gICB9KVxufSk7XG5cbmJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FuY2hvcl8ke2hhc2h9YCk7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluay5ocmVmKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29weVRvYXN0LnNob3coKTtcbiAgICB9KTtcbn0pXG5cbmJ0blN0YXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oYCR7VVJMX1NUQVRJU1RJQ1N9LyR7aGFzaH1gKTtcbiAgICB9XG59KVxuXG5idG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBmZXRjaChgJHtVUkxfREVMRVRFfS8ke2hhc2h9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihoYW5kbGVEYXRhKTtcbn0pXG5cbmNvbnN0IHRvZ2dsZUJ1dHRvbnNJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uKGlzRGlzYWJsZWQgPSBmYWxzZSkge1xuICAgIEFycmF5LmZyb20oYWN0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIH0pXG59XG5cbmNvbnN0IGhhbmRsZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgc3dpdGNoIChkYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgY2FzZSAnREVMRVRFX1NVQ0NFU1NGVUwnOlxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnJlbW92ZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG59Il0sIm5hbWVzIjpbIlRvYXN0IiwiY29weVRvYXN0IiwiYXV0b2hpZGUiLCJkZWxheSIsImxpc3RHcm91cEl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3IiLCJidG5Db3B5IiwiYnRuU3RhdHMiLCJidG5EZWxldGUiLCJVUkxfREVMRVRFIiwiVVJMX1NUQVRJU1RJQ1MiLCJzZWxlY3RlZEl0ZW0iLCJoYXNoIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uIiwiZGF0YXNldCIsImFkZCIsImxpbmsiLCJjb25jYXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJocmVmIiwidGhlbiIsInNob3ciLCJ3aW5kb3ciLCJvcGVuIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJoYW5kbGVEYXRhIiwiaXNEaXNhYmxlZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJkYXRhIiwic3RhdHVzQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=