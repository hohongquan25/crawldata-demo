import { ApiConfig, AuthApiConfig, passParams } from './api.config';
import axiosInstance from './axiosConfig';
import Network from './Network';
const fetcher = (url, params) =>
  axiosInstance.get(url, { params }).then((res) => res.data);

export default fetcher;

// export const fetch = (url, params) =>
//   Network.unAuthorizedRequest(
//     `${url}?${passParams(params)}`,
//     'GET',
//     undefined,
//     undefined,
//     ApiConfig.BASE_URL
//   );

export const fetchAuth = async (url, params, token) => {
  try {
    const response = await Network.authorizedRequest(
      `${url}?${passParams(params)}`,
      'GET',
      token,
      undefined,
      undefined,
      ApiConfig.BASE_URL
    );
    return response;
  } catch (error) {
    console.error('FetchAuth error:', error);
    throw error;
  }
};
