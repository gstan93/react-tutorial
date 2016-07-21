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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 611);
	
	var _immutableProps = __webpack_require__(/*! immutable-props */ 678);
	
	var _immutableProps2 = _interopRequireDefault(_immutableProps);
	
	var _Cart = __webpack_require__(/*! ./Cart.jsx */ 680);
	
	var _Cart2 = _interopRequireDefault(_Cart);
	
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
	              _reactRouter.IndexLink,
	              { to: '/' },
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
	                  eventKey: 1 },
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterBootstrap.IndexLinkContainer,
	              { to: '/shop' },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                {
	                  eventKey: 2 },
	                'Shop'
	              )
	            ),
	            _react2.default.createElement(_Cart2.default, {
	              cart: this.props.cart })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	Header.propTypes = {
	  cart: _immutableProps2.default.Map
	};
	
	exports.default = Header;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ },

/***/ 680:
/*!********************************************!*\
  !*** ./src/client/app/components/Cart.jsx ***!
  \********************************************/
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
	
	var _immutableProps = __webpack_require__(/*! immutable-props */ 678);
	
	var _immutableProps2 = _interopRequireDefault(_immutableProps);
	
	var _CartItem = __webpack_require__(/*! ./CartItem.jsx */ 681);
	
	var _CartItem2 = _interopRequireDefault(_CartItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cart = function (_React$Component) {
	  _inherits(Cart, _React$Component);
	
	  function Cart() {
	    _classCallCheck(this, Cart);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cart).apply(this, arguments));
	  }
	
	  _createClass(Cart, [{
	    key: 'render',
	    value: function render() {
	      var total = this.props.cart.toArray().reduce(function (acc, cartItem) {
	        return Number(acc) + Number(cartItem.product.price) * Number(cartItem.quantity);
	      }, 0).toFixed(2);
	
	      return _react2.default.createElement(
	        _reactBootstrap.Dropdown,
	        { id: 'cartDropdown' },
	        _react2.default.createElement(
	          _reactBootstrap.Nav,
	          {
	            bsRole: 'toggle',
	            pullRight: true },
	          _react2.default.createElement(
	            _reactBootstrap.NavItem,
	            {
	              eventKey: 3 },
	            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'shopping-cart' }),
	            ' Cart ',
	            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'caret-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          {
	            bsRole: 'menu',
	            className: 'dropdown-menu cart' },
	          this.props.cart.size > 0 ? this.props.cart.toArray().map(function (cartItem) {
	            return _react2.default.createElement(_CartItem2.default, {
	              key: cartItem.product.id,
	              cartItem: cartItem });
	          }) : _react2.default.createElement(
	            _reactBootstrap.MenuItem,
	            { disabled: true },
	            'No products in the cart'
	          ),
	          _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
	          _react2.default.createElement(
	            _reactBootstrap.MenuItem,
	            { disabled: true },
	            _react2.default.createElement(
	              'h4',
	              null,
	              'Total:',
	              _react2.default.createElement(
	                'span',
	                { className: 'pull-right' },
	                '$' + total
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Cart;
	}(_react2.default.Component);
	
	Cart.propTypes = {
	  cart: _immutableProps2.default.Map
	};
	
	exports.default = Cart;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Cart.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ },

/***/ 681:
/*!************************************************!*\
  !*** ./src/client/app/components/CartItem.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ 672);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CartItem(props) {
	  var _props$cartItem = props.cartItem;
	  var product = _props$cartItem.product;
	  var quantity = _props$cartItem.quantity;
	
	
	  return _react2.default.createElement(
	    _reactRouterBootstrap.IndexLinkContainer,
	    { to: 'shop/' + product.id },
	    _react2.default.createElement(
	      _reactBootstrap.MenuItem,
	      {
	        className: 'cart-item' },
	      _react2.default.createElement(
	        _reactBootstrap.Media,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Media.Left,
	          null,
	          _react2.default.createElement(_reactBootstrap.Image, {
	            src: product.picture,
	            width: '64' })
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Media.Body,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Media.Heading,
	            null,
	            product.name
	          ),
	          _react2.default.createElement(
	            'h5',
	            { className: 'pull-right' },
	            '$' + Number(quantity * product.price).toFixed(2)
	          ),
	          _react2.default.createElement(
	            'h5',
	            { className: 'pull-left' },
	            quantity + ' Units'
	          )
	        )
	      )
	    )
	  );
	}
	
	CartItem.propTypes = {
	  cartItem: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = CartItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CartItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.9f49c853f43cf22a48bc.hot-update.js.map