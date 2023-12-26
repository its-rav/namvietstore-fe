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
  UsersPermissionsUserRegistrationDataContract,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class UsersPermissionsAuth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Users-Permissions - Auth
   * @name CallbackDetail
   * @summary Default Callback from provider auth
   * @request GET:/auth/{provider}/callback
   * @secure
   * @response `200` `UsersPermissionsUserRegistrationDataContract` Returns a jwt token and user info
   * @response `default` `ErrorDataContract` Error
   */
  callbackDetail = (provider: string, params: RequestParams = {}) =>
    this.http.request<
      UsersPermissionsUserRegistrationDataContract,
      ErrorDataContract
    >({
      path: `/auth/${provider}/callback`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Auth
   * @name ChangePasswordCreate
   * @summary Update user's own password
   * @request POST:/auth/change-password
   * @secure
   * @response `200` `UsersPermissionsUserRegistrationDataContract` Returns a jwt token and user info
   * @response `default` `ErrorDataContract` Error
   */
  changePasswordCreate = (
    data: {
      password: string;
      currentPassword: string;
      passwordConfirmation: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      UsersPermissionsUserRegistrationDataContract,
      ErrorDataContract
    >({
      path: `/auth/change-password`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Redirects to provider login before being redirect to /auth/{provider}/callback
   *
   * @tags Users-Permissions - Auth
   * @name ConnectDetail
   * @summary Login with a provider
   * @request GET:/connect/{provider}
   * @secure
   * @response `301` `void` Redirect response
   * @response `default` `ErrorDataContract` Error
   */
  connectDetail = (provider: string, params: RequestParams = {}) =>
    this.http.request<any, void | ErrorDataContract>({
      path: `/connect/${provider}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Auth
   * @name EmailConfirmationList
   * @summary Confirm user email
   * @request GET:/auth/email-confirmation
   * @secure
   * @response `301` `void` Redirects to the configure email confirmation redirect url
   * @response `default` `ErrorDataContract` Error
   */
  emailConfirmationList = (
    query?: {
      /** confirmation token received by email */
      confirmation?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<any, void | ErrorDataContract>({
      path: `/auth/email-confirmation`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Auth
 * @name ForgotPasswordCreate
 * @summary Send rest password email
 * @request POST:/auth/forgot-password
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok
 * @response `default` `ErrorDataContract` Error
 */
  forgotPasswordCreate = (
    data: {
      email?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        ok?: 'true';
      },
      ErrorDataContract
    >({
      path: `/auth/forgot-password`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a jwt token and user info
   *
   * @tags Users-Permissions - Auth
   * @name LocalCreate
   * @summary Local login
   * @request POST:/auth/local
   * @secure
   * @response `200` `UsersPermissionsUserRegistrationDataContract` Connection
   * @response `default` `ErrorDataContract` Error
   */
  localCreate = (
    data: {
      identifier?: string;
      password?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      UsersPermissionsUserRegistrationDataContract,
      ErrorDataContract
    >({
      path: `/auth/local`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a jwt token and user info
   *
   * @tags Users-Permissions - Auth
   * @name LocalRegisterCreate
   * @summary Register a user
   * @request POST:/auth/local/register
   * @secure
   * @response `200` `UsersPermissionsUserRegistrationDataContract` Successfull registration
   * @response `default` `ErrorDataContract` Error
   */
  localRegisterCreate = (
    data: {
      username?: string;
      email?: string;
      password?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      UsersPermissionsUserRegistrationDataContract,
      ErrorDataContract
    >({
      path: `/auth/local/register`,
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
   * @tags Users-Permissions - Auth
   * @name ResetPasswordCreate
   * @summary Rest user password
   * @request POST:/auth/reset-password
   * @secure
   * @response `200` `UsersPermissionsUserRegistrationDataContract` Returns a jwt token and user info
   * @response `default` `ErrorDataContract` Error
   */
  resetPasswordCreate = (
    data: {
      password?: string;
      passwordConfirmation?: string;
      code?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      UsersPermissionsUserRegistrationDataContract,
      ErrorDataContract
    >({
      path: `/auth/reset-password`,
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
 * @tags Users-Permissions - Auth
 * @name SendEmailConfirmationCreate
 * @summary Send confirmation email
 * @request POST:/auth/send-email-confirmation
 * @secure
 * @response `200` `{
    email?: string,
    sent?: "true",

}` Returns email and boolean to confirm email was sent
 * @response `default` `ErrorDataContract` Error
 */
  sendEmailConfirmationCreate = (
    data: {
      email?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        email?: string;
        sent?: 'true';
      },
      ErrorDataContract
    >({
      path: `/auth/send-email-confirmation`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
