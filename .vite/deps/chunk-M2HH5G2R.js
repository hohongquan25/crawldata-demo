import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __esm,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return React.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
  ) !== -1;
}
var React;
var init_isMuiElement = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js"() {
    React = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/index.js
var init_isMuiElement2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/isMuiElement/index.js"() {
    init_isMuiElement();
  }
});

export {
  isMuiElement,
  init_isMuiElement2 as init_isMuiElement
};
//# sourceMappingURL=chunk-M2HH5G2R.js.map
