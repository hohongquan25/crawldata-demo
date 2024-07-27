import {
  init_elementAcceptingRef
} from "./chunk-UTQR3HWZ.js";
import {
  init_requirePropFactory
} from "./chunk-BHV2MG7J.js";
import {
  init_useControlled
} from "./chunk-YLAJG5GS.js";
import {
  init_unsupportedProp
} from "./chunk-X3UY4K6V.js";
import {
  init_useSlotProps
} from "./chunk-UQTQEBFB.js";
import {
  init_useEventCallback
} from "./chunk-SGVOUXRQ.js";
import {
  init_useTimeout
} from "./chunk-EICUPMD7.js";
import {
  init_elementTypeAcceptingRef,
  init_useIsFocusVisible
} from "./chunk-E4BBYEEC.js";
import {
  init_useLazyRef,
  init_useOnMount
} from "./chunk-CEVSBG7U.js";
import {
  init_refType
} from "./chunk-U3S5EYQY.js";
import {
  init_integerPropType
} from "./chunk-DPPVDIH7.js";
import {
  init_exactProp
} from "./chunk-ZT55TE3W.js";
import {
  init_useEnhancedEffect
} from "./chunk-LC66EQ5B.js";
import {
  init_isMuiElement
} from "./chunk-M2HH5G2R.js";
import {
  init_chainPropTypes
} from "./chunk-T4OLNVWO.js";
import {
  init_extractEventHandlers,
  init_resolveComponentProps
} from "./chunk-OTKRSSIH.js";
import {
  init_setRef,
  init_useForkRef
} from "./chunk-H5TRKRIO.js";
import {
  init_ClassNameGenerator,
  init_clamp,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_getDisplayName
} from "./chunk-CALC2L6O.js";
import {
  init_capitalize,
  init_deepmerge,
  init_formatMuiErrorMessage,
  init_resolveProps
} from "./chunk-XKGUUVPL.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __esm,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}
var init_HTMLElementType = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/index.js
var init_HTMLElementType2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/HTMLElementType/index.js"() {
    init_HTMLElementType();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js
var ponyfillGlobal_default;
var init_ponyfillGlobal = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js"() {
    ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/index.js
var init_ponyfillGlobal2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ponyfillGlobal/index.js"() {
    init_ponyfillGlobal();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
var init_createChainedFunction = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/index.js
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/createChainedFunction/index.js"() {
    init_createChainedFunction();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/debounce.js
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
var init_debounce = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/debounce.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/index.js
var init_debounce2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/debounce/index.js"() {
    init_debounce();
    init_debounce();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (false) {
    return () => null;
  }
  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || "<<anonymous>>";
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== "undefined") {
      return new Error(`The ${location} \`${propFullNameSafe}\` of \`${componentNameSafe}\` is deprecated. ${reason}`);
    }
    return null;
  };
}
var init_deprecatedPropType = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/index.js
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/deprecatedPropType/index.js"() {
    init_deprecatedPropType();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
var init_ownerDocument = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/index.js
var init_ownerDocument2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerDocument/index.js"() {
    init_ownerDocument();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}
var init_ownerWindow = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js"() {
    init_ownerDocument2();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/index.js
var init_ownerWindow2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/ownerWindow/index.js"() {
    init_ownerWindow();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useId/useId.js
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React.useState(idOverride);
  const id = idOverride || defaultId;
  React.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
var React, globalId, maybeReactUseId;
var init_useId = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useId/useId.js"() {
    "use client";
    React = __toESM(require_react());
    globalId = 0;
    maybeReactUseId = React["useId".toString()];
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useId/index.js
var init_useId2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useId/index.js"() {
    init_useId();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/index.js
var init_useLazyRef2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/index.js"() {
    init_useLazyRef();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/index.js
var init_useOnMount2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/index.js"() {
    init_useOnMount();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
var init_getScrollbarSize = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/index.js
var init_getScrollbarSize2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getScrollbarSize/index.js"() {
    init_getScrollbarSize();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/scrollLeft/scrollLeft.js
function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }
  const dummy = document.createElement("div");
  const container = document.createElement("div");
  container.style.width = "10px";
  container.style.height = "1px";
  dummy.appendChild(container);
  dummy.dir = "rtl";
  dummy.style.fontSize = "14px";
  dummy.style.width = "4px";
  dummy.style.height = "1px";
  dummy.style.position = "absolute";
  dummy.style.top = "-1000px";
  dummy.style.overflow = "scroll";
  document.body.appendChild(dummy);
  cachedType = "reverse";
  if (dummy.scrollLeft > 0) {
    cachedType = "default";
  } else {
    dummy.scrollLeft = 1;
    if (dummy.scrollLeft === 0) {
      cachedType = "negative";
    }
  }
  document.body.removeChild(dummy);
  return cachedType;
}
function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft;
  if (direction !== "rtl") {
    return scrollLeft;
  }
  const type = detectScrollType();
  switch (type) {
    case "negative":
      return element.scrollWidth - element.clientWidth + scrollLeft;
    case "reverse":
      return element.scrollWidth - element.clientWidth - scrollLeft;
    default:
      return scrollLeft;
  }
}
var cachedType;
var init_scrollLeft = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/scrollLeft/scrollLeft.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/scrollLeft/index.js
var init_scrollLeft2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/scrollLeft/index.js"() {
    init_scrollLeft();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
var React2, usePreviousProps, usePreviousProps_default;
var init_usePreviousProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js"() {
    "use client";
    React2 = __toESM(require_react());
    usePreviousProps = (value) => {
      const ref = React2.useRef({});
      React2.useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    };
    usePreviousProps_default = usePreviousProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/index.js
var init_usePreviousProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/usePreviousProps/index.js"() {
    init_usePreviousProps();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js
function getValidReactChildren(children) {
  return React3.Children.toArray(children).filter((child) => React3.isValidElement(child));
}
var React3;
var init_getValidReactChildren = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js"() {
    React3 = __toESM(require_react());
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/index.js
var init_getValidReactChildren2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/getValidReactChildren/index.js"() {
    init_getValidReactChildren();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var visuallyHidden, visuallyHidden_default;
var init_visuallyHidden = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js"() {
    visuallyHidden = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    };
    visuallyHidden_default = visuallyHidden;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/index.js
var init_visuallyHidden2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/visuallyHidden/index.js"() {
    init_visuallyHidden();
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/types.js
var init_types = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/types.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/index.js
var init_esm = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/index.js"() {
    init_chainPropTypes();
    init_deepmerge();
    init_deepmerge();
    init_elementAcceptingRef();
    init_elementTypeAcceptingRef();
    init_exactProp();
    init_formatMuiErrorMessage();
    init_getDisplayName();
    init_HTMLElementType2();
    init_ponyfillGlobal2();
    init_refType();
    init_capitalize();
    init_createChainedFunction2();
    init_debounce2();
    init_deprecatedPropType2();
    init_isMuiElement();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory();
    init_setRef();
    init_useEnhancedEffect();
    init_useId2();
    init_unsupportedProp();
    init_useControlled();
    init_useEventCallback();
    init_useForkRef();
    init_useLazyRef2();
    init_useTimeout();
    init_useOnMount2();
    init_useIsFocusVisible();
    init_getScrollbarSize2();
    init_scrollLeft2();
    init_usePreviousProps2();
    init_getValidReactChildren2();
    init_visuallyHidden2();
    init_integerPropType();
    init_resolveProps();
    init_composeClasses();
    init_generateUtilityClass();
    init_generateUtilityClass();
    init_generateUtilityClass();
    init_generateUtilityClasses();
    init_ClassNameGenerator();
    init_clamp();
    init_useSlotProps();
    init_resolveComponentProps();
    init_extractEventHandlers();
    init_types();
  }
});

export {
  HTMLElementType,
  init_HTMLElementType2 as init_HTMLElementType,
  createChainedFunction,
  init_createChainedFunction2 as init_createChainedFunction,
  debounce,
  init_debounce2 as init_debounce,
  deprecatedPropType,
  init_deprecatedPropType2 as init_deprecatedPropType,
  ownerDocument,
  init_ownerDocument2 as init_ownerDocument,
  ownerWindow,
  init_ownerWindow2 as init_ownerWindow,
  useId,
  init_useId2 as init_useId,
  getScrollbarSize,
  init_getScrollbarSize2 as init_getScrollbarSize,
  detectScrollType,
  getNormalizedScrollLeft,
  usePreviousProps_default,
  init_usePreviousProps2 as init_usePreviousProps,
  getValidReactChildren,
  init_getValidReactChildren2 as init_getValidReactChildren,
  visuallyHidden_default,
  init_visuallyHidden2 as init_visuallyHidden,
  init_esm
};
//# sourceMappingURL=chunk-4DQ22TH5.js.map
