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
        </div>
      </div>
    </div>
  );
};

export default Hero;
