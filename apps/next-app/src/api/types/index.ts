export type Response<TData, TMeta = Meta, TError = Error> = {
  data: TData;
  meta?: TMeta;
  error?: TError;
};

export type Meta = {
  pagination?: PaginationMeta;
};

export type SingleData<TAttributes> = {
  id: number;
  attributes: TAttributes;
};

export type CollectionData<TAttributes> = SingleData<TAttributes>[];

export type PaginationMeta = {
  page: number;
  pageSize: number;
  total: number;
  pageCount: number;
};

export type Error = {
  status: number;
  message: string;
  name: string;
  details: unknown;
};

export type QueryParamsPagination = {
  page: number;
  pageSize: number;
  start: number;
  limit: number;
};

export type QueryParams<TFilter = unknown> = Partial<{
  fields: string[] | string;
  populate: string[] | string;
  locale: string;
  pagination: QueryParamsPagination;
  filter: TFilter;
  sort: `${string}:${'asc' | 'desc'}`;
}>;
// "data": {
//   "id": 3,
//   "attributes": {
//       "name": "Rectangle 30.png",
//       "alternativeText": null,
//       "caption": null,
//       "width": 190,
//       "height": 70,
//       "formats": null,
//       "hash": "Rectangle_30_01f72c0dbb",
//       "ext": ".png",
//       "mime": "image/png",
//       "size": 1.98,
//       "url": "/uploads/Rectangle_30_01f72c0dbb.png",
//       "previewUrl": null,
//       "provider": "local",
//       "provider_metadata": null,
//       "createdAt": "2024-01-05T12:34:31.898Z",
//       "updatedAt": "2024-01-05T12:34:31.898Z"
//   }
// }

export type MediaAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: unknown;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
};

export type MediaType = { data: SingleData<MediaAttributes> };
