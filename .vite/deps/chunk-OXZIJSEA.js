import {
  Avatar_default,
  avatarClasses_default
} from "./chunk-O3ECFJPR.js";
import {
  chainPropTypes,
  init_chainPropTypes
} from "./chunk-T4OLNVWO.js";
import {
  init_DefaultPropsProvider,
  useDefaultProps
} from "./chunk-N2K7GCX5.js";
import {
  init_styled,
  styled_default
} from "./chunk-QU5VQMGL.js";
import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses
} from "./chunk-CALC2L6O.js";
import {
  clsx_default,
  init_clsx
} from "./chunk-WKJ4PPP4.js";
import {
  require_prop_types
} from "./chunk-K4EYXPH5.js";
import {
  require_react_is
} from "./chunk-CQSGFBTC.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-ZJ3U6ITW.js";
import {
  _extends,
  init_extends
} from "./chunk-EX2UHHRT.js";
import {
  require_jsx_runtime
} from "./chunk-UZNMMFWU.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/AvatarGroup/AvatarGroup.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_react_is = __toESM(require_react_is());
init_clsx();
init_chainPropTypes();
init_composeClasses();
init_styled();
init_DefaultPropsProvider();

// node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getAvatarGroupUtilityClass(slot) {
  return generateUtilityClass("MuiAvatarGroup", slot);
}
var avatarGroupClasses = generateUtilityClasses("MuiAvatarGroup", ["root", "avatar"]);
var avatarGroupClasses_default = avatarGroupClasses;

// node_modules/@mui/material/AvatarGroup/AvatarGroup.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "component", "componentsProps", "max", "renderSurplus", "slotProps", "spacing", "total", "variant"];
var SPACINGS = {
  small: -16,
  medium: null
};
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    avatar: ["avatar"]
  };
  return composeClasses(slots, getAvatarGroupUtilityClass, classes);
};
var AvatarGroupRoot = styled_default("div", {
  name: "MuiAvatarGroup",
  slot: "Root",
  overridesResolver: (props, styles) => _extends({
    [`& .${avatarGroupClasses_default.avatar}`]: styles.avatar
  }, styles.root)
})(({
  theme,
  ownerState
}) => {
  const marginValue = ownerState.spacing && SPACINGS[ownerState.spacing] !== void 0 ? SPACINGS[ownerState.spacing] : -ownerState.spacing;
  return {
    [`& .${avatarClasses_default.root}`]: {
      border: `2px solid ${(theme.vars || theme).palette.background.default}`,
      boxSizing: "content-box",
      marginLeft: marginValue != null ? marginValue : -8,
      "&:last-child": {
        marginLeft: 0
      }
    },
    display: "flex",
    flexDirection: "row-reverse"
  };
});
var AvatarGroup = React.forwardRef(function AvatarGroup2(inProps, ref) {
  var _slotProps$additional;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAvatarGroup"
  });
  const {
    children: childrenProp,
    className,
    component = "div",
    componentsProps = {},
    max = 5,
    renderSurplus,
    slotProps = {},
    spacing = "medium",
    total,
    variant = "circular"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  let clampedMax = max < 2 ? 2 : max;
  const ownerState = _extends({}, props, {
    max,
    spacing,
    component,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const children = React.Children.toArray(childrenProp).filter((child) => {
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The AvatarGroup component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    return React.isValidElement(child);
  });
  const totalAvatars = total || children.length;
  if (totalAvatars === clampedMax) {
    clampedMax += 1;
  }
  clampedMax = Math.min(totalAvatars + 1, clampedMax);
  const maxAvatars = Math.min(children.length, clampedMax - 1);
  const extraAvatars = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
  const extraAvatarsElement = renderSurplus ? renderSurplus(extraAvatars) : `+${extraAvatars}`;
  const additionalAvatarSlotProps = (_slotProps$additional = slotProps.additionalAvatar) != null ? _slotProps$additional : componentsProps.additionalAvatar;
  return (0, import_jsx_runtime2.jsxs)(AvatarGroupRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other, {
    children: [extraAvatars ? (0, import_jsx_runtime.jsx)(Avatar_default, _extends({
      variant
    }, additionalAvatarSlotProps, {
      className: clsx_default(classes.avatar, additionalAvatarSlotProps == null ? void 0 : additionalAvatarSlotProps.className),
      children: extraAvatarsElement
    })) : null, children.slice(0, maxAvatars).reverse().map((child) => {
      return React.cloneElement(child, {
        className: clsx_default(child.props.className, classes.avatar),
        variant: child.props.variant || variant
      });
    })]
  }));
});
true ? AvatarGroup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The avatars to stack.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types.default.shape({
    additionalAvatar: import_prop_types.default.object
  }),
  /**
   * Max avatars to show before +x.
   * @default 5
   */
  max: chainPropTypes(import_prop_types.default.number, (props) => {
    if (props.max < 2) {
      return new Error(["MUI: The prop `max` should be equal to 2 or above.", "A value below is clamped to 2."].join("\n"));
    }
    return null;
  }),
  /**
   * custom renderer of extraAvatars
   * @param {number} surplus number of extra avatars
   * @returns {React.ReactNode} custom element to display
   */
  renderSurplus: import_prop_types.default.func,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    additionalAvatar: import_prop_types.default.object
  }),
  /**
   * Spacing between avatars.
   * @default 'medium'
   */
  spacing: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["medium", "small"]), import_prop_types.default.number]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The total number of avatars. Used for calculating the number of extra avatars.
   * @default children.length
   */
  total: import_prop_types.default.number,
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["circular", "rounded", "square"]), import_prop_types.default.string])
} : void 0;
var AvatarGroup_default = AvatarGroup;

export {
  getAvatarGroupUtilityClass,
  avatarGroupClasses_default,
  AvatarGroup_default
};
//# sourceMappingURL=chunk-OXZIJSEA.js.map
