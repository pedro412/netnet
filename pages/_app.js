import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Nav />
    </div>
  );
}

export default MyApp;
