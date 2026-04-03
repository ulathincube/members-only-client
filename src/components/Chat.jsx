import styles from './Chat.module.css';
import { Link } from 'react-router';

function Chat({ userName, lastChat, createdAt }) {
  const simpleDate = new Date(createdAt).toLocaleString();

  return (
    <li className={styles.chat}>
      <h3 className={styles.author}>{userName}</h3>
      <p className={styles.message}>{lastChat}</p>
      <span className={styles.time}>{simpleDate}</span>
    </li>
  );
}

export default Chat;
