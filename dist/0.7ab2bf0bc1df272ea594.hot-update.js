webpackHotUpdate(0,{

/***/ 146:
/*!*********************************!*\
  !*** ./src/client/app/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 238);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 611);
	
	var _App = __webpack_require__(/*! ./components/App.jsx */ 327);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Home = __webpack_require__(/*! ./components/Home.jsx */ 671);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _ProductList = __webpack_require__(/*! ./components/ProductList.jsx */ 597);
	
	var _ProductList2 = _interopRequireDefault(_ProductList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import ProductPageWrapper from './components/ProductPageWrapper.jsx';
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  {
	    history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    {
	      path: '/',
	      component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, {
	      component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, {
	      path: 'shop',
	      component: _ProductList2.default }),
	    _react2.default.createElement(_reactRouter.IndexRoute, {
	      component: _ProductList2.default }),
	    _react2.default.createElement(_reactRouter.Route, {
	      path: ':id',
	      component: ProductPageWrapper })
	  )
	), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.7ab2bf0bc1df272ea594.hot-update.js.map