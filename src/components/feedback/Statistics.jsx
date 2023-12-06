import React from 'react';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <div className={css.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercent}%</p>
    </div>
  );
};

export default Statistics;
