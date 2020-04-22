import React from 'react';
import { useObservable } from 'react-use';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { MONTH_NUMBER, MONTH_SHORT, MONTH_LONG } from '../../lib/constants';

import preferences$ from '../../streams/preferences';

import styles from './styles.module.scss';

const PreferencesPanel = () => {
  const preferences = useObservable(preferences$);

  if (!preferences) {
    return null;
  }

  const handlePreferenceChange = preference =>
    preferences$.next(preferences.update(preference));

  return (
    <Card elevation={0} className={styles.preferencesPanel}>
      <Box className={styles.buttonGroup}>
        <p>Format</p>
        <ToggleButtonGroup
          value={preferences.use24HourFormat}
          exclusive
          onChange={() =>
            handlePreferenceChange({
              use24HourFormat: !preferences.use24HourFormat
            })
          }
        >
          <ToggleButton value={false}>12</ToggleButton>
          <ToggleButton value={true}>24</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.buttonGroup}>
        <p>Display seconds</p>
        <ToggleButton
          value="check"
          selected={preferences.showSeconds}
          onChange={() =>
            handlePreferenceChange({
              showSeconds: !preferences.showSeconds
            })
          }
        >
          <CheckIcon />
        </ToggleButton>
      </Box>
      <Box className={styles.buttonGroup}>
        <p>Month format</p>
        <ToggleButtonGroup
          value={preferences.monthFormat}
          exclusive
          onChange={(_, value) =>
            handlePreferenceChange({ monthFormat: value })
          }
        >
          <ToggleButton value={MONTH_NUMBER}>Number</ToggleButton>
          <ToggleButton value={MONTH_SHORT}>Short</ToggleButton>
          <ToggleButton value={MONTH_LONG}>Long</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Card>
  );
};

export default PreferencesPanel;
