"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListGroup = ReactBootstrap.ListGroup;
var Spinner = ReactBootstrap.Spinner;
var Alert = ReactBootstrap.Alert;
var Container = ReactBootstrap.Container;
var Nav = ReactBootstrap.Nav;
var Card = ReactBootstrap.Card;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }

  return null; //console.log('Query variable %s not found', variable);
}

console.log('lanuage is : ' + getQueryVariable('language'));

var Header = function Header(props) {
  var menuItems = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Nav, {
    className: "justify-content-center",
    variant: "pills",
    activeKey: props.activeKey || 'All',
    onSelect: function onSelect(selectedKey) {
      return props.onClick(selectedKey);
    }
  }, menuItems.map(function (item, key) {
    return /*#__PURE__*/React.createElement(Nav.Item, {
      key: key
    }, /*#__PURE__*/React.createElement(Nav.Link, {
      eventKey: item
    }, item));
  }))));
};

var Content = function Content(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, null, props.children));
};

var Footer = function Footer(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, null, props.children));
};

var RepoCard = function RepoCard(props) {
  return /*#__PURE__*/React.createElement(Card, {
    border: "success",
    style: {
      marginTop: '8px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement(Card.Header, {
    className: "text-center"
  }, props.no), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Img, {
    src: "images/image.png",
    "data-src": props.img,
    className: "lazyload"
  }), /*#__PURE__*/React.createElement(Card.Title, {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(Card.Link, {
    href: props.url,
    target: "_blank"
  }, props.title)), /*#__PURE__*/React.createElement(Card.Text, null, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-user fa-lg fa-fw",
    style: {
      color: 'orange'
    }
  }), props.author), /*#__PURE__*/React.createElement(Card.Text, null, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-star fa-lg fa-fw",
    style: {
      color: 'yellow'
    }
  }), props.stars), /*#__PURE__*/React.createElement(Card.Text, null, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-code-fork fa-lg fa-fw",
    style: {
      color: 'lightblue'
    }
  }), props.forks), /*#__PURE__*/React.createElement(Card.Text, null, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-warning fa-lg fa-fw",
    style: {
      color: 'purple'
    }
  }), props.issues)));
};

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleNavClick", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var type,
          page,
          pushState,
          cards,
          url,
          beforeState,
          res,
          newCards,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'all';
              page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
              pushState = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
              cards = _this.state.cards;
              console.log('type', type);
              url = '';
              _context.t0 = type;
              _context.next = _context.t0 === 'Javascript' ? 9 : _context.t0 === 'Ruby' ? 11 : _context.t0 === 'Java' ? 13 : _context.t0 === 'Css' ? 15 : 17;
              break;

            case 9:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 11:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 13:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 15:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 17:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories';

            case 18:
              url = "".concat(url, "&page=").concat(page, "&per_page=10");
              _context.prev = 19;
              beforeState = {
                type: type,
                loading: true,
                error: null,
                lang: type
              };

              if (page === 1) {
                beforeState.cards = [];
              }

              if (pushState) {
                window.history.pushState('', '', "?language=".concat(type));
              } //window.location.search = `?language=${type}`


              _this.setState(beforeState);

              _context.next = 26;
              return axios.get(url);

            case 26:
              res = _context.sent;

              /* {
                  headers: {
                      'Authorization': 'token 23d18f1250269da629df6cdf1243c0203da72d04'
                  }
              })*/
              console.log('res', res.data);
              newCards = res.data.items.map(function (item, key) {
                return {
                  no: '#' + (page === 1 ? 1 + key : cards.length + 1 + key),
                  img: item.owner.avatar_url,
                  title: item.full_name,
                  author: item.owner.login,
                  stars: item.stargazers_count,
                  forks: item.forks,
                  issues: item.open_issues,
                  url: item.html_url
                };
              });

              if (page > 1) {
                _this.setState(function (state, props) {
                  return {
                    cards: [].concat(_toConsumableArray(state.cards), _toConsumableArray(newCards)),
                    loading: false,
                    page: page
                  };
                });
              } else {
                _this.setState({
                  cards: newCards,
                  loading: false,
                  page: page
                });
              }

              _context.next = 35;
              break;

            case 32:
              _context.prev = 32;
              _context.t1 = _context["catch"](19);

              _this.setState({
                loading: false,
                error: _context.t1
              });

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[19, 32]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "loadMore", function () {
      var _this$state = _this.state,
          type = _this$state.type,
          page = _this$state.page;

      _this.handleNavClick(type, page + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePopState", function (params) {
      var lang = getQueryVariable('language');

      _this.handleNavClick(lang, _this.state.page, false);

      console.log('lang', lang);
      console.log('params', params);
    });

    var _cards = [];
    _this.state = {
      cards: _cards,
      loading: false,
      error: null,
      type: 'all',
      page: 1
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var lang = getQueryVariable('language');
      this.handleNavClick(lang); //  this.setState({lang})

      window.addEventListener('popstate', this.handlePopState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('popstate', this.handlePopState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          cards = _this$state2.cards,
          loading = _this$state2.loading,
          error = _this$state2.error,
          lang = _this$state2.lang;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement(Header, {
        onClick: this.handleNavClick,
        activeKey: lang
      }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(Row, {
        className: "justify-content-around"
      }, cards.map(function (item, key) {
        return /*#__PURE__*/React.createElement(Col, {
          sm: 6,
          md: 4,
          lg: 3,
          key: key
        }, /*#__PURE__*/React.createElement(RepoCard, {
          no: item.no,
          img: item.img,
          title: item.title,
          author: item.author,
          stars: item.stars,
          forks: item.forks,
          issues: item.issues,
          url: item.url
        }));
      })), /*#__PURE__*/React.createElement("div", {
        className: "text-center"
      }, error && /*#__PURE__*/React.createElement(Alert, {
        variant: "danger"
      }, error.response.status, " ", error.response.statusText)), /*#__PURE__*/React.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: this.loadMore,
        disabled: loading
      }, " ", loading && /*#__PURE__*/React.createElement(Spinner, {
        as: "span",
        animation: "grow",
        size: "sm",
        role: "status",
        "aria-hidden": "true"
      }), " \u52A0\u8F7D\u66F4\u591A"))), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement("div", {
        className: "text-center"
      }, "\u7248\u6743\u6240\u6709 \xA9 \u9EC4\u5B9A\u92AE"))));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('container'));