import css from './Feedback.module.css';
const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.titleStatistics}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
