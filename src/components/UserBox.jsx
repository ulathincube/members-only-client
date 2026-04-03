import Title from './Title';
import styles from './UserBox.module.css';

function UserBox({ user }) {
  const fullName = `${user.firstname} ${user.lastname}`;

  return (
    <figure className={styles.user}>
      <div className={styles.avatar}>
        <img src='' alt='User Avatar' className={styles.picture} />
      </div>
      <div className={styles.name}>
        <Title title={fullName} level={3} />
      </div>
    </figure>
  );
}

export default UserBox;
