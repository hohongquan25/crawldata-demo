import {
  init_useEnhancedEffect,
  useEnhancedEffect_default
} from "./chunk-LC66EQ5B.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __esm,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var React, useEventCallback_default;
var init_useEventCallback = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js"() {
    "use client";
    React = __toESM(require_react());
    init_useEnhancedEffect();
    useEventCallback_default = useEventCallback;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/index.js
var init_useEventCallback2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useEventCallback/index.js"() {
    init_useEventCallback();
  }
});

export {
  useEventCallback_default,
  init_useEventCallback2 as init_useEventCallback
};
//# sourceMappingURL=chunk-SGVOUXRQ.js.map
