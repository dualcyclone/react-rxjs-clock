import { from, of, timer, combineLatest } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  catchError,
  map,
  flatMap,
  flatMapTo,
  mergeMap,
  publishReplay
} from 'rxjs/operators';

import ip$ from './ip';
import Time from '../models/Time';
import { ONE_HOUR } from '../lib/constants';

import preferences$ from './preferences';
import documentResume$ from './documentResume';

export const fetchedTime$ = ip$.pipe(
  mergeMap(ip =>
    documentResume$.pipe(
      flatMapTo(fromFetch(`https://worldtimeapi.org/api/ip/${ip}`))
    )
  ),
  mergeMap(res => res.ok && from(res.json())),
  catchError(() => of({ utc_datetime: Date.now() })),
  map(
    time =>
      new Time({
        date: new Date(time.utc_datetime),
        display24HourFormat: preferences$.value.use24HourFormat
      })
  )
);

// Re-request time from world time service every 6 hours, after an initial call
const time$ = combineLatest(timer(0, ONE_HOUR * 6), preferences$).pipe(
  flatMap(([_, preferences]) =>
    fetchedTime$.pipe(
      map(time => time.use24HourFormat(preferences.use24HourFormat))
    )
  ),
  publishReplay(1)
);
time$.connect();

export default time$;
