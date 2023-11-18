import {
  ErrorDataContract,
  BrandListResponseDataContract,
  BrandResponseDataContract,
  BrandRequestDataContract,
  BrandLocalizationRequestDataContract,
  BrandLocalizationResponseDataContract,
  CategoryListResponseDataContract,
  CategoryResponseDataContract,
  CategoryRequestDataContract,
  CategoryLocalizationRequestDataContract,
  CategoryLocalizationResponseDataContract,
  GeneralSettingResponseDataContract,
  GeneralSettingLocalizationRequestDataContract,
  GeneralSettingLocalizationResponseDataContract,
  GeneralSettingRequestDataContract,
  PostListResponseDataContract,
  PostResponseDataContract,
  PostRequestDataContract,
  PostLocalizationRequestDataContract,
  PostLocalizationResponseDataContract,
  ProductListResponseDataContract,
  ProductResponseDataContract,
  ProductRequestDataContract,
  ProductLocalizationRequestDataContract,
  ProductLocalizationResponseDataContract,
  UploadFileDataContract,
  UsersPermissionsUserRegistrationDataContract,
  UsersPermissionsUserDataContract,
  UsersPermissionsPermissionsTreeDataContract,
  UsersPermissionsRoleDataContract,
} from "./models/data-contracts";
import {
  ApiConfig,
  HttpClient,
  RequestParams,
  ContentType,
} from "./models/http-client";

export { HttpClient, type ApiConfig };
/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class NvCmsApi<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  brand = {
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
    deleteBrandsId: (id: number, params: RequestParams = {}) =>
      this.http.request<number, ErrorDataContract>({
        path: `/brands/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

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
    getBrands: (
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
      }),

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
    getBrandsId: (id: number, params: RequestParams = {}) =>
      this.http.request<BrandResponseDataContract, ErrorDataContract>({
        path: `/brands/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    postBrands: (data: BrandRequestDataContract, params: RequestParams = {}) =>
      this.http.request<BrandResponseDataContract, ErrorDataContract>({
        path: `/brands`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    postBrandsIdLocalizations: (
      id: number,
      data: BrandLocalizationRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<
        BrandLocalizationResponseDataContract,
        ErrorDataContract
      >({
        path: `/brands/${id}/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    putBrandsId: (
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
      }),
  };
  category = {
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
    deleteCategoriesId: (id: number, params: RequestParams = {}) =>
      this.http.request<number, ErrorDataContract>({
        path: `/categories/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

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
    getCategories: (
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
      }),

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
    getCategoriesId: (id: number, params: RequestParams = {}) =>
      this.http.request<CategoryResponseDataContract, ErrorDataContract>({
        path: `/categories/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    postCategories: (
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
      }),

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
    postCategoriesIdLocalizations: (
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
      }),

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
    putCategoriesId: (
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
      }),
  };
  generalSetting = {
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
    deleteGeneralSetting: (params: RequestParams = {}) =>
      this.http.request<number, ErrorDataContract>({
        path: `/general-setting`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

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
    getGeneralSetting: (
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
      this.http.request<GeneralSettingResponseDataContract, ErrorDataContract>({
        path: `/general-setting`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

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
    postGeneralSettingLocalizations: (
      data: GeneralSettingLocalizationRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<
        GeneralSettingLocalizationResponseDataContract,
        ErrorDataContract
      >({
        path: `/general-setting/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    putGeneralSetting: (
      data: GeneralSettingRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<GeneralSettingResponseDataContract, ErrorDataContract>({
        path: `/general-setting`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  post = {
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
    deletePostsId: (id: number, params: RequestParams = {}) =>
      this.http.request<number, ErrorDataContract>({
        path: `/posts/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

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
    getPosts: (
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
      this.http.request<PostListResponseDataContract, ErrorDataContract>({
        path: `/posts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

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
    getPostsId: (id: number, params: RequestParams = {}) =>
      this.http.request<PostResponseDataContract, ErrorDataContract>({
        path: `/posts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    postPosts: (data: PostRequestDataContract, params: RequestParams = {}) =>
      this.http.request<PostResponseDataContract, ErrorDataContract>({
        path: `/posts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    postPostsIdLocalizations: (
      id: number,
      data: PostLocalizationRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<
        PostLocalizationResponseDataContract,
        ErrorDataContract
      >({
        path: `/posts/${id}/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    putPostsId: (
      id: number,
      data: PostRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<PostResponseDataContract, ErrorDataContract>({
        path: `/posts/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  product = {
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
    deleteProductsId: (id: number, params: RequestParams = {}) =>
      this.http.request<number, ErrorDataContract>({
        path: `/products/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

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
    getProducts: (
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
      this.http.request<ProductListResponseDataContract, ErrorDataContract>({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

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
    getProductsId: (id: number, params: RequestParams = {}) =>
      this.http.request<ProductResponseDataContract, ErrorDataContract>({
        path: `/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    postProducts: (
      data: ProductRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<ProductResponseDataContract, ErrorDataContract>({
        path: `/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    postProductsIdLocalizations: (
      id: number,
      data: ProductLocalizationRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<
        ProductLocalizationResponseDataContract,
        ErrorDataContract
      >({
        path: `/products/${id}/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    putProductsId: (
      id: number,
      data: ProductRequestDataContract,
      params: RequestParams = {}
    ) =>
      this.http.request<ProductResponseDataContract, ErrorDataContract>({
        path: `/products/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  uploadFile = {
    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDelete
     * @request DELETE:/upload/files/{id}
     * @secure
     * @response `200` `UploadFileDataContract` Delete a file
     */
    filesDelete: (id: string, params: RequestParams = {}) =>
      this.http.request<UploadFileDataContract, any>({
        path: `/upload/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDetail
     * @request GET:/upload/files/{id}
     * @secure
     * @response `200` `UploadFileDataContract` Get a specific file
     */
    filesDetail: (id: string, params: RequestParams = {}) =>
      this.http.request<UploadFileDataContract, any>({
        path: `/upload/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesList
     * @request GET:/upload/files
     * @secure
     * @response `200` `(UploadFileDataContract)[]` Get a list of files
     */
    filesList: (params: RequestParams = {}) =>
      this.http.request<UploadFileDataContract[], any>({
        path: `/upload/files`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload files
     *
     * @tags Upload - File
     * @name UploadCreate
     * @request POST:/upload
     * @secure
     * @response `200` `(UploadFileDataContract)[]` response
     */
    uploadCreate: (
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
      }),

    /**
     * @description Upload file information
     *
     * @tags Upload - File
     * @name UploadIdCreate
     * @request POST:/upload?id={id}
     * @secure
     * @response `200` `(UploadFileDataContract)[]` response
     */
    uploadIdCreate: (
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
      }),
  };
  usersPermissionsAuth = {
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
    callbackDetail: (provider: string, params: RequestParams = {}) =>
      this.http.request<
        UsersPermissionsUserRegistrationDataContract,
        ErrorDataContract
      >({
        path: `/auth/${provider}/callback`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    changePasswordCreate: (
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
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    connectDetail: (provider: string, params: RequestParams = {}) =>
      this.http.request<any, void | ErrorDataContract>({
        path: `/connect/${provider}`,
        method: "GET",
        secure: true,
        ...params,
      }),

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
    emailConfirmationList: (
      query?: {
        /** confirmation token received by email */
        confirmation?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<any, void | ErrorDataContract>({
        path: `/auth/email-confirmation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

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
    forgotPasswordCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<
        {
          ok?: "true";
        },
        ErrorDataContract
      >({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    localCreate: (
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
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    localRegisterCreate: (
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
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    resetPasswordCreate: (
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
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    sendEmailConfirmationCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<
        {
          email?: string;
          sent?: "true";
        },
        ErrorDataContract
      >({
        path: `/auth/send-email-confirmation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  usersPermissionsUsersRoles = {
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
    countList: (params: RequestParams = {}) =>
      this.http.request<number, ErrorDataContract>({
        path: `/users/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    getUsersPermissionsUsersRoles: (params: RequestParams = {}) =>
      this.http.request<UsersPermissionsUserDataContract, ErrorDataContract>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    permissionsList: (params: RequestParams = {}) =>
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
      }),

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
    rolesCreate: (
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
      }),

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
    rolesDelete: (role: string, params: RequestParams = {}) =>
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
      }),

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
    rolesDetail: (id: string, params: RequestParams = {}) =>
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
      }),

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
    rolesList: (params: RequestParams = {}) =>
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
      }),

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
    rolesUpdate: (
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
      }),

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
    usersCreate: (
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
      }),

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
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.http.request<UsersPermissionsUserDataContract, ErrorDataContract>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

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
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.http.request<UsersPermissionsUserDataContract, ErrorDataContract>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    usersList: (params: RequestParams = {}) =>
      this.http.request<UsersPermissionsUserDataContract[], ErrorDataContract>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    usersUpdate: (
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
      }),
  };
}
