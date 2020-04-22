import { PREFERENCES_DEFAULT } from '../lib/constants';

class Preferences {
  constructor(preferences = PREFERENCES_DEFAULT) {
    this.update(preferences);
  }

  update(preferences) {
    const { use24HourFormat, showSeconds, monthFormat } = {
      ...this,
      ...preferences
    };

    this.use24HourFormat = use24HourFormat;
    this.showSeconds = showSeconds;
    this.monthFormat = monthFormat;

    return this;
  }

  getPrimitivePreferences() {
    return { ...this };
  }
}

export default Preferences;
