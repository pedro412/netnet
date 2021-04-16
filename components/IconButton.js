import styles from '../styles/Button.module.css';

const IconButton = ({ color, text, icon }) => {
  return (
    <button className={styles.iconButton} style={{ color }}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
