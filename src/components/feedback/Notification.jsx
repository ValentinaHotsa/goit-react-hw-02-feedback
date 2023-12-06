import css from './Feedback.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.notificationMessage}>{message}</p>
    </div>
  );
};
export default Notification;
