// utils/storeUtils.js
import { useSelector } from 'react-redux';

export function selectorRedux(selector, ModelClass) {
  const data = useSelector(selector);
  return new ModelClass(data);
}
