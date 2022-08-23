import '@/styles/globals.css';
import '@/styles/stars.css';
import VisibilityState from '@/context/visibility/state';

const MyApp = ({ Component, pageProps }) => {
  return (
    <VisibilityState>
      <Component {...pageProps} />
    </VisibilityState>
  );
};

export default MyApp