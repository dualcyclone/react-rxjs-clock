export const MONTH_NUMBER = 'number';
export const MONTH_LONG = 'long';
export const MONTH_SHORT = 'short';

export const MONTHS = [
  { short: 'Jan', long: 'January' },
  { short: 'Feb', long: 'February' },
  { short: 'Mar', long: 'March' },
  { short: 'Apr', long: 'April' },
  { short: 'May', long: 'May' },
  { short: 'Jun', long: 'June' },
  { short: 'Jul', long: 'July' },
  { short: 'Aug', long: 'August' },
  { short: 'Sep', long: 'September' },
  { short: 'Oct', long: 'October' },
  { short: 'Nov', long: 'November' },
  { short: 'Dec', long: 'December' }
];

export const DATE_ORDINALS = {
  TH: 'th',
  ST: 'st',
  ND: 'nd',
  RD: 'rd'
};

export const TIME_MERIDIANS = {
  AM: 'AM',
  PM: 'PM'
};

export const ONE_HOUR = 3600000;

export const PREFERENCES_DEFAULT = {
  use24HourFormat: true,
  showSeconds: true,
  monthFormat: MONTH_NUMBER
};
