import { fromFetch } from 'rxjs/fetch';
import { from } from 'rxjs';
import { map, mergeMap, publishReplay } from 'rxjs/operators';

const ip$ = fromFetch('https://ipapi.co/json/').pipe(
  mergeMap(res => res.ok && from(res.json())),
  map(({ ip }) => ip),
  publishReplay(1)
);
ip$.connect();

export default ip$;
