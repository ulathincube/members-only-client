import styles from './Button.module.css';

function Button({
  children,
  className,
  onClick = null,
  variant,
  type = 'button',
}) {
  const buttonStyles =
    variant === 'alternate'
      ? `${styles.alternate} ${className}`
      : `${styles.button} ${className}`;
  return (
    <button type={type} onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}

export default Button;
