import {
  Typography_default
} from "./chunk-VOOM4DE7.js";
import {
  init_useIsFocusVisible,
  useIsFocusVisible_default
} from "./chunk-I3PFL77A.js";
import {
  init_useForkRef,
  useForkRef_default
} from "./chunk-DPKWNFI5.js";
import {
  elementTypeAcceptingRef_default,
  init_elementTypeAcceptingRef
} from "./chunk-E4BBYEEC.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-FIMNML6G.js";
import {
  init_DefaultPropsProvider,
  useDefaultProps
} from "./chunk-N2K7GCX5.js";
import {
  init_styled,
  styled_default
} from "./chunk-QU5VQMGL.js";
import {
  require_colorManipulator
} from "./chunk-OTDUN4BA.js";
import {
  getPath
} from "./chunk-UNRTIK4B.js";
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

// node_modules/@mui/material/Link/Link.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_elementTypeAcceptingRef();
init_composeClasses();
init_capitalize();
init_styled();
init_DefaultPropsProvider();
init_useIsFocusVisible();
init_useForkRef();

// node_modules/@mui/material/Link/linkClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getLinkUtilityClass(slot) {
  return generateUtilityClass("MuiLink", slot);
}
var linkClasses = generateUtilityClasses("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]);
var linkClasses_default = linkClasses;

// node_modules/@mui/material/Link/getTextDecoration.js
var import_colorManipulator = __toESM(require_colorManipulator());
var colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
var transformDeprecatedColors = (color) => {
  return colorTransformations[color] || color;
};
var getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = transformDeprecatedColors(ownerState.color);
  const color = getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = getPath(theme, `palette.${transformedColor}Channel`);
  if ("vars" in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }
  return (0, import_colorManipulator.alpha)(color, 0.4);
};
var getTextDecoration_default = getTextDecoration;

// node_modules/@mui/material/Link/Link.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ["root", `underline${capitalize_default(underline)}`, component === "button" && "button", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};
var LinkRoot = styled_default(Typography_default, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${capitalize_default(ownerState.underline)}`], ownerState.component === "button" && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  return _extends({}, ownerState.underline === "none" && {
    textDecoration: "none"
  }, ownerState.underline === "hover" && {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }, ownerState.underline === "always" && _extends({
    textDecoration: "underline"
  }, ownerState.color !== "inherit" && {
    textDecorationColor: getTextDecoration_default({
      theme,
      ownerState
    })
  }, {
    "&:hover": {
      textDecorationColor: "inherit"
    }
  }), ownerState.component === "button" && {
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    [`&.${linkClasses_default.focusVisible}`]: {
      outline: "auto"
    }
  });
});
var Link = React.forwardRef(function Link2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiLink"
  });
  const {
    className,
    color = "primary",
    component = "a",
    onBlur,
    onFocus,
    TypographyClasses,
    underline = "always",
    variant = "inherit",
    sx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handlerRef = useForkRef_default(ref, focusVisibleRef);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = _extends({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(LinkRoot, _extends({
    color,
    className: clsx_default(classes.root, className),
    classes: TypographyClasses,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState,
    variant,
    sx: [...!Object.keys(colorTransformations).includes(color) ? [{
      color
    }] : [], ...Array.isArray(sx) ? sx : [sx]]
  }, other));
});
true ? Link.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
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
   * The color of the link.
   * @default 'primary'
   */
  color: import_prop_types.default.any,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * @ignore
   */
  onBlur: import_prop_types.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses: import_prop_types.default.object,
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: import_prop_types.default.oneOf(["always", "hover", "none"]),
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types.default.string])
} : void 0;
var Link_default = Link;

export {
  getLinkUtilityClass,
  linkClasses_default,
  Link_default
};
//# sourceMappingURL=chunk-7EKQTRT7.js.map
