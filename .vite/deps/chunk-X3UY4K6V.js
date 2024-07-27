import {
  __esm
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== "undefined") {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }
  return null;
}
var init_unsupportedProp = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js"() {
  }
});

// node_modules/@mui/material/node_modules/@mui/utils/esm/unsupportedProp/index.js
var init_unsupportedProp2 = __esm({
  "node_modules/@mui/material/node_modules/@mui/utils/esm/unsupportedProp/index.js"() {
    init_unsupportedProp();
  }
});

export {
  unsupportedProp,
  init_unsupportedProp2 as init_unsupportedProp
};
//# sourceMappingURL=chunk-X3UY4K6V.js.map
