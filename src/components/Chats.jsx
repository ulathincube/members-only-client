import Chat from './Chat';
import Title from './Title';
import styles from './Chats.module.css';

function Chats({ chatList }) {
  return (
    <section className={styles.parent}>
      <Title title='All Chats' level={2} />
      <ul className={styles.chats}>
        {chatList.map(chatObject => (
          <Chat
            key={chatObject.user_id}
            userName={chatObject.firstname}
            lastChat={chatObject.message}
            createdAt={chatObject.created_at}
          />
        ))}
      </ul>
    </section>
  );
}

export default Chats;
