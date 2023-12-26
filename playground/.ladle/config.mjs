export default {
  stories: 'src/**/*.stories.{js,jsx,ts,tsx}',

  addons: {
    width: {
      options: {
        xsmall: 375,
        small: 480,
        medium: 768,
        large: 1024,
      },
      enabled: true, // the addon can be disabled
      defaultValue: 0,
    },
    a11y: {
      enabled: true,
    },
    action: {
      enabled: false,
      defaultState: [],
    },
    control: {
      enabled: true,
      defaultState: {},
    },
    ladle: {
      enabled: true,
    },
    mode: {
      enabled: true,
      defaultState: 'full',
    },
    rtl: {
      enabled: true,
      defaultState: false,
    },
    source: {
      enabled: true,
      defaultState: false,
    },
    theme: {
      enabled: true,
      defaultState: 'black',
    },
  },
};
