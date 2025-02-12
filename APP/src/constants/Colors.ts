const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const DarkThemeColors = {
  Secondary: '#FFFFFF',
  Primary: '#151311',
  Blue: '#EC2426',

  CardBackground: '#2b2b2b',
  CardBorder: '#383838',

  TextPrimary: '#E5E5E5',
  TextSecondary: '#A5A5A5',

  Success: '#4CAF50',
  Error: '#FF4C4C',

  PT: '#2b2b2b',
  ST: '#000000',

  TintColorLight: tintColorLight,
  TintColorDark: tintColorDark,
};

const LightThemeColors = {
  // Base colors
  Secondary: '#151311',
  Primary: '#FFFFFF',
  Blue: '#EC2426',

  CardBackground: '#E5E5E5',
  CardBorder: '#A5A5A5',

  TextPrimary: '#2b2b2b',
  TextSecondary: '#383838',

  Success: '#4CAF50',
  Error: '#FF4C4C',

  PT: '#E5E5E5',
  ST: '#FFFFFF',

  TintColorLight: tintColorLight,
  TintColorDark: tintColorDark,
};

// Function to get colors based on theme
export const getColors = (isDarkMode: Boolean) => {
  return isDarkMode ? DarkThemeColors : LightThemeColors;
};

const isDarkMode = true;
const Colors = getColors(isDarkMode);

console.log(Colors.Primary);
console.log(Colors.TextPrimary);
