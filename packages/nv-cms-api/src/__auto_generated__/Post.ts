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
  PostListResponseDataContract,
  PostLocalizationRequestDataContract,
  PostLocalizationResponseDataContract,
  PostRequestDataContract,
  PostResponseDataContract,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Post<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Post
   * @name DeletePostsId
   * @request DELETE:/posts/{id}
   * @secure
   * @response `200` `number` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  deletePostsId = (id: number, params: RequestParams = {}) =>
    this.http.request<number, ErrorDataContract>({
      path: `/posts/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name GetPosts
   * @request GET:/posts
   * @secure
   * @response `200` `PostListResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getPosts = (
    query?: {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
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
    this.http.request<PostListResponseDataContract, ErrorDataContract>({
      path: `/posts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name GetPostsId
   * @request GET:/posts/{id}
   * @secure
   * @response `200` `PostResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  getPostsId = (id: number, params: RequestParams = {}) =>
    this.http.request<PostResponseDataContract, ErrorDataContract>({
      path: `/posts/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostPosts
   * @request POST:/posts
   * @secure
   * @response `200` `PostResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postPosts = (data: PostRequestDataContract, params: RequestParams = {}) =>
    this.http.request<PostResponseDataContract, ErrorDataContract>({
      path: `/posts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PostPostsIdLocalizations
   * @request POST:/posts/{id}/localizations
   * @secure
   * @response `200` `PostLocalizationResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  postPostsIdLocalizations = (
    id: number,
    data: PostLocalizationRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<PostLocalizationResponseDataContract, ErrorDataContract>({
      path: `/posts/${id}/localizations`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Post
   * @name PutPostsId
   * @request PUT:/posts/{id}
   * @secure
   * @response `200` `PostResponseDataContract` OK
   * @response `400` `ErrorDataContract` Bad Request
   * @response `401` `ErrorDataContract` Unauthorized
   * @response `403` `ErrorDataContract` Forbidden
   * @response `404` `ErrorDataContract` Not Found
   * @response `500` `ErrorDataContract` Internal Server Error
   */
  putPostsId = (
    id: number,
    data: PostRequestDataContract,
    params: RequestParams = {}
  ) =>
    this.http.request<PostResponseDataContract, ErrorDataContract>({
      path: `/posts/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
