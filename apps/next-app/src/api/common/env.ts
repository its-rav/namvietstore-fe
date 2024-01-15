export const getCmsBaseUrl = () => process.env.CMS_BASE_URL;

export const getCmsApiUrl = () => `${getCmsBaseUrl()}/api`;

export const getCmsBearerToken = () => process.env.CMS_BEARER_TOKEN;

export const getFFUseApi = (): boolean =>
  process.env.FEATURE_FLAGS_USE_API === 'true';
