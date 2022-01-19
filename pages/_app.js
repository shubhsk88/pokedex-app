// import App from 'next/app'

import { Provider } from 'react-redux';
import store from '../store';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="max-w-screen-xl mx-auto">
        <Link href="/" passHref>
          <img
            className="mx-auto my-4"
            src="https://fontmeme.com/permalink/200813/f8f73e756aa50df22b90934ed92ecb4e.png"
            alt="pokemon-font"
          />
        </Link>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
