import { PropsWithChildren, useContext } from 'react';
import React from 'react';

import TypesafeI18n, { I18nContext } from '@/i18n/i18n-react';
import { Locales } from '@/i18n/i18n-types';
import { loadAllLocales } from '@/i18n/i18n-util.sync';

export type IntlContext = {
  locale: Locales;
  setLocale: (locale: Locales) => void;
};

export const useIntlContext = (): IntlContext => {
  const { locale, setLocale } = useContext(I18nContext);
  return { locale, setLocale };
};

export const IntlContextProvider = ({
  children,
  defaultLocale,
}: PropsWithChildren<{ defaultLocale: Locales }>) => {
  loadAllLocales();

  return <TypesafeI18n locale={defaultLocale}>{children}</TypesafeI18n>;
};
