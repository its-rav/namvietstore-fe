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
  CategoryListResponseDataContract,
  CategoryLocalizationRequestDataContract,
  CategoryLocalizationResponseDataContract,
  CategoryRequestDataContract,
  CategoryResponseDataContract,
  ErrorDataContract,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Category<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Category
   * @name DeleteCategoriesId
   * @request DELETE:/categories/{id}
   * @secure
   * @response `200` `number` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  deleteCategoriesId = (id: number, params: RequestParams = {}) =>
    this.http.request<number, ErrorDataContract>({
      path: `/categories/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name GetCategories
   * @request GET:/categories
   * @secure
   * @response `200` `CategoryListResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getCategories = (
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
    this.http.request<CategoryListResponseDataContract, ErrorDataContract>({
      path: `/categories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name GetCategoriesId
   * @request GET:/categories/{id}
   * @secure
   * @response `200` `CategoryResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getCategoriesId = (id: number, params: RequestParams = {}) =>
    this.http.request<CategoryResponseDataContract, ErrorDataContract>({
      path: `/categories/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Category
   * @name PostCategories
   * @request POST:/categories
   * @secure
   * @response `200` `CategoryResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postCategories = (
    data: CategoryRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<CategoryResponseDataContract, ErrorDataContract>({
      path: `/categories`,
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
   * @tags Category
   * @name PostCategoriesIdLocalizations
   * @request POST:/categories/{id}/localizations
   * @secure
   * @response `200` `CategoryLocalizationResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postCategoriesIdLocalizations = (
    id: number,
    data: CategoryLocalizationRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CategoryLocalizationResponseDataContract,
      ErrorDataContract
    >({
      path: `/categories/${id}/localizations`,
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
   * @tags Category
   * @name PutCategoriesId
   * @request PUT:/categories/{id}
   * @secure
   * @response `200` `CategoryResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  putCategoriesId = (
    id: number,
    data: CategoryRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<CategoryResponseDataContract, ErrorDataContract>({
      path: `/categories/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
