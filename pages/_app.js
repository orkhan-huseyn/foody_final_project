import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
  return <Component {...pageProps} />;
}

export default MyApp