import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from '../icons/HomeIcon';
import SoonIcon from '../icons/SoonIcon';
import Search from '../icons/Search';
import Download from '../icons/Download';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  const router = useRouter();

  const isActiveLink = (path) => {
    if (router.pathname === path) {
      return '#fff';
    }

    return '#686868';
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <a className={styles.linkItem}>
              <HomeIcon width="24" height="24" fill={isActiveLink('/')} />
              <span style={{ color: isActiveLink('/') }}>Inicio</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/coming-soon">
            <a className={styles.linkItem}>
              <SoonIcon
                width="24"
                height="24"
                fill={isActiveLink('/coming-soon')}
              />
              <span>Proximamente</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a className={styles.linkItem}>
              <Search width="24" height="24" fill={isActiveLink('/search')} />
              <span>Buscar</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/downloads">
            <a className={styles.linkItem}>
              <Download
                width="24"
                height="24"
                fill={isActiveLink('/downloads')}
              />
              <span>Descargas</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
