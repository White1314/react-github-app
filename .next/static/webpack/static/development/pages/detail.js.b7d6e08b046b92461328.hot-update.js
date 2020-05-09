webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./components/SearchUser.tsx":
/*!***********************************!*\
  !*** ./components/SearchUser.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/_antd@4.2.0@antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/_antd@4.2.0@antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_4__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var SearchUser = function SearchUser() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      items = _useState2[0],
      setItems = _useState2[1];

  var searchUser = function searchUser(value) {
    var data, items;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function searchUser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSearch(true);
            setItems([]);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_4__["getApiData"])(null, "/search/users?q=".concat(value)));

          case 4:
            data = _context.sent;
            items = data.items || [];
            console.log(items);
            setSearch(false);
            setItems(items);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_0___default.a, {
    showSearch: true,
    notFoundContent: search ? __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: "small"
    }) : __jsx("span", null, "no data"),
    filterOption: false,
    placeholder: "\u641C\u7D22\u7528\u6237",
    allowClear: true,
    onSearch: searchUser,
    style: {
      width: 150,
      marginBottom: 20
    }
  }, items.map(function (item) {
    __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_0___default.a.Option, {
      value: item.value,
      key: item.value
    }, item.login);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ })

})
//# sourceMappingURL=detail.js.b7d6e08b046b92461328.hot-update.js.map