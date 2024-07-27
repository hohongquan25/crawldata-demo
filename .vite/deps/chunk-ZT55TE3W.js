import {
  _extends,
  init_extends
} from "./chunk-EX2UHHRT.js";
import {
  __esm
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/exactProp.js
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return _extends({}, propTypes, {
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  });
}
var specialProperty;
var init_exactProp = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/exactProp.js"() {
    init_extends();
    specialProperty = "exact-prop: ​";
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/index.js
var init_exactProp2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/exactProp/index.js"() {
    init_exactProp();
  }
});

export {
  exactProp,
  init_exactProp2 as init_exactProp
};
//# sourceMappingURL=chunk-ZT55TE3W.js.map
