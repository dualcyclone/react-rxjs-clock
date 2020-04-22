import React from 'react';
import { useObservable } from 'react-use';

import { MONTH_NUMBER, PREFERENCES_DEFAULT } from '../../lib/constants';

import preferences$ from '../../streams/preferences';
import userTime$ from '../../streams/userTime';

import Loader from '../Loader';

import styles from './styles.module.scss';

const Clock = () => {
  const preferences = useObservable(preferences$, PREFERENCES_DEFAULT);
  const time = useObservable(userTime$);

  if (!time) {
    return <Loader className={styles.loader} />;
  }

  const {
    year,
    month,
    monthName,
    date,
    ordinal,
    hour,
    minute,
    second,
    meridian
  } = time;

  const displaySeconds = () => (preferences.showSeconds ? `:${second}` : '');
  const displayMeridian = () => (meridian ? ` ${meridian}` : '');
  const displayMonth = () =>
    preferences.monthFormat === MONTH_NUMBER
      ? `/${month}/`
      : `${ordinal} ${monthName[preferences.monthFormat]} `;

  return (
    <h1
      className={styles.clock}
    >{`${date}${displayMonth()}${year} ${hour}:${minute}${displaySeconds()}${displayMeridian()}`}</h1>
  );
};

export default Clock;
