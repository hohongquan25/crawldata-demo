import {
  init_useId,
  useId_default
} from "./chunk-IWZATEJS.js";
import {
  debounce_default,
  init_debounce,
  init_ownerDocument,
  init_ownerWindow,
  ownerDocument_default,
  ownerWindow_default
} from "./chunk-VW4HGJKA.js";
import {
  init_useEnhancedEffect,
  useEnhancedEffect_default
} from "./chunk-IWXMUYKG.js";
import {
  init_isMuiElement,
  isMuiElement_default
} from "./chunk-CRA272US.js";
import {
  init_requirePropFactory,
  requirePropFactory_default
} from "./chunk-7RXIDFJI.js";
import {
  init_useControlled,
  useControlled_default
} from "./chunk-5Y5GPYQR.js";
import {
  init_unsupportedProp,
  unsupportedProp_default
} from "./chunk-FAARDJJ4.js";
import {
  createChainedFunction,
  deprecatedPropType,
  init_createChainedFunction,
  init_deprecatedPropType,
  init_esm
} from "./chunk-4DQ22TH5.js";
import {
  init_useEventCallback,
  useEventCallback_default
} from "./chunk-PEU5CYAK.js";
import {
  init_useIsFocusVisible,
  useIsFocusVisible_default
} from "./chunk-I3PFL77A.js";
import {
  init_useForkRef,
  useForkRef_default
} from "./chunk-DPKWNFI5.js";
import {
  createSvgIcon,
  init_createSvgIcon
} from "./chunk-4SMTADG3.js";
import {
  init_setRef,
  setRef
} from "./chunk-H5TRKRIO.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-FIMNML6G.js";
import {
  ClassNameGenerator_default
} from "./chunk-CALC2L6O.js";
import {
  __esm,
  __export
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction_default;
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/utils/createChainedFunction.js"() {
    init_createChainedFunction();
    createChainedFunction_default = createChainedFunction;
  }
});

// node_modules/@mui/material/utils/deprecatedPropType.js
var deprecatedPropType_default;
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/material/utils/deprecatedPropType.js"() {
    init_deprecatedPropType();
    deprecatedPropType_default = deprecatedPropType;
  }
});

// node_modules/@mui/material/utils/setRef.js
var setRef_default;
var init_setRef2 = __esm({
  "node_modules/@mui/material/utils/setRef.js"() {
    init_setRef();
    setRef_default = setRef;
  }
});

// node_modules/@mui/material/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  capitalize: () => capitalize_default,
  createChainedFunction: () => createChainedFunction_default,
  createSvgIcon: () => createSvgIcon,
  debounce: () => debounce_default,
  deprecatedPropType: () => deprecatedPropType_default,
  isMuiElement: () => isMuiElement_default,
  ownerDocument: () => ownerDocument_default,
  ownerWindow: () => ownerWindow_default,
  requirePropFactory: () => requirePropFactory_default,
  setRef: () => setRef_default,
  unstable_ClassNameGenerator: () => unstable_ClassNameGenerator,
  unstable_useEnhancedEffect: () => useEnhancedEffect_default,
  unstable_useId: () => useId_default,
  unsupportedProp: () => unsupportedProp_default,
  useControlled: () => useControlled_default,
  useEventCallback: () => useEventCallback_default,
  useForkRef: () => useForkRef_default,
  useIsFocusVisible: () => useIsFocusVisible_default
});
var unstable_ClassNameGenerator;
var init_utils = __esm({
  "node_modules/@mui/material/utils/index.js"() {
    "use client";
    init_esm();
    init_capitalize();
    init_createChainedFunction2();
    init_createSvgIcon();
    init_debounce();
    init_deprecatedPropType2();
    init_isMuiElement();
    init_ownerDocument();
    init_ownerWindow();
    init_requirePropFactory();
    init_setRef2();
    init_useEnhancedEffect();
    init_useId();
    init_unsupportedProp();
    init_useControlled();
    init_useEventCallback();
    init_useForkRef();
    init_useIsFocusVisible();
    unstable_ClassNameGenerator = {
      configure: (generator) => {
        if (true) {
          console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
        }
        ClassNameGenerator_default.configure(generator);
      }
    };
  }
});

export {
  createChainedFunction_default,
  init_createChainedFunction2 as init_createChainedFunction,
  deprecatedPropType_default,
  setRef_default,
  unstable_ClassNameGenerator,
  utils_exports,
  init_utils
};
//# sourceMappingURL=chunk-7VEUMBKT.js.map
