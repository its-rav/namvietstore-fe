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

type HomePageAttributes = {
  Features: Features[];
  statistic: Statistic[];
  Partners: Partner[];
};

const RESOURCE_NAME = '/home-page';

export const fetchFeaturesAsync = async (
  locale: string
): Promise<SingleData<HomePageAttributes>> => {
  const response = await getOne<HomePageAttributes>(RESOURCE_NAME, {
    populate: 'Features',
    locale,
  });

  return response.data;
};

export const fetchPartnersAsync = async (
  locale: string
): Promise<SingleData<HomePageAttributes>> => {
  const response = await getOne<HomePageAttributes>(RESOURCE_NAME, {
    populate: 'Partners.logo',
    locale,
  });

  return response.data;
};
