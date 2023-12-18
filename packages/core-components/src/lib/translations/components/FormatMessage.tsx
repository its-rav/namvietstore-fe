import React from 'react';

import translations from '../';
import { Intlable } from '../types';

type Props = {
  id: string;
  defaultMessage: string;
  values?: Record<string, string>;
} & Intlable;

const getByKeyOrDefault = (
  key: string,
  defaultValue: string,
  values?: Record<string, string>
): string => (values && values[key] ? values[key] : defaultValue);

const FormatMessage = ({ id, defaultMessage, lang, ...rest }: Props) => {
  const values = lang ? translations[lang] : translations.en;

  return (
    <span {...rest}>
      {getByKeyOrDefault(id, defaultMessage, values as Record<string, string>)}
    </span>
  );
};

export default FormatMessage;
