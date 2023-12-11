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
  BrandListResponseDataContract,
  BrandLocalizationRequestDataContract,
  BrandLocalizationResponseDataContract,
  BrandRequestDataContract,
  BrandResponseDataContract,
  ErrorDataContract,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brand<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Brand
   * @name DeleteBrandsId
   * @request DELETE:/brands/{id}
   * @secure
   * @response `200` `number` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  deleteBrandsId = (id: number, params: RequestParams = {}) =>
    this.http.request<number, ErrorDataContract>({
      path: `/brands/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brand
   * @name GetBrands
   * @request GET:/brands
   * @secure
   * @response `200` `BrandListResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getBrands = (
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
    params: RequestParams = {}
  ) =>
    this.http.request<BrandListResponseDataContract, ErrorDataContract>({
      path: `/brands`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brand
   * @name GetBrandsId
   * @request GET:/brands/{id}
   * @secure
   * @response `200` `BrandResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getBrandsId = (id: number, params: RequestParams = {}) =>
    this.http.request<BrandResponseDataContract, ErrorDataContract>({
      path: `/brands/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brand
   * @name PostBrands
   * @request POST:/brands
   * @secure
   * @response `200` `BrandResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postBrands = (data: BrandRequestDataContract, params: RequestParams = {}) =>
    this.http.request<BrandResponseDataContract, ErrorDataContract>({
      path: `/brands`,
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
   * @tags Brand
   * @name PostBrandsIdLocalizations
   * @request POST:/brands/{id}/localizations
   * @secure
   * @response `200` `BrandLocalizationResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postBrandsIdLocalizations = (
    id: number,
    data: BrandLocalizationRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<BrandLocalizationResponseDataContract, ErrorDataContract>(
      {
        path: `/brands/${id}/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }
    );
  /**
   * No description
   *
   * @tags Brand
   * @name PutBrandsId
   * @request PUT:/brands/{id}
   * @secure
   * @response `200` `BrandResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  putBrandsId = (
    id: number,
    data: BrandRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<BrandResponseDataContract, ErrorDataContract>({
      path: `/brands/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
