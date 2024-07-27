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

// node_modules/@ant-design/icons-svg/lib/asn/ProfileOutlined.js
var require_ProfileOutlined = __commonJS({
  "node_modules/@ant-design/icons-svg/lib/asn/ProfileOutlined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProfileOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "profile", "theme": "outlined" };
    exports.default = ProfileOutlined;
  }
});

// node_modules/@ant-design/icons/lib/icons/ProfileOutlined.js
var require_ProfileOutlined2 = __commonJS({
  "node_modules/@ant-design/icons/lib/icons/ProfileOutlined.js"(exports) {
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
    var _ProfileOutlined = _interop_require_default(require_ProfileOutlined());
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
    var ProfileOutlined = function(props, ref) {
      return _react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
        ref,
        icon: _ProfileOutlined.default
      }));
    };
    var RefIcon = _react.forwardRef(ProfileOutlined);
    if (true) {
      RefIcon.displayName = "ProfileOutlined";
    }
    var _default = RefIcon;
  }
});

// node_modules/@ant-design/icons/ProfileOutlined.js
var require_ProfileOutlined3 = __commonJS({
  "node_modules/@ant-design/icons/ProfileOutlined.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ProfileOutlined = _interopRequireDefault(require_ProfileOutlined2());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _default = _ProfileOutlined;
    exports.default = _default;
    module.exports = _default;
  }
});
export default require_ProfileOutlined3();
//# sourceMappingURL=@ant-design_icons_ProfileOutlined.js.map
