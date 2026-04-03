import styles from './MessagesBox.module.css';
import SingleMessage from './SIngleMessage';

function MessagesBox({ messagesList }) {
  return (
    <ul className={styles.messages}>
      {messagesList.map(messageObject => (
        <SingleMessage key={messageObject.id} message={messageObject} />
      ))}
    </ul>
  );
}

export default MessagesBox;
