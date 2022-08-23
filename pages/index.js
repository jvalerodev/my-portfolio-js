import Background from '@/components/layout/Background';
import Layout from '@/components/layout';
import Presentation from '@/components/main/presentation';
import About from '@/components/main/about';
import Services from '@/components/main/services';
import Portfolio from '@/components/main/portfolio';
import Contact from '@/components/main/contact';

const Home = () => {
  return (
    <Background>
      <Layout>
        <Presentation />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Layout>
    </Background>
  );
};

export default Home;