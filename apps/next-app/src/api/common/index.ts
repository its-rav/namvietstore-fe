import {
  getCmsApiUrl as getBaseUrl,
  getCmsBearerToken as getToken,
} from './env';
import { CollectionData, Meta, QueryParams, SingleData } from '../types';
import { Response } from '../types';

export const parseQueryParams = (queryParams: QueryParams): URLSearchParams => {
  const { fields, populate, locale, pagination, filter, sort } = queryParams;

  const params = new URLSearchParams();

  if (fields) {
    populateArrayOrString(fields, 'fields').forEach(([key, value]) => {
      params.append(key, value);
    });
  }

  if (populate) {
    populateArrayOrString(populate, 'populate').forEach(([key, value]) => {
      params.append(key, value);
    });
  }

  if (locale) {
    params.append('locale', locale);
  }

  if (pagination) {
    Object.entries(pagination).forEach(([key, value]) => {
      params.append(getPaginationKey(key), value.toString());
    });
  }

  if (sort) {
    params.append('sort', sort);
  }

  //   TODO: fix filter
  //   if (filter) {
  //     params.append('filter', JSON.stringify(filter));
  //   }

  return params;
};

export const populateArrayOrString = (
  param: string | string[],
  key: string
): [string, string][] => {
  if (Array.isArray(param)) {
    return param.map((field, index) => [`${key}[${index}]`, field]);
  }

  return [[key, param]];
};

export const getPaginationKey = (key: string) => `pagination[${key}]`;

const HANDLE_STATUS = [400, 401, 403, 404, 500];

const get = async (url: string, config?: any) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    method: 'GET',
    ...config,
  });

  if (HANDLE_STATUS.includes(response.status) || response.ok) {
    return [response.status, await response.json()];
  }

  throw new Error('Unexpected error');
};

export const getOne = async <TData, TMeta = Meta>(
  resource: string,
  queryParams?: QueryParams,
  config?: any
): Promise<Response<SingleData<TData>, TMeta>> => {
  const queryString = queryParams ? parseQueryParams(queryParams) : '';
  const endpoint = `${getBaseUrl()}${resource}?${queryString}`;

  const [status, response] = await get(endpoint, config);

  return handleGetResponse(
    status,
    response as Response<SingleData<TData>, TMeta>
  );
};

export const handleGetResponse = <TData, TMeta>(
  status: number,
  data: Response<TData, TMeta>
): Response<TData, TMeta> => {
  if (status === 200) {
    return data;
  }

  if (data.error) {
    const { message, name } = data.error;
    throw new Error(`[${name}] ${message}`);
  }

  throw new Error('Something went wrong');
};

export const getMany = async <TData, TMeta = Meta>(
  resource: string,
  queryParams?: QueryParams,
  config?: any
): Promise<Response<CollectionData<TData>, TMeta>> => {
  const queryString = queryParams ? parseQueryParams(queryParams) : '';
  const endpoint = `${getBaseUrl()}${resource}?${queryString}`;

  const [status, response] = await get(endpoint, config);

  return handleGetResponse(
    status,
    response as Response<CollectionData<TData>, TMeta>
  );
};
