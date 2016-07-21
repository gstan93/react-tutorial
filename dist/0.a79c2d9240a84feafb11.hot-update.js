webpackHotUpdate(0,{

/***/ 675:
/*!**********************************************************!*\
  !*** ./src/client/app/components/ProductPageWrapper.jsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProductPage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ProductPage.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _ProductPage2 = _interopRequireDefault(_ProductPage);
	
	var _NotFound = __webpack_require__(/*! ./NotFound.jsx */ 676);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductPageWrapper = function (_React$Component) {
	  _inherits(ProductPageWrapper, _React$Component);
	
	  function ProductPageWrapper() {
	    _classCallCheck(this, ProductPageWrapper);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductPageWrapper).apply(this, arguments));
	  }
	
	  _createClass(ProductPageWrapper, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var product = this.props.products.find(function (p) {
	        return p.id === _this2.props.params.id;
	      });
	
	      return product ? _react2.default.createElement(_ProductPage2.default, {
	        product: product }) : _react2.default.createElement(_NotFound2.default, null);
	    }
	  }]);
	
	  return ProductPageWrapper;
	}(_react2.default.Component);
	
	ProductPageWrapper.propTypes = {
	  products: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	  params: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = ProductPageWrapper;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ProductPageWrapper.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.a79c2d9240a84feafb11.hot-update.js.map