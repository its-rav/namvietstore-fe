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
  UsersPermissionsPermissionsTreeDataContract,
  UsersPermissionsRoleDataContract,
  UsersPermissionsUserDataContract,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UsersPermissionsUsersRoles<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name CountList
   * @summary Get user count
   * @request GET:/users/count
   * @secure
   * @response `200` `number` Returns a number
   * @response `default` `ErrorDataContract` Error
   */
  countList = (params: RequestParams = {}) =>
    this.http.request<number, ErrorDataContract>({
      path: `/users/count`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name GetUsersPermissionsUsersRoles
   * @summary Get authenticated user info
   * @request GET:/users/me
   * @secure
   * @response `200` `UsersPermissionsUserDataContract` Returns user info
   * @response `default` `ErrorDataContract` Error
   */
  getUsersPermissionsUsersRoles = (params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUserDataContract, ErrorDataContract>({
      path: `/users/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name PermissionsList
 * @summary Get default generated permissions
 * @request GET:/users-permissions/permissions
 * @secure
 * @response `200` `{
    permissions?: UsersPermissionsPermissionsTreeDataContract,

}` Returns the permissions tree
 * @response `default` `ErrorDataContract` Error
 */
  permissionsList = (params: RequestParams = {}) =>
    this.http.request<
      {
        permissions?: UsersPermissionsPermissionsTreeDataContract;
      },
      ErrorDataContract
    >({
      path: `/users-permissions/permissions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesCreate
 * @summary Create a role
 * @request POST:/users-permissions/roles
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok if the role was create
 * @response `default` `ErrorDataContract` Error
 */
  rolesCreate = (
    data: {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTreeDataContract;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        ok?: "true";
      },
      ErrorDataContract
    >({
      path: `/users-permissions/roles`,
      method: "POST",
      body: data,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesDelete
 * @summary Delete a role
 * @request DELETE:/users-permissions/roles/{role}
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok if the role was delete
 * @response `default` `ErrorDataContract` Error
 */
  rolesDelete = (role: string, params: RequestParams = {}) =>
    this.http.request<
      {
        ok?: "true";
      },
      ErrorDataContract
    >({
      path: `/users-permissions/roles/${role}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesDetail
 * @summary Get a role
 * @request GET:/users-permissions/roles/{id}
 * @secure
 * @response `200` `{
    role?: UsersPermissionsRoleDataContract,

}` Returns the role
 * @response `default` `ErrorDataContract` Error
 */
  rolesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<
      {
        role?: UsersPermissionsRoleDataContract;
      },
      ErrorDataContract
    >({
      path: `/users-permissions/roles/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesList
 * @summary List roles
 * @request GET:/users-permissions/roles
 * @secure
 * @response `200` `{
    roles?: ((UsersPermissionsRoleDataContract & {
    nb_users?: number,

}))[],

}` Returns list of roles
 * @response `default` `ErrorDataContract` Error
 */
  rolesList = (params: RequestParams = {}) =>
    this.http.request<
      {
        roles?: (UsersPermissionsRoleDataContract & {
          nb_users?: number;
        })[];
      },
      ErrorDataContract
    >({
      path: `/users-permissions/roles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name RolesUpdate
 * @summary Update a role
 * @request PUT:/users-permissions/roles/{role}
 * @secure
 * @response `200` `{
    ok?: "true",

}` Returns ok if the role was udpated
 * @response `default` `ErrorDataContract` Error
 */
  rolesUpdate = (
    role: string,
    data: {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTreeDataContract;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      {
        ok?: "true";
      },
      ErrorDataContract
    >({
      path: `/users-permissions/roles/${role}`,
      method: "PUT",
      body: data,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name UsersCreate
 * @summary Create a user
 * @request POST:/users
 * @secure
 * @response `201` `(UsersPermissionsUserDataContract & {
    role?: UsersPermissionsRoleDataContract,

})` Returns created user info
 * @response `default` `ErrorDataContract` Error
 */
  usersCreate = (
    data: {
      email: string;
      username: string;
      password: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      UsersPermissionsUserDataContract & {
        role?: UsersPermissionsRoleDataContract;
      },
      ErrorDataContract
    >({
      path: `/users`,
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
   * @tags Users-Permissions - Users & Roles
   * @name UsersDelete
   * @summary Delete a user
   * @request DELETE:/users/{id}
   * @secure
   * @response `200` `(UsersPermissionsUserDataContract)` Returns deleted user info
   * @response `default` `ErrorDataContract` Error
   */
  usersDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUserDataContract, ErrorDataContract>({
      path: `/users/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name UsersDetail
   * @summary Get a user
   * @request GET:/users/{id}
   * @secure
   * @response `200` `UsersPermissionsUserDataContract` Returns a user
   * @response `default` `ErrorDataContract` Error
   */
  usersDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUserDataContract, ErrorDataContract>({
      path: `/users/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name UsersList
   * @summary Get list of users
   * @request GET:/users
   * @secure
   * @response `200` `(UsersPermissionsUserDataContract)[]` Returns an array of users
   * @response `default` `ErrorDataContract` Error
   */
  usersList = (params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUserDataContract[], ErrorDataContract>({
      path: `/users`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users-Permissions - Users & Roles
 * @name UsersUpdate
 * @summary Update a user
 * @request PUT:/users/{id}
 * @secure
 * @response `200` `(UsersPermissionsUserDataContract & {
    role?: UsersPermissionsRoleDataContract,

})` Returns updated user info
 * @response `default` `ErrorDataContract` Error
 */
  usersUpdate = (
    id: string,
    data: {
      email: string;
      username: string;
      password: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      UsersPermissionsUserDataContract & {
        role?: UsersPermissionsRoleDataContract;
      },
      ErrorDataContract
    >({
      path: `/users/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
