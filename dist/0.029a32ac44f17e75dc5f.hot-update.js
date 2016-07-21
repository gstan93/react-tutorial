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
	
	var _ProductPage = __webpack_require__(/*! ./ProductPage.jsx */ 610);
	
	var _ProductPage2 = _interopRequireDefault(_ProductPage);
	
	var _NotFound = __webpack_require__(/*! ./NotFound.jsx */ 676);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	var _immutableProps = __webpack_require__(/*! immutable-props */ 678);
	
	var _immutableProps2 = _interopRequireDefault(_immutableProps);
	
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
	        cart: this.props.cart,
	        product: product,
	        handleAddToCart: this.props.handleAddToCart }) : _react2.default.createElement(_NotFound2.default, null);
	    }
	  }]);
	
	  return ProductPageWrapper;
	}(_react2.default.Component);
	
	ProductPageWrapper.propTypes = {
	  cart: _immutableProps2.default.Map,
	  products: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	  params: _react2.default.PropTypes.object.isRequired,
	  handleAddToCart: _react2.default.PropTypes.func
	};
	
	exports.default = ProductPageWrapper;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 593); if (makeExportsHot(module, __webpack_require__(/*! react */ 222))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ProductPageWrapper.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 74)(module)))

/***/ },

/***/ 678:
/*!*****************************************!*\
  !*** ./~/immutable-props/dist/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 222);
	
	var _immutable = __webpack_require__(/*! immutable */ 677);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _cursor = __webpack_require__(/*! immutable/contrib/cursor */ 679);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var types = ['Iterable', 'Seq', 'Collection', 'Map', 'OrderedMap', 'List', 'Stack', 'Set', 'OrderedSet', 'Record', 'Range', 'Repeat'];
	
	var props = types.reduce(function (p, i) {
	  p[i] = _react.PropTypes.instanceOf(_immutable2.default[i]);
	  return p;
	}, {});
	
	props.Cursor = _react.PropTypes.instanceOf(_cursor2.default);
	
	exports.default = props;
	module.exports = exports['default'];

/***/ },

/***/ 679:
/*!*********************************************!*\
  !*** ./~/immutable/contrib/cursor/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	/**
	 * Cursor is expected to be required in a node or other CommonJS context:
	 *
	 *     var Cursor = require('immutable/contrib/cursor');
	 *
	 * If you wish to use it in the browser, please check out Browserify or WebPack!
	 */
	
	var Immutable = __webpack_require__(/*! ../../ */ 677);
	var Iterable = Immutable.Iterable;
	var Iterator = Iterable.Iterator;
	var Seq = Immutable.Seq;
	var Map = Immutable.Map;
	var Record = Immutable.Record;
	
	
	function cursorFrom(rootData, keyPath, onChange) {
	  if (arguments.length === 1) {
	    keyPath = [];
	  } else if (typeof keyPath === 'function') {
	    onChange = keyPath;
	    keyPath = [];
	  } else {
	    keyPath = valToKeyPath(keyPath);
	  }
	  return makeCursor(rootData, keyPath, onChange);
	}
	
	
	var KeyedCursorPrototype = Object.create(Seq.Keyed.prototype);
	var IndexedCursorPrototype = Object.create(Seq.Indexed.prototype);
	
	function KeyedCursor(rootData, keyPath, onChange, size) {
	  this.size = size;
	  this._rootData = rootData;
	  this._keyPath = keyPath;
	  this._onChange = onChange;
	}
	KeyedCursorPrototype.constructor = KeyedCursor;
	
	function IndexedCursor(rootData, keyPath, onChange, size) {
	  this.size = size;
	  this._rootData = rootData;
	  this._keyPath = keyPath;
	  this._onChange = onChange;
	}
	IndexedCursorPrototype.constructor = IndexedCursor;
	
	KeyedCursorPrototype.toString = function() {
	  return this.__toString('Cursor {', '}');
	}
	IndexedCursorPrototype.toString = function() {
	  return this.__toString('Cursor [', ']');
	}
	
	KeyedCursorPrototype.deref =
	KeyedCursorPrototype.valueOf =
	IndexedCursorPrototype.deref =
	IndexedCursorPrototype.valueOf = function(notSetValue) {
	  return this._rootData.getIn(this._keyPath, notSetValue);
	}
	
	KeyedCursorPrototype.get =
	IndexedCursorPrototype.get = function(key, notSetValue) {
	  return this.getIn([key], notSetValue);
	}
	
	KeyedCursorPrototype.getIn =
	IndexedCursorPrototype.getIn = function(keyPath, notSetValue) {
	  keyPath = listToKeyPath(keyPath);
	  if (keyPath.length === 0) {
	    return this;
	  }
	  var value = this._rootData.getIn(newKeyPath(this._keyPath, keyPath), NOT_SET);
	  return value === NOT_SET ? notSetValue : wrappedValue(this, keyPath, value);
	}
	
	IndexedCursorPrototype.set =
	KeyedCursorPrototype.set = function(key, value) {
	  if(arguments.length === 1) {
	    return updateCursor(this, function() { return key; }, []);
	  } else {
	    return updateCursor(this, function (m) { return m.set(key, value); }, [key]);
	  }
	}
	
	IndexedCursorPrototype.push = function(/* values */) {
	  var args = arguments;
	  return updateCursor(this, function (m) {
	    return m.push.apply(m, args);
	  });
	}
	
	IndexedCursorPrototype.pop = function() {
	  return updateCursor(this, function (m) {
	    return m.pop();
	  });
	}
	
	IndexedCursorPrototype.unshift = function(/* values */) {
	  var args = arguments;
	  return updateCursor(this, function (m) {
	    return m.unshift.apply(m, args);
	  });
	}
	
	IndexedCursorPrototype.shift = function() {
	  return updateCursor(this, function (m) {
	    return m.shift();
	  });
	}
	
	IndexedCursorPrototype.setIn =
	KeyedCursorPrototype.setIn = Map.prototype.setIn;
	
	KeyedCursorPrototype.remove =
	KeyedCursorPrototype['delete'] =
	IndexedCursorPrototype.remove =
	IndexedCursorPrototype['delete'] = function(key) {
	  return updateCursor(this, function (m) { return m.remove(key); }, [key]);
	}
	
	IndexedCursorPrototype.removeIn =
	IndexedCursorPrototype.deleteIn =
	KeyedCursorPrototype.removeIn =
	KeyedCursorPrototype.deleteIn = Map.prototype.deleteIn;
	
	KeyedCursorPrototype.clear =
	IndexedCursorPrototype.clear = function() {
	  return updateCursor(this, function (m) { return m.clear(); });
	}
	
	IndexedCursorPrototype.update =
	KeyedCursorPrototype.update = function(keyOrFn, notSetValue, updater) {
	  return arguments.length === 1 ?
	    updateCursor(this, keyOrFn) :
	    this.updateIn([keyOrFn], notSetValue, updater);
	}
	
	IndexedCursorPrototype.updateIn =
	KeyedCursorPrototype.updateIn = function(keyPath, notSetValue, updater) {
	  return updateCursor(this, function (m) {
	    return m.updateIn(keyPath, notSetValue, updater);
	  }, keyPath);
	}
	
	IndexedCursorPrototype.merge =
	KeyedCursorPrototype.merge = function(/*...iters*/) {
	  var args = arguments;
	  return updateCursor(this, function (m) {
	    return m.merge.apply(m, args);
	  });
	}
	
	IndexedCursorPrototype.mergeWith =
	KeyedCursorPrototype.mergeWith = function(merger/*, ...iters*/) {
	  var args = arguments;
	  return updateCursor(this, function (m) {
	    return m.mergeWith.apply(m, args);
	  });
	}
	
	IndexedCursorPrototype.mergeIn =
	KeyedCursorPrototype.mergeIn = Map.prototype.mergeIn;
	
	IndexedCursorPrototype.mergeDeep =
	KeyedCursorPrototype.mergeDeep = function(/*...iters*/) {
	  var args = arguments;
	  return updateCursor(this, function (m) {
	    return m.mergeDeep.apply(m, args);
	  });
	}
	
	IndexedCursorPrototype.mergeDeepWith =
	KeyedCursorPrototype.mergeDeepWith = function(merger/*, ...iters*/) {
	  var args = arguments;
	  return updateCursor(this, function (m) {
	    return m.mergeDeepWith.apply(m, args);
	  });
	}
	
	IndexedCursorPrototype.mergeDeepIn =
	KeyedCursorPrototype.mergeDeepIn = Map.prototype.mergeDeepIn;
	
	KeyedCursorPrototype.withMutations =
	IndexedCursorPrototype.withMutations = function(fn) {
	  return updateCursor(this, function (m) {
	    return (m || Map()).withMutations(fn);
	  });
	}
	
	KeyedCursorPrototype.cursor =
	IndexedCursorPrototype.cursor = function(subKeyPath) {
	  subKeyPath = valToKeyPath(subKeyPath);
	  return subKeyPath.length === 0 ? this : subCursor(this, subKeyPath);
	}
	
	/**
	 * All iterables need to implement __iterate
	 */
	KeyedCursorPrototype.__iterate =
	IndexedCursorPrototype.__iterate = function(fn, reverse) {
	  var cursor = this;
	  var deref = cursor.deref();
	  return deref && deref.__iterate ? deref.__iterate(
	    function (v, k) { return fn(wrappedValue(cursor, [k], v), k, cursor); },
	    reverse
	  ) : 0;
	}
	
	/**
	 * All iterables need to implement __iterator
	 */
	KeyedCursorPrototype.__iterator =
	IndexedCursorPrototype.__iterator = function(type, reverse) {
	  var deref = this.deref();
	  var cursor = this;
	  var iterator = deref && deref.__iterator &&
	    deref.__iterator(Iterator.ENTRIES, reverse);
	  return new Iterator(function () {
	    if (!iterator) {
	      return { value: undefined, done: true };
	    }
	    var step = iterator.next();
	    if (step.done) {
	      return step;
	    }
	    var entry = step.value;
	    var k = entry[0];
	    var v = wrappedValue(cursor, [k], entry[1]);
	    return {
	      value: type === Iterator.KEYS ? k : type === Iterator.VALUES ? v : [k, v],
	      done: false
	    };
	  });
	}
	
	KeyedCursor.prototype = KeyedCursorPrototype;
	IndexedCursor.prototype = IndexedCursorPrototype;
	
	
	var NOT_SET = {}; // Sentinel value
	
	function makeCursor(rootData, keyPath, onChange, value) {
	  if (arguments.length < 4) {
	    value = rootData.getIn(keyPath);
	  }
	  var size = value && value.size;
	  var CursorClass = Iterable.isIndexed(value) ? IndexedCursor : KeyedCursor;
	  var cursor = new CursorClass(rootData, keyPath, onChange, size);
	
	  if (value instanceof Record) {
	    defineRecordProperties(cursor, value);
	  }
	
	  return cursor;
	}
	
	function defineRecordProperties(cursor, value) {
	  try {
	    value._keys.forEach(setProp.bind(undefined, cursor));
	  } catch (error) {
	    // Object.defineProperty failed. Probably IE8.
	  }
	}
	
	function setProp(prototype, name) {
	  Object.defineProperty(prototype, name, {
	    get: function() {
	      return this.get(name);
	    },
	    set: function(value) {
	      if (!this.__ownerID) {
	        throw new Error('Cannot set on an immutable record.');
	      }
	    }
	  });
	}
	
	function wrappedValue(cursor, keyPath, value) {
	  return Iterable.isIterable(value) ? subCursor(cursor, keyPath, value) : value;
	}
	
	function subCursor(cursor, keyPath, value) {
	  if (arguments.length < 3) {
	    return makeCursor( // call without value
	      cursor._rootData,
	      newKeyPath(cursor._keyPath, keyPath),
	      cursor._onChange
	    );
	  }
	  return makeCursor(
	    cursor._rootData,
	    newKeyPath(cursor._keyPath, keyPath),
	    cursor._onChange,
	    value
	  );
	}
	
	function updateCursor(cursor, changeFn, changeKeyPath) {
	  var deepChange = arguments.length > 2;
	  var newRootData = cursor._rootData.updateIn(
	    cursor._keyPath,
	    deepChange ? Map() : undefined,
	    changeFn
	  );
	  var keyPath = cursor._keyPath || [];
	  var result = cursor._onChange && cursor._onChange.call(
	    undefined,
	    newRootData,
	    cursor._rootData,
	    deepChange ? newKeyPath(keyPath, changeKeyPath) : keyPath
	  );
	  if (result !== undefined) {
	    newRootData = result;
	  }
	  return makeCursor(newRootData, cursor._keyPath, cursor._onChange);
	}
	
	function newKeyPath(head, tail) {
	  return head.concat(listToKeyPath(tail));
	}
	
	function listToKeyPath(list) {
	  return Array.isArray(list) ? list : Immutable.Iterable(list).toArray();
	}
	
	function valToKeyPath(val) {
	  return Array.isArray(val) ? val :
	    Iterable.isIterable(val) ? val.toArray() :
	    [val];
	}
	
	exports.from = cursorFrom;


/***/ }

})
//# sourceMappingURL=0.029a32ac44f17e75dc5f.hot-update.js.map