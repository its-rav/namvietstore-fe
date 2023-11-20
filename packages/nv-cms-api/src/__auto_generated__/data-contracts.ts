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
            socialNetwork?: "Facebook" | "Twitter";
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
                  socialNetwork?: "Facebook" | "Twitter";
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
                    socialNetwork?: "Facebook" | "Twitter";
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
                      socialNetwork?: "Facebook" | "Twitter";
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
            socialNetwork?: "Facebook" | "Twitter";
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
                  socialNetwork?: "Facebook" | "Twitter";
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
                    socialNetwork?: "Facebook" | "Twitter";
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
                      socialNetwork?: "Facebook" | "Twitter";
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
    socialNetwork?: "Facebook" | "Twitter";
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
  socialNetwork?: "Facebook" | "Twitter";
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
                  socialNetwork?: "Facebook" | "Twitter";
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
                        socialNetwork?: "Facebook" | "Twitter";
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
                          socialNetwork?: "Facebook" | "Twitter";
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
                            socialNetwork?: "Facebook" | "Twitter";
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
