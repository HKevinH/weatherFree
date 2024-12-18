type ColorScheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
};

type WeatherSchema = {
  linear?: {
    [key: string]: string[];
  };
  radial?: {
    [key: string]: string[];
  };
  angular?: {
    [key: string]: string[];
  };

  solid?: {
    darkPurple: string;
    deepPurple: string;
    vibrantPink: string;
    lightLavender: string;
  };
};

export const DarkThemeColors: ColorScheme = {
  primary: '#FFFFFF',
  secondary: '#EBEBF5', // opacity 60%
  tertiary: '#EBEBF5', // opacity 30%
  quaternary: '#EBEBF5', // opacity 18%
};

export const LightThemeColors: ColorScheme = {
  primary: '#000000',
  secondary: '#3C3C43', // opacity 60%
  tertiary: '#3C3C43', // opacity 30%
  quaternary: '#3C3C43', // opacity 18%
};

export const WeatherColors: WeatherSchema = {
  linear: {
    darkBlue: ['#2E335A', '#1C1B33'],
    purpleBlue: ['#5936B4', '#362A84'],
    bluePink: ['#3658B1', '#C159EC'],
    lightBlue: ['#AEC9FF', '#083072'],
  },

  radial: {
    pinkPurple: ['#F7CBFD', '#7758D1'],
  },

  angular: {
    purpleShimmer: ['#612FAB'],
  },

  solid: {
    // darkPurple: '#48319D',
    darkPurple: 'rgba(72, 49, 157, 0.2)',
    deepPurple: '#1F1D47',
    vibrantPink: '#C427FB',
    lightLavender: '#E0D9FF',
  },
};
