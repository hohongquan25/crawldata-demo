import {
  _extends,
  init_extends
} from "./chunk-EX2UHHRT.js";
import {
  __esm
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js
function requirePropFactory(componentNameInError, Component) {
  if (false) {
    return () => null;
  }
  const prevPropTypes = Component ? _extends({}, Component.propTypes) : null;
  const requireProp = (requiredProp) => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== "undefined" && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of \`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}
var init_requirePropFactory = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js"() {
    init_extends();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/index.js
var init_requirePropFactory2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/requirePropFactory/index.js"() {
    init_requirePropFactory();
  }
});

export {
  requirePropFactory,
  init_requirePropFactory2 as init_requirePropFactory
};
//# sourceMappingURL=chunk-BHV2MG7J.js.map
