import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import HomeIcon from '../icons/HomeIcon';
import SoonIcon from '../icons/SoonIcon';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <li>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a className={styles.linkItem}>
              <HomeIcon
                width="24"
                height="24"
                fill={router.pathname === '/' ? '#fff' : '#686868'}
              />
              <span>Inicio</span>
            </a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/coming-soon" activeClassName={styles.active}>
            <a className={styles.linkItem}>
              <SoonIcon
                width="24"
                height="24"
                fill={router.pathname === '/coming-soon' ? '#fff' : '#686868'}
              />
              <span>Proximamente</span>
            </a>
          </ActiveLink>
        </li>
        <li>
          <Link href="/">
            <a>Buscar</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Descargas</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
