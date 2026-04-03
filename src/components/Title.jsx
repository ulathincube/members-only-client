import styles from './Title.module.css';

function Title({ title, level, className }) {
  switch (level) {
    case 1:
      return <h1 className={`${styles.primary} ${className}`}>{title}</h1>;
    case 2:
      return <h2 className={`${styles.secondary} ${className}`}>{title}</h2>;
    case 3:
      return <h3 className={`${styles.tertiary} ${className}`}>{title}</h3>;
    case 4:
      return <h4 className={`${styles.quartenary} ${className}`}>{title}</h4>;
  }
}

export default Title;
