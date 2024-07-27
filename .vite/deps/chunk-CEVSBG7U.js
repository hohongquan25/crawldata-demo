import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __esm,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
function useLazyRef(init, initArg) {
  const ref = React.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
var React, UNINITIALIZED;
var init_useLazyRef = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js"() {
    "use client";
    React = __toESM(require_react());
    UNINITIALIZED = {};
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
function useOnMount(fn) {
  React2.useEffect(fn, EMPTY);
}
var React2, EMPTY;
var init_useOnMount = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useOnMount/useOnMount.js"() {
    "use client";
    React2 = __toESM(require_react());
    EMPTY = [];
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
var Timeout;
var init_useTimeout = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useTimeout/useTimeout.js"() {
    "use client";
    init_useLazyRef();
    init_useOnMount();
    Timeout = class _Timeout {
      constructor() {
        this.currentId = null;
        this.clear = () => {
          if (this.currentId !== null) {
            clearTimeout(this.currentId);
            this.currentId = null;
          }
        };
        this.disposeEffect = () => {
          return this.clear;
        };
      }
      static create() {
        return new _Timeout();
      }
      /**
       * Executes `fn` after `delay`, clearing any previously scheduled call.
       */
      start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(() => {
          this.currentId = null;
          fn();
        }, delay);
      }
    };
  }
});

export {
  init_useLazyRef,
  init_useOnMount,
  Timeout,
  useTimeout,
  init_useTimeout
};
//# sourceMappingURL=chunk-CEVSBG7U.js.map
