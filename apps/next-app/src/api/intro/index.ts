import { getOne } from '../common';
import { MediaType, SingleData } from '../types';

type Banner = {
  id: number;
  name: string;
  description: string;
};

type Mission = {
  id: number;
  title: string;
  value: number;
};

type HeroSection = {
  id: number;
  title: string;
  content: string;
  logo: MediaType;
};

type Introduction = {
  id: number;
  Title: string;
  Description: string;
  Subtitle: string;
};

type BannerAttributes = {
  Banner: Banner;
};

type MissionAttributes = {
  Missions: Mission[];
};

type HeroSectionAttributes = {
  HeroSection: HeroSection;
};

type IntroductionAttributes = {
  Introduction: Introduction;
};

type IntroPageAttributes = BannerAttributes &
  MissionAttributes &
  HeroSectionAttributes &
  IntroductionAttributes;

const RESOURCE_NAME = '/introduction-page';

const fetchIntroPageAsync = async (
  locale: string,
  populate?: string
): Promise<SingleData<IntroPageAttributes>> => {
  const response = await getOne<IntroPageAttributes>(RESOURCE_NAME, {
    populate: populate,
    locale,
  });

  return response.data;
};

export const fetchBannerAsync = async (
  locale: string
): Promise<SingleData<BannerAttributes>> =>
fetchIntroPageAsync(locale, 'Features');

export const fetchMissionsAsync = async (
  locale: string
): Promise<SingleData<MissionAttributes>> =>
  fetchIntroPageAsync(locale, 'Partners.logo');

export const fetchHeroSectionAsync = async (
  locale: string
): Promise<SingleData<HeroSectionAttributes>> =>
  fetchIntroPageAsync(locale, 'statistics');

export const fetchIntroductionAsync = async (
  locale: string
): Promise<SingleData<IntroductionAttributes>> =>
  fetchIntroPageAsync(locale, 'Introduction');
