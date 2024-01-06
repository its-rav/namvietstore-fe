import { getOne } from '../common';
import { SingleData } from '../types';

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
};

const RESOURCE_NAME = '/general-setting';

export const fetchGeneralSettingAsync = async (): Promise<
  SingleData<GeneralSettingAttributes>
> => {
  const response = await getOne<GeneralSettingAttributes>(RESOURCE_NAME);

  return response.data;
};
