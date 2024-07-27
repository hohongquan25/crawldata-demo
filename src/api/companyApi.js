import { ApiConfig, AuthApiConfig, passParams } from 'api/config/api.config';

import useSWR from 'swr';
import fetcher, { fetchAuth } from './config/fetcher';
import Network from './config/Network';
import { CompanyModel } from 'model/company';

export function getCompanies(token, params) {
  return Network.authorizedRequest(
    `${AuthApiConfig.ROLE}?${passParams(params)}`,
    'GET',
    token,
    undefined,
    undefined,
    ApiConfig.BASE_URL
  );
}
export const useGetCompanies = (token, params) => {
  const { data, error, isValidating } = useSWR(
    token ? [`${AuthApiConfig.ROLE}`, params, token] : null, // Key cho SWR
    ([url, params, token]) => fetchAuth(url, params, token), // Gọi hàm fetchAuth,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return {
    companies: data?.data?.docs?.map((doc) => new CompanyModel(doc)),
    companiesLoading: isValidating,
    companiesError: error,
    totalDocs: data?.data?.totalDocs,
    totalPages: data?.data?.totalPages
  };
};
