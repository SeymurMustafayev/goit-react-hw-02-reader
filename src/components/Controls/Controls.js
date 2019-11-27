import React from 'react';
import PropTypes from 'prop-types';
import s from '../styles.module.css';

function Controls({ back, forward, isButtonPrevActive, isButtonNextActive }) {
  return (
    <section className={s.controls}>
      <button
        disabled={isButtonPrevActive}
        onClick={back}
        type="button"
        className={s.button}
      >
        Назад
      </button>
      <button
        disabled={isButtonNextActive}
        onClick={forward}
        type="button"
        className={s.button}
      >
        Вперед
      </button>
    </section>
  );
}

Controls.propTypes = {
  back: PropTypes.func.isRequired,
  forward: PropTypes.func.isRequired,
  isButtonPrevActive: PropTypes.bool.isRequired,
  isButtonNextActive: PropTypes.bool.isRequired,
};

export default Controls;
