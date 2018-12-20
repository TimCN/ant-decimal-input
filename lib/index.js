'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: tim huang 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-08-30 09:29:20 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: tim huang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-08-30 10:55:16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DecimalInput = function (_Component) {
  _inherits(DecimalInput, _Component);

  function DecimalInput(props) {
    _classCallCheck(this, DecimalInput);

    var _this = _possibleConstructorReturn(this, (DecimalInput.__proto__ || Object.getPrototypeOf(DecimalInput)).call(this, props));

    _this.onChange = function (e) {
      var val = e.target.value;
      if (val) {
        var decimalLen = _this.props.decimalLen;

        var lastChar = val.substr(val.length - 1);
        val = parseFloat(val);
        if (isNaN(val)) val = 0;
        val = val.toString();
        var rawMissPart = e.target.value.replace(val, "");
        if (/^\.?0+$/.test(rawMissPart)) val += rawMissPart;
        var pointIndex = val.indexOf(".");
        if (pointIndex > -1 && val.length > pointIndex + decimalLen) {
          val = val.substr(0, pointIndex + decimalLen + 1);
        } else if (lastChar === ".") {
          val += lastChar;
        }
      }
      _this.props.onChange && _this.props.onChange(val);
    };

    return _this;
  }

  _createClass(DecimalInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          decimalLen = _props.decimalLen,
          others = _objectWithoutProperties(_props, ['onChange', 'decimalLen']);

      return _react2.default.createElement(_antd.Input, _extends({}, others, { onChange: this.onChange, ref: 'decimalInput' }));
    }
  }]);

  return DecimalInput;
}(_react.Component);

DecimalInput.defaultProps = {
  decimalLen: 2
};
exports.default = DecimalInput;