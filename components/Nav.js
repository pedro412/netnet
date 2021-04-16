import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import HomeIcon from '../icons/HomeIcon';
import SoonIcon from '../icons/SoonIcon';
import Search from '../icons/Search';
import Download from '../icons/Download';
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
            <ActiveLink href="/search" activeClassName={styles.active}>
              <a className={styles.linkItem}>
                <Search
                  width="24"
                  height="24"
                  fill={router.pathname === '/search' ? '#fff' : '#686868'}
                />
                <span>Buscar</span>
              </a>
            </ActiveLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <ActiveLink href="/downloads" activeClassName={styles.active}>
              <a className={styles.linkItem}>
                <Download
                  width="24"
                  height="24"
                  fill={router.pathname === '/downloads' ? '#fff' : '#686868'}
                />
                <span>Descargas</span>
              </a>
            </ActiveLink>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
