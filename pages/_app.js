import '@/styles/globals.css';
import '@/styles/stars.css';
import VisibilityProvider from '@/context/visibility/provider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <VisibilityProvider>
      <Component {...pageProps} />
    </VisibilityProvider>
  );
};

export default MyApp