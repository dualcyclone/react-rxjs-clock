import { interval, combineLatest } from 'rxjs';
import { map, share } from 'rxjs/operators';

import time$ from './time';

const userTime$ = combineLatest(
  time$,
  interval(1000).pipe(map(() => 1000))
).pipe(
  map(([time, milliseconds]) =>
    time.incrementTime(milliseconds).getPrimitiveTime()
  ),
  share() // prevent incrementing time by number of subscribers
);

export default userTime$;
