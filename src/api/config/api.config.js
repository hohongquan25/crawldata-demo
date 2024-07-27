export const ApiConfig = { BASE_URL: 'http://103.183.120.158:80' };

export const AuthApiConfig = {
  BASE_URL: 'http://103.183.120.158:80',
  AUTH: '/v1/auth',
  SEND_MAIL: 'v1/auth/send-mail',
  REGISTER: 'v1/auth/register',
  FORGOT_PASSWORD: 'v1/auth/forgot-password',
  CHANGE_PASSWORD: 'v1/auth/change-password',
  LOGIN: '/v1/auth/login',
  ROLE: 'v1/role',
  CRAWL_DATA: 'v1/crawl/product-etsy',
  ATTACHMENT: 'v1/attachment/excel',
  EXPORT_EXCEL: 'v1/crawl/export-product'
};

export const passParams = (params) => {
  return Object.keys(params)
    .filter((pKey) => params[pKey] !== undefined)
    .map((pKey) => `${pKey}=${params[pKey]}`)
    .join('&');
};
