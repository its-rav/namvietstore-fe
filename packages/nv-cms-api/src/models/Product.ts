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
  ProductListResponseDataContract,
  ProductLocalizationRequestDataContract,
  ProductLocalizationResponseDataContract,
  ProductRequestDataContract,
  ProductResponseDataContract,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Product<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Product
   * @name DeleteProductsId
   * @request DELETE:/products/{id}
   * @secure
   * @response `200` `number` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  deleteProductsId = (id: number, params: RequestParams = {}) =>
    this.http.request<number, ErrorDataContract>({
      path: `/products/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name GetProducts
   * @request GET:/products
   * @secure
   * @response `200` `ProductListResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getProducts = (
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
    this.http.request<ProductListResponseDataContract, ErrorDataContract>({
      path: `/products`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name GetProductsId
   * @request GET:/products/{id}
   * @secure
   * @response `200` `ProductResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getProductsId = (id: number, params: RequestParams = {}) =>
    this.http.request<ProductResponseDataContract, ErrorDataContract>({
      path: `/products/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Product
   * @name PostProducts
   * @request POST:/products
   * @secure
   * @response `200` `ProductResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postProducts = (data: ProductRequestDataContract, params: RequestParams = {}) =>
    this.http.request<ProductResponseDataContract, ErrorDataContract>({
      path: `/products`,
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
   * @tags Product
   * @name PostProductsIdLocalizations
   * @request POST:/products/{id}/localizations
   * @secure
   * @response `200` `ProductLocalizationResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postProductsIdLocalizations = (
    id: number,
    data: ProductLocalizationRequestDataContract,
    params: RequestParams = {},
  ) =>
    this.http.request<ProductLocalizationResponseDataContract, ErrorDataContract>({
      path: `/products/${id}/localizations`,
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
   * @tags Product
   * @name PutProductsId
   * @request PUT:/products/{id}
   * @secure
   * @response `200` `ProductResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  putProductsId = (id: number, data: ProductRequestDataContract, params: RequestParams = {}) =>
    this.http.request<ProductResponseDataContract, ErrorDataContract>({
      path: `/products/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
