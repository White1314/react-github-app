webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.tsx":
/*!**************************!*\
  !*** ./pages/detail.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/_antd@4.2.0@antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.5@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions/index.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var _components_Issues__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Issues */ "./components/Issues.tsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SearchUser */ "./components/SearchUser.tsx");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Detail = function Detail(_ref) {
  var _userRepo$owner, _userRepo$owner2, _userRepo$owner3;

  var owner = _ref.owner,
      name = _ref.name;
  var userRepo = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.detail.user_repo;
  });
  var repoReadme = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.detail.repo_readme;
  });
  var repoIssues = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.detail.repo_issues;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(repoIssues),
      issues = _useState[0],
      setIssues = _useState[1]; // 父组件执行筛选用户的操作


  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function _callee(value) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(null, "/repos/".concat(owner, "/").concat(name, "/issues?creator=").concat(value)));

          case 2:
            data = _context.sent;
            setIssues(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1988351315" + " " + "root"
  }, __jsx("div", {
    className: "jsx-1988351315" + " " + "head"
  }, __jsx("img", {
    src: (_userRepo$owner = userRepo.owner) === null || _userRepo$owner === void 0 ? void 0 : _userRepo$owner.avatar_url,
    alt: "",
    className: "jsx-1988351315" + " " + "head-img"
  }), __jsx("span", {
    className: "jsx-1988351315" + " " + "head-login"
  }, (_userRepo$owner2 = userRepo.owner) === null || _userRepo$owner2 === void 0 ? void 0 : _userRepo$owner2.login), __jsx("a", {
    className: "jsx-1988351315" + " " + "head-name"
  }, "".concat(userRepo.name, " / ").concat((_userRepo$owner3 = userRepo.owner) === null || _userRepo$owner3 === void 0 ? void 0 : _userRepo$owner3.login))), __jsx("div", {
    className: "jsx-1988351315" + " " + "content"
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a, {
    defaultActiveKey: "0",
    animated: false
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane, {
    tab: "\u6587\u6863",
    key: "0"
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: repoReadme.content,
    isBase64: true
  })), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane, {
    tab: "\u8BA8\u8BBA",
    key: "1"
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: onChange
  }), issues.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "jsx-1988351315" + " " + "issue"
    }, __jsx(_components_Issues__WEBPACK_IMPORTED_MODULE_8__["default"], {
      issues: item
    }));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1988351315"
  }, ".root.jsx-1988351315{height:100%;overflow-y:auto;}.head.jsx-1988351315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;}.head-img.jsx-1988351315{width:30px;height:30px;}.head-login.jsx-1988351315{color:#666;margin:0 10px;}.head-name.jsx-1988351315{font-weight:500;}.content.jsx-1988351315{margin-right:20px;}.issue.jsx-1988351315:hover{border-top:1px solid #6739b6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR3VCLEFBSUMsQUFLRixBQUlBLEFBSUssQUFHRSxBQUdXLFdBYmpCLEFBSUUsQ0FiRSxJQWlCbEIsRUFHQSxLQVZBLEVBSUEsR0FiQSxDQXNCQSw2Q0FuQnFCLDZGQUNKLGVBQ2pCIiwiZmlsZSI6IkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcZGV0YWlsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBnZXRBcGlEYXRhIH0gZnJvbSAnLi4vc2VydmVyL3V0aWxzLmpzJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvTWFya2Rvd24nO1xyXG5pbXBvcnQgSXNzdWVzIGZyb20gJy4uL2NvbXBvbmVudHMvSXNzdWVzJztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFMge1xyXG4gIGRldGFpbDoge1xyXG4gICAgdXNlcl9yZXBvPzoge1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIG93bmVyOiB7XHJcbiAgICAgICAgYXZhdGFyX3VybDogc3RyaW5nO1xyXG4gICAgICAgIGxvZ2luOiBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmVwb19yZWFkbWU/OiB7XHJcbiAgICAgIGNvbnRlbnQ6IGFueTtcclxuICAgIH07XHJcbiAgICByZXBvX2lzc3VlczogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbCA9ICh7IG93bmVyLCBuYW1lIH0pID0+IHtcclxuICBjb25zdCB1c2VyUmVwbyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUykgPT4gc3RhdGUuZGV0YWlsLnVzZXJfcmVwbyk7XHJcbiAgY29uc3QgcmVwb1JlYWRtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUykgPT4gc3RhdGUuZGV0YWlsLnJlcG9fcmVhZG1lKTtcclxuICBjb25zdCByZXBvSXNzdWVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTKSA9PiBzdGF0ZS5kZXRhaWwucmVwb19pc3N1ZXMpO1xyXG5cclxuICBjb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUocmVwb0lzc3Vlcyk7XHJcblxyXG4gIC8vIOeItue7hOS7tuaJp+ihjOetm+mAieeUqOaIt+eahOaTjeS9nFxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QXBpRGF0YShcclxuICAgICAgbnVsbCxcclxuICAgICAgYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlcz9jcmVhdG9yPSR7dmFsdWV9YFxyXG4gICAgKTtcclxuICAgIHNldElzc3VlcyhkYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt1c2VyUmVwby5vd25lcj8uYXZhdGFyX3VybH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaGVhZC1pbWdcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZC1sb2dpblwiPnt1c2VyUmVwby5vd25lcj8ubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZC1uYW1lXCI+e2Ake3VzZXJSZXBvLm5hbWV9IC8gJHt1c2VyUmVwby5vd25lcj8ubG9naW59YH08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5paH5qGjXCIga2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgIDxNYXJrZG93biBjb250ZW50PXtyZXBvUmVhZG1lLmNvbnRlbnR9IGlzQmFzZTY0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLorqjorrpcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaFVzZXIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIHtpc3N1ZXMubWFwKChpdGVtOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8SXNzdWVzIGlzc3Vlcz17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkLWltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWQtbG9naW4ge1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWQtbmFtZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY3MzliNjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IHN0b3JlLCBxdWVyeSB9ID0gY3R4O1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IHF1ZXJ5O1xyXG5cclxuICBjb25zdCBkYXRhID0gUHJvbWlzZS5hbGwoW1xyXG4gICAgYXdhaXQgZ2V0QXBpRGF0YShjdHgsIGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWApLFxyXG4gICAgYXdhaXQgZ2V0QXBpRGF0YShjdHgsIGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9yZWFkbWVgKSxcclxuICAgIGF3YWl0IGdldEFwaURhdGEoY3R4LCBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCksXHJcbiAgXSk7XHJcblxyXG4gIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZ2V0RGV0YWlsUmVwb3MoZGF0YVswXSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZ2V0UmVwb1JlYWRtZShkYXRhWzFdKSk7XHJcbiAgc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5nZXRSZXBvSXNzdWVzKGRhdGFbMl0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG93bmVyLFxyXG4gICAgbmFtZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\pages\\\\detail.tsx */"));
};

Detail.getInitialProps = function _callee2(_ref2) {
  var ctx, store, query, owner, name, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ctx = _ref2.ctx;
          store = ctx.store, query = ctx.query;
          owner = query.owner, name = query.name;
          _context2.t0 = Promise;
          _context2.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name)));

        case 6:
          _context2.t1 = _context2.sent;
          _context2.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name, "/readme")));

        case 9:
          _context2.t2 = _context2.sent;
          _context2.next = 12;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name, "/issues")));

        case 12:
          _context2.t3 = _context2.sent;
          _context2.t4 = [_context2.t1, _context2.t2, _context2.t3];
          data = _context2.t0.all.call(_context2.t0, _context2.t4);
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["getDetailRepos"](data[0]));
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["getRepoReadme"](data[1]));
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["getRepoIssues"](data[2]));
          return _context2.abrupt("return", {
            owner: owner,
            name: name
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.e58aa96a614d2e0c7896.hot-update.js.map