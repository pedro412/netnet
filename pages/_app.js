import Nav from '../components/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
      <Nav />
    </div>
  );
}

export default MyApp;
