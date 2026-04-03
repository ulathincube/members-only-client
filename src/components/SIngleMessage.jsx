import styles from './SingleMessage.module.css';

function SingleMessage({ message }) {
  console.log({ message });

  return (
    <span className={styles.message}>
      <span className={styles.chat}>{message.message}</span>
      <span className={styles.time}>{message.created_at}</span>
    </span>
  );
}

export default SingleMessage;
