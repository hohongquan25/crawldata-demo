import {
  KeyboardArrowLeft_default,
  KeyboardArrowRight_default
} from "./chunk-JVLFEQHM.js";
import {
  Toolbar_default
} from "./chunk-WXYS7IXY.js";
import {
  TableCell_default
} from "./chunk-2SHACVKA.js";
import {
  MenuItem_default
} from "./chunk-VWBG2QGJ.js";
import {
  Select_default
} from "./chunk-VB4URHDE.js";
import {
  InputBase_default
} from "./chunk-7Z5ROJSK.js";
import {
  IconButton_default
} from "./chunk-DK3N2QVV.js";
import {
  useRtl
} from "./chunk-SXSELZNS.js";
import {
  init_useId,
  useId_default
} from "./chunk-IWZATEJS.js";
import {
  init_integerPropType,
  integerPropType_default
} from "./chunk-DPPVDIH7.js";
import {
  chainPropTypes,
  init_chainPropTypes
} from "./chunk-T4OLNVWO.js";
import {
  createSvgIcon,
  init_createSvgIcon
} from "./chunk-4SMTADG3.js";
import {
  init_isHostComponent,
  isHostComponent_default
} from "./chunk-OTKRSSIH.js";
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

// node_modules/@mui/material/TablePagination/TablePagination.js
init_objectWithoutPropertiesLoose();
init_extends();
var React4 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx();
init_integerPropType();
init_chainPropTypes();
init_composeClasses();
init_isHostComponent();
init_styled();
init_DefaultPropsProvider();

// node_modules/@mui/material/TablePagination/TablePaginationActions.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/internal/svg-icons/LastPage.js
var React = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var LastPage_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage");

// node_modules/@mui/material/internal/svg-icons/FirstPage.js
var React2 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var FirstPage_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage");

// node_modules/@mui/material/TablePagination/TablePaginationActions.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded = ["backIconButtonProps", "count", "disabled", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "slots", "slotProps"];
var TablePaginationActions = React3.forwardRef(function TablePaginationActions2(props, ref) {
  var _slots$firstButton, _slots$lastButton, _slots$nextButton, _slots$previousButton, _slots$firstButtonIco, _slots$lastButtonIcon, _slots$nextButtonIcon, _slots$previousButton2;
  const {
    backIconButtonProps,
    count,
    disabled = false,
    getItemAriaLabel,
    nextIconButtonProps,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton,
    showLastButton,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isRtl = useRtl();
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const FirstButton = (_slots$firstButton = slots.firstButton) != null ? _slots$firstButton : IconButton_default;
  const LastButton = (_slots$lastButton = slots.lastButton) != null ? _slots$lastButton : IconButton_default;
  const NextButton = (_slots$nextButton = slots.nextButton) != null ? _slots$nextButton : IconButton_default;
  const PreviousButton = (_slots$previousButton = slots.previousButton) != null ? _slots$previousButton : IconButton_default;
  const FirstButtonIcon = (_slots$firstButtonIco = slots.firstButtonIcon) != null ? _slots$firstButtonIco : FirstPage_default;
  const LastButtonIcon = (_slots$lastButtonIcon = slots.lastButtonIcon) != null ? _slots$lastButtonIcon : LastPage_default;
  const NextButtonIcon = (_slots$nextButtonIcon = slots.nextButtonIcon) != null ? _slots$nextButtonIcon : KeyboardArrowRight_default;
  const PreviousButtonIcon = (_slots$previousButton2 = slots.previousButtonIcon) != null ? _slots$previousButton2 : KeyboardArrowLeft_default;
  const FirstButtonSlot = isRtl ? LastButton : FirstButton;
  const PreviousButtonSlot = isRtl ? NextButton : PreviousButton;
  const NextButtonSlot = isRtl ? PreviousButton : NextButton;
  const LastButtonSlot = isRtl ? FirstButton : LastButton;
  const firstButtonSlotProps = isRtl ? slotProps.lastButton : slotProps.firstButton;
  const previousButtonSlotProps = isRtl ? slotProps.nextButton : slotProps.previousButton;
  const nextButtonSlotProps = isRtl ? slotProps.previousButton : slotProps.nextButton;
  const lastButtonSlotProps = isRtl ? slotProps.firstButton : slotProps.lastButton;
  return (0, import_jsx_runtime4.jsxs)("div", _extends({
    ref
  }, other, {
    children: [showFirstButton && (0, import_jsx_runtime3.jsx)(FirstButtonSlot, _extends({
      onClick: handleFirstPageButtonClick,
      disabled: disabled || page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page)
    }, firstButtonSlotProps, {
      children: isRtl ? (0, import_jsx_runtime3.jsx)(LastButtonIcon, _extends({}, slotProps.lastButtonIcon)) : (0, import_jsx_runtime3.jsx)(FirstButtonIcon, _extends({}, slotProps.firstButtonIcon))
    })), (0, import_jsx_runtime3.jsx)(PreviousButtonSlot, _extends({
      onClick: handleBackButtonClick,
      disabled: disabled || page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page)
    }, previousButtonSlotProps != null ? previousButtonSlotProps : backIconButtonProps, {
      children: isRtl ? (0, import_jsx_runtime3.jsx)(NextButtonIcon, _extends({}, slotProps.nextButtonIcon)) : (0, import_jsx_runtime3.jsx)(PreviousButtonIcon, _extends({}, slotProps.previousButtonIcon))
    })), (0, import_jsx_runtime3.jsx)(NextButtonSlot, _extends({
      onClick: handleNextButtonClick,
      disabled: disabled || (count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false),
      color: "inherit",
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page)
    }, nextButtonSlotProps != null ? nextButtonSlotProps : nextIconButtonProps, {
      children: isRtl ? (0, import_jsx_runtime3.jsx)(PreviousButtonIcon, _extends({}, slotProps.previousButtonIcon)) : (0, import_jsx_runtime3.jsx)(NextButtonIcon, _extends({}, slotProps.nextButtonIcon))
    })), showLastButton && (0, import_jsx_runtime3.jsx)(LastButtonSlot, _extends({
      onClick: handleLastPageButtonClick,
      disabled: disabled || page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page)
    }, lastButtonSlotProps, {
      children: isRtl ? (0, import_jsx_runtime3.jsx)(FirstButtonIcon, _extends({}, slotProps.firstButtonIcon)) : (0, import_jsx_runtime3.jsx)(LastButtonIcon, _extends({}, slotProps.lastButtonIcon))
    }))]
  }));
});
true ? TablePaginationActions.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  backIconButtonProps: import_prop_types.default.object,
  /**
   * The total number of rows.
   */
  count: import_prop_types.default.number.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @returns {string}
   */
  getItemAriaLabel: import_prop_types.default.func.isRequired,
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  nextIconButtonProps: import_prop_types.default.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types.default.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: import_prop_types.default.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: import_prop_types.default.number.isRequired,
  /**
   * If `true`, show the first-page button.
   */
  showFirstButton: import_prop_types.default.bool.isRequired,
  /**
   * If `true`, show the last-page button.
   */
  showLastButton: import_prop_types.default.bool.isRequired,
  /**
   * The props used for each slot inside the TablePaginationActions.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    firstButton: import_prop_types.default.object,
    firstButtonIcon: import_prop_types.default.object,
    lastButton: import_prop_types.default.object,
    lastButtonIcon: import_prop_types.default.object,
    nextButton: import_prop_types.default.object,
    nextButtonIcon: import_prop_types.default.object,
    previousButton: import_prop_types.default.object,
    previousButtonIcon: import_prop_types.default.object
  }),
  /**
   * The components used for each slot inside the TablePaginationActions.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    firstButton: import_prop_types.default.elementType,
    firstButtonIcon: import_prop_types.default.elementType,
    lastButton: import_prop_types.default.elementType,
    lastButtonIcon: import_prop_types.default.elementType,
    nextButton: import_prop_types.default.elementType,
    nextButtonIcon: import_prop_types.default.elementType,
    previousButton: import_prop_types.default.elementType,
    previousButtonIcon: import_prop_types.default.elementType
  })
} : void 0;
var TablePaginationActions_default = TablePaginationActions;

// node_modules/@mui/material/TablePagination/TablePagination.js
init_useId();

// node_modules/@mui/material/TablePagination/tablePaginationClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass("MuiTablePagination", slot);
}
var tablePaginationClasses = generateUtilityClasses("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var tablePaginationClasses_default = tablePaginationClasses;

// node_modules/@mui/material/TablePagination/TablePagination.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _InputBase;
var _excluded2 = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "disabled", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton", "slotProps", "slots"];
var TablePaginationRoot = styled_default(TableCell_default, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  overflow: "auto",
  color: (theme.vars || theme).palette.text.primary,
  fontSize: theme.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
}));
var TablePaginationToolbar = styled_default(Toolbar_default, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (props, styles) => _extends({
    [`& .${tablePaginationClasses_default.actions}`]: styles.actions
  }, styles.toolbar)
})(({
  theme
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${tablePaginationClasses_default.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}));
var TablePaginationSpacer = styled_default("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})({
  flex: "1 1 100%"
});
var TablePaginationSelectLabel = styled_default("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (props, styles) => styles.selectLabel
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  flexShrink: 0
}));
var TablePaginationSelect = styled_default(Select_default, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (props, styles) => _extends({
    [`& .${tablePaginationClasses_default.selectIcon}`]: styles.selectIcon,
    [`& .${tablePaginationClasses_default.select}`]: styles.select
  }, styles.input, styles.selectRoot)
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${tablePaginationClasses_default.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
});
var TablePaginationMenuItem = styled_default(MenuItem_default, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (props, styles) => styles.menuItem
})({});
var TablePaginationDisplayedRows = styled_default("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (props, styles) => styles.displayedRows
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  flexShrink: 0
}));
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, getTablePaginationUtilityClass, classes);
};
var TablePagination = React4.forwardRef(function TablePagination2(inProps, ref) {
  var _slotProps$select;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTablePagination"
  });
  const {
    ActionsComponent = TablePaginationActions_default,
    backIconButtonProps,
    className,
    colSpan: colSpanProp,
    component = TableCell_default,
    count,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = "Rows per page:",
    nextIconButtonProps,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    SelectProps = {},
    showFirstButton = false,
    showLastButton = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const selectProps = (_slotProps$select = slotProps == null ? void 0 : slotProps.select) != null ? _slotProps$select : SelectProps;
  const MenuItemComponent = selectProps.native ? "option" : TablePaginationMenuItem;
  let colSpan;
  if (component === TableCell_default || component === "td") {
    colSpan = colSpanProp || 1e3;
  }
  const selectId = useId_default(selectProps.id);
  const labelId = useId_default(selectProps.labelId);
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  return (0, import_jsx_runtime5.jsx)(TablePaginationRoot, _extends({
    colSpan,
    ref,
    as: component,
    ownerState,
    className: clsx_default(classes.root, className)
  }, other, {
    children: (0, import_jsx_runtime6.jsxs)(TablePaginationToolbar, {
      className: classes.toolbar,
      children: [(0, import_jsx_runtime5.jsx)(TablePaginationSpacer, {
        className: classes.spacer
      }), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime5.jsx)(TablePaginationSelectLabel, {
        className: classes.selectLabel,
        id: labelId,
        children: labelRowsPerPage
      }), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime5.jsx)(TablePaginationSelect, _extends({
        variant: "standard"
      }, !selectProps.variant && {
        input: _InputBase || (_InputBase = (0, import_jsx_runtime5.jsx)(InputBase_default, {}))
      }, {
        value: rowsPerPage,
        onChange: onRowsPerPageChange,
        id: selectId,
        labelId
      }, selectProps, {
        classes: _extends({}, selectProps.classes, {
          // TODO v5 remove `classes.input`
          root: clsx_default(classes.input, classes.selectRoot, (selectProps.classes || {}).root),
          select: clsx_default(classes.select, (selectProps.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: clsx_default(classes.selectIcon, (selectProps.classes || {}).icon)
        }),
        disabled,
        children: rowsPerPageOptions.map((rowsPerPageOption) => (0, import_react.createElement)(MenuItemComponent, _extends({}, !isHostComponent_default(MenuItemComponent) && {
          ownerState
        }, {
          className: classes.menuItem,
          key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), (0, import_jsx_runtime5.jsx)(TablePaginationDisplayedRows, {
        className: classes.displayedRows,
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      }), (0, import_jsx_runtime5.jsx)(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps,
        count,
        nextIconButtonProps,
        onPageChange,
        page,
        rowsPerPage,
        showFirstButton,
        showLastButton,
        slotProps: slotProps.actions,
        slots: slots.actions,
        getItemAriaLabel,
        disabled
      })]
    })
  }));
});
true ? TablePagination.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  ActionsComponent: import_prop_types2.default.elementType,
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) component.
   *
   * This prop is an alias for `slotProps.actions.previousButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.previousButton` instead.
   */
  backIconButtonProps: import_prop_types2.default.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * @ignore
   */
  colSpan: import_prop_types2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: integerPropType_default.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: import_prop_types2.default.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: import_prop_types2.default.func,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: import_prop_types2.default.node,
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   *
   * This prop is an alias for `slotProps.actions.nextButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.nextButton` instead.
   */
  nextIconButtonProps: import_prop_types2.default.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types2.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: import_prop_types2.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes(integerPropType_default.isRequired, (props) => {
    const {
      count,
      page,
      rowsPerPage
    } = props;
    if (count === -1) {
      return null;
    }
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page < 0 || page > newLastPage) {
      return new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${newLastPage}, but page is ${page}).`);
    }
    return null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: integerPropType_default.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.shape({
    label: import_prop_types2.default.string.isRequired,
    value: import_prop_types2.default.number.isRequired
  })]).isRequired),
  /**
   * Props applied to the rows per page [`Select`](/material-ui/api/select/) element.
   *
   * This prop is an alias for `slotProps.select` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.select` instead.
   *
   * @default {}
   */
  SelectProps: import_prop_types2.default.object,
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: import_prop_types2.default.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: import_prop_types2.default.bool,
  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    actions: import_prop_types2.default.shape({
      firstButton: import_prop_types2.default.object,
      firstButtonIcon: import_prop_types2.default.object,
      lastButton: import_prop_types2.default.object,
      lastButtonIcon: import_prop_types2.default.object,
      nextButton: import_prop_types2.default.object,
      nextButtonIcon: import_prop_types2.default.object,
      previousButton: import_prop_types2.default.object,
      previousButtonIcon: import_prop_types2.default.object
    }),
    select: import_prop_types2.default.object
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    actions: import_prop_types2.default.shape({
      firstButton: import_prop_types2.default.elementType,
      firstButtonIcon: import_prop_types2.default.elementType,
      lastButton: import_prop_types2.default.elementType,
      lastButtonIcon: import_prop_types2.default.elementType,
      nextButton: import_prop_types2.default.elementType,
      nextButtonIcon: import_prop_types2.default.elementType,
      previousButton: import_prop_types2.default.elementType,
      previousButtonIcon: import_prop_types2.default.elementType
    })
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var TablePagination_default = TablePagination;

export {
  FirstPage_default,
  LastPage_default,
  getTablePaginationUtilityClass,
  tablePaginationClasses_default,
  TablePagination_default
};
//# sourceMappingURL=chunk-V7CYUA7F.js.map
