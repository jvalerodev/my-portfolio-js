import Layout from '@/components/layout/Layout';
import Presentation from '@/components/main/Presentation';
import StarsBackground from '@/components/layout/StarsBackground';
import About from '@/components/main/About';
import Services from '@/components/main/Services';

const Home = () => {
  return (
    <StarsBackground>
      <Layout>
        <Presentation />
        <About />
        <Services />
      </Layout>
    </StarsBackground>
  );
};

export default Home;