import InfoIcon from '../icons/InfoIcon';
import PlusIcon from '../icons/PlusIcon';
import IconButton from './IconButton';
import PlayButton from './PlayButton';
import styles from '../styles/Hero.module.css';

const Hero = ({ movie }) => {
  const { img, moods, title } = movie;

  return (
    <div className={styles.heroImg} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.heroContent}>
        <div style={{ maxWidth: '312px', margin: 'auto' }}>
          <h1>{title}</h1>
          <ul>
            {moods.map((mood) => (
              <li key={mood}>{mood}</li>
            ))}
          </ul>
          <div className={styles.toolbar}>
            <IconButton
              icon={<PlusIcon width={24} height={24} fill="white" />}
              text="Mi lista"
              color="white"
            />
            <PlayButton text="Reproducir" />
            <IconButton
              icon={<InfoIcon width={24} height={24} fill="white" />}
              text="Info"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
