import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorCircularProgress = withStyles({
  root: {
    color: '#000'
  }
})(CircularProgress);

const Loader = ({ className }) => (
  <div className={className}>
    <ColorCircularProgress size={40} thickness={1} />
  </div>
);

export default Loader;
