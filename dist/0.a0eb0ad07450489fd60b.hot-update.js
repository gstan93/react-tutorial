webpackHotUpdate(0,{

/***/ 610:
/*!***************************************************!*\
  !*** ./src/client/app/components/ProductPage.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 238);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductPage = function (_React$Component) {
	  _inherits(ProductPage, _React$Component);
	
	  function ProductPage(props) {
	    _classCallCheck(this, ProductPage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductPage).call(this, props));
	
	    _this.state = {
	      quantity: 1
	    };
	
	    _this.handleUpdateQuantity = _this.handleUpdateQuantity.bind(_this);
	    return _this;
	  }
	
	  _createClass(ProductPage, [{
	    key: 'handleUpdateQuantity',
	    value: function handleUpdateQuantity(e) {
	      this.setState({
	        quantity: Number(e.target.value)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var product = this.props.product;
	
	
	      var PanelHeader = _react2.default.createElement(
	        'div',
	        { className: 'text-uppercase' },
	        'Price:',
	        _react2.default.createElement(
	          'span',
	          { className: 'pull-right' },
	          product.price + '$'
	        )
	      );
	
	      var PanelFooter = _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.InputGroup,
	          null,
	          _react2.default.createElement(_reactBootstrap.FormControl, {
	            id: 'qtyInput',
	            min: '1',
	            max: '99',
	            type: 'number',
	            defaultValue: 1,
	            ref: function ref(_ref) {
	              _this2.qtyInput = _ref;
	            } }),
	          _react2.default.createElement(
	            _reactBootstrap.InputGroup.Addon,
	            null,
	            'Units'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'text-uppercase h4 product-page-total' },
	          'Total:',
	          _react2.default.createElement(
	            'span',
	            { className: 'pull-right' },
	            Number(this.quantity ? product.price * this.quantity : product.price).toFixed(2) + ' $'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Button,
	          {
	            block: true,
	            bsStyle: 'primary',
	            bsSize: 'large' },
	          'Add to Cart'
	        )
	      );
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { sm: 12 },
	          _react2.default.createElement(
	            _reactBootstrap.PageHeader,
	            null,
	            product.name
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Media,
	            { className: 'product-page-brand' },
	            _react2.default.createElement(
	              _reactBootstrap.Media.Left,
	              { align: 'middle' },
	              _react2.default.createElement(_reactBootstrap.Image, {
	                alt: product.brand_name,
	                circle: true,
	                className: 'product-page-brand-logo',
	                height: '49',
	                src: product.brand_logo })
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Media.Body,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Media.Heading,
	                { className: 'product-page-brand-name' },
	                product.brand_name
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { sm: 8 },
	          _react2.default.createElement(
	            'div',
	            { className: 'product-page-img' },
	            _react2.default.createElement(_reactBootstrap.Image, {
	              alt: product.name,
	              className: 'img-responsive',
	              src: product.picture,
	              thumbnail: true })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { sm: 4 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            {
	              footer: PanelFooter,
	              header: PanelHeader },
	            product.description
	          )
	        )
	      );
	    }
	  }]);
	
	  return ProductPage;
	}(_react2.default.Component);
	
	ProductPage.propTypes = {
	  product: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = ProductPage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ProductPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.a0eb0ad07450489fd60b.hot-update.js.map