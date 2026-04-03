import styles from './Notification.module.css';
import useNotification from '../hooks/useNotification';

function Notification() {
  const { notification } = useNotification();

  if (!notification) return null;

  return <div className={styles.notification}>{notification}</div>;
}

export default Notification;
