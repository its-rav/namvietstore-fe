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

export interface ErrorDataContract {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface BrandLocalizationRequestDataContract {
  name: string;
  description?: string;
  products?: (number | string)[];
  locale: string;
  sitemap_exclude?: boolean;
}

export interface BrandRequestDataContract {
  data: {
    name: string;
    description?: string;
    products?: (number | string)[];
    locale?: string;
    sitemap_exclude?: boolean;
  };
}

export interface BrandResponseDataObjectLocalizedDataContract {
  id?: number;
  attributes?: BrandDataContract;
}

export interface BrandLocalizationResponseDataContract {
  data?: BrandResponseDataObjectLocalizedDataContract;
  meta?: object;
}

export interface BrandListResponseDataItemLocalizedDataContract {
  id?: number;
  attributes?: BrandDataContract;
}

export interface BrandLocalizationListResponseDataContract {
  data?: BrandListResponseDataItemLocalizedDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface BrandListResponseDataItemDataContract {
  id?: number;
  attributes?: BrandDataContract;
}

export interface BrandListResponseDataContract {
  data?: BrandListResponseDataItemDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface BrandDataContract {
  name: string;
  description?: string;
  products?: {
    data?: {
      id?: number;
      attributes?: {
        seo?: {
          id?: number;
          metaTitle?: string;
          metaDescription?: string;
          metaImage?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      pathId?: number;
                      parent?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      children?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      files?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            /** @format float */
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            folder?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            folderPath?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  firstname?: string;
                                  lastname?: string;
                                  username?: string;
                                  /** @format email */
                                  email?: string;
                                  resetPasswordToken?: string;
                                  registrationToken?: string;
                                  isActive?: boolean;
                                  roles?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        name?: string;
                                        code?: string;
                                        description?: string;
                                        users?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          }[];
                                        };
                                        permissions?: {
                                          data?: {
                                            id?: number;
                                            attributes?: {
                                              action?: string;
                                              subject?: string;
                                              properties?: any;
                                              conditions?: any;
                                              role?: {
                                                data?: {
                                                  id?: number;
                                                  attributes?: object;
                                                };
                                              };
                                              /** @format date-time */
                                              createdAt?: string;
                                              /** @format date-time */
                                              updatedAt?: string;
                                              createdBy?: {
                                                data?: {
                                                  id?: number;
                                                  attributes?: object;
                                                };
                                              };
                                              updatedBy?: {
                                                data?: {
                                                  id?: number;
                                                  attributes?: object;
                                                };
                                              };
                                            };
                                          }[];
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  blocked?: boolean;
                                  preferedLanguage?: string;
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            sitemap_exclude?: boolean;
                          };
                        }[];
                      };
                      path?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                sitemap_exclude?: boolean;
              };
            };
          };
          metaSocial?: {
            id?: number;
            socialNetwork?: 'Facebook' | 'Twitter';
            title?: string;
            description?: string;
            image?: {
              data?: {
                id?: number;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  /** @format float */
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    }[];
                  };
                  folder?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  folderPath?: string;
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  sitemap_exclude?: boolean;
                };
              };
            };
          }[];
          keywords?: string;
          metaRobots?: string;
          structuredData?: any;
          metaViewport?: string;
          canonicalURL?: string;
        };
        name?: string;
        shortDescription?: string;
        productId?: string;
        additionalDescription?: {
          id?: number;
          name?: string;
          value?: string;
        }[];
        additionalProperties?: {
          id?: number;
          name?: string;
          value?: string;
        }[];
        medias?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              sitemap_exclude?: boolean;
            };
          }[];
        };
        description?: string;
        brand?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              description?: string;
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          };
        };
        categories?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              seo?: {
                id?: number;
                metaTitle?: string;
                metaDescription?: string;
                metaImage?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                metaSocial?: {
                  id?: number;
                  socialNetwork?: 'Facebook' | 'Twitter';
                  title?: string;
                  description?: string;
                  image?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** @format float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          }[];
                        };
                        folder?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        folderPath?: string;
                        /** @format date-time */
                        createdAt?: string;
                        /** @format date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                }[];
                keywords?: string;
                metaRobots?: string;
                structuredData?: any;
                metaViewport?: string;
                canonicalURL?: string;
              };
              media?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    sitemap_exclude?: boolean;
                  };
                };
              };
              description?: string;
              aaa?: (
                | {
                    id?: number;
                    __component?: string;
                    name?: string;
                    value?: string;
                  }
                | {
                    id?: number;
                    __component?: string;
                    socialNetwork?: 'Facebook' | 'Twitter';
                    title?: string;
                    description?: string;
                    image?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          /** @format float */
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            }[];
                          };
                          folder?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          folderPath?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                  }
                | {
                    id?: number;
                    __component?: string;
                    metaTitle?: string;
                    metaDescription?: string;
                    metaImage?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          /** @format float */
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            }[];
                          };
                          folder?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          folderPath?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                    metaSocial?: {
                      id?: number;
                      socialNetwork?: 'Facebook' | 'Twitter';
                      title?: string;
                      description?: string;
                      image?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            /** @format float */
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            folder?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            folderPath?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            sitemap_exclude?: boolean;
                          };
                        };
                      };
                    }[];
                    keywords?: string;
                    metaRobots?: string;
                    structuredData?: any;
                    metaViewport?: string;
                    canonicalURL?: string;
                  }
              )[];
              childCategories?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
        sitemap_exclude?: boolean;
      };
    }[];
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: BrandDataContract[];
  };
  locale?: string;
  sitemap_exclude?: boolean;
}

export interface BrandResponseDataObjectDataContract {
  id?: number;
  attributes?: BrandDataContract;
}

export interface BrandResponseDataContract {
  data?: BrandResponseDataObjectDataContract;
  meta?: object;
}

export interface CategoryLocalizationRequestDataContract {
  name: string;
  products?: (number | string)[];
  seo: SharedSeoComponentDataContract;
  /** @example "string or id" */
  media?: number | string;
  description: string;
  aaa?: (
    | ProductAdditionalDescriptionComponentDataContract
    | ProductAdditionalPropertyComponentDataContract
    | SharedMetaSocialComponentDataContract
    | SharedSeoComponentDataContract
  )[];
  childCategories?: (number | string)[];
  /** @example "string or id" */
  parent?: number | string;
  locale: string;
  sitemap_exclude?: boolean;
}

export interface CategoryRequestDataContract {
  data: {
    name: string;
    products?: (number | string)[];
    seo: SharedSeoComponentDataContract;
    /** @example "string or id" */
    media?: number | string;
    description: string;
    aaa?: (
      | ProductAdditionalDescriptionComponentDataContract
      | ProductAdditionalPropertyComponentDataContract
      | SharedMetaSocialComponentDataContract
      | SharedSeoComponentDataContract
    )[];
    childCategories?: (number | string)[];
    /** @example "string or id" */
    parent?: number | string;
    locale?: string;
    sitemap_exclude?: boolean;
  };
}

export interface CategoryResponseDataObjectLocalizedDataContract {
  id?: number;
  attributes?: CategoryDataContract;
}

export interface CategoryLocalizationResponseDataContract {
  data?: CategoryResponseDataObjectLocalizedDataContract;
  meta?: object;
}

export interface CategoryListResponseDataItemLocalizedDataContract {
  id?: number;
  attributes?: CategoryDataContract;
}

export interface CategoryLocalizationListResponseDataContract {
  data?: CategoryListResponseDataItemLocalizedDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface CategoryListResponseDataItemDataContract {
  id?: number;
  attributes?: CategoryDataContract;
}

export interface CategoryListResponseDataContract {
  data?: CategoryListResponseDataItemDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface CategoryDataContract {
  name: string;
  products?: {
    data?: {
      id?: number;
      attributes?: {
        seo?: {
          id?: number;
          metaTitle?: string;
          metaDescription?: string;
          metaImage?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      pathId?: number;
                      parent?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      children?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      files?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            /** @format float */
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            folder?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            folderPath?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  firstname?: string;
                                  lastname?: string;
                                  username?: string;
                                  /** @format email */
                                  email?: string;
                                  resetPasswordToken?: string;
                                  registrationToken?: string;
                                  isActive?: boolean;
                                  roles?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        name?: string;
                                        code?: string;
                                        description?: string;
                                        users?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          }[];
                                        };
                                        permissions?: {
                                          data?: {
                                            id?: number;
                                            attributes?: {
                                              action?: string;
                                              subject?: string;
                                              properties?: any;
                                              conditions?: any;
                                              role?: {
                                                data?: {
                                                  id?: number;
                                                  attributes?: object;
                                                };
                                              };
                                              /** @format date-time */
                                              createdAt?: string;
                                              /** @format date-time */
                                              updatedAt?: string;
                                              createdBy?: {
                                                data?: {
                                                  id?: number;
                                                  attributes?: object;
                                                };
                                              };
                                              updatedBy?: {
                                                data?: {
                                                  id?: number;
                                                  attributes?: object;
                                                };
                                              };
                                            };
                                          }[];
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  blocked?: boolean;
                                  preferedLanguage?: string;
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            sitemap_exclude?: boolean;
                          };
                        }[];
                      };
                      path?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                sitemap_exclude?: boolean;
              };
            };
          };
          metaSocial?: {
            id?: number;
            socialNetwork?: 'Facebook' | 'Twitter';
            title?: string;
            description?: string;
            image?: {
              data?: {
                id?: number;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  /** @format float */
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    }[];
                  };
                  folder?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  folderPath?: string;
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  sitemap_exclude?: boolean;
                };
              };
            };
          }[];
          keywords?: string;
          metaRobots?: string;
          structuredData?: any;
          metaViewport?: string;
          canonicalURL?: string;
        };
        name?: string;
        shortDescription?: string;
        productId?: string;
        additionalDescription?: {
          id?: number;
          name?: string;
          value?: string;
        }[];
        additionalProperties?: {
          id?: number;
          name?: string;
          value?: string;
        }[];
        medias?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              sitemap_exclude?: boolean;
            };
          }[];
        };
        description?: string;
        brand?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              description?: string;
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          };
        };
        categories?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              seo?: {
                id?: number;
                metaTitle?: string;
                metaDescription?: string;
                metaImage?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                metaSocial?: {
                  id?: number;
                  socialNetwork?: 'Facebook' | 'Twitter';
                  title?: string;
                  description?: string;
                  image?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** @format float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          }[];
                        };
                        folder?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        folderPath?: string;
                        /** @format date-time */
                        createdAt?: string;
                        /** @format date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                }[];
                keywords?: string;
                metaRobots?: string;
                structuredData?: any;
                metaViewport?: string;
                canonicalURL?: string;
              };
              media?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    sitemap_exclude?: boolean;
                  };
                };
              };
              description?: string;
              aaa?: (
                | {
                    id?: number;
                    __component?: string;
                    name?: string;
                    value?: string;
                  }
                | {
                    id?: number;
                    __component?: string;
                    socialNetwork?: 'Facebook' | 'Twitter';
                    title?: string;
                    description?: string;
                    image?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          /** @format float */
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            }[];
                          };
                          folder?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          folderPath?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                  }
                | {
                    id?: number;
                    __component?: string;
                    metaTitle?: string;
                    metaDescription?: string;
                    metaImage?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          /** @format float */
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            }[];
                          };
                          folder?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          folderPath?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                    metaSocial?: {
                      id?: number;
                      socialNetwork?: 'Facebook' | 'Twitter';
                      title?: string;
                      description?: string;
                      image?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            /** @format float */
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            folder?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            folderPath?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            sitemap_exclude?: boolean;
                          };
                        };
                      };
                    }[];
                    keywords?: string;
                    metaRobots?: string;
                    structuredData?: any;
                    metaViewport?: string;
                    canonicalURL?: string;
                  }
              )[];
              childCategories?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
        sitemap_exclude?: boolean;
      };
    }[];
  };
  seo: SharedSeoComponentDataContract;
  media?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        sitemap_exclude?: boolean;
      };
    };
  };
  description: string;
  aaa?: (
    | ProductAdditionalDescriptionComponentDataContract
    | ProductAdditionalPropertyComponentDataContract
    | SharedMetaSocialComponentDataContract
    | SharedSeoComponentDataContract
  )[];
  childCategories?: {
    data?: {
      id?: number;
      attributes?: object;
    }[];
  };
  parent?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: CategoryDataContract[];
  };
  locale?: string;
  sitemap_exclude?: boolean;
}

export interface CategoryResponseDataObjectDataContract {
  id?: number;
  attributes?: CategoryDataContract;
}

export interface CategoryResponseDataContract {
  data?: CategoryResponseDataObjectDataContract;
  meta?: object;
}

export interface SharedSeoComponentDataContract {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              sitemap_exclude?: boolean;
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        sitemap_exclude?: boolean;
      };
    };
  };
  metaSocial?: {
    id?: number;
    socialNetwork?: 'Facebook' | 'Twitter';
    title?: string;
    description?: string;
    image?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          sitemap_exclude?: boolean;
        };
      };
    };
  }[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface ProductAdditionalDescriptionComponentDataContract {
  id?: number;
  name?: string;
  value?: string;
}

export interface ProductAdditionalPropertyComponentDataContract {
  id?: number;
  name?: string;
  value?: string;
}

export interface SharedMetaSocialComponentDataContract {
  id?: number;
  socialNetwork?: 'Facebook' | 'Twitter';
  title?: string;
  description?: string;
  image?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        sitemap_exclude?: boolean;
      };
    };
  };
}

export interface GeneralSettingLocalizationRequestDataContract {
  contact?: SharedContactComponentDataContract;
  statisticItems?: SharedStatisticComponentDataContract[];
  partners?: SharedPartnersComponentDataContract[];
  locale: string;
  sitemap_exclude?: boolean;
}

export interface GeneralSettingRequestDataContract {
  data: {
    contact?: SharedContactComponentDataContract;
    statisticItems?: SharedStatisticComponentDataContract[];
    partners?: SharedPartnersComponentDataContract[];
    locale?: string;
    sitemap_exclude?: boolean;
  };
}

export interface GeneralSettingResponseDataObjectLocalizedDataContract {
  id?: number;
  attributes?: GeneralSettingDataContract;
}

export interface GeneralSettingLocalizationResponseDataContract {
  data?: GeneralSettingResponseDataObjectLocalizedDataContract;
  meta?: object;
}

export interface GeneralSettingListResponseDataItemLocalizedDataContract {
  id?: number;
  attributes?: GeneralSettingDataContract;
}

export interface GeneralSettingLocalizationListResponseDataContract {
  data?: GeneralSettingListResponseDataItemLocalizedDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface GeneralSettingListResponseDataItemDataContract {
  id?: number;
  attributes?: GeneralSettingDataContract;
}

export interface GeneralSettingListResponseDataContract {
  data?: GeneralSettingListResponseDataItemDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface GeneralSettingDataContract {
  contact?: SharedContactComponentDataContract;
  statisticItems?: SharedStatisticComponentDataContract[];
  partners?: SharedPartnersComponentDataContract[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: GeneralSettingDataContract[];
  };
  locale?: string;
  sitemap_exclude?: boolean;
}

export interface GeneralSettingResponseDataObjectDataContract {
  id?: number;
  attributes?: GeneralSettingDataContract;
}

export interface GeneralSettingResponseDataContract {
  data?: GeneralSettingResponseDataObjectDataContract;
  meta?: object;
}

export interface SharedContactComponentDataContract {
  id?: number;
  address?: string;
  /** @format email */
  email?: string;
  company?: string;
  phoneNumbers?: {
    id?: number;
    phoneNumber?: string;
    phoneOwner?: string;
  }[];
  website?: string;
  fax?: string;
}

export interface SharedStatisticComponentDataContract {
  id?: number;
  value?: number;
  title?: string;
}

export interface SharedPartnersComponentDataContract {
  id?: number;
  name?: string;
  logo?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              sitemap_exclude?: boolean;
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        sitemap_exclude?: boolean;
      };
    };
  };
  website?: string;
}

export interface PostLocalizationRequestDataContract {
  title: string;
  shortDescription?: string;
  content: string;
  /** @example "string or id" */
  thumbnail: number | string;
  seo?: SharedSeoComponentDataContract;
  locale: string;
  sitemap_exclude?: boolean;
}

export interface PostRequestDataContract {
  data: {
    title: string;
    shortDescription?: string;
    content: string;
    /** @example "string or id" */
    thumbnail: number | string;
    seo?: SharedSeoComponentDataContract;
    locale?: string;
    sitemap_exclude?: boolean;
  };
}

export interface PostResponseDataObjectLocalizedDataContract {
  id?: number;
  attributes?: PostDataContract;
}

export interface PostLocalizationResponseDataContract {
  data?: PostResponseDataObjectLocalizedDataContract;
  meta?: object;
}

export interface PostListResponseDataItemLocalizedDataContract {
  id?: number;
  attributes?: PostDataContract;
}

export interface PostLocalizationListResponseDataContract {
  data?: PostListResponseDataItemLocalizedDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface PostListResponseDataItemDataContract {
  id?: number;
  attributes?: PostDataContract;
}

export interface PostListResponseDataContract {
  data?: PostListResponseDataItemDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface PostDataContract {
  title: string;
  shortDescription?: string;
  content: string;
  thumbnail: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              sitemap_exclude?: boolean;
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        sitemap_exclude?: boolean;
      };
    };
  };
  seo?: SharedSeoComponentDataContract;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: PostDataContract[];
  };
  locale?: string;
  sitemap_exclude?: boolean;
}

export interface PostResponseDataObjectDataContract {
  id?: number;
  attributes?: PostDataContract;
}

export interface PostResponseDataContract {
  data?: PostResponseDataObjectDataContract;
  meta?: object;
}

export interface ProductLocalizationRequestDataContract {
  seo?: SharedSeoComponentDataContract;
  name: string;
  shortDescription?: string;
  productId?: string;
  additionalDescription?: ProductAdditionalDescriptionComponentDataContract[];
  additionalProperties?: ProductAdditionalPropertyComponentDataContract[];
  medias?: (number | string)[];
  description: string;
  /** @example "string or id" */
  brand?: number | string;
  categories?: (number | string)[];
  locale: string;
  sitemap_exclude?: boolean;
}

export interface ProductRequestDataContract {
  data: {
    seo?: SharedSeoComponentDataContract;
    name: string;
    shortDescription?: string;
    productId?: string;
    additionalDescription?: ProductAdditionalDescriptionComponentDataContract[];
    additionalProperties?: ProductAdditionalPropertyComponentDataContract[];
    medias?: (number | string)[];
    description: string;
    /** @example "string or id" */
    brand?: number | string;
    categories?: (number | string)[];
    locale?: string;
    sitemap_exclude?: boolean;
  };
}

export interface ProductResponseDataObjectLocalizedDataContract {
  id?: number;
  attributes?: ProductDataContract;
}

export interface ProductLocalizationResponseDataContract {
  data?: ProductResponseDataObjectLocalizedDataContract;
  meta?: object;
}

export interface ProductListResponseDataItemLocalizedDataContract {
  id?: number;
  attributes?: ProductDataContract;
}

export interface ProductLocalizationListResponseDataContract {
  data?: ProductListResponseDataItemLocalizedDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ProductListResponseDataItemDataContract {
  id?: number;
  attributes?: ProductDataContract;
}

export interface ProductListResponseDataContract {
  data?: ProductListResponseDataItemDataContract[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ProductDataContract {
  seo?: SharedSeoComponentDataContract;
  name: string;
  shortDescription?: string;
  productId?: string;
  additionalDescription?: ProductAdditionalDescriptionComponentDataContract[];
  additionalProperties?: ProductAdditionalPropertyComponentDataContract[];
  medias?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        sitemap_exclude?: boolean;
      };
    }[];
  };
  description: string;
  brand?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        description?: string;
        products?: {
          data?: {
            id?: number;
            attributes?: {
              seo?: {
                id?: number;
                metaTitle?: string;
                metaDescription?: string;
                metaImage?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                metaSocial?: {
                  id?: number;
                  socialNetwork?: 'Facebook' | 'Twitter';
                  title?: string;
                  description?: string;
                  image?: {
                    data?: {
                      id?: number;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        /** @format float */
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          }[];
                        };
                        folder?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        folderPath?: string;
                        /** @format date-time */
                        createdAt?: string;
                        /** @format date-time */
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: number;
                            attributes?: object;
                          };
                        };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                }[];
                keywords?: string;
                metaRobots?: string;
                structuredData?: any;
                metaViewport?: string;
                canonicalURL?: string;
              };
              name?: string;
              shortDescription?: string;
              productId?: string;
              additionalDescription?: {
                id?: number;
                name?: string;
                value?: string;
              }[];
              additionalProperties?: {
                id?: number;
                name?: string;
                value?: string;
              }[];
              medias?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              description?: string;
              brand?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              categories?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    products?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    seo?: {
                      id?: number;
                      metaTitle?: string;
                      metaDescription?: string;
                      metaImage?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            /** @format float */
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            folder?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            folderPath?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            sitemap_exclude?: boolean;
                          };
                        };
                      };
                      metaSocial?: {
                        id?: number;
                        socialNetwork?: 'Facebook' | 'Twitter';
                        title?: string;
                        description?: string;
                        image?: {
                          data?: {
                            id?: number;
                            attributes?: {
                              name?: string;
                              alternativeText?: string;
                              caption?: string;
                              width?: number;
                              height?: number;
                              formats?: any;
                              hash?: string;
                              ext?: string;
                              mime?: string;
                              /** @format float */
                              size?: number;
                              url?: string;
                              previewUrl?: string;
                              provider?: string;
                              provider_metadata?: any;
                              related?: {
                                data?: {
                                  id?: number;
                                  attributes?: object;
                                }[];
                              };
                              folder?: {
                                data?: {
                                  id?: number;
                                  attributes?: object;
                                };
                              };
                              folderPath?: string;
                              /** @format date-time */
                              createdAt?: string;
                              /** @format date-time */
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: object;
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: number;
                                  attributes?: object;
                                };
                              };
                              sitemap_exclude?: boolean;
                            };
                          };
                        };
                      }[];
                      keywords?: string;
                      metaRobots?: string;
                      structuredData?: any;
                      metaViewport?: string;
                      canonicalURL?: string;
                    };
                    media?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          /** @format float */
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            }[];
                          };
                          folder?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          folderPath?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                    description?: string;
                    aaa?: (
                      | {
                          id?: number;
                          __component?: string;
                          name?: string;
                          value?: string;
                        }
                      | {
                          id?: number;
                          __component?: string;
                          socialNetwork?: 'Facebook' | 'Twitter';
                          title?: string;
                          description?: string;
                          image?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                alternativeText?: string;
                                caption?: string;
                                width?: number;
                                height?: number;
                                formats?: any;
                                hash?: string;
                                ext?: string;
                                mime?: string;
                                /** @format float */
                                size?: number;
                                url?: string;
                                previewUrl?: string;
                                provider?: string;
                                provider_metadata?: any;
                                related?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                folder?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                folderPath?: string;
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                sitemap_exclude?: boolean;
                              };
                            };
                          };
                        }
                      | {
                          id?: number;
                          __component?: string;
                          metaTitle?: string;
                          metaDescription?: string;
                          metaImage?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                alternativeText?: string;
                                caption?: string;
                                width?: number;
                                height?: number;
                                formats?: any;
                                hash?: string;
                                ext?: string;
                                mime?: string;
                                /** @format float */
                                size?: number;
                                url?: string;
                                previewUrl?: string;
                                provider?: string;
                                provider_metadata?: any;
                                related?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                folder?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                folderPath?: string;
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                sitemap_exclude?: boolean;
                              };
                            };
                          };
                          metaSocial?: {
                            id?: number;
                            socialNetwork?: 'Facebook' | 'Twitter';
                            title?: string;
                            description?: string;
                            image?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  alternativeText?: string;
                                  caption?: string;
                                  width?: number;
                                  height?: number;
                                  formats?: any;
                                  hash?: string;
                                  ext?: string;
                                  mime?: string;
                                  /** @format float */
                                  size?: number;
                                  url?: string;
                                  previewUrl?: string;
                                  provider?: string;
                                  provider_metadata?: any;
                                  related?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  folder?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  folderPath?: string;
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  sitemap_exclude?: boolean;
                                };
                              };
                            };
                          }[];
                          keywords?: string;
                          metaRobots?: string;
                          structuredData?: any;
                          metaViewport?: string;
                          canonicalURL?: string;
                        }
                    )[];
                    childCategories?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    parent?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    localizations?: {
                      data?: any[];
                    };
                    locale?: string;
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
        sitemap_exclude?: boolean;
      };
    };
  };
  categories?: {
    data?: {
      id?: number;
      attributes?: object;
    }[];
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: ProductDataContract[];
  };
  locale?: string;
  sitemap_exclude?: boolean;
}

export interface ProductResponseDataObjectDataContract {
  id?: number;
  attributes?: ProductDataContract;
}

export interface ProductResponseDataContract {
  data?: ProductResponseDataObjectDataContract;
  meta?: object;
}

export interface UploadFileDataContract {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  /** @format integer */
  width?: number;
  /** @format integer */
  height?: number;
  formats?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format double */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsRoleDataContract {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsUserDataContract {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: string;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: string;
}

export interface UsersPermissionsUserRegistrationDataContract {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUserDataContract;
}

export type UsersPermissionsPermissionsTreeDataContract = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:1337/api';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
      this.http.request<BrandListResponseDataContract, ErrorDataContract>({
        path: `/brands`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
      this.http.request<CategoryListResponseDataContract, ErrorDataContract>({
        path: `/categories`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
      this.http.request<GeneralSettingResponseDataContract, ErrorDataContract>({
        path: `/general-setting`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
      this.http.request<ProductListResponseDataContract, ErrorDataContract>({
        path: `/products`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
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
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'GET',
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
        method: 'GET',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
          ok?: 'true';
        },
        ErrorDataContract
      >({
        path: `/users-permissions/roles`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
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
          ok?: 'true';
        },
        ErrorDataContract
      >({
        path: `/users-permissions/roles/${role}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
          ok?: 'true';
        },
        ErrorDataContract
      >({
        path: `/users-permissions/roles/${role}`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
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
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
        method: 'DELETE',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'GET',
        secure: true,
        format: 'json',
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
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
