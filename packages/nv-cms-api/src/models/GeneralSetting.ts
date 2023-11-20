/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ErrorDataContract,
  GeneralSettingLocalizationRequestDataContract,
  GeneralSettingLocalizationResponseDataContract,
  GeneralSettingRequestDataContract,
  GeneralSettingResponseDataContract,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GeneralSetting<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags General-setting
   * @name DeleteGeneralSetting
   * @request DELETE:/general-setting
   * @secure
   * @response `200` `number` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  deleteGeneralSetting = (params: RequestParams = {}) =>
    this.http.request<number, ErrorDataContract>({
      path: `/general-setting`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags General-setting
   * @name GetGeneralSetting
   * @request GET:/general-setting
   * @secure
   * @response `200` `GeneralSettingResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getGeneralSetting = (
    query?: {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<GeneralSettingResponseDataContract, ErrorDataContract>({
      path: `/general-setting`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags General-setting
   * @name PostGeneralSettingLocalizations
   * @request POST:/general-setting/localizations
   * @secure
   * @response `200` `GeneralSettingLocalizationResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postGeneralSettingLocalizations = (data: GeneralSettingLocalizationRequestDataContract, params: RequestParams = {}) =>
    this.http.request<GeneralSettingLocalizationResponseDataContract, ErrorDataContract>({
      path: `/general-setting/localizations`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags General-setting
   * @name PutGeneralSetting
   * @request PUT:/general-setting
   * @secure
   * @response `200` `GeneralSettingResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  putGeneralSetting = (data: GeneralSettingRequestDataContract, params: RequestParams = {}) =>
    this.http.request<GeneralSettingResponseDataContract, ErrorDataContract>({
      path: `/general-setting`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
