import { StoryDecorator } from "@ladle/react";
import React, { useEffect } from "react";

import { IntlContextProvider, useIntlContext } from "@namviet-fe/core-ui";

export const TranslationDecorators: StoryDecorator[] = [
  (Story, context) => {
    const { setLocale } = useIntlContext();
    useEffect(() => {
      setLocale(context.args.lang);
    }, [context.args.lang, setLocale]);
    return <Story />;
  },
  (Story, context) => {
    return (
      <IntlContextProvider defaultLocale={context.argTypes.lang.defaultValue}>
        <Story />
      </IntlContextProvider>
    );
  },
];
