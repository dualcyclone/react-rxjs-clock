import React from 'react';
import ReactDOM from 'react-dom';
import { useObservable } from 'react-use';

import userTime$ from './streams/userTime';

import Clock from './components/Clock';
import Loader from './components/Loader';
import PreferencesPanel from './components/PreferencesPanel';

import styles from './styles.module.scss';

function App() {
  const time = useObservable(userTime$);

  return (
    <div className={styles.app}>
      {time ? (
        <>
          <Clock />
          <PreferencesPanel />
        </>
      ) : (
        <Loader className={styles.loader} />
      )}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
