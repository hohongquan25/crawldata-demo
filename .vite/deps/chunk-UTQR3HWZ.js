import {
  chainPropTypes,
  init_chainPropTypes
} from "./chunk-T4OLNVWO.js";
import {
  require_prop_types
} from "./chunk-K4EYXPH5.js";
import {
  __esm,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var import_prop_types, elementAcceptingRef, elementAcceptingRef_default;
var init_elementAcceptingRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js"() {
    import_prop_types = __toESM(require_prop_types());
    init_chainPropTypes();
    elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
    elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);
    elementAcceptingRef_default = elementAcceptingRef;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/index.js
var init_elementAcceptingRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/elementAcceptingRef/index.js"() {
    init_elementAcceptingRef();
  }
});

export {
  elementAcceptingRef_default,
  init_elementAcceptingRef2 as init_elementAcceptingRef
};
//# sourceMappingURL=chunk-UTQR3HWZ.js.map
