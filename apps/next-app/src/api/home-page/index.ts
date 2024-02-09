import { getOne } from '../common';
import { CollectionData, MediaType, SingleData } from '../types';

type Features = {
  id: number;
  name: string;
  description: string;
};

type Statistic = {
  id: number;
  title: string;
  value: number;
};

type Partner = {
  id: number;
  name: string;
  website: string;
  logo: MediaType;
};

type Introduction = {
  id: number;
  Title: string;
  Description: string;
  Subtitle: string;
};

type StatisticAttributes = {
  statistics: Statistic[];
};

type FeaturesAttributes = {
  Features: Features[];
};

type PartnerAttributes = {
  Partners: Partner[];
};

type ProductAttributes = {
  name: string;
  slug: string;
  description: string;
  code: string;
  shortDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
};

type FeatureProductsAttributes = { data: CollectionData<ProductAttributes> };

type IntroductionAttributes = {
  Introduction: Introduction;
};

type HomePageAttributes = StatisticAttributes &
  FeaturesAttributes &
  PartnerAttributes &
  IntroductionAttributes &
  FeatureProductsAttributes;

const RESOURCE_NAME = '/home-page';

const fetchHomePageAsync = async (
  locale: string,
  populate?: string
): Promise<SingleData<HomePageAttributes>> => {
  const response = await getOne<HomePageAttributes>(RESOURCE_NAME, {
    populate: populate,
    locale,
  });

  return response.data;
};

export const fetchFeaturesAsync = async (
  locale: string
): Promise<SingleData<FeaturesAttributes>> =>
  fetchHomePageAsync(locale, 'Features');

export const fetchPartnersAsync = async (
  locale: string
): Promise<SingleData<PartnerAttributes>> =>
  fetchHomePageAsync(locale, 'Partners.logo');

export const fetchStatisticsAsync = async (
  locale: string
): Promise<SingleData<StatisticAttributes>> =>
  fetchHomePageAsync(locale, 'statistics');

export const fetchIntroductionAsync = async (
  locale: string
): Promise<SingleData<IntroductionAttributes>> =>
  fetchHomePageAsync(locale, 'Introduction');

export const fetchFeatureProductsAsync = async (
  locale: string
): Promise<SingleData<FeatureProductsAttributes>> =>
  fetchHomePageAsync(locale, 'FeatureProducts');
