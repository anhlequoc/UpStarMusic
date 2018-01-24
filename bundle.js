/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(4);

	var _reactRedux = __webpack_require__(5);

	var _reduxThunk = __webpack_require__(6);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _mongodb = __webpack_require__(7);

	var _reducers = __webpack_require__(8);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _router = __webpack_require__(16);

	var _router2 = _interopRequireDefault(_router);

	var _mongoose = __webpack_require__(30);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	__webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_mongoose2.default.Promise = Promise;

	var App = function App() {
	  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_router2.default, null)
	  );
	};

	var db = new _mongodb.Db('upstar_music', new _mongodb.Server('localhost', 27017));
	db.open().then(function () {
	  window.db = db;
	  _mongoose2.default.connect('mongodb://localhost/upstar_music');
	  _mongoose2.default.connection.once('open', function () {
	    _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));
	  }).on('error', function (error) {
	    console.warn('Warning', error);
	  });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("mongodb");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(4);

	var _reduxForm = __webpack_require__(9);

	var _FilterCriteriaReducer = __webpack_require__(10);

	var _FilterCriteriaReducer2 = _interopRequireDefault(_FilterCriteriaReducer);

	var _ArtistsReducer = __webpack_require__(12);

	var _ArtistsReducer2 = _interopRequireDefault(_ArtistsReducer);

	var _ErrorReducer = __webpack_require__(13);

	var _ErrorReducer2 = _interopRequireDefault(_ErrorReducer);

	var _SelectionReducer = __webpack_require__(14);

	var _SelectionReducer2 = _interopRequireDefault(_SelectionReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  form: _reduxForm.reducer,
	  filterCriteria: _FilterCriteriaReducer2.default,
	  artists: _ArtistsReducer2.default,
	  errors: _ErrorReducer2.default,
	  selection: _SelectionReducer2.default
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("redux-form");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _types = __webpack_require__(11);

	var INITIAL_STATE = {
	  age: { min: 0, max: 100 }
	};

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];

	  switch (action.type) {
	    case _types.SET_AGE_RANGE:
	      return _extends({}, state, { age: action.payload });
	    case _types.SET_YEARS_ACTIVE_RANGE:
	      return _extends({}, state, { yearsActive: action.payload });
	    default:
	      return state;
	  }
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_AGE_RANGE = exports.SET_AGE_RANGE = 'set_age_range';
	var SET_YEARS_ACTIVE_RANGE = exports.SET_YEARS_ACTIVE_RANGE = 'SET_YEARS_ACTIVE_RANGE';
	var SEARCH_ARTISTS = exports.SEARCH_ARTISTS = 'SEARCH_ARTISTS';
	var FIND_ARTIST = exports.FIND_ARTIST = 'FIND_ARTIST';
	var RESET_ARTIST = exports.RESET_ARTIST = 'RESET_ARTIST';
	var CREATE_ERROR = exports.CREATE_ERROR = 'CREATE_ERROR';
	var CLEAR_ERROR = exports.CLEAR_ERROR = 'CLEAR_ERROR';
	var SELECT_ARTIST = exports.SELECT_ARTIST = 'SELECT_ARTIST';
	var DESELECT_ARTIST = exports.DESELECT_ARTIST = 'DESELECT_ARTIST';
	var RESET_SELECTION = exports.RESET_SELECTION = 'RESET_SELECTION';

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _types = __webpack_require__(11);

	var INITIAL_STATE = {
	  all: [],
	  offset: 0,
	  limit: 20
	};

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments[1];

	  switch (action.type) {
	    case _types.SEARCH_ARTISTS:
	      return action.payload;
	    case _types.FIND_ARTIST:
	      return _extends({}, state, { artist: action.payload });
	    case _types.RESET_ARTIST:
	      return _extends({}, state, { artist: null });
	    default:
	      return state;
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _types = __webpack_require__(11);

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var action = arguments[1];

	  switch (action.type) {
	    case _types.CREATE_ERROR:
	      return 'There was an error inserting this record';
	    case _types.CLEAR_ERROR:
	      return '';
	    default:
	      return state;
	  }
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(15);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _types = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case _types.SELECT_ARTIST:
	      return [].concat(_toConsumableArray(state), [action.payload]);
	    case _types.DESELECT_ARTIST:
	      return _lodash2.default.without(state, action.payload);
	    case _types.RESET_SELECTION:
	      return [];
	    default:
	      return state;
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("lodash");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(17);

	var _Home = __webpack_require__(18);

	var _Home2 = _interopRequireDefault(_Home);

	var _ArtistMain = __webpack_require__(20);

	var _ArtistMain2 = _interopRequireDefault(_ArtistMain);

	var _ArtistDetail = __webpack_require__(42);

	var _ArtistDetail2 = _interopRequireDefault(_ArtistDetail);

	var _ArtistCreate = __webpack_require__(43);

	var _ArtistCreate2 = _interopRequireDefault(_ArtistCreate);

	var _ArtistEdit = __webpack_require__(44);

	var _ArtistEdit2 = _interopRequireDefault(_ArtistEdit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Routes = function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Home2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _ArtistMain2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'artists/new', component: _ArtistCreate2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'artists/:id', component: _ArtistDetail2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'artists/:id/edit', component: _ArtistEdit2.default })
	    )
	  );
	};

	exports.default = Routes;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(19);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: 'container' },
	    _react2.default.createElement(_Header2.default, null),
	    children
	  );
	};

	exports.default = Home;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
	  _inherits(Header, _Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	    _this.state = { id: null };
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setLink();
	    }
	  }, {
	    key: 'setLink',
	    value: function setLink() {
	      var _this2 = this;

	      window.db.collection('artists').aggregate({ $sample: { size: 100 } }).toArray().then(function (artists) {
	        var artist = artists[~~(Math.random() * artists.length)];

	        if (artist) {
	          _this2.setState({ id: artist._id.toString() });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'nav',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'nav-wrapper' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col s12' },
	              _react2.default.createElement(
	                'a',
	                { href: '#', className: 'brand-logo' },
	                'UpStar Music'
	              ),
	              _react2.default.createElement(
	                'ul',
	                { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    {
	                      to: '/artists/' + this.state.id,
	                      onClick: this.setLink.bind(this)
	                    },
	                    'Random Artist'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/artists/new' },
	                    'Create Artist'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react.Component);

	;

	exports.default = Header;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ArtistFilter = __webpack_require__(21);

	var _ArtistFilter2 = _interopRequireDefault(_ArtistFilter);

	var _ArtistIndex = __webpack_require__(40);

	var _ArtistIndex2 = _interopRequireDefault(_ArtistIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArtistMain = function (_Component) {
	  _inherits(ArtistMain, _Component);

	  function ArtistMain() {
	    _classCallCheck(this, ArtistMain);

	    return _possibleConstructorReturn(this, (ArtistMain.__proto__ || Object.getPrototypeOf(ArtistMain)).apply(this, arguments));
	  }

	  _createClass(ArtistMain, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col s4' },
	          _react2.default.createElement(_ArtistFilter2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col s8' },
	          _react2.default.createElement(_ArtistIndex2.default, null)
	        )
	      );
	    }
	  }]);

	  return ArtistMain;
	}(_react.Component);

	exports.default = ArtistMain;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(9);

	var _reactRedux = __webpack_require__(5);

	var _filters = __webpack_require__(22);

	var _actions = __webpack_require__(27);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TEXT_FIELDS = [{ label: 'Name', prop: 'name' }];

	var ArtistFilter = function (_Component) {
	  _inherits(ArtistFilter, _Component);

	  function ArtistFilter() {
	    _classCallCheck(this, ArtistFilter);

	    return _possibleConstructorReturn(this, (ArtistFilter.__proto__ || Object.getPrototypeOf(ArtistFilter)).apply(this, arguments));
	  }

	  _createClass(ArtistFilter, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.filters) {
	        this.props.searchArtists(_extends({
	          name: ''
	        }, this.props.filters));
	      } else {
	        this.props.searchArtists({
	          name: '',
	          sort: 'name'
	        });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.setAgeRange();
	      this.props.setYearsActiveRange();
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(formProps) {
	      this.props.searchArtists(_extends({
	        name: ''
	      }, formProps));
	    }
	  }, {
	    key: 'renderInputs',
	    value: function renderInputs() {
	      return TEXT_FIELDS.map(function (_ref) {
	        var label = _ref.label,
	            prop = _ref.prop;
	        return _react2.default.createElement(
	          'div',
	          { className: 'input-field', key: prop },
	          _react2.default.createElement(_reduxForm.Field, {
	            placeholder: label,
	            id: prop,
	            name: prop,
	            component: 'input',
	            type: 'text'
	          })
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handleSubmit = this.props.handleSubmit;


	      return _react2.default.createElement(
	        'div',
	        { className: 'card blue-grey darken-1 row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'card-content white-text' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: handleSubmit(this.handleSubmit.bind(this)) },
	            _react2.default.createElement(
	              'div',
	              { className: 'center-align card-title' },
	              'Search'
	            ),
	            this.renderInputs(),
	            _react2.default.createElement(
	              'div',
	              { className: 'input-field' },
	              _react2.default.createElement(_reduxForm.Field, {
	                id: 'age',
	                label: 'Age',
	                component: _filters.Range,
	                type: 'text',
	                name: 'age',
	                range: this.props.ageRange
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'input-field' },
	              _react2.default.createElement(_reduxForm.Field, {
	                id: 'years-active',
	                label: 'Years Active',
	                component: _filters.Range,
	                type: 'text',
	                name: 'yearsActive',
	                range: this.props.yearsActive
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'label',
	                { className: 'select', htmlFor: 'sort' },
	                'Sort By'
	              ),
	              _react2.default.createElement(
	                _reduxForm.Field,
	                { id: 'sort', name: 'sort', component: 'select' },
	                _react2.default.createElement(
	                  'option',
	                  { value: 'name' },
	                  'Name'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'age' },
	                  'Age'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'albums' },
	                  'Albums Released'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'center-align' },
	              _react2.default.createElement(
	                'button',
	                { className: 'btn' },
	                'Submit'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ArtistFilter;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  var filterCriteria = state.filterCriteria;


	  return {
	    yearsActive: filterCriteria.yearsActive,
	    ageRange: filterCriteria.age,
	    filters: state.form.filters && state.form.filters.values
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)((0, _reduxForm.reduxForm)({
	  destroyOnUnmount: false,
	  form: 'filters',
	  initialValues: { sort: 'name' }
	})(ArtistFilter));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Picker = __webpack_require__(23);

	Object.keys(_Picker).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Picker[key];
	    }
	  });
	});

	var _Range = __webpack_require__(24);

	Object.keys(_Range).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Range[key];
	    }
	  });
	});

	var _Switch = __webpack_require__(26);

	Object.keys(_Switch).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Switch[key];
	    }
	  });
	});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Picker = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Picker = function Picker() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'Picker'
	  );
	};

	exports.Picker = Picker;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Range = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactInputRange = __webpack_require__(25);

	var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Range = function (_Component) {
	  _inherits(Range, _Component);

	  function Range() {
	    _classCallCheck(this, Range);

	    return _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
	  }

	  _createClass(Range, [{
	    key: 'onChange',
	    value: function onChange(component, values) {
	      var onChange = this.props.input.onChange;


	      onChange(values);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var value = this.props.input.value;


	      return _react2.default.createElement(
	        'div',
	        { className: 'range-slider' },
	        _react2.default.createElement(
	          'label',
	          null,
	          this.props.label
	        ),
	        _react2.default.createElement(_reactInputRange2.default, {
	          onChange: this.onChange.bind(this),
	          minValue: parseInt(this.props.range.min),
	          maxValue: parseInt(this.props.range.max),
	          value: value || this.props.range
	        })
	      );
	    }
	  }]);

	  return Range;
	}(_react.Component);

	;

	Range.defaultProps = {
	  range: { min: 0, max: 100 }
	};

	exports.Range = Range;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("react-input-range");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Switch = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Switch = function Switch() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'Switch'
	  );
	};

	exports.Switch = Switch;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteArtist = exports.editArtist = exports.createArtist = exports.findArtist = exports.searchArtists = exports.setYearsActiveRange = exports.setAgeRange = exports.setNotRetired = exports.setRetired = exports.deselectArtist = exports.selectArtist = exports.clearError = exports.resetArtist = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _lodash = __webpack_require__(15);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(17);

	var _types = __webpack_require__(11);

	var _GetAgeRange = __webpack_require__(28);

	var _GetAgeRange2 = _interopRequireDefault(_GetAgeRange);

	var _GetYearsActiveRange = __webpack_require__(32);

	var _GetYearsActiveRange2 = _interopRequireDefault(_GetYearsActiveRange);

	var _SearchArtists = __webpack_require__(33);

	var _SearchArtists2 = _interopRequireDefault(_SearchArtists);

	var _FindArtist = __webpack_require__(34);

	var _FindArtist2 = _interopRequireDefault(_FindArtist);

	var _CreateArtist = __webpack_require__(35);

	var _CreateArtist2 = _interopRequireDefault(_CreateArtist);

	var _EditArtist = __webpack_require__(36);

	var _EditArtist2 = _interopRequireDefault(_EditArtist);

	var _DeleteArtist = __webpack_require__(37);

	var _DeleteArtist2 = _interopRequireDefault(_DeleteArtist);

	var _SetRetired = __webpack_require__(38);

	var _SetRetired2 = _interopRequireDefault(_SetRetired);

	var _SetNotRetired = __webpack_require__(39);

	var _SetNotRetired2 = _interopRequireDefault(_SetNotRetired);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var resetArtist = exports.resetArtist = function resetArtist() {
	  return { type: _types.RESET_ARTIST };
	};

	var clearError = exports.clearError = function clearError() {
	  return { type: _types.CLEAR_ERROR };
	};

	var selectArtist = exports.selectArtist = function selectArtist(id) {
	  return { type: _types.SELECT_ARTIST, payload: id };
	};

	var deselectArtist = exports.deselectArtist = function deselectArtist(id) {
	  return { type: _types.DESELECT_ARTIST, payload: id };
	};

	var setRetired = exports.setRetired = function setRetired(ids) {
	  return function (dispatch, getState) {
	    return SetRetiredProxy(ids.map(function (id) {
	      return id.toString();
	    })).then(function () {
	      return dispatch({ type: _types.RESET_SELECTION });
	    }).then(function () {
	      return refreshSearch(dispatch, getState);
	    });
	  };
	};

	var setNotRetired = exports.setNotRetired = function setNotRetired(ids) {
	  return function (dispatch, getState) {
	    return SetNotRetiredProxy(ids.map(function (id) {
	      return id.toString();
	    })).then(function () {
	      return dispatch({ type: _types.RESET_SELECTION });
	    }).then(function () {
	      return refreshSearch(dispatch, getState);
	    });
	  };
	};

	var setAgeRange = exports.setAgeRange = function setAgeRange() {
	  return function (dispatch) {
	    return GetAgeRangeProxy().then(function (result) {
	      return dispatch({ type: _types.SET_AGE_RANGE, payload: result });
	    });
	  };
	};

	var setYearsActiveRange = exports.setYearsActiveRange = function setYearsActiveRange() {
	  return function (dispatch) {
	    return GetYearsActiveRangeProxy().then(function (result) {
	      return dispatch({ type: _types.SET_YEARS_ACTIVE_RANGE, payload: result });
	    });
	  };
	};

	var searchArtists = exports.searchArtists = function searchArtists() {
	  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
	    criteria[_key] = arguments[_key];
	  }

	  return function (dispatch) {
	    return SearchArtistsProxy.apply(undefined, criteria).then(function () {
	      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      return dispatch({ type: _types.SEARCH_ARTISTS, payload: result });
	    });
	  };
	};

	var findArtist = exports.findArtist = function findArtist(id) {
	  return function (dispatch) {
	    return FindArtistProxy(id).then(function (artist) {
	      return dispatch({ type: _types.FIND_ARTIST, payload: artist });
	    });
	  };
	};

	var createArtist = exports.createArtist = function createArtist(props) {
	  return function (dispatch) {
	    return CreateArtistProxy(props).then(function (artist) {
	      _reactRouter.hashHistory.push('artists/' + artist.id);
	    }).catch(function (error) {
	      console.log(error);
	      dispatch({ type: _types.CREATE_ERROR, payload: error });
	    });
	  };
	};

	var editArtist = exports.editArtist = function editArtist(id, props) {
	  return function (dispatch) {
	    return EditArtistProxy(id, props).then(function () {
	      return _reactRouter.hashHistory.push('artists/' + id);
	    }).catch(function (error) {
	      console.log(error);
	      dispatch({ type: _types.CREATE_ERROR, payload: error });
	    });
	  };
	};

	var deleteArtist = exports.deleteArtist = function deleteArtist(id) {
	  return function (dispatch) {
	    return DeleteArtistProxy(id).then(function () {
	      return _reactRouter.hashHistory.push('/');
	    }).catch(function (error) {
	      console.log(error);
	      dispatch({ type: _types.CREATE_ERROR, payload: error });
	    });
	  };
	};

	//
	// Faux Proxies

	var GetAgeRangeProxy = function GetAgeRangeProxy() {
	  var result = _GetAgeRange2.default.apply(undefined, arguments);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var GetYearsActiveRangeProxy = function GetYearsActiveRangeProxy() {
	  var result = _GetYearsActiveRange2.default.apply(undefined, arguments);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var SearchArtistsProxy = function SearchArtistsProxy(criteria, offset, limit) {
	  var result = (0, _SearchArtists2.default)(_lodash2.default.omit(criteria, 'sort'), criteria.sort, offset, limit);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var FindArtistProxy = function FindArtistProxy() {
	  var result = _FindArtist2.default.apply(undefined, arguments);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var CreateArtistProxy = function CreateArtistProxy() {
	  var result = _CreateArtist2.default.apply(undefined, arguments);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var EditArtistProxy = function EditArtistProxy() {
	  var result = _EditArtist2.default.apply(undefined, arguments);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var DeleteArtistProxy = function DeleteArtistProxy() {
	  var result = _DeleteArtist2.default.apply(undefined, arguments);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var SetRetiredProxy = function SetRetiredProxy(_ids) {
	  var result = (0, _SetRetired2.default)(_ids);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	var SetNotRetiredProxy = function SetNotRetiredProxy(_ids) {
	  var result = (0, _SetNotRetired2.default)(_ids);
	  if (!result || !result.then) {
	    return new Promise(function () {});
	  }
	  return result;
	};

	//
	// Helpers

	var refreshSearch = function refreshSearch(dispatch, getState) {
	  var _getState = getState(),
	      _getState$artists = _getState.artists,
	      offset = _getState$artists.offset,
	      limit = _getState$artists.limit;

	  var criteria = getState().form.filters.values;

	  dispatch(searchArtists(_extends({ name: '' }, criteria), offset, limit));
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Finds the lowest and highest age of artists in the Artist collection
	 * @return {promise} A promise that resolves with an object
	 * containing the min and max ages, like { min: 16, max: 45 }.
	 */
	module.exports = function () {};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Todo: Create Artist Model
	var mongoose = __webpack_require__(30);
	var Schema = mongoose.Schema;
	var AlbumSchema = __webpack_require__(31);

	var ArtistSchema = new Schema({
	  name: String,
	  age: Number,
	  yearsActive: Number,
	  image: String,
	  genre: String,
	  website: String,
	  netWorth: Number,
	  labelName: String,
	  retired: Boolean,
	  albums: [AlbumSchema]
	});

	var Artist = mongoose.model('artist', ArtistSchema);

	module.exports = Artist;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Todo: create Album Schema
	var mongoose = __webpack_require__(30);
	var Schema = mongoose.Schema;

	var AlbumSchema = new Schema({
	  title: String,
	  date: Date,
	  copiesSold: Number,
	  numberTracks: Number,
	  image: String,
	  revenue: Number
	});

	var Album = mongoose.model('album', AlbumSchema);

	module.exports = Album;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Finds the lowest and highest yearsActive of artists in the Artist collection
	 * @return {promise} A promise that resolves with an object
	 * containing the min and max yearsActive, like { min: 0, max: 14 }.
	 */
	module.exports = function () {};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Searches through the Artist collection
	 * @param {object} criteria An object with a name, age, and yearsActive
	 * @param {string} sortProperty The property to sort the results by
	 * @param {integer} offset How many records to skip in the result set
	 * @param {integer} limit How many records to return in the result set
	 * @return {promise} A promise that resolves with the artists, count, offset, and limit
	 */
	module.exports = function (criteria, sortProperty) {
	  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Finds a single artist in the artist collection.
	 * @param {string} _id - The ID of the record to find.
	 * @return {promise} A promise that resolves with the Artist that matches the id
	 */
	module.exports = function (_id) {};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Finds a single artist in the artist collection.
	 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
	 * @return {promise} A promise that resolves with the Artist that was created
	 */
	module.exports = function (artistProps) {};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Edits a single artist in the Artists collection
	 * @param {string} _id - The ID of the artist to edit.
	 * @param {object} artistProps - An object with a name, age, yearsActive, and genre
	 * @return {promise} A promise that resolves when the record is edited
	 */
	module.exports = function (_id, artistProps) {};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Deletes a single artist from the Artists collection
	 * @param {string} _id - The ID of the artist to delete.
	 * @return {promise} A promise that resolves when the record is deleted
	 */
	module.exports = function (_id) {};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Sets a group of Artists as retired
	 * @param {array} _ids - An array of the _id's of of artists to update
	 * @return {promise} A promise that resolves after the update
	 */
	module.exports = function (_ids) {};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Artist = __webpack_require__(29);

	/**
	 * Sets a group of Artists as not retired
	 * @param {array} _ids - An array of the _id's of of artists to update
	 * @return {promise} A promise that resolves after the update
	 */
	module.exports = function (_ids) {};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(15);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(17);

	var _reactRedux = __webpack_require__(5);

	var _Paginator = __webpack_require__(41);

	var _Paginator2 = _interopRequireDefault(_Paginator);

	var _actions = __webpack_require__(27);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArtistIndex = function (_Component) {
	  _inherits(ArtistIndex, _Component);

	  function ArtistIndex() {
	    _classCallCheck(this, ArtistIndex);

	    return _possibleConstructorReturn(this, (ArtistIndex.__proto__ || Object.getPrototypeOf(ArtistIndex)).apply(this, arguments));
	  }

	  _createClass(ArtistIndex, [{
	    key: 'onChange',
	    value: function onChange(_id) {
	      if (_lodash2.default.contains(this.props.selection, _id)) {
	        this.props.deselectArtist(_id);
	      } else {
	        this.props.selectArtist(_id);
	      }
	    }
	  }, {
	    key: 'renderList',
	    value: function renderList(artist) {
	      var _this2 = this;

	      var _id = artist._id;

	      var classes = 'collection-item avatar ' + (artist.retired && 'retired');

	      return _react2.default.createElement(
	        'li',
	        { className: classes, key: _id },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', {
	            id: _id,
	            type: 'checkbox',
	            checked: _lodash2.default.contains(this.props.selection, _id),
	            onChange: function onChange() {
	              return _this2.onChange(_id);
	            }
	          }),
	          _react2.default.createElement('label', { htmlFor: _id })
	        ),
	        _react2.default.createElement('img', { src: artist.image, className: 'circle' }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'span',
	            { className: 'title' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              artist.name
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              artist.age
	            ),
	            ' years old',
	            _react2.default.createElement('br', null),
	            artist.albums ? artist.albums.length : 0,
	            ' albums released'
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: 'artists/' + artist._id, className: 'secondary-content' },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            'play_arrow'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderPaginator',
	    value: function renderPaginator() {
	      if (this.props.artists.all.length) {
	        return _react2.default.createElement(_Paginator2.default, null);
	      }
	    }
	  }, {
	    key: 'renderEmptyCollection',
	    value: function renderEmptyCollection() {
	      if (this.props.artists.all.length) {
	        return;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'center-align' },
	        _react2.default.createElement(
	          'h5',
	          null,
	          'No records found!'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Try searching again'
	        )
	      );
	    }
	  }, {
	    key: 'renderRetire',
	    value: function renderRetire() {
	      var _this3 = this;

	      if (this.props.selection.length) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            {
	              className: 'btn',
	              onClick: function onClick() {
	                return _this3.props.setRetired(_this3.props.selection);
	              }
	            },
	            'Retire'
	          ),
	          _react2.default.createElement(
	            'button',
	            {
	              className: 'btn',
	              onClick: function onClick() {
	                return _this3.props.setNotRetired(_this3.props.selection);
	              }
	            },
	            'Unretire'
	          )
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.renderRetire(),
	        _react2.default.createElement(
	          'ul',
	          { className: 'collection' },
	          this.props.artists.all.map(this.renderList.bind(this)),
	          this.renderEmptyCollection()
	        ),
	        this.renderPaginator()
	      );
	    }
	  }]);

	  return ArtistIndex;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(_ref) {
	  var artists = _ref.artists,
	      selection = _ref.selection;
	  return { artists: artists, selection: selection };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ArtistIndex);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _actions = __webpack_require__(27);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Paginator = function (_Component) {
	  _inherits(Paginator, _Component);

	  function Paginator() {
	    _classCallCheck(this, Paginator);

	    return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).apply(this, arguments));
	  }

	  _createClass(Paginator, [{
	    key: 'back',
	    value: function back() {
	      var _props = this.props,
	          offset = _props.offset,
	          limit = _props.limit,
	          values = _props.form.filters.values;


	      if (offset === 0) {
	        return;
	      }

	      this.props.searchArtists(values, offset - 10, limit);
	    }
	  }, {
	    key: 'advance',
	    value: function advance() {
	      var _props2 = this.props,
	          offset = _props2.offset,
	          limit = _props2.limit,
	          count = _props2.count,
	          values = _props2.form.filters.values;


	      if (offset + limit > count) {
	        return;
	      }

	      this.props.searchArtists(values, offset + 10, limit);
	    }
	  }, {
	    key: 'left',
	    value: function left() {
	      return _react2.default.createElement(
	        'li',
	        { className: this.props.offset === 0 ? 'disabled' : '' },
	        _react2.default.createElement(
	          'a',
	          { onClick: this.back.bind(this) },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            'chevron_left'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'right',
	    value: function right() {
	      var _props3 = this.props,
	          offset = _props3.offset,
	          limit = _props3.limit,
	          count = _props3.count;


	      var end = offset + limit >= count ? true : false;

	      return _react2.default.createElement(
	        'li',
	        { className: end ? 'disabled' : '' },
	        _react2.default.createElement(
	          'a',
	          { onClick: this.advance.bind(this) },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            'chevron_right'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'center-align' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'pagination' },
	          this.left(),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              null,
	              'Page ',
	              this.props.offset / 10 + 1
	            )
	          ),
	          this.right()
	        ),
	        this.props.count,
	        ' Records Found'
	      );
	    }
	  }]);

	  return Paginator;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(_ref) {
	  var artists = _ref.artists,
	      form = _ref.form;
	  var limit = artists.limit,
	      offset = artists.offset,
	      count = artists.count;


	  return { limit: limit, offset: offset, count: count, form: form };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Paginator);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _reactRouter = __webpack_require__(17);

	var _actions = __webpack_require__(27);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArtistDetail = function (_Component) {
	  _inherits(ArtistDetail, _Component);

	  function ArtistDetail() {
	    _classCallCheck(this, ArtistDetail);

	    return _possibleConstructorReturn(this, (ArtistDetail.__proto__ || Object.getPrototypeOf(ArtistDetail)).apply(this, arguments));
	  }

	  _createClass(ArtistDetail, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.findArtist(this.props.params.id);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.params.id !== this.props.params.id) {
	        this.props.findArtist(nextProps.params.id);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.resetArtist();
	    }
	  }, {
	    key: 'onDeleteClick',
	    value: function onDeleteClick() {
	      this.props.deleteArtist(this.props.params.id);
	    }
	  }, {
	    key: 'renderAlbums',
	    value: function renderAlbums() {
	      var albums = this.props.artist.albums;


	      if (!albums || !albums.map) {
	        return;
	      }

	      return albums.map(function (album) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'card album', key: album.title },
	          _react2.default.createElement(
	            'div',
	            { className: 'card-image' },
	            _react2.default.createElement('img', { src: album.image }),
	            _react2.default.createElement(
	              'span',
	              { className: 'card-title' },
	              _react2.default.createElement(
	                'h4',
	                null,
	                album.title
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'card-content' },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h5',
	                null,
	                album.copiesSold
	              ),
	              _react2.default.createElement(
	                'i',
	                null,
	                'copies sold'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h5',
	                null,
	                album.numberTracks
	              ),
	              _react2.default.createElement(
	                'i',
	                null,
	                'tracks'
	              )
	            )
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.artist) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Todo: implement "FindArtist" query'
	        );
	      }

	      var _props$artist = this.props.artist,
	          name = _props$artist.name,
	          age = _props$artist.age,
	          genre = _props$artist.genre,
	          image = _props$artist.image,
	          yearsActive = _props$artist.yearsActive,
	          netWorth = _props$artist.netWorth,
	          labelName = _props$artist.labelName,
	          _id = _props$artist._id;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'spacer' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            'Back'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/artists/' + _id + '/edit' },
	            'Edit'
	          ),
	          _react2.default.createElement(
	            'a',
	            { onClick: this.onDeleteClick.bind(this) },
	            'Delete'
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'collection artist-detail' },
	          _react2.default.createElement(
	            'li',
	            { className: 'collection-item header' },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h3',
	                null,
	                name
	              ),
	              _react2.default.createElement(
	                'h5',
	                null,
	                'Master of ',
	                genre
	              )
	            ),
	            _react2.default.createElement('image', { src: image, className: 'right' })
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'collection-item' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              yearsActive
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'i',
	                null,
	                'Years Active'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'collection-item' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              age
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'i',
	                null,
	                'Years Old'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'collection-item' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              '$',
	              netWorth
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'i',
	                null,
	                'Net Worth'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'collection-item' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              labelName
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'i',
	                null,
	                'Label'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'flex wrap' },
	            this.renderAlbums()
	          )
	        )
	      );
	    }
	  }]);

	  return ArtistDetail;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(_ref) {
	  var artists = _ref.artists;

	  return { artist: artists.artist };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ArtistDetail);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _reduxForm = __webpack_require__(9);

	var _actions = __webpack_require__(27);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArtistCreate = function (_Component) {
	  _inherits(ArtistCreate, _Component);

	  function ArtistCreate() {
	    _classCallCheck(this, ArtistCreate);

	    return _possibleConstructorReturn(this, (ArtistCreate.__proto__ || Object.getPrototypeOf(ArtistCreate)).apply(this, arguments));
	  }

	  _createClass(ArtistCreate, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearError();
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(formProps) {
	      this.props.createArtist(formProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handleSubmit = this.props.handleSubmit;


	      return _react2.default.createElement(
	        'form',
	        { onSubmit: handleSubmit(this.onSubmit.bind(this)) },
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement(_reduxForm.Field, { name: 'name', component: 'input', placeholder: 'Name' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement(_reduxForm.Field, { name: 'age', component: 'input', placeholder: 'Age' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement(_reduxForm.Field, { name: 'yearsActive', component: 'input', placeholder: 'Years Active' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement(_reduxForm.Field, { name: 'genre', component: 'input', placeholder: 'Genre' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'has-error' },
	          this.props.errorMessage
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn' },
	          'Submit'
	        )
	      );
	    }
	  }]);

	  return ArtistCreate;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    errorMessage: state.errors
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)((0, _reduxForm.reduxForm)({
	  form: 'create'
	})(ArtistCreate));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _actions = __webpack_require__(27);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArtistEdit = function (_Component) {
	  _inherits(ArtistEdit, _Component);

	  function ArtistEdit(props) {
	    _classCallCheck(this, ArtistEdit);

	    var _this = _possibleConstructorReturn(this, (ArtistEdit.__proto__ || Object.getPrototypeOf(ArtistEdit)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(ArtistEdit, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.findArtist(this.props.params.id);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var artist = _ref.artist;

	      if (artist) {
	        var name = artist.name,
	            age = artist.age,
	            yearsActive = artist.yearsActive,
	            genre = artist.genre;


	        this.setState({ name: name, age: age, yearsActive: yearsActive, genre: genre });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      if (nextProps.params.id !== this.props.params.id) {
	        this.props.findArtist(nextProps.params.id);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearError();
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(event) {
	      event.preventDefault();
	      event.stopPropagation();

	      this.props.editArtist(this.props.params.id, this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmit.bind(this) },
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement('input', {
	            value: this.state.name,
	            onChange: function onChange(e) {
	              return _this2.setState({ name: e.target.value });
	            },
	            placeholder: 'Name'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement('input', {
	            value: this.state.age,
	            onChange: function onChange(e) {
	              return _this2.setState({ age: e.target.value });
	            },
	            placeholder: 'Age'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement('input', {
	            value: this.state.yearsActive,
	            onChange: function onChange(e) {
	              return _this2.setState({ yearsActive: e.target.value });
	            },
	            placeholder: 'Years Active'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'input-field' },
	          _react2.default.createElement('input', {
	            value: this.state.genre,
	            onChange: function onChange(e) {
	              return _this2.setState({ genre: e.target.value });
	            },
	            placeholder: 'Genre'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'has-error' },
	          this.props.errorMessage
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn' },
	          'Submit'
	        )
	      );
	    }
	  }]);

	  return ArtistEdit;
	}(_react.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    artist: state.artists.artist,
	    errorMessage: state.errors
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ArtistEdit);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(15);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _faker = __webpack_require__(46);

	var _faker2 = _interopRequireDefault(_faker);

	var _mongodb = __webpack_require__(7);

	var _constants = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MINIMUM_ARTISTS = 2;
	var ARTISTS_TO_ADD = 15;

	var artistsCollection = void 0;
	var db = new _mongodb.Db('upstar_music', new _mongodb.Server('localhost', 27017));
	db.open().then(function () {
	  artistsCollection = db.collection('artists');
	  return artistsCollection.count({});
	}).then(function (count) {
	  if (count < MINIMUM_ARTISTS) {
	    var artists = _lodash2.default.times(ARTISTS_TO_ADD, function () {
	      return createArtist();
	    });

	    artistsCollection.insertMany(artists);
	  }
	}).catch(function (e) {
	  return console.log(e);
	});

	function createArtist() {
	  return {
	    name: _faker2.default.name.findName(),
	    age: randomBetween(15, 45),
	    yearsActive: randomBetween(0, 15),
	    image: _faker2.default.image.avatar(),
	    genre: getGenre(),
	    website: _faker2.default.internet.url(),
	    netWorth: randomBetween(0, 5000000),
	    labelName: _faker2.default.company.companyName(),
	    retired: _faker2.default.random.boolean(),
	    albums: getAlbums()
	  };
	}

	function getAlbums() {
	  return _lodash2.default.times(randomBetween(0, 5), function () {
	    var copiesSold = randomBetween(0, 1000000);

	    return {
	      title: _lodash2.default.capitalize(_faker2.default.random.words()),
	      date: _faker2.default.date.past(),
	      copiesSold: copiesSold,
	      numberTracks: randomBetween(1, 20),
	      image: getAlbumImage(),
	      revenue: copiesSold * 12.99
	    };
	  });
	}

	function getAlbumImage() {
	  var types = _lodash2.default.keys(_faker2.default.image);
	  var method = randomEntry(types);

	  return _faker2.default.image[method]();
	}

	function getGenre() {
	  return randomEntry(_constants.GENRES);
	}

	function randomEntry(array) {
	  return array[~~(Math.random() * array.length)];
	}

	function randomBetween(min, max) {
	  return ~~(Math.random() * (max - min)) + min;
	}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = require("faker");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GENRES = exports.GENRES = ['Acceptable Country', 'Acceptable Emo', 'Acceptable Pop', 'Acceptable Pop-Punk', 'Alt-Country', 'Alt-Rap', 'Bloghaus', 'Blog Rap', 'Blog Rock', 'Cold Wave', 'Cool Jazz', 'Digital Punk', 'Doom Metal', 'Freak Folk', 'Garage Rock', 'Hypnagogic Pop', 'Noise Pop', 'Power Electronics', 'Serialism', 'Witch House', 'Ye Olde Timey Rock And Roll Music of Indeterminate Hipster Variety'];

/***/ })
/******/ ]);