import translations from '.';

export type Intlable = {
  lang?: keyof typeof translations;
};
