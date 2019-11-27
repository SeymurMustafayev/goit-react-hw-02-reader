import React from 'react';
import PropTypes from 'prop-types';
import s from '../styles.module.css';

const Publication = ({ text, title }) => (
  <article className={s.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);
Publication.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Publication;
