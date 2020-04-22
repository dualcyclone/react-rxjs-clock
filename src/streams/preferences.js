import { BehaviorSubject } from 'rxjs';
import Preferences from '../models/Preferences';

export const preferencesFactory$ = () => new BehaviorSubject(new Preferences());

const preferencesSingleton$ = preferencesFactory$();

export default preferencesSingleton$;
