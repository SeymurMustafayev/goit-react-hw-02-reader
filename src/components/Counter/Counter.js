import React from 'react';
import PropTypes from 'prop-types';
import s from '../styles.module.css';

const Counter = ({ indx, length }) => (
  <p className={s.counter}>
    {indx}/{length}
  </p>
);

Counter.propTypes = {
  length: PropTypes.number.isRequired,
  indx: PropTypes.number.isRequired,
};

export default Counter;
