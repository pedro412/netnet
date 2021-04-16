import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/netnet-logo.png" alt="logo" width={55.84} height={24} />
      </div>

      <ul className={styles.list}>
        <li>Series</li>
        <li>Peliculas</li>
        <li>Mi lista</li>
      </ul>
    </header>
  );
};

export default Header;
