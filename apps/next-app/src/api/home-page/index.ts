import { getOne } from '../common';
import { MediaType, SingleData } from '../types';

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

type StatisticAttributes = {
  statistics: Statistic[];
};

type FeaturesAttributes = {
  Features: Features[];
};

type PartnerAttributes = {
  Partners: Partner[];
};

type HomePageAttributes = StatisticAttributes &
  FeaturesAttributes &
  PartnerAttributes;

const RESOURCE_NAME = '/home-page';

export const fetchFeaturesAsync = async (
  locale: string
): Promise<SingleData<FeaturesAttributes>> => {
  const response = await getOne<FeaturesAttributes>(RESOURCE_NAME, {
    populate: 'Features',
    locale,
  });

  return response.data;
};

export const fetchPartnersAsync = async (
  locale: string
): Promise<SingleData<HomePageAttributes>> => {
  const response = await getOne<PartnerAttributes>(RESOURCE_NAME, {
    populate: 'Partners.logo',
    locale,
  });

  return response.data;
};

export const fetchStatisticsAsync = async (
  locale: string
): Promise<SingleData<StatisticAttributes>> => {
  const response = await getOne<StatisticAttributes>(RESOURCE_NAME, {
    populate: 'statistics',
    locale,
  });

  return response.data;
};
