import { MONTHS } from '../lib/constants';
import {
  calculateDateOrdinal,
  hourFormatter,
  calculateMeridian,
  unitFixer
} from '../lib/utils';

class Time {
  constructor({ date = new Date(), display24HourFormat = true } = {}) {
    this.dateObj = date;
    this.display24hr = display24HourFormat;

    this._setProps();
  }

  // Technically a private method, need a different container to use babel preset
  _setProps() {
    const month = this.dateObj.getMonth();
    const hours = this.dateObj.getHours();

    this.timestamp = this.dateObj.getTime();
    this.year = this.dateObj.getFullYear();
    this.month = unitFixer(month + 1);
    this.monthName = MONTHS[month];
    this.date = unitFixer(this.dateObj.getDate());
    this.ordinal = calculateDateOrdinal(this.date);
    this.hour = hourFormatter(hours, this.display24hr);
    this.minute = unitFixer(this.dateObj.getMinutes());
    this.second = unitFixer(this.dateObj.getSeconds());
    this.meridian = calculateMeridian(hours, this.display24hr);
  }

  incrementTime(milliseconds) {
    if (typeof milliseconds !== 'number' || milliseconds === 0) {
      return this;
    }

    this.dateObj = new Date(this.timestamp + milliseconds);

    this._setProps();

    return this;
  }

  use24HourFormat(display24hr = true) {
    this.display24hr = display24hr;

    this._setProps();

    return this;
  }

  getPrimitiveTime() {
    return { ...this };
  }
}

export default Time;
