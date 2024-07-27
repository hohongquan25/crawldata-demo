import { ApiConfig, AuthApiConfig, passParams } from './config/api.config';
import axiosInstance from './config/axiosConfig';
import Network from './config/Network';

const CrawlData = (url, params) =>
  axiosInstance.get(url, { params }).then((res) => res.data);

export default CrawlData;

// export const fetch = (url, params) =>
//   Network.unAuthorizedRequest(
//     `${url}?${passParams(params)}`,
//     'GET',
//     undefined,
//     undefined,
//     ApiConfig.BASE_URL
//   );

export const getDetailProduct = async (token, params) => {
  try {
    const response = await Network.authorizedRequest(
      `${AuthApiConfig.CRAWL_DATA}`,
      'POST',
      token,
      params,
      ApiConfig.BASE_URL
    );
    return response;
  } catch (error) {
    console.error('FetchAuth error:', error);
    throw error;
  }
};
export const uploadFile = async (token, data) => {
  for (const key of data.entries()) {
    console.log('_____', key[0], ', ', key[1]);
  }
  try {
    const response = await Network.authorizedRequest(
      `${AuthApiConfig.ATTACHMENT}`,
      'POST',
      token,
      data,
      ApiConfig.BASE_URL
    );
    console.log('🚀 ~ uploadFile ~ response:', response);

    return response;
  } catch (error) {
    console.error('FetchAuth error:', error);
    throw error;
  }
};

export const exportExcelData = async (token, data) => {
  try {
    const response = await Network.authorizedRequest(
      `${AuthApiConfig.EXPORT_EXCEL}`,
      'POST',
      token,
      data,
      ApiConfig.BASE_URL
    );
    console.log('🚀 ~ uploadFile ~ response:', response);

    return response;
  } catch (error) {
    console.error('FetchAuth error:', error);
    throw error;
  }
};
