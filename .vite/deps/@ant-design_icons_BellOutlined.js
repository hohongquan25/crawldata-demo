import {
  require_AntdIcon
} from "./chunk-CV765CGK.js";
import "./chunk-PM5CJLY3.js";
import "./chunk-MIK3CWBV.js";
import "./chunk-36TAJBD6.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/@ant-design/icons-svg/lib/asn/BellOutlined.js
var require_BellOutlined = __commonJS({
  "node_modules/@ant-design/icons-svg/lib/asn/BellOutlined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BellOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" } }] }, "name": "bell", "theme": "outlined" };
    exports.default = BellOutlined;
  }
});

// node_modules/@ant-design/icons/lib/icons/BellOutlined.js
var require_BellOutlined2 = __commonJS({
  "node_modules/@ant-design/icons/lib/icons/BellOutlined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _react = _interop_require_wildcard(require_react());
    var _BellOutlined = _interop_require_default(require_BellOutlined());
    var _AntdIcon = _interop_require_default(require_AntdIcon());
    function _define_property(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {
        __proto__: null
      };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _object_spread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys2 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys2.forEach(function(key) {
          _define_property(target, key, source[key]);
        });
      }
      return target;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _object_spread_props(target, source) {
      source = source != null ? source : {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    var BellOutlined = function(props, ref) {
      return _react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
        ref,
        icon: _BellOutlined.default
      }));
    };
    var RefIcon = _react.forwardRef(BellOutlined);
    if (true) {
      RefIcon.displayName = "BellOutlined";
    }
    var _default = RefIcon;
  }
});

// node_modules/@ant-design/icons/BellOutlined.js
var require_BellOutlined3 = __commonJS({
  "node_modules/@ant-design/icons/BellOutlined.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _BellOutlined = _interopRequireDefault(require_BellOutlined2());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _default = _BellOutlined;
    exports.default = _default;
    module.exports = _default;
  }
});
export default require_BellOutlined3();
//# sourceMappingURL=@ant-design_icons_BellOutlined.js.map
