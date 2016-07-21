webpackHotUpdate(0,{

/***/ 328:
/*!**********************************************!*\
  !*** ./src/client/app/components/Header.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ 672);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Navbar,
	        { fixedTop: true },
	        _react2.default.createElement(
	          _reactBootstrap.Navbar.Header,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Navbar.Brand,
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '/' },
	              'Our Awesome Store'
	            )
	          ),
	          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Navbar.Collapse,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            { pullRight: true },
	            _react2.default.createElement(
	              _reactRouterBootstrap.IndexLinkContainer,
	              { to: '/' },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                {
	                  eventKey: 1,
	                  href: '#' },
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterBootstrap.IndexLinkContainer,
	              { to: '/shop' },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                {
	                  eventKey: 2,
	                  href: '#' },
	                'Shop'
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.NavItem,
	              {
	                eventKey: 3,
	                href: '#' },
	              ' Cart'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.d63b5ad139a49ce4071c.hot-update.js.map