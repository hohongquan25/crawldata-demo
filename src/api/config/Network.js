import axios from 'axios';
import { ApiConfig } from './api.config';

export const passParams = (params = {}) => {
  return Object.keys(params)
    .filter((pKey) => params[pKey] !== undefined)
    .map((pKey) => `${pKey}=${params[pKey]}`)
    .join('&');
};

/**
 * Image
 */
class Network {
  static instance = new Network();

  constructor() {
    if (Network.instance) {
      throw new Error(
        'Error: Instantiation failed: Use Network.getInstance() instead of new.'
      );
    }
    Network.instance = this;
  }

  static getInstance() {
    return Network.instance;
  }

  unAuthorizedRequest(url, method = 'GET', data, header, baseURL) {
    const response = axios({
      method: method,
      url: url,
      baseURL: baseURL || ApiConfig.BASE_URL,
      data: data,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        ...header
      }
    });
    //console.log("unAuthorizedRequest:response", response);
    return response;
  }

  authorizedRequest(url, method = 'GET', token, data, header, baseURL) {
    const response = axios({
      method: method,
      url: url,
      baseURL: baseURL || ApiConfig.BASE_URL,
      data: data,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
        // Chỉ thêm 'Content-Type' nếu data không phải là FormData
        ...(data instanceof FormData
          ? {}
          : { 'Content-Type': 'application/json' })
      }
    });
    //console.log("Request:authorizedRequest:", response);
    return response;
  }
}

export default Network.getInstance();
