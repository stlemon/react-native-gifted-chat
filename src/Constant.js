import { Platform } from 'react-native';

export const MIN_COMPOSER_HEIGHT = Platform.select({
  ios: 33,
  android: 41,
});
export const MAX_COMPOSER_HEIGHT = 100;
export const DEFAULT_PLACEHOLDER = '请输入......';
export const DATE_FORMAT = 'll';
export const TIME_FORMAT = 'LT';
