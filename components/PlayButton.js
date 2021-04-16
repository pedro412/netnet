import PlayIcon from '../icons/PlayIcon';
import styles from '../styles/Button.module.css';

const PlayButton = ({ text }) => {
  return (
    <button className={styles.playButton}>
      <PlayIcon width={24} height={24} fill="black" /> {text}
    </button>
  );
};

export default PlayButton;
