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

type IntroductionAttributes = {
  Introduction: Introduction;
};

type HomePageAttributes = StatisticAttributes &
  FeaturesAttributes &
  PartnerAttributes &
  IntroductionAttributes;

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
