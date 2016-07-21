webpackHotUpdate(0,{

/***/ 327:
/*!*******************************************!*\
  !*** ./src/client/app/components/App.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Header = __webpack_require__(/*! ./Header.jsx */ 328);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(/*! ./Footer.jsx */ 596);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Products = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Products.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Products2 = _interopRequireDefault(_Products);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	var _immutable = __webpack_require__(/*! immutable */ 677);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.state = {
	      products: _Products2.default,
	      cart: (0, _immutable.Map)()
	    };
	
	    _this.handleAddToCart = _this.handleAddToCart.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'handleAddToCart',
	    value: function handleAddToCart(product, quantity) {
	      var newCart = this.state.cart.update(product.id, function (p) {
	        return p ? _extends({}, p, {
	          quantity: p.quantity + quantity
	        }) : {
	          product: product,
	          quantity: quantity
	        };
	      });
	
	      this.setState({
	        cart: newCart
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, {
	          cart: this.state.cart }),
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          { id: 'content' },
	          _react2.default.cloneElement(this.props.children, _extends({
	            handleAddToCart: this.handleAddToCart
	          }, this.state))
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	App.propTypes = {
	  children: _react2.default.PropTypes.element.isRequired
	};
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.c818b14e1ea5c1bc6ae5.hot-update.js.map