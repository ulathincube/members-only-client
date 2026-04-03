import styles from './Greeting.module.css';

function Greeting({ userName }) {
  return (
    <section className={styles.greeting}>
      <h1 className={styles.greet}>Hello, {userName}</h1>
    </section>
  );
}

export default Greeting;
