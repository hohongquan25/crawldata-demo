import {
  appendOwnerState_default,
  init_appendOwnerState,
  init_mergeSlotProps,
  init_resolveComponentProps,
  mergeSlotProps_default,
  resolveComponentProps_default
} from "./chunk-OTKRSSIH.js";
import {
  init_useForkRef,
  useForkRef
} from "./chunk-H5TRKRIO.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-ZJ3U6ITW.js";
import {
  _extends,
  init_extends
} from "./chunk-EX2UHHRT.js";
import {
  __esm
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps_default(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps_default(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState_default(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
var _excluded, useSlotProps_default;
var init_useSlotProps = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js"() {
    "use client";
    init_extends();
    init_objectWithoutPropertiesLoose();
    init_useForkRef();
    init_appendOwnerState();
    init_mergeSlotProps();
    init_resolveComponentProps();
    _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
    useSlotProps_default = useSlotProps;
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/index.js
var init_useSlotProps2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/useSlotProps/index.js"() {
    init_useSlotProps();
  }
});

export {
  useSlotProps_default,
  init_useSlotProps2 as init_useSlotProps
};
//# sourceMappingURL=chunk-UQTQEBFB.js.map
