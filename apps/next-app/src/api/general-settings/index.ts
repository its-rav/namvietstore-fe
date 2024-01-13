import { getOne } from '../common';
import { MediaType, SingleData } from '../types';

type PhoneNumber = {
  id: number;
  phoneNumber: string;
  phoneOwner: string;
};

type Contact = {
  id: number;
  address: string;
  email: string;
  company: string;
  website: string;
  fax: string;
  phoneNumbers: PhoneNumber[];
};

type GeneralSettingAttributes = {
  company: string;
  companyDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  contact: Contact;
  stamp: MediaType;
};

const RESOURCE_NAME = '/general-setting';

export const fetchGeneralSettingAsync = async (
  locale: string
): Promise<SingleData<GeneralSettingAttributes>> => {
  const response = await getOne<GeneralSettingAttributes>(RESOURCE_NAME, {
    locale,
    populate: ['contact', 'contact.phoneNumbers', 'stamp'],
  });

  return response.data;
};
