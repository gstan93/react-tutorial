webpackHotUpdate(0,{

/***/ 660:
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
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 391);
	
	var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ 653);
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 661); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CartItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.ce6e2879e6a8d423cd17.hot-update.js.map