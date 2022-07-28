import '@/styles/globals.css';
import '@/styles/stars.css';
import StarsBackground from '@/components/layout/StarsBackground';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StarsBackground>
      <Component {...pageProps} />
    </StarsBackground>
  );
};

export default MyApp