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
	
	var _ProductPageWrapper = __webpack_require__(/*! ./components/ProductPageWrapper.jsx */ 675);
	
	var _ProductPageWrapper2 = _interopRequireDefault(_ProductPageWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    _react2.default.createElement(
	      _reactRouter.Route,
	      {
	        path: 'shop' },
	      _react2.default.createElement(_reactRouter.IndexRoute, {
	        component: _ProductList2.default }),
	      _react2.default.createElement(_reactRouter.Route, {
	        path: ':id',
	        component: _ProductPageWrapper2.default })
	    )
	  )
	), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ },

/***/ 597:
/*!***************************************************!*\
  !*** ./src/client/app/components/ProductList.jsx ***!
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
	
	var _Product = __webpack_require__(/*! ../components/Product.jsx */ 598);
	
	var _Product2 = _interopRequireDefault(_Product);
	
	var _ListPagination = __webpack_require__(/*! ./common/ListPagination.jsx */ 599);
	
	var _ListPagination2 = _interopRequireDefault(_ListPagination);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PAGE_SIZE = 24;
	
	var ProductList = function (_React$Component) {
	  _inherits(ProductList, _React$Component);
	
	  function ProductList(props) {
	    _classCallCheck(this, ProductList);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductList).call(this, props));
	
	    _this.state = {
	      activePage: 1
	    };
	
	    _this.handleSelectPage = _this.handleSelectPage.bind(_this);
	    return _this;
	  }
	
	  _createClass(ProductList, [{
	    key: 'handleSelectPage',
	    value: function handleSelectPage(newPage) {
	      this.setState({
	        activePage: newPage
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var activePage = this.state.activePage;
	
	
	      var products = this.props.products.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          {
	            className: 'text-right',
	            xs: 12 },
	          _react2.default.createElement(_ListPagination2.default, {
	            activePage: activePage,
	            items: Math.ceil(this.props.products.length / PAGE_SIZE),
	            onSelect: this.handleSelectPage })
	        ),
	        _react2.default.createElement(_reactBootstrap.Clearfix, null),
	        products.map(function (product) {
	          return _react2.default.createElement(_Product2.default, {
	            key: product.id,
	            product: product });
	        })
	      );
	    }
	  }]);
	
	  return ProductList;
	}(_react2.default.Component);
	
	ProductList.propTypes = {
	  products: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired
	};
	
	ProductList.defaultProps = {
	  products: []
	};
	
	exports.default = ProductList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ProductList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ },

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
	          _reactRouter.Link,
	          { to: 'shop/' + product.id },
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
	          _reactRouter.Link,
	          { to: 'shop/' + product.id },
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

/***/ },

/***/ 599:
/*!*************************************************************!*\
  !*** ./src/client/app/components/common/ListPagination.jsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 147), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 155), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 157), React = __webpack_require__(/*! react */ 222); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ListPagination(props) {
	  return _react2.default.createElement(_reactBootstrap.Pagination, {
	    activePage: props.activePage,
	    first: true,
	    items: props.items,
	    last: true,
	    maxButtons: 5,
	    next: true,
	    onSelect: props.onSelect,
	    prev: true });
	}
	
	ListPagination.propTypes = {
	  activePage: _react2.default.PropTypes.number.isRequired,
	  items: _react2.default.PropTypes.number.isRequired,
	  onSelect: _react2.default.PropTypes.func.isRequired
	};
	
	ListPagination.defaultProps = {
	  activePage: 1,
	  items: 1,
	  onSelect: function onSelect() {}
	};
	
	exports.default = ListPagination;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ListPagination.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ }

})
//# sourceMappingURL=0.3c1d984505e14ecd6f34.hot-update.js.map