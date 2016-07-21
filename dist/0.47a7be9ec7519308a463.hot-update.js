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
	              _reactBootstrap.NavItem,
	              {
	                eventKey: 2,
	                href: '#' },
	              'Shop'
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

/***/ },

/***/ 672:
/*!***********************************************!*\
  !*** ./~/react-router-bootstrap/lib/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.LinkContainer = exports.IndexLinkContainer = undefined;
	
	var _IndexLinkContainer2 = __webpack_require__(/*! ./IndexLinkContainer */ 673);
	
	var _IndexLinkContainer3 = _interopRequireDefault(_IndexLinkContainer2);
	
	var _LinkContainer2 = __webpack_require__(/*! ./LinkContainer */ 674);
	
	var _LinkContainer3 = _interopRequireDefault(_LinkContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.IndexLinkContainer = _IndexLinkContainer3.default;
	exports.LinkContainer = _LinkContainer3.default;

/***/ },

/***/ 673:
/*!************************************************************!*\
  !*** ./~/react-router-bootstrap/lib/IndexLinkContainer.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LinkContainer = __webpack_require__(/*! ./LinkContainer */ 674);
	
	var _LinkContainer2 = _interopRequireDefault(_LinkContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Don't use a stateless function, to allow users to set a ref.
	/* eslint-disable react/prefer-stateless-function */
	
	var IndexLinkContainer = function (_React$Component) {
	  _inherits(IndexLinkContainer, _React$Component);
	
	  function IndexLinkContainer() {
	    _classCallCheck(this, IndexLinkContainer);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  IndexLinkContainer.prototype.render = function render() {
	    return _react2.default.createElement(_LinkContainer2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };
	
	  return IndexLinkContainer;
	}(_react2.default.Component);
	/* eslint-enable react/prefer-stateless-function */
	
	
	exports.default = IndexLinkContainer;
	module.exports = exports['default'];

/***/ },

/***/ 674:
/*!*******************************************************!*\
  !*** ./~/react-router-bootstrap/lib/LinkContainer.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(/*! react-router/lib/Link */ 648);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This is largely taken from react-router/lib/Link.
	
	var propTypes = {
	  onlyActiveOnIndex: _react2.default.PropTypes.bool.isRequired,
	  to: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired,
	  onClick: _react2.default.PropTypes.func,
	  active: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.node.isRequired
	};
	
	var contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	var defaultProps = {
	  onlyActiveOnIndex: false
	};
	
	var LinkContainer = function (_React$Component) {
	  _inherits(LinkContainer, _React$Component);
	
	  function LinkContainer() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LinkContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onClick = function (event) {
	      if (_this.props.children.props.onClick) {
	        _this.props.children.props.onClick(event);
	      }
	
	      _Link2.default.prototype.handleClick.call(_this, event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  LinkContainer.prototype.render = function render() {
	    var router = this.context.router;
	    var _props = this.props;
	    var onlyActiveOnIndex = _props.onlyActiveOnIndex;
	    var to = _props.to;
	    var children = _props.children;
	
	    var props = _objectWithoutProperties(_props, ['onlyActiveOnIndex', 'to', 'children']);
	
	    props.onClick = this.onClick;
	
	    // Ignore if rendered outside Router context; simplifies unit testing.
	    if (router) {
	      props.href = router.createHref(to);
	
	      if (props.active == null) {
	        props.active = router.isActive(to, onlyActiveOnIndex);
	      }
	    }
	
	    return _react2.default.cloneElement(_react2.default.Children.only(children), props);
	  };
	
	  return LinkContainer;
	}(_react2.default.Component);
	
	LinkContainer.propTypes = propTypes;
	LinkContainer.contextTypes = contextTypes;
	LinkContainer.defaultProps = defaultProps;
	
	exports.default = LinkContainer;
	module.exports = exports['default'];

/***/ }

})
//# sourceMappingURL=0.47a7be9ec7519308a463.hot-update.js.map