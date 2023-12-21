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

import { UploadFileDataContract } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UploadFile<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Upload - File
   * @name FilesDelete
   * @request DELETE:/upload/files/{id}
   * @secure
   * @response `200` `UploadFileDataContract` Delete a file
   */
  filesDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<UploadFileDataContract, any>({
      path: `/upload/files/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload - File
   * @name FilesDetail
   * @request GET:/upload/files/{id}
   * @secure
   * @response `200` `UploadFileDataContract` Get a specific file
   */
  filesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<UploadFileDataContract, any>({
      path: `/upload/files/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload - File
   * @name FilesList
   * @request GET:/upload/files
   * @secure
   * @response `200` `(UploadFileDataContract)[]` Get a list of files
   */
  filesList = (params: RequestParams = {}) =>
    this.http.request<UploadFileDataContract[], any>({
      path: `/upload/files`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Upload files
   *
   * @tags Upload - File
   * @name UploadCreate
   * @request POST:/upload
   * @secure
   * @response `200` `(UploadFileDataContract)[]` response
   */
  uploadCreate = (
    data: {
      /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
      path?: string;
      /** The ID of the entry which the file(s) will be linked to */
      refId?: string;
      /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
      ref?: string;
      /** The field of the entry which the file(s) will be precisely linked to. */
      field?: string;
      files: File[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<UploadFileDataContract[], any>({
      path: `/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Upload file information
   *
   * @tags Upload - File
   * @name UploadIdCreate
   * @request POST:/upload?id={id}
   * @secure
   * @response `200` `(UploadFileDataContract)[]` response
   */
  uploadIdCreate = (
    id: string,
    query: {
      /** File id */
      id: string;
    },
    data: {
      fileInfo?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
      };
      /** @format binary */
      files?: File;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<UploadFileDataContract[], any>({
      path: `/upload?id=${id}`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
