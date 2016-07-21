webpackHotUpdate(0,{

/***/ 598:
/*!***********************************************!*\
  !*** ./src/client/app/components/Product.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 611);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Product(props) {
	  var product = props.product;
	
	
	  return _react2.default.createElement(
	    _reactBootstrap.Col,
	    {
	      lg: 3,
	      md: 4,
	      sm: 6 },
	    _react2.default.createElement(
	      _reactBootstrap.Panel,
	      { className: 'product' },
	      _react2.default.createElement(
	        'div',
	        { className: 'product-img-wrapper' },
	        _react2.default.createElement(
	          'a',
	          { href: '#' },
	          _react2.default.createElement('img', {
	            alt: product.name,
	            className: 'img-responsive product-img',
	            src: product.picture })
	        )
	      ),
	      _react2.default.createElement(
	        'h4',
	        {
	          className: 'ellipsis',
	          title: product.name },
	        _react2.default.createElement(
	          'a',
	          { href: '#' },
	          product.name
	        )
	      ),
	      _react2.default.createElement(
	        'h5',
	        {
	          className: 'ellipsis product-brand-name',
	          title: product.brand_name },
	        'by ' + product.brand_name
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right h4 product-price' },
	        product.price + '$'
	      )
	    )
	  );
	}
	
	Product.propTypes = {
	  product: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = Product;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Product.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.5f090b9344e5d210ced5.hot-update.js.map